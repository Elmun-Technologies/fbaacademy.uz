# FBA Academy - Educational Platform

## Overview
FBA Academy is a premium EdTech platform for the Uzbekistan market. It offers courses in Programming, Marketing, Design, and Business. All content is in Uzbek language. Visual design inspired by GeekBrains.uz — polished, elegant, with real photos and strong typography hierarchy.

## Architecture
- **Frontend**: React + TypeScript with Vite, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with in-memory storage
- **Routing**: wouter (client-side)
- **State Management**: TanStack React Query
- **Styling**: Tailwind CSS with Inter font, purple/indigo gradient theme

## Pages (14 total)
1. **Home** (`/`) - Hero with lead form, categories with photos, popular courses, why us, process steps, teachers with photos, testimonials, results banner, CTA
2. **Catalog** (`/courses`) - All courses with category filters, search, course cards with photos
3. **Course Detail** (`/course/:id`) - Dynamic course page: gradient hero, modules accordion, mentor, skills, FAQ
4. **Teachers** (`/teachers`) - Teacher cards with real photos and overlay text
5. **About** (`/about`) - Company info, mission, timeline, partners
6. **Blog** (`/blog`) - Blog listing with category badges
7. **Blog Detail** (`/blog/:id`) - Individual blog post
8. **Contacts** (`/contacts`) - Contact form + info cards + social links
9. **Career Center** (`/career`) - Job placement assistance, stats, partner companies
10. **Case Studies** (`/case-studies`) - Graduate success stories with real photos
11. **FAQ** (`/faq`) - Categorized FAQ accordion
12. **Corporate Training** (`/corporate`) - B2B training services with lead form
13. **Partnership** (`/partnership`) - Partnership types and request form
14. **Grants/Promotions** (`/grants`) - Active discount campaigns

## Key Components
- `components/layout/header.tsx` - Sticky header with blur, responsive nav, mobile sheet menu
- `components/layout/footer.tsx` - 4-column footer with links, social icons, contacts
- `components/layout/layout.tsx` - Wrapper: header + main + footer
- `components/lead-form.tsx` - Reusable lead capture form with zod validation

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
- Primary: Purple (262 83% 58%)
- Font: Inter
- Category gradients: Purple (programming), Emerald (marketing), Amber (design), Blue (business)
- Dark hero sections with gradient overlays
- Clean card design with subtle borders and hover elevation
- Rounded-2xl for large containers, rounded-xl for small elements
