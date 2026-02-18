import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/sections/AboutHero';
import Mission from '@/components/sections/Mission';
import Approach from '@/components/sections/Approach';
import TeamExpertise from '@/components/sections/TeamExpertise';
import Values from '@/components/sections/Values';
import Differentiation from '@/components/sections/Differentiation';
import SectionDivider from '@/components/sections/SectionDivider';
import LetsConnect from '@/components/sections/LetsConnect';
import HowItWorks from '@/components/sections/HowItWorks';
import ContactOptions from '@/components/sections/ContactOptions';
import ContactForm from '@/components/sections/ContactForm';
import Location from '@/components/sections/Location';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import StickyMobileCTA from '@/components/ui/StickyMobileCTA';

export const metadata = {
    title: 'About & Contact | ValinzTech',
    description: 'Learn about ValinzTech methodology, team expertise, and connect with our governance experts.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#050A18]">
            <Header />
            <main className="flex-grow pt-0">
                {/* AUTHORITY & TRUST BUILDING HALF */}
                <div id="about-hero">
                    <AboutHero />
                </div>

                <div id="mission">
                    <Mission />
                </div>

                <div id="approach">
                    <Approach />
                </div>

                <div id="expertise">
                    <TeamExpertise />
                </div>

                <div id="values">
                    <Values />
                </div>

                <div id="why-valinz">
                    <Differentiation />
                </div>

                {/* Subtle Divider / Design Break */}
                <SectionDivider />

                {/* CONTACT & ENGAGEMENT HALF */}
                <div id="contact" className="scroll-mt-24">
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
            <StickyMobileCTA />
        </div>
    );
}
