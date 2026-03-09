import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServiceCategories from '@/components/sections/services/ServiceCategories';
import IntegratedGovernance from '@/components/sections/services/IntegratedGovernance';
import EngagementModels from '@/components/sections/services/EngagementModels';
import ServicesFinalCTA from '@/components/sections/services/ServicesFinalCTA';
import { servicesSchema } from '@/lib/structuredData';

export const metadata: Metadata = {
    title: 'Comprehensive Services | ValinzTech',
    description:
        'Intelligence-driven consulting across cybersecurity, privacy, AI governance, and compliance. ValinzTech builds frameworks that bring order to complexity.',
    alternates: {
        canonical: '/services',
    },
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#050A18]">
            <Header />
            <main className="flex-grow">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
                />
                <ServicesHero />
                <ServiceCategories />
                <IntegratedGovernance />
                <EngagementModels />
                <ServicesFinalCTA />
            </main>
            <Footer />
        </div>
    );
}
