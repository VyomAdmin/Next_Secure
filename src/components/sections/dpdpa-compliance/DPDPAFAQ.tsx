'use client';

import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { dpdpaFaqs } from '@/lib/siteContent';

const DPDPAFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-[#020617] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
                            DPDPA Compliance Questions
                        </h2>
                    </div>

                    <div className="space-y-4 mb-16">
                        {dpdpaFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-[#0D1426]/30 border rounded-[2rem] overflow-hidden transition-all duration-500 ${openIndex === index ? 'border-indigo-500/30 ring-1 ring-indigo-500/10' : 'border-white/5 hover:border-white/10'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-8 py-8 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className="text-lg md:text-xl font-bold text-white tracking-tight pr-8">
                                        {faq.question}
                                    </span>
                                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-180 bg-indigo-500/10' : ''}`}>
                                        <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-slate-300' : 'text-slate-500'}`} style={openIndex === index ? { color: '#64ffda' } : {}} />
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-500 ease-in-out ${openIndex === index
                                        ? 'max-h-[500px] opacity-100'
                                        : 'max-h-0 opacity-0'
                                        } overflow-hidden`}
                                >
                                    <div className="px-8 pb-8 text-slate-400 font-medium leading-relaxed text-base md:text-lg">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/about-contact#contact-form"
                            className="inline-flex items-center gap-3 text-lg font-bold text-indigo-400 hover:text-white transition-colors group"
                        >
                            Don&apos;t see your question? Schedule a consultation
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DPDPAFAQ;
