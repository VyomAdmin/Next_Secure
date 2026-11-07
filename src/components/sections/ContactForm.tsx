'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '../ui/Button';
import { validatePhoneNumber, validateProfessionalEmail } from '@/lib/contactValidation';
import { INQUIRY_INTENTS, isInquiryIntent, type InquiryIntent } from '@/lib/inquiry';

type FormErrors = Partial<Record<'email' | 'phone' | 'company', string>>;

const fieldClass =
    'w-full min-h-12 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-base text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors';

const ContactFormFields = () => {
    const searchParams = useSearchParams();
    const [intent, setIntent] = useState<InquiryIntent>('lead');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitError, setSubmitError] = useState(false);
    const [formErrors, setFormErrors] = useState<FormErrors>({});

    useEffect(() => {
        const requested = searchParams.get('intent');
        if (isInquiryIntent(requested)) {
            setIntent(requested);
        }
    }, [searchParams]);

    const selectedIntent = INQUIRY_INTENTS.find((item) => item.id === intent) ?? INQUIRY_INTENTS[0];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const nextErrors: FormErrors = {};
        const emailError = validateProfessionalEmail(formData.email);
        const phoneError = validatePhoneNumber(formData.phone);
        const company = formData.company.trim();

        if (!company) {
            nextErrors.company = 'Company name is required.';
        }

        if (emailError) {
            nextErrors.email = emailError;
        }

        if (phoneError) {
            nextErrors.phone = phoneError;
        }

        if (Object.keys(nextErrors).length > 0) {
            setFormErrors(nextErrors);
            setSubmitError(true);
            setSubmitMessage(nextErrors.email || nextErrors.phone || nextErrors.company || 'Please correct the highlighted fields.');
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage('');
        setSubmitError(false);
        setFormErrors({});

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    company,
                    intent,
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data?.error || 'Unable to send message right now.');
            }

            setSubmitMessage('Message sent. We will reply to your work email.');
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                message: '',
            });
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to send message right now.';
            setSubmitError(true);
            setSubmitMessage(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'email') {
            setFormErrors((current) => ({
                ...current,
                email: value ? validateProfessionalEmail(value) || '' : '',
            }));
        }

        if (name === 'phone') {
            setFormErrors((current) => ({
                ...current,
                phone: value ? validatePhoneNumber(value) || '' : '',
            }));
        }

        if (name === 'company') {
            setFormErrors((current) => ({
                ...current,
                company: value.trim() ? '' : 'Company name is required.',
            }));
        }
    };

    return (
        <section id="contact-form" className="scroll-mt-28 bg-[#050A18] py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-8 text-center md:mb-12">
                        <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
                            Contact the team
                        </h2>
                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                            This form is the intake for new work, bookings, and support. Use a work email so we can reply to your company.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-[#0D1426]/40 p-5 sm:p-8 md:p-12">
                        <fieldset className="mb-8">
                            <legend className="mb-3 text-sm font-semibold text-slate-200">
                                What do you need?
                            </legend>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                {INQUIRY_INTENTS.map((item) => {
                                    const selected = intent === item.id;
                                    return (
                                        <label
                                            key={item.id}
                                            className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                                                selected
                                                    ? 'border-[#64ffda]/70 bg-[#64ffda]/10 text-white'
                                                    : 'border-white/10 bg-white/5 text-slate-300'
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name="intent"
                                                value={item.id}
                                                checked={selected}
                                                onChange={() => setIntent(item.id)}
                                                className="h-4 w-4 accent-[#64ffda]"
                                            />
                                            <span className="text-sm font-semibold leading-snug">{item.label}</span>
                                        </label>
                                    );
                                })}
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-slate-400">{selectedIntent.description}</p>
                        </fieldset>

                        <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-slate-200">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    autoComplete="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={fieldClass}
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-slate-200">
                                    Work email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    autoComplete="email"
                                    inputMode="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    aria-invalid={Boolean(formErrors.email)}
                                    aria-describedby={formErrors.email ? 'email-error' : undefined}
                                    className={`${fieldClass} ${formErrors.email ? 'border-red-400/70 focus:border-red-400' : ''}`}
                                    placeholder="name@company.com"
                                />
                                {formErrors.email && (
                                    <p id="email-error" className="text-sm text-red-300">{formErrors.email}</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="company" className="block text-sm font-medium text-slate-200">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    required
                                    autoComplete="organization"
                                    value={formData.company}
                                    onChange={handleChange}
                                    aria-invalid={Boolean(formErrors.company)}
                                    aria-describedby={formErrors.company ? 'company-error' : undefined}
                                    className={`${fieldClass} ${formErrors.company ? 'border-red-400/70 focus:border-red-400' : ''}`}
                                    placeholder="Company name"
                                />
                                {formErrors.company && (
                                    <p id="company-error" className="text-sm text-red-300">{formErrors.company}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-200">
                                    Phone <span className="font-normal text-slate-400">(optional)</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    autoComplete="tel"
                                    inputMode="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    aria-invalid={Boolean(formErrors.phone)}
                                    aria-describedby={formErrors.phone ? 'phone-error' : undefined}
                                    className={`${fieldClass} ${formErrors.phone ? 'border-red-400/70 focus:border-red-400' : ''}`}
                                    placeholder="+91 98765 43210"
                                />
                                {formErrors.phone && (
                                    <p id="phone-error" className="text-sm text-red-300">{formErrors.phone}</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-8 space-y-2">
                            <label htmlFor="message" className="block text-sm font-medium text-slate-200">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className={`${fieldClass} resize-y`}
                                placeholder={selectedIntent.messagePlaceholder}
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting}
                            className="w-full rounded-xl bg-[#64ffda] py-4 text-sm font-semibold text-black hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {isSubmitting ? 'Sending...' : 'Send message'}
                        </Button>
                        {submitMessage && (
                            <p role="alert" className={`mt-4 text-sm font-medium ${submitError ? 'text-red-300' : 'text-[#64ffda]'}`}>
                                {submitMessage}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export function ContactFormFallback() {
    return (
        <section id="contact-form" className="scroll-mt-28 bg-[#050A18] py-16 md:py-24" aria-hidden="true">
            <div className="container mx-auto px-6">
                <div className="mx-auto h-96 max-w-4xl rounded-2xl border border-white/10 bg-[#0D1426]/40" />
            </div>
        </section>
    );
}

const ContactForm = () => {
    return (
        <Suspense fallback={<ContactFormFallback />}>
            <ContactFormFields />
        </Suspense>
    );
};

export default ContactForm;
