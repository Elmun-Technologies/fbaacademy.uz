# FBA Academy - Educational Platform

## Overview
FBA Academy is a premium EdTech platform for the Uzbekistan market specializing in accounting, finance, and law education. It offers ACCA certification (3 levels), DipIFR, Financial Modeling, Jurisprudence, and 1C: Buxgalteriya courses. All content is in Uzbek language. Visual design inspired by Netology.ru — clean, airy, eye-friendly with white/light backgrounds, soft pastel card colors, pill-shaped outline buttons, bold clean typography, and generous whitespace.

## Architecture
- **Frontend**: React + TypeScript with Vite, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with in-memory storage
- **Routing**: wouter (client-side)
- **State Management**: TanStack React Query
- **Styling**: Tailwind CSS with Inter font, light/white theme with pastel accents

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
Each course page includes: hero with enrollment form + discount badge, salary growth section (dark bg with lime bars), tools/instruments (pill badges), skills list, for whom section, course program (accordion with numbered modules), support team (3 persons), live learning section, consultation CTA, related courses, FAQ

## Categories
- ACCA (acca) - blue-50
- Moliya (finance) - emerald-50
- Huquqshunoslik (law) - amber-50
- Buxgalteriya (accounting) - violet-50

## Pages (14 total)
1. **Home** (`/`) - Category grid, popular courses, graduate stories, help section, stats, teachers, testimonials, why us, CTA
2. **Catalog** (`/courses`) - All 8 courses with category filter pills, search
3. **Course Detail** (`/course/:id`) - Rich course page with salary, tools, modules, support team
4. **Teachers** (`/teachers`) - 4 teachers: ACCA expert, finance expert, IFRS expert, 1C expert
5. **About** (`/about`) - Stats, mission/vision/values, timeline, partners (Big Four, banks)
6. **Blog** (`/blog`) - Blog listing about ACCA, IFRS, finance topics
7. **Blog Detail** (`/blog/:id`) - Individual blog post with related articles
8. **Contacts** (`/contacts`) - Contact form + info cards + social links
9. **Career Center** (`/career`) - Big Four placement, stats, partner companies
10. **Case Studies** (`/case-studies`) - Graduate stories (ACCA to Deloitte, etc.)
11. **FAQ** (`/faq`) - Categorized FAQ (ACCA, DipIFR, 1C, Financial Modeling, etc.)
12. **Corporate Training** (`/corporate`) - B2B training with lead form
13. **Partnership** (`/partnership`) - Partnership types and request form
14. **Grants/Promotions** (`/grants`) - Active discount campaigns

## Key Components
- `components/layout/header.tsx` - Sticky header with blur, "FBA Academy" text logo, pill nav buttons, mobile sheet menu
- `components/layout/footer.tsx` - 4-column footer with course links (ACCA, DipIFR, FM, 1C, Law)
- `components/layout/layout.tsx` - Wrapper: header + main + footer
- `components/lead-form.tsx` - Reusable lead capture form with zod validation, rounded-full inputs and outline button

## Data Model (data.ts)
- Course interface includes: salaryLevels[], tools[], supportTeam[], practiceHours, theoryHours, projects, rating, studentsCount
- Teachers: 4 finance/accounting/law experts
- Partner companies: Deloitte, PwC, KPMG, EY, BDO, Grant Thornton, etc.
- Lead form submissions go to `/api/leads` endpoint (in-memory storage)

## Images
- `client/public/images/`: hero-bg.png, teacher-1-4.png, student-1-4.png, course-*.png

## Design System
- White page backgrounds, slate-50 cards, pastel accent cards
- Pill-shaped outline buttons (rounded-full), hover-elevate cards
- Bold extrabold headings, muted-foreground body text
- Salary section: dark bg with lime (#c8ff00) progress bars
- py-10/py-16 section spacing rhythm
