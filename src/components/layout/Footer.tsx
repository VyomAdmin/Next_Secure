import React from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-24 bg-[#020617] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

                    {/* Column 1: About */}
                    <div className="space-y-8">
                        <Logo className="h-10 w-auto" variant="dark" />
                        <div className="space-y-4">
                            <p className="text-sm font-bold text-white uppercase tracking-widest">Trust. Intelligence. Compliance.</p>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                We help organisations build intelligent, secure, and compliant technology systems through systematic governance frameworks.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-10">Services</h4>
                        <ul className="space-y-5">
                            {[
                                { name: 'DPDPA Compliance', href: '/dpdpa-compliance' },
                                { name: 'Cybersecurity Consulting', href: '/services#cybersecurity-consulting' },
                                { name: 'Privacy & Data Protection', href: '/services#privacy-data-protection' },
                                { name: 'AI Governance', href: '/services#ai-governance' },
                                { name: 'Compliance & Risk Management', href: '/services#compliance-risk-management' },
                                { name: 'Audits', href: '/services#technical-audits' },
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
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-10">Resources</h4>
                        <ul className="space-y-5">
                            {[
                                { name: 'About Us', href: '/about-contact' },
                                { name: 'Contact', href: '/about-contact#contact-form' },
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
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-10">Connect</h4>
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
                            <li className="pt-6">
                                <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/5 text-slate-400 hover:text-blue-400 hover:border-blue-400/30 transition-all">
                                    <Linkedin size={20} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                        &copy; 2026 ValinzTech. All rights reserved.
                    </p>
                    <div className="flex gap-10">
                        <Link href="/privacy-policy" className="text-[10px] font-bold text-slate-600 hover:text-white uppercase tracking-widest transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="text-[10px] font-bold text-slate-600 hover:text-white uppercase tracking-widest transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
