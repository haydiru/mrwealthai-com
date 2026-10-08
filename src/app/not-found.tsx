import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, FileQuestion, ChevronRight } from "lucide-react";
import { COMPANY } from "@/content/company";

export default function NotFound() {
  const validRoutes = [
    { label: "Homepage", href: "/", desc: "Live registry and hero overview" },
    { label: "Live Products", href: "/products", desc: "Browse all 3 live software tools" },
    { label: "AsapRadar", href: "/products/asapradar", desc: "ISPU air quality & haze commute alerts" },
    { label: "FlagCheck", href: "/products/flagcheck", desc: "AI chat analyzer & scam pattern detection" },
    { label: "AO Mart", href: "/products/ao-mart", desc: "Organic & gluten-free food storefront" },
    { label: "About Us", href: "/about", desc: "PT HM Tech Innovation & founder profile" },
    { label: "Trust & Verification", href: "/trust", desc: "Auditable legal and reviewer facts" },
    { label: "Contact Founder", href: "/contact", desc: "Direct email and message form" },
  ];

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 py-20 flex flex-col gap-10">
      <div className="flex flex-col gap-3 pb-6 border-b border-border-subtle">
        <span className="text-xs font-mono font-semibold text-danger uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-danger" />
          404 · ROUTE NOT FOUND
        </span>
        <h1 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-ink">
          The requested page does not exist.
        </h1>
        <p className="text-sm font-sans text-ink-muted">
          The path you attempted to access is not part of the {COMPANY.brandName} site map.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-xs font-mono uppercase tracking-wider text-ink-faint">
          Verified Active Routes in System:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {validRoutes.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="p-4 rounded-lg bg-surface border border-border-subtle hover:border-signal transition-colors flex items-center justify-between group"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-mono font-medium text-ink group-hover:text-signal transition-colors">
                  {r.label}
                </span>
                <span className="text-xs font-sans text-ink-muted">
                  {r.desc}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-ink-faint group-hover:text-signal transition-colors" />
            </Link>
          ))}
        </div>
      </div>

      <div className="pt-4">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-md bg-signal text-signal-ink font-mono text-xs font-semibold hover:opacity-90 inline-flex items-center gap-2"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
