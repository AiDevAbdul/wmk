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
| `<ServiceCard />` | Glass card with gold icon, title, description, learn-more arrow |
| `<ServiceCardFeatured />` | Tall gold-tinted bento feature card for ECM (homepage only) |
| `<StatCounter />` | Spring-animated count-up number + label (uses Framer Motion `useSpring`) |
| `<ReviewCard />` | Glass card — star rating, italic quote, avatar initial, verified badge |
| `<CTABanner />` | Dark section with gold CTA + WhatsApp glass button |
| `<ProcessStep />` | Numbered step with gold icon box |
| `<SectionHeading />` | Bold heading wrapper |
| `<Header />` | Frosted-glass sticky nav — logo + centered links + locale switcher (EN/AR) + CTA |
| `<Footer />` | 5-column Apple-style footer — brand info, services, brands, company, language |
| `<WhatsAppFloat />` | Fixed bottom-right — gradient green pill with tooltip + pulse ring |

## Styling & Theme

### Color Palette
- **Primary Gold**: #F5C518 (brand accent — CTAs, highlights)
- **Primary Dark Gold**: #C9A012 (hover/pressed state)
- **Steel Dark**: #06080F (deepest navy — body background, hero)
- **Steel Mid**: #0C1423 (elevated surface — sections, nav blur)
- **Steel**: #152035 (mid surface — section alternates)
- **Steel Light**: #8294B0 (secondary text, muted elements)
- **Accent Red**: #EF4444 (warnings, error states)
- **Surface**: #F0F4FF (light reference, used for text on dark)

**Contrast:** Gold (#F5C518) on deep navy (#06080F) = ~12:1 ratio ✓ (WCAG AAA)

### Typography
- **All text**: Inter (Google Fonts) — Apple SF Pro-like clean sans-serif
- **Display/headings**: Inter 800–900, letter-spacing −0.03em to −0.04em
- **Body**: Inter 400–500, line-height 1.6
- **Labels/caps**: Inter 600, tracking-widest uppercase

### Design Utilities (`app/globals.css`)
- `.glass-card` — frosted dark glass card (`backdrop-blur-xl` + `rgba(8,12,28,0.72)` bg + `rgba(255,255,255,0.07)` border)
- `.glass-card-gold` — glass card with gold border tint (`rgba(245,197,24,0.22)`)
- `.btn-primary` — gold gradient button with spring hover lift + glow shadow
- `.btn-glass` — frosted glass secondary button
- `.section-label` — gold pill label (`px-4 py-1.5 rounded-full` + gold border)
- `.text-gold-gradient` — `linear-gradient(135deg, #F5C518, #E8B000, #F5C518)` clipped to text
- `.container-max` — `max-w-7xl mx-auto px-6 md:px-10 xl:px-16`

### Tailwind v4 Setup
- Uses `@tailwindcss/postcss` plugin in `postcss.config.mjs`
- Custom theme defined in `app/globals.css` using `@theme` directive
- No `tailwind.config.ts` exists — all config is in `postcss.config.mjs` + `globals.css`

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
