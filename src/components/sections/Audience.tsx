import React from 'react';

const Audience = () => {
    const segments = [
        {
            title: "Growing Startups",
            description: "Building governance foundations for investor due diligence and sustainable growth. Common needs: SOC 2, DPDPA readiness, security assessments."
        },
        {
            title: "Scaling Companies",
            description: "Navigating regulatory requirements while maintaining operational agility. Common needs: ISO 27001, comprehensive privacy programs, AI governance."
        },
        {
            title: "Established Enterprises",
            description: "Meeting stakeholder expectations and regulatory obligations across complex operations. Common needs: Integrated GRC, third-party risk, continuous assurance."
        }
    ];

    return (
        <section className="py-24 bg-[#020617] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-block px-4 py-1 border border-blue-500/20 rounded-full bg-blue-900/10 mb-6">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Who We Serve</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                        Built for Organizations Committed to Excellence
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {segments.map((segment, index) => (
                        <div key={index} className="bg-[#0D1426]/40 border border-white/5 p-8 md:p-10 rounded-[2rem] hover:border-blue-500/20 transition-all">
                            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-4">{segment.title}</h3>
                            <p className="text-slate-300 font-medium leading-relaxed">
                                {segment.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.25em]">
                        Delhi, India | Serving Pan India and beyond.</p>
                </div>
            </div>
        </section>
    );
};

export default Audience;
