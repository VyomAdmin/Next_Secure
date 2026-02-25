import React from 'react';
import Button from '../../ui/Button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#050A18]">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#3b82f6 0.5px, transparent 0.5px), linear-gradient(90deg, #3b82f6 0.5px, transparent 0.5px)',
                        backgroundSize: '40px 40px',
                    }}
                ></div>
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[50%] bg-blue-600/10 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-0 right-[10%] w-[40%] h-[40%] bg-blue-400/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8 inline-block px-5 py-2 border border-white/20 rounded-full backdrop-blur-md bg-white/10">
                        <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">
                            FEATURED SERVICE
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.97] text-white mb-8 uppercase">
                        DPDPA Compliance Services
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-indigo-200 mb-8">
                        Systematic frameworks for India&apos;s data protection requirements.
                    </h2>

                    <p className="text-lg md:text-xl text-indigo-100/80 mb-10 max-w-3xl mx-auto leading-relaxed font-medium font-sans">
                        The Digital Personal Data Protection Act (DPDPA) 2023 establishes comprehensive obligations for organizations processing personal data of Indian citizens. We help you build compliant, sustainable governance frameworks, transforming regulatory requirements into strategic advantage.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
                        <Button
                            variant="secondary"
                            href="/about-contact#contact-form"
                            className="min-w-[240px] justify-center text-sm py-4 px-8 uppercase tracking-widest bg-white/20 border-white/35 text-white hover:bg-white/28 rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_10px_30px_rgba(61,23,164,0.25)] hover:shadow-[0_0_24px_rgba(255,255,255,0.28)] backdrop-blur-md group"
                        >
                            Schedule DPDPA Assessment{' '}
                            <ChevronRight
                                size={16}
                                className="ml-2 inline group-hover:translate-x-1 transition-transform"
                            />
                        </Button>
                        <Button
                            variant="secondary"
                            href="/guides/dpdpa-guide"
                            className="min-w-[240px] justify-center text-sm py-4 px-8 uppercase tracking-widest bg-white/15 border-white/30 text-white hover:bg-white/22 rounded-2xl shadow-[0_8px_24px_rgba(9,10,35,0.28)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] backdrop-blur-md"
                        >
                            Download DPDPA Guide
                        </Button>
                    </div>

                    {/* Quick Stats Bar */}
                    <div className="inline-flex flex-wrap items-center justify-center gap-x-12 gap-y-6 px-10 py-6 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-xl">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-black text-white tracking-tighter">₹250Cr</span>
                            <span className="text-[10px] font-bold text-indigo-200/60 uppercase tracking-widest">Maximum Penalties</span>
                        </div>
                        <div className="w-[1px] h-10 bg-white/10 hidden md:block"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-black text-white tracking-tighter">2024</span>
                            <span className="text-[10px] font-bold text-indigo-200/60 uppercase tracking-widest">Implementation</span>
                        </div>
                        <div className="w-[1px] h-10 bg-white/10 hidden md:block"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-black text-white tracking-tighter">GLOBAL</span>
                            <span className="text-[10px] font-bold text-indigo-200/60 uppercase tracking-widest">Cross-border Impact</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050A18] to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Hero;
