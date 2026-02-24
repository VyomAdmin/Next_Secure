'use client';

import React, { useState } from 'react';
import { ChevronDown, Database, ClipboardCheck, Layout, Shield, Users, LineChart } from 'lucide-react';

const Coverage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const categories = [
        {
            icon: Database,
            title: "Data Discovery & Mapping",
            content: [
                "Personal data inventory across all systems",
                "Data flow mapping (internal/external)",
                "Data processor and sub-processor identification",
                "Data retention analysis and lifecycle mapping",
                "Cross-border data transfer identification",
                "Legacy system data discovery"
            ]
        },
        {
            icon: Layout,
            title: "Consent & Rights Management",
            content: [
                "Consent management framework design",
                "Data subject access request (DSAR) automation",
                "Rights fulfillment workflows (access, correction, erasure)",
                "Consent withdrawal mechanisms",
                "Purpose limitation implementation",
                "Consent registry and tracking"
            ]
        },
        {
            icon: ClipboardCheck,
            title: "Governance & Accountability",
            content: [
                "Privacy governance committee establishment",
                "Data Protection Officer (DPO) designation support",
                "Privacy by Design framework implementation",
                "Data Protection Impact Assessments (DPIA)",
                "Record of processing activities (ROPA)",
                "Accountability documentation"
            ]
        },
        {
            icon: Shield,
            title: "Technical & Organizational Measures",
            content: [
                "Security controls implementation (encryption, access controls)",
                "Data minimization strategies",
                "Purpose limitation technical enforcement",
                "Pseudonymization and anonymization",
                "Breach detection and response procedures",
                "System security validation"
            ]
        },
        {
            icon: Users,
            title: "Vendor & Cross-Border Compliance",
            content: [
                "Data processing agreements (DPA)",
                "Vendor assessment and due diligence",
                "Cross-border transfer mechanisms",
                "Standard Contractual Clauses (SCC)",
                "International data localization strategies",
                "Third-party risk management"
            ]
        },
        {
            icon: LineChart,
            title: "Ongoing Compliance & Monitoring",
            content: [
                "Compliance monitoring dashboard",
                "Periodic compliance audits",
                "Regulatory update tracking",
                "Training and awareness programs",
                "Incident response and breach notification",
                "Continuous improvement framework"
            ]
        }
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-[#050A18]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
                            Complete DPDPA Service Coverage
                        </h2>
                        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                            Our expertise spans every dimension of DPDPA compliance.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {categories.map((category, index) => {
                            const Icon = category.icon;
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`bg-[#0D1426]/30 border rounded-[2rem] overflow-hidden transition-all duration-500 ${isOpen ? 'border-indigo-500/30 ring-1 ring-indigo-500/10' : 'border-white/5 hover:border-white/10'}`}
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full px-8 py-8 md:px-10 flex items-center justify-between text-left focus:outline-none"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500 ${isOpen ? 'bg-indigo-500/20 text-indigo-400' : 'bg-white/5 text-slate-500'}`}>
                                                <Icon size={24} />
                                            </div>
                                            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
                                                {category.title}
                                            </span>
                                        </div>
                                        <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-180 bg-indigo-500/10' : ''}`}>
                                            <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-indigo-400' : 'text-slate-500'}`} />
                                        </div>
                                    </button>
                                    <div
                                        className={`transition-all duration-500 ease-in-out ${isOpen
                                            ? 'max-h-[800px] opacity-100'
                                            : 'max-h-0 opacity-0'
                                            } overflow-hidden`}
                                    >
                                        <div className="px-10 pb-10 pt-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                            {category.content.map((item, cIndex) => (
                                                <div key={cIndex} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 mt-2 flex-shrink-0"></div>
                                                    <span className="text-slate-400 font-medium leading-[1.6]">{item}</span>
                                                </div>
                                            ))}
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

export default Coverage;
