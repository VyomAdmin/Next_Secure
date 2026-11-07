'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '../ui/Button';
import {
    validateCompanyName,
    validatePhoneNumber,
    validateProfessionalEmail,
} from '@/lib/contactValidation';
import { MessageSquare, Briefcase, Calendar, HelpCircle, CheckCircle2 } from 'lucide-react';

type RequestType = 'consultation' | 'conversation' | 'work' | 'support';

type FormErrors = Partial<Record<'email' | 'phone' | 'company' | 'name' | 'message', string>>;

const REQUEST_OPTIONS = [
    {
        id: 'consultation' as RequestType,
        label: 'Book a Consultation',
        hint: '30-min strategy & architecture review',
        icon: Calendar,
    },
    {
        id: 'conversation' as RequestType,
        label: 'Start a Conversation',
        hint: 'General advisory & partnerships',
        icon: MessageSquare,
    },
    {
        id: 'work' as RequestType,
        label: 'See the Work',
        hint: 'Case studies & capabilities overview',
        icon: Briefcase,
    },
    {
        id: 'support' as RequestType,
        label: 'Request Support',
        hint: 'Active framework & operations help',
        icon: HelpCircle,
    },
];

const ContactFormInner = () => {
    const searchParams = useSearchParams();
    const [requestType, setRequestType] = useState<RequestType>('consultation');
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
        const intent = searchParams.get('intent') || searchParams.get('type');
        if (intent) {
            const normalized = intent.toLowerCase().trim();
            if (REQUEST_OPTIONS.some((opt) => opt.id === normalized)) {
                setRequestType(normalized as RequestType);
            }
        }
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const nextErrors: FormErrors = {};

        if (!formData.name.trim()) {
            nextErrors.name = 'Full name is required.';
        }

        const companyError = validateCompanyName(formData.company);
        if (companyError) {
            nextErrors.company = companyError;
        }

        const emailError = validateProfessionalEmail(formData.email);
        if (emailError) {
            nextErrors.email = emailError;
        }

        const phoneError = validatePhoneNumber(formData.phone);
        if (phoneError) {
            nextErrors.phone = phoneError;
        }

        if (!formData.message.trim()) {
            nextErrors.message = 'Please provide brief details on your inquiry.';
        }

        if (Object.keys(nextErrors).length > 0) {
            setFormErrors(nextErrors);
            setSubmitError(true);
            setSubmitMessage(
                emailError || companyError || phoneError || 'Please correct the highlighted fields.'
            );
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
                    requestType,
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data?.error || 'Unable to send message right now.');
            }

            setSubmitMessage('Inquiry received successfully. Our team will get back to you within 24 hours.');
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

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === 'company') {
            setFormErrors((current) => ({
                ...current,
                company: value ? validateCompanyName(value) || '' : '',
            }));
        }

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

        if (name === 'name' && value.trim()) {
            setFormErrors((current) => ({ ...current, name: '' }));
        }

        if (name === 'message' && value.trim()) {
            setFormErrors((current) => ({ ...current, message: '' }));
        }
    };

    return (
        <section id="contact-form" className="py-24 bg-[#050A18] relative scroll-mt-24">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 border border-white/10 rounded-full bg-white/5 mb-6 backdrop-blur-md">
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#64ffda]">
                                Enterprise Engagement Intake
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
                            Connect With Our Team
                        </h2>
                        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                            Select your path below. Our senior consultants review every request and respond within 24 hours under mutual NDA.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="bg-[#0D1426]/40 border border-white/5 rounded-[2.5rem] p-6 sm:p-10 md:p-14 shadow-2xl backdrop-blur-sm"
                    >
                        {/* Request Type Selector */}
                        <div className="mb-10">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 ml-1">
                                What does your organization need? <span className="text-[#64ffda]">*</span>
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                {REQUEST_OPTIONS.map((opt) => {
                                    const Icon = opt.icon;
                                    const isSelected = requestType === opt.id;
                                    return (
                                        <button
                                            key={opt.id}
                                            type="button"
                                            onClick={() => setRequestType(opt.id)}
                                            className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all duration-200 min-h-[64px] ${
                                                isSelected
                                                    ? 'bg-[#64ffda]/10 border-[#64ffda]/50 shadow-[0_0_25px_rgba(100,255,218,0.15)] ring-1 ring-[#64ffda]/30'
                                                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.08]'
                                            }`}
                                        >
                                            <div
                                                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                                                    isSelected
                                                        ? 'bg-[#64ffda]/15 border border-[#64ffda]/50 shadow-[0_0_15px_rgba(100,255,218,0.2)]'
                                                        : 'bg-white/5 border border-white/10'
                                                }`}
                                            >
                                                <Icon
                                                    size={20}
                                                    style={{ color: isSelected ? '#64ffda' : '#94a3b8' }}
                                                    className="transition-colors duration-200"
                                                />
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex items-center justify-between">
                                                    <span
                                                        className={`text-sm font-bold tracking-tight transition-colors ${
                                                            isSelected ? 'text-[#64ffda]' : 'text-white'
                                                        }`}
                                                    >
                                                        {opt.label}
                                                    </span>
                                                    {isSelected && (
                                                        <CheckCircle2
                                                            size={16}
                                                            className="text-[#64ffda] shrink-0"
                                                            style={{ color: '#64ffda' }}
                                                        />
                                                    )}
                                                </div>
                                                <p className="text-xs font-medium text-slate-400 mt-0.5 leading-snug">
                                                    {opt.hint}
                                                </p>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Name and Work Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6">
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-1"
                                >
                                    Full Name <span className="text-[#64ffda]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full min-h-[48px] px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-[#64ffda]/60 transition-all font-medium text-[16px] md:text-sm"
                                    placeholder="e.g. John Doe"
                                />
                                {formErrors.name && <p className="text-xs text-red-400 ml-1">{formErrors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-1"
                                >
                                    Work Email <span className="text-[#64ffda]">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full min-h-[48px] px-5 py-3.5 bg-white/5 border rounded-2xl text-white placeholder-slate-500 focus:outline-none transition-all font-medium text-[16px] md:text-sm ${
                                        formErrors.email
                                            ? 'border-red-400/80 focus:border-red-400'
                                            : 'border-white/10 focus:border-[#64ffda]/60'
                                    }`}
                                    placeholder="john@company.com (No personal emails)"
                                />
                                {formErrors.email && <p className="text-xs text-red-400 ml-1">{formErrors.email}</p>}
                            </div>
                        </div>

                        {/* Company and Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6">
                            <div className="space-y-2">
                                <label
                                    htmlFor="company"
                                    className="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-1"
                                >
                                    Company / Organization <span className="text-[#64ffda]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    required
                                    value={formData.company}
                                    onChange={handleChange}
                                    className={`w-full min-h-[48px] px-5 py-3.5 bg-white/5 border rounded-2xl text-white placeholder-slate-500 focus:outline-none transition-all font-medium text-[16px] md:text-sm ${
                                        formErrors.company
                                            ? 'border-red-400/80 focus:border-red-400'
                                            : 'border-white/10 focus:border-[#64ffda]/60'
                                    }`}
                                    placeholder="e.g. Acme Corporation"
                                />
                                {formErrors.company && (
                                    <p className="text-xs text-red-400 ml-1">{formErrors.company}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="phone"
                                    className="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-1"
                                >
                                    Phone Number <span className="text-slate-500">(Optional)</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full min-h-[48px] px-5 py-3.5 bg-white/5 border rounded-2xl text-white placeholder-slate-500 focus:outline-none transition-all font-medium text-[16px] md:text-sm ${
                                        formErrors.phone
                                            ? 'border-red-400/80 focus:border-red-400'
                                            : 'border-white/10 focus:border-[#64ffda]/60'
                                    }`}
                                    placeholder="+91 9953562762"
                                    inputMode="tel"
                                />
                                {formErrors.phone && <p className="text-xs text-red-400 ml-1">{formErrors.phone}</p>}
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mb-10 space-y-2">
                            <label
                                htmlFor="message"
                                className="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-1"
                            >
                                Project Details & Timeline <span className="text-[#64ffda]">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-[#64ffda]/60 transition-all font-medium text-[16px] md:text-sm resize-none"
                                placeholder="Describe your current governance, DPDPA compliance, or AI infrastructure challenge..."
                            />
                            {formErrors.message && (
                                <p className="text-xs text-red-400 ml-1">{formErrors.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting}
                            className="w-full min-h-[52px] text-xs py-4 uppercase tracking-[0.2em] font-black bg-[#64ffda] text-black hover:bg-white hover:text-black rounded-2xl transition-all duration-200 ease-in-out shadow-[0_0_30px_rgba(100,255,218,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Transmitting Request...' : 'Submit Enterprise Inquiry'}
                        </Button>

                        {/* Submission Status Message */}
                        {submitMessage && (
                            <div
                                className={`mt-5 p-4 rounded-xl text-sm font-medium border ${
                                    submitError
                                        ? 'bg-red-500/10 border-red-500/30 text-red-300'
                                        : 'bg-[#64ffda]/10 border-[#64ffda]/30 text-[#64ffda]'
                                }`}
                            >
                                {submitMessage}
                            </div>
                        )}

                        <p className="text-[11px] font-medium text-slate-500 text-center mt-6">
                            🔒 By submitting, your information is protected under mutual non-disclosure and strictly retained in compliance with DPDPA 2023.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

const ContactForm = () => {
    return (
        <Suspense
            fallback={
                <section id="contact-form" className="py-24 bg-[#050A18] text-center text-slate-500">
                    <div className="container mx-auto px-6">Loading intake form...</div>
                </section>
            }
        >
            <ContactFormInner />
        </Suspense>
    );
};

export default ContactForm;
