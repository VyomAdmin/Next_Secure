import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroCarousel from '@/components/sections/HeroCarousel';
import WorkWithUs from '@/components/sections/WorkWithUs';
import CoreServices from '@/components/sections/CoreServices';
import Differentiation from '@/components/sections/Differentiation';
import Audience from '@/components/sections/Audience';
import FinalCTA from '@/components/sections/FinalCTA';
import EngagementModels from '@/components/sections/services/EngagementModels';
import { organizationSchema, professionalServiceSchema, websiteSchema } from '@/lib/structuredData';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = {
  ...pageMetadata({
    title: 'Consulting and Services for Companies',
    description:
      'ValinzTech helps companies with consulting and services across privacy, cybersecurity, AI governance, and compliance. Review the work, book a consultation, or request support.',
    path: '/',
  }),
  // The root layout template does not apply to the root page.
  title: {
    absolute: 'Consulting and Services for Companies | ValinzTech',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050A18]">
      <Header />
      <main id="main-content" className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <HeroCarousel />
        <WorkWithUs />
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
