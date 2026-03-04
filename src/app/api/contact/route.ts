import { NextResponse } from 'next/server';

type ContactPayload = {
    name?: string;
    email?: string;
    company?: string;
    phone?: string;
    message?: string;
};

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as ContactPayload;
        const name = (body.name || '').trim();
        const email = (body.email || '').trim();
        const company = (body.company || '').trim();
        const phone = (body.phone || '').trim();
        const message = (body.message || '').trim();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        if (!isValidEmail(email)) {
            return NextResponse.json({ error: 'Please provide a valid email.' }, { status: 400 });
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

        const text = [
            'New website inquiry',
            '',
            `Name: ${name}`,
            `Email: ${email}`,
            `Company: ${company || 'N/A'}`,
            `Phone: ${phone || 'N/A'}`,
            '',
            'Message:',
            message,
        ].join('\n');

        const html = `
            <h2>New website inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br/>')}</p>
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
                subject: `Website Inquiry from ${name}`,
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
