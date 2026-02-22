import React from 'react';
import { Brain, Boxes, Network } from 'lucide-react';

const Differentiation = () => {
    const diffs = [
        {
            title: "Understanding Drives Results",
            description: "We help you understand the 'why' behind requirements, not just the 'what.' Our clients gain both compliance and capability—reducing dependency while building internal expertise.",
            icon: Brain
        },
        {
            title: "Systematic Frameworks, Not Checklists",
            description: "We establish governance structures that bring order to complexity. Our methodologies create sustainable systems that evolve with your organization and regulatory landscape.",
            icon: Boxes
        },
        {
            title: "Holistic Governance Approach",
            description: "We see connections others miss. Privacy, security, AI, and compliance aren't isolated domains—we integrate them into cohesive governance that reduces real business risk.",
            icon: Network
        }
    ];

    return (
        <section className="py-24 bg-[#0D1426] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-block px-4 py-1 border border-blue-500/20 rounded-full bg-blue-900/10 mb-6">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">The ValinzTech Difference</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                        Intelligence Induced Into Every Engagement
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                        We don&apos;t just implement compliance—we build the frameworks your organization will depend on.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {diffs.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="bg-[#020617]/50 border border-white/5 p-8 md:p-10 rounded-[2rem] hover:border-blue-500/20 transition-all">
                                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Icon className="text-blue-400" size={28} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Differentiation;
