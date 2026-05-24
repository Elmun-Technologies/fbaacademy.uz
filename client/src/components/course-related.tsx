import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { InteractiveCardMedia, InteractivePillCta } from "@/components/interactive-card";
import { ix } from "@/lib/interactive-styles";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/lib/translations";

interface RelatedCourseItem {
  id: string;
  href: string;
  image: string;
  badge: Record<Language, string>;
  title: Record<Language, string>;
  desc: Record<Language, string>;
  accentColor: string;
}

const ALL_COURSES: RelatedCourseItem[] = [
  {
    id: "acca",
    href: "/course/acca",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=380&fit=crop&auto=format",
    badge: { uz: "Top", ru: "Топ", en: "Top" },
    title: { uz: "ACCA", ru: "ACCA", en: "ACCA" },
    desc: {
      uz: "Dunyodagi eng nufuzli buxgalteriya sertifikati. 180+ mamlakatda tan olingan. Big Four uchun talab.",
      ru: "Самая престижная бухгалтерская квалификация мира. Признана в 180+ странах. Требование Big Four.",
      en: "World's most prestigious accounting qualification. Recognized in 180+ countries. Big Four requirement.",
    },
    accentColor: "bg-brand",
  },
  {
    id: "dipifr",
    href: "/course/dipifr",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=380&fit=crop&auto=format",
    badge: { uz: "Xalqaro", ru: "Международный", en: "International" },
    title: { uz: "DipIFR", ru: "DipIFR", en: "DipIFR" },
    desc: {
      uz: "IFRS (MFHS) bo'yicha ACCA xalqaro diplomi. Xalqaro kompaniyalar va Big Four audit firmalari uchun.",
      ru: "Международный диплом ACCA по МСФО. Для международных компаний и аудиторских фирм Big Four.",
      en: "ACCA International Diploma in IFRS. For multinational companies and Big Four audit firms.",
    },
    accentColor: "bg-indigo-600",
  },
  {
    id: "financial-modeling",
    href: "/course/financial-modeling",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=380&fit=crop&auto=format",
    badge: { uz: "Mashhur", ru: "Популярный", en: "Popular" },
    title: { uz: "Financial Modeling", ru: "Financial Modeling", en: "Financial Modeling" },
    desc: {
      uz: "Excel'da DCF, LBO, 3-Statement model. Investitsiya banklari va korporativ moliya standartida.",
      ru: "DCF, LBO, 3-Statement в Excel. По стандартам инвестиционных банков и корпоративных финансов.",
      en: "DCF, LBO, 3-Statement in Excel. Investment banking and corporate finance standards.",
    },
    accentColor: "bg-emerald-600",
  },
  {
    id: "1c-course",
    href: "/course/1c-course",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=380&fit=crop&auto=format",
    badge: { uz: "Amaliy", ru: "Практичный", en: "Practical" },
    title: { uz: "1C: Buxgalteriya", ru: "1C: Бухгалтерия", en: "1C: Accounting" },
    desc: {
      uz: "1C: Buxgalteriya 8.3 — to'liq kurs. Birlamchi hujjatlar, soliq hisobotlari va ZP hisob-kitoblari.",
      ru: "1С: Бухгалтерия 8.3 — полный курс. Первичные документы, налоговые отчёты и расчёт зарплаты.",
      en: "1C: Accounting 8.3 — full course. Primary docs, tax reports and payroll calculations.",
    },
    accentColor: "bg-blue-600",
  },
  {
    id: "jurisprudence",
    href: "/course/jurisprudence",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&h=380&fit=crop&auto=format",
    badge: { uz: "Zaruriy", ru: "Необходимый", en: "Essential" },
    title: { uz: "Huquqshunoslik", ru: "Юриспруденция", en: "Law" },
    desc: {
      uz: "Soliq, mehnat va korporativ huquq. Buxgalterlar, iqtisodchilar va rahbarlar uchun zaruriy bilim.",
      ru: "Налоговое, трудовое и корпоративное право. Необходимые знания для бухгалтеров и руководителей.",
      en: "Tax, labor and corporate law. Essential knowledge for accountants and business leaders.",
    },
    accentColor: "bg-amber-600",
  },
];

interface CourseRelatedProps {
  excludeId?: string;
}

export default function CourseRelated({ excludeId }: CourseRelatedProps) {
  const { lang, t } = useLanguage();
  const courses = ALL_COURSES.filter((c) => c.id !== excludeId).slice(0, 4);

  return (
    <section className="bg-zinc-950 py-16 sm:py-20" data-testid="section-course-related">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="mb-10 text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl lg:text-4xl"
          data-testid="text-related-heading"
        >
          {t.page.relatedTitle}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <Link key={course.id} href={course.href} data-testid={`card-related-${course.id}`}>
              <article className="group ix-card flex h-full flex-col rounded-2xl bg-zinc-900">
                <div className="relative overflow-hidden">
                  <InteractiveCardMedia
                    src={course.image}
                    alt={course.title[lang]}
                    width={600}
                    height={380}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
                  <span
                    className={`absolute left-3 top-3 rounded-full ${course.accentColor} px-3 py-1 text-xs font-bold text-white shadow-lg`}
                  >
                    {course.badge[lang]}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 text-base font-extrabold uppercase tracking-wide text-white">
                    {course.title[lang]}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-zinc-400">
                    {course.desc[lang]}
                  </p>
                  <div className="mt-5">
                    <InteractivePillCta>
                      {t.page.relatedBtn} <ArrowRight className={`h-3.5 w-3.5 ${ix.arrow}`} />
                    </InteractivePillCta>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
