import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastProvider } from "@/components/Toast";
import { COMPANY } from "@/content/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${COMPANY.domain}`),
  title: {
    default: `${COMPANY.brandName} — Independent Software Studio (${COMPANY.legalEntityName})`,
    template: `%s · ${COMPANY.brandName}`,
  },
  description: `${COMPANY.brandName} is an independent, founder-led software studio operated by ${COMPANY.legalEntityName} in Samarinda, Indonesia. Live products: AsapRadar, FlagCheck, and AO Mart.`,
  keywords: [
    "mrwealthai",
    "mrwealthai.com",
    "PT HM Tech Innovation",
    "Haidir Magribi",
    "AsapRadar",
    "FlagCheck",
    "AO Mart",
    "Micro-SaaS Indonesia",
    "Android Apps Google Play",
  ],
  authors: [{ name: COMPANY.founder.name, url: `https://${COMPANY.domain}` }],
  creator: COMPANY.founder.name,
  publisher: COMPANY.legalEntityName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${COMPANY.domain}`,
    siteName: COMPANY.brandName,
    title: `${COMPANY.brandName} — Small software for real problems. Live today.`,
    description: `Independent software studio operated by ${COMPANY.legalEntityName}. Verified live products on Google Play and the web.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.brandName,
    legalName: COMPANY.legalEntityName,
    url: `https://${COMPANY.domain}`,
    email: COMPANY.officialEmail,
    founder: {
      "@type": "Person",
      name: COMPANY.founder.name,
      jobTitle: COMPANY.founder.role,
      address: {
        "@type": "PostalAddress",
        addressLocality: COMPANY.founder.city,
        addressRegion: COMPANY.founder.province,
        addressCountry: "ID",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.founder.city,
      addressRegion: COMPANY.founder.province,
      addressCountry: "ID",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-root text-ink min-h-screen flex flex-col antialiased">
        <ToastProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-signal focus:text-signal-ink font-mono text-xs rounded-md"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
