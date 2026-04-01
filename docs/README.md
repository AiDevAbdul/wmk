# WMK Auto Garage Documentation

This directory contains comprehensive documentation for the WMK Auto Repairing Garage website project.

## Quick Navigation

### For Claude Code Instances
Start with **[../CLAUDE.md](../CLAUDE.md)** — a concise 64-line guide with links to detailed docs.

### Documentation Files

| File | Purpose | Lines |
|------|---------|-------|
| [architecture.md](architecture.md) | Project structure, data models, routing, components, styling | 251 |
| [development.md](development.md) | Common development tasks, code examples, patterns | 236 |
| [seo-conversion.md](seo-conversion.md) | SEO strategy, keywords, schemas, conversion optimization | 243 |
| [plan.md](plan.md) | Implementation roadmap (Phase 1, 2, 3) | 428 |
| [WMK_AutoGarage_Website_Spec.md](WMK_AutoGarage_Website_Spec.md) | Full specification document | 553 |

## Project at a Glance

**WMK Auto Repairing Garage LLC** — Elite auto repair specialist in Ras Al Khor, Dubai

- **Tech Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4.2 · Framer Motion
- **Services:** 12 (ECM repair, hybrid battery, car programming, etc.)
- **Brands:** 16 (Tesla, BYD, BMW, Mercedes, etc.)
- **Status:** Phase 1 (core website) in progress

## Key Differentiator

Only garage in Ras Al Khor offering **ECM + Hybrid Battery + Online Programming + Gear Programming** under one roof, with EV brand coverage (Tesla, BYD).

## Quick Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # Linting
```

## Next Steps

1. **Complete Service Detail Pages** — Ensure all 12 services have 400+ word content with FAQ schema
2. **Complete Brand Detail Pages** — All 16 brands with descriptions and certifications
3. **Implement Arabic (RTL) Support** — Set up next-intl for EN/AR routing
4. **SEO Metadata & Schemas** — Add generateMetadata() and JSON-LD to all pages
5. **Image Optimization** — Replace placeholders with real photos, optimize for Core Web Vitals

See [plan.md](plan.md) for full implementation roadmap.

## Important Notes

- Tailwind v4 uses `postcss.config.mjs` only (no tailwind.config.ts)
- TypeScript 6.0 requires `ignoreDeprecations: "6.0"` in tsconfig.json
- All pages use `'use client'` for Framer Motion animations
- Dynamic routes use `params: Promise<{ slug: string }>` pattern

## Contact & Business Info

**WMK Auto Repairing Garage LLC**
- 📍 18 Street, Ras Al Khor Industrial Area 2, Dubai, UAE
- 📞 +971 55 476 2284
- 💬 WhatsApp: https://wa.me/971554762284
- 🕐 Hours: Mon–Thu, Sat–Sun: 08:00–20:00 (Closed Friday)
- 📧 Coordinates: 25.1972, 55.3586
