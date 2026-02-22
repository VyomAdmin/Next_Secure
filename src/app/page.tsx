import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';
import Approach from '@/components/sections/Approach';
import TeamExpertise from '@/components/sections/TeamExpertise';
import Values from '@/components/sections/Values';
import DPDPASpotlight from '@/components/sections/DPDPASpotlight';
import SectionDivider from '@/components/sections/SectionDivider';
import LetsConnect from '@/components/sections/LetsConnect';
import HowItWorks from '@/components/sections/HowItWorks';
import ContactOptions from '@/components/sections/ContactOptions';
import ContactForm from '@/components/sections/ContactForm';
import Location from '@/components/sections/Location';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050A18]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <DPDPASpotlight />

        {/* Authority & Trust Building Half */}
        <div id="about">
          <Mission />
          <Approach />
          <TeamExpertise />
          <Values />
        </div>

        <SectionDivider />

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
