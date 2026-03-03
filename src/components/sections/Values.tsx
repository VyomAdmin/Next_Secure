import React from 'react';
import { Heart, Eye, Handshake, Zap } from 'lucide-react';

const Values = () => {
    const values = [
        {
            icon: Heart,
            title: "Integrity",
            description: "Unwavering commitment to ethical practices."
        },
        {
            icon: Eye,
            title: "Excellence",
            description: "Pursuit of the highest standards in everything we deliver."
        },
        {
            icon: Handshake,
            title: "Partnership",
            description: "Collaborative approach that treats your success as our mission."
        },
        {
            icon: Zap,
            title: "Innovation",
            description: "Continuous improvement and adoption of best practices."
        }
    ];

    return (
        <section className="py-24 bg-[#050A18]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Our Values
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                        The core principles that guide our governance frameworks and define our client partnerships.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="group h-full bg-[#0D1426]/50 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-blue-500/20 transition-all duration-500 flex flex-col md:flex-row items-center gap-6 md:gap-10"
                            >
                                <div className="w-12 h-12 bg-blue-500/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 transition-colors">
                                    <Icon className="w-6 h-6 text-blue-400/70" />
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                                        {value.title}
                                    </h3>
                                    <p className="text-slate-400 text-base font-medium leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Values;
