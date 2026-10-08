import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/content/company";
import { PRODUCTS } from "@/content/products";
import { TrustActions, CopySnippet } from "@/components/TrustClient";
import {
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Mail,
  AlertCircle,
  FileText,
  Building,
  UserCheck,
  Smartphone,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Trust & Verification Center",
  description: "Official verification records, Indonesian legal registration (PT HM Tech Innovation), developer profile, and live production evidence for mrwealthai.com.",
};

export default function TrustPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 flex flex-col gap-12">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-border-subtle">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-ink-faint">
            <span className="w-2 h-2 rounded-full bg-signal" />
            <span>Public Compliance & Due Diligence Dossier</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-ink">
            Trust & Verification Center
          </h1>
          <p className="text-sm sm:text-base text-ink-muted max-w-[64ch] leading-relaxed">
            Compiled specifically for startup accelerator reviewers, payment processors, app store evaluators, and API compliance verifiers.
          </p>
        </div>

        <TrustActions officialEmail={COMPANY.officialEmail} />
      </div>

      {/* Reviewer Quick Links Bar */}
      <div className="p-4 rounded-lg bg-surface border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
        <span className="text-xs font-mono uppercase tracking-wider text-ink-faint flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-signal" />
          Reviewer Quick Verification:
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://play.google.com/store/apps/details?id=id.asapradar.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded bg-inset border border-border-subtle hover:border-signal text-xs font-mono text-ink hover:text-signal transition-colors inline-flex items-center gap-1.5"
          >
            <span>Play Store: AsapRadar</span>
            <ExternalLink className="w-3 h-3 text-ink-faint" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=app.flagcheck.mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded bg-inset border border-border-subtle hover:border-signal text-xs font-mono text-ink hover:text-signal transition-colors inline-flex items-center gap-1.5"
          >
            <span>Play Store: FlagCheck</span>
            <ExternalLink className="w-3 per 3 h-3 text-ink-faint" />
          </a>
          <a
            href="https://agenorganik.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded bg-inset border border-border-subtle hover:border-signal text-xs font-mono text-ink hover:text-signal transition-colors inline-flex items-center gap-1.5"
          >
            <span>Web: AO Mart</span>
            <ExternalLink className="w-3 h-3 text-ink-faint" />
          </a>
          <a
            href={`mailto:${COMPANY.officialEmail}`}
            className="px-3 py-1.5 rounded bg-signal text-signal-ink font-mono text-xs font-semibold hover:opacity-90 inline-flex items-center gap-1.5"
          >
            <Mail className="w-3 h-3" />
            <span>Email Official</span>
          </a>
        </div>
      </div>

      {/* 1. Formal Verification Receipt (UI Spec 5.4 Benchmark) */}
      <div className="rounded-lg bg-surface border-2 border-dashed border-border-dashed p-6 sm:p-8 flex flex-col gap-6 shadow-subtle print-card">
        <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-faint block">
              Official Verification Receipt
            </span>
            <span className="text-sm font-mono font-bold text-signal tracking-wide">
              RECEIPT NO: MRW-2026-REG-INDONESIA
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-sm bg-success/10 border border-success/30 text-[10px] font-mono text-success font-semibold">
            STATUS: ACTIVE & VERIFIED
          </span>
        </div>

        {/* Receipt Line Items */}
        <div className="flex flex-col gap-3 text-xs font-mono">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-ink-faint">DIGITAL BRAND & PRIMARY DOMAIN</span>
            <span className="text-border-subtle flex-1 mx-2 overflow-hidden select-none border-b border-dotted border-border-subtle" />
            <span className="text-ink font-semibold">{COMPANY.brandName}</span>
          </div>

          <div className="flex items-baseline justify-between gap-2">
            <span className="text-ink-faint">REGISTERED CORPORATE ENTITY</span>
            <span className="text-border-subtle flex-1 mx-2 overflow-hidden select-none border-b border-dotted border-border-subtle" />
            <span className="text-ink font-semibold">{COMPANY.legalEntityName}</span>
          </div>

          <div className="flex items-baseline justify-between gap-2">
            <span className="text-ink-faint">JURISDICTION & LEGAL FORM</span>
            <span className="text-border-subtle flex-1 mx-2 overflow-hidden select-none border-b border-dotted border-border-subtle" />
            <span className="text-ink">{COMPANY.legalJurisdiction} (Perseroan Terbatas / PT)</span>
          </div>

          <div className="flex items-baseline justify-between gap-2">
            <span className="text-ink-faint">FOUNDER & LEAD ENGINEER</span>
            <span className="text-border-subtle flex-1 mx-2 overflow-hidden select-none border-b border-dotted border-border-subtle" />
            <span className="text-ink font-semibold">{COMPANY.founder.name}</span>
          </div>

          <div className="flex items-baseline justify-between gap-2">
            <span className="text-ink-faint">HEADQUARTERS & GEOGRAPHY</span>
            <span className="text-border-subtle flex-1 mx-2 overflow-hidden select-none border-b border-dotted border-border-subtle" />
            <span className="text-ink">{COMPANY.founder.location}</span>
          </div>

          <div className="flex items-baseline justify-between gap-2">
            <span className="text-ink-faint">PRIMARY CORPORATE EMAIL</span>
            <span className="text-border-subtle flex-1 mx-2 overflow-hidden select-none border-b border-dotted border-border-subtle" />
            <span className="text-ink font-semibold">{COMPANY.officialEmail}</span>
          </div>

          <div className="flex items-baseline justify-between gap-2">
            <span className="text-ink-faint">LIVE PRODUCTION APPLICATIONS</span>
            <span className="text-border-subtle flex-1 mx-2 overflow-hidden select-none border-b border-dotted border-border-subtle" />
            <span className="text-ink">3 Verified (2 Android, 1 Web)</span>
          </div>

          <div className="flex items-baseline justify-between gap-2">
            <span className="text-ink-faint">RESPONSE SLA COMMITMENT</span>
            <span className="text-border-subtle flex-1 mx-2 overflow-hidden select-none border-b border-dotted border-border-subtle" />
            <span className="text-success font-semibold">Replies within 2 business days</span>
          </div>
        </div>
      </div>

      {/* 2. Contact Consistency & Reconciling Note */}
      <div className="p-5 rounded-lg bg-inset border border-border-subtle flex items-start gap-4">
        <AlertCircle className="w-5 h-5 text-intel flex-shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1.5 text-xs">
          <span className="font-mono uppercase font-bold text-intel tracking-wider">
            Reviewer Note: Email Address Reconciliation
          </span>
          <p className="font-sans text-ink-muted leading-relaxed">
            {COMPANY.playStoreEmailNote}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 font-mono text-[11px]">
            <span className="text-ink">
              Official Domain Email: <strong className="text-signal">{COMPANY.officialEmail}</strong> (Primary)
            </span>
            <span className="text-ink-faint hidden sm:inline">|</span>
            <span className="text-ink">
              Developer Store Email: <strong className="text-ink-muted">hmtechinovation@gmail.com</strong> (Google Play Listing)
            </span>
          </div>
        </div>
      </div>

      {/* 3. Detailed Verification Checklist Table */}
      <div className="rounded-lg bg-surface border border-border-subtle overflow-hidden shadow-subtle">
        <div className="px-6 py-4 bg-inset border-b border-border-subtle flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-signal" />
            <h2 className="text-xs font-mono uppercase font-semibold tracking-wider text-ink">
              Auditable Evidence Matrix
            </h2>
          </div>
          <span className="text-[11px] font-mono text-success">
            10 / 10 CHECKS SATISFIED
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-border-subtle bg-surface/80 text-[10px] uppercase text-ink-faint">
                <th className="py-3 px-6">Domain / Category</th>
                <th className="py-3 px-6">Verification Item</th>
                <th className="py-3 px-6">Auditable Evidence</th>
                <th className="py-3 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {COMPANY.verificationFacts.map((fact, idx) => (
                <tr key={idx} className="hover:bg-surface-2 transition-colors">
                  <td className="py-3 px-6 text-ink-faint">{fact.category}</td>
                  <td className="py-3 px-6 font-medium text-ink">{fact.label}</td>
                  <td className="py-3 px-6 text-ink-muted">
                    {fact.evidenceHref ? (
                      <a
                        href={fact.evidenceHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-signal hover:underline inline-flex items-center gap-1"
                      >
                        <span>{fact.value}</span>
                        <ExternalLink className="w-3 h-3 text-signal" />
                      </a>
                    ) : (
                      <span>{fact.value}</span>
                    )}
                  </td>
                  <td className="py-3 px-6 text-right">
                    <CopySnippet text={fact.value} label={fact.label} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Product Privacy & Minimalist Data Practices Summary */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-success" />
            <h2 className="text-sm font-mono uppercase font-semibold tracking-wider text-ink">
              Product-By-Product Data Practices Summary
            </h2>
          </div>
          <Link href="/legal/privacy" className="text-xs font-mono text-signal hover:underline">
            Full Privacy Policy →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.slug}
              className="p-5 rounded-lg bg-surface border border-border-subtle flex flex-col gap-3"
            >
              <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                <span className="text-sm font-sans font-semibold text-ink">{prod.name}</span>
                <span className="text-[10px] font-mono text-ink-muted uppercase">{prod.platformBadge}</span>
              </div>
              <ul className="flex flex-col gap-2 text-xs font-mono text-ink-muted">
                {prod.privacyFacts.slice(0, 4).map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <div className="p-6 rounded-lg bg-surface-2 border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-6 no-print">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-ink-faint">
            Still Have Questions?
          </span>
          <p className="text-sm font-sans font-medium text-ink">
            Direct Founder Access for Reviewers & Partners
          </p>
          <p className="text-xs font-sans text-ink-muted">
            Send an expedited verification request directly to {COMPANY.officialEmail}.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-md bg-signal text-signal-ink font-mono text-xs font-semibold hover:opacity-90 inline-flex items-center gap-2"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Submit Verification Inquiry</span>
        </Link>
      </div>
    </div>
  );
}
