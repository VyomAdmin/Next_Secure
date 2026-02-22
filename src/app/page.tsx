import React from 'react';
import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'DPDPA & Technology Governance Consulting',
  description:
    'ValinzTech helps organizations with DPDPA readiness, privacy governance, compliance execution, and technology risk operating models.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ValinzTech | DPDPA & Technology Governance Consulting',
    description:
      'DPDPA readiness, privacy governance, compliance execution, and technology risk advisory support.',
    url: '/',
  },
  twitter: {
    title: 'ValinzTech | DPDPA & Technology Governance Consulting',
    description:
      'DPDPA readiness, privacy governance, compliance execution, and technology risk advisory support.',
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ValinzTech",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://valinztech.com",
    email: "contact@valinztech.com",
    telephone: "+91-9953562762",
    areaServed: "IN",
    description:
      "Technology governance, DPDPA readiness, privacy governance, and compliance advisory services.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9953562762",
        contactType: "customer support",
        availableLanguage: ["English"],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#050A18]">
      <Header />
      <main className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
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
