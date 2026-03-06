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

## Design System
- Dark gradient hero sections on every page (bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900)
- Purple-to-pink gradient accents for CTAs, buttons, icon containers, and module numbers
- Real CSS shadows (shadow-md, shadow-lg, shadow-xl, shadow-2xl) — not flat
- Cards with border + shadow-md, hover:-translate-y-1 + shadow-xl on hover
- Gradient CTA buttons (from-purple-600 to-pink-600) with shadow-md
- Dark slate-900 footer with purple accent social icons
- Header with gradient "F" logo badge, shadow-sm, gradient CTA button
- Salary section: dark bg with lime (#c8ff00) progress bars
- py-16/py-20 section spacing rhythm
- Pill-shaped buttons (rounded-full) with border-2 for emphasis
- Blog cards with cover image on top, hover scale effect
- Responsive: mobile (1-col), tablet (2-col), desktop (3-4 col) for all grids
