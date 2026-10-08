import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        root: "#0A0B0D",
        surface: "#111317",
        "surface-2": "#171A1F",
        inset: "#0D0F12",
        "border-subtle": "#23262D",
        "border-strong": "#343843",
        "border-dashed": "#2E323B",
        signal: {
          DEFAULT: "#C6F432",
          ink: "#0A0B0D",
        },
        danger: "#EF4444",
        warning: "#F59E0B",
        intel: "#38BDF8",
        success: "#10B981",
        ink: {
          DEFAULT: "#F4F5F7",
          muted: "#9CA3AF",
          faint: "#6B7280",
        },
      },
      borderRadius: {
        sm: "2px",
        md: "6px",
        lg: "8px",
        xl: "12px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 0 rgba(255, 255, 255, 0.04) inset, 0 1px 2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
