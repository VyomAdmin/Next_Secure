import { redirect } from 'next/navigation';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = {
    ...pageMetadata({
        title: 'About ValinzTech',
        description:
            'About ValinzTech, a consulting and services firm for companies. Contact the team to start work, book time, or request support.',
        path: '/about-contact',
    }),
    robots: {
        index: false,
        follow: true,
    },
};

export default function AboutPage() {
    redirect('/about-contact');
}
