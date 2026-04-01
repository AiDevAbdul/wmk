# WMK Auto Repairing Garage LLC — Website Specification
**Domain:** wmkautorepairing.com  
**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS · Framer Motion  
**Language:** English (primary) + Arabic (RTL toggle)  
**Last Updated:** March 2026

---

## 1. Project Overview

A bold, conversion-driven automotive website for **WMK Auto Repairing Garage LLC**, an advanced-repair specialist in Ras Al Khor Industrial Area 2, Dubai. The site must dominate local SEO for high-intent Dubai search queries while visually communicating elite technical authority — not a generic "oil-change garage" but a sophisticated diagnostics-and-programming workshop trusted with Tesla, BYD, BMW, and Bentley.

### Brand Personality
- **Tone:** Precision engineering meets rugged reliability. Think aerospace instrument panels, not greasy workshop.
- **Differentiators vs. competitors (Top Race Garage, Al Nahdha Auto, CarMate, Al Mutamayiz):**  
  - Only garage in Ras Al Khor offering **ECM/ECU Repair + Hybrid Battery + Online Programming + Gear Programming** under one roof.  
  - Covers **EV brands** (Tesla, BYD) — a gap most local competitors don't address.  
  - Bilingual (EN + AR) — competitors mostly English-only.

---

## 2. Visual Identity & Design System

### Color Palette
```
--primary:        #F5C518   /* WMK Yellow — signals, caution tape, precision */
--primary-dark:   #D4A800
--steel:          #3A3F4B   /* Steel Gray — metal, authority */
--steel-dark:     #1E2128   /* Near-black — hero bg, nav */
--steel-mid:      #4E5566
--steel-light:    #8A919E
--surface:        #F2F3F5   /* Off-white sections */
--white:          #FFFFFF
--accent-red:     #E53935   /* Warnings, ABS, airbag callouts */
--text-primary:   #1E2128
--text-secondary: #5A6170
```

### Typography
- **Display (headings H1–H2):** `Barlow Condensed` (Bold 700, Italic) — industrial, tight, high-impact. Google Fonts CDN.
- **Sub-headings H3–H4:** `Exo 2` (SemiBold 600) — tech/engineering feel.
- **Body:** `IBM Plex Sans` (Regular 400, Medium 500) — clean, professional, readable.
- **Arabic fallback:** `Noto Kufi Arabic` for AR toggle.
- **Monospace accents (badge counters, stats):** `JetBrains Mono`.

### Motion Principles
- **Hero:** Staggered text reveal on load (0.1s delay per word), parallax car silhouette.
- **Service cards:** Tilt-on-hover (react-tilt or CSS `perspective: 800px; rotateX/Y`).
- **Counter stats:** Count-up animation on viewport entry (Intersection Observer).
- **Page transitions:** Framer Motion `AnimatePresence` slide-fade.
- **Scroll-triggered sections:** `whileInView` fade-up with `viewport={{ once: true }}`.
- **Yellow line accent:** Animated underline sweep on section headings.

### Layout Philosophy
- Dark hero (steel-dark bg) → alternating light/dark sections.
- **Grid-breaking elements:** Yellow diagonal stripe divider between sections.
- Asymmetric cards — icon anchored at top-left, text flows right and down.
- Mobile-first: 1-col → 2-col tablet → 3–4 col desktop.
- Max content width: `1280px`, generous padding `px-6 md:px-12 xl:px-20`.

---

## 3. Site Architecture & Pages

```
/                          → Home (Landing)
/services                  → All Services
/services/ecm-repair       → ECM & ECU Repair Dubai (high-priority SEO page)
/services/hybrid-battery   → Hybrid Battery Repair & Replacement
/services/car-programming  → Car Programming Dubai (ECU/Gear/Online)
/services/ac-repair        → Car AC Repair Dubai
/services/abs-airbag       → ABS & Airbag Repair Dubai
/services/general-repair   → General Mechanical Repair
/brands                    → Cars We Service (brand pages)
/brands/[slug]             → e.g. /brands/tesla, /brands/bmw
/about                     → About WMK
/contact                   → Contact & Directions
/ar                        → Arabic language root (mirrored RTL)
```

---

## 4. Page-by-Page Specifications

---

### 4.1 HOME PAGE (`/`)

#### Hero Section
- **Full-viewport (100vh) dark hero.**
- Background: CSS noise texture + subtle radial gradient in yellow at bottom-right.
- Large background image/video overlay (a car engine bay or workshop) at ~15% opacity.
- **H1:** `"Dubai's Advanced Auto Repair & Programming Specialists"` — Barlow Condensed, 72–96px, white, uppercase.
- **Sub-headline:** `"ECM Repair · Hybrid Battery · ABS · Gear Programming · AC"` — yellow pill chips.
- **CTA Buttons (2):**
  - Primary: `Call Now — +971 55 476 2284` (yellow bg, dark text, phone icon).
  - Secondary: `WhatsApp Us` (outline, WhatsApp green icon).
- **Trust badges row (below CTA):** ✓ Ras Al Khor · ✓ All Major Brands · ✓ Tesla & BYD Specialists · ✓ Online Programming.
- **Floating location card** (bottom-left): Map pin icon + "Ras Al Khor Industrial Area 2, Dubai" — links to Google Maps.

#### Stats Strip (Yellow BG)
Animated count-up numbers on scroll:
- `16+` Supported Brands
- `11` Core Services
- `10+` Years Expertise
- `100%` Diagnostic Accuracy

#### Services Section
- **Title:** `"What We Fix"` — large, bold.
- **3-column card grid** (2 on tablet, 1 on mobile).
- Each card: dark steel bg, yellow icon top-left, service name, 1-line description, arrow CTA.
- 11 service cards total (see §6 for service list).
- "View All Services" button at bottom.

#### Specialization Highlight (Dark Section)
Full-width dark panel, two-column:
- **Left:** Large yellow H2 `"Advanced ECM & Programming Specialists"` + 3 bullet points + CTA.
- **Right:** Stylized "circuit board" SVG animation or tech diagram (CSS-animated dashes).
- This section targets the high-value ECM/programming queries where competitors are weaker locally.

#### Brands We Service
- **Title:** `"Trusted With Every Make"`.
- Logo carousel (auto-scroll, pause on hover) — 16 brand logos in yellow/grey monochrome.
- Brands: Tesla, BYD, BMW, Bentley, RAM, Ford, Jetour, Nissan, Toyota, Honda, Mazda, Audi, Infiniti, Mitsubishi, Kia, Hyundai.
- Use SVG logos with CSS filter to match brand palette.

#### Why Choose WMK
- 4-box grid: `Expert Technicians` | `Modern Diagnostics` | `All Brands & EVs` | `Transparent Pricing`.
- Each box: icon (Lucide), heading, 2-sentence description.

#### Testimonials Section
- 3 Google-style review cards (name, star rating, text snippet, Google icon).
- Steel bg with yellow star accents.
- Real social proof language: reliability, fair pricing, specialist knowledge.

#### Contact CTA Banner
- Full-width yellow background.
- `"Ready to Book? Call or WhatsApp Now"` + large phone number + WhatsApp button.
- Also include address line in smaller text.

#### Footer
- 4-column footer: Logo + about blurb | Services links | Brands links | Contact.
- Schema-ready address block (see §7).
- Copyright + "RTA Licensed — Dubai UAE".
- Language toggle: EN | عربي.

---

### 4.2 SERVICES PAGE (`/services`)
- Hero with `"Our Services"` heading, breadcrumb.
- Full grid of all 11 service cards, expanded with longer descriptions.
- Each card links to its own service detail page (high-priority SEO pages).

---

### 4.3 SERVICE DETAIL PAGES (e.g., `/services/ecm-repair`)

**Template structure for each:**
1. **Hero:** Service name in H1 (SEO-optimized), location, CTA phone button.
2. **What Is This Service?** — 300–400 word section with keyword-rich content.
3. **Signs You Need This Service** — 5-item list.
4. **Our Process** — 4-step numbered flow (Diagnose → Quote → Repair → Test).
5. **Brands We Cover for This Service** — relevant logo subset.
6. **FAQ Accordion** — 4–6 questions (for Featured Snippet targeting).
7. **Contact CTA** — phone + WhatsApp + address.
8. **Structured Data:** `Service` schema + `LocalBusiness` breadcrumb.

**Priority SEO pages to build first:**
| Page | Primary Target Keyword |
|------|------------------------|
| `/services/ecm-repair` | "ECM repair Dubai" / "ECU repair Ras Al Khor" |
| `/services/hybrid-battery` | "hybrid battery repair Dubai" / "Tesla battery Dubai" |
| `/services/car-programming` | "car programming Dubai" / "gear programming Dubai" |
| `/services/ac-repair` | "car AC repair Ras Al Khor Dubai" |
| `/services/abs-airbag` | "ABS repair Dubai" / "airbag repair Dubai" |

---

### 4.4 BRANDS PAGE (`/brands`)
- Introduction: "We service 16+ major brands, including EVs and hybrids."
- Brand grid with logo, model examples, link to brand sub-page.

### Brand Sub-pages (`/brands/[slug]`)
- Targeted at "Tesla repair Dubai", "BYD repair Dubai", "BMW ECU Dubai" etc.
- Brand logo, specific services available for that brand, relevant certifications.
- These are important for long-tail SEO like "Tesla ECM programming Dubai" or "BYD hybrid battery replacement UAE".

---

### 4.5 ABOUT PAGE (`/about`)
- Company story: Founded, licensed in Dubai, Ras Al Khor Industrial Area 2.
- Team section (placeholder for staff photos + names/titles).
- Certifications and trade license mention.
- Workshop tour section (photo gallery grid).
- Mission statement in Arabic + English side-by-side.

---

### 4.6 CONTACT PAGE (`/contact`)
- Google Maps embed (Ras Al Khor Industrial Area 2, Street 18).
- Contact form: Name, Phone, Car Brand, Service Needed, Message.
- Click-to-call button: `+971 55 476 2284`.
- WhatsApp floating button (fixed, bottom-right on all pages).
- Working hours table.
- Full address in both English and Arabic.

---

## 5. Navigation

```
Desktop Nav (sticky, dark steel bg):
[Logo] | Services ▾ | Brands ▾ | About | Contact | [📞 Call Now — yellow button] | [عربي]

Mobile Nav (hamburger):
Full-screen overlay, dark, yellow accents, links stacked
```

**Mega-menu on "Services":**
- 2-column dropdown listing all 11 services with icons.

**Dropdown on "Brands":**
- Logo grid of 16 brands in compact popup.

---

## 6. Complete Service List

| # | Service Name (EN) | Service Name (AR) | Slug |
|---|---|---|---|
| 1 | ECM / ECU Repair & Programming | إصلاح وبرمجة وحدة التحكم بالمحرك | `ecm-repair` |
| 2 | Hybrid Battery Repair & Replacement | إصلاح وتبديل بطارية الهجين | `hybrid-battery` |
| 3 | Car Programming (Gear, Online, ABS) | برمجة السيارات | `car-programming` |
| 4 | Airbag & ABS Repair | إصلاح الوسائد الهوائية وABS | `abs-airbag` |
| 5 | Car AC Repair | إصلاح مكيفات هواء السيارات | `ac-repair` |
| 6 | General Mechanical Repair | إصلاح ميكانيكي للمركبات | `general-repair` |
| 7 | Electrical Repair | إصلاح كهرباء السيارات | `electrical-repair` |
| 8 | Denting, Painting & Body Work | ترميم ودهان هياكل المركبات | `body-painting` |
| 9 | Tyre Fitting & Repair | تبديل وإصلاح الطارات | `tyres` |
| 10 | Oil Change | تبديل زيوت المركبات | `oil-change` |
| 11 | Radiator, Exhaust & Coolant | إصلاح مبردات وعوادم السيارات | `radiator-exhaust` |
| 12 | Car Polish & Seat Cleaning | تلميع وتنظيف مقاعد السيارات | `detailing` |

---

## 7. SEO Strategy

### Local SEO Fundamentals

#### On-Page
- **Title Tag Pattern:** `[Service] in Ras Al Khor, Dubai | WMK Auto Repairing Garage`
- **Meta Description Pattern:** `Expert [service] near Ras Al Khor Industrial Area Dubai. WMK Auto Repairing Garage — call +971 55 476 2284 for fast, affordable repair.`
- **H1** must contain primary keyword + "Dubai" or "Ras Al Khor".
- **NAP Consistency (Name, Address, Phone)** — identical on every page footer and contact page:
  ```
  WMK Auto Repairing Garage LLC
  18 Street, Ras Al Khor Industrial Area 2
  Dubai, United Arab Emirates
  +971 55 476 2284
  ```

#### Target Keywords (researched from competitor analysis)

| Priority | Keyword | Monthly Intent |
|---|---|---|
| 🔴 High | ECM repair Dubai | Transactional |
| 🔴 High | ECU repair Ras Al Khor | Transactional |
| 🔴 High | car programming Dubai | Transactional |
| 🔴 High | hybrid battery repair Dubai | Transactional |
| 🔴 High | ABS repair Dubai | Transactional |
| 🔴 High | airbag repair Dubai | Transactional |
| 🟡 Medium | gear programming Dubai | Transactional |
| 🟡 Medium | car AC repair Ras Al Khor | Transactional |
| 🟡 Medium | online car programming UAE | Transactional |
| 🟡 Medium | Tesla repair Dubai | Transactional |
| 🟡 Medium | BYD repair Dubai | Transactional |
| 🟡 Medium | auto garage Ras Al Khor | Navigational |
| 🟡 Medium | car workshop near me Dubai | Local |
| 🟢 Long-tail | ECM repair Ras Al Khor Industrial Area | High conversion |
| 🟢 Long-tail | hybrid battery replacement Tesla Dubai | High conversion |
| 🟢 Long-tail | BMW ECU programming Dubai | High conversion |
| 🟢 Long-tail | car electrical repair Ras Al Khor | High conversion |
| 🟢 Long-tail | gear box programming Dubai | High conversion |

#### Competitor Gaps to Exploit
- **Al Nahdha Auto / Brights Auto** — focus only on Toyota/Lexus hybrid. WMK covers all brands including Tesla, BYD. Target: "Tesla hybrid battery Dubai", "BYD battery repair UAE".
- **Top Race Garage** — good reputation but no ECM/programming pages at all. Target all programming keywords.
- **CarMate** — mechanical only, no ECU/programming. Great gap.
- **Al Mutamayiz** — general repair, no specialty pages. ECM page will outrank easily.

---

### Structured Data (JSON-LD)

#### LocalBusiness Schema (site-wide in `<head>`)
```json
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "WMK Auto Repairing Garage LLC",
  "image": "https://wmkautorepairing.com/og-image.jpg",
  "url": "https://wmkautorepairing.com",
  "telephone": "+971554762284",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "18 Street, Ras Al Khor Industrial Area 2",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.1972,
    "longitude": 55.3586
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Saturday","Sunday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  ],
  "priceRange": "$$",
  "hasMap": "https://maps.google.com/?q=WMK+Auto+Repairing+Garage+Ras+Al+Khor+Dubai",
  "sameAs": [
    "https://wa.me/971554762284"
  ],
  "areaServed": [
    "Ras Al Khor", "Dubai", "Dubai International City",
    "Dubai Silicon Oasis", "Mirdif", "Al Khawaneej", "Al Warqa"
  ],
  "knowsAbout": [
    "ECM Repair", "ECU Programming", "Hybrid Battery Repair",
    "ABS Repair", "Airbag Repair", "Gear Programming", "Car AC Repair"
  ]
}
```

#### Service Schema (per service page)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ECM Repair Dubai",
  "serviceType": "Engine Control Module Repair",
  "provider": { "@type": "AutoRepair", "name": "WMK Auto Repairing Garage LLC" },
  "areaServed": { "@type": "City", "name": "Dubai" },
  "description": "Professional ECM and ECU repair services in Dubai..."
}
```

#### FAQ Schema (on each service page)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does ECM repair cost in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ECM repair in Dubai typically ranges from AED 500–2,500 depending on the make and damage. WMK provides a free diagnostic check before quoting."
      }
    }
  ]
}
```

---

### Technical SEO Checklist
- [ ] `sitemap.xml` auto-generated by Next.js 16 `generateSitemap()`.
- [ ] `robots.txt` allowing all pages.
- [ ] `next/image` with `priority` on hero image, `loading="lazy"` elsewhere.
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms.
- [ ] Open Graph tags on all pages (og:title, og:description, og:image, og:locale: ar_AE + en_AE).
- [ ] Canonical URLs on all pages.
- [ ] `hreflang` tags: `<link rel="alternate" hreflang="ar" href="/ar/..." />`.
- [ ] Image alt text must include location + service keywords.
- [ ] Page load target: < 3s on 4G mobile.
- [ ] WhatsApp click link: `https://wa.me/971554762284?text=Hello%2C%20I%20need%20a%20car%20repair%20quote`.

---

## 8. Component Library

### Reusable Components

| Component | Description |
|---|---|
| `<ServiceCard />` | Dark card, yellow icon, title, description, link arrow |
| `<BrandLogo />` | Grayscale brand logo that highlights to yellow on hover |
| `<StatCounter />` | Animated count-up number + label |
| `<FAQAccordion />` | Animated expand/collapse, Schema-ready |
| `<ContactCTA />` | Yellow banner with phone + WhatsApp button |
| `<WhatsAppFloat />` | Fixed bottom-right WhatsApp bubble (all pages) |
| `<Breadcrumb />` | Schema-marked breadcrumb for inner pages |
| `<ServiceHero />` | Reusable hero for service detail pages |
| `<ReviewCard />` | Star rating + reviewer name + quote |
| `<ProcessStep />` | Numbered step card for "Our Process" |
| `<LanguageToggle />` | EN ↔ AR toggle with RTL layout flip |

---

## 9. Next.js 16 Technical Implementation

### Project Structure
```
/app
  /layout.tsx              ← Root layout, global nav, footer, schema
  /page.tsx                ← Homepage
  /services
    /page.tsx              ← Services overview
    /[slug]/page.tsx       ← Dynamic service detail
  /brands
    /page.tsx              ← Brands grid
    /[brand]/page.tsx      ← Brand-specific page
  /about/page.tsx
  /contact/page.tsx
  /ar/...                  ← Arabic mirror (or i18n routing)
/components
  /ui/                     ← Base UI components
  /sections/               ← Page sections (Hero, Services, Brands...)
/lib
  /services.ts             ← Service data array
  /brands.ts               ← Brand data + logo paths
  /schema.ts               ← JSON-LD generators
/public
  /logos/                  ← Brand SVG logos
  /images/                 ← Workshop photos
/styles
  /globals.css             ← CSS variables, base styles
```

### Key Next.js 16 Features to Use
- **App Router** with Server Components for SEO-critical pages.
- **Metadata API** (`generateMetadata()`) for per-page SEO metadata.
- **`generateStaticParams()`** for `/services/[slug]` and `/brands/[brand]` static generation.
- **`next/image`** for all photos with proper `sizes` attribute.
- **`next/font`** for Google Fonts (Barlow Condensed, Exo 2, IBM Plex Sans).
- **Route Groups** for Arabic locale `(ar)` without affecting URL structure.
- **Partial Prerendering** for hero (static shell + dynamic personalization).

### Dependencies
```json
{
  "next": "^16.0.0",
  "react": "^19.0.0",
  "typescript": "^5.4",
  "tailwindcss": "^3.4",
  "framer-motion": "^11.0",
  "@tailwindcss/typography": "^0.5",
  "lucide-react": "^0.383",
  "next-intl": "^3.0",
  "react-intersection-observer": "^9.0"
}
```

---

## 10. Arabic (RTL) Support

- Use `next-intl` or `next/navigation` locale routing.
- Root `<html lang="ar" dir="rtl">` when on Arabic pages.
- Tailwind RTL utilities: `rtl:text-right`, `rtl:flex-row-reverse`.
- All navigation labels, service names, CTA text available in AR.
- Arabic content sourced from the provided AR service names (see §6).
- Yellow-on-dark color scheme works equally well in RTL layouts.

---

## 11. Performance & Accessibility

- **WCAG 2.1 AA** compliance minimum.
- Yellow (#F5C518) on dark (#1E2128): contrast ratio ~9.7:1 ✓
- All interactive elements have `:focus-visible` outlines.
- `aria-label` on icon-only buttons (WhatsApp float, phone link).
- `alt` text on all images, including logos.
- Skip-to-content link for keyboard navigation.
- `prefers-reduced-motion` media query disables animations for accessibility.

---

## 12. Conversion Optimization

- **Phone number** displayed in header (sticky), hero, every service page, footer.
- **WhatsApp floating button** on every page — the #1 conversion driver in Dubai market.
- **Click-to-call** on mobile (tel: link).
- **No-friction CTAs** — "Call Now" takes to dialer, no form required for initial contact.
- Contact form as secondary option (Name, Car Brand, Service, Message).
- **Trust signals everywhere:** brand logos, service count, "RTA Licensed", years of experience.
- **Urgency language:** "Same-Day Diagnostics," "Fast Turnaround."

---

## 13. Content Guidelines

### Tone
- Professional but direct. No jargon walls.
- Use "your car" not "the vehicle" — personal, not bureaucratic.
- Mention Dubai + Ras Al Khor naturally in every page's first paragraph.

### Section Descriptions Per Service Page (~400 words each)
Each service detail page must include:
1. What the service is and why it matters.
2. Symptoms / warning signs.
3. How WMK approaches it (process).
4. Why choose WMK vs. going to a dealership.
5. FAQ (minimum 4 questions, targeting featured snippets).
6. Call to action with phone + address.

### Example FAQ Targets (for Google "People Also Ask" boxes)
- "How much does ECM repair cost in Dubai?"
- "How long does hybrid battery replacement take?"
- "Can I drive with an ABS fault light on?"
- "Is gear programming covered by warranty in UAE?"
- "Where can I get online car programming in Dubai?"

---

## 14. Google Business Profile Integration

Recommend creating/optimizing a Google Business Profile:
- Category: "Auto Repair Shop" + secondary "Car Service Station"
- Add all 12 services in GBP Services section.
- Post weekly updates (offers, tips) using Google Posts.
- Request reviews citing specific services and location.
- NAP must exactly match website footer.

---

## 15. Launch Checklist

- [ ] All 12 service pages live with unique 400+ word content.
- [ ] 16 brand logo assets in `/public/logos/` (SVG, optimized).
- [ ] LocalBusiness JSON-LD on every page via root layout.
- [ ] Service JSON-LD on each `/services/[slug]` page.
- [ ] FAQ JSON-LD on each service page.
- [ ] `sitemap.xml` verified in Google Search Console.
- [ ] Google Analytics 4 + Google Search Console set up.
- [ ] Google Business Profile linked to domain.
- [ ] Mobile speed test (PageSpeed Insights) > 80 score.
- [ ] WhatsApp button tested on mobile.
- [ ] All phone numbers are click-to-call `tel:` links.
- [ ] Arabic version of at least homepage, contact, and 3 top services live.
- [ ] Open Graph images generated for all major pages.
- [ ] Submit to local UAE directories: Dubai Yellow Pages, Dubizzle Services, ServiceMyCar.

---

*End of Specification — WMK Auto Repairing Garage LLC Website*
