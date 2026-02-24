import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const differentiators = [
    { label: "Intelligence-Driven", description: "We analyse before we act — systematic research and gap analysis before any framework design." },
    { label: "Framework-Focused", description: "We build governance systems, not just documentation, that scale with your organisation." },
    { label: "Holistic Approach", description: "We see privacy, security, AI, and compliance as interconnected, not siloed." }
];

const WhyValinzTech = () => {
    return (
        <section className="py-24 bg-[#020617] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
                        Why Organizations Choose ValinzTech
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-14">
                    {differentiators.map((item, index) => (
                        <div key={index} className="p-10 rounded-[2.5rem] bg-[#0D1426]/40 border border-white/5 hover:border-blue-500/20 transition-all duration-500 text-center">
                            <h3 className="text-xl font-black text-white mb-4 uppercase tracking-widest">{item.label}</h3>
                            <p className="text-slate-400 font-medium leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/about-contact" className="inline-flex items-center gap-2 text-sm font-black text-blue-400 hover:text-white uppercase tracking-widest transition-colors group">
                        Learn More About Us
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhyValinzTech;
