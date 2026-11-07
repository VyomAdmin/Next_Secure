'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

type NavItem = {
    name: string;
    href: string;
    dropdown?: Array<{ name: string; href: string }>;
};

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation: NavItem[] = [
        { name: 'Home', href: '/' },
        {
            name: 'Services',
            href: '/services',
            dropdown: [
                { name: 'All Services Overview', href: '/services' },
                { name: 'Cybersecurity Consulting', href: '/services#cybersecurity-consulting' },
                { name: 'Privacy & Data Protection', href: '/services#privacy-data-protection' },
                { name: 'Audits & Technical Assessments', href: '/services#audits-assessments' },
                { name: 'Compliance & Risk Management', href: '/services#compliance-risk-management' },
            ],
        },
        { name: 'DPDPA', href: '/dpdpa-compliance' },
        { name: 'AI Infra', href: '/ai-infra-governance' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-[#020617]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-xl'
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Logo className="h-[42px] w-auto" variant="dark" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-7">
                    {navigation.map((item) => {
                        const isActive =
                            item.href === '/'
                                ? pathname === '/'
                                : pathname.startsWith(item.href.split('#')[0]);

                        return (
                            <div
                                key={item.name}
                                className="relative group py-2"
                                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.2em] transition-colors ${
                                        isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                                    }`}
                                >
                                    <span>{item.name}</span>
                                    {item.dropdown && (
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform duration-200 text-slate-500 group-hover:text-white ${
                                                activeDropdown === item.name ? 'rotate-180' : ''
                                            }`}
                                        />
                                    )}
                                </Link>

                                {item.dropdown && activeDropdown === item.name && (
                                    <div className="absolute top-full left-0 pt-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                                        <div className="bg-[#0D1426] border border-white/10 rounded-2xl p-3 min-w-[260px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-3 text-xs font-bold text-slate-300 hover:text-[#64ffda] hover:bg-white/5 rounded-xl transition-all"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    <Button
                        variant="primary"
                        href="/contact?intent=consultation"
                        className="ml-2 py-3.5 px-8 text-xs tracking-[0.14em] font-black uppercase bg-[#0052CC] !text-white border-none hover:bg-[#64ffda] hover:!text-black rounded-full shadow-lg transition-all duration-200 ease-in-out whitespace-nowrap"
                    >
                        SCHEDULE CONSULTATION
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-x-0 top-[74px] bottom-0 bg-[#020617]/98 backdrop-blur-2xl border-t border-white/10 overflow-y-auto px-6 py-8 flex flex-col animate-in fade-in slide-in-from-top-4 duration-300 z-50">
                    <nav className="flex flex-col gap-6">
                        {navigation.map((item) => (
                            <div key={item.name} className="space-y-3 pb-4 border-b border-white/5">
                                <Link
                                    href={item.href}
                                    className="text-2xl font-black text-white tracking-tight flex items-center justify-between"
                                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                                >
                                    <span>{item.name}</span>
                                </Link>

                                {item.dropdown && (
                                    <div className="pl-4 flex flex-col gap-3.5 border-l-2 border-white/10 mt-3 pt-2">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="text-sm font-semibold text-slate-400 hover:text-[#64ffda] py-1"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                </div>
            )}
        </header>
    );
};

export default Header;
