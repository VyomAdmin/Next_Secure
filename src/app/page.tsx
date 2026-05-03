import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroCarousel from '@/components/sections/HeroCarousel';
import CoreServices from '@/components/sections/CoreServices';
import Differentiation from '@/components/sections/Differentiation';
import Audience from '@/components/sections/Audience';
import FinalCTA from '@/components/sections/FinalCTA';
import EngagementModels from '@/components/sections/services/EngagementModels';
import { organizationSchema } from '@/lib/structuredData';

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
  return (
    <div className="flex flex-col min-h-screen bg-[#050A18]">
      <Header />
      <main className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <HeroCarousel />
        <CoreServices />
        <EngagementModels />
        <Differentiation />
        <Audience />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
