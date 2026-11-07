import React from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import { MapPin, Mail, Phone } from 'lucide-react';
import { contactHref } from '@/lib/inquiry';

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-[#020617] py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="mb-12 grid grid-cols-1 gap-12 md:mb-24 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">

                    {/* Column 1: About */}
                    <div className="space-y-8">
                        <Logo className="h-10 w-auto" variant="dark" />
                        <div className="space-y-4">
                            <p className="text-sm font-bold text-white uppercase tracking-widest">Adding value & intelligence to technology</p>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                We help organizations make sense of Data Privacy, Cybersecurity and AI Compliance - transforming complex regulations into clear, structured steps that not just protect your business but build lasting trust.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-white md:mb-10">Services</h4>
                        <ul className="space-y-5">
                            {[
                                { name: 'AI Infra, Build & Governance', href: '/ai-infra-governance' },
                                { name: 'DPDPA Compliance', href: '/dpdpa-compliance' },
                                { name: 'Cybersecurity Consulting', href: '/services#cybersecurity-consulting' },
                                { name: 'Privacy & Data Protection', href: '/services#privacy-data-protection' },
                                { name: 'Audits & Assessments', href: '/services#audits-assessments' },
                                { name: 'AI Governance & Ethics', href: '/services#ai-infra-governance' },
                                { name: 'Compliance & Risk Management', href: '/services#compliance-risk-management' },
                                { name: 'Training & Enablement', href: '/services#training-enablement' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm font-medium text-slate-500 hover:text-blue-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-white md:mb-10">Work with us</h4>
                        <ul className="space-y-5">
                            {[
                                { name: 'About', href: '/about-contact#about' },
                                { name: 'Start a conversation', href: contactHref('lead') },
                                { name: 'Book a consultation', href: contactHref('booking') },
                                { name: 'Customer support', href: contactHref('support') },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm font-medium text-slate-500 hover:text-blue-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div>
                        <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-white md:mb-10">Connect</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-sm font-medium text-slate-500">
                                <MapPin size={18} className="mt-0.5 text-blue-400/50" />
                                <span>Delhi, India</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-medium text-slate-500">
                                <Mail size={18} className="text-blue-400/50" />
                                <a href="mailto:contact@valinztech.com" className="hover:text-blue-400">contact@valinztech.com</a>
                            </li>
                            <li className="flex items-center gap-4 text-sm font-bold text-white">
                                <Phone size={18} className="text-blue-400/50" />
                                <a href="tel:+919953562762" className="hover:text-blue-400">+91 9953562762</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                        &copy; 2026 ValinzTech. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                        <Link href="/privacy-policy" className="inline-flex min-h-11 items-center text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="inline-flex min-h-11 items-center text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
