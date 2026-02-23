import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const Mission = () => {
    const missions = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To empower organizations with Intelligence-Driven Technology Governance frameworks that build trust and ensure compliance."
        },
        {
            icon: Users,
            title: "Our Vision",
            description: "A world where technology governance is proactive, intelligent, and seamlessly integrated into every organization's DNA."
        },
        {
            icon: Lightbulb,
            title: "Our Purpose",
            description: "Bridging the gap between complex regulatory requirements and practical business implementation through systematic frameworks."
        }
    ];

    return (
        <section id="mission" className="py-24 bg-[#020617] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
                        Why We Exist
                    </h2>
                    <p className="text-xl text-slate-400 leading-relaxed font-medium">
                        ValinzTech helps organizations build trust in the digital age through systematic governance frameworks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {missions.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="flex flex-col bg-[#0D1426]/30 border border-white/5 p-12 rounded-[3rem] hover:border-blue-500/20 transition-all text-center items-center">
                                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-10">
                                    <Icon className="text-blue-400" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
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
