import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Cpu, ShieldCheck, Zap } from 'lucide-react';
import Button from '../../ui/Button';

const Hero = () => {
    return (
        <section className="relative flex min-h-[85svh] items-center overflow-hidden bg-[#050A18] pb-20 pt-28 md:min-h-[75vh] md:pb-20 md:pt-36">
            {/* Dynamic Background Graphics */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#050A18]/90 via-[#050A18]/60 to-transparent md:from-[#050A18]/95 md:via-[#050A18]/70 md:to-transparent" />
                <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#050A18] via-transparent to-[#050A18]/20" />
                
                {/* Tech Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'linear-gradient(#3b82f6 0.5px, transparent 0.5px), linear-gradient(90deg, #3b82f6 0.5px, transparent 0.5px)',
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Glowing Orbs */}
                <div className="absolute top-[12%] left-1/2 h-[55%] w-[75%] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[150px]" />
                <div className="absolute bottom-10 right-[15%] h-[45%] w-[45%] rounded-full bg-[#64ffda]/10 blur-[130px]" />
                <div className="absolute top-1/3 left-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="max-w-4xl text-center md:text-left">
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-md md:mb-8">
                        <span className="h-2 w-2 rounded-full bg-[#64ffda] animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white md:text-[11px] md:tracking-[0.3em]">
                            Enterprise AI Advisory & Engineering
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-black uppercase leading-[1.08] tracking-tight text-white sm:text-5xl md:mx-0 md:mb-8 md:text-6xl lg:text-7xl">
                        AI Infra, Build <br className="hidden sm:inline" />
                        <span className="bg-gradient-to-r from-blue-400 via-[#64ffda] to-indigo-300 bg-clip-text text-transparent">
                            & Governance
                        </span>
                    </h1>

                    {/* Subheading */}
                    <h2 className="mx-auto mb-6 max-w-3xl text-lg font-bold text-slate-200 sm:text-xl md:mx-0 md:mb-8 md:text-2xl leading-snug">
                        Scale sovereign, high-performance AI systems with institutional security and regulatory compliance.
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mb-10 max-w-3xl font-sans text-sm font-medium leading-relaxed text-indigo-100/80 sm:text-base md:mx-0 md:mb-12 md:text-lg">
                        From GPU compute sizing and distributed inference optimization to custom LLM/RAG pipeline builds and autonomous safety guardrails. We help enterprises navigate the full artificial intelligence lifecycle while adhering to the EU AI Act, MeitY guidelines, and NIST AI RMF.
                    </p>

                    {/* CTA Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-16">
                        <Button
                            variant="primary"
                            href="/about-contact#contact-form"
                            className="w-full sm:w-auto py-5 px-9 text-xs sm:text-sm tracking-[0.16em] uppercase font-black bg-[#0052CC] text-white hover:bg-[#64ffda] hover:!text-black rounded-full shadow-2xl transition-all duration-200 ease-in-out group"
                        >
                            SCHEDULE AI CONSULTATION
                            <ChevronRight size={16} className="ml-2 inline group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <a
                            href="#pillars"
                            className="w-full sm:w-auto inline-flex items-center justify-center py-5 px-8 text-xs sm:text-sm tracking-[0.16em] uppercase font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all"
                        >
                            Explore Architecture
                            <ArrowRight size={16} className="ml-2 inline" />
                        </a>
                    </div>

                    {/* Highlight Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-3xl">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                <Zap className="text-[#64ffda]" size={22} />
                            </div>
                            <div className="text-left">
                                <p className="text-xl md:text-2xl font-black text-white">40-60%</p>
                                <p className="text-xs font-semibold text-slate-400">Compute Cost Efficiency</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                                <Cpu className="text-blue-400" size={22} />
                            </div>
                            <div className="text-left">
                                <p className="text-xl md:text-2xl font-black text-white">Zero-Leakage</p>
                                <p className="text-xs font-semibold text-slate-400">Isolated Enterprise Perimeter</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                                <ShieldCheck className="text-[#64ffda]" size={22} />
                            </div>
                            <div className="text-left">
                                <p className="text-xl md:text-2xl font-black text-white">Full-Stack</p>
                                <p className="text-xs font-semibold text-slate-400">EU AI Act & MeitY Alignment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-[#050A18] to-transparent pointer-events-none" />
        </section>
    );
};

export default Hero;

