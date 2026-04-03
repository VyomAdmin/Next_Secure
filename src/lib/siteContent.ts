export type FAQEntry = {
    question: string;
    answer: string;
};

export type ServiceEntry = {
    slug: string;
    title: string;
    tagline: string;
    overview: string;
    subcategories: Array<{
        title: string;
        items: string[];
    }>;
    cta: {
        label: string;
        href: string;
    };
};

export const generalFaqs: FAQEntry[] = [
    {
        question: "What is DPDPA and why does my organization need it?",
        answer: "The Digital Personal Data Protection Act (DPDPA) is India's data protection law that regulates how organizations collect, process, and store personal data. Compliance is mandatory for organizations handling Indian citizens' data, with significant penalties for non-compliance."
    },
    {
        question: "How long does DPDPA compliance implementation take?",
        answer: "Timeline varies based on your organization's size and current maturity. Typically, initial assessment takes 2-4 weeks, framework design 4-6 weeks, and implementation 3-6 months. We provide a detailed roadmap during the consultation."
    },
    {
        question: "What makes ValinzTech different from other consultants?",
        answer: "We combine deep technical expertise with practical business understanding. Our systematic 4-phase approach ensures sustainable compliance, not just checkbox exercises. We focus on building governance capabilities within your team, not creating dependency."
    },
    {
        question: "Do you work with organizations outside Delhi, India?",
        answer: "Yes, we serve clients across India and internationally. Our hybrid engagement model combines remote collaboration with strategic on-site sessions as needed."
    },
    {
        question: "What happens during the free consultation?",
        answer: "We'll discuss your specific governance challenges, assess your current state, explain our approach, and provide initial recommendations. There's no obligation, and you'll leave with actionable insights regardless of whether we work together."
    },
    {
        question: "Can you help with other compliance frameworks beyond DPDPA?",
        answer: "Absolutely. We specialize in multiple frameworks including ISO 27001, SOC 2, GDPR alignment, and custom governance frameworks. Our expertise spans the full spectrum of technology governance and compliance."
    }
];

export const dpdpaFaqs: FAQEntry[] = [
    {
        question: "What is the timeline for DPDPA implementation?",
        answer: "While final implementation dates are being clarified, organisations should begin preparation immediately. Our typical full implementation takes 8-10 weeks, though we recommend starting with a readiness assessment to understand your specific timeline."
    },
    {
        question: "What are the penalties for non-compliance?",
        answer: "DPDPA authorizes penalties up to Rs 250 crores for significant violations. The Data Protection Board can impose penalties based on severity, duration, and nature of non-compliance."
    },
    {
        question: "Do I need a Data Protection Officer (DPO)?",
        answer: "DPDPA requires certain organizations (Significant Data Fiduciaries) to appoint a DPO. We help you determine if this applies and support DPO designation and operations."
    },
    {
        question: "How does DPDPA differ from GDPR?",
        answer: "While both regulate personal data, DPDPA has India-specific requirements and approaches. We help organizations with existing GDPR compliance understand gaps and additional requirements."
    },
    {
        question: "Can you help with both DPDPA and GDPR?",
        answer: "Yes, our privacy expertise covers DPDPA, GDPR, and other regulations like CCPA, Singapore-PDPA, Canada-PIPEDA. We design integrated privacy programs that address multiple regulatory requirements efficiently."
    },
    {
        question: "What if we're already working with another consultant?",
        answer: "We can provide second opinions, gap assessments of existing implementations, or specific technical support. Our goal is helping you achieve sustainable compliance."
    },
    {
        question: "Do you provide ongoing support after implementation?",
        answer: "Yes, we offer ongoing assurance packages for continuous monitoring, regulatory updates, and framework refinement as your organization evolves."
    },
    {
        question: "What makes ValinzTech different from other DPDPA consultants?",
        answer: "We bring intelligence into implementation. You do not just get compliant systems, you understand why they work and how to maintain them. We build capability, not dependency."
    }
];

export const services: ServiceEntry[] = [
    {
        slug: "cybersecurity-consulting",
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
        cta: { label: "Schedule Free Consultation", href: "/about-contact#contact-form" }
    },
    {
        slug: "privacy-data-protection",
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
        cta: { label: "View DPDPA Services", href: "/dpdpa-compliance" }
    },
    {
        slug: "ai-governance",
        title: "AI Governance & Ethics",
        tagline: "Responsible AI frameworks for emerging technology",
        overview: "Build trustworthy AI systems through comprehensive governance frameworks, risk assessments, and ethical guidelines. We help you adopt AI responsibly, balancing innovation with accountability.",
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
        cta: { label: "Schedule Free Consultation", href: "/about-contact#contact-form" }
    },
    {
        slug: "compliance-risk-management",
        title: "Compliance & Risk Management",
        tagline: "Achieve ISO 27001, SOC 2, and regulatory compliance",
        overview: "Structured compliance programs for global standards and regulatory requirements. We establish governance frameworks that demonstrate control and reduce stakeholder risk.",
        subcategories: [
            {
                title: "Standards-Based Compliance",
                items: ["ISO 27001 implementation and certification", "SOC 2 Type 1 and Type 2 audits", "ISO 27701 (Privacy)", "PCI DSS, CSA STAR, sector frameworks"]
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
        cta: { label: "Schedule Free Consultation", href: "/about-contact#contact-form" }
    },
    {
        slug: "technical-audits",
        title: "Audits & Assessments",
        tagline: "Independent validation of security and compliance posture",
        overview: "Third-party technical assessments providing objective evaluation of security controls, code quality, and architectural decisions. Build stakeholder confidence through independent validation.",
        subcategories: [
            {
                title: "Code Security Audits",
                items: ["Static and dynamic application security testing", "Software Composition Analysis", "Mobile app security testing", "API security validation"]
            },
            {
                title: "Infrastructure Penetration Testing",
                items: ["Network penetration testing (external/internal)", "Cloud environment security testing", "Wireless security assessment", "Red team and purple team exercises"]
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
        cta: { label: "Schedule Free Consultation", href: "/about-contact#contact-form" }
    },
    {
        slug: "training-enablement",
        title: "Training & Enablement",
        tagline: "Build internal capability through education",
        overview: "Comprehensive training programs that transfer knowledge and build organizational capability. From awareness to advanced technical skills, we help your team understand and sustain governance.",
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
        cta: { label: "Schedule Free Consultation", href: "/about-contact#contact-form" }
    }
];
