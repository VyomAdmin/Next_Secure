import React from 'react';
import { Brain, LayoutGrid, Handshake } from 'lucide-react';

const WhyDPDPA = () => {
    const differentiators = [
        {
            icon: Brain,
            title: "Deep Regulatory Expertise",
            description: "Our team combines technical knowledge with regulatory expertise, ensuring you understand not just what DPDPA requires, but why and how to implement it sustainably. We translate legal requirements into operational reality."
        },
        {
            icon: LayoutGrid,
            title: "Systematic, Not Superficial",
            description: "We build governance frameworks, not just documentation. Our methodologies create systems that integrate with your operations and scale with your growth—reducing compliance burden over time, not increasing it."
        },
        {
            icon: Handshake,
            title: "Business-First Approach",
            description: "We understand compliance must work within business constraints. Our implementations balance regulatory requirements with operational realities, customer experience, and strategic objectives."
        }
    ];

    return (
        <section className="py-24 bg-[#020617] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase font-sans">
                        Why Organizations Choose <br /> ValinzTech for DPDPA
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {differentiators.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group p-10 rounded-[3rem] bg-[#0D1426]/50 border border-white/5 hover:border-indigo-500/20 transition-all duration-500 shadow-xl"
                            >
                                <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                                    <Icon className="text-indigo-400" size={32} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
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

export default WhyDPDPA;
