"use client";

import React, { useState } from "react";
import { Mail, Check, Copy } from "lucide-react";
import { COMPANY } from "@/content/company";
import { useToast } from "@/components/Toast";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(COMPANY.officialEmail);
      setCopied(true);
      showToast(`Copied ${COMPANY.officialEmail} to clipboard`, "success");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast("Unable to copy to clipboard", "error");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-inset border border-border-subtle hover:border-signal text-xs font-mono text-ink hover:text-signal transition-colors"
      title="Copy email to clipboard"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-success" />
          <span className="text-success">Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>Copy email</span>
        </>
      )}
    </button>
  );
}
