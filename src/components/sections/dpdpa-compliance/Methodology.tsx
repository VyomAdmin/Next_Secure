import React from 'react';
import { Search, Layers, Rocket, ShieldCheck } from 'lucide-react';

const Methodology = () => {
    const phases = [
        {
            number: "PHASE 1",
            title: "READINESS ASSESSMENT",
            duration: "Week 1-2",
            description: "Comprehensive analysis of current data practices, gap identification against DPDPA requirements, and risk prioritization.",
            deliverables: [
                "Gap assessment report",
                "Data inventory and flow mapping",
                "Readiness scorecard"
            ],
            icon: Search
        },
        {
            number: "PHASE 2",
            title: "FRAMEWORK DESIGN",
            duration: "Week 2-4",
            description: "Design of tailored governance frameworks including consent management, data principal rights, security controls, and accountability measures.",
            deliverables: [
                "Privacy governance framework",
                "Policy and procedure templates",
                "Consent management design",
                "Data subject rights workflow",
                "Cross-border transfer mechanisms"
            ],
            icon: Layers
        },
        {
            number: "PHASE 3",
            title: "IMPLEMENTATION",
            duration: "Week 4-8",
            description: "Systematic deployment of frameworks including process integration, technical controls, documentation, and team training.",
            deliverables: [
                "Implemented privacy controls",
                "Documentation suite (policies, notices, agreements)",
                "Training materials and sessions",
                "Technical implementation support",
                "Vendor Compliance templates"
            ],
            icon: Rocket
        },
        {
            number: "PHASE 4",
            title: "VALIDATION & ASSURANCE",
            duration: "Week 8-10",
            description: "Testing, validation, and continuous monitoring to ensure ongoing compliance as regulations evolve.",
            deliverables: [
                "Compliance validation report",
                "Monitoring and reporting framework",
                "Incident response procedures",
                "Ongoing support plan",
                "Executive summary for stakeholders"
            ],
            icon: ShieldCheck
        }
    ];

    return (
        <section className="py-24 bg-[#020617] border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase font-sans">
                        Intelligence-Driven DPDPA Implementation
                    </h2>
                    <p className="text-xl text-indigo-200/60 leading-relaxed font-bold tracking-wide font-sans">
                        We don&apos;t just help you comply, we help you understand and build systems you can sustain.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto space-y-12">
                    {phases.map((phase, index) => {
                        const Icon = phase.icon;
                        return (
                            <div
                                key={index}
                                className="relative flex flex-col md:flex-row gap-8 items-start p-10 md:p-12 rounded-[3rem] bg-[#0D1426]/30 border border-white/5 hover:border-indigo-500/20 transition-all duration-500"
                            >
                                <div className="flex-shrink-0 flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-4">
                                        <Icon style={{ color: '#64ffda' }} size={36} />
                                    </div>
                                    <span className="text-[10px] font-black tracking-[0.2em] mb-1" style={{ color: '#64ffda' }}>{phase.number}</span>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase">{phase.duration}</span>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight uppercase">
                                        {phase.title}
                                    </h3>
                                    <p className="text-lg text-slate-400 mb-8 max-w-3xl leading-relaxed font-medium">
                                        {phase.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {phase.deliverables.map((item, dIndex) => (
                                            <div key={dIndex} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm font-medium text-slate-300">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {index < phases.length - 1 && (
                                    <div className="hidden md:block absolute left-[70px] bottom-[-48px] w-[1px] h-12 bg-gradient-to-b from-indigo-500/30 to-transparent"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Methodology;
