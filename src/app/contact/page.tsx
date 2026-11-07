import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HowItWorks from '@/components/sections/HowItWorks';
import ContactOptions from '@/components/sections/ContactOptions';
import ContactForm from '@/components/sections/ContactForm';
import Location from '@/components/sections/Location';
import FAQ from '@/components/sections/FAQ';
import { aboutContactFaqSchema } from '@/lib/structuredData';

const description =
    'Direct intake for enterprise DPDPA, cybersecurity, and AI governance consulting: book a consultation, start a conversation, or request support.';

export const metadata: Metadata = {
    title: 'Contact Us',
    description,
    alternates: { canonical: '/contact' },
    openGraph: { title: 'Contact Us | ValinzTech', description, url: '/contact' },
    twitter: { title: 'Contact Us | ValinzTech', description },
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#050A18]">
            <Header />
            <main className="flex-grow pt-24">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutContactFaqSchema) }}
                />
                <h1 className="sr-only">Contact ValinzTech</h1>
                <ContactForm />
                <ContactOptions />
                <HowItWorks />
                <Location />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
