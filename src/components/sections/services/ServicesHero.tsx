import React from 'react';
import Image from 'next/image';

const ServicesHero = () => {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-12 overflow-hidden bg-[#050A18]">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/crousel/IMG_allservices.PNG"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[72%_center] md:object-center"
                    style={{
                        filter: 'brightness(1.08) contrast(1.12) saturate(1.05)',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050A18]/82 via-[#050A18]/46 to-[#050A18]/18" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A18]/90 via-[#050A18]/28 to-[#050A18]/30" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#3b82f6 0.5px, transparent 0.5px), linear-gradient(90deg, #3b82f6 0.5px, transparent 0.5px)',
                        backgroundSize: '40px 40px',
                    }}
                ></div>
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[50%] bg-blue-600/10 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-0 right-[10%] w-[40%] h-[40%] bg-blue-400/5 rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse" style={{ animationDuration: '6s' }}></div>
                    <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-5xl mx-auto flex flex-col items-center">
                    <div className="mb-8 inline-block px-5 py-2 border border-white/10 rounded-full bg-white/5">
                        <span className="text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase">
                            ValinzTech Services
                        </span>
                    </div>

                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[0.97] text-white mb-8 uppercase text-balance">
                        Comprehensive Technology Assurance Services
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl leading-relaxed font-medium mx-auto">
                        Intelligence-driven consulting across cybersecurity, privacy, AI governance, and compliance—building frameworks that bring order to complexity.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
