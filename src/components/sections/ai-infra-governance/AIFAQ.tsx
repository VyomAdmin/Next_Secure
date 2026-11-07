'use client';

import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { aiInfraFaqs } from '@/lib/siteContent';

const AIFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 md:py-32 bg-[#020617] border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#64ffda]">
                                Frequently Asked Questions
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight uppercase">
                            AI Infra & Governance Inquiries
                        </h2>
                        <p className="text-base text-slate-400 font-medium max-w-xl mx-auto">
                            Clear answers to key architectural, security, and compliance questions regarding modern enterprise AI.
                        </p>
                    </div>

                    <div className="space-y-4 mb-16">
                        {aiInfraFaqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`bg-[#0D1426]/30 border rounded-[2rem] overflow-hidden transition-all duration-300 ${
                                        isOpen ? 'border-blue-500/30 ring-1 ring-blue-500/10' : 'border-white/5 hover:border-white/10'
                                    }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-6 sm:px-8 py-7 flex items-center justify-between text-left focus:outline-none"
                                    >
                                        <span className="text-base sm:text-lg font-bold text-white tracking-tight pr-6">
                                            {faq.question}
                                        </span>
                                        <div
                                            className={`w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                                                isOpen ? 'rotate-180 bg-blue-500/10' : ''
                                            }`}
                                        >
                                            <ChevronDown
                                                className={`w-4 h-4 ${isOpen ? 'text-[#64ffda]' : 'text-slate-500'}`}
                                            />
                                        </div>
                                    </button>
                                    <div
                                        className={`transition-all duration-300 ease-in-out ${
                                            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                        } overflow-hidden`}
                                    >
                                        <div className="px-6 sm:px-8 pb-7 text-slate-300 font-medium leading-relaxed text-sm sm:text-base border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/about-contact?intent=booking#contact-form"
                            className="inline-flex items-center gap-3 text-base font-bold text-blue-400 hover:text-white transition-colors group"
                        >
                            <span>Have a specific architectural or compliance question? Speak with our engineers</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIFAQ;

