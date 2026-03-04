import React from 'react';
import Button from '../../ui/Button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#050A18]">
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
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8 inline-block px-5 py-2 border border-white/20 rounded-full backdrop-blur-md bg-white/10">
                        <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">
                            FEATURED SERVICE
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.97] text-white mb-8 uppercase">
                        DPDPA Compliance Services
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-indigo-200 mb-8">
                        Systematic frameworks for India&apos;s data protection requirements.
                    </h2>

                    <p className="text-lg md:text-xl text-indigo-100/80 mb-10 max-w-3xl mx-auto leading-relaxed font-medium font-sans">
                        The Digital Personal Data Protection Act (DPDPA) 2023 establishes comprehensive obligations for organizations processing personal data of Indian citizens. We help you build compliant, sustainable governance frameworks, transforming regulatory requirements into strategic advantage.
                    </p>

                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050A18] to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Hero;
