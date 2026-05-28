import React from 'react';

const Hero = () => {
    return (
        <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#050A18] pb-32 pt-28 md:min-h-[90vh] md:pb-20 md:pt-32">
            <div className="hero-image hero-image-dpdpa absolute inset-0 z-0">
                <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#050A18]/58 via-[#050A18]/18 to-transparent md:from-[#050A18]/72 md:via-[#050A18]/18 md:to-transparent" />
                <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#050A18]/72 via-transparent to-[#050A18]/8 md:from-[#050A18]/76 md:via-transparent md:to-transparent" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#3b82f6 0.5px, transparent 0.5px), linear-gradient(90deg, #3b82f6 0.5px, transparent 0.5px)',
                        backgroundSize: '40px 40px',
                    }}
                ></div>
                <div className="absolute top-[10%] left-1/2 h-[50%] w-[70%] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]"></div>
                <div className="absolute bottom-0 right-[10%] h-[40%] w-[40%] rounded-full bg-blue-400/5 blur-[100px]"></div>
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-6 inline-block max-w-full rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md md:mb-8">
                        <span className="block text-[9px] font-bold uppercase tracking-[0.24em] text-white md:text-[10px] md:tracking-[0.3em]">
                            Featured Service
                        </span>
                    </div>

                    <h1 className="mx-auto mb-6 max-w-[20rem] text-3xl font-black uppercase leading-tight tracking-normal text-white sm:text-5xl md:mb-8 md:max-w-4xl md:text-6xl lg:text-6xl">
                        <span className="block md:inline">DPDPA </span>
                        <span className="block md:inline">Compliance </span>
                        <span className="block md:inline">Services</span>
                    </h1>

                    <h2 className="mx-auto mb-6 max-w-[16rem] bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-base font-bold text-transparent sm:max-w-[20rem] sm:text-lg md:mb-8 md:max-w-3xl md:text-3xl">
                        Systematic frameworks for India&apos;s data protection requirements.
                    </h2>

                    <p className="mx-auto mb-0 max-w-[16rem] font-sans text-sm font-medium leading-relaxed text-indigo-100/80 sm:max-w-[20rem] sm:text-lg md:mb-10 md:max-w-3xl md:text-xl">
                        The Digital Personal Data Protection Act (DPDPA) 2023 establishes comprehensive obligations for organizations processing personal data of Indian citizens. We help you build compliant, sustainable governance frameworks, transforming regulatory requirements into strategic advantage.
                    </p>

                </div>
            </div>

            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#050A18] to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Hero;
