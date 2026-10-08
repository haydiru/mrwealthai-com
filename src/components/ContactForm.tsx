"use client";

import React, { useState } from "react";
import { useToast } from "@/components/Toast";
import { CheckCircle2, AlertCircle, Copy, Check, Send, RotateCcw } from "lucide-react";

type FormReason =
  | "Other"
  | "Verification request"
  | "Partnership"
  | "Press"
  | "Product support";

type StepState = "idle" | "validating" | "checking" | "sending" | "delivered" | "error";

export function ContactForm() {
  const { showToast } = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState<FormReason>("Other");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [stepState, setStepState] = useState<StepState>("idle");
  const [stepProgress, setStepProgress] = useState(25); // Starts at 25% for goal gradient
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errorCode, setErrorCode] = useState<string | null>(null);
  const [referenceCode, setReferenceCode] = useState<string | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  // Starter templates
  const starterChips: { label: string; reasonVal: FormReason; text: string }[] = [
    {
      label: "Verification request",
      reasonVal: "Verification request",
      text: "Hello Haidir, our evaluation team is reviewing mrwealthai.com / PT HM Tech Innovation. We would like to confirm details regarding...",
    },
    {
      label: "Partnership inquiry",
      reasonVal: "Partnership",
      text: "Hi Haidir, I represent [Company/Platform] and we would like to discuss a potential partnership regarding your software portfolio...",
    },
    {
      label: "Product support",
      reasonVal: "Product support",
      text: "Hello, I am using one of your apps (AsapRadar / FlagCheck / AO Mart) and have a technical inquiry regarding...",
    },
  ];

  const handleChipClick = (chip: typeof starterChips[0]) => {
    setReason(chip.reasonVal);
    setMessage(chip.text);
    showToast(`Loaded "${chip.label}" template`, "info");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setErrorCode(null);

    // 1. Client Validation
    if (!name.trim() || name.length < 2) {
      setErrorMessage("Please enter your full name (minimum 2 characters).");
      setErrorCode("E_NAME_SHORT");
      return;
    }
    if (!email.trim() || !email.includes("@") || !email.includes(".")) {
      setErrorMessage("Please enter a valid email address format.");
      setErrorCode("E_EMAIL_FORMAT");
      return;
    }
    if (!message.trim() || message.length < 20) {
      setErrorMessage("Message must be at least 20 characters in length.");
      setErrorCode("E_MESSAGE_SHORT");
      return;
    }

    // Step 1: Validating
    setStepState("validating");
    setStepProgress(45);
    await new Promise((r) => setTimeout(r, 250));

    // Step 2: Checking Security
    setStepState("checking");
    setStepProgress(70);
    await new Promise((r) => setTimeout(r, 300));

    // Step 3: Sending
    setStepState("sending");
    setStepProgress(90);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          reason,
          message: message.trim(),
          honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStepState("error");
        setErrorMessage(data.error || "Submission could not be completed.");
        setErrorCode(data.code || "E_TRANSMISSION_FAILED");
        showToast(data.error || "Submission failed", "error");
        return;
      }

      // Step 4: Delivered
      setStepProgress(100);
      setStepState("delivered");
      setReferenceCode(data.referenceCode);
      showToast("Message delivered successfully to founder inbox", "success");
    } catch (err) {
      setStepState("error");
      setErrorMessage("Network connection failure. Please email official@mrwealthai.com directly.");
      setErrorCode("E_NETWORK_OFFLINE");
      showToast("Network failure", "error");
    }
  };

  const handleCopyRef = () => {
    if (referenceCode) {
      navigator.clipboard.writeText(referenceCode);
      setCopiedRef(true);
      showToast(`Reference ${referenceCode} copied`, "success");
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setReason("Other");
    setMessage("");
    setStepState("idle");
    setStepProgress(25);
    setErrorMessage(null);
    setErrorCode(null);
    setReferenceCode(null);
  };

  // SUCCESS DELIVERED VIEW
  if (stepState === "delivered" && referenceCode) {
    return (
      <div className="rounded-lg bg-surface border border-border-strong p-6 sm:p-8 flex flex-col gap-6 shadow-subtle animate-in fade-in duration-200">
        <div className="flex items-center gap-3 text-success">
          <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
          <h3 className="text-lg font-sans font-semibold text-ink">
            Message Delivered to Founder Inbox
          </h3>
        </div>

        <div className="p-4 rounded-md bg-inset border border-border-subtle flex flex-col gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-ink-faint">
            Transmission Reference ID
          </span>
          <div className="flex items-center justify-between">
            <span className="text-base font-mono font-bold text-signal select-all">
              {referenceCode}
            </span>
            <button
              onClick={handleCopyRef}
              className="p-1.5 rounded hover:bg-surface-2 text-ink-muted hover:text-signal transition-colors inline-flex items-center gap-1 text-xs font-mono"
            >
              {copiedRef ? (
                <>
                  <Check className="w-3.5 h-3.5 text-success" />
                  <span className="text-success">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy ID</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="text-xs font-sans text-ink-muted leading-relaxed flex flex-col gap-1.5">
          <p>
            Your inquiry has been dispatched to <strong className="text-ink">official@mrwealthai.com</strong>.
          </p>
          <p>
            Expected turnaround: <span className="text-ink font-mono font-medium">Within 2 business days</span>. Please retain your reference code for follow-ups.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="w-fit px-4 py-2 rounded-md bg-surface-2 border border-border-subtle hover:border-signal text-xs font-mono text-ink hover:text-signal transition-colors inline-flex items-center gap-2"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Send Another Inquiry</span>
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-surface border border-border-subtle p-6 sm:p-8 flex flex-col gap-6 shadow-subtle">
      {/* Stepper indicator */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-ink-faint">
          <span>Stage: {stepState === "idle" ? "READY" : stepState.toUpperCase()}</span>
          <span>{stepProgress}%</span>
        </div>
        <div className="w-full h-1 bg-inset rounded-full overflow-hidden">
          <div
            className="h-full bg-signal transition-all duration-200"
            style={{ width: `${stepProgress}%` }}
          />
        </div>
      </div>

      {/* Error alert if any */}
      {errorMessage && (
        <div className="p-3.5 rounded-md bg-danger/10 border border-danger/40 flex items-start gap-2.5 text-xs">
          <AlertCircle className="w-4 h-4 text-danger flex-shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[10px] text-danger font-semibold uppercase">
              {errorCode || "E_SUBMISSION_ERROR"}
            </span>
            <span className="text-ink font-sans">{errorMessage}</span>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Honeypot hidden input */}
        <input
          type="text"
          name="website_url"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-mono uppercase tracking-wider text-ink-faint">
              Your Name <span className="text-signal">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Rivera"
              disabled={stepState !== "idle" && stepState !== "error"}
              className="bg-inset border border-border-subtle focus:border-signal rounded-md px-3.5 py-2 text-xs font-sans text-ink placeholder:text-ink-faint/60 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-mono uppercase tracking-wider text-ink-faint">
              Work / Business Email <span className="text-signal">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@company.com"
              disabled={stepState !== "idle" && stepState !== "error"}
              className="bg-inset border border-border-subtle focus:border-signal rounded-md px-3.5 py-2 text-xs font-sans text-ink placeholder:text-ink-faint/60 focus:outline-none"
            />
          </div>
        </div>

        {/* Row 2: Reason Select */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-mono uppercase tracking-wider text-ink-faint">
            Reason for Inquiry
          </label>
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value as FormReason)}
            disabled={stepState !== "idle" && stepState !== "error"}
            className="bg-inset border border-border-subtle focus:border-signal rounded-md px-3.5 py-2 text-xs font-sans text-ink focus:outline-none"
          >
            <option value="Other">Other / General Question (Default)</option>
            <option value="Verification request">Verification request (Startup program / Partner)</option>
            <option value="Partnership">Partnership / B2B Collaboration</option>
            <option value="Press">Press & Media Inquiry</option>
            <option value="Product support">Product Support / Technical Question</option>
          </select>
        </div>

        {/* Row 3: Message Textarea */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[11px] font-mono uppercase tracking-wider text-ink-faint">
              Detailed Message <span className="text-signal">*</span>
            </label>
            <span
              className={`text-[10px] font-mono ${
                message.length < 20 || message.length > 2000 ? "text-ink-faint" : "text-signal"
              }`}
            >
              {message.length} / 2000 chars
            </span>
          </div>
          <textarea
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="State your question, verification needs, or proposal clearly..."
            disabled={stepState !== "idle" && stepState !== "error"}
            className="bg-inset border border-border-subtle focus:border-signal rounded-md p-3.5 text-xs font-sans text-ink placeholder:text-ink-faint/60 focus:outline-none resize-y"
          />
        </div>

        {/* Starter Template Chips */}
        <div className="flex flex-col gap-2 pt-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-ink-faint">
            Insert Starter Template:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {starterChips.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleChipClick(chip)}
                className="px-2.5 py-1 rounded bg-inset border border-border-subtle hover:border-signal text-[11px] font-mono text-ink-muted hover:text-signal transition-colors text-left"
              >
                + {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
          <span className="text-[11px] font-mono text-ink-faint hidden sm:inline">
            Zero third-party tracking cookies used.
          </span>

          <button
            type="submit"
            disabled={stepState !== "idle" && stepState !== "error"}
            className="w-full sm:w-auto px-6 py-2.5 rounded-md bg-signal text-signal-ink font-mono text-xs font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {stepState === "idle" || stepState === "error" ? (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Send to Founder Inbox</span>
              </>
            ) : (
              <span>Transmitting...</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
