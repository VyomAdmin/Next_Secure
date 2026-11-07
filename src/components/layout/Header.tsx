'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import { contactHref } from '@/lib/inquiry';

type NavItem = {
    name: string;
    href: string;
    dropdown?: Array<{ name: string; href: string }>;
};

const navigation: NavItem[] = [
    { name: 'Home', href: '/' },
    {
        name: 'Services',
        href: '/services',
        dropdown: [
            { name: 'All services', href: '/services' },
            { name: 'DPDPA compliance', href: '/dpdpa-compliance' },
            { name: 'AI infra & governance', href: '/ai-infra-governance' },
        ],
    },
    { name: 'About', href: '/about-contact#about' },
    { name: 'Contact', href: contactHref('lead') },
];

function isItemActive(item: NavItem, pathname: string) {
    if (item.name === 'Contact' || item.name === 'About') {
        return false;
    }

    if (item.href === '/') {
        return pathname === '/';
    }

    if (pathname === item.href) {
        return true;
    }

    return item.dropdown?.some((subItem) => subItem.href === pathname) ?? false;
}

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

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header
            className={`fixed z-50 w-full transition-all duration-300 ${
                isScrolled || isMobileMenuOpen
                    ? 'border-b border-white/5 bg-[#020617] py-3'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-6">
                <Link href="/" className="flex items-center" aria-label="ValinzTech home">
                    <Logo className="h-10 w-auto" variant="dark" />
                </Link>

                <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
                    {navigation.map((item) => {
                        const active = isItemActive(item, pathname);
                        return (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                                onFocus={() => item.dropdown && setActiveDropdown(item.name)}
                                onBlur={(event) => {
                                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                                        setActiveDropdown(null);
                                    }
                                }}
                            >
                                <Link
                                    href={item.href}
                                    className={`text-sm font-semibold tracking-wide transition-colors ${
                                        active ? 'text-white' : 'text-slate-300 hover:text-white'
                                    }`}
                                    aria-current={active ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>

                                {item.dropdown && activeDropdown === item.name && (
                                    <div className="absolute left-0 top-full pt-4">
                                        <div className="min-w-[240px] rounded-2xl border border-white/10 bg-[#0D1426] p-2 shadow-2xl">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
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
                        href={contactHref('booking')}
                        className="ml-2 rounded-full bg-[#64ffda] px-6 py-3 text-sm font-semibold !text-black hover:bg-white"
                    >
                        Book a call
                    </Button>
                </nav>

                <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white lg:hidden"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-navigation"
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    onClick={() => setIsMobileMenuOpen((open) => !open)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div
                    id="mobile-navigation"
                    className="fixed inset-x-0 bottom-0 top-16 z-[70] overflow-y-auto bg-[#020617] px-6 pb-10 pt-6 lg:hidden"
                >
                    <nav className="flex flex-col gap-2" aria-label="Mobile">
                        {navigation.map((item) => (
                            <div key={item.name} className="border-b border-white/5 py-2">
                                <Link
                                    href={item.href}
                                    className="flex min-h-12 items-center text-lg font-semibold text-white"
                                    onClick={closeMobileMenu}
                                >
                                    {item.name}
                                </Link>
                                {item.dropdown && (
                                    <div className="flex flex-col pb-2 pl-3">
                                        {item.dropdown.filter((subItem) => subItem.href !== item.href).map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="flex min-h-11 items-center text-base text-slate-300"
                                                onClick={closeMobileMenu}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Button
                            variant="primary"
                            href={contactHref('booking')}
                            className="mt-4 w-full justify-center rounded-xl bg-[#64ffda] py-4 font-semibold !text-black"
                            onClick={closeMobileMenu}
                        >
                            Book a call
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
