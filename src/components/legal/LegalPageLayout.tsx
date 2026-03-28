import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

type LegalSection = {
    title: string;
    paragraphs: string[];
};

type LegalPageLayoutProps = {
    eyebrow: string;
    title: string;
    intro: string;
    lastUpdated: string;
    sections: LegalSection[];
};

const LegalPageLayout = ({
    eyebrow,
    title,
    intro,
    lastUpdated,
    sections,
}: LegalPageLayoutProps) => {
    return (
        <div className="flex min-h-screen flex-col bg-[#050A18]">
            <Header />
            <main className="flex-grow pt-32 pb-24">
                <section className="border-b border-white/5 bg-[#020617]">
                    <div className="container mx-auto px-6 py-20">
                        <div className="mx-auto max-w-4xl">
                            <span className="inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-blue-400">
                                {eyebrow}
                            </span>
                            <h1 className="mt-6 text-4xl font-black tracking-tighter text-white md:text-6xl">
                                {title}
                            </h1>
                            <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-slate-300">
                                {intro}
                            </p>
                            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                                Last updated: {lastUpdated}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-[#050A18]">
                    <div className="container mx-auto px-6 py-16">
                        <div className="mx-auto max-w-4xl space-y-8">
                            {sections.map((section) => (
                                <article
                                    key={section.title}
                                    className="rounded-[2rem] border border-white/5 bg-white/[0.03] p-8 shadow-[0_20px_60px_rgba(2,8,23,0.35)] backdrop-blur-sm md:p-10"
                                >
                                    <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                                        {section.title}
                                    </h2>
                                    <div className="mt-5 space-y-4">
                                        {section.paragraphs.map((paragraph) => (
                                            <p
                                                key={paragraph}
                                                className="text-base font-medium leading-relaxed text-slate-300"
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default LegalPageLayout;
