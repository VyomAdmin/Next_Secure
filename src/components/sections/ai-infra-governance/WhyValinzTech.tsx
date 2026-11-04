import React from 'react';
import { Lock, Scale, Sparkles, Terminal, FileCode2, Gauge } from 'lucide-react';

const WhyValinzTech = () => {
    const reasons = [
        {
            icon: Terminal,
            title: "Hands-On Engineering, Not Just Slides",
            description: "We don't hand you abstract advisory decks. We write production code, configure GPU drivers, tune inference engines, deploy vector databases, and implement real-time security middleware."
        },
        {
            icon: Lock,
            title: "Zero-Trust & Sovereign AI Boundary",
            description: "Your enterprise intellectual property, proprietary datasets, and prompts never leak to public foundational models or external training pipelines. Total privacy by design."
        },
        {
            icon: Scale,
            title: "Rigorous Regulatory Alignment",
            description: "We translate regulatory complexity (EU AI Act risk tiering, MeitY advisories, NIST AI RMF, ISO 42001) directly into automated engineering gates, compliance manifests, and verifiable controls."
        },
        {
            icon: Gauge,
            title: "Cost & Latency Optimization",
            description: "We benchmark throughput, optimize kv-caching, select the right quantization profiles, and right-size GPU instances to prevent crippling infrastructure over-spend."
        },
        {
            icon: FileCode2,
            title: "Vendor-Neutral Architecture",
            description: "Whether you run on AWS, Azure, Google Cloud, sovereign on-prem hardware (NVIDIA, AMD), or bare-metal clouds, we build portable, containerized architectures free from vendor lock-in."
        },
        {
            icon: Sparkles,
            title: "Capability Building for Your Team",
            description: "We don't cultivate client dependency. Through documentation, runbooks, and hands-on enablement, we empower your internal engineering and compliance teams to own and operate the AI stack."
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-[#050A18] border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#64ffda]">
                            The ValinzTech Difference
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
                        Why Enterprises Trust ValinzTech <br className="hidden sm:inline" />
                        <span className="text-slate-400">For AI Infrastructure & Governance</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Combining deep cloud and ML systems engineering with world-class cybersecurity and regulatory compliance advisory.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={index}
                                className="group p-8 rounded-[2rem] bg-[#0D1426]/30 border border-white/5 hover:border-blue-500/20 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                                    <Icon className="text-[#64ffda]" size={22} />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                                    {reason.title}
                                </h3>
                                <p className="text-sm font-medium text-slate-400 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyValinzTech;

