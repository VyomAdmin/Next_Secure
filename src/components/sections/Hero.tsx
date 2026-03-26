import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[#050A18]">
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
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-12 lg:gap-16">
                    <div className="max-w-3xl text-left">
                        <div className="mb-8 inline-block px-5 py-2 border border-white/20 rounded-full backdrop-blur-md bg-white/10">
                            <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">
                                Trust. Intelligence. Compliance.
                            </span>
                        </div>

                        <h1 className="text-left text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.97] text-white mb-8">
                            Intelligence-Driven Technology
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-100 to-indigo-200">
                                Governance
                            </span>
                        </h1>

                        <p className="text-lg md:text-2xl text-indigo-100/80 mb-7 max-w-2xl leading-relaxed font-medium font-sans">
                            ValinzTech helps organizations build trust in the digital age through
                            systematic governance frameworks and expert guidance.
                        </p>

                        <p className="text-base md:text-lg font-bold tracking-wide text-white mb-10">
                            Delhi, Serving Pan India and beyond.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-14 w-full sm:w-auto">
                            <Button
                                variant="secondary"
                                href="/about-contact"
                                className="min-w-[220px] justify-center text-sm py-4 px-8 uppercase tracking-widest bg-white/20 border-white/35 text-white hover:bg-[#64ffda] hover:text-black rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_10px_30px_rgba(61,23,164,0.25)] hover:shadow-[0_0_24px_rgba(100,255,218,0.28)] backdrop-blur-md group transition-all duration-200 ease-in-out"
                            >
                                Explore About Us{' '}
                                <ChevronRight
                                    size={16}
                                    className="ml-2 inline group-hover:translate-x-1 transition-transform"
                                />
                            </Button>
                            <Button
                                variant="secondary"
                                href="/about-contact#contact-form"
                                className="min-w-[220px] justify-center text-sm py-4 px-8 uppercase tracking-widest bg-white/15 border-white/30 text-white hover:bg-[#64ffda] hover:text-black rounded-2xl shadow-[0_8px_24px_rgba(9,10,35,0.28)] hover:shadow-[0_0_20px_rgba(100,255,218,0.2)] backdrop-blur-md transition-all duration-200 ease-in-out"
                            >
                                Free Consultation
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-indigo-100/70 border-t border-white/10 pt-8">
                            <span className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                                Confident
                            </span>
                            <span className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-200"></span>
                                Structured
                            </span>
                            <span className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-200"></span>
                                Enterprise-Grade
                            </span>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center lg:justify-end">
                        <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[460px] lg:h-[460px] flex items-center justify-center">
                            <Image
                                src="/images/Valinz-Logo.png"
                                alt="ValinzTech logo"
                                width={600}
                                height={600}
                                priority
                                sizes="(min-width: 1024px) 460px, (min-width: 768px) 380px, 280px"
                                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050A18] to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Hero;
