import React from 'react';
import Button from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react';

const ServicesFinalCTA = () => {
    return (
        <section className="py-32 bg-[#050A18] border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#3b82f6 0.5px, transparent 0.5px), linear-gradient(90deg, #3b82f6 0.5px, transparent 0.5px)',
                        backgroundSize: '40px 40px',
                    }}
                ></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-400/5 blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.95] uppercase">
                        Let&apos;s Build Your Governance Framework
                    </h2>
                    <p className="text-lg md:text-2xl text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
                        Schedule a free consultation to discuss your technology governance challenges and design a tailored roadmap.
                    </p>

                    <Button
                        variant="primary"
                        href="/about-contact#contact-form"
                        className="min-w-[280px] justify-center bg-blue-600 hover:bg-blue-500 text-white border-none py-5 px-12 rounded-full font-black tracking-wide shadow-[0_0_60px_rgba(59,130,246,0.25)] group"
                    >
                        Schedule Free Consultation
                        <ChevronRight size={16} className="ml-2 inline group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center mt-12 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>No obligation</span>
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400/40"></span>30-minute sessions</span>
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-300/30"></span>Actionable outcomes</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesFinalCTA;
