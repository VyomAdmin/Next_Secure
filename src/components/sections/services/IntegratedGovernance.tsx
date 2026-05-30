import React from 'react';
import Button from '@/components/ui/Button';

const integrations = [
    {
        combo: "Privacy + Security",
        description: "DPDPA compliance requires security controls. Our privacy programs include technical security measures that satisfy both regulatory requirements."
    },
    {
        combo: "AI + Governance",
        description: "AI systems need both technical governance and compliance frameworks. We integrate AI risk management with broader GRC programs."
    },
    {
        combo: "Compliance + Training",
        description: "Sustainable compliance requires capability building. Our implementations include training that ensures your team can maintain systems."
    }
];

const IntegratedGovernance = () => {
    return (
        <section className="py-24 bg-[#020617] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
                        Integrated Governance Approach
                    </h2>
                    <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-3xl mx-auto">
                        Technology governance isn&apos;t siloed. We see the connections between privacy, security, AI, and compliance—creating holistic frameworks that address risk comprehensively.
                    </p>
                </div>

                {/* Proper SVG Venn Diagram */}
                <div className="flex justify-center mb-20 px-4">
                    <div className="w-full max-w-[540px] hidden md:block mx-auto">
                        <svg viewBox="0 0 540 420" className="w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="privacyGrad" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.22" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.04" />
                                </radialGradient>
                                <radialGradient id="securityGrad" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.22" />
                                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.04" />
                                </radialGradient>
                                <radialGradient id="aiGrad" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#64ffda" stopOpacity="0.18" />
                                    <stop offset="100%" stopColor="#64ffda" stopOpacity="0.03" />
                                </radialGradient>
                            </defs>

                            {/* Circle 1 — Privacy & Data Protection (top-center) */}
                            <circle cx="270" cy="148" r="138" fill="url(#privacyGrad)" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.35" />
                            {/* Circle 2 — Security & Risk (bottom-left) */}
                            <circle cx="190" cy="278" r="138" fill="url(#securityGrad)" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.35" />
                            {/* Circle 3 — AI & Governance (bottom-right) */}
                            <circle cx="350" cy="278" r="138" fill="url(#aiGrad)" stroke="#64ffda" strokeWidth="1" strokeOpacity="0.3" />

                            {/* Center glow at triple intersection */}
                            <circle cx="270" cy="234" r="34" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

                            {/* === OUTER LABELS — positioned in each circle's unique petal === */}

                            {/* Privacy — top */}
                            <text x="270" y="44" textAnchor="middle" fill="#93c5fd" fontSize="9.5" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="2.5">PRIVACY &amp;</text>
                            <text x="270" y="59" textAnchor="middle" fill="#93c5fd" fontSize="9.5" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="2.5">DATA PROTECTION</text>

                            {/* Security — bottom-left */}
                            <text x="88" y="358" textAnchor="middle" fill="#a5b4fc" fontSize="9.5" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="2.5">SECURITY &amp;</text>
                            <text x="88" y="373" textAnchor="middle" fill="#a5b4fc" fontSize="9.5" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="2.5">RISK</text>

                            {/* AI — bottom-right */}
                            <text x="452" y="358" textAnchor="middle" fill="#64ffda" fontSize="9.5" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="2.5">AI &amp;</text>
                            <text x="452" y="373" textAnchor="middle" fill="#64ffda" fontSize="9.5" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="2.5">GOVERNANCE</text>

                            {/* === INTERSECTION LABELS === */}

                            {/* Privacy + Security intersection (left) */}
                            <text x="192" y="196" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="1.5">PRIVACY +</text>
                            <text x="192" y="207" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="1.5">SECURITY</text>

                            {/* Privacy + AI intersection (right) */}
                            <text x="348" y="196" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="1.5">PRIVACY +</text>
                            <text x="348" y="207" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="1.5">AI</text>

                            {/* Security + AI intersection (bottom) */}
                            <text x="270" y="323" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="1.5">SECURITY + AI</text>

                            {/* Center triple intersection */}
                            <text x="270" y="230" textAnchor="middle" fill="white" fontSize="8" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="1.5">HOLISTIC</text>
                            <text x="270" y="242" textAnchor="middle" fill="white" fontSize="8" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="1.5">GOVERNANCE</text>
                        </svg>
                    </div>

                    {/* Mobile fallback — simple vertical stack */}
                    <div className="md:hidden flex flex-col items-center gap-4 w-full max-w-xs">
                        {[
                            { label: "Privacy & Data Protection", color: "#93c5fd" },
                            { label: "Security & Risk", color: "#a5b4fc" },
                            { label: "AI & Governance", color: "#64ffda" },
                        ].map((item, i) => (
                            <div key={i} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: item.color }}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {integrations.map((item, index) => (
                        <div key={index} className="p-10 rounded-[2.5rem] bg-[#0D1426]/40 border border-white/5 hover:border-blue-500/20 transition-all duration-500">
                            <h3 className="text-lg font-black text-white mb-4 tracking-widest uppercase">{item.combo}</h3>
                            <p className="text-slate-400 font-medium leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        variant="primary"
                        href="/about-contact#contact-form"
                        className="bg-blue-600 hover:bg-[#64ffda] hover:text-black text-white border-none py-4 px-10 rounded-full font-bold transition-all duration-200 ease-in-out"
                    >
                        SCHEDULE FREE CONSULTATION
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default IntegratedGovernance;
