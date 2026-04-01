# Development

## Common Tasks

### Modify Service Content
Edit `lib/services.ts` — both the `services` array and `serviceDetails` object:

```typescript
// Add to services array
{
  id: 'service-id',
  name: 'Service Name (EN)',
  nameAr: 'Service Name (AR)',
  description: 'One-line description',
  icon: 'IconName', // from lucide-react
  slug: 'service-slug',
}

// Add to serviceDetails object
'service-slug': {
  title: 'Service Name Dubai',
  description: 'SEO-optimized meta description (150–160 chars)',
  whatIs: '300–400 word explanation of the service',
  signs: ['Sign 1', 'Sign 2', 'Sign 3', 'Sign 4', 'Sign 5'],
  process: [
    { title: 'Step 1', description: '...' },
    { title: 'Step 2', description: '...' },
    { title: 'Step 3', description: '...' },
    { title: 'Step 4', description: '...' },
  ],
  faq: [
    { question: 'Q1?', answer: 'A1...' },
    // ... 4–6 FAQs total
  ],
}
```

Service detail page at `/services/[slug]` will automatically render with Service + FAQ JSON-LD schemas.

### Modify Brand Content
Edit `lib/brands.ts` — both the `brands` array and `brandDetails` object:

```typescript
// Add to brands array
{ id: 'brand-id', name: 'Brand Name', slug: 'brand-slug', services: ['Service 1', 'Service 2', 'Service 3'] }

// Add to brandDetails object
'brand-slug': {
  name: 'Brand Name',
  description: 'Brand-specific description (50–100 words)',
  services: ['Service 1', 'Service 2', 'Service 3'],
  certifications: ['Certification 1', 'Certification 2'],
}
```

Brand detail page at `/brands/[brand]` will automatically render.

### Update Theme Colors
Edit `@theme` section in `app/globals.css`:

```css
@theme {
  --color-primary: #F5C518;
  --color-primary-dark: #D4A800;
  --color-steel: #3A3F4B;
  --color-steel-dark: #1E2128;
  --color-steel-mid: #4E5566;
  --color-steel-light: #8A919E;
  --color-surface: #F2F3F5;
  --color-accent-red: #E53935;
  --color-text-primary: #1E2128;
  --color-text-secondary: #5A6170;
}
```

### Add New Page
Create new route folder in `app/` with `page.tsx`:

```typescript
// app/new-page/page.tsx
'use client'

import { motion } from 'framer-motion'

export default function NewPage() {
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

### Add Animations
Use Framer Motion with `motion` components and variants pattern:

```typescript
'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Component() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>Item 1</motion.div>
      <motion.div variants={itemVariants}>Item 2</motion.div>
    </motion.div>
  )
}
```

### Add SEO Metadata
Use `generateMetadata()` function in page.tsx:

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Name in Ras Al Khor, Dubai | WMK Auto Repairing Garage',
  description: 'Expert service near Ras Al Khor Industrial Area Dubai. WMK Auto Repairing Garage — call +971 55 476 2284 for fast, affordable repair.',
  keywords: 'service keyword Dubai, Ras Al Khor repair',
  openGraph: {
    title: 'Service Name in Ras Al Khor, Dubai',
    description: 'Expert service near Ras Al Khor Industrial Area Dubai',
    type: 'website',
    locale: 'en_AE',
    alternateLocale: ['ar_AE'],
  },
}

export default function Page() {
  // ...
}
```

### Add JSON-LD Schema
Create schema objects in component:

```typescript
// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ECM Repair Dubai',
  serviceType: 'Engine Control Module Repair',
  provider: { '@type': 'AutoRepair', name: 'WMK Auto Repairing Garage LLC' },
  areaServed: { '@type': 'City', name: 'Dubai' },
  description: 'Professional ECM and ECU repair services in Dubai...',
}

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does ECM repair cost in Dubai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ECM repair in Dubai typically ranges from AED 500–2,500 depending on the make and damage. WMK provides a free diagnostic check before quoting.',
      },
    },
  ],
}
```

Add to page head:
```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
/>
```

### Update Header/Footer
Edit `components/ui/Header.tsx` or `components/ui/Footer.tsx` directly.

### Add Arabic Content
Translate service/brand names and update `nameAr` fields in `lib/services.ts` and `lib/brands.ts`. Use next-intl for routing.

## SEO Content Guidelines

- **Service pages**: Target high-intent keywords like "ECM repair Dubai", "hybrid battery replacement Dubai"
- **Brand pages**: Target long-tail keywords like "Tesla repair Dubai", "BMW ECU programming Dubai"
- **All content**: Include location (Dubai, Ras Al Khor) naturally in first paragraph
- **FAQ questions**: Target "People Also Ask" box queries (e.g., "How much does ECM repair cost in Dubai?")
- **Phone number**: Always include +971 55 476 2284 in CTAs
- **WhatsApp link**: `https://wa.me/971554762284?text=Hello%2C%20I%20need%20a%20car%20repair%20quote`

## Service Page Template (400+ words each)

Each service detail page must include:

1. **What Is This Service?** (300–400 words, keyword-rich)
2. **Signs You Need This Service** (5-item list)
3. **Our Process** (4-step flow: Diagnose → Quote → Repair → Test)
4. **Brands We Cover** (relevant logo subset)
5. **FAQ Accordion** (4–6 questions, schema-ready)
6. **Contact CTA** (phone + WhatsApp + address)

## Important Notes

- All pages use `'use client'` for Framer Motion animations
- Dynamic routes use `params: Promise<{ slug: string }>` pattern
- Framer Motion easing must use valid Framer Motion values (not CSS easing strings)
- Tailwind v4 uses `@tailwindcss/postcss` plugin (not traditional tailwindcss in postcss.config)
- TypeScript 6.0 requires `ignoreDeprecations: "6.0"` in tsconfig.json
