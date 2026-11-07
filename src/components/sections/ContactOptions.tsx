import React from 'react';
import { Calendar, Headphones, Mail, MessagesSquare, Phone } from 'lucide-react';
import Button from '../ui/Button';
import { contactHref } from '@/lib/inquiry';

const options = [
    {
        icon: MessagesSquare,
        title: 'New engagement',
        description: 'Tell us about a consulting or services need for your company.',
        cta: 'Start a conversation',
        href: contactHref('lead'),
        primary: true,
    },
    {
        icon: Calendar,
        title: 'Book a consultation',
        description: 'Request time with the team and share when your company can meet.',
        cta: 'Request a time',
        href: contactHref('booking'),
        primary: false,
    },
    {
        icon: Headphones,
        title: 'Customer support',
        description: 'Already working with us? Send the request through the same form.',
        cta: 'Request support',
        href: contactHref('support'),
        primary: false,
    },
];

const ContactOptions = () => {
    return (
        <section className="bg-[#050A18] py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="mb-10 text-center md:mb-14">
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
                        How should we help?
                    </h2>
                    <p className="mx-auto max-w-2xl text-base font-medium text-slate-300 md:text-lg">
                        Pick a path. Each one opens the contact form with the right request type already selected.
                    </p>
                </div>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
                    {options.map((option) => {
                        const Icon = option.icon;
                        return (
                            <div
                                key={option.title}
                                className={`flex h-full flex-col rounded-2xl border bg-[#0D1426]/50 p-6 ${
                                    option.primary ? 'border-[#64ffda]/40' : 'border-white/10'
                                }`}
                            >
                                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                                    <Icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white">{option.title}</h3>
                                <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-300 md:text-base">
                                    {option.description}
                                </p>
                                <Button
                                    variant={option.primary ? 'primary' : 'secondary'}
                                    href={option.href}
                                    className="w-full rounded-xl py-3 text-sm font-semibold"
                                >
                                    {option.cta}
                                </Button>
                            </div>
                        );
                    })}
                </div>

                <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                    <a href="mailto:contact@valinztech.com" className="inline-flex min-h-11 items-center gap-2 hover:text-white">
                        <Mail size={16} aria-hidden="true" />
                        contact@valinztech.com
                    </a>
                    <a href="tel:+919953562762" className="inline-flex min-h-11 items-center gap-2 hover:text-white">
                        <Phone size={16} aria-hidden="true" />
                        +91 9953562762
                    </a>
                    <a href="https://wa.me/919953562762" className="inline-flex min-h-11 items-center gap-2 hover:text-white">
                        <MessagesSquare size={16} aria-hidden="true" />
                        WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactOptions;
