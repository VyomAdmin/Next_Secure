'use client';

import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const DPDPAFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is the timeline for DPDPA implementation?",
            answer: "While final implementation dates are being clarified, organisations should begin preparation immediately. Our typical full implementation takes 8-10 weeks, though we recommend starting with a readiness assessment to understand your specific timeline."
        },
        {
            question: "What are the penalties for non-compliance?",
            answer: "DPDPA authorizes penalties up to ₹250 crores for significant violations. The Data Protection Board can impose penalties based on severity, duration, and nature of non-compliance."
        },
        {
            question: "Do I need a Data Protection Officer (DPO)?",
            answer: "DPDPA requires certain organizations (Significant Data Fiduciaries) to appoint a DPO. We help you determine if this applies and support DPO designation and operations."
        },
        {
            question: "How does DPDPA differ from GDPR?",
            answer: "While both regulate personal data, DPDPA has India-specific requirements and approaches. We help organizations with existing GDPR compliance understand gaps and additional requirements."
        },
        {
            question: "Can you help with both DPDPA and GDPR?",
            answer: "Yes, our privacy expertise covers DPDPA, GDPR, and other regulations like CCPA, Singapore-PDPA, Canada-PIPEDA. We design integrated privacy programs that address multiple regulatory requirements efficiently."
        },
        {
            question: "What if we're already working with another consultant?",
            answer: "We can provide second opinions, gap assessments of existing implementations, or specific technical support. Our goal is helping you achieve sustainable compliance."
        },
        {
            question: "Do you provide ongoing support after implementation?",
            answer: "Yes, we offer ongoing assurance packages for continuous monitoring, regulatory updates, and framework refinement as your organization evolves."
        },
        {
            question: "What makes ValinzTech different from other DPDPA consultants?",
            answer: "We induce intelligence into implementation—you don't just get compliant systems, you understand why they work and how to maintain them. We build capability, not dependency."
        }
    ];

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
                        {faqs.map((faq, index) => (
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
                                        <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-indigo-400' : 'text-slate-500'}`} />
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
                            href="#contact"
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
