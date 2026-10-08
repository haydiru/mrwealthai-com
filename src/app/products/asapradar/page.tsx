import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/content/products";
import { COMPANY } from "@/content/company";
import {
  Radar,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ChevronLeft,
  Database,
  Lock,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AsapRadar — ISPU Air Quality & Haze Radar for Your Commute",
  description: "Daily morning ISPU briefing and fire-hotspot radar projected onto your commute route in Indonesia. Built by PT HM Tech Innovation.",
};

export default function AsapRadarPage() {
  const product = PRODUCTS.find((p) => p.slug === "asapradar")!;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    operatingSystem: "Android",
    applicationCategory: "NavigationApplication",
    offers: {
      "@type": "Offer",
      price: "10000",
      priceCurrency: "IDR",
    },
    author: {
      "@type": "Organization",
      name: COMPANY.legalEntityName,
      url: `https://${COMPANY.domain}`,
    },
  };

  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 flex flex-col gap-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back button */}
      <div>
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-muted hover:text-signal transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to all products</span>
        </Link>
      </div>

      {/* Header & Main Badges */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-border-subtle">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-xl bg-surface border border-border-subtle flex items-center justify-center flex-shrink-0 text-signal shadow-subtle">
            <Radar className="w-8 h-8" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-ink">
                {product.name}
              </h1>
              <span className="px-2 py-0.5 rounded-sm border border-border-subtle text-[10px] font-mono uppercase text-ink-muted">
                {product.platformBadge}
              </span>
              <span className="px-2 py-0.5 rounded-sm bg-success/10 border border-success/30 text-[10px] font-mono text-success font-semibold">
                {product.status}
              </span>
            </div>
            <p className="text-sm sm:text-base font-sans text-ink-muted max-w-[56ch]">
              {product.tagline}
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-ink-faint mt-1">
              <span>Category: {product.category}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-signal" />
                Updated {product.lastUpdated}
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col gap-2 flex-shrink-0">
          <a
            href={product.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md bg-signal text-signal-ink font-mono text-xs font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
          >
            <span>{product.storeBadgeText}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span className="text-[10px] font-mono text-ink-faint text-center">
            Package: id.asapradar.app
          </span>
        </div>
      </div>

      {/* Prominent Regulatory Disclaimer */}
      <div className="p-4 sm:p-5 rounded-md bg-inset border-l-4 border-l-warning border border-border-subtle flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1 text-xs">
          <span className="font-mono uppercase font-semibold text-warning tracking-wider">
            Important Independent Disclaimer
          </span>
          <p className="font-sans text-ink-muted leading-relaxed">
            {product.disclaimer}
          </p>
        </div>
      </div>

      {/* Sample Morning Briefing Strings */}
      <div className="flex flex-col gap-3">
        <span className="text-[11px] font-mono uppercase tracking-widest text-ink-faint">
          Real Sample Output
        </span>
        <div className="rounded-lg bg-surface border border-border-subtle p-5 flex flex-col gap-2.5">
          <span className="text-xs font-mono text-signal">
            // Live corridor advisory calculated at commute time:
          </span>
          {product.sampleStrings?.map((str, idx) => (
            <div
              key={idx}
              className="p-3 rounded bg-inset border border-border-subtle text-xs font-mono text-ink flex items-start gap-2"
            >
              <Compass className="w-4 h-4 text-signal flex-shrink-0 mt-0.5" />
              <span>{str}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Core Features */}
      <div className="flex flex-col gap-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-ink-faint">
          Functional Capabilities
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {product.keyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-surface border border-border-subtle flex flex-col gap-2"
            >
              <h3 className="text-sm font-sans font-semibold text-ink">
                {feat.title}
              </h3>
              <p className="text-xs font-sans text-ink-muted leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Data Sources */}
      <div className="rounded-lg bg-surface border border-border-subtle p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-signal" />
          <h2 className="text-sm font-mono uppercase font-semibold tracking-wider text-ink">
            Integrated Satellite & Atmospheric Data Sources
          </h2>
        </div>
        <p className="text-xs font-sans text-ink-muted">
          AsapRadar aggregates and interpolates public meteorological, atmospheric, and satellite feeds:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-ink">
          {product.dataSources?.map((source, idx) => (
            <li
              key={idx}
              className="p-2.5 rounded bg-inset border border-border-subtle flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-signal" />
              <span>{source}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Privacy Facts */}
      <div className="rounded-lg bg-surface border border-border-subtle p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-success" />
          <h2 className="text-sm font-mono uppercase font-semibold tracking-wider text-ink">
            Privacy & Minimalist Architecture Facts
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {product.privacyFacts.map((fact, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 text-xs font-mono text-ink-muted"
            >
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
              <span>{fact}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing & Store Links */}
      <div className="p-6 rounded-lg bg-surface-2 border border-border-dashed flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-ink-faint">
            Monetization & Pricing
          </span>
          <p className="text-base font-mono font-medium text-ink">
            Free core briefing · AsapRadar Plus: Rp 10,000 / month
          </p>
          <p className="text-xs font-sans text-ink-muted">
            Billed securely through Google Play In-App Subscriptions. Cancel anytime directly in Play Store.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={product.privacyPolicyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-ink-muted hover:text-ink underline"
          >
            Standalone Privacy Policy
          </a>
          <a
            href={product.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-signal text-signal-ink font-mono text-xs font-semibold hover:opacity-90 inline-flex items-center gap-1.5"
          >
            <span>Google Play</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
