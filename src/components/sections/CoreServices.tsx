import React from 'react';
import Button from '../ui/Button';
import {
    ArrowRight,
    BrainCircuit,
    CheckSquare,
    GraduationCap,
    Network,
    ScanSearch,
    ShieldCheck,
} from 'lucide-react';

const CoreServices = () => {
    const services = [
        {
            title: "Privacy & Data Protection",
            description: "GDPR, DPDPA, and comprehensive privacy program implementation with systematic frameworks.",
            icon: ShieldCheck,
            link: "/about-contact#about"
        },
        {
            title: "Cybersecurity Consulting",
            description: "Risk Assessment , Compliance and Threat mitigation.",
            icon: Network,
            link: "/about-contact#about"
        },
        {
            title: "Audits & Assessments",
            description: "Independent validation of security posture, code quality, and architectural decisions.",
            icon: ScanSearch,
            link: "/about-contact#about"
        },
        {
            title: "Training & Enablement",
            description: "Role-based training, awareness programs, and executive education to build internal capability.",
            icon: GraduationCap,
            link: "/about-contact#about"
        },
        {
            title: "Compliance & Risk Management",
            description: "Governance, Risk & Compliance through structured, intelligence-driven programs.",
            icon: CheckSquare,
            link: "/about-contact#about"
        },
        {
            title: "AI Governance & Ethics",
            description: "Responsible AI frameworks, risk assessments, and regulatory alignment for emerging technologies.",
            icon: BrainCircuit,
            link: "/about-contact#about"
        }
    ];

    return (
        <section id="services" className="py-24 bg-[#020617] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-block px-4 py-1 border border-blue-500/20 rounded-full bg-blue-900/10 mb-6">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Core Services Overview</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                        Comprehensive Technology Assurance
                    </h2>
                    <p className="text-xl text-slate-300 leading-relaxed font-medium">
                        Beyond DPDPA, we provide intelligence-driven consulting across every
                        dimension of technology governance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="bg-[#0D1426]/50 border border-white/5 p-8 rounded-[2rem] hover:border-blue-500/20 transition-all group">
                                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Icon className="text-blue-400" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 min-h-[72px]">
                                    {service.description}
                                </p>
                                <a href={service.link} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-400 hover:text-white transition-colors">
                                    View Services <ArrowRight size={14} />
                                </a>
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-center mt-14">
                    <Button
                        variant="secondary"
                        href="/about-contact#about"
                        className="text-sm py-4 px-10 bg-white/15 text-white border-white/30 rounded-2xl font-bold shadow-[0_12px_28px_rgba(0,0,0,0.25)] backdrop-blur-md hover:bg-white/22 hover:shadow-[0_0_22px_rgba(255,255,255,0.16)] whitespace-nowrap"
                    >
                        View All Services <ArrowRight size={16} className="ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CoreServices;
