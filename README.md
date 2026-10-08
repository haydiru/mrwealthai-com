# mrwealthai.com — PT HM Tech Innovation

The official corporate web home, product registry, and trust verification portal for **[mrwealthai.com](https://mrwealthai.com)**, operated by registered parent company **PT HM Tech Innovation** (Samarinda, East Kalimantan, Indonesia).

---

## 🏛️ Company Identity & Legal Transparency

- **Brand & Domain**: [mrwealthai.com](https://mrwealthai.com)
- **Registered Parent Entity**: PT HM Tech Innovation (Perseroan Terbatas terdaftar di Republik Indonesia)
- **Founder & Lead Engineer**: Haidir Magribi
- **Headquarters**: Samarinda, Kalimantan Timur, Indonesia
- **Official Contact**: [official@mrwealthai.com](mailto:official@mrwealthai.com)
- **Public Developer Profile**: [Google Play Developer Account](https://play.google.com/store/apps/developer?id=Haidir+Magribi)

> **Transparency Note**: This website is branded under **mrwealthai.com**, which acts as the umbrella digital brand and domain. All software operations, developer publishing, and corporate accountability are held legally by **PT HM Tech Innovation**.

---

## 🚀 Live Product Portfolio

| Product | Platform | What it does | Public Link |
|---|---|---|---|
| **AsapRadar** | Android (Google Play) | Haze, ISPU air quality, and fire-hotspot radar projected onto commute routes. Zero ads, zero trackers. | [Google Play](https://play.google.com/store/apps/details?id=id.asapradar.app) |
| **FlagCheck** | Android (Google Play) | AI chat screenshot analyzer: detects subtext, red flags, texting balance, reply drafts, and scam warnings. Zero image retention. | [Google Play](https://play.google.com/store/apps/details?id=app.flagcheck.mobile) |
| **AO Mart** | Web Storefront | Organic & gluten-free food storefront based in Samarinda Kota. No mandatory account required to browse or order. | [agenorganik.com](https://agenorganik.com/) |

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 16 (Turbopack, App Router)
- **UI & Styling**: Tailwind CSS, PostCSS, Lucide React icons
- **Language**: TypeScript (Strict mode enabled)
- **Validation**: Zod schema validation
- **SEO & Structured Data**: JSON-LD (`Organization`, `SoftwareApplication`, `WebSite`), Dynamic Sitemap (`/sitemap.xml`), Robots (`/robots.txt`)
- **Key Routes**:
  - `/` — Homepage: Hero, Live Registry Table, Product Strip, 4 Principles, Trust Band, Direct CTA
  - `/products` — Filterable products directory (All / Android / Web) with real-time count & sorting
  - `/products/asapradar` — AsapRadar technical detail, data source citations, and Play Store link
  - `/products/flagcheck` — FlagCheck detail, privacy assurances, and scam warning specs
  - `/products/ao-mart` — AO Mart store overview and WhatsApp coordination flow
  - `/about` — Founder background, 4 core development principles, roadmap, and company registration
  - `/trust` — Auditable Trust & Verification Center, evidence ledger with links, and printable fact sheet
  - `/contact` — Interactive contact stepper with reference ID generation (`MRW-2026-XXXXXX`)
  - `/legal/privacy` & `/legal/terms` — Plain-language legal transparency and jurisdiction policies
  - `/api/contact` & `/api/health` — Form submission handler & health monitoring endpoint

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/haydiru/mrwealthai-com.git
cd mrwealthai-com

# Install dependencies
npm install

# Start development server
npm run dev

# Run type check / linting
npm run lint

# Build for production
npm run build
```

---

## 🌐 Deploy to Vercel with Domain `mrwealthai.com`

1. Push this repository to GitHub: `https://github.com/haydiru/mrwealthai-com`
2. Open your [Vercel Dashboard](https://vercel.com/) and click **"Add New Project"**.
3. Import the `mrwealthai-com` repository.
4. Leave framework preset as **Next.js** and click **Deploy**.
5. Once deployed, navigate to **Project Settings > Domains**.
6. Add `mrwealthai.com` (and `www.mrwealthai.com` with redirect).
7. Configure the DNS records at your domain registrar as provided by Vercel:
   - Type: `A` / Name: `@` / Value: `76.76.21.21`
   - Type: `CNAME` / Name: `www` / Value: `cname.vercel-dns.com`

---

## 📄 License & Ownership

Copyright © 2026 **PT HM Tech Innovation** / **mrwealthai.com**. All rights reserved.
