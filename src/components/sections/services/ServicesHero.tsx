import React from 'react';

const ServicesHero = () => {
    return (
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#050A18] pb-32 pt-28 md:min-h-[70vh] md:pb-16 md:pt-32">
            <div className="hero-image hero-image-services absolute inset-0 z-0">
                <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#050A18]/58 via-[#050A18]/18 to-transparent md:from-[#050A18]/72 md:via-[#050A18]/12 md:to-transparent" />
                <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#050A18]/72 via-transparent to-[#050A18]/8 md:from-[#050A18]/70 md:via-transparent md:to-transparent" />
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

            <div className="container relative z-10 mx-auto px-6">
                <div className="flex max-w-5xl flex-col items-center text-center md:items-start md:text-left">
                    <div className="mb-6 inline-block max-w-full rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur-md md:mb-8">
                        <span className="block text-[9px] font-bold uppercase tracking-[0.24em] text-white md:text-[10px] md:tracking-[0.3em]">
                            ValinzTech Services
                        </span>
                    </div>

                    <h1 className="mb-6 max-w-[20rem] text-3xl font-black uppercase leading-tight tracking-normal text-white sm:text-5xl md:mb-8 md:max-w-5xl md:text-6xl lg:text-6xl">
                        <span className="block md:inline">Comprehensive </span>
                        <span className="block md:inline">Technology </span>
                        <span className="block md:inline">Assurance </span>
                        <span className="block md:inline">Services</span>
                    </h1>

                    <p className="mb-0 max-w-[16rem] text-sm font-medium leading-relaxed text-indigo-100/80 sm:max-w-[20rem] sm:text-lg md:mb-12 md:max-w-3xl md:text-2xl">
                        Intelligence-driven consulting across cybersecurity, privacy, AI governance, and compliance, building frameworks that bring order to complexity.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
