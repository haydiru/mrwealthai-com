import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/content/company";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Official Terms of Service for mrwealthai.com, operated by PT HM Tech Innovation.",
};

export default function TermsPage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 flex flex-col gap-10">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-muted hover:text-signal transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <span className="text-[11px] font-mono uppercase tracking-widest text-ink-faint block mb-2">
          Legal Agreement
        </span>
        <h1 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-ink">
          Terms of Service
        </h1>
        <div className="flex items-center gap-3 text-xs font-mono text-ink-faint mt-2">
          <span>LAST UPDATED: OCTOBER 2026</span>
          <span>·</span>
          <span>PT HM TECH INNOVATION</span>
        </div>
      </div>

      <div className="flex flex-col gap-8 text-sm font-sans text-ink-muted leading-relaxed">
        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-sans font-semibold text-ink">1. Acceptance of Terms</h2>
          <p>
            By accessing or using <strong className="text-ink">{COMPANY.domain}</strong>, you agree to be bound by these Terms of Service and all applicable laws and regulations of the Republic of Indonesia. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-sans font-semibold text-ink">2. Operating Entity and Brand</h2>
          <p>
            The website and brand <strong className="text-ink">{COMPANY.brandName}</strong> are owned and operated by <strong className="text-ink">{COMPANY.legalEntityName}</strong>, a registered corporate entity in Samarinda, East Kalimantan, Indonesia.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-sans font-semibold text-ink">3. Intellectual Property</h2>
          <p>
            The software, branding, design system, documentation, and content on this website are the proprietary property of PT HM Tech Innovation or licensed to it. You may not reproduce, duplicate, copy, sell, or exploit any portion of the site without express written permission from the founder.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-sans font-semibold text-ink">4. Product Disclaimer & Platform Billing</h2>
          <p>
            Our consumer applications (such as AsapRadar and FlagCheck) are distributed via the Google Play Store and governed by Google Play&apos;s Terms of Service and applicable app-specific agreements. In-app subscriptions and payments are processed directly through Google Play billing mechanisms.
          </p>
          <p>
            AsapRadar is an independent informational tool and does not replace official meteorological or government emergency alerts. FlagCheck provides conversational analysis and does not constitute psychological, legal, or financial advice.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-sans font-semibold text-ink">5. Governing Law and Jurisdiction</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the Republic of Indonesia. Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the competent courts located in Samarinda, East Kalimantan, Indonesia.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-sans font-semibold text-ink">6. Contact Information</h2>
          <div className="p-4 rounded-md bg-inset border border-border-subtle text-xs font-mono text-ink">
            PT HM Tech Innovation<br />
            Email: {COMPANY.officialEmail}<br />
            Samarinda, East Kalimantan, Indonesia
          </div>
        </section>
      </div>
    </div>
  );
}
