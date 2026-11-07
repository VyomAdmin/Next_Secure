import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/sections/AboutHero';
import TeamExpertise from '@/components/sections/TeamExpertise';
import Values from '@/components/sections/Values';
import FinalCTA from '@/components/sections/FinalCTA';

const description =
    'ValinzTech company capabilities, operating model, and values for enterprise DPDPA, cybersecurity, and AI governance consulting.';

export const metadata: Metadata = {
    title: 'About Us',
    description,
    alternates: { canonical: '/about' },
    openGraph: { title: 'About Us | ValinzTech', description, url: '/about' },
    twitter: { title: 'About Us | ValinzTech', description },
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#050A18]">
            <Header />
            <main className="flex-grow pt-0">
                <AboutHero />
                <TeamExpertise />
                <Values />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
}
