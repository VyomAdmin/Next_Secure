import { FileText, Calendar, Rocket, ChevronRight } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: Calendar,
            title: "Schedule",
            description: "Book a free 30-minute consultation at your convenience to start the conversation."
        },
        {
            icon: FileText,
            title: "Discuss",
            description: "We'll deep-dive into your governance needs, challenges, and organizational goals."
        },
        {
            icon: Rocket,
            title: "Collaborate",
            description: "Receive a tailored architectural proposal and begin your intelligent governance journey."
        }
    ];

    return (
        <section className="py-24 bg-[#050A18]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        How Consultations Work
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                        A simple, transparent 3-step process to begin your transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="group relative"
                            >
                                {/* Step card */}
                                <div className="h-full bg-[#0D1426]/30 border border-white/5 p-10 rounded-[2.5rem] hover:border-blue-500/20 transition-all duration-500 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500/20 transition-colors">
                                        <Icon className="w-8 h-8 text-blue-400" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-400 text-base font-medium leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Subtle Step Index */}
                                    <div className="mt-8 text-[10px] font-black tracking-[0.3em] text-slate-600 uppercase">
                                        Phase {index + 1}
                                    </div>
                                </div>

                                {/* Connector arrow for desktop */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 opacity-20 transform scale-x-[-1]">
                                        <ChevronRight size={32} className="text-blue-500" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
