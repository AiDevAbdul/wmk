# CLAUDE.md

WMK Auto Repairing Garage LLC — Elite automotive website for Ras Al Khor, Dubai. ECM/ECU repair, hybrid battery services, car programming.

## Quick Start

**Tech Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4.2 · Framer Motion · next-intl · Prisma · PostgreSQL

**Commands:**
```bash
npm run dev      # Development (run manually in terminal)
npm run build    # Production build
npm run lint     # Linting
npm run seed     # Seed database with initial admin user
```

**Environment:**
```
# Production (Vercel)
DATABASE_URL="postgres://user:password@db.prisma.io:5432/postgres?sslmode=require"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="https://yourdomain.com"

# Local Development (SQLite)
DATABASE_URL="file:./prisma/dev.db"
```

## Key Architecture

- **Routes:** Locale-prefixed (`/[locale]/services`, `/[locale]/blog`) with EN/AR support
- **Database:** PostgreSQL (production) + Prisma ORM
- **Blog System:** Public API + admin CRUD endpoints
- **Auth:** NextAuth v4 credentials provider, protected `/admin` routes
- **Styling:** Tailwind v4 with `@tailwindcss/postcss`

## Critical Notes

- Tailwind v4 uses `postcss.config.mjs` only (no tailwind.config.ts)
- TypeScript 6.0 requires `ignoreDeprecations: "6.0"` in tsconfig.json
- All pages use `'use client'` for Framer Motion animations
- Dynamic routes use `params: Promise<{ locale: string; slug: string }>` pattern
- Locale always prefixed in URL (`/en/*`, `/ar/*`); middleware enforces this
- Phone (+971 55 476 2284) must be clickable `tel:` link on all pages
- WhatsApp button fixed bottom-right (highest conversion driver)

## Documentation

See `/docs/` for detailed guides:
- `QUICK_REFERENCE.md` — Common tasks, patterns, routing
- `architecture.md` — Project structure, data models
- `development.md` — Development workflows, code examples
- `NEXTAUTH_SETUP.md` — NextAuth v4 configuration & API routes
- `DATABASE_SETUP.md` — PostgreSQL/SQLite setup, blog system, seeding
- `seo-conversion.md` — SEO strategy, schemas, optimization
- `WMK_AutoGarage_Website_Spec.md` — Full specification
