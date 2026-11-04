import React from 'react';
import { Search, Server, ShieldCheck, Activity } from 'lucide-react';

const ArchitectureLifecycle = () => {
    const phases = [
        {
            number: "PHASE 01",
            title: "ASSESSMENT & COMPUTE SIZING",
            duration: "Weeks 1 - 2",
            description: "Deep dive into model requirements, token velocity, latency thresholds, and regulatory categorization to architect the optimal infrastructure footprint.",
            deliverables: [
                "Infrastructure TCO & GPU sizing blueprint",
                "Data pipeline and latency benchmark report",
                "Regulatory & risk tier classification (EU AI Act / MeitY)",
                "Security & IP perimeter assessment"
            ],
            icon: Search
        },
        {
            number: "PHASE 02",
            title: "PIPELINE ENGINEERING & MODEL BUILD",
            duration: "Weeks 2 - 5",
            description: "Hands-on engineering of compute clusters, data vectorization, hybrid retrieval pipelines, and custom model adaptations within your sovereign environment.",
            deliverables: [
                "Configured GPU clusters & inference engines (vLLM/Triton)",
                "Production RAG architecture with vector database integration",
                "Fine-tuned domain adapters (LoRA/QLoRA) if required",
                "Data ingestion & sanitization pipelines"
            ],
            icon: Server
        },
        {
            number: "PHASE 03",
            title: "GUARDRAILS & SAFETY AUDITING",
            duration: "Weeks 5 - 7",
            description: "Embedding automated real-time semantic guardrails, adversarial prompt defense, PII masking, and independent compliance verification.",
            deliverables: [
                "Active prompt injection & jailbreak firewalls",
                "PII tokenization and differential privacy gates",
                "Red-teaming and adversarial robustness scorecard",
                "Formal AI Governance & compliance documentation suite"
            ],
            icon: ShieldCheck
        },
        {
            number: "PHASE 04",
            title: "PRODUCTION LLMOPS & ASSURANCE",
            duration: "Weeks 7+ (Ongoing)",
            description: "Operationalizing CI/CD for models, real-time drift detection, latency monitoring, and ongoing compliance advisory.",
            deliverables: [
                "Production observability dashboard (latency, tokens, drift)",
                "Automated regression testing for model releases",
                "Incident response playbooks for model anomalies",
                "Periodic governance and regulatory audit updates"
            ],
            icon: Activity
        }
    ];

    return (
        <section id="methodology" className="py-24 md:py-32 bg-[#020617] border-t border-white/5 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#64ffda]/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#64ffda]">
                            Execution Roadmap
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
                        Our 4-Phase AI Engineering <br className="hidden sm:inline" />
                        <span className="text-slate-400">& Governance Lifecycle</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        A systematic, engineering-first engagement model that guarantees low-latency performance, strict security, and continuous regulatory compliance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {phases.map((phase) => {
                        const Icon = phase.icon;
                        return (
                            <div
                                key={phase.number}
                                className="group p-8 sm:p-10 rounded-[2.5rem] bg-[#0D1426]/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                            <Icon className="text-[#64ffda]" size={26} />
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#64ffda] block">
                                                {phase.number}
                                            </span>
                                            <span className="text-[11px] font-bold text-slate-400">
                                                {phase.duration}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-black text-white mb-4 tracking-tight">
                                        {phase.title}
                                    </h3>
                                    <p className="text-sm font-medium text-slate-300 leading-relaxed mb-8">
                                        {phase.description}
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-white/5">
                                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-3">
                                        Key Deliverables
                                    </h4>
                                    <ul className="space-y-2.5">
                                        {phase.deliverables.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda] mt-2 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ArchitectureLifecycle;

