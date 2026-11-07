import { aiInfraFaqs, dpdpaFaqs, generalFaqs, services } from '@/lib/siteContent';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://valinztech.com';

const createFaqSchema = (path: string, faqs: typeof generalFaqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteUrl}${path}#faq`,
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
        }
    }))
});

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'ValinzTech',
    url: siteUrl,
    logo: `${siteUrl}/images/Valinz-Logo.png`,
    image: `${siteUrl}/images/Valinz-Logo.png`,
    email: 'contact@valinztech.com',
    telephone: '+919953562762',
    areaServed: ['India', 'Worldwide'],
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Delhi',
        addressCountry: 'IN'
    },
    description: 'ValinzTech provides consulting and services for companies across privacy, cybersecurity, AI governance, and compliance.',
    contactPoint: [
        {
            '@type': 'ContactPoint',
            telephone: '+919953562762',
            contactType: 'sales',
            availableLanguage: ['English'],
            email: 'contact@valinztech.com',
            areaServed: 'Worldwide'
        },
        {
            '@type': 'ContactPoint',
            telephone: '+919953562762',
            contactType: 'customer support',
            availableLanguage: ['English'],
            email: 'contact@valinztech.com',
            areaServed: 'Worldwide'
        }
    ]
};

export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'ValinzTech',
    url: siteUrl,
    description: 'Consulting and services for companies. Review the work, book a consultation, or request support.',
    publisher: {
        '@id': `${siteUrl}/#organization`
    },
    inLanguage: 'en'
};

export const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#professional-service`,
    name: 'ValinzTech',
    url: siteUrl,
    image: `${siteUrl}/images/Valinz-Logo.png`,
    description: 'Consulting and services for companies: privacy, cybersecurity, AI governance, and compliance.',
    telephone: '+919953562762',
    email: 'contact@valinztech.com',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Delhi',
        addressCountry: 'IN'
    },
    areaServed: ['India', 'Worldwide'],
    provider: {
        '@id': `${siteUrl}/#organization`
    }
};

export const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${siteUrl}/about-contact#contact`,
    url: `${siteUrl}/about-contact`,
    name: 'Contact ValinzTech',
    description: 'Contact form for companies to start an engagement, book a consultation, or request support.',
    mainEntity: {
        '@id': `${siteUrl}/#organization`
    }
};

export const aboutFaqSchema = createFaqSchema('/about', generalFaqs);

export const aboutContactFaqSchema = createFaqSchema('/about-contact', generalFaqs);

export const dpdpaFaqSchema = createFaqSchema('/dpdpa-compliance', dpdpaFaqs);

export const aiInfraFaqSchema = createFaqSchema('/ai-infra-governance', aiInfraFaqs);

export const servicesSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'ItemList',
            '@id': `${siteUrl}/services#catalog`,
            name: 'ValinzTech Services',
            itemListElement: services.map((service, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `${siteUrl}/services#${service.slug}`,
                name: service.title
            }))
        },
        ...services.map((service) => ({
            '@type': 'Service',
            '@id': `${siteUrl}/services#${service.slug}-service`,
            name: service.title,
            serviceType: service.title,
            description: service.overview,
            url: `${siteUrl}/services#${service.slug}`,
            areaServed: {
                '@type': 'Country',
                name: 'India'
            },
            provider: {
                '@id': `${siteUrl}/#organization`
            },
            category: service.subcategories.map((subcategory) => subcategory.title)
        }))
    ]
};

export const dpdpaServiceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Service',
            '@id': `${siteUrl}/dpdpa-compliance#service`,
            name: 'DPDPA Compliance Services',
            serviceType: 'DPDPA Compliance Consulting',
            description: 'Comprehensive DPDPA compliance services covering readiness assessment, privacy governance, implementation support, and ongoing advisory.',
            url: `${siteUrl}/dpdpa-compliance`,
            areaServed: {
                '@type': 'Country',
                name: 'India'
            },
            provider: {
                '@id': `${siteUrl}/#organization`
            }
        },
        dpdpaFaqSchema
    ]
};

export const aiInfraServiceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Service',
            '@id': `${siteUrl}/ai-infra-governance#service`,
            name: 'AI Infra, Build & Governance Services',
            serviceType: 'AI Engineering and Governance Consulting',
            description: 'Enterprise AI infrastructure sizing, high-performance model pipeline engineering, and comprehensive AI governance, security, and regulatory compliance.',
            url: `${siteUrl}/ai-infra-governance`,
            areaServed: {
                '@type': 'Country',
                name: 'India'
            },
            provider: {
                '@id': `${siteUrl}/#organization`
            }
        },
        aiInfraFaqSchema
    ]
};
