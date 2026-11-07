import { NextResponse } from 'next/server';
import {
    validateCompanyName,
    validatePhoneNumber,
    validateProfessionalEmail,
} from '@/lib/contactValidation';

export const runtime = 'edge';

type ContactPayload = {
    name?: string;
    email?: string;
    company?: string;
    phone?: string;
    requestType?: string;
    message?: string;
};

const REQUEST_TYPE_LABELS: Record<string, string> = {
    conversation: 'Start a Conversation',
    work: 'See the Work / Capability Deck',
    consultation: 'Book a Consultation',
    support: 'Request Support',
};

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as ContactPayload;
        const name = (body.name || '').trim();
        const email = (body.email || '').trim();
        const company = (body.company || '').trim();
        const phone = (body.phone || '').trim();
        const requestType = (body.requestType || 'consultation').trim().toLowerCase();
        const message = (body.message || '').trim();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, work email, and message are required.' },
                { status: 400 }
            );
        }

        const companyError = validateCompanyName(company);
        if (companyError) {
            return NextResponse.json({ error: companyError }, { status: 400 });
        }

        const emailError = validateProfessionalEmail(email);
        if (emailError) {
            return NextResponse.json({ error: emailError }, { status: 400 });
        }

        const phoneError = validatePhoneNumber(phone);
        if (phoneError) {
            return NextResponse.json({ error: phoneError }, { status: 400 });
        }

        const requestTypeLabel = REQUEST_TYPE_LABELS[requestType] || 'Book a Consultation';

        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            return NextResponse.json(
                { error: 'Email service is not configured on the server.' },
                { status: 500 }
            );
        }

        const toEmail = process.env.CONTACT_TO_EMAIL || 'contact@valinztech.com';
        const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

        const text = [
            `New Inquiry: ${requestTypeLabel}`,
            '----------------------------------------',
            `Request Type: ${requestTypeLabel}`,
            `Company: ${company}`,
            `Name: ${name}`,
            `Work Email: ${email}`,
            `Phone: ${phone || 'N/A'}`,
            '',
            'Message:',
            message,
        ].join('\n');

        const html = `
            <h2>New Inquiry: ${requestTypeLabel}</h2>
            <p style="font-size: 15px;"><strong>Request Type:</strong> <span style="background-color: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 4px; font-weight: bold;">${requestTypeLabel}</span></p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Work Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f8fafc; padding: 12px; border-radius: 6px;">${message.replace(/\n/g, '<br/>')}</p>
        `;

        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: fromEmail,
                to: [toEmail],
                reply_to: email,
                subject: `[${requestTypeLabel}] ${company} — ${name}`,
                text,
                html,
            }),
        });

        if (!resendResponse.ok) {
            const errorText = await resendResponse.text();
            return NextResponse.json(
                { error: 'Failed to send email.', details: errorText },
                { status: 502 }
            );
        }

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 });
    }
}
