"use client";

import React, { useState } from "react";
import { Printer, Copy, Check, ExternalLink, ShieldCheck, Download } from "lucide-react";
import { useToast } from "@/components/Toast";

export function TrustActions({ officialEmail }: { officialEmail: string }) {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${label} to clipboard`, "success");
  };

  return (
    <div className="flex flex-wrap items-center gap-3 no-print">
      <button
        onClick={handlePrint}
        className="px-4 py-2 rounded-md bg-signal text-signal-ink font-mono text-xs font-semibold hover:opacity-90 inline-flex items-center gap-2 shadow-sm"
      >
        <Printer className="w-3.5 h-3.5" />
        <span>Print Fact Sheet (PDF)</span>
      </button>

      <button
        onClick={() => handleCopyLink(window.location.href, "Verification Center URL")}
        className="px-3.5 py-2 rounded-md bg-surface border border-border-subtle hover:border-border-strong text-ink font-mono text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
      >
        <Copy className="w-3.5 h-3.5 text-ink-muted" />
        <span>Share Link</span>
      </button>
    </div>
  );
}

export function CopySnippet({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    showToast(`Copied ${label}`, "success");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1 rounded hover:bg-surface-2 text-ink-muted hover:text-signal transition-colors"
      title={`Copy ${label}`}
      aria-label={`Copy ${label}`}
    >
      {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}
