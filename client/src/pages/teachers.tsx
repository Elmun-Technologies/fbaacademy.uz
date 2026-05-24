import { useSEO } from "@/hooks/use-seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import TeacherAvatar from "@/components/teacher-avatar";
import { teachers, testimonials } from "@/lib/data";
import { ACADEMY_INSTRUCTORS } from "@/lib/instructors";
import { instructorPortraitClass } from "@/components/instructor-photo";

const INSTRUCTOR_COUNT = ACADEMY_INSTRUCTORS.length;
import { ArrowRight, Star, Sparkles, BookOpen, Award, Users } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useMemo } from "react";
import { localizeTeachers, localizeTestimonials } from "@/lib/localize-content";
import type { Language } from "@/lib/translations";

const WHY_TEACHERS = [
  {
    icon: Award,
    title: { uz: "Xalqaro sertifikatlar", ru: "Международные сертификаты", en: "International Certifications" },
    desc: {
      uz: "Barcha mentorlarimiz ACCA, DipIFR yoki CFA kabi xalqaro sertifikatlarga ega.",
      ru: "Все наши менторы имеют международные сертификаты, такие как ACCA, DipIFR или CFA.",
      en: "All our mentors hold international certifications such as ACCA, DipIFR, or CFA.",
    },
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: { uz: "Big Four tajribasi", ru: "Опыт Big Four", en: "Big Four Experience" },
    desc: {
      uz: "Deloitte, PwC, KPMG, EY kabi yetakchi firmalarida haqiqiy amaliyot.",
      ru: "Практический опыт в ведущих фирмах Deloitte, PwC, KPMG и EY.",
      en: "Real hands-on experience from leading firms like Deloitte, PwC, KPMG and EY.",
    },
    color: "from-brand to-brand-accent",
  },
  {
    icon: BookOpen,
    title: { uz: "Amaliy yondashuv", ru: "Практический подход", en: "Practical Approach" },
    desc: {
      uz: "Real loyihalar, case study'lar va mock imtihonlar bilan o'qitamiz.",
      ru: "Обучаем на реальных проектах, кейсах и пробных экзаменах.",
      en: "We teach through real projects, case studies, and mock exams.",
    },
    color: "from-emerald-500 to-teal-500",
  },
];

const TEXT: Record<
  Language,
  {
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string;
    breadcrumb: string;
    badge: string;
    title: string;
    subtitle: string;
    stats: Array<{ value: string; label: string }>;
    teamTitle: string;
    whyTitle: string;
    whyDesc: string;
    reviewsTitle: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  }
> = {
  uz: {
    seoTitle: "O'qituvchilar — ACCA, DipIFR, Moliya Ekspertlari | FBA Academy",
    seoDescription: "FBA Academy mentorlar jamoasi: ACCA, F3, DipIFR, MSFO va Financial Analyst bo'yicha sertifikatlangan ekspertlar. Big Four tajribasi.",
    seoKeywords: "ACCA o'qituvchi, DipIFR mentor, moliya ekspert, FBA Academy ustoz",
    breadcrumb: "O'qituvchilar",
    badge: "Ekspertlar jamoasi",
    title: "o'qituvchilar",
    subtitle: "Barcha mentorlarimiz o'z sohasida 8+ yillik amaliy tajribaga ega, xalqaro sertifikatlangan mutaxassislar.",
    stats: [
      { value: String(INSTRUCTOR_COUNT), label: "Ekspert mentor" },
      { value: "45+", label: "Umumiy tajriba (yil)" },
      { value: "1000+", label: "O'qitilgan talabalar" },
    ],
    teamTitle: "Jamoamiz bilan tanishing",
    whyTitle: "Nega bizning o'qituvchilar?",
    whyDesc: "Har bir mentor aniq natijaga yo'naltirilgan va talabalarning muvaffaqiyatiga shaxsan mas'ul.",
    reviewsTitle: "Talabalarimiz nima deydi?",
    ctaTitle: "Mentorlarimiz bilan tanishing",
    ctaDesc: "Bepul konsultatsiya oling va o'qishni boshlang",
    ctaBtn: "Bepul konsultatsiya",
  },
  ru: {
    seoTitle: "Преподаватели — ACCA, DipIFR, Финансовые эксперты | FBA Academy",
    seoDescription: "Команда менторов FBA Academy: ACCA, F3, DipIFR, МСФО и Financial Analyst. Опыт Big Four.",
    seoKeywords: "преподаватель ACCA, ментор DipIFR, финансовый эксперт, FBA Academy",
    breadcrumb: "Преподаватели",
    badge: "Команда экспертов",
    title: "преподаватели",
    subtitle: "Все наши менторы имеют 8+ лет практического опыта и международные сертификаты.",
    stats: [
      { value: String(INSTRUCTOR_COUNT), label: "Эксперт-менторы" },
      { value: "45+", label: "Суммарный опыт (лет)" },
      { value: "1000+", label: "Обученных студентов" },
    ],
    teamTitle: "Познакомьтесь с нашей командой",
    whyTitle: "Почему наши преподаватели?",
    whyDesc: "Каждый ментор ориентирован на результат и лично отвечает за успех студентов.",
    reviewsTitle: "Что говорят наши студенты?",
    ctaTitle: "Познакомьтесь с нашими менторами",
    ctaDesc: "Получите бесплатную консультацию и начните обучение",
    ctaBtn: "Бесплатная консультация",
  },
  en: {
    seoTitle: "Teachers — ACCA, DipIFR, Finance Experts | FBA Academy",
    seoDescription: "FBA Academy mentors: certified experts in ACCA, F3, DipIFR, IFRS and Financial Analyst with Big Four experience.",
    seoKeywords: "ACCA teacher, DipIFR mentor, finance expert, FBA Academy",
    breadcrumb: "Teachers",
    badge: "Expert Team",
    title: "Our Teachers",
    subtitle: "All our mentors have 8+ years of practical experience and international certifications.",
    stats: [
      { value: String(INSTRUCTOR_COUNT), label: "Expert mentors" },
      { value: "45+", label: "Total experience (years)" },
      { value: "1000+", label: "Students trained" },
    ],
    teamTitle: "Meet Our Team",
    whyTitle: "Why Our Teachers?",
    whyDesc: "Each mentor is result-oriented and personally responsible for student success.",
    reviewsTitle: "What do our students say?",
    ctaTitle: "Meet our mentors",
    ctaDesc: "Get a free consultation and start learning",
    ctaBtn: "Free consultation",
  },
};

export default function Teachers() {
  const { lang } = useLanguage();
  const tx = TEXT[lang];
  const gl = (item: { uz: string; ru: string; en: string }) => (lang === "ru" ? item.ru : lang === "en" ? item.en : item.uz);
  const localizedTeachers = useMemo(() => localizeTeachers(teachers, lang), [lang]);
  const localizedTestimonials = useMemo(() => localizeTestimonials(testimonials, lang), [lang]);

  useSEO({
    title: tx.seoTitle,
    description: tx.seoDescription,
    keywords: tx.seoKeywords,
    breadcrumb: [{ name: tx.breadcrumb, url: "https://fbaacademy.uz/teachers" }],
    speakable: ["[data-speakable='teachers-title']", "[data-speakable='teachers-desc']"],
    jsonLd: [
      {
        "@type": "ItemList",
        name: lang === "ru" ? "Преподаватели FBA Academy" : lang === "en" ? "FBA Academy Teachers" : "FBA Academy O'qituvchilari",
        numberOfItems: teachers.length,
        itemListElement: localizedTeachers.map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Person",
            name: t.name,
            jobTitle: t.role,
            description: t.bio,
            image: t.avatar,
            worksFor: { "@type": "Organization", name: "FBA Academy" },
          },
        })),
      },
    ],
  });

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#11133c] via-[#1a2a4a] to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14"
        data-testid="section-teachers-hero"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <Breadcrumb items={[{ label: tx.breadcrumb }]} light />
          </div>
          <Badge className="mb-5 inline-flex rounded-full border-brand-accent/30 bg-brand/20 px-4 py-1.5 text-sm text-brand-accent-light backdrop-blur-sm">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" /> {tx.badge}
          </Badge>
          <h1
              className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
              data-testid="text-teachers-title"
              data-speakable="teachers-title"
            >
              {lang === "ru" ? "Наши " : lang === "en" ? "Our " : "Bizning "}
              <span className="bg-gradient-to-r from-brand-accent-light to-brand-accent bg-clip-text text-transparent">
                {tx.title}
              </span>
            </h1>
            <p className="mb-10 max-w-xl text-lg text-slate-300 leading-relaxed" data-speakable="teachers-desc">
              {tx.subtitle}
            </p>
            <div className="flex flex-wrap gap-6">
              {tx.stats.map((s, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm" data-testid={`stat-teacher-${i}`}>
                  <div className="text-2xl font-extrabold text-white">{s.value}</div>
                  <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEACHER CARDS ─────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-14 sm:py-20" data-testid="section-teachers-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-teachers-grid-title">
            {tx.teamTitle}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {localizedTeachers.map((teacher) => (
              <article
                key={teacher.id}
                className="group overflow-hidden rounded-2xl bg-zinc-900 ix-card-strong"
                data-testid={`card-teacher-${teacher.id}`}
              >
                <div className="relative aspect-[4/5] w-full max-h-72 overflow-hidden bg-zinc-950">
                  <TeacherAvatar
                    name={teacher.name}
                    src={teacher.avatar}
                    className={instructorPortraitClass()}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">
                      {teacher.experience}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-base font-extrabold text-white" data-testid={`text-teacher-name-${teacher.id}`}>
                    {teacher.name}
                  </h2>
                  <p className="mt-0.5 text-sm font-semibold text-brand-accent">{teacher.role}</p>
                  <p className="mt-3 text-xs text-zinc-400 leading-relaxed line-clamp-3">{teacher.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {teacher.courses.map((c) => (
                      <span key={c} className="rounded-full border border-white/10 bg-zinc-800 px-2 py-0.5 text-xs font-semibold text-zinc-300">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY OUR TEACHERS ──────────────────────────────────── */}
      <section className="bg-[#111] py-14 sm:py-20" data-testid="section-why-teachers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-why-title">
            {tx.whyTitle}
          </h2>
          <p className="mb-10 max-w-xl text-zinc-400">
            {tx.whyDesc}
          </p>
          <div className="grid gap-5 sm:grid-cols-3">
            {WHY_TEACHERS.map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900 p-7 transition-all hover:border-brand/30 hover:scale-[1.02]" data-testid={`card-why-${i}`}>
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-extrabold text-white">{gl(item.title)}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{gl(item.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDENT TESTIMONIALS ──────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-14 sm:py-20" data-testid="section-testimonials">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-testimonials-title">
            {tx.reviewsTitle}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {localizedTestimonials.map((t) => {
              const initials = t.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
              return (
                <div key={t.id} className="flex flex-col rounded-2xl border border-white/10 bg-zinc-900 p-6" data-testid={`card-testimonial-${t.id}`}>
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="flex-1 text-sm text-zinc-400 leading-relaxed">"{t.text}"</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-xs font-bold text-white">
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{t.name}</p>
                      <p className="text-xs text-zinc-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-brand-dark to-blue-700 py-14 sm:py-16" data-testid="section-teachers-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{tx.ctaTitle}</h2>
              <p className="mt-2 text-brand-accent-light">{tx.ctaDesc}</p>
            </div>
            <Button asChild size="lg" className="gap-2 rounded-full bg-amber-400 px-8 font-bold text-black hover:bg-amber-300" data-testid="button-teachers-cta">
              <Link href="/contacts">
                {tx.ctaBtn} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
