import type { Metadata } from "next";
import "./globals.css";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://valinztech.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ValinzTech | Enterprise Technology, Cybersecurity & AI Governance",
    template: "%s | ValinzTech",
  },
  description:
    "We help organizations engineer sovereign AI infrastructure, achieve DPDPA 2023 compliance, and implement institutional cybersecurity governance.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "ValinzTech",
    title: "ValinzTech | Enterprise Technology, Cybersecurity & AI Governance",
    description:
      "Technology governance, sovereign AI infrastructure, DPDPA readiness, and risk advisory support.",
    url: "/",
    images: [
      {
        url: "/crousel/IMG_home.PNG",
        width: 1200,
        height: 630,
        alt: "ValinzTech Enterprise Technology & Governance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ValinzTech | Enterprise Technology, Cybersecurity & AI Governance",
    description:
      "Technology governance, sovereign AI infrastructure, DPDPA readiness, and risk advisory support.",
    images: ["/crousel/IMG_home.PNG"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans pb-24 lg:pb-0">
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
