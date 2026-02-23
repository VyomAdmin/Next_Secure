import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Mission from '@/components/sections/Mission';
import Approach from '@/components/sections/Approach';
import TeamExpertise from '@/components/sections/TeamExpertise';
import Values from '@/components/sections/Values';
import SectionDivider from '@/components/sections/SectionDivider';
import LetsConnect from '@/components/sections/LetsConnect';
import HowItWorks from '@/components/sections/HowItWorks';
import ContactOptions from '@/components/sections/ContactOptions';
import ContactForm from '@/components/sections/ContactForm';
import Location from '@/components/sections/Location';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import StickyMobileCTA from '@/components/ui/StickyMobileCTA';
import AboutHero from '@/components/sections/AboutHero';

export const metadata: Metadata = {
    title: 'About & Contact',
    description: 'ValinzTech company capabilities, operating model, and contact information for DPDPA and technology governance consulting.',
    alternates: {
        canonical: '/about-contact',
    },
    openGraph: {
        title: 'About & Contact | ValinzTech',
        description: 'Company capabilities, delivery model, and direct contact information for DPDPA and technology governance consulting.',
        url: '/about-contact',
    },
    twitter: {
        title: 'About & Contact | ValinzTech',
        description: 'Company capabilities, delivery model, and direct contact information for DPDPA and technology governance consulting.',
    },
};

export default function AboutContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#050A18]">
            <Header />
            <main className="flex-grow pt-0">
                {/* Authority & Trust Building Half */}
                <div id="about">
                    <AboutHero />
                    <Mission />
                    <Approach />
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
            <StickyMobileCTA />
        </div>
    );
}
