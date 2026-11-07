import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TeamExpertise from '@/components/sections/TeamExpertise';
import Values from '@/components/sections/Values';
import LetsConnect from '@/components/sections/LetsConnect';
import HowItWorks from '@/components/sections/HowItWorks';
import ContactOptions from '@/components/sections/ContactOptions';
import ContactForm from '@/components/sections/ContactForm';
import Location from '@/components/sections/Location';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import AboutHero from '@/components/sections/AboutHero';
import { aboutContactFaqSchema, contactPageSchema } from '@/lib/structuredData';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata({
    title: 'About and Contact',
    description:
        'About ValinzTech and the contact form for companies. Start an engagement, book a consultation, or request support.',
    path: '/about-contact',
});

export default function AboutContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#050A18]">
            <Header />
            <main id="main-content" className="flex-grow pt-0">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutContactFaqSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
                />
                {/* Authority & Trust Building Half */}
                <div id="about">
                    <AboutHero />
                    <TeamExpertise />
                    <Values />
                </div>
                {/* Contact & Engagement Half */}
                <div id="contact">
                    <LetsConnect />
                    <HowItWorks />
                    <ContactOptions />
                    <ContactForm />
                    <Location />
                    <FAQ />
                    <FinalCTA />
                </div>
            </main>
            <Footer />
        </div>
    );
}
