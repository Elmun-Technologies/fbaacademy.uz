import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import { LazyLeadForm, DeferredLeadForm } from "@/components/lazy-lead-form";
import { CheckCircle2, ArrowRight, BookOpen, Users, Award, GraduationCap, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/language-context";
import { JURISPRUDENCE_PAGE, jurisprudenceJsonLd } from "@/lib/i18n/jurisprudence-page";

const BASE_URL = "https://fbaacademy.uz";

const LEARN_ICONS = [BookOpen, Users, TrendingUp, Award, GraduationCap] as const;

export default function JurisprudencePage() {
  const { lang } = useLanguage();
  const tx = JURISPRUDENCE_PAGE[lang];

  useSEO({
    title: tx.seoTitle,
    description: tx.seoDescription,
    keywords: tx.seoKeywords,
    breadcrumb: [
      { name: tx.breadcrumbCourses, url: `${BASE_URL}/courses` },
      { name: tx.breadcrumbCourseName, url: `${BASE_URL}/course/jurisprudence` },
    ],
    hreflang: [
      { lang: "en", url: `${BASE_URL}/course/jurisprudence` },
      { lang: "uz", url: `${BASE_URL}/course/jurisprudence?lang=uz` },
      { lang: "ru", url: `${BASE_URL}/course/jurisprudence?lang=ru` },
      { lang: "x-default", url: `${BASE_URL}/course/jurisprudence` },
    ],
    speakable: ["[data-speakable='course-title']", "[data-speakable='course-desc']"],
    jsonLd: jurisprudenceJsonLd(lang, BASE_URL),
  });

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-950 via-slate-800 to-slate-900 pb-12 pt-5 sm:pb-16 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-zinc-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">{tx.breadcrumbHome}</Link>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <Link href="/courses" className="hover:text-amber-400 transition-colors">{tx.breadcrumbCourses}</Link>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="font-semibold text-white">{tx.breadcrumbCourseName}</span>
          </nav>

          <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-300">
                <Award className="h-3.5 w-3.5" /> {tx.badge}
              </div>
              <h1 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-5xl" data-speakable="course-title">
                {tx.heroTitleLine1}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">{tx.heroTitleHighlight}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base text-slate-300 leading-relaxed sm:text-lg" data-speakable="course-desc">
                {tx.heroDesc}
              </p>
              <div className="mt-8">
                <Link href="#jur-enroll">
                  <Button size="lg" className="rounded-xl bg-amber-600 px-8 font-bold text-white shadow-lg hover:bg-amber-700">
                    {tx.heroCta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div id="jur-enroll" className="rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl">
              <h3 className="mb-1 text-base font-bold text-white">{tx.formTitle}</h3>
              <p className="mb-4 text-sm text-zinc-400">{tx.formHint}</p>
              <LazyLeadForm source="course-jurisprudence" />
              <p className="mt-3 text-center text-xs text-zinc-500">{tx.formFootnote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionWhyTitle}</h2>
          <p className="mb-10 max-w-3xl text-zinc-400">{tx.sectionWhyLead}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tx.whyNeeded.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <span className="text-sm font-medium text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionLearnTitle}</h2>
          <p className="mb-10 max-w-3xl text-zinc-400">{tx.sectionLearnLead}</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tx.learn.map((item, i) => {
              const Icon = LEARN_ICONS[i] ?? BookOpen;
              return (
                <div key={i} className="rounded-xl border border-amber-500/10 bg-zinc-900 p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/20 bg-amber-900/30">
                    <Icon className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionForWhomTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tx.forWhom.map((item, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl border border-white/10 bg-zinc-900 p-5 ring-1 ring-amber-500/20">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-900/20 text-2xl">
                  {item.emoji}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionAdvantagesTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {tx.advantages.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <span className="text-sm font-medium text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionFormatTitle}</h2>
          <p className="mb-10 max-w-3xl text-zinc-400">{tx.sectionFormatLead}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tx.format.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-sm font-extrabold text-amber-300">
                  {i + 1}
                </div>
                <span className="text-sm font-medium text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionOutcomesTitle}</h2>
          <p className="mb-10 max-w-3xl text-zinc-400">{tx.sectionOutcomesLead}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {tx.outcomes.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <span className="text-sm font-medium text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-950 via-amber-800 to-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-4xl">{tx.finalTitle}</h2>
              <p className="mt-4 max-w-xl text-amber-100 leading-relaxed">{tx.finalDesc}</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/90">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" /> {tx.finalBullet1}</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" /> {tx.finalBullet2}</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" /> {tx.finalBullet3}</span>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-1 text-base font-bold text-white">{tx.finalFormTitle}</h3>
              <p className="mb-4 text-sm text-amber-100">{tx.finalFormHint}</p>
              <DeferredLeadForm source="course-jurisprudence-cta" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
