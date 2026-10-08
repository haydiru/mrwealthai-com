"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PRODUCTS, Product } from "@/content/products";
import {
  ExternalLink,
  ChevronRight,
  Radar,
  MessageSquareWarning,
  ShoppingBag,
  Filter,
  SlidersHorizontal,
  RotateCcw,
} from "lucide-react";

type PlatformFilter = "all" | "android" | "web";
type SortOption = "updated" | "name";

export function ProductsList() {
  const [platform, setPlatform] = useState<PlatformFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("updated");

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (platform !== "all") {
      list = list.filter((p) => p.platform === platform);
    }

    if (sortBy === "updated") {
      list.sort((a, b) => b.lastUpdatedIso.localeCompare(a.lastUpdatedIso));
    } else if (sortBy === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [platform, sortBy]);

  const resetFilters = () => {
    setPlatform("all");
    setSortBy("updated");
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Controls Bar */}
      <div className="p-4 rounded-lg bg-surface border border-border-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Platform Filter Buttons */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-ink-faint mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            Filter:
          </span>
          <div className="flex items-center rounded-md bg-inset p-1 border border-border-subtle">
            {(["all", "android", "web"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setPlatform(mode)}
                className={`px-3 py-1 rounded text-xs font-mono capitalize transition-all ${
                  platform === mode
                    ? "bg-surface-2 text-signal font-semibold shadow-sm border border-border-strong"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {mode === "all" ? "All Platforms" : mode}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-ink-faint flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3" />
            Sort:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-inset border border-border-subtle rounded-md px-3 py-1 text-xs font-mono text-ink focus:outline-none focus:border-signal"
          >
            <option value="updated">Recently Updated</option>
            <option value="name">Alphabetical (A–Z)</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs font-mono text-ink-muted px-1">
        <span>
          Showing <strong className="text-ink">{filteredProducts.length}</strong> of{" "}
          <strong className="text-ink">{PRODUCTS.length}</strong> live software products
        </span>
        {platform !== "all" && (
          <button
            onClick={resetFilters}
            className="text-signal hover:underline inline-flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset filters</span>
          </button>
        )}
      </div>

      {/* Grid or Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="p-12 text-center rounded-lg bg-surface border border-border-subtle flex flex-col items-center gap-3">
          <p className="text-sm font-sans text-ink-muted">
            No products match the selected filter.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-md bg-signal text-signal-ink font-mono text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.slug}
              className="rounded-lg bg-surface border border-border-subtle hover:border-border-strong transition-all flex flex-col justify-between p-6 shadow-subtle group"
            >
              <div className="flex flex-col gap-4">
                {/* Header Icon + Platform Badge */}
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
                      {prod.status}
                    </span>
                  </div>
                </div>

                {/* Name & Tagline */}
                <div>
                  <h3 className="text-xl font-sans font-semibold text-ink group-hover:text-signal transition-colors">
                    {prod.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-ink-faint mt-1">
                    <span>{prod.category}</span>
                    <span>·</span>
                    <span>Updated {prod.lastUpdated}</span>
                  </div>
                </div>

                {/* Problem Statement */}
                <p className="text-sm font-sans text-ink-muted leading-relaxed line-clamp-3">
                  {prod.problemStatement}
                </p>

                {/* Highlighted Feature */}
                <div className="p-3 rounded-md bg-inset border border-border-subtle text-xs font-sans text-ink-muted flex flex-col gap-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ink-faint">
                    Core Function
                  </span>
                  <p className="text-xs text-ink font-medium">
                    {prod.keyFeatures[0]?.title}: {prod.keyFeatures[0]?.description}
                  </p>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between gap-3">
                <Link
                  href={prod.internalPath}
                  className="text-xs font-mono text-ink hover:text-signal font-medium py-1.5 transition-colors inline-flex items-center gap-1"
                >
                  <span>Details & Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
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
      )}
    </div>
  );
}
