import React from "react";
import Link from "next/link";
import { COMPANY } from "@/content/company";
import { PRODUCTS } from "@/content/products";
import { ShieldCheck, Mail, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-border-subtle mt-20 pt-16 pb-12 select-none">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Main 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-border-subtle">
          {/* Col 1: Identity & Legal Transparency */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-signal" />
              <span className="font-mono font-semibold tracking-tight text-ink text-base">
                {COMPANY.brandName}
              </span>
            </div>
            <p className="text-xs font-sans text-ink-muted leading-relaxed">
              Digital product studio and domain operated by{" "}
              <strong className="text-ink font-semibold">{COMPANY.legalEntityName}</strong>,
              an independent software enterprise registered in Indonesia.
            </p>
            <div className="mt-2 flex flex-col gap-1 text-[11px] font-mono text-ink-faint">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-signal" />
                <span>Samarinda, East Kalimantan, Indonesia</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-success" />
                <span>Founder-led: {COMPANY.founder.name}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Live Products */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-ink-faint">
              Live Software Portfolio
            </span>
            <ul className="flex flex-col gap-2 text-xs font-sans">
              {PRODUCTS.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={product.internalPath}
                    className="text-ink-muted hover:text-ink transition-colors flex items-center justify-between group"
                  >
                    <span>{product.name}</span>
                    <span className="text-[10px] font-mono text-ink-faint group-hover:text-signal uppercase">
                      {product.platformBadge}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/products"
                  className="text-signal hover:underline text-xs font-mono inline-flex items-center gap-1"
                >
                  View all live products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Trust & Verification */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-ink-faint">
              Verification & Legal
            </span>
            <ul className="flex flex-col gap-2 text-xs font-sans">
              <li>
                <Link href="/trust" className="text-ink-muted hover:text-ink transition-colors">
                  Trust & Verification Center
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ink-muted hover:text-ink transition-colors">
                  Company & Build Philosophy
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-ink-muted hover:text-ink transition-colors">
                  Privacy Policy & Data Stance
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-ink-muted hover:text-ink transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/developer?id=Haidir+Magribi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-muted hover:text-ink transition-colors inline-flex items-center gap-1"
                >
                  Google Play Profile
                  <ExternalLink className="w-3 h-3 text-ink-faint" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact & Language */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-ink-faint">
              Direct Contact
            </span>
            <p className="text-xs font-sans text-ink-muted">
              Partner verifications, store inquiries, and technical requests:
            </p>
            <a
              href={`mailto:${COMPANY.officialEmail}`}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-inset border border-border-subtle hover:border-border-strong text-xs font-mono text-signal transition-colors w-fit"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{COMPANY.officialEmail}</span>
            </a>
            <span className="text-[11px] font-mono text-ink-faint">
              Replies guaranteed within 2 business days.
            </span>

            {/* Language chip per PRD 3.1 */}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-[10px] font-mono text-ink-faint uppercase">Language:</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-border-strong text-ink font-semibold">
                EN
              </span>
              <span
                className="text-[10px] font-mono px-2 py-0.5 rounded-sm border border-border-subtle text-ink-faint cursor-not-allowed"
                title="Bahasa Indonesia coming soon"
              >
                ID (Soon)
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-faint">
          <div>
            © 2026 {COMPANY.legalEntityName} · Domain: {COMPANY.domain}
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
              All systems operational
            </span>
            <span>·</span>
            <span>No tracking SDKs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
