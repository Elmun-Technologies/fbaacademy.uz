import { useState, useMemo } from "react";
import { Link, useSearch } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import { courses, isCoursePriceVisible } from "@/lib/data";
import { Search, Clock, Filter, Star, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/lib/translations";
import { localizeCourses } from "@/lib/localize-content";

const FILTER_CATEGORIES = [
  { slug: "all", uz: "Barchasi", ru: "Все", en: "All" },
  { slug: "acca", uz: "ACCA", ru: "ACCA", en: "ACCA" },
  { slug: "finance", uz: "DipIFR / МСФО", ru: "DipIFR / МСФО", en: "DipIFR / IFRS" },
] as const;

const PAGE_TEXT: Record<
  Language,
  {
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string;
    breadcrumb: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    priceOnRequest: string;
    view: string;
    notFoundTitle: string;
    notFoundDesc: string;
    uzs: string;
  }
> = {
  uz: {
    seoTitle: "Barcha kurslar — ACCA, DipIFR, МСФО, Financial Analyst | FBA Academy",
    seoDescription: "FBA Academy barcha kurslari: ACCA, DipIFR, МСФО va Financial Analyst. Professional kurslar, xalqaro sertifikatlar, Big Four darajasida bilim.",
    seoKeywords: "ACCA kursi, DipIFR kursi, МСФО kursi, Financial Analyst kursi, moliya kurslari O'zbekiston",
    breadcrumb: "Barcha kurslar",
    title: "Barcha kurslar",
    subtitle: "ACCA, DipIFR, МСФО va Financial Analyst bo'yicha professional kurslar",
    searchPlaceholder: "Kurs qidirish...",
    priceOnRequest: "Narx so'rov orqali",
    view: "Ko'rish",
    notFoundTitle: "Kurslar topilmadi",
    notFoundDesc: "Boshqa filtr yoki qidiruv so'zini sinab ko'ring",
    uzs: "UZS",
  },
  ru: {
    seoTitle: "Все курсы — ACCA, DipIFR, МСФО, Financial Analyst | FBA Academy",
    seoDescription: "Все курсы FBA Academy: ACCA, DipIFR, МСФО и Financial Analyst. Профессиональное обучение и международные сертификаты.",
    seoKeywords: "курс ACCA, курс DipIFR, курс МСФО, Financial Analyst, финансовые курсы Узбекистан",
    breadcrumb: "Все курсы",
    title: "Все курсы",
    subtitle: "Профессиональные курсы по ACCA, DipIFR, МСФО и Financial Analyst",
    searchPlaceholder: "Поиск курса...",
    priceOnRequest: "Цена по запросу",
    view: "Смотреть",
    notFoundTitle: "Курсы не найдены",
    notFoundDesc: "Попробуйте другой фильтр или поисковый запрос",
    uzs: "UZS",
  },
  en: {
    seoTitle: "All Courses — ACCA, DipIFR, МСФО, Financial Analyst | FBA Academy",
    seoDescription: "All FBA Academy courses: ACCA, DipIFR, МСФО and Financial Analyst. Professional education with international certifications.",
    seoKeywords: "ACCA course, DipIFR course, IFRS course, Financial Analyst Uzbekistan, finance certifications",
    breadcrumb: "All Courses",
    title: "All Courses",
    subtitle: "Professional courses in ACCA, DipIFR, МСФО and Financial Analyst",
    searchPlaceholder: "Search courses...",
    priceOnRequest: "Price on request",
    view: "View",
    notFoundTitle: "No courses found",
    notFoundDesc: "Try a different filter or search keyword",
    uzs: "UZS",
  },
};

const LEVEL_MAP: Record<string, Record<Language, string>> = {
  "Boshlang'ich": { uz: "Boshlang'ich", ru: "Начальный", en: "Beginner" },
  "O'rta": { uz: "O'rta", ru: "Средний", en: "Intermediate" },
  "Yuqori": { uz: "Yuqori", ru: "Продвинутый", en: "Advanced" },
};

const DURATION_SUFFIX: Record<Language, string> = {
  uz: "oy",
  ru: "мес.",
  en: "mo.",
};

const SHORT_DESC_MAP: Record<string, Record<Language, string>> = {
  acca: {
    uz: "Xalqaro buxgalteriya sertifikati — karyerangizni global darajaga olib chiqing",
    ru: "Международный сертификат бухгалтера — выведите карьеру на мировой уровень",
    en: "International accounting certificate — take your career to a global level",
  },
  "applied-knowledge": {
    uz: "ACCA sertifikatsiyasining boshlang'ich bosqichi — asosiy bilimlar",
    ru: "Начальный этап сертификации ACCA — базовые знания",
    en: "ACCA certification entry stage — foundational knowledge",
  },
  "applied-skills": {
    uz: "ACCA sertifikatsiyasining o'rta bosqichi — amaliy ko'nikmalar",
    ru: "Средний этап сертификации ACCA — практические навыки",
    en: "ACCA certification intermediate stage — applied skills",
  },
  "strategic-professional": {
    uz: "ACCA sertifikatsiyasining yakuniy bosqichi — strategik darajadagi bilimlar",
    ru: "Заключительный этап сертификации ACCA — стратегические знания",
    en: "ACCA certification final stage — strategic-level expertise",
  },
  dipifr: {
    uz: "Xalqaro moliyaviy hisobot diplomasi — IFRS bo'yicha mutaxassis bo'ling",
    ru: "Диплом по международной финансовой отчётности — станьте специалистом по МСФО",
    en: "Diploma in International Financial Reporting — become an IFRS specialist",
  },
  "financial-modeling": {
    uz: "Excel va Python asosida professional moliyaviy modellashtirish",
    ru: "Профессиональное финансовое моделирование на базе Excel и Python",
    en: "Professional financial modeling with Excel and Python",
  },
  "1c-course": {
    uz: "1C: Buxgalteriya 8.3 dasturini professional darajada o'rganing",
    ru: "Освойте 1C: Бухгалтерия 8.3 на профессиональном уровне",
    en: "Master 1C: Accounting 8.3 at a professional level",
  },
  jurisprudence: {
    uz: "Biznes va korporativ huquq bo'yicha amaliy bilimlar",
    ru: "Практические знания в области бизнеса и корпоративного права",
    en: "Practical knowledge in business and corporate law",
  },
};

export default function Catalog() {
  const { lang } = useLanguage();
  const tx = PAGE_TEXT[lang];
  const localizedCourses = useMemo(() => localizeCourses(courses, lang), [lang]);

  const localizeLevel = (level: string) => LEVEL_MAP[level]?.[lang] ?? level;
  const localizeDuration = (dur: string) => {
    const num = dur.replace(/[^0-9]/g, "");
    return `${num} ${DURATION_SUFFIX[lang]}`;
  };
  const localizeShortDesc = (id: string, fallback: string) => SHORT_DESC_MAP[id]?.[lang] ?? fallback;

  useSEO({
    title: tx.seoTitle,
    description: tx.seoDescription,
    keywords: tx.seoKeywords,
    breadcrumb: [{ name: tx.breadcrumb, url: "https://fbaacademy.uz/courses" }],
    dateModified: "2026-04-16",
    speakable: ["[data-speakable='catalog-title']", "[data-speakable='catalog-desc']"],
    jsonLd: {
      "@type": "ItemList",
      "name": `FBA Academy — ${tx.title}`,
      "description": tx.subtitle,
      "url": "https://fbaacademy.uz/courses",
      "numberOfItems": 4,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "ACCA", "url": "https://fbaacademy.uz/course/acca" },
        { "@type": "ListItem", "position": 2, "name": "DipIFR", "url": "https://fbaacademy.uz/course/dipifr" },
        { "@type": "ListItem", "position": 3, "name": "МСФО", "url": "https://fbaacademy.uz/course/msfo" },
        { "@type": "ListItem", "position": 4, "name": "Financial Analyst", "url": "https://fbaacademy.uz/courses" },
      ],
    },
  });

  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const initialCategory = params.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    return localizedCourses.filter((course) => {
      const matchesCategory = selectedCategory === "all" || course.categorySlug === selectedCategory;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [localizedCourses, selectedCategory, searchQuery]);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-brand-dark to-slate-900 pb-14 pt-4 sm:pb-20 sm:pt-20" data-testid="section-catalog-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Breadcrumb items={[{ label: tx.breadcrumb }]} light />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" data-testid="text-catalog-title" data-speakable="catalog-title">{tx.title}</h1>
          <p className="mt-3 text-slate-300" data-speakable="catalog-desc">{tx.subtitle}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder={tx.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-full border-white/20 bg-white/10 pl-9 text-white placeholder:text-slate-400 focus:border-brand-accent focus:bg-white/15"
                data-testid="input-search-courses"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTER_CATEGORIES.map((cat) => (
                <Button
                  key={cat.slug}
                  variant={selectedCategory === cat.slug ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`rounded-full border-2 font-semibold ${
                    selectedCategory === cat.slug
                      ? "bg-amber-400 text-black border-amber-400 hover:bg-amber-300"
                      : "border-white/30 text-white hover:bg-white/10"
                  }`}
                  data-testid={`button-filter-${cat.slug}`}
                >
                  {lang === "ru" ? cat.ru : lang === "en" ? cat.en : cat.uz}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course grid */}
      <section className="bg-[#0d0d0d] pb-14 pt-4 sm:pb-20 sm:pt-20" data-testid="section-catalog-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredCourses.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCourses.map((course) => {
                const showPrice = isCoursePriceVisible(course);
                return (
                <Link key={course.id} href={`/course/${course.id}`}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-zinc-900 ix-card-strong" data-testid={`card-catalog-course-${course.id}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="h-48 w-full object-cover ix-media"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">{course.category}</span>
                      {showPrice && course.discount && (
                        <span className="absolute right-3 top-3 rounded-full bg-rose-600 px-2.5 py-1 text-xs font-bold text-white">-{course.discount}</span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="mb-2 inline-block self-start rounded-full border border-white/15 px-2.5 py-0.5 text-xs font-medium text-zinc-400">{localizeLevel(course.level)}</span>
                      <h3 className="mb-2 text-base font-extrabold uppercase tracking-wide text-white">{course.title}</h3>
                      <p className="flex-1 text-sm leading-relaxed text-zinc-400 line-clamp-2">{course.shortDescription}</p>
                      <div className="mt-3 flex items-center gap-3 text-xs text-zinc-500">
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {localizeDuration(course.duration)}</span>
                        <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-amber-400" /> {course.rating}</span>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                        <div>
                          {showPrice ? (
                            <>
                              {course.oldPrice && <span className="text-xs text-zinc-500 line-through">{course.oldPrice}</span>}
                              <div className="text-base font-extrabold text-white">{course.price} <span className="text-xs font-normal text-zinc-500">{tx.uzs}</span></div>
                            </>
                          ) : (
                            <div className="text-sm font-semibold text-zinc-400">{tx.priceOnRequest}</div>
                          )}
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/60 px-3 py-1.5 text-xs font-bold text-amber-400 ix-pill-amber">
                          {tx.view} <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
              })}
            </div>
          ) : (
            <div className="py-20 text-center" data-testid="text-no-courses">
              <Filter className="mx-auto mb-4 h-12 w-12 text-zinc-700" />
              <h3 className="text-lg font-bold text-white">{tx.notFoundTitle}</h3>
              <p className="mt-2 text-sm text-zinc-400">{tx.notFoundDesc}</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
