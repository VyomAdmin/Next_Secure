import React from 'react';
import Link from 'next/link';
import { Calendar, MessageSquare, Briefcase, HelpCircle, ArrowRight } from 'lucide-react';

const paths = [
    {
        id: 'consultation',
        title: 'Book a Consultation',
        badge: 'Recommended',
        tagline: '30-minute architecture & compliance roadmap',
        description: 'Meet with senior technology and privacy advisors to assess your readiness under mutual NDA.',
        href: '/contact?intent=consultation',
        actionLabel: 'Schedule Session',
        icon: Calendar,
        highlight: true,
    },
    {
        id: 'work',
        title: 'See the Work',
        badge: 'Capabilities',
        tagline: 'Frameworks, blueprints & case studies',
        description: 'Explore how we engineer sovereign AI pipelines, enforce DPDPA compliance, and secure cloud environments.',
        href: '/contact?intent=work',
        actionLabel: 'Request Capability Deck',
        icon: Briefcase,
        highlight: false,
    },
    {
        id: 'conversation',
        title: 'Start a Conversation',
        badge: 'General Advisory',
        tagline: 'Strategic partnerships & technology guidance',
        description: 'Have a preliminary question or looking for strategic partnership opportunities? Let’s talk.',
        href: '/contact?intent=conversation',
        actionLabel: 'Start Chat',
        icon: MessageSquare,
        highlight: false,
    },
    {
        id: 'support',
        title: 'Request Support',
        badge: 'Operational',
        tagline: 'Active framework & regulatory operations',
        description: 'Dedicated support for active governance programs, vendor assessments, or compliance updates.',
        href: '/contact?intent=support',
        actionLabel: 'Request Assistance',
        icon: HelpCircle,
        highlight: false,
    },
];

const HomeFourPaths = () => {
    return (
        <section className="py-20 bg-[#050A18] relative border-b border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-block px-4 py-1.5 border border-white/10 rounded-full bg-white/5 mb-4 backdrop-blur-md">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#64ffda]">
                            Enterprise Engagement Paths
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight uppercase">
                        How Can We Assist Your Business?
                    </h2>
                    <p className="text-base sm:text-lg text-slate-400 font-medium max-w-2xl mx-auto">
                        Choose the engagement path tailored to your immediate technical and governance requirements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {paths.map((p) => {
                        const Icon = p.icon;
                        return (
                            <Link
                                key={p.id}
                                href={p.href}
                                className={`group flex flex-col justify-between p-7 rounded-[2rem] border transition-all duration-300 hover:-translate-y-1 ${
                                    p.highlight
                                        ? 'bg-[#0D1426]/70 border-[#64ffda]/40 shadow-[0_15px_40px_rgba(100,255,218,0.12)]'
                                        : 'bg-[#0D1426]/30 border-white/5 hover:border-white/20'
                                }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div
                                            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                                                p.highlight
                                                    ? 'bg-[#64ffda] text-black'
                                                    : 'bg-white/5 text-[#64ffda] border border-white/10'
                                            }`}
                                        >
                                            <Icon size={22} />
                                        </div>
                                        <span
                                            className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                                                p.highlight
                                                    ? 'bg-[#64ffda]/20 text-[#64ffda]'
                                                    : 'bg-white/5 text-slate-400'
                                            }`}
                                        >
                                            {p.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-[#64ffda] transition-colors">
                                        {p.title}
                                    </h3>
                                    <p className="text-xs font-semibold text-slate-400 mb-3 italic">
                                        {p.tagline}
                                    </p>
                                    <p className="text-sm font-medium text-slate-300 leading-relaxed mb-6">
                                        {p.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#64ffda] group-hover:translate-x-0.5 transition-transform">
                                    <span>{p.actionLabel}</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HomeFourPaths;

