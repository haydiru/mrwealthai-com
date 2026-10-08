import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/content/company";
import { CopyEmailButton } from "@/components/AboutClient";
import {
  ShieldCheck,
  MapPin,
  User,
  ArrowUpRight,
  Milestone,
  CheckCircle2,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Engineering Philosophy",
  description: "Learn about mrwealthai.com, our parent company PT HM Tech Innovation, founder Haidir Magribi, and our micro-SaaS principles.",
};

export default function AboutPage() {
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
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.founder.city,
      addressRegion: COMPANY.founder.province,
      addressCountry: "ID",
    },
  };

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 flex flex-col gap-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="flex flex-col gap-3 pb-6 border-b border-border-subtle">
        <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-ink-faint">
          <span className="w-2 h-2 rounded-full bg-signal" />
          <span>Company & Founder Profile</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-semibold tracking-tight text-ink">
          Plainspoken, engineered, and verifiable.
        </h1>
        <p className="text-sm sm:text-base text-ink-muted max-w-[68ch] leading-relaxed">
          {COMPANY.narrative}
        </p>
      </div>

      {/* 2-Column: Story & Company Facts Ledger */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-sm font-sans text-ink-muted leading-relaxed">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-sans font-semibold text-ink">
              The Reality Behind Our Software
            </h2>
            <p>
              Many technology sites hide behind corporate jargon, claiming to be "global platforms" when they are actually small projects, or presenting AI buzzwords to look larger than they are. We do the exact opposite.
            </p>
            <p>
              <strong className="text-ink font-semibold">{COMPANY.brandName}</strong> represents the digital product identity for{" "}
              <strong className="text-ink font-semibold">{COMPANY.legalEntityName}</strong>. The company operates from Samarinda, East Kalimantan, Indonesia, and is owned and run by solo developer{" "}
              <span className="text-ink font-medium">{COMPANY.founder.name}</span>.
            </p>
            <p>
              We deliberately build small, focused micro-SaaS utilities. Each tool attacks one concrete, everyday friction—whether it is warning motorbike riders about haze plumes during their morning commute (AsapRadar) or deciphering manipulative chat dynamics and scam patterns (FlagCheck).
            </p>
            <p>
              We believe trust in software is earned through radical transparency: verified legal registration, named human leadership, clear data policies, and verifiable app store URLs.
            </p>
          </div>

          <div className="p-4 rounded-md bg-surface border border-border-subtle flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-signal font-semibold">
              Reviewer Verification Notice
            </span>
            <p className="text-xs font-sans text-ink-muted">
              Startup program evaluators, platform reviewers, and API compliance teams can view all official corporate records, Play Store developer profile references, and legal data on our dedicated Trust page.
            </p>
            <Link
              href="/trust"
              className="text-xs font-mono text-signal hover:underline inline-flex items-center gap-1 mt-1"
            >
              <span>Visit the Trust & Verification Center</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Definition List / Facts Ledger */}
        <div className="lg:col-span-5 rounded-lg bg-surface border border-border-subtle p-6 flex flex-col gap-5 shadow-subtle">
          <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
            <span className="text-xs font-mono uppercase font-semibold tracking-wider text-ink flex items-center gap-2">
              <Building className="w-4 h-4 text-signal" />
              Company Ledger
            </span>
            <span className="text-[10px] font-mono text-success uppercase">
              Registered ID
            </span>
          </div>

          <dl className="flex flex-col gap-3.5 text-xs font-mono">
            <div className="flex flex-col gap-1 pb-2.5 border-b border-border-subtle/60">
              <dt className="text-ink-faint uppercase text-[10px]">Brand & Web Domain</dt>
              <dd className="text-ink font-semibold">{COMPANY.brandName}</dd>
            </div>

            <div className="flex flex-col gap-1 pb-2.5 border-b border-border-subtle/60">
              <dt className="text-ink-faint uppercase text-[10px]">Registered Legal Entity</dt>
              <dd className="text-ink font-semibold">{COMPANY.legalEntityName}</dd>
              <dd className="text-ink-faint text-[10px] font-sans">{COMPANY.registrationStatus}</dd>
            </div>

            <div className="flex flex-col gap-1 pb-2.5 border-b border-border-subtle/60">
              <dt className="text-ink-faint uppercase text-[10px]">Founder & Lead Developer</dt>
              <dd className="text-ink font-semibold flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-signal" />
                <span>{COMPANY.founder.name}</span>
              </dd>
            </div>

            <div className="flex flex-col gap-1 pb-2.5 border-b border-border-subtle/60">
              <dt className="text-ink-faint uppercase text-[10px]">Operational Base</dt>
              <dd className="text-ink flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-signal" />
                <span>{COMPANY.founder.location}</span>
              </dd>
            </div>

            <div className="flex flex-col gap-1 pb-2.5 border-b border-border-subtle/60">
              <dt className="text-ink-faint uppercase text-[10px]">Active Live Products</dt>
              <dd className="text-ink">3 Deployed (2 Android on Play Store, 1 Web)</dd>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <dt className="text-ink-faint uppercase text-[10px]">Official Contact Email</dt>
              <dd className="text-ink select-all break-all">{COMPANY.officialEmail}</dd>
              <div className="pt-1">
                <CopyEmailButton />
              </div>
            </div>
          </dl>
        </div>
      </div>

      {/* Principles Section */}
      <div className="flex flex-col gap-6 pt-6 border-t border-border-subtle">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-ink-faint block mb-1">
            Our Standards
          </span>
          <h2 className="text-2xl font-sans font-semibold tracking-tight text-ink">
            Four Non-Negotiable Build Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPANY.principles.map((pr, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-surface border border-border-subtle flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-signal uppercase tracking-wider">
                  Principle 0{idx + 1}
                </span>
                <span className="text-[10px] font-mono text-ink-faint">VERIFIABLE</span>
              </div>
              <h3 className="text-base font-sans font-semibold text-ink">
                {pr.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-ink-muted leading-relaxed">
                {pr.description}
              </p>
              <div className="mt-2 pt-3 border-t border-border-subtle text-xs font-mono text-ink-faint">
                <strong className="text-ink font-normal">Evidence:</strong> {pr.evidence}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Honest Roadmap Section */}
      <div className="rounded-lg bg-surface border border-border-subtle p-8 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Milestone className="w-5 h-5 text-signal" />
          <h2 className="text-lg font-sans font-semibold tracking-tight text-ink">
            Honest Roadmap
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-sans text-ink-muted max-w-[64ch]">
          We do not publish speculative five-year projections or invent vanity milestones. Here is our real operational focus:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COMPANY.roadmap.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-md bg-inset border border-border-subtle flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-signal font-semibold">
                  {item.phase}
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-sm ${
                    item.status === "active"
                      ? "bg-success/10 text-success border border-success/30 font-semibold"
                      : "text-ink-faint border border-border-subtle"
                  }`}
                >
                  {item.status.toUpperCase()}
                </span>
              </div>
              <h4 className="text-sm font-sans font-semibold text-ink">
                {item.title}
              </h4>
              <p className="text-xs font-sans text-ink-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
