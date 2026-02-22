import React from 'react';
import type { Metadata } from 'next';
import Logo from '@/components/ui/Logo';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Coming Soon',
    description: 'ValinzTech is preparing additional technology governance and compliance resources.',
    alternates: {
        canonical: '/coming-soon',
    },
    robots: {
        index: false,
        follow: false,
    },
};

const ComingSoon = () => {
    return (
        <div className="flex flex-col min-h-screen bg-hero-gradient overflow-hidden">
            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center px-6 relative">
                {/* Background Decor */}
                <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] z-0"></div>
                <div className="absolute bottom-[20%] left-[5%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[100px] z-0"></div>

                <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
                    {/* Logo */}
                    <div className="mb-12 transform hover:scale-105 transition-transform duration-700">
                        <Logo className="w-64 md:w-80 h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] contrast-125 saturate-50 brightness-110" />
                    </div>

                    {/* Content */}
                    <div className="mb-6 inline-block px-4 py-1.5 border border-[rgba(100,255,218,0.2)] rounded-full backdrop-blur-md bg-[rgba(10,25,47,0.4)]">
                        <span className="text-xs font-bold tracking-[0.3em] text-[var(--color-text-accent)] uppercase">Advancing Technology Governance</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight leading-none text-white uppercase italic pr-4">
                        Coming <br />
                        <span className="text-[var(--color-text-white)] bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-blue-400 inline-block pr-6">Back Soon</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-12 leading-relaxed font-medium">
                        We are currently building an intelligence-driven platform for your security, compliance, and technology assurance needs.
                    </p>

                    {/* Contact Shortcut */}
                    <div className="flex flex-col sm:flex-row gap-6 mb-12">
                        <a
                            href="mailto:contact@valinztech.com"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[var(--color-primary-dark)] rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-xl hover:-translate-y-1"
                        >
                            <Mail size={20} />
                            Email Us
                        </a>
                        <a
                            href="tel:+919953562762"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white rounded-xl font-bold hover:bg-white/5 transition-all shadow-xl hover:-translate-y-1 backdrop-blur-sm"
                        >
                            <Phone size={20} />
                            Call Now
                        </a>
                    </div>

                    <div className="text-[var(--color-text-accent)] text-sm font-semibold tracking-widest flex items-center gap-2">
                        STAY TUNED <ArrowRight size={16} />
                    </div>
                </div>
            </main>

            {/* Reuse Footer */}
            <Footer />
        </div>
    );
};

export default ComingSoon;
