# CLAUDE.md

WMK Auto Repairing Garage LLC — Elite automotive website for Ras Al Khor, Dubai. Specializes in ECM/ECU repair, hybrid battery services, and car programming.

## Quick Start

**Tech Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4.2 · Framer Motion · next-intl · Prisma · PostgreSQL

**Commands:**
```bash
npm run dev      # Development (run manually in terminal)
npm run build    # Production build
npm run lint     # Linting
npm run seed     # Seed database with initial admin user
```

**Environment Setup:**
```
# Production (Vercel)
DATABASE_URL="postgres://user:password@db.prisma.io:5432/postgres?sslmode=require"

# Local Development (SQLite)
DATABASE_URL="file:./prisma/dev.db"

NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## Key Architecture

- **Routes:** Locale-prefixed (`/[locale]/services`, `/[locale]/brands`, `/[locale]/blog`) with EN/AR support
- **Data:** 12 services + 16 brands in `lib/services.ts` and `lib/brands.ts`
- **Database:** PostgreSQL + Prisma (admin users, blog posts, contacts, analytics, services)
- **Blog System:** 4 tables (blog_posts, admin_users, contact_submissions, analytics_events)
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

## Database & Blog System

**PostgreSQL Setup (Production):**
- Provider: PostgreSQL via Prisma Data Platform (db.prisma.io)
- Migration lock: `prisma/migrations/migration_lock.toml` set to `postgresql`
- Vercel: Add `DATABASE_URL` to environment variables
- Auto-seeding: `npm run seed` populates admin user + 4 blog posts

**Blog Features:**
- Public endpoints: `/api/blog` (list), `/api/blog/[slug]` (detail)
- Admin endpoints: `/api/admin/blog/*` (CRUD operations, protected)
- Frontend: `/[locale]/blog` (list with search/filter), `/[locale]/blog/[slug]` (detail)
- Markdown support: Blog content rendered via `marked` library
- Categories: News, ECM Tips, Hybrid Battery, Maintenance
- Sample posts seeded on deployment

**Local Development:**
- Use SQLite: `DATABASE_URL="file:./prisma/dev.db"`
- Run `npm run seed` to populate sample data
- Schema auto-syncs with `npx prisma db push`

## Documentation

See `/docs/` for detailed guides:
- `architecture.md` — Project structure, routing, components
- `development.md` — Common tasks, code patterns
- `seo-conversion.md` — SEO strategy, schemas, optimization
- `plan.md` — Implementation roadmap (Phase 1-3 complete)
- `WMK_AutoGarage_Website_Spec.md` — Full specification
