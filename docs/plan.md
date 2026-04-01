# WMK Auto Garage Website — Implementation Plan

## Phase 1: Core Website (Foundation)

### 1.1 Project Setup & Configuration
- [ ] Initialize Next.js 16 project with TypeScript
- [ ] Configure Tailwind CSS v4 (postcss.config.mjs only, no tailwind.config.ts)
- [ ] Set up Framer Motion, next-intl, lucide-react
- [ ] Create CSS variables file (colors, typography, spacing)
- [ ] Configure next/font for Barlow Condensed, Exo 2, IBM Plex Sans, Noto Kufi Arabic
- [ ] Set up ESLint, Prettier, TypeScript strict mode

### 1.2 Data & Content Structure
- [ ] Create `/lib/services.ts` — 12 services with EN/AR names, descriptions, slugs
- [ ] Create `/lib/brands.ts` — 16 brands with logos, models, services
- [ ] Create `/lib/schema.ts` — JSON-LD generators (LocalBusiness, Service, FAQ)
- [ ] Create `/lib/constants.ts` — NAP, phone, WhatsApp, hours, coordinates

### 1.3 Base Components
- [ ] `<ServiceCard />` — dark bg, yellow icon, title, description, arrow
- [ ] `<BrandLogo />` — grayscale → yellow on hover
- [ ] `<StatCounter />` — animated count-up on scroll
- [ ] `<FAQAccordion />` — expand/collapse with schema
- [ ] `<ContactCTA />` — yellow banner with phone + WhatsApp
- [ ] `<WhatsAppFloat />` — fixed bottom-right bubble (all pages)
- [ ] `<Breadcrumb />` — schema-marked navigation
- [ ] `<ServiceHero />` — reusable hero for service pages
- [ ] `<ReviewCard />` — star rating + quote
- [ ] `<ProcessStep />` — numbered step card
- [ ] `<LanguageToggle />` — EN ↔ AR with RTL flip

### 1.4 Layout & Navigation
- [ ] Create root layout (`/app/layout.tsx`) — nav, footer, global schema, lang toggle
- [ ] Build sticky header with logo, nav links, Call Now button
- [ ] Create mega-menu for Services (2-column dropdown)
- [ ] Create dropdown for Brands (logo grid)
- [ ] Mobile hamburger nav (full-screen overlay, dark, yellow accents)
- [ ] Build footer (4-column: logo/about, services, brands, contact)
- [ ] Add schema-ready address block in footer

### 1.5 Homepage (`/`)
- [ ] Hero section (100vh, dark bg, noise texture, radial gradient, car image overlay)
  - H1: "Dubai's Advanced Auto Repair & Programming Specialists"
  - Sub-headline with yellow pill chips
  - CTA buttons: Call Now + WhatsApp
  - Trust badges row
  - Floating location card (bottom-left)
- [ ] Stats strip (yellow bg, animated counters: 16+ brands, 11 services, 10+ years, 100% accuracy)
- [ ] Services section ("What We Fix" — 3-col grid, 11 cards, View All button)
- [ ] Specialization highlight (dark panel, 2-col: ECM text + circuit board SVG animation)
- [ ] Brands carousel (auto-scroll, pause on hover, 16 logos)
- [ ] Why Choose WMK (4-box grid: Expert Technicians, Modern Diagnostics, All Brands & EVs, Transparent Pricing)
- [ ] Testimonials (3 Google-style review cards)
- [ ] Contact CTA banner (yellow bg, phone + WhatsApp)

### 1.6 Services Pages
- [ ] `/services` page — hero, breadcrumb, full grid of 11 service cards
- [ ] `/services/[slug]` dynamic page template:
  - Hero (service name, location, CTA)
  - "What Is This Service?" (300–400 words, keyword-rich)
  - "Signs You Need This Service" (5-item list)
  - "Our Process" (4-step flow: Diagnose → Quote → Repair → Test)
  - "Brands We Cover" (relevant logo subset)
  - FAQ Accordion (4–6 questions, schema-ready)
  - Contact CTA (phone + WhatsApp + address)
  - Service + FAQ JSON-LD schemas
- [ ] Create 12 service detail pages with unique content:
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

### 1.7 Brands Pages
- [ ] `/brands` page — intro, brand grid with logos, model examples, links
- [ ] `/brands/[slug]` dynamic page:
  - Brand logo, specific services, certifications
  - Targeted at long-tail keywords (e.g., "Tesla repair Dubai", "BMW ECU programming Dubai")
  - Related services section
  - Contact CTA
- [ ] Create 16 brand pages (Tesla, BYD, BMW, Bentley, RAM, Ford, Jetour, Nissan, Toyota, Honda, Mazda, Audi, Infiniti, Mitsubishi, Kia, Hyundai)

### 1.8 About Page (`/about`)
- [ ] Company story (founded, licensed, Ras Al Khor location)
- [ ] Team section (placeholder for staff photos + names/titles)
- [ ] Certifications & trade license mention
- [ ] Workshop tour (photo gallery grid)
- [ ] Mission statement (EN + AR side-by-side)

### 1.9 Contact Page (`/contact`)
- [ ] Google Maps embed (Ras Al Khor Industrial Area 2, Street 18)
- [ ] Contact form (Name, Phone, Car Brand, Service Needed, Message)
- [ ] Click-to-call button
- [ ] WhatsApp link
- [ ] Working hours table
- [ ] Full address (EN + AR)

### 1.10 Arabic (RTL) Support
- [ ] Configure next-intl for EN/AR routing
- [ ] Create `/ar` route group (mirrored pages)
- [ ] Implement RTL layout flip (Tailwind `rtl:` utilities)
- [ ] Translate all UI text, service names, CTAs to Arabic
- [ ] Test RTL on all pages (hero, nav, cards, footer)
- [ ] Set `<html lang="ar" dir="rtl">` on Arabic pages

### 1.11 SEO & Technical
- [ ] Generate `sitemap.xml` (Next.js 16 `generateSitemap()`)
- [ ] Create `robots.txt`
- [ ] Add LocalBusiness JSON-LD to root layout
- [ ] Add Service JSON-LD to each `/services/[slug]` page
- [ ] Add FAQ JSON-LD to each service page
- [ ] Implement `generateMetadata()` for all pages (title, description, OG tags)
- [ ] Add canonical URLs
- [ ] Add hreflang tags for EN/AR alternates
- [ ] Optimize images with `next/image` (priority on hero, lazy elsewhere)
- [ ] Add alt text to all images (include location + service keywords)
- [ ] Test Core Web Vitals (LCP < 2.5s, CLS < 0.1, FID < 100ms)
- [ ] Verify page load < 3s on 4G mobile

### 1.12 Accessibility & Performance
- [ ] Ensure WCAG 2.1 AA compliance
- [ ] Verify color contrast (yellow #F5C518 on dark #1E2128 = 9.7:1 ✓)
- [ ] Add `:focus-visible` outlines on interactive elements
- [ ] Add `aria-label` on icon-only buttons
- [ ] Add skip-to-content link
- [ ] Implement `prefers-reduced-motion` media query
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit (target: 90+ scores)

---

## Phase 2: Extended Features (Admin, Blog, Analytics)

### 2.1 Admin Panel (`/admin`)

#### 2.1.1 Admin Authentication
- [ ] Set up NextAuth.js or simple JWT auth
- [ ] Create login page (`/admin/login`)
- [ ] Implement session management (cookies/tokens)
- [ ] Protect `/admin` routes with middleware
- [ ] Create logout functionality

#### 2.1.2 Admin Dashboard
- [ ] Create `/admin` dashboard (overview stats, quick actions)
- [ ] Display total services, blog posts, contact submissions, analytics summary
- [ ] Add navigation sidebar (Services, Blog, Contacts, Analytics, Settings)

#### 2.1.3 Service Management
- [ ] `/admin/services` — list all 12 services
- [ ] `/admin/services/[id]/edit` — edit service details (name, description, FAQ, brands)
- [ ] Add/edit/delete service functionality
- [ ] Form validation and error handling
- [ ] Save to database (Prisma + PostgreSQL or MongoDB)

#### 2.1.4 Blog Management
- [ ] `/admin/blog` — list all blog posts
- [ ] `/admin/blog/create` — create new post (title, slug, content, category, featured image, meta description)
- [ ] `/admin/blog/[id]/edit` — edit existing post
- [ ] Add/edit/delete blog post functionality
- [ ] Rich text editor (Tiptap or similar)
- [ ] Image upload to `/public/blog/`
- [ ] Publish/draft status toggle
- [ ] Schedule publish date (optional)

#### 2.1.5 Contact Submissions
- [ ] `/admin/contacts` — view all contact form submissions
- [ ] Display: name, phone, car brand, service, message, timestamp, status
- [ ] Mark as read/unread, replied, archived
- [ ] Export submissions to CSV
- [ ] Delete old submissions

#### 2.1.6 Settings
- [ ] `/admin/settings` — edit business info (phone, address, hours, email)
- [ ] Update social links (WhatsApp, Google Business Profile)
- [ ] Manage admin users (add/remove, roles)

### 2.2 Blog Page (`/blog`)

#### 2.2.1 Blog Listing
- [ ] `/blog` page — hero, category filter, search, pagination
- [ ] Display blog post cards (featured image, title, excerpt, category, date, read time)
- [ ] 6–9 posts per page
- [ ] Category filter (e.g., "ECM Tips", "Hybrid Battery", "Maintenance", "News")
- [ ] Search functionality (by title, content)
- [ ] "Latest Posts" sidebar widget
- [ ] Related posts section

#### 2.2.2 Blog Post Detail
- [ ] `/blog/[slug]` dynamic page
- [ ] Post header (title, featured image, author, date, read time, category)
- [ ] Rich text content (headings, paragraphs, lists, code blocks, images)
- [ ] Table of contents (auto-generated from H2/H3)
- [ ] Author bio (optional)
- [ ] Related posts (3–4 similar category posts)
- [ ] Share buttons (WhatsApp, Facebook, Twitter, LinkedIn)
- [ ] Comment section (optional, Disqus or custom)
- [ ] Blog post JSON-LD schema (Article, BreadcrumbList)

#### 2.2.3 Blog SEO
- [ ] Generate metadata for each post (title, description, OG image)
- [ ] Add canonical URLs
- [ ] Add hreflang for EN/AR blog posts
- [ ] Create `/blog/sitemap.xml` (separate from main sitemap)
- [ ] Target long-tail keywords (e.g., "How to maintain hybrid battery Dubai", "ECM repair tips")
- [ ] Internal linking to service pages

#### 2.2.4 Blog Content Strategy
- [ ] Create 10–15 initial blog posts:
  - "ECM Repair: What You Need to Know"
  - "Hybrid Battery Maintenance Tips"
  - "Why Online Car Programming is Safe"
  - "ABS Warning Light: What It Means"
  - "Tesla Repair in Dubai: Complete Guide"
  - "BYD Battery Replacement: Cost & Timeline"
  - "Gear Programming: FAQ"
  - "Car AC Repair: Common Issues"
  - "Electrical Repair: Symptoms & Solutions"
  - "Body Work & Painting: Process Explained"
  - "Tyre Fitting: Best Practices"
  - "Oil Change: Frequency & Benefits"
  - "Radiator Repair: Signs of Failure"
  - "Car Detailing: DIY vs. Professional"
  - "WMK Workshop Tour: Behind the Scenes"

### 2.3 Analytics Dashboard (`/analytics`)

#### 2.3.1 Analytics Setup
- [ ] Integrate Google Analytics 4 (GA4)
- [ ] Set up conversion tracking (phone clicks, WhatsApp clicks, contact form submissions)
- [ ] Create custom events (service page views, blog reads, brand page views)
- [ ] Set up Google Search Console integration

#### 2.3.2 Analytics Dashboard UI
- [ ] `/analytics` page (protected, admin-only)
- [ ] Display key metrics:
  - Total visitors (this month, last month, YoY)
  - Page views by page (home, services, blog, brands)
  - Traffic source (organic, direct, referral, social)
  - Device breakdown (mobile, desktop, tablet)
  - Top keywords (from GSC)
  - Conversion rate (phone clicks, WhatsApp clicks, form submissions)
  - Service popularity (most viewed services)
  - Blog performance (most read posts, avg read time)
  - Geographic breakdown (Dubai, UAE, international)

#### 2.3.3 Analytics Charts & Visualizations
- [ ] Line chart: visitors over time (30-day, 90-day, 1-year views)
- [ ] Pie chart: traffic source breakdown
- [ ] Bar chart: top pages by views
- [ ] Bar chart: top services by views
- [ ] Bar chart: top blog posts by reads
- [ ] Table: conversion funnel (page view → phone click → contact form)
- [ ] Heatmap: user behavior on homepage (optional, Hotjar integration)

#### 2.3.4 Analytics Data Export
- [ ] Export reports to PDF (monthly, quarterly, annual)
- [ ] Export data to CSV (for further analysis)
- [ ] Email scheduled reports (weekly/monthly digest)

#### 2.3.5 Custom Metrics
- [ ] Track phone number clicks (tel: links)
- [ ] Track WhatsApp button clicks
- [ ] Track contact form submissions (name, service, timestamp)
- [ ] Track service page time-on-page
- [ ] Track blog post read completion rate
- [ ] Track brand page views

### 2.4 Database Setup
- [ ] Choose database (PostgreSQL + Prisma, or MongoDB + Mongoose)
- [ ] Create schemas:
  - `Service` (id, name_en, name_ar, slug, description, faq, brands, createdAt, updatedAt)
  - `BlogPost` (id, title, slug, content, excerpt, category, featured_image, author, published, publishedAt, createdAt, updatedAt)
  - `ContactSubmission` (id, name, phone, carBrand, service, message, status, createdAt)
  - `AdminUser` (id, email, password_hash, role, createdAt, updatedAt)
  - `AnalyticsEvent` (id, event_type, page, user_id, timestamp)
- [ ] Set up migrations
- [ ] Create seed data (12 services, 16 brands, sample blog posts)

### 2.5 API Routes
- [ ] `POST /api/contact` — handle contact form submissions
- [ ] `GET /api/services` — fetch all services (public)
- [ ] `GET /api/services/[id]` — fetch single service
- [ ] `POST /api/admin/services` — create service (admin)
- [ ] `PUT /api/admin/services/[id]` — update service (admin)
- [ ] `DELETE /api/admin/services/[id]` — delete service (admin)
- [ ] `GET /api/blog` — fetch all blog posts (public)
- [ ] `GET /api/blog/[slug]` — fetch single blog post
- [ ] `POST /api/admin/blog` — create blog post (admin)
- [ ] `PUT /api/admin/blog/[id]` — update blog post (admin)
- [ ] `DELETE /api/admin/blog/[id]` — delete blog post (admin)
- [ ] `GET /api/admin/contacts` — fetch contact submissions (admin)
- [ ] `GET /api/analytics` — fetch analytics data (admin)

### 2.6 Email Integration
- [ ] Set up email service (SendGrid, Resend, or Nodemailer)
- [ ] Send confirmation email when contact form submitted
- [ ] Send admin notification email for new contact submissions
- [ ] Send weekly analytics digest to admin

---

## Phase 3: Optimization & Launch

### 3.1 Performance Optimization
- [ ] Implement image optimization (WebP, responsive sizes)
- [ ] Enable gzip compression
- [ ] Minify CSS/JS
- [ ] Implement code splitting
- [ ] Cache static assets (1 year)
- [ ] Cache dynamic content (5 min)
- [ ] Use CDN for images and static files
- [ ] Lazy load below-the-fold images
- [ ] Defer non-critical JavaScript

### 3.2 Security
- [ ] Implement CSRF protection
- [ ] Sanitize user inputs (contact form, blog comments)
- [ ] Use HTTPS only
- [ ] Set security headers (CSP, X-Frame-Options, X-Content-Type-Options)
- [ ] Rate limit API endpoints
- [ ] Validate file uploads (blog images)
- [ ] Implement admin session timeout

### 3.3 Testing
- [ ] Unit tests for components (Jest + React Testing Library)
- [ ] Integration tests for API routes
- [ ] E2E tests for critical user flows (contact form, blog navigation)
- [ ] Accessibility testing (axe, WAVE)
- [ ] Performance testing (Lighthouse, WebPageTest)
- [ ] Mobile responsiveness testing (all breakpoints)

### 3.4 Monitoring & Analytics
- [ ] Set up error tracking (Sentry)
- [ ] Monitor API performance
- [ ] Track user behavior (GA4)
- [ ] Set up uptime monitoring
- [ ] Create alerts for critical errors

### 3.5 Launch Checklist
- [ ] All 12 service pages live with unique 400+ word content
- [ ] 16 brand pages live
- [ ] Blog with 10–15 initial posts
- [ ] Admin panel fully functional
- [ ] Analytics dashboard live
- [ ] LocalBusiness JSON-LD on every page
- [ ] Service JSON-LD on each service page
- [ ] FAQ JSON-LD on each service page
- [ ] Blog post JSON-LD on each blog post
- [ ] Sitemap.xml verified in Google Search Console
- [ ] Google Analytics 4 + Google Search Console set up
- [ ] Google Business Profile linked to domain
- [ ] Mobile speed test (PageSpeed Insights) > 80 score
- [ ] WhatsApp button tested on mobile
- [ ] All phone numbers are click-to-call tel: links
- [ ] Arabic version of homepage, contact, 3 top services, blog live
- [ ] Open Graph images generated for all major pages
- [ ] Submit to local UAE directories (Dubai Yellow Pages, Dubizzle, ServiceMyCar)
- [ ] SSL certificate installed
- [ ] Domain DNS configured
- [ ] Email forwarding set up
- [ ] Backup strategy implemented

---

## Dependencies Summary

### Core
- next@16.0.0
- react@19.0.0
- typescript@5.4
- tailwindcss@4.0.0 (v4 uses postcss.config.mjs only)

### UI & Animation
- framer-motion@11.0
- lucide-react@0.383
- @tailwindcss/typography@0.5

### i18n & Routing
- next-intl@3.0
- react-intersection-observer@9.0

### Admin & Database
- next-auth@5.0 (or similar auth)
- prisma@5.0 (or mongoose)
- @prisma/client@5.0

### Blog & Rich Text
- @tiptap/react@2.0 (or similar editor)
- @tiptap/starter-kit@2.0

### Analytics & Monitoring
- @google-analytics/data@11.0 (GA4 API)
- sentry/nextjs@7.0 (error tracking)

### Email
- resend@3.0 (or sendgrid, nodemailer)

### Testing
- jest@29.0
- @testing-library/react@14.0
- @testing-library/jest-dom@6.0
- cypress@13.0 (E2E)

---

## Timeline Estimate
- **Phase 1 (Core):** 4–6 weeks
- **Phase 2 (Admin/Blog/Analytics):** 3–4 weeks
- **Phase 3 (Optimization/Launch):** 1–2 weeks
- **Total:** 8–12 weeks

---

## Notes
- Tailwind CSS v4 uses `postcss.config.mjs` (no TypeScript config file)
- All timestamps in UTC
- Phone: +971 55 476 2284 (always click-to-call)
- WhatsApp: https://wa.me/971554762284
- NAP: WMK Auto Repairing Garage LLC, 18 Street, Ras Al Khor Industrial Area 2, Dubai, UAE
- Coordinates: 25.1972, 55.3586
- Hours: Mon–Thu, Sat–Sun: 08:00–20:00 (closed Friday)
