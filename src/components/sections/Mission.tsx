import React from 'react';
import { Brain, Shield, ArrowUpRight } from 'lucide-react';

const Mission = () => {
    const missions = [
        {
            icon: Brain,
            title: "We Make Complexity Clear",
            description: "We don't just tell you what to do. We help you understand why it matters. Our clients walk away with both compliance and capability, not just another report to file away."
        },
        {
            icon: Shield,
            title: "We Build Systems That Last",
            description: "Quick fixes don't work for technology governance. We help you build reliable systems and processes that scale with your business and satisfy stakeholders, from customers to regulators to investors."
        },
        {
            icon: ArrowUpRight,
            title: "We Keep You Ahead Of The Curve",
            description: "Regulations evolve. Technology changes. Threats emerge. We help you stay ahead, whether that's India's DPDPA, AI governance frameworks, or the next compliance requirement you haven't heard of yet."
        }
    ];

    return (
        <section id="mission" className="py-24 bg-[#020617] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-10 lg:gap-16 items-start">
                        <div className="text-left">
                            <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-400 mb-6">
                                What Drives Us
                            </p>
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.98] max-w-[6ch]">
                                Why We Do This
                            </h2>
                        </div>

                        <div className="max-w-3xl">
                            <p className="text-lg md:text-[1.35rem] text-slate-400 leading-[1.85] font-medium">
                                Technology moves fast. Regulations move faster. And somewhere in between,
                                businesses are trying to build systems that are secure, compliant, and
                                actually useful.
                            </p>
                            <p className="text-lg md:text-[1.35rem] text-slate-400 leading-[1.85] font-medium mt-6">
                                We started ValinzTech because we saw too many organizations overwhelmed by
                                compliance requirements, drowning in frameworks, checklists, and
                                consultant-speak that didn&apos;t actually help them get safer or more
                                trustworthy.
                            </p>
                            <p className="text-lg md:text-[1.35rem] text-slate-400 leading-[1.85] font-medium mt-6">
                                We believe governance shouldn&apos;t be a burden. It should give you confidence.
                                Confidence that your systems are secure. Confidence that you&apos;re meeting
                                regulations. Confidence that when investors, customers, or auditors come
                                knocking, you&apos;re ready.
                            </p>
                            <p className="text-lg md:text-[1.35rem] text-slate-300 leading-[1.85] font-medium mt-6">
                                That&apos;s what we build: frameworks you can depend on, guidance you can
                                understand, and partnerships that actually feel like partnerships.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {missions.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="flex flex-col min-h-[22rem] bg-white/[0.02] border border-white/5 p-10 md:p-12 rounded-[20px] hover:border-blue-500/20 transition-all text-left">
                                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-10">
                                    <Icon className="text-blue-400" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight uppercase leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-base text-slate-400 font-medium leading-relaxed">
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

export default Mission;
