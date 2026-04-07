# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
Create `.env.local` with:
```
DATABASE_URL="file:./prisma/dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## Project Overview

WMK Auto Repairing Garage LLC — A conversion-driven automotive website for Ras Al Khor, Dubai. Specializes in ECM/ECU repair, hybrid battery services, and car programming. Targets high-intent local SEO queries while positioning as elite technical authority.

**Key Differentiator:** Only garage in Ras Al Khor offering ECM + Hybrid Battery + Online Programming + Gear Programming under one roof, with EV brand coverage (Tesla, BYD).

## Architecture

- **Frontend:** Locale-prefixed routes (`/[locale]/services`, `/[locale]/brands`, etc.) with EN/AR support via next-intl
- **Data:** 12 services + 16 brands in `lib/services.ts` and `lib/brands.ts` (static content)
- **Database:** SQLite + Prisma for admin users, blog posts, contact submissions, analytics
- **Components:** Reusable UI in `components/ui/` (Cards, Header, Footer, WhatsAppFloat)
- **Styling:** Tailwind v4 with `@tailwindcss/postcss` plugin, custom theme in `app/globals.css`
- **Auth:** NextAuth with credentials provider, protected `/admin` routes

See **[docs/architecture.md](docs/architecture.md)** for detailed structure.

## Routing

**Public Routes (locale-prefixed):**
- `/[locale]/` — Homepage
- `/[locale]/services` — Services listing
- `/[locale]/services/[slug]` — Service detail (12 dynamic pages)
- `/[locale]/brands` — Brands listing
- `/[locale]/brands/[brand]` — Brand detail (16 dynamic pages)
- `/[locale]/about`, `/[locale]/contact`, `/[locale]/blog`, `/[locale]/blog/[slug]`

**Admin Routes (non-locale):**
- `/admin/login` — Authentication
- `/admin` — Dashboard (protected)
- `/admin/services`, `/admin/blog`, `/admin/contacts`, `/admin/analytics`, `/admin/settings`

**API Routes:**
- `/api/auth/[...nextauth]` — NextAuth endpoints
- `/api/admin/*` — CRUD endpoints for services, blog, contacts, analytics
- `/api/contact` — Public contact form submission
- `/api/blog` — Public blog endpoints

## Development

- **Modify static content:** Edit `lib/services.ts` or `lib/brands.ts`
- **Update theme:** Edit `@theme` in `app/globals.css`
- **Add page:** Create route folder in `app/[locale]/` with `page.tsx`
- **Add animations:** Use Framer Motion with `motion` components
- **Database changes:** Update `prisma/schema.prisma`, then run `npx prisma migrate dev`

See **[docs/development.md](docs/development.md)** for common tasks.

## SEO & Conversion

- Phone number (+971 55 476 2284) must be clickable `tel:` link on all pages
- WhatsApp button fixed bottom-right (highest conversion driver in Dubai)
- Service pages: 400+ words with FAQ schema targeting featured snippets
- All pages: LocalBusiness + Service + FAQ JSON-LD schemas

See **[docs/seo-conversion.md](docs/seo-conversion.md)** for details.

## Implementation Status

**Phase 1 (Core):** ✅ Complete — core pages, services/brands structure
**Phase 2 (Admin/Blog):** ✅ Complete — admin dashboard, blog CRUD, contact management
**Phase 3 (Optimization):** ✅ Complete — image optimization, Arabic RTL support, i18n

See **[docs/plan.md](docs/plan.md)** for full implementation roadmap.

## Important Notes

- Tailwind v4 uses `postcss.config.mjs` only (no tailwind.config.ts)
- TypeScript 6.0 requires `ignoreDeprecations: "6.0"` in tsconfig.json
- All pages use `'use client'` for Framer Motion animations
- Dynamic routes use `params: Promise<{ locale: string; slug: string }>` pattern
- Locale always prefixed in URL (`/en/*`, `/ar/*`); middleware enforces this
- Prisma Client must be generated before build: `npm run build` runs `prisma generate` first
- Admin authentication uses bcryptjs for password hashing

See **[docs/WMK_AutoGarage_Website_Spec.md](docs/WMK_AutoGarage_Website_Spec.md)** for full specification.
