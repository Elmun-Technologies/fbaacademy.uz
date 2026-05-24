export interface SalaryLevel {
  level: string;
  salary: string;
  description: string;
}

export interface SupportPerson {
  role: string;
  description: string;
  avatar: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: string;
  duration: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  showPrice?: boolean;
  showProgram?: boolean;
  level: string;
  description: string;
  shortDescription: string;
  modules: { title: string; topics: string[] }[];
  forWhom: string[];
  skills: string[];
  tools: string[];
  salaryLevels: SalaryLevel[];
  supportTeam: SupportPerson[];
  mentorId: string;
  image: string;
  videoId?: string;
  practiceHours: string;
  theoryHours: string;
  projects: string;
  rating: string;
  studentsCount: string;
}

export function isCoursePriceVisible(course: Pick<Course, "price" | "showPrice">): boolean {
  return Boolean(course?.price) && course.showPrice !== false;
}

export function isCourseProgramVisible(course: Pick<Course, "showProgram">): boolean {
  return course.showProgram !== false;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  courses: string[];
  avatar: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  courseName: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  modifiedDate?: string;
  readTime: string;
  author: string;
  image: string;
}

export interface GraduateResult {
  id: string;
  name: string;
  beforeRole: string;
  afterRole: string;
  company: string;
  salaryIncrease: string;
  avatar: string;
  story: string;
  courseName: string;
  /** YouTube video id — shown on home “Bitiruvchilarimiz natijasi”. */
  videoId?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FbaBootstrapData {
  categories?: Array<{ name: string; slug: string; icon: string }>;
  courses?: Course[];
  teachers?: Teacher[];
  testimonials?: Testimonial[];
  blogPosts?: BlogPost[];
  graduateResults?: GraduateResult[];
  faqItems?: FAQItem[];
  stats?: Array<{ value: string; label: string }>;
  partnerCompanies?: string[];
  whyUsFeatures?: Array<{ title: string; description: string; icon: string }>;
}

declare global {
  interface Window {
    FBA_BOOTSTRAP?: FbaBootstrapData;
  }
}

/** Reads `window.FBA_BOOTSTRAP` from WordPress (see theme `fba_build_bootstrap_payload`). Empty array falls back to bundled defaults. */
export function getBootstrapArray<T>(key: keyof FbaBootstrapData): T[] | null {
  if (typeof window === "undefined") {
    return null;
  }

  const data = window.FBA_BOOTSTRAP;
  if (!data) {
    return null;
  }

  const value = data[key];
  if (!Array.isArray(value) || value.length === 0) {
    return null;
  }

  return value as T[];
}
