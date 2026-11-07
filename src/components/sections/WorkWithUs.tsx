import Link from 'next/link';
import { ArrowRight, Calendar, Headphones, Layers, MessagesSquare } from 'lucide-react';
import { contactHref } from '@/lib/inquiry';

const paths = [
    {
        icon: MessagesSquare,
        kicker: 'Leads',
        title: 'Start a conversation',
        body: 'Share a consulting or services need. Your company details come through the contact form.',
        href: contactHref('lead'),
        cta: 'Send an inquiry',
    },
    {
        icon: Layers,
        kicker: 'The work',
        title: 'See what we do',
        body: 'Privacy, cybersecurity, AI governance, and compliance, explained as services.',
        href: '/services',
        cta: 'View services',
    },
    {
        icon: Calendar,
        kicker: 'Bookings',
        title: 'Book a consultation',
        body: 'Ask for time with the team. Add the topic and when your company can meet.',
        href: contactHref('booking'),
        cta: 'Request a time',
    },
    {
        icon: Headphones,
        kicker: 'Support',
        title: 'Ask for support',
        body: 'Already a customer? Use the same form and we will route it as support.',
        href: contactHref('support'),
        cta: 'Request support',
    },
];

const WorkWithUs = () => {
    return (
        <section id="work-with-us" className="bg-[#050A18] py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                        For companies
                    </p>
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
                        A simpler way to work with us
                    </h2>
                    <p className="text-base leading-relaxed text-slate-300 md:text-lg">
                        ValinzTech sells consulting and services. One contact form covers a new engagement, a booking, and support.
                    </p>
                </div>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2">
                    {paths.map((path) => {
                        const Icon = path.icon;

                        return (
                            <Link
                                key={path.title}
                                href={path.href}
                                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0D1426]/70 p-6 transition-colors hover:border-[#64ffda]/40 md:p-8"
                            >
                                <div className="mb-5 flex items-center justify-between gap-4">
                                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                                        {path.kicker}
                                    </span>
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                                        <Icon size={20} aria-hidden="true" />
                                    </span>
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-white">{path.title}</h3>
                                <p className="mb-6 flex-grow text-base leading-relaxed text-slate-400">{path.body}</p>
                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#64ffda]">
                                    {path.cta}
                                    <ArrowRight size={16} aria-hidden="true" />
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WorkWithUs;
