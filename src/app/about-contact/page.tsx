import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Phone, Mail, MapPin, ShieldCheck, Cpu, Workflow } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About & Contact',
    description: 'ValinzTech company capabilities, operating model, and contact information for DPDPA and technology governance consulting.',
    alternates: {
        canonical: '/about-contact',
    },
    openGraph: {
        title: 'About & Contact | ValinzTech',
        description: 'Company capabilities, delivery model, and direct contact information for DPDPA and technology governance consulting.',
        url: '/about-contact',
    },
    twitter: {
        title: 'About & Contact | ValinzTech',
        description: 'Company capabilities, delivery model, and direct contact information for DPDPA and technology governance consulting.',
    },
};

const capabilityBlocks = [
    {
        icon: ShieldCheck,
        title: 'DPDPA-First Advisory',
        body: 'We translate legal and governance obligations into implementable operating controls, workflows, and accountability structures.',
    },
    {
        icon: Workflow,
        title: 'Execution-Ready Frameworks',
        body: 'Our engagements are structured for action: gap assessment, remediation planning, implementation support, and assurance cycles.',
    },
    {
        icon: Cpu,
        title: 'Technology Governance Depth',
        body: 'We support data protection, risk governance, secure-by-design decisioning, and modern technology control architecture.',
    },
];

export default function AboutContactPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#050A18]">
            <Header />
            <main className="flex-grow">
                <section className="relative overflow-hidden pt-28 pb-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(167,139,250,0.18),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.16),transparent_45%),linear-gradient(180deg,#060914_0%,#0A1024_45%,#050A18_100%)]" />
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
                            backgroundSize: '24px 24px',
                        }}
                    />
                    <div className="absolute left-1/2 top-20 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[110px]" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/15 bg-white/5 p-6 md:p-10 backdrop-blur-2xl shadow-[0_30px_80px_rgba(3,7,18,0.55)]">
                            <div className="mb-8 flex items-center justify-between gap-4">
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-200">
                                    <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                                    ValinzTech Interface
                                </div>
                                <div className="hidden md:flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-rose-300/80" />
                                </div>
                            </div>

                            <div className="text-center">
                                <h1 className="mb-5 text-4xl md:text-6xl font-black tracking-tight text-white">
                                    Cyber-Intelligence Style
                                    <br />
                                    <span className="bg-gradient-to-r from-violet-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                                        About & Contact Hub
                                    </span>
                                </h1>
                                <p className="mx-auto mb-8 max-w-3xl text-base md:text-xl text-slate-300 leading-relaxed">
                                    Company positioning, delivery capabilities, and a direct path to discuss DPDPA compliance, privacy governance, and technology risk readiness.
                                </p>

                                <div className="mx-auto mb-10 flex w-full max-w-2xl items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl shadow-[0_0_28px_rgba(96,165,250,0.12)]">
                                    <div className="h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.85)]" />
                                    <span className="text-sm md:text-base text-slate-200 text-left flex-1">
                                        Ask about DPDPA readiness, governance implementation, or fixed-scope compliance support
                                    </span>
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/15 transition-colors"
                                    >
                                        Connect <ArrowRight size={14} />
                                    </a>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-1">Region</p>
                                        <p className="text-white font-semibold">Delhi NCR</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-1">Focus</p>
                                        <p className="text-white font-semibold">DPDPA + Tech Governance</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-1">Engagement Model</p>
                                        <p className="text-white font-semibold">Advisory to Implementation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about-capabilities" className="py-20 bg-[#071022] border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mb-12">
                            <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200 font-bold mb-3">About ValinzTech</p>
                            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-5">
                                Structured governance support for modern organizations
                            </h2>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                ValinzTech helps organizations design practical governance systems across privacy, compliance, security, and emerging technology risk. We focus on clarity, execution sequencing, and measurable implementation outcomes.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                            {capabilityBlocks.map((block) => {
                                const Icon = block.icon;
                                return (
                                    <div key={block.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-md">
                                        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-300/10">
                                            <Icon size={22} className="text-cyan-200" />
                                        </div>
                                        <h3 className="mb-3 text-xl font-bold text-white">{block.title}</h3>
                                        <p className="text-slate-300 leading-relaxed">{block.body}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
                            <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-7">
                                <h3 className="text-2xl font-bold text-white mb-4">How we typically work</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="rounded-xl border border-white/8 bg-[#0B1430]/70 p-4">
                                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">01 Diagnose</p>
                                        <p className="text-slate-200">Current-state review, stakeholder mapping, and risk prioritization.</p>
                                    </div>
                                    <div className="rounded-xl border border-white/8 bg-[#0B1430]/70 p-4">
                                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">02 Design</p>
                                        <p className="text-slate-200">Control architecture, policy framework, and implementation roadmap.</p>
                                    </div>
                                    <div className="rounded-xl border border-white/8 bg-[#0B1430]/70 p-4">
                                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">03 Deploy</p>
                                        <p className="text-slate-200">Execution support, coordination across teams, and rollout guidance.</p>
                                    </div>
                                    <div className="rounded-xl border border-white/8 bg-[#0B1430]/70 p-4">
                                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">04 Assure</p>
                                        <p className="text-slate-200">Validation, evidence readiness, and periodic governance refinement.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
                                <h3 className="text-2xl font-bold text-white mb-4">Best fit engagements</h3>
                                <ul className="space-y-3 text-slate-200">
                                    <li className="rounded-xl border border-white/8 bg-white/5 p-4">DPDPA readiness and implementation planning</li>
                                    <li className="rounded-xl border border-white/8 bg-white/5 p-4">Privacy governance operating model design</li>
                                    <li className="rounded-xl border border-white/8 bg-white/5 p-4">Risk and compliance management framework uplift</li>
                                    <li className="rounded-xl border border-white/8 bg-white/5 p-4">Technology governance advisory for leadership teams</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20 bg-[#050A18]">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
                            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 md:p-8 backdrop-blur-xl">
                                <p className="text-[11px] uppercase tracking-[0.24em] text-violet-200 font-bold mb-3">Contact</p>
                                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-5">
                                    Start with a direct conversation
                                </h2>
                                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                    Share your context and current priorities. We can discuss readiness gaps, implementation sequencing, and the most practical starting point.
                                </p>
                                <div className="space-y-4">
                                    <a href="tel:+919953562762" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0B1430]/70 p-4 hover:border-cyan-200/30 transition-colors">
                                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 border border-cyan-200/20">
                                            <Phone size={18} className="text-cyan-200" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Phone</p>
                                            <p className="text-white text-lg font-bold">+91-9953562762</p>
                                        </div>
                                    </a>
                                    <a href="mailto:contact@valinztech.com" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0B1430]/70 p-4 hover:border-cyan-200/30 transition-colors">
                                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 border border-cyan-200/20">
                                            <Mail size={18} className="text-cyan-200" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Email</p>
                                            <p className="text-white text-lg font-bold">contact@valinztech.com</p>
                                        </div>
                                    </a>
                                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0B1430]/70 p-4">
                                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 border border-cyan-200/20">
                                            <MapPin size={18} className="text-cyan-200" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Region</p>
                                            <p className="text-white text-lg font-bold">Delhi NCR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-violet-400/10 via-white/5 to-cyan-300/5 p-7 md:p-8 shadow-[0_20px_60px_rgba(5,10,24,0.35)]">
                                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">
                                    Complimentary Initial Consultation
                                </h3>
                                <p className="text-lg md:text-xl font-semibold text-cyan-100 leading-relaxed mb-6">
                                    Initial consultations are complimentary and no-obligation. We&apos;ll understand your situation and determine how we can help.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">Typical discussion topics</p>
                                        <p className="text-slate-200">DPDPA readiness, ownership gaps, scope definition, execution priorities.</p>
                                    </div>
                                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">Outcome</p>
                                        <p className="text-slate-200">A clear next-step recommendation, engagement fit, and delivery direction.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="tel:+919953562762"
                                        className="inline-flex justify-center items-center rounded-xl border border-white/20 bg-white/15 px-5 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/20 transition-colors"
                                    >
                                        Call Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
