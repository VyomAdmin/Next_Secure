import React from 'react';
import Link from 'next/link';
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
            title: 'Privacy & Data Protection',
            description:
                'GDPR, DPDPA, and comprehensive privacy program implementation with systematic frameworks.',
            icon: ShieldCheck,
            link: '/services#privacy-data-protection',
        },
        {
            title: 'Cybersecurity Consulting',
            description: 'Risk assessment, compliance, and threat mitigation for modern digital operations.',
            icon: Network,
            link: '/services#cybersecurity-consulting',
        },
        {
            title: 'Audits & Assessments',
            description:
                'Independent validation of security posture, code quality, and architectural decisions.',
            icon: ScanSearch,
            link: '/services#technical-audits',
        },
        {
            title: 'Training & Enablement',
            description:
                'Role-based training, awareness programs, and executive education to build internal capability.',
            icon: GraduationCap,
            link: '/services#training-enablement',
        },
        {
            title: 'Compliance & Risk Management',
            description:
                'Governance, risk, and compliance through structured, intelligence-driven programs.',
            icon: CheckSquare,
            link: '/services#compliance-risk-management',
        },
        {
            title: 'AI Governance & Ethics',
            description:
                'Responsible AI frameworks, risk assessments, and regulatory alignment for emerging technologies.',
            icon: BrainCircuit,
            link: '/services#ai-governance',
        },
    ];

    return (
        <section id="services" className="relative overflow-hidden bg-[#020617] py-24">
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            'linear-gradient(#3b82f6 0.5px, transparent 0.5px), linear-gradient(90deg, #3b82f6 0.5px, transparent 0.5px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="absolute left-1/2 top-28 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="mx-auto mb-20 max-w-4xl text-center">
                    <div className="mb-6 inline-block rounded-full bg-blue-900/10 px-4 py-1">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                            Core Services Overview
                        </span>
                    </div>
                    <h2 className="mb-8 text-4xl font-black tracking-tighter text-white md:text-6xl">
                        Comprehensive Technology Assurance
                    </h2>
                    <p className="text-xl font-medium leading-relaxed text-slate-300">
                        We provide intelligence-driven consulting across every
                        dimension of technology governance.
                    </p>
                </div>

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className="flex min-h-[320px] flex-col rounded-[2.25rem] bg-[#0A1020]/90 p-8 shadow-[0_20px_60px_rgba(2,8,23,0.45)] backdrop-blur-sm md:p-10"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                                    <Icon className="text-blue-400" size={28} />
                                </div>
                                <h3 className="mb-4 text-3xl font-bold tracking-tight text-white">
                                    {service.title}
                                </h3>
                                <p className="text-base font-medium leading-relaxed text-slate-400">
                                    {service.description}
                                </p>
                                <Link
                                    href={service.link}
                                    className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-black uppercase tracking-widest text-blue-400 transition-colors hover:text-white"
                                >
                                    View Services <ArrowRight size={14} />
                                </Link>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-14 flex justify-center">
                    <Button
                        variant="secondary"
                        href="/services"
                        className="whitespace-nowrap rounded-2xl bg-white/15 px-10 py-4 text-sm font-bold text-white shadow-[0_12px_28px_rgba(0,0,0,0.25)] backdrop-blur-md hover:bg-[#64ffda] hover:text-black hover:shadow-[0_0_22px_rgba(100,255,218,0.16)] transition-all duration-200 ease-in-out"
                    >
                        View All Services <ArrowRight size={16} className="ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CoreServices;
