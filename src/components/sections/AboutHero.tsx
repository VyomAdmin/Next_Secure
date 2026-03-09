import React from 'react';
import Image from 'next/image';

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

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="backdrop-blur-sm bg-white/[0.02] border border-white/5 px-10 py-12 md:px-16 md:py-16 rounded-[28px] shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_260px] items-center gap-10 md:gap-16">
                            <div className="text-left">
                                <h1 className="text-5xl md:text-7xl lg:text-[5.25rem] font-black tracking-tighter leading-[0.95] text-white max-w-[7ch]">
                                    We&apos;re
                                    <br />
                                    ValinzTech
                                </h1>
                            </div>

                            <div className="flex justify-start md:justify-center">
                                <div className="w-40 h-40 md:w-52 md:h-52 flex items-center justify-center overflow-visible">
                                    <Image
                                        src="/images/Valinz-Logo.png"
                                        alt="ValinzTech logo"
                                        width={440}
                                        height={440}
                                        sizes="(min-width: 768px) 256px, 192px"
                                        className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 max-w-5xl">
                        <p className="text-lg md:text-[1.35rem] text-indigo-100/80 leading-[1.85] font-medium font-sans tracking-[0.01em] text-left">
                            We help businesses make sense of the complex world of cybersecurity, privacy, and
                            compliance without the jargon or the headaches. Think of us as your technology
                            governance partner: we bring the expertise, you keep the clarity. Whether you&apos;re
                            navigating India&apos;s new DPDPA regulations, preparing for ISO certification, or
                            figuring out how to govern AI responsibly, we&apos;re here to make it straightforward
                            and sustainable.
                        </p>
                    </div>

                    {/* Authority Visual Tags */}
                    <div className="mt-16 flex flex-wrap justify-start gap-x-12 gap-y-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
                        <span className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
                            Trust
                        </span>
                        <span className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                            Intelligence
                        </span>
                        <span className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
                            Compliance
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
