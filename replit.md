# FBA Academy - Educational Platform

## Overview
FBA Academy is a premium EdTech platform for the Uzbekistan market. It offers courses in Programming, Marketing, Design, and Business. All content is in Uzbek language. Visual design inspired by Netology.ru — clean, airy, eye-friendly with white/light backgrounds, soft pastel card colors, pill-shaped outline buttons, bold clean typography, and generous whitespace.

## Architecture
- **Frontend**: React + TypeScript with Vite, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with in-memory storage
- **Routing**: wouter (client-side)
- **State Management**: TanStack React Query
- **Styling**: Tailwind CSS with Inter font, light/white theme with pastel accents

## Pages (14 total)
1. **Home** (`/`) - Pastel category grid, popular courses, graduate stories, help section, stats, teachers, testimonials, why us, CTA
2. **Catalog** (`/courses`) - All courses with category filter pills, search, course cards on slate-50
3. **Course Detail** (`/course/:id`) - Course hero, enrollment form, modules accordion, mentor, skills, FAQ
4. **Teachers** (`/teachers`) - Teacher photos with name/role/bio
5. **About** (`/about`) - Stats, mission/vision/values cards, timeline, partner companies
6. **Blog** (`/blog`) - Blog listing with category badges
7. **Blog Detail** (`/blog/:id`) - Individual blog post with related articles
8. **Contacts** (`/contacts`) - Contact form + info cards + social links
9. **Career Center** (`/career`) - Job placement assistance, stats, partner companies
10. **Case Studies** (`/case-studies`) - Graduate success stories with before/after roles
11. **FAQ** (`/faq`) - Categorized FAQ accordion
12. **Corporate Training** (`/corporate`) - B2B training services with lead form
13. **Partnership** (`/partnership`) - Partnership types and request form
14. **Grants/Promotions** (`/grants`) - Active discount campaigns with pastel cards

## Design System
- **Backgrounds**: White page backgrounds, slate-50 for cards
- **Pastel accents**: blue-50, emerald-50, amber-50, violet-50, pink-50 for feature cards
- **Buttons**: Pill-shaped (rounded-full), outline variant throughout
- **Cards**: border-0 bg-slate-50 with hover-elevate effect
- **Typography**: Bold extrabold headings, muted-foreground for body text
- **Spacing**: py-10/py-16 section rhythm, generous whitespace
- **No dark hero sections, no heavy gradients**

## Key Components
- `components/layout/header.tsx` - Sticky header with blur, "FBA Academy" text logo, pill nav buttons, mobile sheet menu
- `components/layout/footer.tsx` - 4-column footer with links, round social icons on slate-100
- `components/layout/layout.tsx` - Wrapper: header + main + footer
- `components/lead-form.tsx` - Reusable lead capture form with zod validation, rounded-full inputs and outline button

## Images
- AI-generated images in `client/public/images/`:
  - `hero-bg.png` - Hero background
  - `teacher-1.png` through `teacher-4.png` - Teacher photos
  - `student-1.png` through `student-4.png` - Student/testimonial photos
  - `course-programming.png`, `course-marketing.png`, `course-design.png`, `course-business.png` - Category images

## Data
- Static course, teacher, testimonial, blog, FAQ, graduate results data in `client/src/lib/data.ts`
- Lead form submissions go to `/api/leads` endpoint (in-memory storage)
- All avatar paths reference images in `/images/` directory

## Theme
- Primary color configured in index.css
- Font: Inter
- Pastel category colors: Blue-50 (programming), Emerald-50 (marketing), Amber-50 (design), Violet-50 (business)
- Clean card design with subtle hover elevation
- Rounded-2xl for large containers, rounded-full for buttons/badges
