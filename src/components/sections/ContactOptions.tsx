import React from 'react';
import { Calendar, Mail, MessageCircle, Phone } from 'lucide-react';
import Button from '../ui/Button';

const ContactOptions = () => {
    const options = [
        {
            icon: Calendar,
            title: "Schedule Consultation",
            description: "Book a free 30-minute strategy session with our governance team.",
            cta: "Schedule Consultation",
            href: "#contact-form",
            primary: true
        },
        {
            icon: Mail,
            title: "Email Us",
            description: "Send us your specific project details or governance inquiries.",
            cta: "Email Us",
            href: "mailto:contact@valinztech.com"
        },
        {
            icon: MessageCircle,
            title: "WhatsApp",
            description: "Quick questions? Message our experts directly.",
            cta: "WhatsApp Us",
            href: "https://wa.me/919953562762"
        },
        {
            icon: Phone,
            title: "Call Us",
            description: "Speak directly with our team for immediate assistance.",
            cta: "Call Us",
            href: "tel:+919953562762"
        }
    ];

    return (
        <section className="py-24 bg-[#050A18]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                        Choose your preferred way to connect with our governance experts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {options.map((option, index) => {
                        const Icon = option.icon;
                        return (
                            <div
                                key={index}
                                className={`group bg-[#0D1426]/50 border ${option.primary ? 'border-[#64ffda]/30 shadow-[0_0_40px_rgba(100,255,218,0.05)]' : 'border-white/5'} rounded-[2rem] p-8 hover:border-blue-500/20 transition-all duration-500 flex flex-col h-full`}
                            >
                                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 transition-colors ${option.primary ? 'bg-[#64ffda]/10 group-hover:bg-[#64ffda]/20' : 'bg-blue-500/5 group-hover:bg-blue-500/10'}`}>
                                    <Icon className={`w-6 h-6 ${option.primary ? 'text-[#64ffda]' : 'text-blue-400'}`} />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                                    {option.title}
                                </h3>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 flex-grow">
                                    {option.description}
                                </p>

                                <Button
                                    variant={option.primary ? 'primary' : 'secondary'}
                                    href={option.href}
                                    className={`w-full py-3 text-xs uppercase tracking-widest rounded-full transition-all duration-200 ease-in-out ${option.primary ? 'bg-[#64ffda]/10 border-[#64ffda]/30 text-[#64ffda] hover:bg-[#64ffda] hover:text-black' : 'backdrop-blur-sm bg-white/5 border-white/10 hover:bg-[#64ffda] hover:text-black hover:border-[#64ffda]'}`}
                                >
                                    {option.cta}
                                </Button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactOptions;
