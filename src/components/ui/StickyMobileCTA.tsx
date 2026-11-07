'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar } from 'lucide-react';
import { contactHref } from '@/lib/inquiry';

const StickyMobileCTA = () => {
    const pathname = usePathname();
    const [visibleOnPath, setVisibleOnPath] = useState<string | null>(null);
    const formVisible = visibleOnPath === pathname;

    useEffect(() => {
        const form = document.getElementById('contact-form');
        if (!form) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisibleOnPath(entry.isIntersecting ? pathname : null);
            },
            { threshold: 0.2 }
        );

        observer.observe(form);
        return () => observer.disconnect();
    }, [pathname]);

    return (
        <div
            className={`fixed inset-x-0 bottom-0 z-40 px-4 pt-3 lg:hidden ${
                formVisible ? 'pointer-events-none translate-y-full' : 'translate-y-0'
            } bg-gradient-to-t from-[#050A18] via-[#050A18]/95 to-transparent pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300`}
            aria-hidden={formVisible}
            inert={formVisible}
        >
            <Link
                href={contactHref('booking')}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#64ffda] px-4 py-3 text-sm font-semibold text-black shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
            >
                <Calendar size={18} aria-hidden="true" />
                Book a call
            </Link>
        </div>
    );
};

export default StickyMobileCTA;
