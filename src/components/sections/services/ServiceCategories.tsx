'use client';

import React, { useState } from 'react';
import { ChevronDown, Shield, Lock, Brain, BarChart3, ClipboardCheck, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: Shield,
        title: "Cybersecurity Consulting",
        tagline: "Identify vulnerabilities, architect security, respond with confidence",
        overview: "Comprehensive cybersecurity services from vulnerability assessment to security architecture design to incident response planning. We help you protect digital assets through systematic risk identification and strategic security investments.",
        subcategories: [
            {
                title: "Vulnerability Management",
                items: ["Network vulnerability scanning (external/internal)", "Web and mobile application security testing", "Cloud infrastructure assessments", "API security validation"]
            },
            {
                title: "Security Architecture & Engineering",
                items: ["Zero-trust architecture design", "Network segmentation strategy", "Security tool deployment (SIEM, EDR, DLP)", "Secure SDLC implementation"]
            },
            {
                title: "Incident Response & Recovery",
                items: ["IR program development and playbooks", "Tabletop exercises and simulations", "Disaster recovery and business continuity", "Forensic readiness preparation"]
            },
            {
                title: "Threat Intelligence",
                items: ["Dark web monitoring", "Industry-specific threat analysis", "Vulnerability intelligence feeds", "Geopolitical risk assessment"]
            }
        ],
        cta: { label: "Explore Cybersecurity Services", href: "#contact" }
    },
    {
        icon: Lock,
        title: "Privacy & Data Protection",
        tagline: "Navigate GDPR, DPDPA, and global privacy regulations",
        overview: "Comprehensive privacy program implementation from data discovery to governance frameworks to ongoing compliance. We help you build privacy practices that protect individuals and enable trust.",
        subcategories: [
            {
                title: "Data Discovery & Mapping",
                items: ["Personal data inventory and classification", "Data flow mapping across systems", "Processor/sub-processor identification", "Cross-border transfer analysis"]
            },
            {
                title: "Privacy Program Implementation",
                items: ["Privacy by Design frameworks", "Consent management systems", "Data subject rights automation (DSAR)", "Privacy impact assessments (DPIA)"]
            },
            {
                title: "Policy & Documentation",
                items: ["Privacy policies and notices (DPDPA, GDPR)", "Data processing agreements", "Cookie policies and consent", "Data retention schedules"]
            },
            {
                title: "Compliance Frameworks",
                items: ["DPDPA readiness and implementation", "GDPR gap analysis and compliance", "CCPA/CPRA preparation", "Multi-jurisdiction privacy programs"]
            }
        ],
        cta: { label: "View DPDPA Services →", href: "/dpdpa-compliance" }
    },
    {
        icon: Brain,
        title: "AI Governance & Ethics",
        tagline: "Responsible AI frameworks for emerging technology",
        overview: "Build trustworthy AI systems through comprehensive governance frameworks, risk assessments, and ethical guidelines. We help you adopt AI responsibly—balancing innovation with accountability.",
        subcategories: [
            {
                title: "AI/ML Risk Assessment",
                items: ["Algorithmic bias and fairness testing", "Model explainability analysis", "Privacy risk assessment (differential privacy)", "Security risk evaluation (adversarial ML)"]
            },
            {
                title: "Governance Framework Development",
                items: ["AI governance committee establishment", "AI risk management framework", "Model lifecycle management", "AI ethics principles development"]
            },
            {
                title: "Responsible AI Implementation",
                items: ["Human-in-the-loop requirements", "Model monitoring and drift detection", "Explainability dashboard development", "AI impact assessment processes"]
            },
            {
                title: "Regulatory Alignment",
                items: ["MeitY AI guidelines preparation", "EU AI Act classification and requirements", "NIST AI Risk Management Framework", "Industry-specific AI regulations"]
            }
        ],
        cta: { label: "Discuss AI Governance", href: "#contact" }
    },
    {
        icon: BarChart3,
        title: "Compliance & Risk Management",
        tagline: "Achieve ISO 27001, SOC 2, and regulatory compliance",
        overview: "Structured compliance programs for global standards and regulatory requirements. We establish governance frameworks that demonstrate control and reduce stakeholder risk.",
        subcategories: [
            {
                title: "Standards-Based Compliance",
                items: ["ISO 27001 implementation and certification", "SOC 2 Type 1 & 2 audits", "ISO 27701 (Privacy)", "PCI DSS, CSA STAR, sector frameworks"]
            },
            {
                title: "Risk Management Framework",
                items: ["Enterprise risk register development", "Third-party risk management", "Business impact analysis", "Control testing and monitoring"]
            },
            {
                title: "GRC Platform Implementation",
                items: ["Policy management systems", "Risk register automation", "Audit management and tracking", "Continuous monitoring dashboards"]
            },
            {
                title: "Regulatory Compliance",
                items: ["CERT-In incident reporting", "RBI data localization", "Sector-specific requirements", "Cross-border compliance"]
            }
        ],
        cta: { label: "Compliance Consultation", href: "#contact" }
    },
    {
        icon: ClipboardCheck,
        title: "Technical Audits & Assessments",
        tagline: "Independent validation of security and compliance posture",
        overview: "Third-party technical assessments providing objective evaluation of security controls, code quality, and architectural decisions. Build stakeholder confidence through independent validation.",
        subcategories: [
            {
                title: "Code Security Audits",
                items: ["Static/Dynamic Application Security Testing", "Software Composition Analysis", "Mobile app security testing", "API security validation"]
            },
            {
                title: "Infrastructure Penetration Testing",
                items: ["Network penetration testing (external/internal)", "Cloud environment security testing", "Wireless security assessment", "Red team/Purple team exercises"]
            },
            {
                title: "Architecture & Design Review",
                items: ["Threat modeling workshops", "Security architecture validation", "Cloud security posture assessment", "Zero trust readiness evaluation"]
            },
            {
                title: "Third-Party Risk Assessment",
                items: ["Vendor security posture evaluation", "SaaS application security review", "Supply chain security assessment", "Software Bill of Materials (SBOM)"]
            }
        ],
        cta: { label: "Request Assessment", href: "#contact" }
    },
    {
        icon: GraduationCap,
        title: "Training & Enablement",
        tagline: "Build internal capability through education",
        overview: "Comprehensive training programs that transfer knowledge and build organizational capability. From awareness to advanced technical skills—we help your team understand and sustain governance.",
        subcategories: [
            {
                title: "Awareness Training",
                items: ["Phishing awareness campaigns", "Data classification training", "Incident reporting procedures", "Security hygiene practices"]
            },
            {
                title: "Role-Based Technical Training",
                items: ["Secure coding for developers", "Security operations for IT teams", "Privacy management for DPOs", "GRC for compliance teams"]
            },
            {
                title: "Executive & Board Training",
                items: ["Cyber risk governance", "Third-party risk oversight", "Crisis communication", "Regulatory reporting"]
            },
            {
                title: "Compliance-Specific Training",
                items: ["DPDPA implementation training", "ISO 27001 awareness", "SOC 2 trust criteria", "Industry-specific requirements"]
            }
        ],
        cta: { label: "Explore Training Programs", href: "#contact" }
    }
];

const ServiceCategories = () => {
    const [openService, setOpenService] = useState<number | null>(0);

    return (
        <section id="service-categories" className="py-24 bg-[#050A18]">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto space-y-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isOpen = openService === index;
                        return (
                            <div
                                key={index}
                                className={`rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${isOpen ? 'border-blue-500/20 bg-[#0D1426]/60' : 'border-white/5 bg-[#0D1426]/20 hover:border-white/10'}`}
                            >
                                {/* Header */}
                                <button
                                    onClick={() => setOpenService(isOpen ? null : index)}
                                    className="w-full px-8 md:px-12 py-10 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${isOpen ? 'bg-blue-500/20' : 'bg-white/5'}`}>
                                            <Icon className={isOpen ? 'text-blue-400' : 'text-slate-500'} size={26} />
                                        </div>
                                        <div className="text-left">
                                            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">{service.title}</h2>
                                            <p className="text-sm text-slate-500 font-medium mt-1 italic">{service.tagline}</p>
                                        </div>
                                    </div>
                                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 ml-4 transition-transform duration-500 ${isOpen ? 'rotate-180 bg-blue-500/10' : ''}`}>
                                        <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-blue-400' : 'text-slate-500'}`} />
                                    </div>
                                </button>

                                {/* Expanded content */}
                                <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                    <div className="px-8 md:px-12 pb-12">
                                        <p className="text-lg text-slate-400 font-medium leading-relaxed mb-12 max-w-3xl border-t border-white/5 pt-8">
                                            {service.overview}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                                            {service.subcategories.map((sub, sIndex) => (
                                                <div key={sIndex}>
                                                    <h4 className="text-sm font-black text-white uppercase tracking-widest mb-5">{sub.title}</h4>
                                                    <ul className="space-y-3">
                                                        {sub.items.map((item, iIndex) => (
                                                            <li key={iIndex} className="flex items-start gap-2.5">
                                                                <div className="w-1 h-1 rounded-full bg-blue-500/60 mt-2 flex-shrink-0"></div>
                                                                <span className="text-sm text-slate-400 font-medium leading-relaxed">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href={service.cta.href}
                                            className="inline-flex items-center gap-2 text-sm font-black text-blue-400 hover:text-white tracking-widest uppercase transition-colors group"
                                        >
                                            {service.cta.label}
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceCategories;
