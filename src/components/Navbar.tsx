"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ShieldCheck, Mail } from "lucide-react";
import { COMPANY } from "@/content/company";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(12);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 88 + 12;
        setScrollProgress(Math.min(100, Math.max(12, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle escape key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Trust & Verification", href: "/trust" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full h-14 bg-root/95 border-b border-border-subtle select-none">
      <div className="max-w-[1200px] mx-auto h-full px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 group transition-colors"
            aria-label="mrwealthai.com homepage"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-signal animate-status-pulse flex-shrink-0" />
            <span className="font-mono font-semibold tracking-tight text-ink text-base group-hover:text-signal transition-colors">
              {COMPANY.brandName}
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-1.5 pl-2 border-l border-border-subtle text-[11px] font-mono uppercase tracking-wider text-ink-faint">
            <span>PT HM Tech Innovation</span>
            <span className="text-signal/80">·</span>
            <span className="text-success">Verified</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-sans transition-colors py-1 ${
                  isActive
                    ? "text-signal font-medium border-b-2 border-signal"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-signal text-signal-ink hover:opacity-90 transition-opacity"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email the founder</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ink-muted hover:text-ink focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* 2px Goal-gradient scroll progress bar at bottom of nav */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent overflow-hidden">
        <div
          className="h-full bg-signal transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-14 z-50 bg-root border-b border-border-strong flex flex-col justify-between p-6 md:hidden animate-in fade-in duration-150">
          <div className="flex flex-col gap-6">
            <div className="pb-4 border-b border-border-subtle">
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink-faint block mb-1">
                Parent Legal Entity
              </span>
              <p className="text-sm font-mono text-ink">
                PT HM Tech Innovation <span className="text-success text-xs font-normal">(Indonesia)</span>
              </p>
            </div>

            <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xl font-sans font-medium text-ink hover:text-signal transition-colors py-1 flex items-center justify-between"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-ink-faint" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-border-subtle flex flex-col gap-3">
            <div className="text-xs font-mono text-ink-muted">
              Official: <span className="text-ink">{COMPANY.officialEmail}</span>
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-signal text-signal-ink font-mono text-sm font-semibold hover:opacity-90"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Founder Directly</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
