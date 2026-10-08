"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((message: string, type: ToastType = "success") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, message }]);

    // Haptic feedback if supported
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      try {
        if (type === "success") {
          navigator.vibrate(10);
        } else if (type === "error") {
          navigator.vibrate([20, 40, 20]);
        }
      } catch {
        // Ignore haptic errors on restricted frames
      }
    }

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className="fixed bottom-4 left-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"
        aria-live="polite"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 bg-surface border rounded-md shadow-lg transition-all duration-150 ${
              toast.type === "success"
                ? "border-l-4 border-l-success border-border-strong text-ink"
                : toast.type === "error"
                ? "border-l-4 border-l-danger border-border-strong text-ink"
                : "border-l-4 border-l-intel border-border-strong text-ink"
            }`}
          >
            <div className="flex items-center gap-2 text-sm font-sans">
              {toast.type === "success" && (
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
              )}
              {toast.type === "error" && (
                <AlertCircle className="w-4 h-4 text-danger flex-shrink-0" />
              )}
              {toast.type === "info" && (
                <Info className="w-4 h-4 text-intel flex-shrink-0" />
              )}
              <span>{toast.message}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-ink-muted hover:text-ink transition-colors p-1"
              aria-label="Close notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
