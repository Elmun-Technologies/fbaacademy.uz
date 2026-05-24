import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import { LazyLeadForm, DeferredLeadForm } from "@/components/lazy-lead-form";
import { courses } from "@/lib/data";
import { CheckCircle2, ArrowRight, GraduationCap, BookOpen, Users, Award, Globe, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { ACCA_PAGE, accaJsonLdSchemas } from "@/lib/i18n/acca-page";

const course = courses.find((c) => c.id === "acca")!;
const BASE_URL = "https://fbaacademy.uz";

export default function AccaPage() {
  const { lang } = useLanguage();
  const tx = ACCA_PAGE[lang];
  useSEO({
    title: tx.seoTitle,
    description: tx.seoDescription,
    ogTitle: tx.seoOgTitle,
    ogDescription: tx.seoOgDescription,
    keywords: tx.seoKeywords,
    publishedTime: "2024-01-15T09:00:00+05:00",
    modifiedTime: "2026-05-18T00:00:00+05:00",
    breadcrumb: [
      { name: tx.breadcrumbCourses, url: `${BASE_URL}/courses` },
      { name: "ACCA", url: `${BASE_URL}/course/acca` },
    ],
    hreflang: [
      { lang: "en", url: `${BASE_URL}/course/acca` },
      { lang: "uz", url: `${BASE_URL}/course/acca?lang=uz` },
      { lang: "ru", url: `${BASE_URL}/course/acca?lang=ru` },
      { lang: "x-default", url: `${BASE_URL}/course/acca` },
    ],
    speakable: ["[data-speakable='course-title']", "[data-speakable='course-desc']"],
    jsonLd: accaJsonLdSchemas(lang, BASE_URL),
  });

  return (
    <Layout>
      <nav aria-label="Breadcrumb" className="border-b bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="hover:text-brand-accent transition-colors" itemProp="item">
                <span itemProp="name">{tx.breadcrumbHome}</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true" className="text-slate-300">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/courses" className="hover:text-brand-accent transition-colors" itemProp="item">
                <span itemProp="name">{tx.breadcrumbCourses}</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <li aria-hidden="true" className="text-slate-300">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="font-semibold text-white" itemProp="name">ACCA</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#11133c] via-[#1a2a4a] to-slate-900 pb-12 pt-5 sm:pb-16 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-300">
                <Award className="h-3.5 w-3.5" /> {tx.heroBadge}
              </div>
              <h1 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-5xl" data-speakable="course-title">
                ACCA — Association of<br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-brand-accent-light to-brand-accent bg-clip-text text-transparent">Chartered Certified Accountants</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base text-slate-300 leading-relaxed sm:text-lg" data-speakable="course-desc">
                {tx.heroDescription}
              </p>
              <div className="mt-8">
                <Link href="#acca-enroll">
                  <Button size="lg" className="rounded-xl bg-brand px-8 font-bold text-white shadow-lg hover:bg-brand-dark">
                    {tx.heroCta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: tx.statDuration, value: tx.heroDurationValue },
                  { label: tx.statSubjects, value: tx.statSubjectsValue },
                  { label: tx.statFormat, value: tx.statFormatValue },
                  { label: tx.statStudents, value: course.studentsCount },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                    <div className="text-xs text-zinc-500 uppercase tracking-wide">{item.label}</div>
                    <div className="mt-0.5 text-sm font-bold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div id="acca-enroll" className="rounded-2xl bg-zinc-900 p-6 shadow-2xl">
              <h3 className="mb-1 text-base font-bold text-white">{tx.formTitle}</h3>
              <p className="mb-4 text-sm text-zinc-400">{tx.formHint}</p>
              <LazyLeadForm source="course-acca" />
              <p className="mt-3 text-center text-xs text-zinc-400">{tx.formFootnote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionWhatIsTitle}</h2>
          <p className="mb-8 max-w-3xl text-zinc-400">{tx.sectionWhatIsLead}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tx.accaInfo.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                <p className="text-sm text-slate-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionLearnTitle}</h2>
          <p className="mb-8 text-zinc-400">{tx.sectionLearnLead}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tx.whatLearn.map((item, i) => {
              const icons = [BookOpen, TrendingUp, Award, Globe, Users, GraduationCap];
              const Icon = icons[i] ?? BookOpen;
              return (
                <div key={i} className="flex gap-4 rounded-2xl border border-white/10 bg-zinc-900 p-5 transition-shadow hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/20">
                    <Icon className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionForWhomTitle}</h2>
          <p className="mb-8 text-zinc-400">{tx.sectionForWhomLead}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tx.forWhom.map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900 p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 text-3xl">{item.emoji}</div>
                <h3 className="mb-2 text-base font-extrabold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionWhyTitle}</h2>
          <p className="mb-8 text-zinc-400">{tx.sectionWhyLead}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {tx.whyAcca.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                <p className="text-sm font-medium text-slate-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionStagesTitle}</h2>
          <p className="mb-8 text-zinc-400">{tx.sectionStagesLead}</p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            {tx.stages.map((stage, i) => (
              <Link key={i} href={stage.href}>
                <div className="group cursor-pointer rounded-2xl border border-white/10 bg-zinc-900 p-6 transition-all hover:border-brand/30 hover:shadow-lg">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stage.color} text-2xl font-extrabold text-white shadow-md`}>
                    {i + 1}
                  </div>
                  <div className={`mb-3 inline-flex rounded-full bg-gradient-to-r ${stage.color} px-3 py-1 text-xs font-bold text-white`}>
                    {stage.duration}
                  </div>
                  <h3 className="mb-3 text-lg font-extrabold text-white">{stage.title}</h3>
                  <ul className="space-y-2">
                    {stage.papers.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-zinc-400">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" /> {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-accent opacity-0 transition-opacity group-hover:opacity-100">
                    {tx.stageMore} <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionFormatTitle}</h2>
          <p className="mb-8 text-zinc-400">{tx.sectionFormatLead}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {tx.formatItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                <p className="text-sm text-slate-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionOutcomesTitle}</h2>
          <p className="mb-8 text-zinc-400">{tx.sectionOutcomesLead}</p>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            {tx.outcomes.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <p className="text-sm text-slate-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-dark via-brand to-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">{tx.finalCtaTitle}</h2>
              <p className="mt-4 text-base text-blue-100 leading-relaxed sm:text-lg">{tx.finalCtaLead}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Award, text: tx.finalBullets[0]! },
                  { icon: BookOpen, text: tx.finalBullets[1]! },
                  { icon: TrendingUp, text: tx.finalBullets[2]! },
                  { icon: Users, text: tx.finalBullets[3]! },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                    <item.icon className="h-5 w-5 text-blue-200" />
                    <span className="text-sm font-medium text-white">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-6 shadow-2xl">
              <h3 className="mb-1 text-lg font-extrabold text-white">{tx.finalFormTitle}</h3>
              <p className="mb-4 text-sm text-zinc-400">{tx.finalFormHint}</p>
              <DeferredLeadForm source="course-acca-cta" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
