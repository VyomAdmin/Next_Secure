import React from 'react';
import Button from '@/components/ui/Button';

const models = [
    {
        title: "PROJECT-BASED",
        description: "Defined scope, fixed deliverables, clear timeline",
        bestFor: [
            "Specific assessments or audits",
            "Compliance certification projects",
            "Framework implementation",
            "One-time technical evaluations"
        ],
        duration: "2-12 weeks"
    },
    {
        title: "RETAINER-BASED",
        description: "Ongoing advisory, continuous monitoring, priority access",
        bestFor: [
            "Continuous compliance assurance",
            "Regular risk assessments",
            "Advisory on evolving requirements",
            "Multiple concurrent initiatives"
        ],
        duration: "6-12 months",
        popular: true
    },
    {
        title: "HYBRID",
        description: "Combination of project work and ongoing support",
        bestFor: [
            "Initial implementation + ongoing monitoring",
            "Multi-phase programs",
            "Framework development + training",
            "Certification + maintenance"
        ],
        duration: "Custom structure"
    }
];

const EngagementModels = () => {
    return (
        <section className="py-24 bg-[#050A18]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
                        Flexible Engagement Models
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mb-16">
                    {models.map((model, index) => (
                        <div
                            key={index}
                            className={`flex flex-col p-10 rounded-[3rem] border transition-all duration-500 relative ${model.popular ? 'border-blue-500/30 bg-[#0D1426]/80 ring-1 ring-blue-500/10' : 'border-white/5 bg-[#0D1426]/30'}`}
                        >
                            {model.popular && (
                                <div className="absolute top-0 right-10 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] py-2 px-4 rounded-full">
                                    Most Flexible
                                </div>
                            )}
                            <h3 className="text-xl font-black text-white mb-3 tracking-widest uppercase">{model.title}</h3>
                            <p className="text-slate-500 text-sm font-medium mb-8 italic">{model.description}</p>

                            <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-4">Best for:</p>
                            <ul className="space-y-3 flex-grow mb-10">
                                {model.bestFor.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2 flex-shrink-0"></div>
                                        <span className="text-sm text-slate-300 font-medium leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-white/5">
                                <span className="text-[10px] font-black text-blue-400/70 uppercase tracking-widest">
                                    Typical: {model.duration}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        variant="primary"
                        href="#contact"
                        className="bg-blue-600 hover:bg-blue-500 text-white border-none py-4 px-10 rounded-full font-bold"
                    >
                        Discuss Best Fit
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default EngagementModels;
