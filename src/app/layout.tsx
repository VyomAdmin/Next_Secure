import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://valinztech.com"),
  title: {
    default: "ValinzTech | Intelligence-Driven Technology Governance",
    template: "%s | ValinzTech",
  },
  description: "We help organizations build intelligent, secure, compliant, and future-ready technology systems through systematic governance frameworks.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "ValinzTech",
    title: "ValinzTech | Intelligence-Driven Technology Governance",
    description:
      "Technology governance, DPDPA readiness, privacy, compliance, and risk advisory support.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "ValinzTech | Intelligence-Driven Technology Governance",
    description:
      "Technology governance, DPDPA readiness, privacy, compliance, and risk advisory support.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
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
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
