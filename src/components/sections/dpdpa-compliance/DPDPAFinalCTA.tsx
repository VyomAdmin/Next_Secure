import React from 'react';
import { Mail, Phone, MessageCircle, ChevronRight } from 'lucide-react';
import Button from '../../ui/Button';

const DPDPAFinalCTA = () => {
    return (
        <section className="py-32 bg-[#050A18] border-t border-white/5 relative overflow-hidden">
            {/* Background decoration */}
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
                        Start Your DPDPA Compliance Journey
                    </h2>
                    <p className="text-lg md:text-2xl text-indigo-100/80 mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
                        Schedule a free consultation to understand your DPDPA obligations and receive a customized roadmap.
                    </p>

                    <div className="mb-16">
                        <Button
                            variant="secondary"
                            href="/about-contact#contact-form"
                            className="min-w-[300px] justify-center text-sm py-5 px-10 uppercase tracking-widest bg-white text-indigo-950 hover:bg-indigo-50 border-none rounded-2xl shadow-[0_0_60px_rgba(255,255,255,0.25)] font-black group"
                        >
                            Schedule Free DPDPA Assessment
                            <ChevronRight size={16} className="ml-2 inline group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    {/* Secondary contact options */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-14">
                        <a
                            href="mailto:dpdpa@valinztech.com"
                            className="flex items-center gap-3 text-indigo-200/70 hover:text-white transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <Mail size={18} />
                            </div>
                            <span className="font-medium text-sm">dpdpa@valinztech.com</span>
                        </a>

                        <div className="hidden sm:block w-[1px] h-8 bg-white/10"></div>

                        <a
                            href="tel:+919953562762"
                            className="flex items-center gap-3 text-indigo-200/70 hover:text-white transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <Phone size={18} />
                            </div>
                            <span className="font-medium text-sm">+91-995-356-2762</span>
                        </a>

                        <div className="hidden sm:block w-[1px] h-8 bg-white/10"></div>

                        <a
                            href="https://wa.me/91XXXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-indigo-200/70 hover:text-white transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <MessageCircle size={18} />
                            </div>
                            <span className="font-medium text-sm">WhatsApp: Quick questions</span>
                        </a>
                    </div>

                    {/* Supporting text */}
                    <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center text-xs font-bold uppercase tracking-[0.18em] text-indigo-100/50">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                            30-minute consultations
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-200/40"></span>
                            No obligation
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-200/40"></span>
                            Immediate next steps
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DPDPAFinalCTA;
