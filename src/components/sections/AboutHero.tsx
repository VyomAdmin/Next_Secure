import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const AboutHero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#050A18]">
            {/* Immersive Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Geometric / Structured Pattern Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#3b82f6 0.5px, transparent 0.5px), linear-gradient(90deg, #3b82f6 0.5px, transparent 0.5px)`,
                        backgroundSize: '40px 40px'
                    }}
                ></div>

                {/* Soft blue lighting gradients - Blue only, no purple */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[50%] bg-blue-600/10 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-[0%] right-[10%] w-[40%] h-[40%] bg-blue-400/5 rounded-full blur-[100px]"></div>

                {/* Subtle animated structural framework lines */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                    <div
                        className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse"
                        style={{ animationDuration: '6s' }}
                    ></div>
                    <div
                        className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-pulse"
                        style={{ animationDuration: '8s', animationDelay: '1s' }}
                    ></div>
                    {/* Vertical System Lines */}
                    <div className="absolute left-[15%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"></div>
                    <div className="absolute right-[15%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"></div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    {/* Soft-glass framed container effect */}
                    <div className="backdrop-blur-sm bg-white/[0.02] border border-white/5 p-12 md:p-16 rounded-[40px] shadow-2xl">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.97] text-white mb-8">
                            Intelligent Technology <br />
                            <span className="text-blue-400">Governance</span>
                        </h1>

                        <p className="text-lg md:text-2xl text-indigo-100/80 mb-7 max-w-2xl leading-relaxed font-medium font-sans mx-auto">
                            ValinzTech helps organizations build trust in the digital age through
                            systematic governance frameworks and expert guidance.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <Button
                                variant="primary"
                                href="#contact"
                                className="bg-blue-600 hover:bg-blue-500 text-white border-none py-4 px-10 rounded-full font-bold tracking-wide"
                            >
                                Get Started
                            </Button>
                            <Button
                                variant="secondary"
                                href="#mission"
                                className="bg-white/5 hover:bg-white/10 text-white border-white/10 py-4 px-10 rounded-full font-bold tracking-wide"
                            >
                                Our Mission
                            </Button>
                        </div>
                    </div>

                    {/* Authority Visual Tags */}
                    <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
                        <span className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
                            Confident
                        </span>
                        <span className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                            Modern
                        </span>
                        <span className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
                            Intelligent
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
