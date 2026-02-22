import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import DPDPASpotlight from '@/components/sections/DPDPASpotlight';
import CoreServices from '@/components/sections/CoreServices';
import Differentiation from '@/components/sections/Differentiation';
import Audience from '@/components/sections/Audience';
import TrustCredibility from '@/components/sections/TrustCredibility';
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
        <CoreServices />
        <Differentiation />
        <Audience />
        <TrustCredibility />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
