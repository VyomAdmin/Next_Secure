import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const Location = () => {
    return (
        <section className="py-24 bg-[#050A18]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
                    {/* Visual Signal */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-blue-500/5 rounded-[3rem] blur-3xl group-hover:bg-blue-500/10 transition-all duration-700"></div>
                        <div className="relative bg-[#0D1426]/30 border border-white/5 rounded-[3rem] p-16 flex flex-col items-center text-center overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 transform translate-x-1/2 -translate-y-1/2 opacity-10">
                                <MapPin size={200} className="text-blue-400" />
                            </div>

                            <div className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center mb-8">
                                <MapPin className="w-10 h-10 text-blue-400" />
                            </div>

                            <h3 className="text-4xl font-black text-white mb-6 tracking-tighter">
                                Delhi, India
                            </h3>
                            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-xs">
                                Delhi, Serving Pan India and beyond.
                            </p>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-12">
                        <div>
                            <div className="inline-block px-4 py-1.5 border border-white/5 rounded-full bg-slate-400/5 mb-6">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Headquarters</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                                Visit Our Office
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-blue-500/5 border border-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 transition-colors">
                                    <MapPin className="w-6 h-6 text-blue-400/70" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Address</h4>
                                    <p className="text-white text-lg font-medium leading-relaxed">
                                        Delhi, India<br />
                                        Serving Pan India and beyond.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-blue-500/5 border border-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 transition-colors">
                                    <Phone className="w-6 h-6 text-blue-400/70" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Direct Line</h4>
                                    <a href="tel:+919953562762" className="text-white text-lg font-bold hover:text-blue-400 transition-colors decoration-blue-400/30 underline underline-offset-8">
                                        +91 9953562762
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
