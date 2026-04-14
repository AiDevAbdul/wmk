# Blog System Documentation

## Overview
The WMK blog system provides a complete content management solution with public-facing blog pages and admin dashboard for creating, editing, and publishing articles.

## Database Schema

### BlogPost Table
```prisma
model BlogPost {
  id            String   @id @default(cuid())
  title         String
  slug          String   @unique
  content       String        // Markdown content
  excerpt       String        // Short preview
  category      String        // News, ECM Tips, Hybrid Battery, Maintenance
  featuredImage String?
  author        String   @default("WMK Team")
  published     Boolean  @default(false)
  publishedAt   DateTime?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  @@map("blog_posts")
}
```

## API Endpoints

### Public Endpoints

#### GET /api/blog
Returns list of published blog posts.

**Response:**
```json
[
  {
    "id": "cuid123",
    "title": "Understanding ECM Repair",
    "slug": "understanding-ecm-repair",
    "excerpt": "Learn what ECM repair is...",
    "category": "ECM Tips",
    "author": "WMK Team",
    "createdAt": "2026-04-14T00:00:00Z",
    "publishedAt": "2026-04-14T00:00:00Z",
    "published": true
  }
]
```

#### GET /api/blog/[slug]
Returns single published blog post with full content.

**Response:**
```json
{
  "id": "cuid123",
  "title": "Understanding ECM Repair",
  "slug": "understanding-ecm-repair",
  "content": "# Understanding ECM Repair\n\nEngine Control Modules...",
  "excerpt": "Learn what ECM repair is...",
  "category": "ECM Tips",
  "author": "WMK Team",
  "createdAt": "2026-04-14T00:00:00Z",
  "publishedAt": "2026-04-14T00:00:00Z",
  "published": true
}
```

### Admin Endpoints (Protected)

#### GET /api/admin/blog
Returns all blog posts (published and drafts).

**Auth:** Required (NextAuth session)

#### POST /api/admin/blog
Create new blog post.

**Request:**
```json
{
  "title": "New Article",
  "slug": "new-article",
  "content": "# Markdown content here",
  "excerpt": "Short preview",
  "category": "ECM Tips",
  "published": false
}
```

#### GET /api/admin/blog/[id]
Fetch single post for editing.

**Auth:** Required

#### PUT /api/admin/blog/[id]
Update blog post.

**Request:** Same as POST

#### DELETE /api/admin/blog/[id]
Delete blog post.

**Auth:** Required

## Frontend Routes

### Public Blog Pages

#### /[locale]/blog
Blog listing page with:
- Search functionality
- Category filtering (News, ECM Tips, Hybrid Battery, Maintenance)
- Grid layout (3 columns on desktop, responsive)
- Post cards with excerpt, date, category badge
- "Read More" links to detail pages

**Features:**
- Real-time search across title and excerpt
- Category filter buttons
- Loading state with spinner
- Empty state when no posts found
- CTA section with "Call Now" button

#### /[locale]/blog/[slug]
Blog detail page with:
- Full markdown content rendering
- Post metadata (date, author, category)
- Share button (native Web Share API)
- Back to blog link
- CTA section with contact buttons

**Features:**
- Markdown rendering via `marked` library
- Responsive typography
- Framer Motion animations
- Social sharing support
- Related content CTA

### Admin Pages

#### /admin/blog
Admin blog list with:
- Table view of all posts
- Title, category, status, date columns
- Edit and delete actions
- "New Post" button
- Published/Draft status badges

#### /admin/blog/new
Create new blog post form with:
- Title input
- Slug input (auto-generate from title)
- Excerpt textarea
- Category dropdown
- Content textarea (markdown)
- Published checkbox
- Save/Cancel buttons

#### /admin/blog/[id]
Edit existing blog post (same form as create).

## Seeding

### Seed File: prisma/seed.ts

The seed file automatically creates:

1. **Admin User**
   - Email: admin@wmk.ae
   - Password: admin123 (bcrypt hashed)
   - Role: admin

2. **Sample Blog Posts** (4 posts)
   - Understanding ECM Repair (ECM Tips)
   - Hybrid Battery Maintenance Tips (Hybrid Battery)
   - Car Programming Guide (ECM Tips)
   - Regular Maintenance Guide (Maintenance)

### Running Seed

**Local Development:**
```bash
npm run seed
```

**Production (Vercel):**
- Automatically runs during build via `package.json` build script
- Creates admin user + sample posts on first deployment

## Categories

| Category | Icon | Color | Use Case |
|----------|------|-------|----------|
| News | Zap | Blue | Company updates, industry news |
| ECM Tips | Wrench | Amber | Technical guides, repair tips |
| Hybrid Battery | Battery | Green | Battery maintenance, diagnostics |
| Maintenance | Wrench | Purple | General maintenance, service info |

## Markdown Support

Blog content supports full markdown syntax:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet list
- Another item

1. Numbered list
2. Another item

[Link text](https://example.com)

> Blockquote

`inline code`

\`\`\`
code block
\`\`\`
```

## Development Workflow

### Adding a New Blog Post

1. **Via Admin Dashboard:**
   - Login at `/[locale]/login` (admin@wmk.ae / admin123)
   - Navigate to `/admin/blog`
   - Click "New Post"
   - Fill in title, slug, excerpt, category, content
   - Check "Published" to make live
   - Click "Save Post"

2. **Via Database (Direct):**
   ```sql
   INSERT INTO blog_posts (id, title, slug, content, excerpt, category, author, published, publishedAt, createdAt, updatedAt)
   VALUES ('cuid123', 'Title', 'slug', 'content', 'excerpt', 'ECM Tips', 'WMK Team', true, NOW(), NOW(), NOW());
   ```

### Editing a Post

1. Go to `/admin/blog`
2. Click edit icon on desired post
3. Modify content
4. Click "Save Post"

### Publishing/Unpublishing

1. Edit post
2. Toggle "Published" checkbox
3. Save

Published posts appear on `/[locale]/blog` and are accessible via API.

## Database Setup

### PostgreSQL (Production)

```bash
# Sync schema
npx prisma db push

# Seed data
npm run seed
```

### SQLite (Local Development)

```bash
# Update .env
DATABASE_URL="file:./prisma/dev.db"

# Sync schema
npx prisma db push

# Seed data
npm run seed
```

## Troubleshooting

### Blog posts not showing on public page

1. Check if posts are marked as `published: true`
2. Verify API endpoint: `GET /api/blog` returns data
3. Check browser console for fetch errors
4. Verify database connection in `.env`

### Admin login not working

1. Verify admin user exists: `SELECT * FROM admin_users WHERE email='admin@wmk.ae';`
2. Check NEXTAUTH_SECRET in `.env`
3. Clear browser cookies and try again
4. Check `/api/auth/signin` for errors

### Markdown not rendering

1. Verify `marked` library is installed: `npm list marked`
2. Check content is valid markdown
3. Verify `dangerouslySetInnerHTML` is used in component
4. Check browser console for XSS warnings

### Database connection errors

1. Verify DATABASE_URL in `.env`
2. For PostgreSQL: Check host, port, credentials
3. For SQLite: Check file path exists
4. Run `npx prisma db push` to sync schema
5. Run `npm run seed` to populate data

## Performance Optimization

- Blog list uses client-side search (no server calls)
- Category filtering is instant (no API calls)
- Markdown rendering happens on client
- Images should use `next/image` for optimization
- Consider caching blog posts in Redis for high traffic

## Security Considerations

- Admin endpoints protected by NextAuth
- Blog content sanitized via Prisma ORM
- Markdown rendered safely (no script injection)
- Slug validation prevents path traversal
- Rate limiting recommended on contact form

## Future Enhancements

- [ ] Blog post comments system
- [ ] Related posts suggestions
- [ ] Reading time estimate
- [ ] Social media sharing cards
- [ ] Email newsletter subscription
- [ ] Blog post analytics (views, engagement)
- [ ] Multi-author support with author profiles
- [ ] Blog post scheduling (publish at specific time)
- [ ] Featured image upload and optimization
- [ ] SEO meta tags per post
