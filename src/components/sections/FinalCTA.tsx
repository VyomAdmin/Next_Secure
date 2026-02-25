import React from 'react';
import Button from '../ui/Button';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section id="final-cta" className="py-32 bg-[#020617] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[1.0] uppercase">
                        Ready to Build Governance Frameworks That Last?
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
                        Secure your organization's future with intelligence-driven compliance and expert technology governance.
                    </p>

                    <div className="flex flex-col items-center gap-12">
                        <Button variant="secondary" href="/about-contact#contact-form" className="py-6 px-16 text-sm font-bold bg-white text-slate-900 border-none rounded-full shadow-2xl hover:bg-slate-100 transition-all">
                            SCHEDULE FREE CONSULTATION
                        </Button>

                        <div className="flex flex-wrap justify-center gap-12 pt-12 border-t border-white/5 w-full">
                            <a href="mailto:contact@valinztech.com" className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                                    <Mail size={20} className="group-hover:text-blue-400" />
                                </div>
                                <span className="font-bold text-sm tracking-widest uppercase">contact@valinztech.com</span>
                            </a>
                            <a href="tel:+919953562762" className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                                    <Phone size={20} className="group-hover:text-blue-400" />
                                </div>
                                <span className="font-bold text-sm tracking-widest uppercase">+91-9953562762</span>
                            </a>
                            <a href="https://wa.me/919953562762" className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-green-500/10 transition-colors">
                                    <MessageCircle size={20} className="group-hover:text-green-400" />
                                </div>
                                <span className="font-bold text-sm tracking-widest uppercase">WhatsApp Support</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
