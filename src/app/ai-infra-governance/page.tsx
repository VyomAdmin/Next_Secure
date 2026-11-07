import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/ai-infra-governance/Hero';
import CorePillars from '@/components/sections/ai-infra-governance/CorePillars';
import ArchitectureLifecycle from '@/components/sections/ai-infra-governance/ArchitectureLifecycle';
import WhyValinzTech from '@/components/sections/ai-infra-governance/WhyValinzTech';
import AIFAQ from '@/components/sections/ai-infra-governance/AIFAQ';
import AIFinalCTA from '@/components/sections/ai-infra-governance/AIFinalCTA';
import { aiInfraServiceSchema } from '@/lib/structuredData';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata({
    title: 'AI Infra, Build and Governance',
    description:
        'Consulting and services for companies building AI: compute, pipelines, safety guardrails, and governance aligned to the EU AI Act, MeitY, and NIST AI RMF.',
    path: '/ai-infra-governance',
});

export default function AIInfraGovernancePage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#050A18]">
            <Header />
            <main id="main-content" className="flex-grow">
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

