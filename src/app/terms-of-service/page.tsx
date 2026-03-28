import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description:
        'Terms of Service for ValinzTech covering acceptable use, intellectual property, disclaimers, and limitations of liability.',
    alternates: {
        canonical: '/terms-of-service',
    },
};

const sections = [
    {
        title: 'Acceptance Of Terms',
        paragraphs: [
            'By accessing or using the ValinzTech website, you agree to be bound by these Terms of Service and any applicable laws. If you do not agree, you should discontinue use of the site.',
            'These Terms govern website use only unless a separate written agreement applies to a consulting engagement, statement of work, or other service relationship.',
        ],
    },
    {
        title: 'Permitted Use',
        paragraphs: [
            'You may use this website for lawful business and informational purposes. You agree not to misuse the site, interfere with its operation, attempt unauthorized access, or submit malicious code, spam, or misleading information.',
            'We may suspend or restrict access where necessary to protect the site, our users, or our business interests.',
        ],
    },
    {
        title: 'Intellectual Property',
        paragraphs: [
            'Unless otherwise stated, the website content, branding, text, graphics, and materials on this site are owned by or licensed to ValinzTech and are protected by applicable intellectual property laws.',
            'You may not reproduce, distribute, modify, republish, or create derivative works from our website content without prior written permission, except for reasonable internal reference or other uses allowed by law.',
        ],
    },
    {
        title: 'No Professional Reliance',
        paragraphs: [
            'Website content is provided for general informational purposes and does not constitute legal advice, regulatory advice, or a binding consulting commitment. Formal advice is provided only through an executed engagement with defined scope and terms.',
            'You are responsible for evaluating whether the content is appropriate for your circumstances before relying on it.',
        ],
    },
    {
        title: 'Disclaimers And Liability',
        paragraphs: [
            'The website is provided on an as-is and as-available basis. We do not guarantee uninterrupted availability, complete accuracy, or suitability for any particular purpose.',
            'To the maximum extent permitted by law, ValinzTech will not be liable for indirect, incidental, special, consequential, or punitive damages arising from website use. Our aggregate liability relating to website use will be limited to the extent permitted under applicable law.',
        ],
    },
    {
        title: 'Governing Law And Contact',
        paragraphs: [
            'These Terms are governed by applicable laws of India, without regard to conflict-of-law principles, unless another governing framework is required by law or agreed in writing for a specific engagement.',
            'Questions about these Terms can be sent to contact@valinztech.com. We may update these Terms from time to time, and the revised version will be posted on this page with the latest effective date.',
        ],
    },
];

export default function TermsOfServicePage() {
    return (
        <LegalPageLayout
            eyebrow="Legal"
            title="Terms of Service"
            intro="These Terms of Service describe the rules that apply when you access or use the ValinzTech website and publicly available materials."
            lastUpdated="March 29, 2026"
            sections={sections}
        />
    );
}
