export const INQUIRY_INTENTS = [
    {
        id: 'lead',
        label: 'New engagement',
        shortLabel: 'Start a conversation',
        description: 'Tell us about a consulting or services need for your company.',
        messagePlaceholder: 'What should we help your company with?',
    },
    {
        id: 'booking',
        label: 'Book a consultation',
        shortLabel: 'Book a consultation',
        description: 'Request a time to talk. Include any timing that works for your team.',
        messagePlaceholder: 'What would you like to cover, and when can your team meet?',
    },
    {
        id: 'support',
        label: 'Customer support',
        shortLabel: 'Get support',
        description: 'Already working with ValinzTech? Tell us what you need help with.',
        messagePlaceholder: 'What do you need help with on the current engagement?',
    },
] as const;

export type InquiryIntent = (typeof INQUIRY_INTENTS)[number]['id'];

export function isInquiryIntent(value: string | null | undefined): value is InquiryIntent {
    return INQUIRY_INTENTS.some((intent) => intent.id === value);
}

export function inquiryIntentLabel(intent: InquiryIntent): string {
    return INQUIRY_INTENTS.find((item) => item.id === intent)?.label ?? 'New engagement';
}

export function contactHref(intent: InquiryIntent): string {
    return `/about-contact?intent=${intent}#contact-form`;
}
