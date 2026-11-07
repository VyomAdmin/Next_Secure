import React from 'react';
import { Cpu, Code2, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CorePillars = () => {
    const pillars = [
        {
            id: 'infrastructure',
            title: 'AI Infrastructure & Compute',
            tagline: 'High-throughput hardware, GPU orchestration & cost optimization',
            icon: Cpu,
            accentColor: 'text-[#64ffda]',
            borderColor: 'hover:border-[#64ffda]/30',
            bgGlow: 'bg-[#64ffda]/5',
            description:
                'Avoid over-provisioned GPUs and spiraling cloud bills. We design right-sized compute environments across on-premises clusters, hybrid clouds, and bare-metal providers.',
            capabilities: [
                'GPU / TPU cluster topology sizing & multi-node orchestration',
                'vLLM, TensorRT-LLM & Triton high-efficiency inference engines',
                'Quantization (AWQ, GPTQ, FP8) for memory and latency reduction',
                'Secure enclaves & hardware-isolated confidential computing',
                'Auto-scaling inference clusters and cold-start latency mitigation',
                'Hybrid cloud vs. on-premises TCO analysis & workload balancing'
            ]
        },
        {
            id: 'build',
            title: 'Enterprise AI Build & LLMOps',
            tagline: 'Sovereign pipelines, production RAG & custom model engineering',
            icon: Code2,
            accentColor: 'text-blue-400',
            borderColor: 'hover:border-blue-500/30',
            bgGlow: 'bg-blue-500/5',
            description:
                'Transform fragmented prototypes into production-grade systems. We engineer resilient RAG pipelines, fine-tune domain models, and implement continuous model evaluation.',
            capabilities: [
                'Production RAG architecture (hybrid search, re-ranking, chunking)',
                'Domain fine-tuning (LoRA, QLoRA) on proprietary enterprise data',
                'Enterprise vector database deployment (Milvus, Qdrant, Pinecone)',
                'Agentic workflow orchestration with human-in-the-loop controls',
                'Automated CI/CD pipelines for model evaluation and regression testing',
                'Synthetic data generation, cleaning, and dataset sanitization'
            ]
        },
        {
            id: 'governance',
            title: 'AI Governance, Safety & Trust',
            tagline: 'Automated guardrails, regulatory compliance & risk mitigation',
            icon: ShieldAlert,
            accentColor: 'text-indigo-400',
            borderColor: 'hover:border-indigo-500/30',
            bgGlow: 'bg-indigo-500/5',
            description:
                'Empower innovation with airtight boundaries. We build automated guardrails that prevent data leakage, mitigate hallucinations, and ensure total compliance with global mandates.',
            capabilities: [
                'Real-time semantic guardrails (prompt injection & jailbreak defense)',
                'EU AI Act compliance (risk classification, technical documentation)',
                'MeitY AI Advisory guidelines & NIST AI RMF 1.0 alignment',
                'PII anonymization & tokenization before inference execution',
                'Algorithmic bias testing, output fairness & toxicity filtering',
                'Comprehensive audit logs, model explainability & provenance tracking'
            ]
        }
    ];

    return (
        <section id="pillars" className="py-24 md:py-32 bg-[#050A18] relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#64ffda]">
                            Three Unified Pillars
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
                        The Full AI Stack <br className="hidden sm:inline" />
                        <span className="text-slate-400">Built for Enterprise Scale</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        High-performance AI requires more than calling an API. We bridge raw compute infrastructure, software engineering, and institutional governance into a single cohesive strategy.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pillars.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={pillar.id}
                                className={`group flex flex-col justify-between p-8 sm:p-10 rounded-[2.5rem] bg-[#0D1426]/50 border border-white/5 ${pillar.borderColor} transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <div className={`w-16 h-16 ${pillar.bgGlow} border border-white/10 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                                            <Icon className={pillar.accentColor} size={32} />
                                        </div>
                                        <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                            {pillar.id}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-xs font-semibold text-slate-400 mb-6 italic">
                                        {pillar.tagline}
                                    </p>
                                    <p className="text-sm font-medium text-slate-300 leading-relaxed mb-8">
                                        {pillar.description}
                                    </p>

                                    <div className="space-y-3 pt-6 border-t border-white/10">
                                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-4">
                                            Core Capabilities
                                        </h4>
                                        {pillar.capabilities.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 className={`shrink-0 mt-0.5 ${pillar.accentColor}`} size={16} />
                                                <span className="text-xs sm:text-sm font-medium text-slate-300 leading-snug">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-10 mt-8 border-t border-white/5">
                                    <Link
                                        href="/about-contact?intent=booking#contact-form"
                                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#64ffda] transition-colors group/btn"
                                    >
                                        Consult on {pillar.title}
                                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CorePillars;

