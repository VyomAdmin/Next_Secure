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

                {/* Visual integration circles */}
                <div className="flex justify-center mb-20">
                    <div className="relative w-full max-w-3xl h-64 hidden md:flex items-center justify-center">
                        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-blue-500/20 bg-blue-500/5 flex items-center justify-center text-center p-6">
                            <span className="text-xs font-black text-blue-400 uppercase tracking-widest leading-relaxed">Privacy &<br />Data Protection</span>
                        </div>
                        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-blue-500/20 bg-blue-500/5 flex items-center justify-center text-center p-6">
                            <span className="text-xs font-black text-blue-400 uppercase tracking-widest leading-relaxed">Security &<br />Risk</span>
                        </div>
                        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-48 h-48 rounded-full border border-blue-500/20 bg-blue-500/5 flex items-center justify-center text-center p-6">
                            <span className="text-xs font-black text-blue-400 uppercase tracking-widest leading-relaxed">AI &<br />Governance</span>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                            <span className="text-[9px] font-black text-white uppercase tracking-widest text-center leading-relaxed">Holistic<br />Governance</span>
                        </div>
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
                        href="#contact"
                        className="bg-blue-600 hover:bg-blue-500 text-white border-none py-4 px-10 rounded-full font-bold"
                    >
                        Discuss Your Needs
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default IntegratedGovernance;
