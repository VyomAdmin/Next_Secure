import React from 'react';
import { Download, FileText, PlayCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Resources = () => {
    const resources = [
        {
            icon: Download,
            title: "DPDPA Compliance Checklist",
            description: "Free downloadable checklist covering key requirements",
            badge: "COMING SOON",
            link: "#"
        },
        {
            icon: FileText,
            title: "Understanding DPDPA Requirements",
            description: "Comprehensive guide to Act provisions",
            action: "Read Article",
            link: "/blog/dpdpa-guide"
        },
        {
            icon: PlayCircle,
            title: "DPDPA Implementation Webinar",
            description: "On-demand recording of our implementation framework",
            badge: "COMING SOON",
            link: "#"
        }
    ];

    return (
        <section className="py-24 bg-[#050A18] relative overflow-hidden">
            {/* Subtle scanline effect */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100% 4px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase font-sans">
                        DPDPA Knowledge Center
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
                    {resources.map((resource, index) => {
                        const Icon = resource.icon;
                        return (
                            <div
                                key={index}
                                className="group p-10 rounded-[3rem] bg-[#0D1426]/30 border border-white/5 hover:border-indigo-500/20 transition-all duration-500 flex flex-col items-start"
                            >
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-500/10 transition-colors duration-500">
                                    <Icon className="text-slate-400 group-hover:text-indigo-400" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight leading-tight">
                                    {resource.title}
                                </h3>
                                <p className="text-slate-400 mb-10 font-medium leading-relaxed">
                                    {resource.description}
                                </p>

                                <div className="mt-auto">
                                    {resource.badge ? (
                                        <span className="text-[10px] font-black text-slate-500 tracking-[0.2em]">{resource.badge}</span>
                                    ) : (
                                        <Link href={resource.link} className="flex items-center gap-2 text-sm font-black text-white tracking-widest uppercase hover:text-indigo-400 transition-colors group/link">
                                            {resource.action} <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <Link href="/blog" className="inline-flex items-center gap-4 text-xl md:text-2xl font-black text-white/50 hover:text-indigo-400 transition-all group pt-12 border-t border-white/5">
                        Latest DPDPA Insights <span className="text-indigo-500 group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Resources;
