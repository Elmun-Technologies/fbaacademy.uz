import type { Language } from "@/lib/translations";

export type LmsLessonType = "video" | "article" | "quiz";

export type LmsLesson = {
  id: string;
  title: string;
  duration?: string;
  type: LmsLessonType;
  /** Free preview without enrollment */
  isPreview?: boolean;
};

export type LmsSection = {
  id: string;
  title: string;
  description?: string;
  lessons: LmsLesson[];
};

export type LmsCoursePrice = {
  current: string;
  original?: string;
  currency: string;
  isFree?: boolean;
};

export type LmsRelatedCourse = {
  slug: string;
  title: string;
  badge?: string;
  level: string;
  lessonCount: number;
  instructorName: string;
  price?: { current: string; original?: string; currency: string };
  href?: string;
};

/** CMS-ready course page — one record per live LMS course */
export type LmsCourse = {
  slug: string;
  /** Original WordPress / Tutor LMS URL for enroll & checkout */
  wpEnrollUrl: string;
  title: string;
  badges: string[];
  rating: number;
  reviewCount: number;
  enrolledCount: number;
  level: string;
  instructorId: string;
  instructorBio?: string;
  price: LmsCoursePrice;
  about: Record<Language, string>;
  learn: Record<Language, string[]>;
  materials: Record<Language, string[]>;
  requirements: Record<Language, string[]>;
  audience: Record<Language, string[]>;
  curriculum: LmsSection[];
  tags: string[];
  enrollmentValidity: Record<Language, string>;
  lastUpdated: string;
  certificate: Record<Language, string>;
  previewVideoId?: string;
  thumbnail?: string;
  relatedCourses: LmsRelatedCourse[];
};
