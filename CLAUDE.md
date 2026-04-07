# CLAUDE.md

WMK Auto Repairing Garage LLC — Elite automotive website for Ras Al Khor, Dubai. Specializes in ECM/ECU repair, hybrid battery services, and car programming.

## Quick Start

**Tech Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4.2 · Framer Motion · next-intl · Prisma · SQLite

**Commands:**
```bash
npm run dev      # Development (run manually in terminal)
npm run build    # Production build
npm run lint     # Linting
npm run seed     # Seed database with initial admin user
```

**Environment Setup:**
```
DATABASE_URL="file:./prisma/dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## Key Architecture

- **Routes:** Locale-prefixed (`/[locale]/services`, `/[locale]/brands`) with EN/AR support
- **Data:** 12 services + 16 brands in `lib/services.ts` and `lib/brands.ts`
- **Database:** SQLite + Prisma (admin, blog, contacts, analytics)
- **Styling:** Tailwind v4 with `@tailwindcss/postcss`, theme in `app/globals.css`
- **Auth:** NextAuth credentials provider, protected `/admin` routes

## Critical Notes

- Tailwind v4 uses `postcss.config.mjs` only (no tailwind.config.ts)
- TypeScript 6.0 requires `ignoreDeprecations: "6.0"` in tsconfig.json
- All pages use `'use client'` for Framer Motion animations
- Dynamic routes use `params: Promise<{ locale: string; slug: string }>` pattern
- Locale always prefixed in URL (`/en/*`, `/ar/*`); middleware enforces this
- Phone (+971 55 476 2284) must be clickable `tel:` link on all pages
- WhatsApp button fixed bottom-right (highest conversion driver)
- **Documentation files saved in `/docs/` folder only**

## Documentation

See `/docs/` for detailed guides:
- `architecture.md` — Project structure, routing, components
- `development.md` — Common tasks, code patterns
- `seo-conversion.md` — SEO strategy, schemas, optimization
- `plan.md` — Implementation roadmap (Phase 1-3 complete)
- `WMK_AutoGarage_Website_Spec.md` — Full specification
