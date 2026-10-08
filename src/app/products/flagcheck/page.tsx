import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/content/products";
import { COMPANY } from "@/content/company";
import {
  MessageSquareWarning,
  ExternalLink,
  ShieldAlert,
  ShieldCheck,
  AlertOctagon,
  CheckCircle2,
  Clock,
  ChevronLeft,
  Users,
  Reply,
  Lock,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FlagCheck — AI Chat Screenshot Analyzer & Scam Warning Tool",
  description: "Analyze chat subtext, emotional effort balance, red flags, and fraud patterns. Built by PT HM Tech Innovation.",
};

export default function FlagCheckPage() {
  const product = PRODUCTS.find((p) => p.slug === "flagcheck")!;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    operatingSystem: "Android",
    applicationCategory: "CommunicationApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free daily scan and permanently free scam detection",
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

      {/* Header & Badges */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-border-subtle">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-xl bg-surface border border-border-subtle flex items-center justify-center flex-shrink-0 text-intel shadow-subtle">
            <MessageSquareWarning className="w-8 h-8" />
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
            Package: app.flagcheck.mobile
          </span>
        </div>
      </div>

      {/* Boundary & Ethics Statement */}
      <div className="p-4 sm:p-5 rounded-md bg-inset border-l-4 border-l-intel border border-border-subtle flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-intel flex-shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1 text-xs">
          <span className="font-mono uppercase font-semibold text-intel tracking-wider">
            What This Tool Is and Is Not
          </span>
          <p className="font-sans text-ink-muted leading-relaxed">
            {product.disclaimer} We do not deliver moral judgments or definitive psychological diagnoses. FlagCheck provides structured semantic and conversational analysis to empower your own intuition.
          </p>
        </div>
      </div>

      {/* Emphasized Scam & Fraud Pattern Block */}
      <div className="rounded-lg bg-surface border-2 border-danger/40 p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-danger">
            <AlertOctagon className="w-5 h-5" />
            <h2 className="text-sm font-mono uppercase font-bold tracking-wider">
              Permanent Free Protection: Scam & Manipulation Warnings
            </h2>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-danger/10 border border-danger/30 text-danger font-semibold uppercase">
            Always Free
          </span>
        </div>
        <p className="text-xs font-sans text-ink-muted leading-relaxed">
          Scam warnings are never held behind a paywall. FlagCheck never declares someone a scammer arbitrarily; instead, it matches concrete linguistic markers and advises safety checks:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-ink">
          {product.scamPatterns?.map((pat, idx) => (
            <div
              key={idx}
              className="p-3 rounded bg-inset border border-border-subtle flex items-start gap-2"
            >
              <span className="text-danger font-semibold">⚠</span>
              <span>{pat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Core Analytic Modules */}
      <div className="flex flex-col gap-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-ink-faint">
          Analysis Dimensions
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {product.keyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-surface border border-border-subtle flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                <h3 className="text-sm font-sans font-semibold text-ink">
                  {feat.title}
                </h3>
              </div>
              <p className="text-xs font-sans text-ink-muted leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Relationship Contexts */}
      <div className="rounded-lg bg-surface border border-border-subtle p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-signal" />
          <h2 className="text-sm font-mono uppercase font-semibold tracking-wider text-ink">
            Relationship-Tuned Lens
          </h2>
        </div>
        <p className="text-xs font-sans text-ink-muted">
          Subtext means different things depending on who you are speaking with. FlagCheck customizes its perspective across six distinct dynamics:
        </p>
        <div className="flex flex-wrap gap-2">
          {product.relationshipTypes?.map((rel, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-md bg-inset border border-border-subtle text-xs font-mono text-ink"
            >
              {rel}
            </span>
          ))}
        </div>
      </div>

      {/* Three Reply Draft Types */}
      <div className="rounded-lg bg-surface border border-border-subtle p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Reply className="w-4 h-4 text-signal" />
          <h2 className="text-sm font-mono uppercase font-semibold tracking-wider text-ink">
            Three Calibrated Counter-Replies
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {product.replyStyles?.map((style, idx) => {
            const [title, desc] = style.split(": ");
            return (
              <div
                key={idx}
                className="p-4 rounded-md bg-inset border border-border-subtle flex flex-col gap-1.5"
              >
                <span className="text-xs font-mono font-semibold text-signal uppercase tracking-wider">
                  {title}
                </span>
                <p className="text-xs font-sans text-ink-muted leading-relaxed">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Privacy Guarantee */}
      <div className="rounded-lg bg-surface border border-border-subtle p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-success" />
          <h2 className="text-sm font-mono uppercase font-semibold tracking-wider text-ink">
            Privacy By Design (Zero Image Retention)
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

      {/* Monetization / Pricing */}
      <div className="p-6 rounded-lg bg-surface-2 border border-border-dashed flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-ink-faint">
            Pricing & Subscriptions
          </span>
          <p className="text-base font-mono font-medium text-ink">
            1 Free Scan Daily · Weekly Pro or 10-Scan Pack
          </p>
          <p className="text-xs font-sans text-ink-muted">
            Languages supported: English, Bahasa Indonesia, and Español.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={product.privacyPolicyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-ink-muted hover:text-ink underline"
          >
            Privacy Policy
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
