import type { Metadata } from "next";
import { Space_Grotesk, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap"
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  weight: ["400", "500"],
  display: "swap"
});

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
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
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
      <body className={`${spaceGrotesk.variable} ${hankenGrotesk.variable} font-sans`}>
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
