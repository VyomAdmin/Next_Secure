'use client';

import React, { useEffect, useState } from 'react';
import { ChevronDown, Shield, Lock, Brain, BarChart3, ClipboardCheck, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/lib/siteContent';

const serviceIcons = {
    'cybersecurity-consulting': Shield,
    'privacy-data-protection': Lock,
    'ai-governance': Brain,
    'compliance-risk-management': BarChart3,
    'technical-audits': ClipboardCheck,
    'training-enablement': GraduationCap
};

const getInitialOpenService = () => {
    if (typeof window === 'undefined') {
        return 0;
    }

    const hash = window.location.hash.replace('#', '');
    const index = services.findIndex((service) => service.slug === hash);
    return index === -1 ? 0 : index;
};

const ServiceCategories = () => {
    const [openService, setOpenService] = useState<number | null>(getInitialOpenService);

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            setTimeout(() => {
                document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }
    }, []);

    return (
        <section id="service-categories" className="py-24 bg-[#050A18]">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto space-y-6">
                    {services.map((service, index) => {
                        const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
                        const isOpen = openService === index;

                        return (
                            <div
                                key={service.slug}
                                id={service.slug}
                                className={`rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${isOpen ? 'border-blue-500/20 bg-[#0D1426]/60' : 'border-white/5 bg-[#0D1426]/20 hover:border-white/10'}`}
                            >
                                <button
                                    onClick={() => setOpenService(isOpen ? null : index)}
                                    className="w-full px-8 md:px-12 py-10 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${isOpen ? 'bg-blue-500/10' : 'bg-white/5'}`}>
                                            <Icon style={isOpen ? { color: '#64ffda' } : {}} className={!isOpen ? 'text-slate-500' : ''} size={26} />
                                        </div>
                                        <div className="text-left">
                                            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">{service.title}</h2>
                                            <p className="text-sm text-slate-500 font-medium mt-[0.0625rem] italic">{service.tagline}</p>
                                        </div>
                                    </div>
                                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 ml-4 transition-transform duration-500 ${isOpen ? 'rotate-180 bg-blue-500/10' : ''}`}>
                                        <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-blue-400' : 'text-slate-500'}`} />
                                    </div>
                                </button>

                                <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                    <div className="px-8 md:px-12 pb-12">
                                        <p className="text-lg text-slate-400 font-medium leading-relaxed mb-12 max-w-3xl border-t border-white/5 pt-8">
                                            {service.overview}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                                            {service.subcategories.map((subcategory) => (
                                                <div key={subcategory.title}>
                                                    <h4 className="text-sm font-black text-white uppercase tracking-widest mb-5">{subcategory.title}</h4>
                                                    <ul className="space-y-3">
                                                        {subcategory.items.map((item) => (
                                                            <li key={item} className="flex items-start gap-2.5">
                                                                <div className="w-1 h-1 rounded-full bg-blue-500/60 mt-2 flex-shrink-0"></div>
                                                                <span className="text-sm text-slate-400 font-medium leading-relaxed">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href={service.cta.href}
                                            className="inline-flex items-center gap-2 text-sm font-black text-blue-400 hover:text-white tracking-widest uppercase transition-colors group"
                                        >
                                            {service.cta.label}
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceCategories;
