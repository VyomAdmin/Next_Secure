import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
    return (
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#050A18] pb-32 pt-28 md:min-h-[80vh] md:pb-24 md:pt-32">
            {/* Background Image Layer */}
            <div className="hero-image hero-image-about absolute inset-0 z-0">
                {/* Gradient Overlays */}
                <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#050A18]/68 via-[#050A18]/16 to-transparent" />
                <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#050A18]/76 via-transparent to-transparent md:from-[#050A18]/72" />

                {/* Subtle Grid Pattern Overlay */}
                <div
                    className="absolute inset-0 z-[3] opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#3b82f6 0.5px, transparent 0.5px), linear-gradient(90deg, #3b82f6 0.5px, transparent 0.5px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Soft blue lighting gradients */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[50%] bg-blue-600/10 rounded-full blur-[140px] z-[4]" />
                <div className="absolute bottom-[0%] right-[10%] w-[40%] h-[40%] bg-blue-400/5 rounded-full blur-[100px] z-[4]" />

                {/* Animated structural framework lines */}
                <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none opacity-20">
                    <div
                        className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse"
                        style={{ animationDuration: '6s' }}
                    />
                    <div
                        className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-pulse"
                        style={{ animationDuration: '8s', animationDelay: '1s' }}
                    />
                    <div className="absolute left-[15%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
                    <div className="absolute right-[15%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
                </div>
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto px-6">
                <div className="max-w-3xl">
                    <div>
                        <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-[minmax(0,1fr)_260px] md:gap-16">
                            <div className="text-center md:text-left">
                                <h1 className="mx-auto max-w-[8ch] text-3xl font-black leading-tight tracking-normal text-white sm:text-5xl md:mx-0 md:text-6xl lg:text-6xl">
                                    We&apos;re
                                    <br />
                                    ValinzTech
                                </h1>
                            </div>

                            <div className="flex justify-center">
                                <div className="flex h-32 w-32 items-center justify-center overflow-visible sm:h-40 sm:w-40 md:h-52 md:w-52">
                                    <Image
                                        src="/images/Valinz-Logo.png"
                                        alt="ValinzTech logo"
                                        width={440}
                                        height={440}
                                        sizes="(min-width: 768px) 256px, 192px"
                                        className="h-40 w-40 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:h-48 sm:w-48 md:h-64 md:w-64"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-9 max-w-[16rem] text-center sm:max-w-[20rem] md:mx-0 md:mt-12 md:max-w-3xl md:text-left">
                        <p className="text-center font-sans text-sm font-medium leading-[1.75] tracking-normal text-indigo-100/80 sm:text-lg md:text-left md:text-[1.35rem] md:leading-[1.85]">
                            We help businesses make sense of the complex world of cybersecurity, privacy, and
                            compliance without the jargon or the headaches. Think of us as your technology
                            governance partner: we bring the expertise, you keep the clarity. Whether you&apos;re
                            navigating India&apos;s new DPDPA regulations, preparing for ISO certification, or
                            figuring out how to govern AI responsibly, we&apos;re here to make it straightforward
                            and sustainable.
                        </p>
                    </div>

                    {/* Authority Visual Tags */}
                    <div className="mt-10 hidden flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-500 sm:flex md:mt-16 md:justify-start">
                        <span className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                            Trust
                        </span>
                        <span className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            Intelligence
                        </span>
                        <span className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                            Compliance
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
