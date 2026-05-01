# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

WMK Auto Repairing Garage LLC — Elite automotive website for Ras Al Khor, Dubai. ECM/ECU repair, hybrid battery services, car programming.

## Commands

```bash
npm run dev          # Development server
npm run build        # prisma generate + next build
npm run lint         # ESLint
npm run seed         # Seed DB with admin user + blog posts
npm run seed:blog    # Seed blog posts only
npm test             # Jest (jsdom)
npm run test:watch   # Jest watch mode
npm run test:coverage
npx jest path/to/file.test.ts   # Single test file
```

## Tech Stack

Next.js 16 · React 19 · TypeScript 6 · Tailwind CSS 4.2 · Framer Motion · next-intl · Prisma · PostgreSQL · NextAuth v4 · Sentry · Resend (email)

## Architecture

### Route Structure

Two parallel route trees:

| Tree | Path | i18n | Auth |
|------|------|------|------|
| Public/locale pages | `app/[locale]/` | Yes (EN/AR) | No |
| Admin panel | `app/admin/` | No | NextAuth session |

Locale middleware (`middleware.ts`) routes all non-admin, non-API paths through next-intl with `localePrefix: 'always'`. Admin protection is a cookie check in the same middleware — it redirects to `/en/login` if no session cookie.

### i18n

- Locales: `en`, `ar` (default: `en`)
- Translation files: `messages/en.json`, `messages/ar.json`
- Arabic sets `dir="rtl"` via `app/[locale]/layout.tsx`
- Config: `i18n.config.ts` (uses `getRequestConfig`)

### Auth

- `lib/auth.ts` — NextAuth handler with Credentials provider, JWT sessions, rate limiting (5 attempts/15 min per IP), NEXTAUTH_SECRET required
- `lib/api-auth.ts` — `requireAuth()` helper for API routes; returns `{ authenticated, session, response }`
- Admin API routes must call `requireAuth()` and validate CSRF token (`csrfToken` in body) on mutating requests
- Seed creates `admin@wmk.ae` with role `"admin"`

### API Routes

```
/api/blog/[slug]          # Public blog (GET)
/api/blog                 # Public blog list (GET)
/api/contact              # Contact form (POST)
/api/analytics/track      # Analytics tracking (POST)
/api/admin/blog           # Admin blog CRUD (auth required)
/api/admin/services       # Admin services CRUD (auth required)
/api/admin/contacts       # Admin contacts (auth required)
/api/admin/stats          # Dashboard stats (auth required)
/api/admin/analytics      # GA4 data (auth required)
```

### Database

Prisma with PostgreSQL (production) / SQLite (`file:./prisma/dev.db`) for local dev. Models: `AdminUser`, `BlogPost`. `lib/prisma.ts` exports singleton client.

### Styling

Tailwind v4 — config is in `postcss.config.mjs` only; no `tailwind.config.ts` exists.

### Testing

Tests live in `__tests__/` (e.g., `__tests__/lib/security.test.ts`, `__tests__/components/`). Jest with jsdom environment; `@/` alias maps to project root.

### Observability

Sentry configured via `sentry.client.config.ts`, `sentry.server.config.ts`, `sentry.edge.config.ts`. Vercel Analytics + Speed Insights in `app/providers.tsx`.

## Critical Notes

- TypeScript 6.0 requires `ignoreDeprecations: "6.0"` in `tsconfig.json`
- All public pages use `'use client'` for Framer Motion — no RSC on page components
- Dynamic route params are `Promise<{ locale: string; slug: string }>` — unwrap with `use(params)`
- Phone (+971 55 476 2284) must be a clickable `tel:` link on all pages
- WhatsApp float button (`components/ui/WhatsAppFloat.tsx`) must appear on all public pages — highest conversion driver
- `page-enhanced.tsx` files are alternate/enhanced variants; the active page is `page.tsx`

## Environment Variables

```
DATABASE_URL          # postgres://... (prod) or file:./prisma/dev.db (local)
NEXTAUTH_SECRET       # Required for JWT signing
NEXTAUTH_URL          # Required in production
RESEND_API_KEY        # Email sending
SENTRY_DSN            # Error tracking
```

## Documentation

See `/docs/` for detailed guides on NextAuth setup, database setup, SEO strategy, and the full website spec.
