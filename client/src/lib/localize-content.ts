import type { Language } from "@/lib/translations";
import type { BlogPost, Course, FAQItem, GraduateResult, Teacher, Testimonial } from "@/lib/data-types";
import { COURSE_I18N } from "@/lib/i18n/catalog-i18n";
import { BLOG_I18N } from "@/lib/i18n/blog-i18n";
import { INSTRUCTORS_I18N } from "@/lib/i18n/instructors-i18n";
import {
  FAQ_ITEMS_I18N,
  GRADUATES_I18N,
  TESTIMONIALS_I18N,
} from "@/lib/i18n/site-content-i18n";
import { CATEGORY_I18N, FAQ_CATEGORY_I18N, pick, pickList } from "@/lib/i18n/pick";

export function localizeCourse(course: Course, lang: Language): Course {
  const i18n = COURSE_I18N[course.id];
  if (!i18n) return course;

  return {
    ...course,
    title: pick(lang, i18n.title),
    subtitle: pick(lang, i18n.subtitle),
    description: pick(lang, i18n.description),
    shortDescription: pick(lang, i18n.shortDescription),
    category: CATEGORY_I18N[course.category]?.[lang] ?? course.category,
    forWhom: pickList(lang, i18n.forWhom),
    skills: pickList(lang, i18n.skills),
    modules: i18n.modules.map((m, idx) => ({
      title: pick(lang, m.title),
      topics: pickList(lang, m.topics).length ? pickList(lang, m.topics) : course.modules[idx]?.topics ?? [],
    })),
    supportTeam: i18n.supportTeam.map((s, idx) => ({
      ...course.supportTeam[idx],
      role: pick(lang, s.role),
      description: pick(lang, s.description),
    })),
    salaryLevels: course.salaryLevels.map((sl, idx) => ({
      ...sl,
      description: i18n.salaryDescriptions[idx] ? pick(lang, i18n.salaryDescriptions[idx]) : sl.description,
    })),
  };
}

export function localizeCourses(courses: Course[], lang: Language): Course[] {
  return courses.map((c) => localizeCourse(c, lang));
}

export function localizeTeacher(teacher: Teacher, lang: Language): Teacher {
  const i18n = INSTRUCTORS_I18N[teacher.id];
  if (!i18n) return teacher;
  return {
    ...teacher,
    role: pick(lang, i18n.role),
    experience: pick(lang, i18n.experience),
    bio: pick(lang, i18n.bio),
  };
}

export function localizeTeachers(teachers: Teacher[], lang: Language): Teacher[] {
  return teachers.map((t) => localizeTeacher(t, lang));
}

export function localizeTestimonial(item: Testimonial, lang: Language): Testimonial {
  const i18n = TESTIMONIALS_I18N[item.id];
  if (!i18n) return item;
  return {
    ...item,
    role: pick(lang, i18n.role),
    text: pick(lang, i18n.text),
  };
}

export function localizeTestimonials(items: Testimonial[], lang: Language): Testimonial[] {
  return items.map((t) => localizeTestimonial(t, lang));
}

export function localizeGraduate(item: GraduateResult, lang: Language): GraduateResult {
  const i18n = GRADUATES_I18N[item.id];
  if (!i18n) return item;
  return {
    ...item,
    beforeRole: pick(lang, i18n.beforeRole),
    afterRole: pick(lang, i18n.afterRole),
    story: pick(lang, i18n.story),
    courseName: pick(lang, i18n.courseName),
  };
}

export function localizeGraduates(items: GraduateResult[], lang: Language): GraduateResult[] {
  return items.map((g) => localizeGraduate(g, lang));
}

export function localizeFaqItem(item: FAQItem, lang: Language): FAQItem {
  const i18n = FAQ_ITEMS_I18N[item.id];
  if (!i18n) return item;
  const category = pick(lang, i18n.category);
  return {
    ...item,
    question: pick(lang, i18n.question),
    answer: pick(lang, i18n.answer),
    category: FAQ_CATEGORY_I18N[category]?.[lang] ?? category,
  };
}

export function localizeFaqItems(items: FAQItem[], lang: Language): FAQItem[] {
  return items.map((f) => localizeFaqItem(f, lang));
}

export function localizeBlogPost(post: BlogPost, lang: Language): BlogPost {
  const i18n = BLOG_I18N[post.id];
  if (!i18n) return post;
  return {
    ...post,
    title: pick(lang, i18n.title),
    excerpt: pick(lang, i18n.excerpt),
    readTime: pick(lang, i18n.readTime),
    content: pick(lang, i18n.content),
  };
}

export function localizeBlogPosts(posts: BlogPost[], lang: Language): BlogPost[] {
  return posts.map((p) => localizeBlogPost(p, lang));
}

export function localizeFaqCategory(category: string, lang: Language): string {
  return FAQ_CATEGORY_I18N[category]?.[lang] ?? category;
}
