import type { Metadata } from 'next';

type PageMetadataInput = {
    title: string;
    description: string;
    path: string;
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
    const socialTitle = `${title} | ValinzTech`;

    return {
        title,
        description,
        alternates: {
            canonical: path,
        },
        openGraph: {
            title: socialTitle,
            description,
            url: path,
            type: 'website',
            images: [
                {
                    url: '/og.png',
                    width: 1200,
                    height: 630,
                    alt: 'ValinzTech consulting and services for companies',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: socialTitle,
            description,
            images: ['/og.png'],
        },
    };
}
