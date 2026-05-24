import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import { LazyLeadForm, DeferredLeadForm } from "@/components/lazy-lead-form";
import { CheckCircle2, ArrowRight, BookOpen, Users, Award, GraduationCap, Clock, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/language-context";
import { STRATEGIC_PROFESSIONAL_PAGE, strategicProfessionalJsonLd } from "@/lib/i18n/strategic-professional-page";

const BASE_URL = "https://fbaacademy.uz";

export default function StrategicProfessionalPage() {
  const { lang } = useLanguage();
  const tx = STRATEGIC_PROFESSIONAL_PAGE[lang];

  useSEO({
    title: tx.seoTitle,
    description: tx.seoDescription,
    keywords: tx.seoKeywords,
    speakable: ["[data-speakable='course-title']", "[data-speakable='course-desc']"],
    breadcrumb: [
      { name: tx.breadcrumbCourses, url: `${BASE_URL}/courses` },
      { name: "ACCA", url: `${BASE_URL}/course/acca` },
      { name: "Strategic Professional", url: `${BASE_URL}/course/strategic-professional` },
    ],
    hreflang: [
      { lang: "en", url: `${BASE_URL}/course/strategic-professional` },
      { lang: "uz", url: `${BASE_URL}/course/strategic-professional?lang=uz` },
      { lang: "ru", url: `${BASE_URL}/course/strategic-professional?lang=ru` },
      { lang: "x-default", url: `${BASE_URL}/course/strategic-professional` },
    ],
    jsonLd: strategicProfessionalJsonLd(lang, BASE_URL),
  });

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1035] via-[#11133c] to-slate-900 pb-16 pt-5 sm:pb-20 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-500/8 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-zinc-400">
            <Link href="/" className="hover:text-white">{tx.breadcrumbHome}</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-white">{tx.breadcrumbCourses}</Link>
            <span>/</span>
            <Link href="/course/acca" className="hover:text-white">ACCA</Link>
            <span>/</span>
            <span className="font-semibold text-white">Strategic Professional</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-14 lg:items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-300">
                <Award className="h-3.5 w-3.5" /> {tx.badge}
              </div>
              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-5xl leading-tight" data-speakable="course-title">
                {tx.heroTitleLine1}{" "}
                <span className="bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
                  {tx.heroTitleHighlight}
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-zinc-300 leading-relaxed text-lg" data-speakable="course-desc">
                {tx.heroDesc}
              </p>
              <div className="mt-8">
                <a href="#cta">
                  <Button className="gap-2 rounded-full bg-amber-600 px-8 font-bold text-white hover:bg-amber-700">
                    {tx.heroCta} <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-zinc-900 p-6 shadow-2xl">
              <h3 className="mb-4 text-lg font-bold text-white">{tx.formTitle}</h3>
              <LazyLeadForm source="course-strategic-professional" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionWhatTitle}</h2>
          <p className="mt-3 mb-8 max-w-3xl text-zinc-400 leading-relaxed">{tx.sectionWhatLead}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tx.whatIs.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                <span className="text-sm font-medium text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionLearnTitle}</h2>
          <p className="mt-3 mb-8 text-zinc-400">{tx.sectionLearnLead}</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {tx.learn.map((item, i) => {
              const card = (
                <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900 transition-colors hover:border-amber-400/30">
                  <div className="h-1.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600" />
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-amber-300" />
                      <h3 className="text-base font-extrabold text-white">{item.title}</h3>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                    {item.href ? (
                      <p className="mt-3 text-xs font-semibold text-amber-300">
                        {lang === "ru" ? "Открыть страницу курса →" : lang === "en" ? "Open course page →" : "Kurs sahifasini ochish →"}
                      </p>
                    ) : null}
                  </div>
                </div>
              );

              return item.href ? (
                <Link key={i} href={item.href}>
                  {card}
                </Link>
              ) : (
                <div key={i}>{card}</div>
              );
            })}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/course/sbr-strategic-business-reporting">
              <Button variant="outline" className="gap-2 rounded-full border-amber-400/40 text-amber-200 hover:bg-amber-400/10">
                {lang === "ru" ? "SBR — полная страница курса" : lang === "en" ? "SBR — full course page" : "SBR — to'liq kurs sahifasi"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionForWhomTitle}</h2>
          <p className="mt-3 mb-8 text-zinc-400">{tx.sectionForWhomLead}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {tx.forWhom.map((item, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-900/20 text-2xl border border-amber-500/20">
                  {item.emoji}
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionWhyTitle}</h2>
          <p className="mt-3 mb-8 text-zinc-400">{tx.sectionWhyLead}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tx.why.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                <span className="text-sm font-medium text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionFormatTitle}</h2>
          <p className="mt-3 mb-8 text-zinc-400">{tx.sectionFormatLead}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tx.format.map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <Clock className="h-5 w-5 shrink-0 text-amber-300" />
                <span className="text-sm font-medium text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionOutcomesTitle}</h2>
          <p className="mt-3 mb-8 text-zinc-400">{tx.sectionOutcomesLead}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {tx.outcomes.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 border-l-4 border-l-amber-400 bg-zinc-900 p-5">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                <span className="text-sm font-medium text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-900/20 p-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-amber-400" />
              <div>
                <h3 className="text-base font-extrabold text-white">{tx.fellowTitle}</h3>
                <p className="mt-1 text-sm text-zinc-400">{tx.fellowDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="scroll-mt-20 bg-gradient-to-br from-[#1a1035] via-amber-900/40 to-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-4xl">{tx.finalTitle}</h2>
              <p className="mt-4 text-amber-100 leading-relaxed">{tx.finalDesc}</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-amber-100">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" /> {tx.stat1}
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" /> {tx.stat2}
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" /> {tx.stat3}
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm ring-1 ring-amber-500/20">
              <h3 className="mb-4 text-lg font-bold text-white">{tx.finalFormTitle}</h3>
              <DeferredLeadForm source="course-strategic-professional-cta" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
