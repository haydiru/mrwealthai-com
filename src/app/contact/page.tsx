import React from "react";
import type { Metadata } from "next";
import { COMPANY } from "@/content/company";
import { ContactForm } from "@/components/ContactForm";
import { CopyEmailButton } from "@/components/AboutClient";
import {
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Direct Contact & Verification Inquiries",
  description: "Reach founder Haidir Magribi and PT HM Tech Innovation directly. Inquiries answered within 2 business days.",
};

export default function ContactPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col gap-3 pb-6 border-b border-border-subtle">
        <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-ink-faint">
          <span className="w-2 h-2 rounded-full bg-signal" />
          <span>Official Communication Channel</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-semibold tracking-tight text-ink">
          Contact the Founder
        </h1>
        <p className="text-sm sm:text-base text-ink-muted max-w-[68ch] leading-relaxed">
          No automated support tier or outsourced call center. Every message is delivered directly to founder Haidir Magribi.
        </p>
      </div>

      {/* 2-Column: Direct Info & Interactive Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Information Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="rounded-lg bg-surface border border-border-subtle p-6 flex flex-col gap-5 shadow-subtle">
            <span className="text-xs font-mono uppercase font-semibold tracking-wider text-ink pb-2 border-b border-border-subtle">
              Direct Inboxes & Operations
            </span>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-ink-faint">
                Official Corporate Email
              </span>
              <span className="text-sm font-mono text-signal font-semibold select-all break-all">
                {COMPANY.officialEmail}
              </span>
              <div className="pt-1">
                <CopyEmailButton />
              </div>
            </div>

            <div className="flex flex-col gap-1 pt-2 border-t border-border-subtle">
              <span className="text-[10px] font-mono uppercase tracking-wider text-ink-faint">
                Response SLA
              </span>
              <div className="flex items-center gap-2 text-xs font-mono text-ink">
                <Clock className="w-3.5 h-3.5 text-signal" />
                <span>Replies guaranteed within 2 business days</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 pt-2 border-t border-border-subtle">
              <span className="text-[10px] font-mono uppercase tracking-wider text-ink-faint">
                Physical Operations Base
              </span>
              <div className="flex items-center gap-2 text-xs font-mono text-ink">
                <MapPin className="w-3.5 h-3.5 text-signal" />
                <span>{COMPANY.founder.location}</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 pt-2 border-t border-border-subtle">
              <span className="text-[10px] font-mono uppercase tracking-wider text-ink-faint">
                Registered Parent Entity
              </span>
              <div className="flex items-center gap-2 text-xs font-mono text-ink">
                <ShieldCheck className="w-3.5 h-3.5 text-success" />
                <span>{COMPANY.legalEntityName} (Indonesia)</span>
              </div>
            </div>
          </div>

          {/* Verification expectations */}
          <div className="p-5 rounded-lg bg-surface-2 border border-border-dashed flex flex-col gap-2.5 text-xs">
            <span className="font-mono text-signal font-semibold uppercase tracking-wider text-[11px]">
              Expedited Reviewer Inquiries
            </span>
            <p className="font-sans text-ink-muted leading-relaxed">
              If you represent an accelerator (e.g. Google for Startups, YC), an app store verification committee, or a financial partner requiring expedited validation, select &ldquo;Verification request&rdquo; in the form to flag your ticket with priority.
            </p>
          </div>
        </div>

        {/* Right Form Column (7 cols) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
