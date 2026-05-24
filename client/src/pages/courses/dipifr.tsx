import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import { LazyLeadForm, DeferredLeadForm } from "@/components/lazy-lead-form";
import { courses } from "@/lib/data";
import { CheckCircle2, ArrowRight, BookOpen, FileText, BarChart3, GraduationCap, Users, Award } from "lucide-react";
import CourseCertificatesSection from "@/components/course-certificates-section";
import { PublicMediaPicture } from "@/components/public-media-picture";
import CourseReviewsSection from "@/components/course-reviews-section";
import { useLanguage } from "@/contexts/language-context";
import { DIPIFR_EXPERTS, DIPIFR_REVIEW_REELS, resolveExpertImage } from "@/lib/course-proof-data";
import { DIPIFR_PAGE, dipifrJsonLd } from "@/lib/i18n/dipifr-page";
import { dipifrFaqCategories } from "@/lib/i18n/dipifr-faq";

const course = courses.find((c) => c.id === "dipifr")!;
const BASE_URL = "https://fbaacademy.uz";

const FEATURE_ICONS = [BookOpen, FileText, BarChart3, GraduationCap, Users, Award] as const;
const FINAL_CTA_ICONS = [GraduationCap, BookOpen, Award, Users] as const;

export default function DipIFRPage() {
  const { lang } = useLanguage();
  const tx = DIPIFR_PAGE[lang];
  const faqCategories = dipifrFaqCategories(lang);
  const [activeFaqId, setActiveFaqId] = useState(faqCategories[0]?.id ?? "study");

  useEffect(() => {
    setActiveFaqId(dipifrFaqCategories(lang)[0]?.id ?? "study");
  }, [lang]);

  useSEO({
    title: tx.seoTitle,
    description: tx.seoDescription,
    ogTitle: tx.ogTitle,
    ogDescription: tx.ogDescription,
    keywords: tx.seoKeywords,
    publishedTime: "2024-02-01T09:00:00+05:00",
    modifiedTime: "2026-05-18T00:00:00+05:00",
    breadcrumb: [
      { name: tx.breadcrumbCourses, url: `${BASE_URL}/courses` },
      { name: tx.breadcrumbCourseName, url: `${BASE_URL}/course/dipifr` },
    ],
    hreflang: [
      { lang: "en", url: `${BASE_URL}/course/dipifr` },
      { lang: "uz", url: `${BASE_URL}/course/dipifr?lang=uz` },
      { lang: "ru", url: `${BASE_URL}/course/dipifr?lang=ru` },
      { lang: "x-default", url: `${BASE_URL}/course/dipifr` },
    ],
    speakable: ["[data-speakable='course-title']", "[data-speakable='course-desc']"],
    jsonLd: dipifrJsonLd(lang, BASE_URL),
  });

  const activeFaqItems = faqCategories.find((c) => c.id === activeFaqId)?.items ?? [];

  const heroStats = [
    { label: tx.heroStatDuration, value: course.duration },
    { label: tx.heroStatAccess, value: tx.heroStatAccessValue },
    { label: tx.heroStatFormat, value: tx.heroStatFormatValue },
    { label: tx.heroStatDocument, value: tx.heroStatDocumentValue },
  ];

  return (
    <Layout>
      <nav aria-label="Breadcrumb" className="border-b bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400">
            <li><Link href="/" className="hover:text-indigo-400 transition-colors">{tx.breadcrumbHome}</Link></li>
            <li aria-hidden="true" className="text-slate-300">/</li>
            <li><Link href="/courses" className="hover:text-indigo-400 transition-colors">{tx.breadcrumbCourses}</Link></li>
            <li aria-hidden="true" className="text-slate-300">/</li>
            <li className="font-semibold text-white">{tx.breadcrumbCourseName}</li>
          </ol>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-800 to-slate-900 pb-12 pt-5 sm:pb-16 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-400/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1.5 text-xs font-semibold text-indigo-300">
                <GraduationCap className="h-3.5 w-3.5" /> {tx.heroBadge}
              </div>
              <h1 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-5xl" data-speakable="course-title">
                {tx.heroTitleLine1}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">{tx.heroTitleHighlight}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base text-slate-300 leading-relaxed sm:text-lg" data-speakable="course-desc">
                {tx.heroDesc}
              </p>
              <div className="mt-8">
                <Link href="#dipifr-enroll">
                  <Button size="lg" className="rounded-xl bg-indigo-600 px-8 font-bold text-white shadow-lg hover:bg-indigo-700">
                    {tx.heroCta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {heroStats.map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                    <div className="text-xs text-zinc-500 uppercase tracking-wide">{item.label}</div>
                    <div className="mt-0.5 text-sm font-bold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div id="dipifr-enroll" className="rounded-2xl bg-zinc-900 p-6 shadow-2xl">
              <h3 className="mb-1 text-base font-bold text-white">{tx.formTitle}</h3>
              <p className="mb-4 text-sm text-zinc-400">{tx.formHint}</p>
              <LazyLeadForm source="course-dipifr" />
              <p className="mt-3 text-center text-xs text-zinc-400">{tx.formFootnote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionWhatTitle}</h2>
          <p className="mb-8 max-w-3xl text-zinc-400">{tx.sectionWhatLead}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tx.whatBullets.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
                <p className="text-sm text-slate-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionFeaturesTitle}</h2>
          <p className="mb-8 text-zinc-400">{tx.sectionFeaturesLead}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tx.features.map((f, i) => {
              const Icon = FEATURE_ICONS[i] ?? BookOpen;
              return (
                <div key={i} className="flex gap-4 rounded-2xl border border-white/10 bg-zinc-900 p-5 transition-shadow hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20">
                    <Icon className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
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
            {tx.whyDipifr.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
                <p className="text-sm font-medium text-slate-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionFlowTitle}</h2>
          <p className="mb-8 max-w-3xl text-zinc-400">{tx.sectionFlowLead}</p>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
            {tx.courseFlow.map((step, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-900/30 text-base font-extrabold text-indigo-300">
                  {i + 1}
                </div>
                <h3 className="text-base font-extrabold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionExpertsTitle}</h2>
          <p className="mb-8 max-w-3xl text-zinc-400">{tx.sectionExpertsLead}</p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            {DIPIFR_EXPERTS.map((expert, i) => (
              <article key={expert.name} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
                <PublicMediaPicture
                  src={resolveExpertImage(expert.image)}
                  alt={expert.name}
                  className="h-56 w-full object-cover object-top"
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : undefined}
                />
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-white">{expert.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-indigo-300">{expert.credentials}</p>
                  <p className="mt-1 text-sm text-zinc-300">{expert.role}</p>
                  <p className="mt-3 text-sm text-zinc-400">{expert.experience}</p>
                  <ul className="mt-4 space-y-2">
                    {expert.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CourseReviewsSection
        title={tx.reviewsTitle}
        subtitle={tx.reviewsSubtitle}
        reviews={DIPIFR_REVIEW_REELS}
        testId="section-dipifr-reviews"
      />

      {/* DipIFR o'tganlar */}
      <section className="bg-gradient-to-r from-indigo-950/60 to-slate-900 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            {lang === "ru" ? "Наши выпускники DipIFR" : lang === "en" ? "Our DipIFR Graduates" : "DipIFR muvaffaqiyatli topshirganlar"}
          </h2>
          <p className="mb-8 text-base text-zinc-400">
            {lang === "ru" ? "Студенты FBA Academy, успешно сдавшие DipIFR — каждый диплом является серьёзным достижением" : lang === "en" ? "FBA Academy students who passed DipIFR — each diploma is a major achievement" : "FBA Academy o'quvchilari orasida DipIFRdan muvaffaqiyatli o'tganlar — har bir diplom katta yutuq"}
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Shokhrukh Yangiboev", "Temur Uralov", "Jakhongir Matchanov",
              "Irodakhon Talatkhon", "Diyara Nazarova", "Bakhromjon Musaev",
              "Atxamjon Yusupov", "Mirjamol Sidikov",
            ].map((name, i) => (
              <div key={i} className="flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-400" />
                <span className="text-sm font-semibold text-indigo-200">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CourseCertificatesSection
        courseId="dipifr"
        title={tx.certificatesTitle}
        subtitle={tx.certificatesSubtitle}
      />

      <section className="bg-[#111] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">{tx.sectionOutcomesTitle}</h2>
          <p className="mb-8 max-w-3xl text-zinc-400">{tx.sectionOutcomesLead}</p>
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

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold text-white sm:text-4xl">{tx.faqSectionTitle}</h2>
          <div className="mb-8 flex flex-wrap gap-2">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFaqId(cat.id)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${activeFaqId === cat.id ? "bg-indigo-600 text-white" : "border border-white/20 bg-zinc-900 text-zinc-300 hover:border-white/40"}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-0 divide-y divide-white/10">
              {activeFaqItems.map((faq, i) => (
                <AccordionItem key={`${activeFaqId}-${i}`} value={`faq-${activeFaqId}-${i}`} className="border-none py-1">
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:text-indigo-300 hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-zinc-400">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-indigo-900 via-blue-950 to-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">{tx.finalTitle}</h2>
              <p className="mt-4 text-base text-indigo-100 leading-relaxed sm:text-lg">{tx.finalDesc}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {tx.finalBullets.map((text, i) => {
                  const Icon = FINAL_CTA_ICONS[i] ?? GraduationCap;
                  return (
                    <div key={i} className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-indigo-200" />
                      <span className="text-sm font-medium text-white">{text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-6 shadow-2xl">
              <h3 className="mb-1 text-lg font-extrabold text-white">{tx.finalFormTitle}</h3>
              <p className="mb-4 text-sm text-zinc-400">{tx.finalFormHint}</p>
              <DeferredLeadForm source="course-dipifr-cta" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
