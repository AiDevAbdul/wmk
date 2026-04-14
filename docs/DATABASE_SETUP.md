# Database Setup & Blog System

## PostgreSQL (Production)

**Provider:** PostgreSQL via Prisma Data Platform (db.prisma.io)

**Setup:**
1. Create PostgreSQL database on Prisma Data Platform
2. Set `DATABASE_URL` in Vercel environment variables
3. Migration lock: `prisma/migrations/migration_lock.toml` set to `postgresql`
4. Run `npm run seed` to populate admin user + 4 blog posts

**Connection String Format:**
```
postgres://user:password@db.prisma.io:5432/postgres?sslmode=require
```

## SQLite (Local Development)

**Setup:**
1. Set `DATABASE_URL="file:./prisma/dev.db"` in `.env.local`
2. Run `npx prisma db push` to sync schema
3. Run `npm run seed` to populate sample data

**Note:** Use `db push` instead of `migrate` for SQLite development.

## Database Schema

**Tables:**
- `admin_users` — Authentication (email, bcrypt hashed password, role)
- `blog_posts` — Content (title, slug, content, category, published, createdAt)
- `contact_submissions` — Form submissions (name, email, phone, message, createdAt)
- `analytics_events` — Tracking (event, page, timestamp)

## Blog System

### Public API Endpoints

```
GET /api/blog                    # List published posts
GET /api/blog/[slug]             # Single post detail
```

### Admin API Endpoints (Protected)

```
GET /api/admin/blog              # List all posts (paginated)
POST /api/admin/blog             # Create new post
GET /api/admin/blog/[id]         # Get post by ID
PUT /api/admin/blog/[id]         # Update post
DELETE /api/admin/blog/[id]      # Delete post
```

### Frontend Routes

```
/[locale]/blog                   # Blog list with search/filter
/[locale]/blog/[slug]            # Blog detail with markdown rendering
/admin/blog                      # Admin list (table view)
/admin/blog/[id]                 # Admin editor (create/edit)
```

### Features

- Markdown support via `marked` library
- Categories: News, ECM Tips, Hybrid Battery, Maintenance
- Slug-based URLs for SEO
- Published/draft status
- Timestamps (createdAt, updatedAt)

## Seeding

**File:** `prisma/seed.ts`

Supports both PostgreSQL and SQLite. Populates:
- Admin user: `admin@wmk.ae` / `WMK@Admin2024!`
- 4 sample blog posts with different categories

**Run:**
```bash
npm run seed
```

**Auto-seeding on Deployment:**
- Vercel runs `npm run seed` via build script
- Creates admin user + blog posts automatically
- No manual database setup needed

## Prisma Commands

```bash
npx prisma db push              # Sync schema (development)
npx prisma migrate dev          # Create migration (production)
npx prisma studio              # Open Prisma Studio GUI
npx prisma generate            # Generate Prisma Client
```

## Environment Variables

```
DATABASE_URL                    # PostgreSQL or SQLite connection string
NEXTAUTH_SECRET                 # JWT signing key
NEXTAUTH_URL                    # Production domain
```
