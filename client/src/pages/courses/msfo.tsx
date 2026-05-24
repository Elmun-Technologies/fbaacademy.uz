import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import { LazyLeadForm, DeferredLeadForm } from "@/components/lazy-lead-form";
import { CheckCircle2, ArrowRight, BookOpen, Users, Award, Building2, GraduationCap, Clock } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/language-context";
import { MSFO_PAGE, msfoJsonLd } from "@/lib/i18n/msfo-page";
import PartnerLogosMarquee from "@/components/partner-logos-marquee";

const BASE_URL = "https://fbaacademy.uz";

const WHY_FBA_ICONS = [Award, Users, Clock, BookOpen, Building2] as const;

export default function MsfoPage() {
  const { lang } = useLanguage();
  const tx = MSFO_PAGE[lang];

  useSEO({
    title: tx.seoTitle,
    description: tx.seoDescription,
    ogTitle: tx.ogTitle,
    ogDescription: tx.ogDescription,
    keywords: tx.seoKeywords,
    publishedTime: "2026-04-16T09:00:00+05:00",
    modifiedTime: "2026-05-18T00:00:00+05:00",
    breadcrumb: [
      { name: tx.breadcrumbCourses, url: `${BASE_URL}/courses` },
      { name: tx.breadcrumbCourseName, url: `${BASE_URL}/course/msfo` },
    ],
    hreflang: [
      { lang: "en", url: `${BASE_URL}/course/msfo` },
      { lang: "uz", url: `${BASE_URL}/course/msfo?lang=uz` },
      { lang: "ru", url: `${BASE_URL}/course/msfo?lang=ru` },
      { lang: "x-default", url: `${BASE_URL}/course/msfo` },
    ],
    speakable: ["[data-speakable='course-title']", "[data-speakable='course-desc']"],
    jsonLd: msfoJsonLd(lang, BASE_URL),
  });

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400">
            <li><Link href="/" className="hover:text-sky-400 transition-colors">{tx.breadcrumbHome}</Link></li>
            <li aria-hidden="true" className="text-slate-300">/</li>
            <li><Link href="/courses" className="hover:text-sky-400 transition-colors">{tx.breadcrumbCourses}</Link></li>
            <li aria-hidden="true" className="text-slate-300">/</li>
            <li className="font-semibold text-white">{tx.breadcrumbCourseName}</li>
          </ol>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#11133c] to-slate-900 pb-12 pt-5 sm:pb-16 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
            <div>
              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-6xl" data-speakable="course-title">
                {tx.heroTitleLine1}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">{tx.heroTitleHighlight}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base text-slate-300 leading-relaxed sm:text-lg" data-speakable="course-desc">
                {tx.heroDesc}
              </p>
              <div className="mt-8">
                <Link href="#msfo-enroll">
                  <Button size="lg" className="rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-8 font-bold text-white shadow-lg hover:from-sky-700 hover:to-blue-800">
                    {tx.heroCta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div id="msfo-enroll" className="rounded-2xl bg-zinc-900 p-6 shadow-2xl">
              <h3 className="mb-1 text-base font-bold text-white">{tx.formTitle}</h3>
              <p className="mb-4 text-sm text-zinc-400">{tx.formHint}</p>
              <LazyLeadForm source="course-msfo" />
              <p className="mt-3 text-center text-xs text-zinc-400">{tx.formFootnote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. МСФО NIMA? */}
      <section className="bg-[#111] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-5 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.sectionWhatTitle}</h2>
          <p className="max-w-4xl text-base text-slate-300 leading-relaxed sm:text-lg">{tx.sectionWhatBody}</p>
        </div>
      </section>

      {/* 3. KIMLAR UCHUN */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.sectionForWhomTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tx.forWhom.map((item, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-white/10 border-l-4 border-l-sky-500 bg-zinc-900 p-5 transition-shadow hover:shadow-md">
                <span className="text-2xl">{item.emoji}</span>
                <p className="text-sm font-medium text-slate-200 leading-relaxed">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEGA МСФО */}
      <section className="bg-[#111] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.sectionWhyTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {tx.whyLearn.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
                <p className="text-sm text-slate-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NIMA O'ZGARADI */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.sectionOutcomesTitle}</h2>
          <p className="mb-8 text-base text-zinc-400 sm:text-lg">{tx.sectionOutcomesLead}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {tx.outcomes.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <p className="text-sm text-slate-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NEGA FBA ACADEMY */}
      <section className="bg-[#111] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.sectionWhyFbaTitle}</h2>
          <p className="mb-8 text-base text-zinc-400 sm:text-lg">{tx.sectionWhyFbaLead}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tx.whyFba.map((item, i) => {
              const Icon = WHY_FBA_ICONS[i % WHY_FBA_ICONS.length];
              return (
                <div key={i} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-zinc-900 p-5 transition-shadow hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/20">
                    <Icon className="h-5 w-5 text-sky-400" />
                  </div>
                  <p className="text-sm font-medium text-slate-200 leading-relaxed">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. USTOZ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.sectionInstructorTitle}</h2>
          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-sky-500/20">
                <GraduationCap className="h-8 w-8 text-sky-400" />
              </div>
              <div>
                <p className="text-lg font-extrabold text-white">{tx.instructorPlaceholderTitle}</p>
                <p className="mt-1 text-sm text-zinc-400">{tx.instructorPlaceholderHint}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FORMAT */}
      <section className="bg-[#111] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.sectionFormatTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {tx.courseFormat.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
                <p className="text-sm text-slate-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* МСФО o'tganlar */}
      <section className="bg-gradient-to-r from-emerald-950/60 to-slate-900 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            {lang === "ru" ? "Наши выпускники МСФО" : lang === "en" ? "Our IFRS Graduates" : "МСФО muvaffaqiyatli topshirganlar"}
          </h2>
          <p className="mb-8 text-base text-zinc-400">
            {lang === "ru" ? "Студенты FBA Academy, успешно завершившие курс МСФО" : lang === "en" ? "FBA Academy students who successfully completed the IFRS course" : "FBA Academy o'quvchilari orasida МСФО kursini muvaffaqiyatli tugatganlar"}
          </p>
          <div className="flex flex-wrap gap-3">
            {["Nigora Muminova", "Shokhista Suvonova", "Dilmurod Almatov"].map((name, i) => (
              <div key={i} className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-200">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerLogosMarquee
        className="py-16 sm:py-20"
        title={tx.partnersTitle}
        testId="section-msfo-partners"
      />

      {/* 10. CTA */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#11133c] to-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{tx.finalTitle}</h2>
              <p className="mt-4 text-base text-blue-100 leading-relaxed sm:text-lg">{tx.finalLine1}</p>
              <p className="mt-3 text-sm text-blue-200/80 leading-relaxed">{tx.finalLine2}</p>
            </div>
            <div className="rounded-2xl bg-zinc-900 p-6 shadow-2xl">
              <h3 className="mb-1 text-lg font-extrabold text-white">{tx.finalFormTitle}</h3>
              <p className="mb-4 text-sm text-zinc-400">{tx.finalFormHint}</p>
              <DeferredLeadForm source="course-msfo-cta" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
