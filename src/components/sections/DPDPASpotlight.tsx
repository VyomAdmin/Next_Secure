import React from 'react';
import Button from '../ui/Button';
import { ClipboardCheck, Grid, ShieldCheck } from 'lucide-react';

const DPDPASpotlight = () => {
    return (
        <section id="dpdpa" className="py-24 bg-[#0D1426] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-block px-4 py-1 border border-blue-500/20 rounded-full bg-blue-900/10 mb-6">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Featured Service</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                        DPDPA Compliance: India&apos;s New Data Protection Reality
                    </h2>
                    <p className="text-xl text-slate-300 leading-relaxed font-medium">
                        The Digital Personal Data Protection Act (DPDPA) 2023 brings significant compliance obligations for organizations handling Indian citizens&apos; data. With penalties up to INR 250 crores, organizations need systematic frameworks, not just checklists.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    <div className="bg-[#020617]/50 border border-white/5 rounded-[2rem] p-10 flex flex-col items-center text-center group hover:border-blue-500/20 transition-all">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8">
                            <ClipboardCheck className="text-blue-400" size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Gap Assessment</h3>
                        <p className="text-slate-400 text-base font-medium leading-relaxed">
                            Comprehensive analysis of current compliance posture against DPDPA requirements.
                        </p>
                    </div>

                    <div className="bg-[#020617]/50 border border-blue-500/30 rounded-[2rem] p-10 flex flex-col items-center text-center group relative overflow-hidden">
                        <div className="absolute top-0 right-0 py-1.5 px-4 bg-blue-500 text-[10px] font-black uppercase text-white tracking-[0.2em] rounded-bl-xl">Key Step</div>
                        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8">
                            <Grid className="text-blue-400" size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Framework Implementation</h3>
                        <p className="text-slate-400 text-base font-medium leading-relaxed">
                            Systematic governance structures for Notice & Consent, Data security, and Breach Management.
                        </p>
                    </div>

                    <div className="bg-[#020617]/50 border border-white/5 rounded-[2rem] p-10 flex flex-col items-center text-center group hover:border-blue-500/20 transition-all">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8">
                            <ShieldCheck className="text-blue-400" size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Ongoing Assurance</h3>
                        <p className="text-slate-400 text-base font-medium leading-relaxed">
                            Continuous monitoring and validation to maintain compliance.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <Button
                        variant="secondary"
                        href="/services"
                        className="text-sm py-4 px-10 bg-white/15 text-white border-white/30 rounded-2xl font-bold shadow-[0_12px_28px_rgba(0,0,0,0.25)] backdrop-blur-md hover:bg-white/22 hover:shadow-[0_0_22px_rgba(255,255,255,0.16)] whitespace-nowrap"
                    >
                        Explore Services
                    </Button>
                    <p className="text-xl md:text-2xl font-bold text-white tracking-wide opacity-95 text-center">
                        From readiness assessment to full implementation | Fixed-scope engagements
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DPDPASpotlight;
