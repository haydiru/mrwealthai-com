export interface CompanyInfo {
  brandName: string;
  domain: string;
  officialEmail: string;
  playStoreEmailNote: string;
  legalEntityName: string;
  legalJurisdiction: string;
  registrationStatus: string;
  founder: {
    name: string;
    role: string;
    location: string;
    city: string;
    province: string;
    country: string;
  };
  headline: string;
  valueProposition: string;
  narrative: string;
  principles: Array<{
    title: string;
    tagline: string;
    description: string;
    evidence: string;
  }>;
  roadmap: Array<{
    phase: string;
    status: "active" | "planned";
    title: string;
    description: string;
  }>;
  verificationFacts: Array<{
    category: string;
    label: string;
    value: string;
    evidenceType: "url" | "text" | "email";
    evidenceHref?: string;
    verifiedStatus: boolean;
  }>;
}

export const COMPANY: CompanyInfo = {
  brandName: "mrwealthai.com",
  domain: "mrwealthai.com",
  officialEmail: "official@mrwealthai.com",
  playStoreEmailNote: "Public Play Store listings currently list developer contact hmtechinovation@gmail.com. Both route directly to founder Haidir Magribi; official@mrwealthai.com is the primary corporate address.",
  legalEntityName: "PT HM Tech Innovation",
  legalJurisdiction: "Republic of Indonesia",
  registrationStatus: "Registered Indonesian Limited Liability Entity (Perseroan Terbatas / PT)",
  founder: {
    name: "Haidir Magribi",
    role: "Founder & Lead Engineer",
    location: "Samarinda, East Kalimantan, Indonesia",
    city: "Samarinda",
    province: "East Kalimantan",
    country: "Indonesia",
  },
  headline: "Small software for real problems. Live today.",
  valueProposition: "Independent, founder-led software studio operated by PT HM Tech Innovation. Each product solves one concrete, everyday problem—backed by links, dates, and plain data policies instead of adjectives.",
  narrative: "mrwealthai.com is the primary digital home and product umbrella for PT HM Tech Innovation, a registered technology company based in Samarinda, East Kalimantan, Indonesia. Founded and operated by Haidir Magribi, we engineer small, focused micro-SaaS and consumer utilities across Android and Web. No inflated vanity metrics, no hidden data harvesting, and no corporate facades—just reliable software shipped and supported by an accountable founder.",
  principles: [
    {
      title: "One problem per product",
      tagline: "Single-purpose utility over bloated multi-tools",
      description: "Every tool we build attacks a single clear friction point until it is solved completely, cleanly, and fast.",
      evidence: "AsapRadar focuses solely on route-based air quality & haze briefings; FlagCheck solely analyzes chat screenshots for clarity and safety.",
    },
    {
      title: "No account unless essential",
      tagline: "Zero registration barriers for basic utility",
      description: "If an app can do its job without requiring your name, email, or phone number, it will never ask for them.",
      evidence: "AsapRadar briefing and AO Mart browsing/ordering require zero user accounts or logins.",
    },
    {
      title: "Plain, honest data practices",
      tagline: "No surveillance SDKs, no stealth tracking",
      description: "We collect only what is strictly necessary to perform the requested calculation or transaction. Data is deleted proactively.",
      evidence: "FlagCheck burns redactions client-side; screenshots are never stored. AsapRadar includes no third-party ads or analytics tracking SDKs.",
    },
    {
      title: "Independent and accountable",
      tagline: "Real founder, verified registry, real contact",
      description: "You know exactly who wrote the software, where the business is registered, and how to reach the developer directly.",
      evidence: "Registered entity PT HM Tech Innovation in Indonesia, named founder Haidir Magribi, and direct response within 2 business days.",
    },
  ],
  roadmap: [
    {
      phase: "Current Phase",
      status: "active",
      title: "Operate & Enhance Live Portfolio",
      description: "Maintain 99.9% uptime and active updates for AsapRadar (ISPU/fire data sync), FlagCheck (detection updates), and AO Mart storefront operations.",
    },
    {
      phase: "Next Phase",
      status: "planned",
      title: "Targeted Micro-SaaS Expansions",
      description: "Develop and deploy two additional lightweight productivity and data utility tools targeting Southeast Asian mobile and web workflows.",
    },
  ],
  verificationFacts: [
    {
      category: "Legal & Corporate",
      label: "Digital Brand & Domain",
      value: "mrwealthai.com",
      evidenceType: "url",
      evidenceHref: "https://mrwealthai.com",
      verifiedStatus: true,
    },
    {
      category: "Legal & Corporate",
      label: "Registered Parent Entity",
      value: "PT HM Tech Innovation (Indonesia)",
      evidenceType: "text",
      verifiedStatus: true,
    },
    {
      category: "Legal & Corporate",
      label: "Founder & Lead Developer",
      value: "Haidir Magribi",
      evidenceType: "text",
      verifiedStatus: true,
    },
    {
      category: "Legal & Corporate",
      label: "Physical Base / Headquarters",
      value: "Samarinda, East Kalimantan, Indonesia",
      evidenceType: "text",
      verifiedStatus: true,
    },
    {
      category: "Contact & Support",
      label: "Official Corporate Inbox",
      value: "official@mrwealthai.com",
      evidenceType: "email",
      evidenceHref: "mailto:official@mrwealthai.com",
      verifiedStatus: true,
    },
    {
      category: "Contact & Support",
      label: "SLA / Response Time",
      value: "Replies within 2 business days",
      evidenceType: "text",
      verifiedStatus: true,
    },
    {
      category: "Google Play Profile",
      label: "Android Developer Account",
      value: "Haidir Magribi / PT HM Tech Innovation",
      evidenceType: "url",
      evidenceHref: "https://play.google.com/store/apps/developer?id=Haidir+Magribi",
      verifiedStatus: true,
    },
    {
      category: "Live Product Evidence",
      label: "AsapRadar (Google Play)",
      value: "id.asapradar.app · Live (Updated Oct 1, 2026)",
      evidenceType: "url",
      evidenceHref: "https://play.google.com/store/apps/details?id=id.asapradar.app",
      verifiedStatus: true,
    },
    {
      category: "Live Product Evidence",
      label: "FlagCheck (Google Play)",
      value: "app.flagcheck.mobile · Live (Updated Sep 10, 2026)",
      evidenceType: "url",
      evidenceHref: "https://play.google.com/store/apps/details?id=app.flagcheck.mobile",
      verifiedStatus: true,
    },
    {
      category: "Live Product Evidence",
      label: "AO Mart (Web Storefront)",
      value: "agenorganik.com · Live Storefront",
      evidenceType: "url",
      evidenceHref: "https://agenorganik.com/",
      verifiedStatus: true,
    },
  ],
};
