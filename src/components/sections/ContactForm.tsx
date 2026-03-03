'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Website Inquiry from ${formData.name || 'Prospect'}`);
        const body = encodeURIComponent(
            [
                `Name: ${formData.name}`,
                `Email: ${formData.email}`,
                `Company: ${formData.company || 'N/A'}`,
                `Phone: ${formData.phone || 'N/A'}`,
                '',
                'Message:',
                formData.message,
            ].join('\n')
        );
        window.location.href = `mailto:contact@valinztech.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
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
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                                    placeholder="john@company.com"
                                />
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
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                                    placeholder="+91 99535 62762"
                                />
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

                        <Button type="submit" variant="primary" className="w-full text-xs py-5 uppercase tracking-[0.2em] font-bold bg-[#64ffda]/10 border-[#64ffda]/30 text-[#64ffda] hover:bg-[#64ffda]/20 rounded-2xl transition-all duration-300">
                            Send Secure Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
