import React from 'react';
import Image from 'next/image';

const ServicesHero = () => {
    return (
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#050A18] pb-32 pt-28 md:min-h-[70vh] md:pb-16 md:pt-32">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/crousel/IMG_allservices.PNG"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="hidden object-cover object-center md:block"
                    style={{
                        filter: 'brightness(1.1) contrast(1.15) saturate(1.05)',
                    }}
                />
                <Image
                    src="/crousel/mobile_backbround.jpeg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center md:hidden"
                    style={{
                        filter: 'brightness(1.1) contrast(1.15) saturate(1.05)',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050A18]/72 via-[#050A18]/34 to-[#050A18]/14 md:from-[#050A18]/80 md:via-[#050A18]/10 md:to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#050A18]/24 to-[#050A18]/36 md:via-transparent md:to-[#050A18]/5" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#3b82f6 0.5px, transparent 0.5px), linear-gradient(90deg, #3b82f6 0.5px, transparent 0.5px)',
                        backgroundSize: '40px 40px',
                    }}
                ></div>
                <div className="absolute top-[10%] left-1/2 h-[50%] w-[70%] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]"></div>
                <div className="absolute bottom-0 right-[10%] h-[40%] w-[40%] rounded-full bg-blue-400/5 blur-[100px]"></div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute top-1/4 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse" style={{ animationDuration: '6s' }}></div>
                    <div className="absolute top-3/4 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
                </div>
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                <div className="mx-auto flex max-w-5xl flex-col items-center">
                    <div className="mb-6 inline-block max-w-full rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur-md md:mb-8">
                        <span className="block text-[9px] font-bold uppercase tracking-[0.24em] text-white md:text-[10px] md:tracking-[0.3em]">
                            ValinzTech Services
                        </span>
                    </div>

                    <h1 className="mb-6 max-w-[14ch] text-[clamp(2.25rem,10vw,3.75rem)] font-black uppercase leading-[0.98] tracking-normal text-white md:mb-8 md:max-w-5xl md:text-4xl md:tracking-tighter lg:text-5xl">
                        Comprehensive Technology Assurance Services
                    </h1>

                    <p className="mx-auto mb-0 max-w-[34rem] text-base font-medium leading-relaxed text-indigo-100/80 sm:text-lg md:mb-12 md:max-w-3xl md:text-2xl">
                        Intelligence-driven consulting across cybersecurity, privacy, AI governance, and compliance, building frameworks that bring order to complexity.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
