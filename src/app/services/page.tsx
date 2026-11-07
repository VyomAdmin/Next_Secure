import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServiceCategories from '@/components/sections/services/ServiceCategories';
import CorePillars from '@/components/sections/ai-infra-governance/CorePillars';
import IntegratedGovernance from '@/components/sections/services/IntegratedGovernance';
import EngagementModels from '@/components/sections/services/EngagementModels';
import ServicesFinalCTA from '@/components/sections/services/ServicesFinalCTA';
import { servicesSchema } from '@/lib/structuredData';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata({
    title: 'Consulting and Services',
    description:
        'Consulting and services for companies: cybersecurity, privacy, DPDPA, AI governance, audits, and training. See the work, then contact the team.',
    path: '/services',
});

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#050A18]">
            <Header />
            <main id="main-content" className="flex-grow">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
                />
                <ServicesHero />
                <ServiceCategories />
                <CorePillars />
                <IntegratedGovernance />
                <EngagementModels />
                <ServicesFinalCTA />
            </main>
            <Footer />
        </div>
    );
}
