import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroCarousel from '@/components/sections/HeroCarousel';
import HomeFourPaths from '@/components/sections/HomeFourPaths';
import CoreServices from '@/components/sections/CoreServices';
import Differentiation from '@/components/sections/Differentiation';
import Audience from '@/components/sections/Audience';
import FinalCTA from '@/components/sections/FinalCTA';
import EngagementModels from '@/components/sections/services/EngagementModels';
import { organizationSchema, websiteSchema } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: { absolute: 'ValinzTech | Enterprise Technology, Cybersecurity & AI Governance' },
  description:
    'ValinzTech delivers intelligence-driven technology governance, sovereign AI infrastructure, DPDPA 2023 compliance execution, and cybersecurity risk advisory.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ValinzTech | Enterprise Technology, Cybersecurity & AI Governance',
    description:
      'Intelligence-driven technology governance, sovereign AI infrastructure, DPDPA readiness, and risk advisory support.',
    url: '/',
  },
  twitter: {
    title: 'ValinzTech | Enterprise Technology, Cybersecurity & AI Governance',
    description:
      'Intelligence-driven technology governance, sovereign AI infrastructure, DPDPA readiness, and risk advisory support.',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050A18]">
      <Header />
      <main className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
        <HeroCarousel />
        <HomeFourPaths />
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
