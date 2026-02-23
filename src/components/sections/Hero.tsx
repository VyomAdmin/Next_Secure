import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-gradient-to-br from-[#22104f] via-[#1a1b64] to-[#0b1238]">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
                        backgroundSize: '28px 28px',
                    }}
                ></div>
                <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-fuchsia-400/25 blur-[110px]"></div>
                <div className="absolute top-1/3 right-12 h-80 w-80 rounded-full bg-indigo-300/20 blur-[120px]"></div>
                <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-cyan-300/10 blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-12 lg:gap-16">
                    <div className="max-w-3xl text-left">
                        <div className="mb-8 inline-block px-5 py-2 border border-white/20 rounded-full backdrop-blur-md bg-white/10">
                            <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">
                                Trust. Intelligence. Compliance
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
                            Serving Delhi NCR - DPDPA Specialists
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-14 w-full sm:w-auto">
                            <Button
                                variant="secondary"
                                href="#about"
                                className="min-w-[220px] justify-center text-sm py-4 px-8 uppercase tracking-widest bg-white/20 border-white/35 text-white hover:bg-white/28 rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_10px_30px_rgba(61,23,164,0.25)] hover:shadow-[0_0_24px_rgba(255,255,255,0.28)] backdrop-blur-md group"
                            >
                                Explore About Us{' '}
                                <ChevronRight
                                    size={16}
                                    className="ml-2 inline group-hover:translate-x-1 transition-transform"
                                />
                            </Button>
                            <Button
                                variant="secondary"
                                href="#contact"
                                className="min-w-[220px] justify-center text-sm py-4 px-8 uppercase tracking-widest bg-white/15 border-white/30 text-white hover:bg-white/22 rounded-2xl shadow-[0_8px_24px_rgba(9,10,35,0.28)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] backdrop-blur-md"
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
                        <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[460px] lg:h-[460px]">
                            <div className="absolute inset-8 rounded-[3rem] bg-white/10 border border-white/20 backdrop-blur-xl rotate-6 animate-pulse" style={{ animationDuration: '6s' }}></div>
                            <div className="absolute inset-14 rounded-[2.5rem] bg-indigo-300/10 border border-violet-200/20 -rotate-6"></div>
                            <div className="absolute inset-0 rounded-full bg-fuchsia-400/15 blur-3xl"></div>
                            <div className="absolute inset-6 rounded-full bg-indigo-300/20 blur-2xl"></div>

                            <div className="absolute inset-12 md:inset-16 flex items-center justify-center">
                                <div className="relative w-full h-full rounded-[2.5rem] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(12,8,40,0.45)]">
                                    <div className="absolute -top-5 -right-4 h-16 w-16 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-xl animate-bounce" style={{ animationDuration: '4s' }}></div>
                                    <div className="absolute -bottom-6 -left-5 h-20 w-20 rounded-3xl bg-violet-200/15 border border-white/15 backdrop-blur-xl animate-pulse" style={{ animationDuration: '5s' }}></div>
                                    <div className="absolute inset-6 md:inset-8 flex items-center justify-center">
                                        <Image
                                            src="/images/Valinz-Logo.png"
                                            alt="ValinzTech abstract logo graphic"
                                            width={220}
                                            height={220}
                                            priority
                                            className="w-40 h-40 md:w-52 md:h-52 object-contain rounded-[2rem] shadow-[0_12px_32px_rgba(0,0,0,0.35)] rotate-3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050A18] to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Hero;
