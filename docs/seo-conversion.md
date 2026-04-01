# SEO & Conversion Optimization

## Strategic Intent

WMK is the **only garage in Ras Al Khor offering ECM/ECU Repair + Hybrid Battery + Online Programming + Gear Programming** under one roof. Competitors are either mechanical-only, hybrid-only, or English-only.

**Goal:** Dominate local SEO for high-intent Dubai search queries while positioning as elite technical authority.

## High-Priority Keywords

### Transactional (High Intent)
- "ECM repair Dubai" / "ECU repair Ras Al Khor"
- "car programming Dubai" / "gear programming Dubai"
- "hybrid battery repair Dubai" / "Tesla battery Dubai"
- "ABS repair Dubai" / "airbag repair Dubai"
- "Tesla repair Dubai" / "BYD repair Dubai"

### Long-Tail (High Conversion)
- "ECM repair Ras Al Khor Industrial Area"
- "hybrid battery replacement Tesla Dubai"
- "BMW ECU programming Dubai"
- "online car programming UAE"
- "car electrical repair Ras Al Khor"

## On-Page SEO Essentials

### Title Tag Pattern
```
[Service] in Ras Al Khor, Dubai | WMK Auto Repairing Garage
```

### Meta Description Pattern
```
Expert [service] near Ras Al Khor Industrial Area Dubai. WMK Auto Repairing Garage — call +971 55 476 2284 for fast, affordable repair.
```

### H1 Requirements
- Must contain primary keyword + "Dubai" or "Ras Al Khor"
- Example: "ECM Repair & Programming in Ras Al Khor, Dubai"

### NAP Consistency
Identical on every page (footer, contact page, schema):
```
WMK Auto Repairing Garage LLC
18 Street, Ras Al Khor Industrial Area 2
Dubai, United Arab Emirates
+971 55 476 2284
```

## Structured Data (JSON-LD)

### LocalBusiness Schema (Root Layout)
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
  "areaServed": ["Ras Al Khor", "Dubai", "Dubai International City", "Dubai Silicon Oasis", "Mirdif"],
  "knowsAbout": ["ECM Repair", "ECU Programming", "Hybrid Battery Repair", "ABS Repair", "Airbag Repair", "Gear Programming", "Car AC Repair"]
}
```

### Service Schema (Per Service Page)
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

### FAQ Schema (Per Service Page)
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

## Conversion Optimization

### Phone & WhatsApp Strategy
- **Phone number** (+971 55 476 2284) must be clickable `tel:` link on all pages
- **WhatsApp button** fixed bottom-right, all pages — highest conversion driver in Dubai market
- **WhatsApp link:** `https://wa.me/971554762284?text=Hello%2C%20I%20need%20a%20car%20repair%20quote`
- **No-friction CTAs:** "Call Now" takes to dialer, no form required for initial contact

### Trust Signals
- Brand logos (16 supported brands)
- Service count (12 core services)
- "RTA Licensed" mention
- Years of experience
- Google reviews/testimonials
- Certifications per brand

### Urgency Language
- "Same-Day Diagnostics"
- "Fast Turnaround"
- "Expert Technicians"
- "Modern Diagnostics"

## Service Page Template

Each service detail page must include:

1. **Hero Section**
   - Service name in H1 (SEO-optimized)
   - Location mention (Ras Al Khor, Dubai)
   - CTA phone button

2. **What Is This Service?** (300–400 words, keyword-rich)
   - Explain the service and why it matters
   - Include location naturally in first paragraph
   - Target primary keyword

3. **Signs You Need This Service** (5-item list)
   - Symptoms/warning signs
   - Keyword-rich descriptions

4. **Our Process** (4-step flow)
   - Diagnose → Quote → Repair → Test
   - Each step with description

5. **Brands We Cover** (relevant logo subset)
   - Show brand logos for this service
   - Link to brand pages

6. **FAQ Accordion** (4–6 questions)
   - Target "People Also Ask" box queries
   - Schema-ready structure
   - Examples:
     - "How much does [service] cost in Dubai?"
     - "How long does [service] take?"
     - "Can you service my [brand]?"
     - "Is [service] covered by warranty?"

7. **Contact CTA** (phone + WhatsApp + address)
   - Phone number as tel: link
   - WhatsApp button
   - Full address

## FAQ Question Examples

- "How much does ECM repair cost in Dubai?"
- "How long does hybrid battery replacement take?"
- "Can I drive with an ABS fault light on?"
- "Is gear programming covered by warranty in UAE?"
- "Where can I get online car programming in Dubai?"
- "Do you repair Tesla batteries?"
- "Is ECM repair cheaper than replacement?"
- "Can you program my specific car brand?"

## Technical SEO Checklist

- [ ] `sitemap.xml` auto-generated by Next.js 16
- [ ] `robots.txt` allowing all pages
- [ ] LocalBusiness JSON-LD on every page
- [ ] Service JSON-LD on each `/services/[slug]` page
- [ ] FAQ JSON-LD on each service page
- [ ] `generateMetadata()` on all pages (title, description, OG tags)
- [ ] Canonical URLs on all pages
- [ ] `hreflang` tags for EN/AR alternates
- [ ] Image alt text includes location + service keywords
- [ ] `next/image` with `priority` on hero, `loading="lazy"` elsewhere
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms
- [ ] Page load < 3s on 4G mobile

## Content Guidelines

### Tone
- Professional but direct
- No jargon walls
- Use "your car" not "the vehicle"
- Mention Dubai + Ras Al Khor naturally

### Keyword Placement
- H1: Primary keyword + location
- First paragraph: Primary keyword + location
- Meta description: Primary keyword + location + phone
- FAQ questions: Target long-tail variations
- Image alt text: Include location + service keywords

### Brand-Specific Pages
Target long-tail keywords like:
- "Tesla repair Dubai"
- "BMW ECU programming Dubai"
- "BYD hybrid battery replacement UAE"
- "Mercedes electrical repair Ras Al Khor"

## Launch Checklist

- [ ] All 12 service pages live with unique 400+ word content
- [ ] All 16 brand pages live
- [ ] LocalBusiness JSON-LD on every page
- [ ] Service JSON-LD on each service page
- [ ] FAQ JSON-LD on each service page
- [ ] Sitemap.xml verified in Google Search Console
- [ ] Google Analytics 4 + Google Search Console set up
- [ ] Google Business Profile linked to domain
- [ ] Mobile speed test (PageSpeed Insights) > 80 score
- [ ] WhatsApp button tested on mobile
- [ ] All phone numbers are click-to-call tel: links
- [ ] Arabic version of homepage, contact, 3 top services live
- [ ] Open Graph images generated for all major pages
- [ ] Submit to local UAE directories (Dubai Yellow Pages, Dubizzle, ServiceMyCar)
