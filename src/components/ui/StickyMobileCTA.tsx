'use client';

import React from 'react';
import { Calendar } from 'lucide-react';
import { usePathname } from 'next/navigation';

const StickyMobileCTA = () => {
    const pathname = usePathname();

    if (pathname === '/about-contact') {
        return null;
    }

    return (
        <div className="lg:hidden fixed bottom-0 left-0 w-full z-[100] p-4 bg-gradient-to-t from-[#050A18] via-[#050A18]/95 to-transparent">
            <a
                href="/about-contact#final-cta"
                className="flex items-center justify-center gap-3 w-full bg-blue-500 text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest"
            >
                <Calendar size={18} />
                Schedule Consultation
            </a>
        </div>
    );
};

export default StickyMobileCTA;
