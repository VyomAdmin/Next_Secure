import { NextResponse } from 'next/server';
import { validatePhoneNumber, validateProfessionalEmail } from '@/lib/contactValidation';
import { inquiryIntentLabel, isInquiryIntent, type InquiryIntent } from '@/lib/inquiry';

export const runtime = 'edge';

type ContactPayload = {
    name?: string;
    email?: string;
    company?: string;
    phone?: string;
    message?: string;
    intent?: string;
};

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function oneLine(value: string, maxLength: number): string {
    return value.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, maxLength);
}

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as ContactPayload;
        const name = (body.name || '').trim();
        const email = (body.email || '').trim();
        const company = (body.company || '').trim();
        const phone = (body.phone || '').trim();
        const message = (body.message || '').trim();
        const intent: InquiryIntent = isInquiryIntent(body.intent) ? body.intent : 'lead';

        if (!name || !email || !company || !message) {
            return NextResponse.json(
                { error: 'Name, work email, company, and message are required.' },
                { status: 400 }
            );
        }

        const emailError = validateProfessionalEmail(email);
        if (emailError) {
            return NextResponse.json({ error: emailError }, { status: 400 });
        }

        const phoneError = validatePhoneNumber(phone);
        if (phoneError) {
            return NextResponse.json({ error: phoneError }, { status: 400 });
        }

        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            return NextResponse.json(
                { error: 'Email service is not configured on the server.' },
                { status: 500 }
            );
        }

        const toEmail = process.env.CONTACT_TO_EMAIL || 'contact@valinztech.com';
        const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
        const intentLabel = inquiryIntentLabel(intent);
        const subject = `[${intentLabel}] ${oneLine(company, 80)} — ${oneLine(name, 80)}`;

        const text = [
            'New website inquiry',
            '',
            `Request type: ${intentLabel}`,
            `Name: ${name}`,
            `Email: ${email}`,
            `Company: ${company}`,
            `Phone: ${phone || 'N/A'}`,
            '',
            'Message:',
            message,
        ].join('\n');

        const html = `
            <h2>New website inquiry</h2>
            <p><strong>Request type:</strong> ${escapeHtml(intentLabel)}</p>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Company:</strong> ${escapeHtml(company)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone || 'N/A')}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
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
                subject,
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
