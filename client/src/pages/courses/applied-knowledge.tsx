import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import { LazyLeadForm, DeferredLeadForm } from "@/components/lazy-lead-form";
import { CheckCircle2, ArrowRight, BookOpen, Users, Award, GraduationCap, Clock, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { APPLIED_KNOWLEDGE_PAGE, appliedKnowledgeJsonLd } from "@/lib/i18n/applied-knowledge-page";

const BASE_URL = "https://fbaacademy.uz";

const FORMAT_ICONS = [BookOpen, Clock, Award, Users] as const;
const FOR_WHOM_ICONS = [GraduationCap, BookOpen, Users, TrendingUp] as const;

export default function AppliedKnowledgePage() {
  const { lang } = useLanguage();
  const tx = APPLIED_KNOWLEDGE_PAGE[lang];
  const learnIcons = [BookOpen, TrendingUp, Award] as const;

  useSEO({
    title: tx.seoTitle,
    description: tx.seoDescription,
    keywords: tx.seoKeywords,
    speakable: ["[data-speakable='hero-title']", "[data-speakable='hero-desc']"],
    breadcrumb: [
      { name: tx.breadcrumbCourses, url: `${BASE_URL}/courses` },
      { name: "ACCA", url: `${BASE_URL}/course/acca` },
      { name: "Applied Knowledge", url: `${BASE_URL}/course/applied-knowledge` },
    ],
    hreflang: [
      { lang: "en", url: `${BASE_URL}/course/applied-knowledge` },
      { lang: "uz", url: `${BASE_URL}/course/applied-knowledge?lang=uz` },
      { lang: "ru", url: `${BASE_URL}/course/applied-knowledge?lang=ru` },
      { lang: "x-default", url: `${BASE_URL}/course/applied-knowledge` },
    ],
    jsonLd: appliedKnowledgeJsonLd(lang, BASE_URL),
  });

  return (
    <Layout>
      <nav className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-zinc-500">
          <li><Link href="/" className="hover:text-white transition-colors">{tx.breadcrumbHome}</Link></li>
          <li>/</li>
          <li><Link href="/courses" className="hover:text-white transition-colors">{tx.breadcrumbCourses}</Link></li>
          <li>/</li>
          <li><Link href="/course/acca" className="hover:text-white transition-colors">ACCA</Link></li>
          <li>/</li>
          <li className="text-white font-medium">Applied Knowledge</li>
        </ol>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-800 to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300"><GraduationCap className="h-3.5 w-3.5" /> {tx.badge}</div>
              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-5xl leading-tight" data-speakable="hero-title">
                {tx.heroTitle}
              </h1>
              <p className="mt-4 max-w-xl text-lg text-slate-300 leading-relaxed" data-speakable="hero-desc">
                {tx.heroDesc}
              </p>
              <div className="mt-8">
                <a href="#enroll">
                  <Button size="lg" className="gap-2 rounded-full bg-white px-8 font-bold text-brand-dark hover:bg-zinc-100">
                    {tx.heroCta} <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl">
                <h3 className="mb-4 text-lg font-bold text-white">{tx.formTitle}</h3>
                <LazyLeadForm source="course-applied-knowledge" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionWhatTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {tx.whatIs.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <span className="text-sm font-medium text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionLearnTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {tx.learn.map((item, i) => {
              const Icon = learnIcons[i] ?? BookOpen;
              return (
                <div key={i} className="rounded-xl border border-white/10 bg-zinc-900 p-5">
                  <Icon className="mb-3 h-6 w-6 text-emerald-400" />
                  <h3 className="mb-2 text-base font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionForWhomTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {tx.forWhom.map((text, i) => {
              const Icon = FOR_WHOM_ICONS[i] ?? Users;
              return (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 border-l-4 border-l-emerald-500 bg-zinc-900 p-5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm font-medium text-zinc-200">{text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionWhyTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tx.why.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">{i + 1}</span>
                <span className="text-sm font-medium text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionFormatTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tx.format.map((item, i) => {
              const Icon = FORMAT_ICONS[i] ?? BookOpen;
              return (
                <div key={i} className="rounded-xl border border-white/10 bg-zinc-900 p-5">
                  <Icon className="mb-3 h-6 w-6 text-emerald-400" />
                  <h3 className="mb-2 text-base font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionResultsTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tx.results.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <span className="text-sm font-medium text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enroll" className="bg-gradient-to-br from-emerald-950 via-emerald-800 to-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-4xl">{tx.finalTitle}</h2>
              <p className="mt-4 text-lg text-slate-300 leading-relaxed">{tx.finalDesc}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl">
              <h3 className="mb-4 text-lg font-bold text-white">{tx.finalFormTitle}</h3>
              <DeferredLeadForm source="course-applied-knowledge-cta" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
