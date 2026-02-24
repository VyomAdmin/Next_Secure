import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from '../../ui/Button';

const WhoNeedsDPDPA = () => {
    const list = [
        { category: "TECHNOLOGY COMPANIES", detail: "SaaS, fintech, e-commerce, platforms handling user data" },
        { category: "PROFESSIONAL SERVICES", detail: "Consulting, legal, accounting, healthcare managing client information" },
        { category: "STARTUPS SEEKING FUNDING", detail: "Investors increasingly require DPDPA compliance evidence" },
        { category: "COMPANIES WITH INTERNATIONAL OPERATIONS", detail: "Cross-border data transfers require specific mechanisms" },
        { category: "REGULATED INDUSTRIES", detail: "Banking, insurance, healthcare with existing compliance obligations" },
        { category: "GROWING ENTERPRISES", detail: "Scaling operations trigger DPDPA obligations and stakeholder requirements" }
    ];

    return (
        <section className="py-24 bg-[#050A18] relative">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-[#0D1426]/40 border border-white/5 rounded-[3.5rem] p-12 md:p-20 overflow-hidden relative">
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] -mr-32 -mt-32"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase">
                                Is DPDPA Compliance Required <br /> for Your Organization?
                            </h2>
                            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl font-medium leading-relaxed">
                                DPDPA applies broadly to organizations processing digital personally identifiable data of individuals in India. Here&apos;s who should prioritize compliance:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
                                {list.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <CheckCircle2 style={{ color: '#64ffda' }} className="flex-shrink-0 mt-1" size={20} />
                                        <span className="text-slate-300 font-medium leading-[1.5]">
                                            <span className="font-black text-white">{item.category}</span>{' — '}{item.detail}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="text-center md:text-left">
                                    <p className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                                        Not sure if DPDPA applies to you?
                                    </p>
                                    <p className="text-indigo-200/70 font-medium">
                                        Schedule a free 30-minute consultation to assess your obligations.
                                    </p>
                                </div>
                                <Button
                                    variant="secondary"
                                    href="/about-contact#contact-form"
                                    className="min-w-[200px] py-4 rounded-xl bg-white text-indigo-950 hover:bg-indigo-50 border-none font-bold"
                                >
                                    Schedule Assessment
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoNeedsDPDPA;
