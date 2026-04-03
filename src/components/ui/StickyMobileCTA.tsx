'use client';

import React from 'react';
import { Calendar } from 'lucide-react';

const StickyMobileCTA = () => {
    return (
        <div className="lg:hidden fixed bottom-0 left-0 w-full z-[100] p-4 bg-gradient-to-t from-[#050A18] via-[#050A18]/95 to-transparent">
            <a
                href="/about-contact#contact-form"
                className="flex items-center justify-center gap-3 w-full bg-[#64ffda] !text-black py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(100,255,218,0.25)] animate-in slide-in-from-bottom-5 duration-500"
            >
                <Calendar size={18} />
                SCHEDULE FREE CONSULTATION
            </a>
        </div>
    );
};

export default StickyMobileCTA;
