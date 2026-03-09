import { dpdpaFaqs, generalFaqs, services } from '@/lib/siteContent';

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
    email: 'contact@valinztech.com',
    telephone: '+91-9953562762',
    areaServed: 'IN',
    description: 'Technology governance, DPDPA readiness, privacy governance, and compliance advisory services.',
    contactPoint: [
        {
            '@type': 'ContactPoint',
            telephone: '+91-9953562762',
            contactType: 'customer support',
            availableLanguage: ['English'],
            email: 'contact@valinztech.com'
        }
    ]
};

export const aboutFaqSchema = createFaqSchema('/about', generalFaqs);

export const aboutContactFaqSchema = createFaqSchema('/about-contact', generalFaqs);

export const dpdpaFaqSchema = createFaqSchema('/dpdpa-compliance', dpdpaFaqs);

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
