# Quick Reference Guide

Fast lookup for common tasks and patterns in the WMK project.

## Setup & Commands

**Initial Setup:**
```bash
npm install
npm run seed  # Create initial admin user
```

**Development:**
```bash
npm run dev      # Run locally (manual terminal)
npm run build    # Production build
npm run lint     # Check code quality
```

**Database:**
```bash
npx prisma migrate dev    # Create migration
npx prisma studio        # Open Prisma Studio
npx prisma generate      # Generate Prisma Client
```

## Common Tasks

### Modify Static Content
Edit `lib/services.ts` or `lib/brands.ts` to add/update services or brands. Both have EN/AR translations.

### Update Theme Colors
Edit `@theme` section in `app/globals.css`. Color palette:
- `bg-primary`: #F5C518 (yellow accent)
- `bg-steel-dark`: #1E2128 (hero background)
- `bg-steel-mid`: #4E5566 (card backgrounds)
- `bg-steel-light`: #8A919E (secondary text)
- `bg-accent-red`: #E53935 (warnings)

### Add New Page
1. Create folder: `app/[locale]/your-page/`
2. Add `page.tsx` with `'use client'` directive
3. Use locale from `params: Promise<{ locale: string }>`
4. Import `useTranslations` from `next-intl` for i18n

### Add Animation
Use Framer Motion `motion` components:
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Database Changes
1. Update `prisma/schema.prisma`
2. Run `npx prisma migrate dev`
3. Name the migration descriptively
4. Prisma Client auto-generates

## Routing Reference

**Public Routes (locale-prefixed):**
- `/[locale]/` — Homepage
- `/[locale]/services` — Services listing
- `/[locale]/services/[slug]` — Service detail
- `/[locale]/brands` — Brands listing
- `/[locale]/brands/[brand]` — Brand detail
- `/[locale]/about`, `/[locale]/contact`, `/[locale]/blog`, `/[locale]/blog/[slug]`

**Admin Routes (non-locale):**
- `/admin/login` — Authentication
- `/admin` — Dashboard (protected)
- `/admin/services`, `/admin/blog`, `/admin/contacts`, `/admin/analytics`, `/admin/settings`

**API Routes:**
- `/api/auth/[...nextauth]` — NextAuth endpoints
- `/api/admin/*` — CRUD endpoints
- `/api/contact` — Public contact form
- `/api/blog` — Public blog endpoints

## TypeScript Patterns

**Dynamic Route Params:**
```tsx
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  // ...
}
```

**Using Translations:**
```tsx
'use client'
import { useTranslations } from 'next-intl'

export default function Component() {
  const t = useTranslations()
  return <h1>{t('key')}</h1>
}
```

## Critical Technical Notes

- **Tailwind v4:** Uses `@tailwindcss/postcss` in `postcss.config.mjs` (no tailwind.config.ts)
- **TypeScript 6.0:** Requires `ignoreDeprecations: "6.0"` in tsconfig.json
- **Client Components:** All pages use `'use client'` for Framer Motion
- **Locale Routing:** Always prefixed (`/en/*`, `/ar/*`); middleware enforces
- **Prisma Build:** `npm run build` auto-runs `prisma generate`
- **Auth:** NextAuth with bcryptjs password hashing

## Conversion Drivers

- **Phone:** +971 55 476 2284 (must be `tel:` link on all pages)
- **WhatsApp:** https://wa.me/971554762284 (fixed bottom-right button)
- **Service Pages:** 400+ words with FAQ schema
- **All Pages:** LocalBusiness + Service + FAQ JSON-LD schemas

## File Organization

```
app/
  [locale]/
    page.tsx              # Homepage
    services/
      page.tsx            # Services listing
      [slug]/page.tsx     # Service detail
    brands/
      page.tsx            # Brands listing
      [brand]/page.tsx    # Brand detail
    about/page.tsx
    contact/page.tsx
    blog/page.tsx
    blog/[slug]/page.tsx
  admin/
    login/page.tsx
    page.tsx              # Dashboard
    services/page.tsx
    blog/page.tsx
    contacts/page.tsx
    analytics/page.tsx
    settings/page.tsx
  api/
    auth/[...nextauth]/route.ts
    admin/*/route.ts
    contact/route.ts
    blog/route.ts

components/
  ui/
    Cards.tsx
    Header.tsx
    Footer.tsx
    WhatsAppFloat.tsx

lib/
  services.ts             # 12 services with EN/AR
  brands.ts               # 16 brands with EN/AR

prisma/
  schema.prisma
  dev.db                  # SQLite database

messages/
  en.json                 # English translations
  ar.json                 # Arabic translations
```

## Environment Variables

Create `.env.local`:
```
DATABASE_URL="file:./prisma/dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## Color Contrast Rules

- On `bg-primary` (yellow #F5C518): use `text-steel-dark` for text
- On `bg-steel-mid` (gray #4E5566): use `text-white` for body text, NOT `text-steel-light`
- Always ensure WCAG AA compliance (4.5:1 contrast ratio minimum)

## Performance Optimization

- **Images:** Use `next/image` with remote patterns for Wikimedia
- **Formats:** WebP/AVIF auto-served on supported browsers
- **Responsive:** Device breakpoints (320px, 640px, 768px, 1024px, 1280px, 1920px)
- **Cache:** 1 year TTL for static images

## i18n Setup

- **Locales:** ['en', 'ar'], default: 'en'
- **Messages:** `messages/[locale].json`
- **RTL:** Middleware handles locale detection; layout wrapper has `dir` attribute
- **Middleware:** Enforces locale prefix in all URLs
