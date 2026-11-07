import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteDescription =
  "ValinzTech provides consulting and services for companies. Review the work, book a consultation, or request support from one contact form.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://valinztech.com"),
  title: {
    default: "ValinzTech",
    template: "%s | ValinzTech",
  },
  description: siteDescription,
  applicationName: "ValinzTech",
  authors: [{ name: "ValinzTech", url: "https://valinztech.com" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "ValinzTech",
    title: "ValinzTech | Consulting and Services for Companies",
    description: siteDescription,
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ValinzTech consulting and services for companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ValinzTech | Consulting and Services for Companies",
    description: siteDescription,
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
