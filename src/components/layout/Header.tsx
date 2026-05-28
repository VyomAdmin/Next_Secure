'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
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
        { name: 'Services', href: '/services' },
        { name: 'DPDPA', href: '/dpdpa-compliance' },
        { name: 'About Us', href: '/about-contact' },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#020617]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Logo className="h-[42.24px] w-auto" variant="dark" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navigation.map((item) => (
                        <div
                            key={item.name}
                            className="relative group"
                            onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className={`flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] transition-colors ${pathname === item.href ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                                {item.name}
                            </Link>

                            {item.dropdown && activeDropdown === item.name && (
                                <div className="absolute top-full left-0 pt-6 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="bg-[#0D1426] border border-white/5 rounded-2xl p-3 min-w-[220px] shadow-2xl">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block px-5 py-3.5 text-xs font-bold text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <Button variant="primary"
                        href="/about-contact#contact-form"
                        className="ml-2 py-4 px-10 text-[14px] tracking-[0.1em] bg-[#0052CC] !text-white border-none hover:bg-[#64ffda] hover:!text-black rounded-full shadow-xl transition-all duration-200 ease-in-out whitespace-nowrap"
                    >
                        SCHEDULE FREE CONSULTATION
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-[#020617] border-b border-white/5 py-10 shadow-2xl animate-in fade-in slide-in-from-top-4">
                    <nav className="flex flex-col px-6 gap-8">
                        {navigation.map((item) => (
                            <div key={item.name} className="space-y-6">
                                <Link
                                    href={item.href}
                                    className="text-2xl font-black text-white tracking-tighter"
                                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                                {item.dropdown && (
                                    <div className="pl-6 flex flex-col gap-6 border-l border-white/5">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="text-lg font-bold text-slate-400"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Button variant="primary" href="/about-contact#contact-form" className="mt-6 w-full justify-center py-5 font-bold bg-white text-black border-none" onClick={() => setIsMobileMenuOpen(false)}>
                            SCHEDULE CONSULTATION
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
