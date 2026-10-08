import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/content/products";
import { COMPANY } from "@/content/company";
import {
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ChevronLeft,
  MapPin,
  MessageCircle,
  Truck,
  Leaf,
  Store,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AO Mart (Agen Organik) — Organic & Gluten-Free Storefront",
  description: "Online web storefront for an organic and gluten-free minimarket in Samarinda Kota. Built and operated by PT HM Tech Innovation.",
};

export default function AoMartPage() {
  const product = PRODUCTS.find((p) => p.slug === "ao-mart")!;

  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 flex flex-col gap-12">
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
          <div className="w-16 h-16 rounded-xl bg-surface border border-border-subtle flex items-center justify-center flex-shrink-0 text-success shadow-subtle">
            <ShoppingBag className="w-8 h-8" />
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
            Domain: agenorganik.com
          </span>
        </div>
      </div>

      {/* Operational Transparency Note */}
      <div className="p-4 sm:p-5 rounded-md bg-inset border-l-4 border-l-success border border-border-subtle flex items-start gap-3">
        <Store className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1 text-xs">
          <span className="font-mono uppercase font-semibold text-success tracking-wider">
            Founder & Retail Operation Context
          </span>
          <p className="font-sans text-ink-muted leading-relaxed">
            AO Mart (Agen Organik) is an organic retail store with a physical presence in Samarinda Kota. The web storefront was custom-engineered to eliminate cart registration friction by pairing an account-free web basket with automated WhatsApp delivery dispatch.
          </p>
        </div>
      </div>

      {/* Product Catalog Coverage */}
      <div className="rounded-lg bg-surface border border-border-subtle p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Leaf className="w-4 h-4 text-success" />
          <h2 className="text-sm font-mono uppercase font-semibold tracking-wider text-ink">
            Curated Healthy Food Categories
          </h2>
        </div>
        <p className="text-xs font-sans text-ink-muted">
          The storefront caters to health-conscious families and individuals managing dietary restrictions:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
          {[
            "Organic Grains & Superfoods",
            "Gluten-Free Flour & Noodles",
            "Non-MSG Seasoning & Broth",
            "Raw Wild Honey & Propolis",
            "Virgin Coconut & Olive Oils",
            "Healthy Daily Household Groceries",
          ].map((cat, idx) => (
            <div
              key={idx}
              className="p-3 rounded bg-inset border border-border-subtle text-ink flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-success" />
              <span>{cat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* What We Built (Software Engineering Facts) */}
      <div className="flex flex-col gap-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-ink-faint">
          Web Architecture & Features
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

      {/* Logistics & Multi-Channel Distribution */}
      <div className="rounded-lg bg-surface border border-border-subtle p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-signal" />
          <h2 className="text-sm font-mono uppercase font-semibold tracking-wider text-ink">
            Fulfillment & Omnichannel Presence
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-md bg-inset border border-border-subtle flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-ink text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-signal" />
              <span>Physical Retail Store</span>
            </div>
            <p className="text-xs font-sans text-ink-muted leading-relaxed">
              Operating storefront in Samarinda Kota, East Kalimantan. In-person shopping and same-day collection.
            </p>
          </div>

          <div className="p-4 rounded-md bg-inset border border-border-subtle flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-ink text-xs font-semibold">
              <MessageCircle className="w-3.5 h-3.5 text-success" />
              <span>WhatsApp Coordination</span>
            </div>
            <p className="text-xs font-sans text-ink-muted leading-relaxed">
              Instant local courier dispatch (Grab/Gojek/Maxim) arranged directly via WhatsApp with zero account friction.
            </p>
          </div>

          <div className="p-4 rounded-md bg-inset border border-border-subtle flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-ink text-xs font-semibold">
              <ShoppingBag className="w-3.5 h-3.5 text-intel" />
              <span>Marketplace Channels</span>
            </div>
            <p className="text-xs font-sans text-ink-muted leading-relaxed">
              Also verified and active on major Indonesian e-commerce platforms: Shopee, Tokopedia, and TikTok Shop.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Stance */}
      <div className="rounded-lg bg-surface border border-border-subtle p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-success" />
          <h2 className="text-sm font-mono uppercase font-semibold tracking-wider text-ink">
            Data Privacy & Tracking Stance
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

      {/* Footer Storefront CTA */}
      <div className="p-6 rounded-lg bg-surface-2 border border-border-dashed flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-ink-faint">
            Live Web Storefront
          </span>
          <p className="text-base font-mono font-medium text-ink">
            agenorganik.com · Active Samarinda E-Commerce
          </p>
          <p className="text-xs font-sans text-ink-muted">
            Independent retail technology engineered by PT HM Tech Innovation.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={product.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md bg-signal text-signal-ink font-mono text-xs font-semibold hover:opacity-90 inline-flex items-center gap-2"
          >
            <span>Visit agenorganik.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
