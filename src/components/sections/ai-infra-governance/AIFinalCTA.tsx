import React from 'react';
import { Mail, Phone, ChevronRight, Lock, CheckCircle2 } from 'lucide-react';
import Button from '../../ui/Button';

const AIFinalCTA = () => {
    return (
        <section className="py-24 md:py-32 bg-[#050A18] border-t border-white/5 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#3b82f6 0.5px, transparent 0.5px), linear-gradient(90deg, #3b82f6 0.5px, transparent 0.5px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#64ffda]/10 blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                        <Lock size={12} className="text-[#64ffda]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                            Sovereign & Compliant AI
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase leading-[1.05]">
                        Build High-Performance AI <br />
                        <span className="bg-gradient-to-r from-blue-400 via-[#64ffda] to-indigo-300 bg-clip-text text-transparent">
                            With Sovereign Governance
                        </span>
                    </h2>
                    <p className="text-base sm:text-xl text-indigo-100/80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                        Schedule a 30-minute technical session to assess your compute architecture, benchmark model latency, and audit AI regulatory compliance.
                    </p>

                    <div className="flex flex-col items-center gap-10 mb-14">
                        <Button
                            variant="secondary"
                            href="/contact"
                            className="w-full sm:w-auto sm:min-w-[320px] justify-center text-xs sm:text-sm py-5 px-8 uppercase tracking-widest bg-white text-indigo-950 hover:bg-[#64ffda] hover:text-black border-none rounded-2xl shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(100,255,218,0.25)] font-black group transition-all duration-200 ease-in-out"
                        >
                            BOOK ARCHITECTURE CONSULTATION
                            <ChevronRight size={16} className="ml-2 inline group-hover:translate-x-1 transition-transform" />
                        </Button>

                        {/* Assurance Badges */}
                        <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center text-xs font-bold uppercase tracking-[0.16em] text-indigo-100/60">
                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-[#64ffda]" />
                                30-Minute Architecture Review
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-[#64ffda]" />
                                Mutual NDA Guaranteed
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-[#64ffda]" />
                                No Vendor Lock-In
                            </span>
                        </div>
                    </div>

                    {/* Direct Contact Links */}
                    <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm font-medium text-slate-400">
                        <a
                            href="mailto:contact@valinztech.com"
                            className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                        >
                            <Mail size={16} className="text-[#64ffda]" />
                            <span>contact@valinztech.com</span>
                        </a>
                        <span className="hidden sm:inline text-white/20">•</span>
                        <a
                            href="tel:+919953562762"
                            className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                        >
                            <Phone size={16} className="text-[#64ffda]" />
                            <span>+91 9953562762</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIFinalCTA;

