import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const TrustCredibility = () => {
    const credentials = [
        'ISO 27001 Expertise',
        'ISO 31000 Expertise',
        'GDPR & DPDPA Specialists',
        'SOC 2 Implementation',
        'CERT-In Reporting',
        'AI Risk Frameworks',
        'Systematic Methodologies',
    ];

    return (
        <section className="py-24 bg-[#0D1426] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-block px-4 py-1 border border-blue-500/20 rounded-full bg-blue-900/10 mb-6">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Trust & Credibility</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                        Expert Guidance, Proven Methodology
                    </h2>
                    <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
                        Our team brings deep expertise across cybersecurity, privacy, AI governance, and risk management—combining technical knowledge with business acumen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
                    {credentials.map((item) => (
                        <div key={item} className="flex items-center gap-3 p-4 bg-[#020617]/55 rounded-xl border border-white/5 hover:border-blue-500/20 transition-colors">
                            <CheckCircle2 className="text-blue-400 shrink-0" size={20} />
                            <span className="text-white font-medium text-sm">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustCredibility;
