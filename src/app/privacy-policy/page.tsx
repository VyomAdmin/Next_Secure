import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description:
        'Privacy Policy for ValinzTech covering information collection, use, disclosure, retention, and contact details.',
    alternates: {
        canonical: '/privacy-policy',
    },
};

const sections = [
    {
        title: 'Information We Collect',
        paragraphs: [
            'We may collect information that you provide directly to us, including your name, email address, phone number, company name, and any details you share through our contact forms, email, phone, or consultation requests.',
            'We may also collect limited technical information when you use our website, such as browser type, device information, referral data, and basic usage analytics needed to operate, secure, and improve the site.',
        ],
    },
    {
        title: 'How We Use Information',
        paragraphs: [
            'We use information to respond to enquiries, schedule consultations, deliver requested services, maintain client communications, improve our website experience, and protect the security and integrity of our systems.',
            'Where appropriate, we may also use contact details to share relevant updates about our services, insights, or events. You can request that we stop these communications at any time.',
        ],
    },
    {
        title: 'Legal Basis And Disclosure',
        paragraphs: [
            'We process information where it is necessary for legitimate business purposes, to take steps at your request before entering into an engagement, to perform contractual obligations, to comply with legal requirements, or where you have provided consent.',
            'We do not sell personal information. We may share information with trusted service providers who support website hosting, communications, analytics, or operational delivery, and only to the extent reasonably necessary for those purposes.',
        ],
    },
    {
        title: 'Retention And Security',
        paragraphs: [
            'We retain information only for as long as necessary to fulfill the purpose for which it was collected, comply with applicable law, resolve disputes, and maintain appropriate business records.',
            'We apply reasonable administrative, technical, and organizational safeguards designed to protect personal information from unauthorized access, disclosure, alteration, or destruction. No system can be guaranteed completely secure, but we work to maintain proportionate controls.',
        ],
    },
    {
        title: 'Your Choices And Rights',
        paragraphs: [
            'Depending on the laws that apply to you, you may have rights to request access, correction, deletion, restriction, or portability of your personal information, or to object to certain processing activities.',
            'To make a privacy-related request, contact us at contact@valinztech.com. We may need to verify your identity before responding.',
        ],
    },
    {
        title: 'Contact Us',
        paragraphs: [
            'If you have questions about this Privacy Policy or our data handling practices, you can contact ValinzTech at contact@valinztech.com or call +91 99535 62762.',
            'We may update this Privacy Policy from time to time. Material changes will be reflected on this page together with the updated revision date.',
        ],
    },
];

export default function PrivacyPolicyPage() {
    return (
        <LegalPageLayout
            eyebrow="Legal"
            title="Privacy Policy"
            intro="This Privacy Policy explains how ValinzTech collects, uses, stores, and safeguards information when you interact with our website, request services, or communicate with our team."
            lastUpdated="March 29, 2026"
            sections={sections}
        />
    );
}
