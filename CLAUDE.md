# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start

**Tech Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4.2 · Framer Motion · next-intl

**Commands:**
```bash
npm run dev      # Development (run manually in terminal)
npm run build    # Production build
npm run lint     # Linting
```

## Project Overview

WMK Auto Repairing Garage LLC — A conversion-driven automotive website for Ras Al Khor, Dubai. Specializes in ECM/ECU repair, hybrid battery services, and car programming. Targets high-intent local SEO queries while positioning as elite technical authority.

**Key Differentiator:** Only garage in Ras Al Khor offering ECM + Hybrid Battery + Online Programming + Gear Programming under one roof, with EV brand coverage (Tesla, BYD).

## Architecture

- **Data:** 12 services + 16 brands defined in `lib/services.ts` and `lib/brands.ts`
- **Routes:** Static pages (`/`, `/services`, `/about`, `/contact`, `/brands`) + dynamic pages (`/services/[slug]`, `/brands/[brand]`)
- **Components:** Reusable UI components in `components/ui/` (Cards, Header, Footer, WhatsAppFloat)
- **Styling:** Tailwind v4 with `@tailwindcss/postcss` plugin, custom theme in `app/globals.css`

See **[docs/architecture.md](docs/architecture.md)** for detailed structure.

## Development

- **Modify content:** Edit `lib/services.ts` or `lib/brands.ts`
- **Update theme:** Edit `@theme` in `app/globals.css`
- **Add page:** Create route folder in `app/` with `page.tsx`
- **Add animations:** Use Framer Motion with `motion` components

See **[docs/development.md](docs/development.md)** for common tasks.

## SEO & Conversion

- Phone number (+971 55 476 2284) must be clickable `tel:` link on all pages
- WhatsApp button fixed bottom-right (highest conversion driver in Dubai)
- Service pages: 400+ words with FAQ schema targeting featured snippets
- All pages: LocalBusiness + Service + FAQ JSON-LD schemas

See **[docs/seo-conversion.md](docs/seo-conversion.md)** for details.

## Implementation Status

**Phase 1 (Core):** ✅ In progress — core pages built, services/brands structure in place
**Phase 2 (Admin/Blog):** ⏳ Planned for post-launch
**Phase 3 (Optimization):** ⏳ Planned for launch

See **[docs/plan.md](docs/plan.md)** for full implementation roadmap.

## Important Notes

- Tailwind v4 uses `postcss.config.mjs` only (no tailwind.config.ts)
- TypeScript 6.0 requires `ignoreDeprecations: "6.0"` in tsconfig.json
- All pages use `'use client'` for Framer Motion animations
- Dynamic routes use `params: Promise<{ slug: string }>` pattern

See **[docs/WMK_AutoGarage_Website_Spec.md](docs/WMK_AutoGarage_Website_Spec.md)** for full specification.
