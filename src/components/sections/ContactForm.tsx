'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';
import { validatePhoneNumber, validateProfessionalEmail } from '@/lib/contactValidation';

type FormErrors = Partial<Record<'email' | 'phone', string>>;

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitError, setSubmitError] = useState(false);
    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const nextErrors: FormErrors = {};
        const emailError = validateProfessionalEmail(formData.email);
        const phoneError = validatePhoneNumber(formData.phone);

        if (emailError) {
            nextErrors.email = emailError;
        }

        if (phoneError) {
            nextErrors.phone = phoneError;
        }

        if (Object.keys(nextErrors).length > 0) {
            setFormErrors(nextErrors);
            setSubmitError(true);
            setSubmitMessage(emailError || phoneError || 'Please correct the highlighted fields.');
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
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data?.error || 'Unable to send message right now.');
            }

            setSubmitMessage('Message sent successfully. We will get back to you shortly.');
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
            [name]: value
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
    };

    return (
        <section id="contact-form" className="py-24 bg-[#050A18]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                            Send Us a Message
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                            Reach out for specific inquiries. Our team will respond within 24 hours.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-[#0D1426]/30 border border-white/5 rounded-[2.5rem] p-8 md:p-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-6 py-4 bg-white/5 border rounded-2xl text-white placeholder-slate-600 focus:outline-none transition-all font-medium ${formErrors.email ? 'border-red-400/70 focus:border-red-400' : 'border-white/10 focus:border-blue-500/50'}`}
                                    placeholder="john@company.com"
                                />
                                {formErrors.email && <p className="text-sm text-red-400">{formErrors.email}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="space-y-2">
                                <label htmlFor="company" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                                    placeholder="Organization Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-6 py-4 bg-white/5 border rounded-2xl text-white placeholder-slate-600 focus:outline-none transition-all font-medium ${formErrors.phone ? 'border-red-400/70 focus:border-red-400' : 'border-white/10 focus:border-blue-500/50'}`}
                                    placeholder="+91 9953562762"
                                    inputMode="tel"
                                />
                                {formErrors.phone && <p className="text-sm text-red-400">{formErrors.phone}</p>}
                            </div>
                        </div>

                        <div className="mb-12 space-y-2">
                            <label htmlFor="message" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all font-medium resize-none"
                                placeholder="How can we assist with your governance needs?"
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting}
                            className="w-full text-xs py-5 uppercase tracking-[0.2em] font-bold bg-[#64ffda]/10 border-[#64ffda]/30 text-[#64ffda] hover:bg-[#64ffda] hover:text-black rounded-2xl transition-all duration-200 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Secure Message'}
                        </Button>
                        {submitMessage && (
                            <p className={`mt-4 text-sm font-medium ${submitError ? 'text-red-400' : 'text-[#64ffda]'}`}>
                                {submitMessage}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
