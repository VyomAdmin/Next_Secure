import React from 'react';
import Button from '../../ui/Button';

const Pricing = () => {
    const tiers = [
        {
            title: "READINESS ASSESSMENT",
            subtitle: "Ideal for: Understanding your current state",
            price: "₹[X],000",
            duration: "2 weeks",
            features: [
                "Gap assessment against DPDPA",
                "Data inventory and flow mapping",
                "Risk prioritization",
                "Readiness roadmap",
                "Executive summary"
            ],
            cta: "Schedule Free Consultation"
        },
        {
            title: "FRAMEWORK IMPLEMENTATION",
            subtitle: "Ideal for: Building complete compliance",
            price: "₹[X],000",
            duration: "8-10 weeks",
            features: [
                "Everything in Assessment",
                "Complete governance framework",
                "Policy and procedure suite",
                "Technical implementation support",
                "Team training (up to 20 staff)",
                "30-day post-implementation support"
            ],
            cta: "Schedule Free Consultation",
            popular: true
        },
        {
            title: "ONGOING ASSURANCE",
            subtitle: "Ideal for: Maintaining continuous compliance",
            price: "₹[X],000/month",
            duration: "12 months",
            features: [
                "Quarterly compliance audits",
                "Regulatory update monitoring",
                "Incident response support",
                "Annual training refreshers",
                "Continuous framework refinement",
                "Priority advisory access"
            ],
            cta: "Schedule Free Consultation"
        }
    ];

    return (
        <section className="py-24 bg-[#020617] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase font-sans">
                        Transparent, Value-Based Pricing
                    </h2>
                    <p className="text-xl text-slate-400 font-medium">
                        Fixed-scope engagements designed for different organizational needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`flex flex-col p-10 rounded-[3rem] bg-[#0D1426]/50 border transition-all duration-500 relative ${tier.popular ? 'border-indigo-500/40 ring-1 ring-indigo-500/20 scale-105 z-10' : 'border-white/5'}`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 right-12 -translate-y-1/2 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-[0.2em] py-2 px-4 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-10">
                                <h3 className="text-xl font-black text-white mb-2 tracking-widest uppercase">{tier.title}</h3>
                                <p className="text-sm font-medium text-slate-500 mb-8">{tier.subtitle}</p>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-black text-white tracking-tighter">{tier.price}</span>
                                    <span className="text-slate-500 font-medium">+ GST</span>
                                </div>
                                <span className="text-xs font-bold text-indigo-400/80 uppercase tracking-widest">Timeline: {tier.duration}</span>
                            </div>

                            <div className="flex-grow space-y-4 mb-12">
                                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest block mb-6">What&apos;s Included:</span>
                                {tier.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                                        <span className="text-sm font-medium text-slate-300 leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                variant={tier.popular ? "primary" : "secondary"}
                                href="#contact"
                                className={`w-full py-4 rounded-2xl text-xs uppercase tracking-[0.2em] font-black transition-all duration-200 ease-in-out ${tier.popular ? 'bg-indigo-600 hover:bg-[#64ffda] hover:text-black border-none text-white' : 'bg-white/5 border-white/10 hover:bg-[#64ffda] hover:text-black hover:border-[#64ffda]'}`}
                            >
                                {tier.cta}
                            </Button>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-20 text-slate-500 text-sm font-medium max-w-2xl mx-auto italic">
                    &quot;Custom packages available for enterprise organizations and specific industry requirements. All engagements include knowledge transfer and documentation.&quot;
                </p>
            </div>
        </section>
    );
};

export default Pricing;
