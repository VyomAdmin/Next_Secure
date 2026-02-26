import React from 'react';
import { Search, Layers, Rocket, Shield } from 'lucide-react';

const Approach = () => {
    const phases = [
        {
            number: "01",
            icon: Search,
            title: "ASSESS",
            description: "Comprehensive evaluation of your current technology governance maturity and compliance gaps."
        },
        {
            number: "02",
            icon: Layers,
            title: "ARCHITECT",
            description: "Design tailored governance frameworks aligned with your business objectives and regulatory requirements."
        },
        {
            number: "03",
            icon: Rocket,
            title: "IMPLEMENT",
            description: "Execute the governance strategy with structured implementation and stakeholder enablement."
        },
        {
            number: "04",
            icon: Shield,
            title: "ASSURE",
            description: "Continuous monitoring and assurance to maintain compliance and adapt to evolving requirements."
        }
    ];

    return (
        <section id="methodology" className="py-24 bg-[#020617] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
                        Our Approach
                    </h2>
                    <p className="text-xl text-slate-400 leading-relaxed font-medium">
                        A systematic, four-phase governance framework designed for enterprise technology ecosystems.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Connection Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0"></div>

                    <div className="space-y-16 relative">
                        {phases.map((phase, index) => {
                            const Icon = phase.icon;
                            const isEven = index % 2 !== 0;
                            return (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row items-center md:items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-6 md:gap-0`}
                                >
                                    {/* Number Circle */}
                                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#0D1426] border border-blue-500/30 z-20 shadow-2xl flex-shrink-0">
                                        <span className="text-blue-400 font-bold text-lg tracking-tighter">{phase.number}</span>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[42%] ${isEven ? 'md:text-left md:ml-12' : 'md:text-right md:mr-12'}`}>
                                        <div className="bg-[#0D1426]/50 border border-white/5 p-10 rounded-[2.5rem] hover:border-blue-500/20 transition-all">
                                            <div className={`flex items-center gap-4 mb-6 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                                                    <Icon className="text-blue-400" size={24} />
                                                </div>
                                                <h3 className="text-2xl font-bold text-white tracking-tight uppercase">
                                                    {phase.title}
                                                </h3>
                                            </div>
                                            <p className="text-base text-slate-400 leading-relaxed font-medium">
                                                {phase.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Approach;
