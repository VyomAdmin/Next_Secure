import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/ai-infra-governance/Hero';
import CorePillars from '@/components/sections/ai-infra-governance/CorePillars';
import ArchitectureLifecycle from '@/components/sections/ai-infra-governance/ArchitectureLifecycle';
import WhyValinzTech from '@/components/sections/ai-infra-governance/WhyValinzTech';
import AIFAQ from '@/components/sections/ai-infra-governance/AIFAQ';
import AIFinalCTA from '@/components/sections/ai-infra-governance/AIFinalCTA';
import { aiInfraServiceSchema } from '@/lib/structuredData';

export const metadata: Metadata = {
    title: 'AI Infra, Build & Governance Services',
    description:
        'Enterprise AI compute sizing, high-throughput model pipeline engineering, and sovereign AI governance, safety guardrails, and compliance (EU AI Act, MeitY, NIST AI RMF).',
    alternates: {
        canonical: '/ai-infra-governance',
    },
};

export default function AIInfraGovernancePage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#050A18]">
            <Header />
            <main className="flex-grow">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(aiInfraServiceSchema) }}
                />
                <Hero />
                <CorePillars />
                <ArchitectureLifecycle />
                <WhyValinzTech />
                <AIFAQ />
                <AIFinalCTA />
            </main>
            <Footer />
        </div>
    );
}

