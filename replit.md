# FBA Academy - Educational Platform

## Overview
FBA Academy is a premium EdTech platform for the Uzbekistan market. It offers courses in Programming, Marketing, Design, and Business. All content is in Uzbek language.

## Architecture
- **Frontend**: React + TypeScript with Vite, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with in-memory storage
- **Routing**: wouter (client-side)
- **State Management**: TanStack React Query
- **Styling**: Tailwind CSS with Inter font, purple/indigo gradient theme

## Pages (14 total)
1. **Home** (`/`) - Hero, categories, popular courses, why us, results, teachers, testimonials, CTA
2. **Catalog** (`/courses`) - All courses with filter & search
3. **Course Detail** (`/course/:id`) - Dynamic course landing page
4. **Teachers** (`/teachers`) - All mentors/teachers
5. **About** (`/about`) - Company info, mission, timeline, partners
6. **Blog** (`/blog`) - Blog listing
7. **Blog Detail** (`/blog/:id`) - Individual blog post
8. **Contacts** (`/contacts`) - Contact form and info
9. **Career Center** (`/career`) - Job placement assistance
10. **Case Studies** (`/case-studies`) - Graduate success stories
11. **FAQ** (`/faq`) - Frequently asked questions
12. **Corporate Training** (`/corporate`) - B2B training services
13. **Partnership** (`/partnership`) - Partnership opportunities
14. **Grants/Promotions** (`/grants`) - Discounts and grant programs

## Key Components
- `components/layout/header.tsx` - Responsive navigation with mobile menu
- `components/layout/footer.tsx` - Site footer with links and social
- `components/layout/layout.tsx` - Wrapper with header + footer
- `components/lead-form.tsx` - Reusable lead capture form

## Data
- Static course, teacher, testimonial, blog, FAQ data in `client/src/lib/data.ts`
- Lead form submissions go to `/api/leads` endpoint (in-memory storage)

## Theme
- Primary: Purple (262 83% 58%)
- Font: Inter
- Gradients: Purple, Green, Amber, Blue for course categories
- Clean, modern SaaS look with soft shadows and spacious layout
