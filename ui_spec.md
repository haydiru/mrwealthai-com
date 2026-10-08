# UI_SPEC — HM Tech Innovation Design System & Frontend Architecture

> Precedence: this document overrides all framework defaults and component-library defaults.
> Companion: `PRD.md` (business logic, routes, content integrity rules)

---

## 1. Visual Identity & Design Archetype

- **Aesthetic Benchmark:**
  1. **Linear** (linear.app): disciplined grid, restrained color, sharp typography, motion that confirms rather than decorates.
  2. **Stripe Docs / Dashboard:** information-dense clarity, mono-typed data, structural borders over shadows.
- **Design Philosophy:** *"Engineered, plainspoken, accountable."* HM Tech Innovation is a one-founder studio, so the interface must read as small, precise, and honest, not as a pretend enterprise. The emotional tone is a well-kept workshop ledger: everything is labeled, dated, and verifiable. Trust is communicated through specificity (real dates, real links, real policies), never through adjectives or inflated social proof. Dark, matte, and calm, with a single signal accent used sparingly like a status light.

---

## 2. Anti-AI-Slop Blacklist (Zero-Tolerance Rules)

The Coding AI is STRICTLY FORBIDDEN from using the following:

- ❌ **No Cliché Gradients:** BAN generic purple-to-indigo gradients (`from-indigo-500 to-purple-600`), floating mesh backgrounds, aurora blobs, and neon glassmorphism. Backgrounds are flat matte tones. The only permitted gradient is a 1px hairline fade on a divider.
- ❌ **No Juvenile Border Radii:** BAN `rounded-3xl` and `rounded-full` on structural cards, panels, and modals. Allowed: `rounded-sm` (2px) for tags, `rounded-md` (6px) for inputs and buttons, `rounded-lg` (8px) for cards, 12px absolute maximum. `rounded-full` is allowed ONLY for 8px status dots.
- ❌ **No Mushy Shadows:** BAN `shadow-xl`, `shadow-2xl`, and any blur radius above 8px. Use 1px structural borders plus optional crisp offset micro-shadow `0 1px 0 rgba(255,255,255,0.04) inset, 0 1px 2px rgba(0,0,0,0.5)`.
- ❌ **No Centered Empty Voids:** BAN a lone centered hero over vast empty space. Hero content is left-anchored on the 12-column grid and paired with the Live Registry panel. Every interactive container sits on a border, a grid line, or a labeled panel.
- ❌ **No Lazy Loading Spinners:** BAN circular spinning wheels. Loading and processing states use a segmented progress stepper with named stages and mono status labels (see 5.2). Skeletons must match the final layout exactly.
- ❌ **No Stock Startup Filler:** BAN generic 3D illustrations, emoji used as icons, abstract "AI brain" imagery, fake dashboards, fake testimonials, fake metrics, fake partner logos, "Trusted by thousands" claims, and lorem ipsum.
- ❌ **No Template Section Cadence:** BAN the repeating "icon in rounded square + heading + two lines" feature trio. Use ledger rows, definition lists, and bordered evidence blocks instead.
- ❌ **No Default Font Stack Look:** BAN raw system-ui or Inter at default letter-spacing for display headings. Tracking and weights must follow section 4.
- ❌ **No Decorative Motion:** BAN parallax, floating elements, looping background animation, and scroll-jacking. Motion is limited to state confirmation (see 5.5).
- ❌ **No Vague Copy:** BAN "revolutionize", "cutting-edge", "seamless", "unlock", "empower", "next-generation", and "AI-powered" as a headline. Every claim is concrete and traceable to `PRD.md`.

---

## 3. Behavioral Psychology & Cognitive UX Architecture

Adapted for a trust-first corporate site. The "conversion" is: verify, install, or make contact. No dark patterns. Persuasion works through clarity and proof.

- **Goal Gradient Effect:**
  - A slim 2px progress rule under the sticky nav fills as the visitor scrolls the Home and Trust pages, starting at 12% (never 0%).
  - The `/trust` checklist shows `3 of 6 verified items visible` and counts up as sections enter view, so the visitor feels momentum toward "fully reviewed".
  - The contact form shows a 4-segment stepper (`Details → Reason → Message → Send`) that starts with segment 1 already filled at 25%.
- **Reciprocity Engine (Value-First Gating):**
  - There is no gate anywhere. Value comes first: the Live Registry with real links and dates sits above the fold, and the Trust page is public.
  - The downloadable one-page fact sheet PDF is offered with no email capture.
  - Product pages surface the free tier first (AsapRadar free briefing, FlagCheck free daily analysis, FlagCheck free scam warnings) before any paid mention.
- **Loss Aversion Framing:**
  - The site has no paywall. Loss framing is used ethically for user protection on product pages:
    - FlagCheck: *"A transfer you can't undo. A code you can't take back. Check the message before you act."*
    - AsapRadar: *"Know the air before you leave, not after."*
  - Contact copy: *"Verification questions get answered within 2 business days."* (loss of ambiguity, not urgency theatrics).
  - BAN fake countdown timers, fake scarcity, and fake "only X spots" copy.
- **Contrast Effect (Price & Visual Anchoring):**
  - Typography scale contrast: hero display at 56–72px against 13px mono metadata, creating an unmistakable hierarchy.
  - Price anchoring on product pages states real prices honestly: *"AsapRadar Plus: Rp 10,000 per month"* shown beside plain context such as "less than a single day of commute-mask purchases" is NOT used unless founder-verified. Default: show the price alone in mono with no comparative claim.
  - Visual anchoring: the single accent color appears only on the primary action and live-status dots, so the eye always lands on the next step.
- **Smart Defaults:**
  - Contact form `Reason` defaults to `Other`; `Name` and `Email` support browser autofill with correct `autocomplete` attributes.
  - Products filter defaults to `All`, sorted by `Recently updated`.
  - Interactive sample chips below the contact message field insert starter text: `Verification request`, `Partnership inquiry`, `Product support`. Tapping inserts an editable template so no one faces a blank box.
- **IKEA / Endowment Effect:**
  - Before the contact commitment, visitors can tune the Products view with platform toggles (`All / Android / Web`) and sort control, and the choice persists in the URL.
  - Visitors can copy any section link and the email address; these small tactile actions create ownership of the information before they decide to reach out.

---

## 4. Design Tokens & Semantic Variables

### 4.1 Color Palette

```css
:root {
  /* Surfaces */
  --bg-root:        #0A0B0D;  /* matte near-black, slight cool */
  --bg-surface:     #111317;  /* elevated card surface */
  --bg-surface-2:   #171A1F;  /* hover / nested panel */
  --bg-inset:       #0D0F12;  /* inputs, code, registry rows */

  /* Lines */
  --border-subtle:  #23262D;  /* 1px structural line */
  --border-strong:  #343843;  /* hover / focused container */
  --border-dashed:  #2E323B;  /* receipt / fact-sheet dividers */

  /* Accents */
  --accent-primary: #C6F432;  /* "signal lime": primary action and live status only */
  --accent-primary-ink: #0A0B0D; /* text on accent */
  --accent-danger:  #EF4444;  /* errors, destructive */
  --accent-warning: #F59E0B;  /* cautions, disclaimers */
  --accent-intel:   #38BDF8;  /* informational notes, links in body copy */
  --accent-success: #10B981;  /* verified, delivered */

  /* Text */
  --text-primary:   #F4F5F7;  /* contrast on bg-root: 17.6:1 */
  --text-muted:     #9CA3AF;  /* contrast on bg-root: 7.4:1 */
  --text-faint:     #6B7280;  /* decorative metadata only, never body */

  /* Focus */
  --focus-ring:     #C6F432;
}

@media (prefers-color-scheme: light) {
  :root[data-theme="auto"] {
    --bg-root: #F7F7F4; --bg-surface: #FFFFFF; --bg-surface-2: #F0F0EC; --bg-inset: #F2F2EE;
    --border-subtle: #DEDED8; --border-strong: #C4C4BC; --border-dashed: #CFCFC8;
    --accent-primary: #4D6B00; --accent-primary-ink: #FFFFFF;
    --text-primary: #0F1114; --text-muted: #4B5160; --text-faint: #7A8091;
    --focus-ring: #4D6B00;
  }
}
```

**Tailwind v4 mapping (`@theme`):**
```css
@theme {
  --color-root: var(--bg-root);
  --color-surface: var(--bg-surface);
  --color-surface-2: var(--bg-surface-2);
  --color-inset: var(--bg-inset);
  --color-line: var(--border-subtle);
  --color-line-strong: var(--border-strong);
  --color-signal: var(--accent-primary);
  --color-danger: var(--accent-danger);
  --color-warn: var(--accent-warning);
  --color-intel: var(--accent-intel);
  --color-ok: var(--accent-success);
  --color-ink: var(--text-primary);
  --color-mute: var(--text-muted);
  --font-display: "Geist", "Inter Tight", ui-sans-serif, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --radius-sm: 2px; --radius-md: 6px; --radius-lg: 8px;
}
```

Rule: the accent color covers no more than ~5% of any viewport. Use it for: the primary button, live-status dots, the focus ring, and the scroll-progress rule.

### 4.2 Typography Matrix

| Role | Family | Size / Line-height | Weight | Tracking | Notes |
|---|---|---|---|---|---|
| Display H1 | Geist (fallback Inter Tight) | `clamp(40px, 6vw, 72px)` / 1.02 | 600 | `-0.035em` (`tracking-tighter`) | Left-aligned, max 14ch per line group |
| H2 | Geist | `clamp(28px, 3.4vw, 40px)` / 1.1 | 600 | `-0.025em` (`tracking-tight`) | |
| H3 | Geist | 20px / 1.25 | 600 | `-0.015em` | |
| Body | Geist | 17px mobile, 16px desktop / 1.65 (`leading-relaxed`) | 400 | `0` | Min 16px; measure ≤ 68ch |
| Small / Caption | Geist | 14px / 1.5 | 400 | `0` | Never below 14px for prose |
| Data / Mono | JetBrains Mono | 13px / 1.5 | 400–500 | `0.01em` | All dates, IDs, reference codes, prices, registry rows, metrics, emails |
| Mono Label (caps) | JetBrains Mono | 11px / 1.4 | 500 | `0.08em`, uppercase | Section eyebrows, tags, table headers |

- Use `font-variant-numeric: tabular-nums` on all mono data.
- Fonts are self-hosted via `next/font` with `display: swap`, subset to Latin, preloaded for display and mono 400.

### 4.3 Borders & Elevation

| Token | Value | Use |
|---|---|---|
| `--bw-1` | `1px solid var(--border-subtle)` | Default card, panel, input |
| `--bw-focus` | `1px solid var(--border-strong)` + `outline: 2px solid var(--focus-ring)`, `outline-offset: 2px` | Focus, hover |
| `--bw-dashed` | `1px dashed var(--border-dashed)` | Receipts, fact sheets, "evidence" blocks |
| `--elev-0` | none | Page background |
| `--elev-1` | `border + 0 1px 0 rgba(255,255,255,0.04) inset` | Cards, panels |
| `--elev-2` | `border-strong + 0 1px 2px rgba(0,0,0,0.5)` | Menus, toasts, popovers |
| Modal | `--elev-2` + backdrop `rgba(0,0,0,0.72)`, **no blur** | Sheets, dialogs |

Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Grid: 12 columns, 24px gutters, container max-width 1200px, page padding 20px mobile / 32px desktop.

---

## 5. Core Component Anatomy & Micro-Interactions

### 5.1 Input / Upload Zone → Contact Form Panel
(There is no file upload on this site, so the "input zone" is the contact form.)
- **Container:** `bg-surface`, `--bw-1`, 8px radius, 24px padding, anchored to the right 6 columns on desktop and full width on mobile, never floating in empty space.
- **Empty state:** Mono label above each field (`NAME`, `EMAIL`, `REASON`, `MESSAGE`), inset field background, helper text in muted 14px, live character counter `0 / 2000` in mono.
- **Focus state:** border to `--border-strong`, 2px accent outline offset 2px.
- **Active/dragging analog (sample chips):** Chips below the message box (`Verification request`, `Partnership inquiry`, `Product support`); on tap the chip gets a 1px accent border for 150ms and the template text appears in the textarea with the placeholder portion selected for replacement.
- **Validation:** Inline on blur; error text in `--accent-danger` beside a mono code (`E_EMAIL_FORMAT`); never a modal for errors.

### 5.2 Processing / Loading State
- **Segmented stepper (4 segments, 2px tall bars with 4px gaps):** `VALIDATING → CHECKING → SENDING → DELIVERED`. The first segment starts filled at ~30% on submit to leverage goal-gradient.
- **Animated status labels:** Mono 12px label under the bar swaps with a 120ms vertical fade: `Validating fields…` → `Confirming you are human…` → `Sending to official inbox…` → `Delivered`.
- **Timing:** Each segment fills linearly when its real stage completes. If the server responds faster than 400ms, the stepper still shows each stage for a minimum of 150ms so the user perceives the work. No fake delays beyond that.
- **Page-level loading:** Skeleton blocks that mirror the final layout (nav, registry rows, card grid) with a subtle 1.4s opacity pulse (0.55 → 0.8). No spinners.

### 5.3 Primary Result Card / Dashboard Widget → Live Registry Panel & Product Card
- **Live Registry panel (Home hero, right side):**
  - Container: `--bw-1`, 8px radius, `bg-surface`; header row with mono label `LIVE REGISTRY` and a status dot (8px, accent, 1.6s slow-pulse, disabled under reduced motion).
  - Rows (48px tall, `border-top: 1px solid var(--border-subtle)`): `PRODUCT` (display 15px 500) · `PLATFORM` (mono tag, 2px radius) · `STATUS` (dot + `LIVE`) · `UPDATED` (mono date, right-aligned, tabular).
  - Row hover: `bg-surface-2`, arrow glyph `↗` slides 2px. Entire row is a link.
- **Product Card:**
  - Layout: top row icon (48px, 8px radius) + name; one-line problem statement (muted, 2 lines max); mono metadata row `ANDROID · MAPS & NAVIGATION · UPDATED 2026-10-01`; button row at the bottom.
  - Badges: `ANDROID` / `WEB` tags use 2px radius, mono caps 11px, 1px border, no fill. `LIVE` tag uses `--accent-success` text and border.
  - Hierarchy: product name > problem statement > metadata > actions. Maximum one accent-filled button per card (the store link).

### 5.4 Trust / Evidence Block (replaces Paywall / Conversion Modal for this project)
- **Evidence receipt anatomy:** A bordered block with `--bw-dashed`, mono header `VERIFICATION RECEIPT · HM TECH INNOVATION`, then rows of `LABEL ........ VALUE` (leader dots via CSS), for example `FOUNDER ........ Haidir Magribi`, `LOCATION ........ Samarinda, ID`, `PRODUCTS LIVE ........ 3`, `CONTACT ........ official email`. Each value is a link or a copy action where applicable.
- **Primary CTA (loss-aware but honest):** Button copy on `/trust`: `Verify on Google Play` (accent fill, ink text, 6px radius, 44px min height). Secondary: `Download fact sheet (PDF)`.
- **Understated exit link:** Below the receipt, a muted underlined text link: `Still unsure? Ask us directly`, pointing to `/contact`.
- **Disclaimers (AsapRadar / FlagCheck):** `--accent-warning` left border 2px, `bg-inset`, 14px text, never collapsed by default.
- **Contrast pricing line (product pages):** Price in mono 20px, e.g., `Rp 10,000 / month`, beside muted plain-language scope (`up to 5 routes · cancel any time`). No fabricated comparisons.

### 5.5 Feedback & Toast States
- **Toast container:** Bottom-left on desktop, bottom-full-width on mobile above safe area; `bg-surface`, `--elev-2`, 6px radius, 3px left accent bar (success `--accent-success`, error `--accent-danger`, info `--accent-intel`).
- **Micro-animations:** Enter: 160ms `translateY(8px) → 0` plus opacity. Exit: 120ms opacity. Copy-to-clipboard success swaps the icon to a check for 1200ms with a 1px accent underline draw (180ms).
- **Haptic feedback indicators:** On supporting mobile browsers call `navigator.vibrate(10)` for copy-success and form-delivered, `navigator.vibrate([20, 40, 20])` for errors. Always feature-detect and honor reduced motion and user settings.
- **Error boundaries:** A route-level error boundary renders a left-anchored panel: mono code (`ERR_RENDER`), plain one-sentence explanation, `Try again` button, and a `Copy details` button copying a non-sensitive error digest. No stack traces in production.
- **Rate-limited state:** Inline panel with mono countdown (`Retry in 00:42`) and a `Email us directly` link.
- **Reduced motion:** Under `prefers-reduced-motion: reduce`, all transforms and pulses are disabled; only opacity and instant state changes remain.

### 5.6 Navigation & Footer
- **Nav:** 56px, `bg-root` at 92% opacity with **no backdrop blur**, 1px bottom border, scroll-progress rule (2px, accent) anchored to the bottom edge.
- **Mobile menu:** Full-height sheet with large 28px links, close button top-right, focus trapped, `Esc` closes.
- **Footer:** 4 columns on desktop (Company, Products, Legal, Contact), mono small print, no social icon rows beyond real, active profiles.

### 5.7 Accessibility Requirements (non-negotiable)
- All interactive targets ≥ 44×44px.
- Visible focus on every focusable element; logical tab order; skip-to-content link.
- Color is never the only status carrier (always paired with text or icon).
- Images carry meaningful `alt`; decorative images use empty `alt`.
- Forms use real `<label>`, `aria-describedby` for errors, and `aria-live="polite"` for the stepper and toasts.
- Pass axe-core with zero serious or critical violations before any phase sign-off.