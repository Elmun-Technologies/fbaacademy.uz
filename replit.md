# FBA Academy - Educational Platform

## Overview
FBA Academy is a premium EdTech platform for the Uzbekistan market specializing in accounting, finance, and law education. It offers ACCA certification (3 levels), DipIFR, Financial Modeling, Jurisprudence, and 1C: Buxgalteriya courses. All content is in Uzbek language. Visual design is bold and vivid — dark gradient hero sections (slate-900 → purple-950), purple-to-pink gradient accents, real CSS shadows, gradient icon containers, strong card borders with shadow-md/lg, dark slate-900 footer.

## Architecture
- **Frontend**: React + TypeScript with Vite, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with in-memory storage
- **Routing**: wouter (client-side)
- **State Management**: TanStack React Query
- **Styling**: Tailwind CSS with Inter font, bold vivid theme with purple/pink gradients, real shadows

## Courses (8 total)
1. **ACCA** (`/course/acca`) - Full ACCA certification program, 12 months
2. **Applied Knowledge** (`/course/applied-knowledge`) - ACCA Level 1, 4 months
3. **Applied Skills** (`/course/applied-skills`) - ACCA Level 2, 6 months
4. **Strategic Professional** (`/course/strategic-professional`) - ACCA Level 3, 8 months
5. **DipIFR** (`/course/dipifr`) - IFRS Diploma, 4 months
6. **Financial Modeling** (`/course/financial-modeling`) - Excel/modeling course, 3 months
7. **Jurisprudence** (`/course/jurisprudence`) - Law fundamentals, 5 months
8. **1C: Buxgalteriya** (`/course/1c-course`) - 1C accounting software, 3 months

## Course Detail Page Sections
Each course page includes: hero with enrollment form + discount badge, YouTube video preview (lazy-load click-to-play), salary growth section (dark bg with lime bars), tools/instruments (pill badges), skills list, for whom section, course program (accordion with numbered modules), support team (3 persons), live learning section, consultation CTA, related courses, FAQ

## SEO Architecture (comprehensive)
- `hooks/use-seo.ts` — auto hreflang (uz/ru/en/x-default) on all pages, canonical, OG, Twitter, JSON-LD @graph, BreadcrumbList schema from breadcrumb prop, noindex support
- `client/index.html` — Organization+LocalBusiness+WebSite schema, geo meta tags (UZ-TO, Toshkent), font preloading with `display=swap`, full OG/Twitter tags
- `client/public/og-image.svg` — 1200x630 branded OG image for social media sharing
- `components/breadcrumb.tsx` — reusable Breadcrumb UI component (light mode for dark heroes)
- `components/course-blog-links.tsx` — internal blog link section, added to all 5 course pages
- All course pages have: AggregateRating schema, BreadcrumbList schema, breadcrumb nav, internal blog links
- FAQ page: FAQPage schema with all questions
- Teachers page: ItemList + Person schema
- Contacts page: LocalBusiness schema with address/geo/hours
- About page: AboutPage + EducationalOrganization schema
- Career Center: EmploymentAgency schema
- 404 page: noindex, proper UZ-language 404 UI with course/blog links
- Sitemap: 24 URLs with hreflang at /sitemap.xml
- robots.txt at /robots.txt

## Categories
- ACCA (acca) - blue-50
- Moliya (finance) - emerald-50
- Huquqshunoslik (law) - amber-50
- Buxgalteriya (accounting) - violet-50

## Pages (14 total)
1. **Home** (`/`) - Category grid, popular courses, YouTube video sections, graduate stories, help section, stats, teachers, testimonials, why us, CTA
2. **Catalog** (`/courses`) - All 8 courses with category filter pills, search
3. **Course Detail** (`/course/:id`) - Rich course page with YouTube preview, salary, tools, modules, support team
4. **Teachers** (`/teachers`) - 4 teachers: ACCA expert, finance expert, IFRS expert, 1C expert
5. **About** (`/about`) - Stats, mission/vision/values, YouTube intro video, timeline, partners
6. **Blog** (`/blog`) - Blog listing with cover images for ACCA, IFRS, finance topics
7. **Blog Detail** (`/blog/:id`) - Individual blog post with related articles
8. **Contacts** (`/contacts`) - Contact form + info cards + social links
9. **Career Center** (`/career`) - Big Four placement, stats, partner companies
10. **Case Studies** (`/case-studies`) - Graduate stories (ACCA to Deloitte, etc.)
11. **FAQ** (`/faq`) - Categorized FAQ (ACCA, DipIFR, 1C, Financial Modeling, etc.)
12. **Corporate Training** (`/corporate`) - B2B training (ACCA, IFRS, Financial Modeling, 1C, Law) with lead form
13. **Partnership** (`/partnership`) - Partnership types and request form
14. **Grants/Promotions** (`/grants`) - Active discount campaigns

## Key Components
- `components/layout/header.tsx` - Sticky header with ACCA dropdown (Applied Knowledge, Applied Skills, Strategic Professional), DipIFR, Financial Modeling, Huquqshunoslik, 1C nav items, mobile sheet menu
- `components/layout/footer.tsx` - 4-column footer with course links (ACCA, DipIFR, FM, 1C, Law)
- `components/layout/layout.tsx` - Wrapper: header + main + footer
- `components/lead-form.tsx` - Reusable lead capture form with zod validation
- `components/youtube-embed.tsx` - Lazy YouTube embed: shows thumbnail, plays on click (no autoload)

## YouTube Videos
- `PU8ZCSuHWXE` → Financial Modeling / home platform section
- `eTriMFVGcYg` → Graduates section / home
- `ZV1UKMREypM` → ACCA courses preview
- `R0eCSc9Efqc` → DipIFR / about page company intro

## SEO Implementation
- `hooks/use-seo.ts` - Full SEO hook: title, description, keywords, canonical URL, OG tags, Twitter card, JSON-LD structured data, hreflang
- `server/routes.ts` - `/sitemap.xml` (24 URLs, hreflang, lastmod) and `/robots.txt` Express routes
- All pages have unique SEO titles, meta descriptions, JSON-LD schemas
- Blog posts have Article + BreadcrumbList schemas

## i18n (3 languages: uz / ru / en)
- `lib/translations.ts` - Full translation dictionary for nav, footer, common UI in 3 languages
- `contexts/language-context.tsx` - React context with localStorage persistence
- `components/layout/header.tsx` - Language switcher (flag buttons, dropdown on desktop, pill buttons on mobile)
- Language stored in localStorage key `fba_lang`; `<html lang="">` auto-updates

## Blog (8 SEO articles)
- Full HTML content with headings, lists, tables
- `/blog` page: search bar, category filter, featured post, grid
- `/blog/:id` page: reading progress bar, table of contents, social share (Telegram/Facebook/copy), related articles, newsletter CTA, author card
- Blog posts: ACCA tayyorlanish, DipIFR, Financial Modeling karyera, 1C qo'llanma, Buxgalter maoshi, ACCA vs DipIFR vs CFA, Yurist maoshi, Moliyaviy tahlilchi yo'l xaritasi, Xalqaro sertifikatlar

## User Retention Features
- Newsletter subscription in footer (email input + submit)
- Newsletter subscription in blog-detail page
- Reading progress bar (fixed top bar)
- Table of contents auto-generated from h2 tags
- Social share buttons (Telegram, Facebook, Copy link)
- Related articles section (3 posts)
- Category filter and search on blog page

## Images
- All images use real Unsplash URLs (no local placeholder files)
- Teachers: professional finance/accounting photos with `?w=400&h=500&fit=crop&crop=face`
- Courses: relevant subject photos with `?w=700&h=450&fit=crop`
- Blog posts: category-appropriate photos with `?w=800&h=400&fit=crop`
- Testimonials: avatar photos with `?w=120&h=120&fit=crop&crop=face`

## Data Model (data.ts)
- Course interface includes: salaryLevels[], tools[], supportTeam[], practiceHours, theoryHours, projects, rating, studentsCount, videoId (YouTube)
- Teachers: 4 finance/accounting/law experts with Unsplash photos
- Partner companies: Deloitte, PwC, KPMG, EY, BDO, Grant Thornton, Uzbank, Kapitalbank, etc.
- Lead form submissions go to `/api/leads` endpoint (in-memory storage)
- Content is strictly finance/accounting/law — no marketing or IT content

## Design System (FULL DARK THEME — applied site-wide)
- **Backgrounds**: `bg-[#0d0d0d]` and `bg-[#111]` alternating sections; `bg-zinc-900` for all cards
- **Hero sections**: `bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-slate-900` with radial glow
- **Cards**: `rounded-2xl border border-white/10 bg-zinc-900` — NO `bg-white`, NO `dark:bg-card`
- **Headings**: UPPERCASE + `font-extrabold` + `text-white`, sub-labels in `text-zinc-400`
- **CTA Buttons**: `bg-amber-400 text-black hover:bg-amber-300` (amber) on dark sections
- **Nav Buttons**: `bg-gradient-to-r from-purple-600 to-pink-600` (header consultation button)
- **Header**: `bg-[#0d0d0d]/95 border-white/10`, nav items `text-zinc-300 hover:bg-zinc-800`; dropdown `bg-zinc-900 border-white/10`
- **Active nav**: `text-purple-400 bg-purple-600/20`
- **Section labels**: `text-xs font-bold uppercase tracking-[0.2em] text-purple-400`
- **Body text**: `text-zinc-400` for secondary content (formerly `text-muted-foreground`)
- **Category badges**: `bg-*-600/30 text-*-300` dark variants (e.g., `bg-purple-600/30 text-purple-300`)
- **Card hover**: `hover:-translate-y-1 hover:ring-1 hover:ring-purple-500/30`
- **Gamification widget**: `bg-zinc-900`, dark tabs, dark action items, dark badge cards
- **Popups**: `bg-zinc-900` content panels with dark close buttons
- **Course blog links**: `bg-[#111]` section, `bg-zinc-900` card links
- All links use `<a href>` (native) — NOT wouter `<Link>` — for full-page SEO reload
- py-16/py-20 section spacing rhythm, responsive: mobile(1-col)→tablet(2-col)→desktop(3-4col)
