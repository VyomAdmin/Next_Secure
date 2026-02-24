import React from 'react';
import Button from '../ui/Button';

const LetsConnect = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-[#050A18]">
            {/* Soft Blue Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8 inline-block px-4 py-1.5 border border-white/5 rounded-full bg-slate-400/5">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Next Steps</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                        Let's Connect
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
                        Ready to build trust and compliance into your technology systems? Let's discuss how ValinzTech can help your organization.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <Button variant="primary" href="/about-contact#contact-form" className="w-full sm:w-auto text-sm py-4 px-12 uppercase tracking-widest bg-[#64ffda]/10 border-[#64ffda]/30 text-[#64ffda] hover:bg-[#64ffda]/20 rounded-full shadow-2xl shadow-[#64ffda]/10">
                            Schedule Free Consultation
                        </Button>
                        <Button variant="secondary" href="mailto:contact@valinztech.com" className="w-full sm:w-auto text-sm py-4 px-12 uppercase tracking-widest backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10 rounded-full">
                            Email Us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LetsConnect;
