import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/content/company";
import { ShieldCheck, ExternalLink, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Official Privacy Policy and Data Handling stance for mrwealthai.com and PT HM Tech Innovation.",
};

export default function PrivacyPage() {
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
          Legal & Privacy Policy
        </span>
        <h1 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-ink">
          Privacy Policy & Data Handling
        </h1>
        <div className="flex items-center gap-3 text-xs font-mono text-ink-faint mt-2">
          <span>LAST UPDATED: OCTOBER 2026</span>
          <span>·</span>
          <span>PT HM TECH INNOVATION</span>
        </div>
      </div>

      <div className="flex flex-col gap-8 text-sm font-sans text-ink-muted leading-relaxed">
        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-sans font-semibold text-ink">1. Identity and Scope</h2>
          <p>
            This Privacy Policy governs the digital domain <strong className="text-ink">{COMPANY.domain}</strong> and corporate communications operated by <strong className="text-ink">{COMPANY.legalEntityName}</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), registered in the Republic of Indonesia.
          </p>
          <p>
            We operate under a simple principle: we do not collect personal data we do not strictly need, and we never monetize your data through advertising brokers or telemetry SDKs.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-sans font-semibold text-ink">2. Website Data Collection</h2>
          <p>
            When browsing this website, our systems operate without third-party tracking cookies, fingerprinting scripts, or cross-site surveillance beacons.
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>
              <strong className="text-ink">Contact Form Data:</strong> If you submit an inquiry through our contact form, we collect your name, business email, reason for contact, and message. This data is used solely to process your request and respond directly.
            </li>
            <li>
              <strong className="text-ink">Data Retention:</strong> Inbound contact submissions and reference logs are retained for a maximum of 12 months for record-keeping and audit consistency, after which they are purged.
            </li>
            <li>
              <strong className="text-ink">Cookieless Metrics:</strong> Aggregate page visit counts are measured without personal identifiable identifiers (PII), persistent client cookies, or cross-device matching.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-sans font-semibold text-ink">3. Product-Specific Privacy Policies</h2>
          <p>
            Each software product published by PT HM Tech Innovation maintains its own strict privacy architecture tailored to its operating platform:
          </p>
          <div className="p-4 rounded-md bg-surface border border-border-subtle flex flex-col gap-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-ink font-semibold">AsapRadar (Android)</span>
              <a
                href="https://asapradar.vercel.app/legal/privacy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal hover:underline inline-flex items-center gap-1"
              >
                <span>Read Policy</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="font-sans text-ink-muted text-xs">
              No account required. GPS is queried only while the app is actively foregrounded. Weather grids round coordinates to ~11 km. User incident reports automatically purge after 3 hours. Zero ad networks.
            </p>

            <div className="pt-2 border-t border-border-subtle flex items-center justify-between">
              <span className="text-ink font-semibold">FlagCheck (Android)</span>
              <a
                href="https://flagcheck-legal.vercel.app/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal hover:underline inline-flex items-center gap-1"
              >
                <span>Read Policy</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="font-sans text-ink-muted text-xs">
              Screenshots are never saved on disk or remote database; analysis occurs in transient memory. Redaction tools burn client-side blackouts before image upload. Analysis logs remain exclusively on the user&apos;s physical phone.
            </p>

            <div className="pt-2 border-t border-border-subtle flex items-center justify-between">
              <span className="text-ink font-semibold">AO Mart (Web Storefront)</span>
              <a
                href="https://agenorganik.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal hover:underline inline-flex items-center gap-1"
              >
                <span>Read Policy</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="font-sans text-ink-muted text-xs">
              Customer accounts are not mandatory to assemble a cart. Fulfillment details are handled directly over encrypted WhatsApp channels.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-sans font-semibold text-ink">4. Third-Party Disclosures</h2>
          <p>
            We do not sell, rent, trade, or transfer your contact information to third parties. We may disclose information only if required by applicable Indonesian laws, court warrants, or to defend our legal rights.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-sans font-semibold text-ink">5. Contact Information & Data Inquiries</h2>
          <p>
            For privacy inquiries, data deletion requests, or regulatory questions:
          </p>
          <div className="p-4 rounded-md bg-inset border border-border-subtle text-xs font-mono text-ink">
            PT HM Tech Innovation<br />
            Attention: Privacy & Compliance Officer (Haidir Magribi)<br />
            Email: {COMPANY.officialEmail}<br />
            Samarinda, East Kalimantan, Indonesia
          </div>
        </section>
      </div>
    </div>
  );
}
