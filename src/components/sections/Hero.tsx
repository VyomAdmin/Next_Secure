import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-[#050A18]">
            {/* Immersive Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Geometric Grid / Structured Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 1px 1px, #64ffda 1px, transparent 0)',
                        backgroundSize: '32px 32px',
                    }}
                ></div>

                {/* Soft blue lighting gradients */}
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-[#3b82f6]/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[40%] h-[30%] bg-[#64ffda]/5 rounded-full blur-[100px]"></div>

                {/* Subtle animated structural framework lines */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                    <div
                        className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#64ffda]/20 to-transparent animate-pulse"
                        style={{ animationDuration: '5s' }}
                    ></div>
                    <div
                        className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6]/20 to-transparent animate-pulse"
                        style={{ animationDuration: '7s' }}
                    ></div>
                    <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
                    <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <div className="mb-8 inline-block px-5 py-2 border border-[#64ffda]/15 rounded-full backdrop-blur-md bg-blue-900/5">
                        <span className="text-[10px] font-bold tracking-[0.3em] text-[#64ffda] uppercase">
                            Intelligence-Driven Governance
                        </span>
                    </div>

                    {/* ONE H1 so spacing between Technology and Governance stays "regular" */}
                    <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 mb-8">
                        <h1 className="text-center md:text-left text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.0] text-white">
                            Intelligence-Driven Technology
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
                                Governance
                            </span>
                        </h1>

                        {/* Metallic Icon Visual (right side) */}
                        <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0 group md:mt-2">
                            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full group-hover:bg-blue-500/30 transition-all duration-500"></div>
                            <Image
                                src="/1x/Valinz-Icon.jpeg"
                                alt="ValinzTech Metallic Icon"
                                width={128}
                                height={128}
                                priority
                            />
                        </div>
                    </div>

                    <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-4xl leading-relaxed font-medium font-sans">
                        ValinzTech helps organizations build trust in the digital age through
                        systematic governance frameworks and expert guidance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 mb-16 w-full sm:w-auto justify-center">
                        <Button
                            variant="primary"
                            href="#about"
                            className="text-sm py-4 px-12 uppercase tracking-widest bg-[#64ffda]/10 border-[#64ffda]/30 text-[#64ffda] hover:bg-[#64ffda]/20 rounded-full group"
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
                            className="text-sm py-4 px-12 uppercase tracking-widest backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10 hover:text-white rounded-full"
                        >
                            Free Consultation
                        </Button>
                    </div>

                    {/* Authority Tags */}
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 border-t border-white/5 pt-12 mt-4 w-full">
                        <span className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda] shadow-[0_0_8px_#64ffda]"></span>
                            Confident
                        </span>
                        <span className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            Structured
                        </span>
                        <span className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                            Enterprise-Grade
                        </span>
                    </div>
                </div>
            </div>

            {/* Subtle Gradient Fade to Next Section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050A18] to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Hero;
