import React from "react";
import Link from "next/link";
import { COMPANY } from "@/content/company";
import { PRODUCTS } from "@/content/products";
import {
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Layers,
  Lock,
  EyeOff,
  UserCheck,
  Mail,
  Smartphone,
  Globe,
  Radar,
  MessageSquareWarning,
  ShoppingBag,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 py-8 md:py-16">
      {/* 1. HERO SECTION & LIVE REGISTRY */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (Hero Content - 6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Status / Identity Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-surface border border-border-subtle w-fit">
              <span className="w-2 h-2 rounded-full bg-signal animate-status-pulse flex-shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted">
                Studio by {COMPANY.legalEntityName}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tighter text-ink leading-[1.05]">
              Small software for real problems. <br />
              <span className="text-ink-muted">Live today.</span>
            </h1>

            {/* 2-line Subcopy */}
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-[54ch]">
              {COMPANY.valueProposition}
            </p>

            {/* Legal Entity Transparency Callout */}
            <div className="p-3.5 rounded-md bg-inset border border-border-subtle text-xs font-mono text-ink-muted leading-relaxed">
              <span className="text-signal font-semibold uppercase tracking-wider block mb-1">
                Transparency Notice
              </span>
              Digital products operate under the brand{" "}
              <strong className="text-ink">{COMPANY.brandName}</strong>, registered in Indonesia as{" "}
              <strong className="text-ink">{COMPANY.legalEntityName}</strong>. Developed by founder{" "}
              <span className="text-ink">{COMPANY.founder.name}</span> in {COMPANY.founder.city}.
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#products-section"
                className="px-5 py-2.5 rounded-md bg-signal text-signal-ink font-mono text-xs font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <span>See live products</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/trust"
                className="px-5 py-2.5 rounded-md bg-surface border border-border-subtle hover:border-border-strong text-ink font-mono text-xs font-medium transition-colors inline-flex items-center gap-2"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-success" />
                <span>Verification center</span>
              </Link>
            </div>
          </div>

          {/* Right Column (Live Registry Panel - 6 cols) */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-lg bg-surface border border-border-subtle overflow-hidden shadow-subtle">
              {/* Registry Header */}
              <div className="px-5 py-3.5 bg-inset border-b border-border-subtle flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-signal" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-ink">
                    Live Product Registry
                  </span>
                </div>
                <span className="text-[11px] font-mono text-ink-faint">
                  3 ACTIVE · VERIFIED DEPLOYMENTS
                </span>
              </div>

              {/* Table Column Labels */}
              <div className="grid grid-cols-12 px-5 py-2 text-[10px] font-mono uppercase tracking-wider text-ink-faint border-b border-border-subtle bg-surface/50">
                <div className="col-span-5">Product</div>
                <div className="col-span-3">Platform</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2 text-right">Updated</div>
              </div>

              {/* Registry Rows */}
              <div className="divide-y divide-border-subtle">
                {PRODUCTS.map((prod) => (
                  <Link
                    key={prod.slug}
                    href={prod.internalPath}
                    className="grid grid-cols-12 px-5 py-3.5 items-center text-xs hover:bg-surface-2 transition-colors group"
                  >
                    <div className="col-span-5 flex items-center gap-2.5 pr-2">
                      <div className="w-7 h-7 rounded-md bg-inset border border-border-subtle flex items-center justify-center flex-shrink-0 group-hover:border-signal/50 transition-colors">
                        {prod.slug === "asapradar" && <Radar className="w-4 h-4 text-signal" />}
                        {prod.slug === "flagcheck" && <MessageSquareWarning className="w-4 h-4 text-intel" />}
                        {prod.slug === "ao-mart" && <ShoppingBag className="w-4 h-4 text-success" />}
                      </div>
                      <span className="font-sans font-medium text-ink group-hover:text-signal transition-colors truncate">
                        {prod.name}
                      </span>
                    </div>

                    <div className="col-span-3">
                      <span className="inline-block px-1.5 py-0.5 rounded-sm border border-border-subtle text-[10px] font-mono uppercase text-ink-muted">
                        {prod.platformBadge}
                      </span>
                    </div>

                    <div className="col-span-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                      <span className="text-[11px] font-mono text-success font-medium">LIVE</span>
                    </div>

                    <div className="col-span-2 text-right font-mono text-[11px] text-ink-muted tabular-nums group-hover:text-ink flex items-center justify-end gap-1">
                      <span>{prod.lastUpdated.split(",")[0]}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-signal flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Registry Footer Info */}
              <div className="px-5 py-3 bg-inset/60 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-ink-faint">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-success" />
                  <span>Public Play Store and Web URLs checked daily</span>
                </div>
                <Link href="/trust" className="text-signal hover:underline">
                  Full Trust Checklist →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT STRIP SECTION */}
      <section id="products-section" className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 w-full scroll-mt-20">
        <div className="flex flex-col gap-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border-subtle">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink-faint block mb-1">
                Deployed Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-semibold tracking-tight text-ink">
                Three focused software tools.
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs font-mono text-signal hover:underline inline-flex items-center gap-1"
            >
              Filter & Sort All Products →
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.slug}
                className="rounded-lg bg-surface border border-border-subtle hover:border-border-strong transition-all flex flex-col justify-between p-6 shadow-subtle group"
              >
                <div className="flex flex-col gap-4">
                  {/* Card Top: Icon + Platform Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-inset border border-border-subtle flex items-center justify-center text-ink group-hover:border-signal/40 transition-colors">
                      {prod.slug === "asapradar" && <Radar className="w-6 h-6 text-signal" />}
                      {prod.slug === "flagcheck" && <MessageSquareWarning className="w-6 h-6 text-intel" />}
                      {prod.slug === "ao-mart" && <ShoppingBag className="w-6 h-6 text-success" />}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-sm border border-border-subtle text-[10px] font-mono uppercase text-ink-muted">
                        {prod.platformBadge}
                      </span>
                      <span className="px-2 py-0.5 rounded-sm bg-success/10 border border-success/30 text-[10px] font-mono text-success font-semibold">
                        LIVE
                      </span>
                    </div>
                  </div>

                  {/* Name & Tagline */}
                  <div>
                    <h3 className="text-xl font-sans font-semibold text-ink group-hover:text-signal transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs font-mono text-ink-faint mt-0.5">
                      {prod.category} · Updated {prod.lastUpdated}
                    </p>
                  </div>

                  {/* Problem statement */}
                  <p className="text-sm font-sans text-ink-muted leading-relaxed line-clamp-3">
                    {prod.problemStatement}
                  </p>

                  {/* Key feature bullet */}
                  <div className="p-3 rounded-md bg-inset border border-border-subtle text-xs font-sans text-ink-muted flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-ink-faint">
                      Primary Advantage
                    </span>
                    <span className="text-ink text-xs font-medium">
                      {prod.keyFeatures[0]?.title}: {prod.keyFeatures[0]?.description}
                    </span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between gap-3">
                  <Link
                    href={prod.internalPath}
                    className="text-xs font-mono text-ink hover:text-signal font-medium py-2 transition-colors"
                  >
                    View Details →
                  </Link>

                  <a
                    href={prod.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-md bg-inset border border-border-subtle hover:border-signal text-xs font-mono text-signal hover:bg-surface-2 transition-all inline-flex items-center gap-1.5"
                  >
                    <span>{prod.storeBadgeText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW WE BUILD (FOUR PRINCIPLES) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="rounded-lg bg-surface border border-border-subtle p-8 md:p-12 shadow-subtle">
          <div className="max-w-[64ch] mb-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-signal block mb-2">
              Engineering Stance
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-semibold tracking-tight text-ink">
              Built for trust, not hyperbole.
            </h2>
            <p className="text-sm sm:text-base text-ink-muted mt-2 leading-relaxed">
              We reject bloated software, hidden tracker SDKs, and fabricated growth stories. Every decision is anchored in four operational principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY.principles.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-md bg-inset border border-border-subtle flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-signal font-semibold">
                    0{idx + 1} · {p.title}
                  </span>
                  <span className="text-xs font-mono text-ink-faint">Rule</span>
                </div>
                <h4 className="text-base font-sans font-semibold text-ink">
                  {p.tagline}
                </h4>
                <p className="text-xs sm:text-sm font-sans text-ink-muted leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-2 pt-3 border-t border-border-subtle/80 text-xs font-mono text-ink-faint">
                  <strong className="text-ink font-normal">Proof in production:</strong> {p.evidence}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRUST BAND */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="p-6 md:p-8 rounded-lg bg-surface-2 border border-border-dashed flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-12 h-12 rounded-lg bg-surface border border-border-subtle flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-signal" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-ink-faint">
                Accountability Summary
              </span>
              <p className="text-sm font-sans text-ink font-medium">
                Registered PT in Indonesia · Named Founder Haidir Magribi · 3 Live Deployments
              </p>
              <p className="text-xs font-mono text-ink-muted">
                Official inquiries answered within 2 business days. Zero third-party ad tracking.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/trust"
              className="px-4 py-2 rounded-md bg-signal text-signal-ink font-mono text-xs font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <span>Review Verification Center</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CONTACT BLOCK */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-lg bg-surface border border-border-subtle p-8 md:p-12">
          <div className="lg:col-span-8 flex flex-col gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-ink-faint">
              Direct Communication
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-semibold tracking-tight text-ink">
              Have a question or verification request?
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed max-w-[58ch]">
              Whether you are evaluating our company for a startup program, checking developer legitimacy, or seeking business collaboration, you get answers directly from the founder.
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-ink-muted">
              <span>Primary: <strong className="text-ink">{COMPANY.officialEmail}</strong></span>
              <span>·</span>
              <span>SLA: 2 Business Days</span>
              <span>·</span>
              <span>Encrypted Submission</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              href="/contact"
              className="w-full py-3 px-4 rounded-md bg-signal text-signal-ink font-mono text-xs font-semibold text-center hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Open Contact Form</span>
            </Link>
            <a
              href={`mailto:${COMPANY.officialEmail}`}
              className="w-full py-3 px-4 rounded-md bg-inset border border-border-subtle hover:border-border-strong text-ink font-mono text-xs text-center transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>Email directly</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ink-faint" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
