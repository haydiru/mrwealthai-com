import React from "react";
import type { Metadata } from "next";
import { ProductsList } from "@/components/ProductsList";
import { COMPANY } from "@/content/company";

export const metadata: Metadata = {
  title: "Live Software Products",
  description: "Explore the live micro-SaaS and consumer utilities portfolio shipped by PT HM Tech Innovation and mrwealthai.com.",
};

export default function ProductsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-3 pb-6 border-b border-border-subtle">
        <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-ink-faint">
          <span className="w-2 h-2 rounded-full bg-signal" />
          <span>Verified Deployments · {COMPANY.legalEntityName}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-semibold tracking-tight text-ink">
          Live Software Portfolio
        </h1>
        <p className="text-sm sm:text-base text-ink-muted max-w-[68ch] leading-relaxed">
          Every product listed below is deployed, actively maintained, and verified with direct links to official app store listings and production storefronts.
        </p>
      </div>

      {/* Interactive List */}
      <ProductsList />
    </div>
  );
}
