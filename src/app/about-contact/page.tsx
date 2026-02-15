'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Blocks,
  CalendarDays,
  ChevronDown,
  ClipboardCheck,
  FileSearch,
  GitBranch,
  Handshake,
  LineChart,
  Mail,
  MessageCircle,
  Phone,
  Workflow,
} from 'lucide-react';

const faqItems = [
  {
    question: 'What happens in the free consultation?',
    answer:
      'We understand your current governance maturity, identify key risk and compliance priorities, and outline a practical roadmap for next steps.',
  },
  {
    question: 'Do you work with mid-sized organizations as well as enterprises?',
    answer:
      'Yes. Our frameworks are scalable and can be tailored to organizations of different sizes, industry profiles, and regulatory requirements.',
  },
  {
    question: 'How quickly can ValinzTech start?',
    answer:
      'After a discovery discussion, we can typically initiate the first assessment activities within 1–2 weeks depending on scope and stakeholder availability.',
  },
  {
    question: 'Can engagements be delivered remotely?',
    answer:
      'Absolutely. We run fully remote, hybrid, and on-site engagement models based on operational needs and governance program goals.',
  },
];

export default function AboutContactPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#040B1B] text-slate-100">
      <Header />
      <main>
        <section className="relative overflow-hidden px-6 pt-36 pb-28 md:pt-44 md:pb-36">
          <div className="absolute inset-0 bg-gradient-to-br from-[#081833] via-[#071226] to-[#040B1B]" />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.24),transparent_45%),radial-gradient(circle_at_70%_45%,rgba(56,189,248,0.18),transparent_50%)]" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent animate-pulse" />

          <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-20 text-center backdrop-blur-sm md:px-16">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-slate-300">ValinzTech</p>
            <h1 className="font-[var(--font-space-grotesk)] text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Intelligent Technology Governance
            </h1>
            <p className="mx-auto mt-8 max-w-3xl font-[var(--font-hanken-grotesk)] text-lg leading-relaxed text-slate-300 md:text-xl">
              ValinzTech helps organizations build trust in the digital age through systematic governance frameworks and expert guidance.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
          {[
            ['Structured Governance', 'Establish clear accountability models and policy architecture for resilient technology operations.', <Blocks key="1" className="h-6 w-6" />],
            ['Risk-Aware Decisions', 'Translate regulatory and operational complexity into informed executive decision pathways.', <LineChart key="2" className="h-6 w-6" />],
            ['Trust by Design', 'Embed governance controls through lifecycle thinking across data, systems, and teams.', <Handshake key="3" className="h-6 w-6" />],
          ].map(([title, desc, icon]) => (
            <article key={String(title)} className="rounded-2xl border border-slate-700/70 bg-slate-900/50 p-7">
              <div className="mb-4 inline-flex rounded-xl border border-blue-200/20 bg-blue-300/10 p-3 text-blue-100">{icon}</div>
              <h2 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 font-[var(--font-hanken-grotesk)] text-slate-300">{desc}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="font-[var(--font-space-grotesk)] text-3xl font-semibold text-white md:text-4xl">Our Approach – Methodology</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              ['01', 'ASSESS', 'Evaluate current-state maturity, risks, obligations, and governance readiness.', <FileSearch key="a" className="h-5 w-5" />],
              ['02', 'ARCHITECT', 'Design fit-for-purpose governance structures, controls, and policy models.', <GitBranch key="b" className="h-5 w-5" />],
              ['03', 'IMPLEMENT', 'Operationalize frameworks across teams with accountable execution pathways.', <Workflow key="c" className="h-5 w-5" />],
              ['04', 'ASSURE', 'Continuously validate outcomes, evidence compliance, and improve governance posture.', <ClipboardCheck key="d" className="h-5 w-5" />],
            ].map(([num, phase, desc, icon]) => (
              <div key={String(phase)} className="relative rounded-2xl border border-slate-700 bg-slate-900/50 p-6">
                <p className="text-xs font-semibold tracking-[0.3em] text-blue-200/80">{num}</p>
                <div className="mt-4 inline-flex rounded-lg bg-blue-400/10 p-2 text-blue-100">{icon}</div>
                <h3 className="mt-4 font-[var(--font-space-grotesk)] text-xl font-semibold text-white">{phase}</h3>
                <p className="mt-3 text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="font-[var(--font-space-grotesk)] text-3xl font-semibold text-white">Team & Expertise</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              ['Governance & Compliance Strategy', 'Policy architecture, risk governance models, and board-ready control narratives.'],
              ['Data Privacy & Regulatory Alignment', 'DPDPA and global privacy alignment with pragmatic implementation support.'],
              ['Technology Risk & Controls', 'Control testing, audit preparedness, and technical governance integration.'],
              ['Program Leadership & Enablement', 'Cross-functional governance adoption, capability building, and sustained execution.'],
            ].map(([title, text]) => (
              <article key={title} className="border-t border-slate-700/80 pt-5">
                <h3 className="font-[var(--font-space-grotesk)] text-xl text-white">{title}</h3>
                <p className="mt-2 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-blue-100">
            {['DPDPA Readiness', 'Governance Program Design', 'Risk & Assurance', 'Board Reporting'].map((badge) => (
              <span key={badge} className="rounded-full border border-blue-300/25 bg-blue-300/10 px-4 py-2">{badge}</span>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-5 px-6 py-10 md:grid-cols-5">
          {['Integrity', 'Clarity', 'Accountability', 'Resilience', 'Partnership'].map((value) => (
            <article key={value} className="rounded-2xl border border-slate-700 bg-slate-900/40 p-5 text-center">
              <div className="mx-auto mb-3 h-8 w-8 rounded-full border border-blue-200/40" />
              <h3 className="font-[var(--font-space-grotesk)] text-lg text-white">{value}</h3>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <article className="rounded-2xl border border-slate-700 bg-slate-900/45 p-8">
            <h2 className="font-[var(--font-space-grotesk)] text-3xl text-white">Why ValinzTech</h2>
            <p className="mt-4 max-w-4xl text-slate-300">
              We combine governance rigor with operational practicality. The result is a trusted advisory relationship that helps organizations navigate complexity with confidence.
            </p>
          </article>
        </section>

        <div className="h-20 border-y border-white/10 bg-[linear-gradient(180deg,rgba(10,20,40,0),rgba(27,52,94,0.45),rgba(10,20,40,0))]" />

        <section className="bg-gradient-to-br from-[#0a1a35] via-[#0b2448] to-[#071226] px-6 py-20 text-center">
          <h2 className="font-[var(--font-space-grotesk)] text-4xl font-semibold text-white md:text-5xl">Let’s Connect</h2>
          <p className="mx-auto mt-5 max-w-3xl text-slate-200">
            Engage with ValinzTech to strengthen your governance posture with clarity, confidence, and executive-grade delivery.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="font-[var(--font-space-grotesk)] text-3xl text-white">How Consultations Work</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ['01', 'Discovery Call', 'Share your priorities and current governance landscape.'],
              ['02', 'Scope Alignment', 'Define outcomes, stakeholders, and an execution pathway.'],
              ['03', 'Expert Session', 'Receive structured recommendations and a practical roadmap.'],
            ].map(([num, title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-700 bg-slate-900/45 p-6">
                <p className="text-xs tracking-[0.2em] text-blue-200">{num}</p>
                <h4 className="mt-3 font-[var(--font-space-grotesk)] text-2xl text-white">{title}</h4>
                <p className="mt-3 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <h3 className="font-[var(--font-space-grotesk)] text-3xl text-white">Primary Contact Options</h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              ['Schedule Consultation', 'Book a focused governance consultation with our experts.', '#final-cta', <CalendarDays key="i1" className="h-5 w-5" />, true],
              ['Email Us', 'Share your requirements and we will respond within one business day.', 'mailto:contact@valinztech.com', <Mail key="i2" className="h-5 w-5" />, false],
              ['Call Our Team', 'Speak directly with our advisors for immediate guidance.', 'tel:+919953562762', <Phone key="i3" className="h-5 w-5" />, false],
              ['WhatsApp Connect', 'Send a message for quick coordination and scheduling.', 'https://wa.me/919953562762', <MessageCircle key="i4" className="h-5 w-5" />, false],
            ].map(([title, desc, href, icon, prominent]) => (
              <article key={String(title)} className={`rounded-2xl border p-6 ${prominent ? 'border-blue-300/40 bg-blue-400/10' : 'border-slate-700 bg-slate-900/45'}`}>
                <div className="inline-flex rounded-lg bg-blue-400/15 p-2 text-blue-100">{icon}</div>
                <h4 className="mt-4 font-[var(--font-space-grotesk)] text-2xl text-white">{title}</h4>
                <p className="mt-2 text-slate-300">{desc}</p>
                <a href={String(href)} className="mt-6 inline-flex rounded-xl border border-blue-200/40 px-4 py-2 text-sm font-medium text-blue-100 hover:bg-blue-300/10">
                  Continue
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact-form" className="mx-auto max-w-4xl px-6 py-16">
          <h3 className="font-[var(--font-space-grotesk)] text-3xl text-white">Contact Form</h3>
          <form className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/40 p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border border-slate-600 bg-transparent px-4 py-3 text-slate-100 placeholder:text-slate-400" placeholder="Full Name" />
              <input className="rounded-xl border border-slate-600 bg-transparent px-4 py-3 text-slate-100 placeholder:text-slate-400" placeholder="Work Email" />
              <input className="rounded-xl border border-slate-600 bg-transparent px-4 py-3 text-slate-100 placeholder:text-slate-400" placeholder="Organization" />
              <input className="rounded-xl border border-slate-600 bg-transparent px-4 py-3 text-slate-100 placeholder:text-slate-400" placeholder="Phone" />
            </div>
            <textarea className="mt-4 min-h-32 w-full rounded-xl border border-slate-600 bg-transparent px-4 py-3 text-slate-100 placeholder:text-slate-400" placeholder="Tell us about your governance priorities" />
            <button type="button" className="mt-5 rounded-xl bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-400">
              Submit Inquiry
            </button>
          </form>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-700 bg-[linear-gradient(120deg,rgba(30,58,138,0.35),rgba(15,23,42,0.4))] p-8">
            <h3 className="font-[var(--font-space-grotesk)] text-3xl text-white">Our Location</h3>
            <p className="mt-3 text-slate-200">Serving clients across India and globally through hybrid engagement models.</p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/45 p-8">
            <h4 className="font-[var(--font-space-grotesk)] text-2xl text-white">Address + Business Hours</h4>
            <p className="mt-4 text-slate-300">ValinzTech, Noida, Delhi NCR</p>
            <p className="text-slate-300">Monday to Friday: 9:00 AM – 6:00 PM IST</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <h3 className="font-[var(--font-space-grotesk)] text-3xl text-white">FAQ</h3>
          <div className="mt-8 space-y-4">
            {faqItems.map((item, index) => (
              <article key={item.question} className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/40">
                <button
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span className="font-medium text-white">{item.question}</span>
                  <ChevronDown className={`h-5 w-5 text-slate-300 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${openFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <p className="overflow-hidden px-5 pb-5 text-slate-300">{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="final-cta" className="bg-gradient-to-r from-[#0a1f42] via-[#0c2e5d] to-[#0b2247] px-6 py-20 text-center">
          <h3 className="font-[var(--font-space-grotesk)] text-4xl text-white">Ready to Strengthen Technology Governance?</h3>
          <a href="#contact-form" className="mt-8 inline-flex rounded-full bg-blue-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white hover:bg-blue-400">
            Schedule Your Free Consultation
          </a>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-blue-100">
            <a href="mailto:contact@valinztech.com" className="underline-offset-4 hover:underline">contact@valinztech.com</a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:+919953562762" className="underline-offset-4 hover:underline">+91-9953562762</a>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#071226]/95 p-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-md items-center gap-2">
          <a href="#final-cta" className="flex-1 rounded-lg bg-blue-500 px-3 py-3 text-center text-sm font-semibold text-white">Schedule Consultation</a>
          <a href="tel:+919953562762" className="rounded-lg border border-slate-500 px-3 py-3 text-sm text-slate-100">Call</a>
          <a href="https://wa.me/919953562762" className="rounded-lg border border-slate-500 px-3 py-3 text-sm text-slate-100">WhatsApp</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
