'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { generalFaqs } from '@/lib/siteContent';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-[#050A18]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                            Governance FAQs
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                            Clear answers to common questions about our systematic approach.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {generalFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-[#0D1426]/30 border rounded-3xl overflow-hidden transition-all duration-500 ${openIndex === index ? 'border-blue-500/30 ring-1 ring-blue-500/10' : 'border-white/5 hover:border-white/10'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-8 py-8 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className="text-xl font-bold text-white tracking-tight pr-8">
                                        {faq.question}
                                    </span>
                                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-180 bg-blue-500/10' : ''}`}>
                                        <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-blue-400' : 'text-slate-500'}`} />
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-500 ease-in-out ${openIndex === index
                                        ? 'max-h-[500px] opacity-100'
                                        : 'max-h-0 opacity-0'
                                        } overflow-hidden`}
                                >
                                    <div className="px-8 pb-8 text-slate-400 font-medium leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
