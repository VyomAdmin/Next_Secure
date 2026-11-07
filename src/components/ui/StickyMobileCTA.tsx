'use client';

import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import { usePathname } from 'next/navigation';

const StickyMobileCTA = () => {
    const [isVisible, setIsVisible] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setIsVisible(true);

        const target = document.getElementById('contact-form') || document.getElementById('contact');
        if (!target) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                // When contact form enters viewport, hide sticky bar to prevent overlaying form inputs
                setIsVisible(!entry.isIntersecting);
            },
            {
                threshold: 0.05,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, [pathname]);

    return (
        <div
            className={`lg:hidden fixed bottom-0 left-0 w-full z-[100] p-4 bg-gradient-to-t from-[#050A18] via-[#050A18]/95 to-transparent transition-all duration-300 transform ${
                isVisible
                    ? 'translate-y-0 opacity-100 pointer-events-auto'
                    : 'translate-y-full opacity-0 pointer-events-none'
            }`}
        >
            <a
                href="/about-contact#contact-form?intent=consultation"
                className="flex items-center justify-center gap-2.5 w-full bg-[#64ffda] !text-black py-4 rounded-2xl font-black text-xs uppercase tracking-[0.14em] shadow-[0_0_30px_rgba(100,255,218,0.3)] transition-transform active:scale-[0.98]"
            >
                <Calendar size={18} />
                <span>Book a Consultation</span>
            </a>
        </div>
    );
};

export default StickyMobileCTA;
