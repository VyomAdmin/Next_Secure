import React from 'react';
import { AlertCircle, ShieldAlert, Settings } from 'lucide-react';

const Challenge = () => {
    const challenges = [
        {
            icon: AlertCircle,
            title: "Regulatory Complexity",
            description: "Navigating consent requirements, purpose limitation, data minimization, and retention obligations across business operations."
        },
        {
            icon: ShieldAlert,
            title: "Significant Penalties",
            description: "Non-compliance can result in penalties up to ₹250 crores, plus reputational damage and operational disruption."
        },
        {
            icon: Settings,
            title: "Operational Integration",
            description: "Implementing compliant processes without disrupting business operations or customer experience."
        }
    ];

    return (
        <section className="py-24 bg-[#050A18] relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-500/5 blur-[120px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
                        Understanding DPDPA Compliance
                    </h2>
                    <p className="text-xl text-slate-400 leading-relaxed font-medium">
                        DPDPA introduces significant changes to how organizations collect, process, and protect personal data. From consent management to data principal rights, from cross-border transfers to breach notification, the requirements are comprehensive and the penalties substantial.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {challenges.map((challenge, index) => {
                        const Icon = challenge.icon;
                        return (
                            <div
                                key={index}
                                className="group p-10 rounded-[2.5rem] bg-[#0D1426]/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)]"
                            >
                                <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <Icon className="text-indigo-400" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                                    {challenge.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    {challenge.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Challenge;
