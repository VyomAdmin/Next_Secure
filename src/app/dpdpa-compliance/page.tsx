import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/dpdpa-compliance/Hero';
import Challenge from '@/components/sections/dpdpa-compliance/Challenge';
import Methodology from '@/components/sections/dpdpa-compliance/Methodology';
import Coverage from '@/components/sections/dpdpa-compliance/Coverage';
import WhyDPDPA from '@/components/sections/dpdpa-compliance/WhyDPDPA';
import WhoNeedsDPDPA from '@/components/sections/dpdpa-compliance/WhoNeedsDPDPA';
import DPDPAFAQ from '@/components/sections/dpdpa-compliance/DPDPAFAQ';
import DPDPAFinalCTA from '@/components/sections/dpdpa-compliance/DPDPAFinalCTA';
import { dpdpaServiceSchema } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: 'DPDPA Compliance Services | ValinzTech',
  description:
    'Comprehensive DPDPA 2023 compliance services. We help organizations build sustainable privacy governance frameworks for India\'s data protection requirements.',
  alternates: {
    canonical: '/dpdpa-compliance',
  },
};

export default function DPDPACompliancePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050A18]">
      <Header />
      <main className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dpdpaServiceSchema) }}
        />
        <Hero />
        <Challenge />
        <Methodology />
        <Coverage />
        <WhyDPDPA />
        <WhoNeedsDPDPA />
        <DPDPAFAQ />
        <DPDPAFinalCTA />
      </main>
      <Footer />
    </div>
  );
}
