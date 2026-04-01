# Architecture

## Project Structure

```
app/
├── layout.tsx                    # Root layout with metadata, fonts, JSON-LD schema
├── globals.css                   # Tailwind @theme, custom components, base styles
├── page.tsx                      # Home page (hero, stats, services, brands, testimonials)
├── services/
│   ├── page.tsx                  # Services listing page
│   └── [slug]/
│       ├── layout.tsx            # Service detail layout
│       └── page.tsx              # Service detail page (dynamic, 12 total)
├── brands/
│   ├── page.tsx                  # Brands listing page
│   └── [brand]/
│       ├── layout.tsx            # Brand detail layout
│       └── page.tsx              # Brand detail page (dynamic, 16 total)
├── about/page.tsx                # About page (company story, team, certifications)
└── contact/page.tsx              # Contact page (form, map, hours, address)

components/ui/
├── Cards.tsx                     # ServiceCard, StatCounter, ReviewCard, CTABanner, ProcessStep, etc.
├── Header.tsx                    # Sticky nav with logo, menu, Call Now button, mobile hamburger
├── Footer.tsx                    # 4-column footer with schema-ready address block
└── WhatsAppFloat.tsx             # Fixed bottom-right WhatsApp bubble (all pages)

lib/
├── services.ts                   # 12 services array + serviceDetails object (EN/AR)
├── brands.ts                     # 16 brands array + brandDetails object
└── constants.ts                  # NAP, phone, WhatsApp, hours, coordinates (future)

public/
├── logos/                        # Brand SVG logos (16 total, optimized)
└── images/                       # Workshop photos, car images

docs/
├── WMK_AutoGarage_Website_Spec.md  # Full specification document
├── plan.md                         # Implementation plan (phases 1–3)
├── architecture.md                 # This file
├── development.md                  # Common development tasks
└── seo-conversion.md               # SEO & conversion optimization
```

## Data Structure

### Services (`lib/services.ts`)

```typescript
export const services = [
  {
    id: 'ecm-repair',
    name: 'ECM / ECU Repair & Programming',
    nameAr: 'إصلاح وبرمجة وحدة التحكم بالمحرك',
    description: 'Expert engine control module repair and programming for all major brands',
    icon: 'Cpu',
    slug: 'ecm-repair',
  },
  // ... 11 more services (12 total)
]

export const serviceDetails: Record<string, any> = {
  'ecm-repair': {
    title: 'ECM / ECU Repair & Programming Dubai',
    description: 'Professional engine control module repair and programming services...',
    whatIs: '300–400 word explanation of the service',
    signs: ['Sign 1', 'Sign 2', ...], // 5 items
    process: [
      { title: 'Step 1', description: '...' },
      // ... 4 steps total
    ],
    faq: [
      { question: '...', answer: '...' },
      // ... 4–6 FAQs
    ],
  },
  // ... details for other services
}
```

**12 Services:**
1. ECM / ECU Repair & Programming
2. Hybrid Battery Repair & Replacement
3. Car Programming (Gear, Online, ABS)
4. Airbag & ABS Repair
5. Car AC Repair
6. General Mechanical Repair
7. Electrical Repair
8. Denting, Painting & Body Work
9. Tyre Fitting & Repair
10. Oil Change
11. Radiator, Exhaust & Coolant
12. Car Polish & Seat Cleaning

### Brands (`lib/brands.ts`)

```typescript
export const brands = [
  { id: 'tesla', name: 'Tesla', slug: 'tesla', services: ['ECM Repair', 'Hybrid Battery', 'Car Programming'] },
  // ... 15 more brands (16 total)
]

export const brandDetails: Record<string, any> = {
  tesla: {
    name: 'Tesla',
    description: 'Tesla repair and programming specialists in Dubai...',
    services: ['ECM Repair', 'Hybrid Battery Diagnostics', ...],
    certifications: ['Tesla Certified Technician', ...],
  },
  // ... details for other brands
}
```

**16 Brands:** Tesla, BYD, BMW, Mercedes, Audi, Nissan, Toyota, Honda, Hyundai, Kia, Ford, Chevrolet, Volkswagen, Lexus, Mazda, Subaru

## Routing

### Static Routes
- `/` — Homepage
- `/services` — Services listing
- `/about` — Company story
- `/contact` — Contact form & map
- `/brands` — Brands grid

### Dynamic Routes
- `/services/[slug]` — Service detail pages (12 total)
  - Uses `services.find(s => s.slug === slug)` to fetch from `serviceDetails`
  - Template: Hero → What Is → Signs → Process → Brands → FAQ → CTA
  - Includes Service + FAQ JSON-LD schemas

- `/brands/[brand]` — Brand detail pages (16 total)
  - Uses `brands.find(b => b.slug === brand)` to fetch from `brandDetails`
  - Template: Brand logo → Services → Certifications → Related services → CTA

### Future Routes (Phase 2)
- `/blog` — Blog listing
- `/blog/[slug]` — Blog post detail
- `/admin` — Admin dashboard (protected)
- `/ar/*` — Arabic RTL pages (via next-intl)

## Component Library

| Component | Purpose |
|---|---|
| `<ServiceCard />` | Dark card with yellow icon, title, description, arrow link |
| `<BrandLogo />` | Grayscale logo that highlights to yellow on hover |
| `<StatCounter />` | Animated count-up number + label on scroll |
| `<ReviewCard />` | Star rating + reviewer name + quote |
| `<CTABanner />` | Yellow banner with phone + WhatsApp button |
| `<ProcessStep />` | Numbered step card for "Our Process" |
| `<SectionHeading />` | Large bold heading with optional yellow underline |
| `<FAQAccordion />` | Expand/collapse with Schema-ready structure |
| `<Header />` | Sticky nav with logo, menu, Call Now button |
| `<Footer />` | 4-column footer with NAP, links, language toggle |
| `<WhatsAppFloat />` | Fixed bottom-right WhatsApp bubble |

## Styling & Theme

### Color Palette
- **Primary Yellow**: #F5C518 (signals, precision)
- **Primary Dark Yellow**: #D4A800 (hover state)
- **Steel Dark**: #1E2128 (hero bg, nav)
- **Steel Mid**: #4E5566 (card backgrounds)
- **Steel Light**: #8A919E (secondary text)
- **Accent Red**: #E53935 (warnings, ABS/airbag)
- **Surface**: #F2F3F5 (off-white sections)

**Contrast:** Yellow on dark = 9.7:1 ratio ✓ (WCAG AAA compliant)

### Typography
- **Display (H1–H2)**: Barlow Condensed Bold 700
- **Sub-headings (H3–H4)**: Exo 2 SemiBold 600
- **Body**: IBM Plex Sans Regular 400, Medium 500
- **Monospace**: JetBrains Mono
- **Arabic**: Noto Kufi Arabic (RTL fallback)

### Tailwind v4 Setup
- Uses `@tailwindcss/postcss` plugin in `postcss.config.mjs`
- Custom theme defined in `app/globals.css` using `@theme` directive
- Custom components: `.container-max`, `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.card-dark`, `.text-gradient`

## Technical Patterns

### Dynamic Params
Service and brand pages use `params: Promise<{ slug: string }>` pattern:
```typescript
export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = params as any
  const slug = resolvedParams.slug
  const service = services.find((s) => s.slug === slug)
  // ...
}
```

### Static Generation
All pages are prerendered as static content. Use `generateStaticParams()` for dynamic routes:
```typescript
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}
```

### Client-Side Animations
All pages use `'use client'` for Framer Motion animations:
```typescript
'use client'

import { motion } from 'framer-motion'

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* content */}
    </motion.div>
  )
}
```

### Framer Motion Easing
Use valid Framer Motion values, not CSS easing strings:
```typescript
// ✓ Correct
transition={{ duration: 0.8 }}

// ✗ Wrong
transition={{ duration: 0.8, easing: 'ease-in-out' }}
```

## TypeScript Configuration

- **TypeScript 6.0**: Requires `ignoreDeprecations: "6.0"` in tsconfig.json for baseUrl support
- **Path Aliases**: `@/*` maps to project root for clean imports
- **Strict Mode**: Enabled with `noUncheckedIndexedAccess` for safety

## Build Status

✅ Builds successfully with Next.js 16 Turbopack
✅ All routes prerendered as static content
✅ TypeScript type checking passes
✅ No build errors or warnings
