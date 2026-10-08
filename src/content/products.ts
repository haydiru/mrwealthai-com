export interface Product {
  slug: string;
  name: string;
  tagline: string;
  problemStatement: string;
  platform: "android" | "web";
  platformBadge: "ANDROID" | "WEB";
  category: string;
  status: "LIVE" | "BETA";
  lastUpdated: string; // ISO or human format
  lastUpdatedIso: string;
  storeUrl: string;
  storeBadgeText: string;
  internalPath: string;
  privacyPolicyUrl: string;
  iconSrc?: string;
  summary: string;
  freeTier: string;
  pricing: string;
  keyFeatures: Array<{
    title: string;
    description: string;
  }>;
  privacyFacts: string[];
  disclaimer?: string;
  dataSources?: string[];
  sampleStrings?: string[];
  relationshipTypes?: string[];
  replyStyles?: string[];
  scamPatterns?: string[];
  builtFeatures?: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "asapradar",
    name: "AsapRadar",
    tagline: "Haze, ISPU air quality and fire alerts for your commute.",
    problemStatement: "Morning air-quality briefing and haze/hotspot radar projected directly onto your daily travel route.",
    platform: "android",
    platformBadge: "ANDROID",
    category: "Maps & Navigation",
    status: "LIVE",
    lastUpdated: "Oct 1, 2026",
    lastUpdatedIso: "2026-10-01",
    storeUrl: "https://play.google.com/store/apps/details?id=id.asapradar.app",
    storeBadgeText: "Get it on Google Play",
    internalPath: "/products/asapradar",
    privacyPolicyUrl: "https://asapradar.vercel.app/legal/privacy.html",
    summary: "Daily morning air-quality (ISPU) briefing, haze and fire-hotspot radar projected onto the user's commute route, and one-tap rider reports. No account, no ads, and no analytics SDK.",
    freeTier: "Free morning ISPU briefing, basic hotspot radar, and rider hazard reporting.",
    pricing: "AsapRadar Plus at Rp 10,000/month (up to 5 saved routes, fire alerts within 5 km of route). Renews through Google Play. Cancel any time.",
    keyFeatures: [
      {
        title: "Morning Air Briefing",
        description: "Clear, zero-clutter air-quality index calculated at wake-up time, customized for your departure route.",
      },
      {
        title: "Commute Haze & Fire Radar",
        description: "Satellite thermal fire alerts and smoke haze plumes overlaid directly onto your navigation corridor.",
      },
      {
        title: "One-Tap Rider Reports",
        description: "Motorcycle and commuter incident tagging for smoke density, reduced visibility, or localized fires.",
      },
      {
        title: "Zero-Account Architecture",
        description: "Open the app and read the briefing immediately. No login, no password, no profile required.",
      },
    ],
    privacyFacts: [
      "Zero account registration required",
      "Location accessed solely while the app is actively foregrounded",
      "Server only stores general coordinate grid rounded to ~11 km for weather data caching",
      "User-submitted rider reports and incident photos automatically expire and purge after 3 hours",
      "Zero advertising networks integrated",
      "Zero tracking or behavior analytics SDKs bundled",
    ],
    disclaimer: "AsapRadar is an independent utility and is not affiliated with, authorized, or sponsored by Indonesia's Ministry of Environment and Forestry (KLHK), BMKG, BNPB, or any governmental agency. It serves as an estimation tool, not an official emergency dispatch.",
    dataSources: [
      "Indonesian ISPU Station Networks",
      "Badan Meteorologi, Klimatologi, dan Geofisika (BMKG)",
      "NASA FIRMS (MODIS & VIIRS Satellite Thermal Anomalies)",
      "Copernicus Atmosphere Monitoring Service (CAMS)",
      "Open-Meteo Atmospheric Models",
      "OpenAQ Ambient Sensor Network",
      "Badan Nasional Penanggulangan Bencana (BNPB) Alert Feeds",
    ],
    sampleStrings: [
      "ISPU: 42 · Good air quality. Safe for outdoor riding without mask.",
      "ISPU: 87 · Moderate particulate. Sensitive riders may experience irritation.",
      "ISPU: 165 · Unhealthy air quality. N95/respirator strongly advised along East Corridor.",
    ],
  },
  {
    slug: "flagcheck",
    name: "FlagCheck",
    tagline: "Read between the lines of any chat.",
    problemStatement: "AI chat-screenshot analyzer for hidden meaning, red flags, effort balance, and scam pattern warnings.",
    platform: "android",
    platformBadge: "ANDROID",
    category: "Communication",
    status: "LIVE",
    lastUpdated: "Sep 10, 2026",
    lastUpdatedIso: "2026-09-10",
    storeUrl: "https://play.google.com/store/apps/details?id=app.flagcheck.mobile",
    storeBadgeText: "Get it on Google Play",
    internalPath: "/products/flagcheck",
    privacyPolicyUrl: "https://flagcheck-legal.vercel.app/privacy",
    summary: "AI chat-screenshot analyzer that decrypts subtext, flags manipulation patterns, analyzes conversational effort, and generates 3 response drafts in your style. Permanent free scam detection.",
    freeTier: "One free comprehensive chat analysis per day. Scam pattern and fraud detection are permanently free.",
    pricing: "Weekly Pro subscription or 10-Scan Pack (one-time purchase) via Google Play in-app billing.",
    keyFeatures: [
      {
        title: "Subtext & Tone Breakdown",
        description: "Dissects ambiguity, passive aggressiveness, mixed signals, and implicit tone line by line.",
      },
      {
        title: "Effort & Reciprocity Balance",
        description: "Quantifies conversational investment: response latency, word count balance, and emotional engagement.",
      },
      {
        title: "Pattern & Red Flag Alert",
        description: "Highlights gaslighting, guilt-tripping, sudden cold-shouldering, or boundary erosion.",
      },
      {
        title: "Three Response Drafts",
        description: "Generates 3 calibrated counter-replies tailored to your intent: sharp mirror, firm boundary, or clean closure.",
      },
    ],
    privacyFacts: [
      "No account or sign-up needed",
      "Client-side blackout tool burns redactions into image before network transmission",
      "Screenshots are never saved on disk or database—processed strictly in transient memory",
      "Analysis results reside only in local on-device SQLite storage",
      "Full one-tap data wipe available directly in Settings",
    ],
    disclaimer: "FlagCheck is not a lie detector, medical diagnosis, or legal verdict. It provides conversational linguistic analysis and a second perspective to assist user judgment.",
    relationshipTypes: [
      "Crush / Dating",
      "Romantic Partner",
      "Ex-Partner",
      "Close Friend",
      "Workplace / Manager",
      "Stranger / Unknown",
    ],
    replyStyles: [
      "Sharp Mirror: Reflects their tone back with unflinching clarity",
      "Firm Boundary: Establishes a polite, unyielding standard",
      "Clean Closure: Ends the interaction decisively without drama",
    ],
    scamPatterns: [
      "Urgent OTP or verification code requests",
      "Emergency money transfers via 'changed new number'",
      "Pressure tactics combining manufactured urgency with strict secrecy",
      "Unverified third-party payment redirect links",
      "Impersonation of corporate helpdesk or customer support",
    ],
  },
  {
    slug: "ao-mart",
    name: "AO Mart (Agen Organik)",
    tagline: "Healthy food, ordered the simple way.",
    problemStatement: "Online storefront for organic and gluten-free minimarket in Samarinda with WhatsApp order coordination.",
    platform: "web",
    platformBadge: "WEB",
    category: "E-Commerce",
    status: "LIVE",
    lastUpdated: "Sep 2026",
    lastUpdatedIso: "2026-09-01",
    storeUrl: "https://agenorganik.com/",
    storeBadgeText: "Visit Storefront",
    internalPath: "/products/ao-mart",
    privacyPolicyUrl: "https://agenorganik.com/privacy",
    summary: "Web storefront for a brick-and-mortar organic minimarket in Samarinda Kota. Browse organic staples, gluten-free items, and daily goods, then finalize checkout or WhatsApp delivery coordination without registration.",
    freeTier: "Completely open public catalog with direct WhatsApp ordering.",
    pricing: "Product catalog retail pricing (Indonesian Rupiah).",
    keyFeatures: [
      {
        title: "Account-Free Browsing & Cart",
        description: "Full product catalogue and basket management without registering an account.",
      },
      {
        title: "Direct WhatsApp Order Dispatch",
        description: "Orders compile into structured itemized WhatsApp orders for immediate local fulfillment.",
      },
      {
        title: "Local Delivery & Store Pickup",
        description: "Seamless coordination for instant courier delivery across Samarinda or physical in-store pickup.",
      },
      {
        title: "Curated Organic Inventory",
        description: "Strict curation of certified organic grains, gluten-free baking flours, unadulterated honey, and cold-pressed oils.",
      },
    ],
    privacyFacts: [
      "No customer account registration required to browse or build a basket",
      "Delivery details handled directly in secure 1-on-1 WhatsApp communications",
      "Zero cross-site advertising tracking tags on the storefront",
    ],
    builtFeatures: [
      "Category and brand filtration system",
      "Real-time basket management and order tallying",
      "One-click WhatsApp automated order dispatch",
      "Integrated store address, operating hours, and return policy",
    ],
  },
];
