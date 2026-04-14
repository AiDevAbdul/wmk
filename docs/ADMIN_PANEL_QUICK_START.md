# WMK Admin Panel - Quick Reference Guide

## 🚀 Getting Started

### Access the Admin Panel
1. Navigate to `http://localhost:3000/admin` (local) or your production domain `/admin`
2. Login with credentials:
   - **Email**: admin@wmk.ae
   - **Password**: admin123

### First Time Setup
- The sidebar will be visible on desktop (collapsible)
- Mobile users get a floating action button for navigation
- All pages are protected - you'll be redirected to login if not authenticated

---

## 📊 Dashboard Overview

**Location**: `/admin`

The dashboard is your command center with:
- **4 Key Metrics**: Services, Blog Posts, Contacts, Page Views
- **Quick Actions**: Fast links to common tasks
- **System Status**: Real-time connection monitoring

**What you can do:**
- View overall statistics at a glance
- Jump to any section with one click
- Monitor system health

---

## 📝 Blog Management

### Blog List
**Location**: `/admin/blog`

**Features:**
- Search posts by title or slug
- Filter by category (News, ECM Tips, Hybrid Battery, Maintenance)
- Filter by status (Published, Draft)
- See publication date and status at a glance
- Edit or delete posts with one click

**Quick Actions:**
- Click the **New Post** button to create content
- Use search to find specific posts
- Status badges show if posts are published or drafts

### Create/Edit Blog Post
**Location**: `/admin/blog/new` or `/admin/blog/[id]`

**Fields:**
- **Title** (required) - Post headline
- **Slug** (required) - URL-friendly identifier (e.g., `my-post-title`)
- **Excerpt** - Short summary for previews
- **Category** - Choose from 4 categories
- **Content** - Full post body (Markdown supported)
- **Publish** - Toggle to publish immediately or save as draft

**Pro Tips:**
- Use the Preview button to see how your post looks
- Markdown formatting is fully supported
- Slugs should be lowercase with hyphens (no spaces)
- Save as draft to work on posts later

---

## 📞 Contact Management

**Location**: `/admin/contacts`

**Features:**
- View all contact form submissions
- Search by name or phone number
- Filter by status (New, Read, Replied, Archived)
- Export all contacts as CSV
- Mark submissions as read
- Delete submissions

**Status Meanings:**
- 🟡 **New** - Unread submission
- 🔵 **Read** - You've viewed it
- 🟢 **Replied** - You've responded
- ⚫ **Archived** - Stored for reference

**Quick Actions:**
- Click phone numbers to call directly
- Use search to find specific customers
- Export data for CRM or analysis
- Bulk select submissions (checkboxes)

---

## 📈 Analytics Dashboard

**Location**: `/admin/analytics`

**Features:**
- View key performance metrics
- Select date range (7d, 30d, 90d, 1y)
- See conversion rates and trends
- Track top-performing pages
- Monitor contact channel effectiveness

**Key Metrics:**
- **Page Views** - Total website visits
- **Phone Clicks** - Direct call button clicks
- **WhatsApp Clicks** - WhatsApp button interactions
- **Form Submissions** - Contact form entries
- **Conversion Rate** - Forms / Page Views %
- **Top Pages** - Most visited pages with traffic bars

**Use Cases:**
- Identify your best-performing pages
- Track which contact method customers prefer
- Monitor conversion trends over time
- Optimize marketing based on data

---

## 🔧 Services Management

**Location**: `/admin/services`

**Features:**
- View all services in a clean table
- Search by English or Arabic name
- Edit service details
- Delete services
- See service slugs for reference

**Columns:**
- English Name
- Arabic Name
- URL Slug
- Actions (Edit/Delete)

**Quick Actions:**
- Click Edit to modify service information
- Use search to find specific services
- Delete with confirmation to prevent accidents

---

## ⚙️ Settings

**Location**: `/admin/settings`

**Sections:**

### Contact Information
- Phone number
- WhatsApp link
- Email address

### Location & Coordinates
- Address (English)
- Address (Arabic)
- Latitude & Longitude (for maps)

### Business Hours
- Operating hours format
- Example: `Mon–Thu, Sat–Sun: 08:00–20:00 (Closed Friday)`

**Save Changes:**
- Click the **Save Settings** button
- You'll see a confirmation message
- Changes apply immediately

---

## 🎨 Design Features

### Visual Hierarchy
- **Yellow accents** (#F5C518) highlight important actions
- **Red indicators** show destructive actions (delete)
- **Green badges** indicate success/published status
- **Blue badges** show read/viewed status

### Animations
- Smooth page transitions
- Hover effects on interactive elements
- Loading spinners for data fetching
- Staggered animations on page load

### Responsive Design
- **Desktop**: Full sidebar navigation
- **Tablet**: Collapsible sidebar
- **Mobile**: Floating action button menu

---

## 🔐 Security & Best Practices

### Password Management
- Change your password regularly
- Use strong, unique passwords
- Never share your login credentials

### Data Protection
- All admin actions are logged
- Deletions require confirmation
- Sensitive data is encrypted

### Session Management
- You'll be logged out after inactivity
- Always log out when leaving your computer
- Use the Sign Out button in the header

---

## ⌨️ Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Focus Search | `Ctrl + K` (coming soon) |
| Submit Form | `Ctrl + Enter` |
| Escape Modal | `Esc` |

---

## 🆘 Troubleshooting

### Can't Login?
- Verify email and password are correct
- Check if Caps Lock is on
- Clear browser cache and try again
- Contact support if issue persists

### Page Not Loading?
- Refresh the page (F5)
- Check your internet connection
- Clear browser cache
- Try a different browser

### Changes Not Saving?
- Ensure all required fields are filled
- Check for error messages
- Verify your internet connection
- Try again in a few moments

### Missing Data?
- Refresh the page to reload data
- Check filters aren't hiding content
- Verify you have permission to view
- Contact administrator

---

## 📱 Mobile Tips

### Navigation
- Tap the floating button (bottom-right) to open menu
- Tap again to close menu
- Swipe back to return to previous page

### Forms
- Use large touch targets
- Scroll to see all fields
- Tap outside to close keyboards
- Use device's back button to cancel

### Performance
- Mobile pages load faster with less data
- Images are optimized for mobile
- Animations are smooth on modern devices

---

## 🚀 Advanced Features

### Search & Filter
- Search is real-time (no need to press Enter)
- Filters combine (AND logic)
- Clear filters to reset view

### Bulk Actions
- Select multiple items with checkboxes
- Perform actions on selected items
- Deselect all with header checkbox

### Export Data
- CSV format for spreadsheets
- Includes all visible columns
- Timestamps are included
- Use for backups or analysis

### Preview Mode
- Blog editor has preview toggle
- See exactly how posts will look
- Markdown renders in preview
- Switch back to edit anytime

---

## 📞 Support

**Need Help?**
- Check this guide first
- Review the full documentation in `/docs/ADMIN_PANEL_REDESIGN.md`
- Contact your administrator
- Check browser console for errors (F12)

**Report Issues:**
- Document the steps to reproduce
- Include browser and OS information
- Take screenshots if helpful
- Contact support with details

---

## 📚 Additional Resources

- **Full Documentation**: `/docs/ADMIN_PANEL_REDESIGN.md`
- **Project Setup**: `/CLAUDE.md`
- **Architecture Guide**: `/docs/architecture.md`
- **Development Guide**: `/docs/development.md`

---

**Last Updated**: 2026-04-14
**Version**: 1.0
**Status**: Production Ready ✅
