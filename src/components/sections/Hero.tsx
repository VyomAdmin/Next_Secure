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
                <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">


                    <div className="mb-8 inline-block px-5 py-2 border border-white/20 rounded-full backdrop-blur-md bg-white/10">
                        <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">
                            Adding value & intelligence to technology
                        </span>
                    </div>

                    <h1 className="text-center text-3xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.97] text-white mb-8 text-balance">
                        Privacy
                        <span className="text-indigo-400/50 text-2xl md:text-6xl mx-1 md:mx-5 align-middle">&bull;</span>
                        Security
                        <span className="text-indigo-400/50 text-2xl md:text-6xl mx-1 md:mx-5 align-middle">&bull;</span>
                        AI
                        <span className="block text-2xl md:text-4xl lg:text-5xl mt-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-100 to-indigo-200">
                            Simplify Compliance 
                            <span className="text-indigo-400/50 mx-1 md:mx-3 align-middle">&bull;</span>
                            Protect Data 
                            <span className="text-indigo-400/50 mx-1 md:mx-3 align-middle">&bull;</span>
                            Build Trust
                        </span>
                    </h1>

                    <p className="text-base md:text-xl text-indigo-100/80 mb-7 max-w-3xl leading-relaxed font-medium font-sans mx-auto text-balance">
                        We help organizations make sense of Data Privacy, Cybersecurity and AI Compliance - transforming complex regulations into clear, structured steps that not just protect your business but build lasting trust.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-14 w-full sm:w-auto justify-center">
                        <Button
                            variant="secondary"
                            href="/about-contact#contact-form"
                            className="w-full sm:w-auto sm:min-w-[220px] justify-center text-sm py-4 px-6 sm:px-8 uppercase tracking-widest bg-white/15 border-white/30 text-white hover:bg-[#64ffda] hover:text-black rounded-2xl shadow-[0_8px_24px_rgba(9,10,35,0.28)] hover:shadow-[0_0_20px_rgba(100,255,218,0.2)] backdrop-blur-md transition-all duration-200 ease-in-out"
                        >
                            Talk to a consultant for free
                        </Button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-indigo-100/70 border-t border-white/10 pt-8 max-w-2xl mx-auto">
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
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050A18] to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Hero;
