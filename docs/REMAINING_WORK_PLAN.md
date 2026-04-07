# WMK Auto Garage — Remaining Work Plan (2026-04-07)

## Overview
This document outlines all remaining tasks to complete the WMK Auto Garage website from current state (Phase 1 & 2 core complete) through full launch readiness (Phase 3).

**Current Status:** Phase 1 & 2 core features complete. Phase 2 extensions (blog content, email, analytics UI) and Phase 3 (optimization, security, testing, launch) remain.

**Estimated Timeline:** 4-6 weeks to full launch readiness

---

## Phase 2 Extensions (2-3 weeks)

### 2.1 Blog Content Creation (1 week)

**Objective:** Create 10-15 SEO-optimized blog posts to drive organic traffic and establish authority.

#### Blog Posts to Create
1. **"ECM Repair: What You Need to Know"**
   - Keywords: ECM repair Dubai, ECU programming, engine control module
   - Length: 1,200-1,500 words
   - Sections: What is ECM, signs of failure, repair process, cost, FAQ
   - Internal links: `/services/ecm-repair`, `/brands/tesla`, `/brands/bmw`

2. **"Hybrid Battery Maintenance Tips"**
   - Keywords: Hybrid battery repair Dubai, battery maintenance, Tesla battery
   - Length: 1,000-1,200 words
   - Sections: Battery basics, maintenance schedule, warning signs, replacement cost
   - Internal links: `/services/hybrid-battery`, `/brands/tesla`, `/brands/byd`

3. **"Why Online Car Programming is Safe"**
   - Keywords: Online car programming Dubai, remote ECM programming, safe programming
   - Length: 900-1,100 words
   - Sections: How it works, security measures, benefits, common concerns
   - Internal links: `/services/car-programming`, `/services/ecm-repair`

4. **"ABS Warning Light: What It Means"**
   - Keywords: ABS repair Dubai, ABS warning light, brake system
   - Length: 800-1,000 words
   - Sections: What is ABS, warning signs, repair process, cost
   - Internal links: `/services/abs-airbag-repair`

5. **"Tesla Repair in Dubai: Complete Guide"**
   - Keywords: Tesla repair Dubai, Tesla ECM repair, Tesla battery
   - Length: 1,500-1,800 words
   - Sections: Tesla-specific issues, repair options, cost, warranty
   - Internal links: `/brands/tesla`, `/services/ecm-repair`, `/services/hybrid-battery`

6. **"BYD Battery Replacement: Cost & Timeline"**
   - Keywords: BYD battery replacement Dubai, BYD repair, hybrid battery
   - Length: 1,000-1,200 words
   - Sections: BYD models, battery types, replacement process, cost, timeline
   - Internal links: `/brands/byd`, `/services/hybrid-battery`

7. **"Gear Programming: FAQ"**
   - Keywords: Gear programming Dubai, automatic transmission programming
   - Length: 900-1,100 words
   - Sections: What is gear programming, benefits, process, FAQ
   - Internal links: `/services/car-programming`

8. **"Car AC Repair: Common Issues & Solutions"**
   - Keywords: Car AC repair Dubai, air conditioning repair, AC maintenance
   - Length: 1,000-1,200 words
   - Sections: Common AC problems, diagnosis, repair options, maintenance
   - Internal links: `/services/ac-repair`

9. **"Electrical Repair: Symptoms & Solutions"**
   - Keywords: Car electrical repair Dubai, electrical system diagnosis
   - Length: 900-1,100 words
   - Sections: Common electrical issues, diagnosis process, repair solutions
   - Internal links: `/services/electrical-repair`

10. **"Body Work & Painting: Process Explained"**
    - Keywords: Car body work Dubai, car painting, denting repair
    - Length: 1,000-1,200 words
    - Sections: Types of damage, repair process, painting techniques, timeline
    - Internal links: `/services/body-work`

11. **"Tyre Fitting: Best Practices & Benefits"**
    - Keywords: Tyre fitting Dubai, tyre replacement, wheel alignment
    - Length: 800-1,000 words
    - Sections: When to replace, fitting process, maintenance tips
    - Internal links: `/services/tyre-fitting`

12. **"Oil Change: Frequency & Benefits"**
    - Keywords: Oil change Dubai, car maintenance, engine oil
    - Length: 700-900 words
    - Sections: Oil types, change frequency, benefits, DIY vs professional
    - Internal links: `/services/oil-change`

13. **"Radiator Repair: Signs of Failure"**
    - Keywords: Radiator repair Dubai, cooling system, overheating
    - Length: 800-1,000 words
    - Sections: Radiator function, failure signs, repair process, cost
    - Internal links: `/services/radiator-exhaust`

14. **"Car Detailing: DIY vs. Professional"**
    - Keywords: Car detailing Dubai, car cleaning, professional detailing
    - Length: 900-1,100 words
    - Sections: Detailing benefits, DIY tips, professional services, cost
    - Internal links: `/services/detailing`

15. **"WMK Workshop Tour: Behind the Scenes"**
    - Keywords: Auto repair workshop Dubai, WMK garage, professional service
    - Length: 1,000-1,200 words
    - Sections: Workshop overview, equipment, team, certifications, process
    - Internal links: `/about`, `/services`

#### Implementation Steps
- [ ] Create blog posts in admin panel (or directly in database)
- [ ] Add featured images for each post (1200x630px for OG)
- [ ] Set publish dates (stagger over 2-3 weeks for SEO)
- [ ] Add internal links to service/brand pages
- [ ] Verify JSON-LD Article schema on each post
- [ ] Test blog post pages for mobile responsiveness

---

### 2.2 Email Integration (3-4 days)

**Objective:** Send transactional emails for contact form submissions and admin notifications.

#### Email Templates to Create
1. **Contact Form Confirmation** (sent to user)
   - Subject: "We received your message - WMK Auto Garage"
   - Content: Thank you message, expected response time, contact info
   - Template: HTML + plain text

2. **Admin Notification** (sent to admin)
   - Subject: "New contact form submission from [Name]"
   - Content: Full submission details, link to admin panel
   - Template: HTML + plain text

3. **Weekly Analytics Digest** (optional, sent to admin)
   - Subject: "WMK Analytics Report - Week of [Date]"
   - Content: Key metrics, top pages, conversions, traffic sources
   - Template: HTML with charts/tables

#### Implementation Steps
- [ ] Choose email service (Resend, SendGrid, or Nodemailer)
- [ ] Set up API keys and environment variables
- [ ] Create email templates (HTML)
- [ ] Implement `POST /api/email/contact-confirmation`
- [ ] Implement `POST /api/email/admin-notification`
- [ ] Test email delivery (use test email addresses)
- [ ] Add email logging to database
- [ ] Set up email retry logic for failed sends

#### Files to Create/Modify
- `lib/email.ts` — Email service wrapper
- `app/api/email/contact-confirmation/route.ts` — Confirmation email endpoint
- `app/api/email/admin-notification/route.ts` — Admin notification endpoint
- `emails/` — Email template directory
  - `ContactConfirmation.tsx` — React email template
  - `AdminNotification.tsx` — React email template

---

### 2.3 Admin Contact Submissions UI (3-4 days)

**Objective:** Create admin interface to view, manage, and respond to contact form submissions.

#### Features
- [ ] `/admin/contacts` — List all submissions with pagination
- [ ] Display columns: Name, Phone, Service, Date, Status, Actions
- [ ] Filter by status (New, Read, Replied, Archived)
- [ ] Search by name or phone
- [ ] Mark as read/unread
- [ ] Mark as replied
- [ ] Archive/delete submissions
- [ ] Export to CSV
- [ ] View full submission details in modal

#### Implementation Steps
- [ ] Create `ContactSubmission` Prisma model (if not exists)
- [ ] Create `/admin/contacts` page component
- [ ] Create `/admin/contacts/[id]` detail view
- [ ] Implement filter/search functionality
- [ ] Add bulk actions (mark as read, archive, delete)
- [ ] Create CSV export function
- [ ] Add pagination (10-20 per page)
- [ ] Style with Tailwind (match admin design)

#### Files to Create/Modify
- `app/admin/contacts/page.tsx` — Contacts list
- `app/admin/contacts/[id]/page.tsx` — Contact detail
- `components/admin/ContactsTable.tsx` — Table component
- `lib/admin.ts` — Admin utilities (export, filter, etc.)

---

### 2.4 Analytics Dashboard Enhancement (4-5 days)

**Objective:** Create custom analytics tracking and admin dashboard to monitor key metrics.

#### Metrics to Track
1. **Page Views**
   - Homepage, services, brands, blog, contact
   - Device type (mobile, desktop, tablet)
   - Referrer source (organic, direct, social, referral)

2. **Conversions**
   - Phone clicks (tel: links)
   - WhatsApp button clicks
   - Contact form submissions
   - Conversion rate (visitors → conversions)

3. **Service Analytics**
   - Most viewed services
   - Service page time-on-page
   - Service page bounce rate

4. **Blog Analytics**
   - Most read posts
   - Average read time
   - Read completion rate
   - Blog traffic source

5. **Geographic Data**
   - Top countries/cities
   - Local vs international traffic

#### Implementation Steps
- [ ] Create custom event tracking in Vercel Analytics
- [ ] Add event tracking to phone links: `gtag('event', 'phone_click')`
- [ ] Add event tracking to WhatsApp button: `gtag('event', 'whatsapp_click')`
- [ ] Add event tracking to contact form: `gtag('event', 'contact_form_submit')`
- [ ] Create `AnalyticsEvent` Prisma model for custom events
- [ ] Create `/admin/analytics` dashboard page
- [ ] Fetch data from Google Analytics 4 API
- [ ] Create chart components (line, bar, pie)
- [ ] Display key metrics in cards
- [ ] Add date range selector (7d, 30d, 90d, 1y)
- [ ] Add export to PDF/CSV

#### Files to Create/Modify
- `app/admin/analytics/page.tsx` — Analytics dashboard
- `components/admin/AnalyticsChart.tsx` — Chart component
- `components/admin/MetricCard.tsx` — Metric card component
- `lib/analytics.ts` — Analytics utilities (GA4 API calls)
- `lib/ga4.ts` — Google Analytics 4 integration

#### Google Analytics 4 Setup
- [ ] Create GA4 property in Google Analytics
- [ ] Add measurement ID to `.env.local`
- [ ] Install `@google-analytics/data` package
- [ ] Set up service account for GA4 API access
- [ ] Create API credentials JSON file
- [ ] Test GA4 data fetching

---

## Phase 3: Optimization & Launch (2-3 weeks)

### 3.1 Performance Optimization (3-4 days)

**Objective:** Achieve Lighthouse scores of 90+ and Core Web Vitals targets.

#### Tasks
- [ ] Audit current performance with Lighthouse
- [ ] Optimize images (WebP/AVIF, responsive sizes)
- [ ] Implement lazy loading for below-fold images
- [ ] Enable gzip compression
- [ ] Minify CSS/JS (Next.js does this by default)
- [ ] Implement code splitting for large components
- [ ] Set cache headers for static assets (1 year)
- [ ] Set cache headers for dynamic content (5 min)
- [ ] Defer non-critical JavaScript
- [ ] Optimize font loading (font-display: swap)
- [ ] Test Core Web Vitals (LCP < 2.5s, CLS < 0.1, FID < 100ms)
- [ ] Test mobile speed (PageSpeed Insights > 80)

#### Files to Modify
- `next.config.ts` — Image optimization, compression
- `app/globals.css` — Font loading optimization
- `vercel.json` — Cache headers configuration

---

### 3.2 Security Hardening (3-4 days)

**Objective:** Implement security best practices and protect against common vulnerabilities.

#### Tasks
- [ ] Implement CSRF protection on forms
- [ ] Sanitize user inputs (contact form, blog comments)
- [ ] Set security headers (CSP, X-Frame-Options, X-Content-Type-Options)
- [ ] Enable HTTPS only (Vercel default)
- [ ] Rate limit API endpoints (contact form, auth)
- [ ] Validate file uploads (blog images)
- [ ] Implement admin session timeout (15 min)
- [ ] Add password hashing (bcrypt) for admin users
- [ ] Implement CORS properly
- [ ] Add input validation on all forms
- [ ] Sanitize HTML in blog content (DOMPurify)

#### Files to Create/Modify
- `middleware.ts` — Security headers, CSRF protection
- `lib/security.ts` — Security utilities (sanitize, validate)
- `app/api/contact/route.ts` — Input validation, rate limiting
- `app/admin/auth/route.ts` — Session timeout, password hashing

---

### 3.3 Testing (4-5 days)

**Objective:** Implement comprehensive testing for reliability and quality assurance.

#### Unit Tests (Jest + React Testing Library)
- [ ] Test ServiceCard component
- [ ] Test BrandLogo component
- [ ] Test ContactForm component
- [ ] Test FAQAccordion component
- [ ] Test utility functions (schema generation, formatting)

#### Integration Tests
- [ ] Test contact form submission flow
- [ ] Test blog post creation/editing
- [ ] Test service page data loading
- [ ] Test authentication flow

#### E2E Tests (Cypress)
- [ ] Test homepage navigation
- [ ] Test contact form submission
- [ ] Test blog post reading
- [ ] Test admin login/logout
- [ ] Test service page filtering

#### Accessibility Tests
- [ ] Run axe accessibility audit
- [ ] Test keyboard navigation
- [ ] Test screen reader compatibility
- [ ] Verify color contrast (WCAG AA)

#### Performance Tests
- [ ] Run Lighthouse audit
- [ ] Test Core Web Vitals
- [ ] Test mobile responsiveness
- [ ] Test on slow 4G connection

#### Files to Create
- `__tests__/components/` — Component tests
- `__tests__/utils/` — Utility tests
- `cypress/e2e/` — E2E tests
- `jest.config.js` — Jest configuration
- `cypress.config.js` — Cypress configuration

---

### 3.4 Monitoring & Error Tracking (2-3 days)

**Objective:** Set up monitoring to catch and track errors in production.

#### Tasks
- [ ] Install Sentry for error tracking
- [ ] Configure Sentry in Next.js
- [ ] Set up error alerts (email/Slack)
- [ ] Create error boundary components
- [ ] Log API errors to Sentry
- [ ] Monitor performance metrics
- [ ] Set up uptime monitoring (Pingdom or similar)
- [ ] Create alerts for critical errors

#### Files to Create/Modify
- `sentry.client.config.ts` — Client-side Sentry config
- `sentry.server.config.ts` — Server-side Sentry config
- `components/ErrorBoundary.tsx` — Error boundary component
- `.env.local` — Sentry DSN

---

### 3.5 Launch Checklist (1-2 days)

**Objective:** Verify all requirements before going live.

#### Content & SEO
- [ ] All 12 service pages live with 400+ word unique content
- [ ] All 16 brand pages live
- [ ] Blog with 10-15 initial posts published
- [ ] LocalBusiness JSON-LD on every page
- [ ] Service JSON-LD on each service page
- [ ] FAQ JSON-LD on each service page
- [ ] Blog post JSON-LD on each blog post
- [ ] Sitemap.xml verified in Google Search Console
- [ ] Robots.txt configured
- [ ] Canonical URLs set on all pages
- [ ] Hreflang tags for EN/AR alternates

#### Analytics & Tracking
- [ ] Google Analytics 4 set up and tracking
- [ ] Google Search Console verified
- [ ] Google Business Profile linked
- [ ] Conversion tracking configured (phone, WhatsApp, form)
- [ ] Vercel Analytics enabled (✓ done)

#### Technical
- [ ] SSL certificate installed and valid
- [ ] Domain DNS configured
- [ ] Email forwarding set up
- [ ] Backup strategy implemented
- [ ] Database backups automated
- [ ] Error tracking (Sentry) configured
- [ ] Uptime monitoring configured

#### Performance
- [ ] Lighthouse score > 90 (all pages)
- [ ] Mobile speed (PageSpeed Insights) > 80
- [ ] Core Web Vitals passing (LCP < 2.5s, CLS < 0.1, FID < 100ms)
- [ ] Page load < 3s on 4G mobile

#### Functionality
- [ ] Contact form working and sending emails
- [ ] Phone links clickable (tel:)
- [ ] WhatsApp button working
- [ ] Admin panel fully functional
- [ ] Blog CRUD operations working
- [ ] Analytics dashboard displaying data
- [ ] All pages responsive on mobile

#### Security
- [ ] HTTPS enforced
- [ ] Security headers set
- [ ] CSRF protection enabled
- [ ] Input validation on all forms
- [ ] Admin session timeout working
- [ ] Rate limiting on API endpoints

#### Directories & Listings
- [ ] Submit to Google Business Profile
- [ ] Submit to Dubai Yellow Pages
- [ ] Submit to Dubizzle
- [ ] Submit to ServiceMyCar
- [ ] Submit to local UAE directories

---

## Implementation Priority & Timeline

### Week 1: Blog & Email (High Priority)
- **Days 1-5:** Create 10-15 blog posts
- **Days 3-5:** Implement email integration
- **Deliverable:** Blog content live, contact form emails working

### Week 2: Admin & Analytics (High Priority)
- **Days 1-2:** Build contact submissions admin UI
- **Days 3-5:** Enhance analytics dashboard
- **Deliverable:** Admin panel fully functional, analytics tracking

### Week 3: Security & Testing (Medium Priority)
- **Days 1-2:** Security hardening
- **Days 3-5:** Implement unit & E2E tests
- **Deliverable:** Security audit passed, test suite in place

### Week 4: Optimization & Monitoring (Medium Priority)
- **Days 1-2:** Performance optimization
- **Days 3-4:** Set up error tracking (Sentry)
- **Days 5:** Final testing & bug fixes
- **Deliverable:** Lighthouse 90+, monitoring live

### Week 5: Launch Preparation (High Priority)
- **Days 1-3:** Complete launch checklist
- **Days 4-5:** Final QA and deployment
- **Deliverable:** Website live and indexed

---

## Dependencies & Prerequisites

### External Services
- [ ] Google Analytics 4 account
- [ ] Google Search Console access
- [ ] Google Business Profile
- [ ] Email service (Resend, SendGrid, or Nodemailer)
- [ ] Sentry account (error tracking)
- [ ] Vercel deployment (already set up)

### Environment Variables
```
# Email Service
RESEND_API_KEY=xxx
ADMIN_EMAIL=admin@wmkautorepairing.com

# Google Analytics
NEXT_PUBLIC_GA_ID=G-xxxxxxxxxx

# Sentry
SENTRY_AUTH_TOKEN=xxx
NEXT_PUBLIC_SENTRY_DSN=xxx

# Admin
NEXTAUTH_SECRET=xxx
NEXTAUTH_URL=https://wmkautorepairing.com
```

---

## Success Metrics

### Traffic & Engagement
- 500+ monthly organic visitors (Month 1)
- 1,000+ monthly organic visitors (Month 3)
- 5+ contact form submissions/month
- 10+ WhatsApp inquiries/month

### SEO
- Rank for 20+ target keywords
- Rank in top 3 for "ECM repair Dubai"
- Rank in top 5 for "car programming Dubai"
- 50+ backlinks from local directories

### Performance
- Lighthouse score: 90+
- Mobile speed: 80+
- Core Web Vitals: All passing
- Page load: < 2.5s average

### Conversions
- Contact form conversion rate: 2-3%
- Phone click rate: 5-8%
- WhatsApp click rate: 3-5%

---

## Notes & Considerations

1. **Blog Content:** Prioritize high-intent keywords (ECM repair, Tesla repair, hybrid battery)
2. **Email Deliverability:** Test with multiple email providers to ensure inbox placement
3. **Analytics:** Set up GA4 conversion goals before launch
4. **Security:** Use environment variables for all sensitive data
5. **Testing:** Test on real devices (iPhone, Android) before launch
6. **Backup:** Implement daily database backups
7. **Monitoring:** Set up alerts for critical errors and downtime

---

## Document History
- **2026-04-07:** Initial plan created
- **Status:** Ready for implementation
