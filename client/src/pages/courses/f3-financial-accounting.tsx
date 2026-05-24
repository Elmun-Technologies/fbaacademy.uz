import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import { LazyLeadForm, DeferredExtendedLeadForm } from "@/components/lazy-lead-form";
import YouTubeEmbed from "@/components/youtube-embed";
import { CheckCircle2, ArrowRight, BookOpen, Users, Award, GraduationCap, Clock, TrendingUp, Play } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/language-context";
import { F3_FINANCIAL_ACCOUNTING_PAGE, f3FinancialAccountingJsonLd } from "@/lib/i18n/f3-financial-accounting-page";
import { ACADEMY_INSTRUCTORS } from "@/lib/instructors";
import InstructorPhoto, { instructorPortraitClass } from "@/components/instructor-photo";

const BASE_URL = "https://fbaacademy.uz";
const F3_INTRO_VIDEO_ID = "cUPN3GDEOIw";
const F3_LEARN_SHORT_VIDEO_ID = "H9rP9T3WyK0";

const STUDENT_REVIEWS = [
  { name: "Abdulaziz", score: "76/100", videoUrl: "https://www.instagram.com/reel/DHl6E_bIlCx/" },
  { name: "Asadbek", score: "74/100", videoUrl: "https://www.instagram.com/reel/DHl7OMwIJkx/" },
  { name: "Nilufar Toshpulatova", score: "69/100", videoUrl: "https://www.instagram.com/reel/DHl70Soov7D/" },
  { name: "Sarvinoz Matyaqubova", score: "62/100", videoUrl: "https://www.instagram.com/reel/DHl8PbBoVDD/" },
  { name: "Oybek Ashirov", score: "75/100", videoUrl: "https://www.instagram.com/reel/DHl9OO3oFVS/" },
  { name: "Asilbek", score: "71/100", videoUrl: "https://www.instagram.com/reel/DHl9q0hI7aO/" },
  { name: "Sunnatillo", score: "68/100", videoUrl: "https://www.instagram.com/reel/DHl-CUOIMBi/" },
  { name: "Muhammadali", score: "73/100", videoUrl: "https://www.instagram.com/reel/DHl-bTIIJBv/" },
];

const WHAT_LEARN_ICONS = [BookOpen, TrendingUp, Award, Clock, Users, GraduationCap] as const;
const CTA_BULLET_ICONS = [GraduationCap, BookOpen, TrendingUp, Users] as const;

export default function F3FinancialAccountingPage() {
  const { lang } = useLanguage();
  const tx = F3_FINANCIAL_ACCOUNTING_PAGE[lang];
  const tt = (en: string, uz: string, ru: string) => (lang === "uz" ? uz : lang === "ru" ? ru : en);

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
      { name: tx.breadcrumbAcca, url: `${BASE_URL}/course/acca` },
      { name: tx.breadcrumbF3, url: `${BASE_URL}/course/f3-financial-accounting` },
    ],
    hreflang: [
      { lang: "en", url: `${BASE_URL}/course/f3-financial-accounting` },
      { lang: "uz", url: `${BASE_URL}/course/f3-financial-accounting?lang=uz` },
      { lang: "ru", url: `${BASE_URL}/course/f3-financial-accounting?lang=ru` },
      { lang: "x-default", url: `${BASE_URL}/course/f3-financial-accounting` },
    ],
    speakable: ["[data-speakable='course-title']", "[data-speakable='course-desc']"],
    jsonLd: f3FinancialAccountingJsonLd(lang, BASE_URL),
  });

  return (
    <Layout>
      <nav aria-label="Breadcrumb" className="border-b bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400">
            <li><Link href="/" className="hover:text-orange-400 transition-colors">{tx.breadcrumbHome}</Link></li>
            <li aria-hidden="true" className="text-slate-300">/</li>
            <li><Link href="/courses" className="hover:text-orange-400 transition-colors">{tx.breadcrumbCourses}</Link></li>
            <li aria-hidden="true" className="text-slate-300">/</li>
            <li><Link href="/course/acca" className="hover:text-orange-400 transition-colors">{tx.breadcrumbAcca}</Link></li>
            <li aria-hidden="true" className="text-slate-300">/</li>
            <li className="font-semibold text-white">{tx.breadcrumbF3}</li>
          </ol>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-950 via-slate-800 to-slate-900 pb-12 pt-5 sm:pb-16 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1.5 text-xs font-semibold text-orange-300">
                <GraduationCap className="h-3.5 w-3.5" /> {tx.heroBadge}
              </div>
              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-6xl" data-speakable="course-title">
                {tx.heroTitleLine1}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">{tx.heroTitleHighlight}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base text-slate-300 leading-relaxed sm:text-lg" data-speakable="course-desc">
                {tx.heroDesc}
              </p>
              <div className="mt-8">
                <Link href="#f3-enroll">
                  <Button size="lg" className="w-full rounded-xl bg-gradient-to-r from-orange-600 to-orange-800 px-8 font-bold text-white shadow-lg hover:from-orange-700 hover:to-orange-900 sm:w-auto">
                    {tx.heroCta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-800 bg-gradient-to-br from-orange-500 to-amber-500 text-xs font-bold text-white">
                      {["A", "S", "N", "O", "M"][i - 1]}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-zinc-400">{tx.heroStudentsLine}</p>
              </div>
            </div>

            <div id="f3-enroll" className="rounded-2xl bg-zinc-900 p-6 shadow-2xl">
              <h3 className="mb-1 text-base font-bold text-white">{tx.formTitle}</h3>
              <p className="mb-4 text-sm text-zinc-400">{tx.formHint}</p>
              <LazyLeadForm source="course-f3-financial-accounting" />
              <p className="mt-3 text-center text-xs text-zinc-400">{tx.formFootnote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-12 sm:py-16" data-testid="section-f3-intro-video">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-2 text-2xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              {tx.sectionIntroVideoTitle}
            </h2>
            <p className="mb-6 text-sm text-zinc-400 sm:text-base">{tx.sectionIntroVideoLead}</p>
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-orange-950/30">
              <YouTubeEmbed
                videoId={F3_INTRO_VIDEO_ID}
                title={`F3 Financial Accounting — ${tx.sectionIntroVideoTitle}`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.sectionAccaTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tx.accaInfo.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                <p className="text-sm text-slate-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20" data-testid="section-f3-what-learn">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.sectionLearnTitle}</h2>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-12">
            <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
              {tx.whatLearn.map((item, i) => {
                const Icon = WHAT_LEARN_ICONS[i % WHAT_LEARN_ICONS.length];
                return (
                  <div key={i} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-zinc-900 p-5 transition-shadow hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/20">
                      <Icon className="h-5 w-5 text-orange-400" />
                    </div>
                    <p className="text-sm font-medium text-slate-200 leading-relaxed">{item}</p>
                  </div>
                );
              })}
            </div>
            <aside className="order-1 flex flex-col items-center lg:sticky lg:top-24 lg:order-2">
              <p className="mb-4 max-w-[320px] text-center text-sm font-medium text-zinc-300 lg:text-left">
                {tx.sectionLearnVideoLead}
              </p>
              <div className="w-full rounded-2xl border border-orange-500/20 bg-gradient-to-b from-orange-950/40 to-zinc-900 p-3 shadow-xl shadow-orange-950/20">
                <YouTubeEmbed
                  videoId={F3_LEARN_SHORT_VIDEO_ID}
                  aspectRatio="short"
                  title={tx.sectionLearnVideoLead}
                  thumbnailQuality="maxresdefault"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.sectionWhyF3Title}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {tx.whyF3.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/20 text-sm font-extrabold text-orange-300">
                  {i + 1}
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.sectionForWhomTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-3">
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

      <section className="bg-[#111] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.sectionFormatTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {tx.formatItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                <p className="text-sm text-slate-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.sectionInstructorTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ACADEMY_INSTRUCTORS.map((inst, i) => (
              <div key={inst.id} className="group flex flex-col rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden">
                <div className="relative aspect-[4/5] w-full max-h-64 overflow-hidden bg-zinc-950">
                  <InstructorPhoto
                    name={inst.name}
                    src={inst.photo}
                    className={instructorPortraitClass()}
                    fetchPriority={i < 4 ? "high" : undefined}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-extrabold text-white">{inst.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold text-orange-400">{inst.role}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <Award className="h-3.5 w-3.5 shrink-0 text-orange-400" />
                      <span>{inst.papers}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <Clock className="h-3.5 w-3.5 shrink-0 text-orange-400" />
                      <span>{tt("Teaching exp:", "O'qitish tajribasi:", "Опыт преподавания:")} {inst.teachingExp}</span>
                    </div>
                    {inst.workExp && (
                      <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <Users className="h-3.5 w-3.5 shrink-0 text-orange-400" />
                        <span>{tt("Work exp:", "Ish tajribasi:", "Опыт работы:")} {inst.workExp}</span>
                      </div>
                    )}
                  </div>
                  {(inst.topResults?.length ?? 0) > 0 && (
                    <div className="mt-4">
                      <p className="mb-2 text-xs font-bold text-zinc-300">{tt("Student records:", "O'quvchilar rekordi:", "Рекорды студентов:")}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {inst.topResults?.map((r, j) => (
                          <span key={j} className="rounded-full bg-orange-500/15 border border-orange-500/30 px-2.5 py-1 text-[11px] font-bold text-orange-300">
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {inst.extra && (
                    <p className="mt-4 text-[11px] leading-relaxed text-zinc-500">{inst.extra}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.sectionOutcomesTitle}</h2>
          <p className="mb-8 text-base text-zinc-400 sm:text-lg">{tx.sectionOutcomesLead}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {tx.outcomes.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                <p className="text-sm text-slate-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP 10 F3 BALLS */}
      <section className="bg-gradient-to-r from-orange-950/60 to-slate-900 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            {lang === "ru" ? "Топ результаты по F3" : lang === "en" ? "Top F3 Results" : "F3 bo'yicha TOP natijalar"}
          </h2>
          <p className="mb-8 text-base text-zinc-400">
            {lang === "ru" ? "Лучшие баллы наших студентов за всё время" : lang === "en" ? "Best scores ever achieved by our students" : "O'quvchilarimizning eng yuqori natijalari"}
          </p>
          <div className="flex flex-wrap gap-3">
            {[98, 98, 97, 97, 95, 95, 94, 93, 92, 91].map((ball, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center rounded-2xl px-6 py-4 shadow-lg ${
                  ball >= 97 ? "bg-gradient-to-br from-amber-500 to-orange-600 text-white" :
                  ball >= 95 ? "bg-gradient-to-br from-orange-600 to-orange-800 text-white" :
                  "bg-gradient-to-br from-zinc-700 to-zinc-800 text-orange-200"
                }`}
              >
                <span className="text-3xl font-extrabold">{ball}</span>
                <span className="mt-0.5 text-xs font-semibold opacity-80">{tt("pts", "ball", "балл")}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.sectionReviewsTitle}</h2>
          <p className="mb-8 text-base text-zinc-400 sm:text-lg">{tx.sectionReviewsLead}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STUDENT_REVIEWS.map((review, i) => (
              <a
                key={i}
                href={review.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition-all hover:border-orange-500/30 hover:shadow-lg"
              >
                <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-orange-800 to-amber-600">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6 fill-white text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                    {tx.reviewInstagramBadge}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-white">{review.name}</p>
                  <p className="mt-1 text-xs font-semibold text-orange-400">
                    {tx.reviewScoreLabel}: {review.score}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-orange-950 via-orange-800 to-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_420px] lg:gap-12">
            <div>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">{tx.finalTitle}</h2>
              <p className="mt-4 text-base text-blue-100 leading-relaxed sm:text-lg">{tx.finalDesc}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {tx.ctaBullets.map((text, i) => {
                  const Icon = CTA_BULLET_ICONS[i] ?? GraduationCap;
                  return (
                    <div key={i} className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-blue-200" />
                      <span className="text-sm font-medium text-white">{text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-6 shadow-2xl">
              <h3 className="mb-1 text-lg font-extrabold text-white">{tx.finalFormTitle}</h3>
              <p className="mb-4 text-sm text-zinc-400">{tx.finalFormHint}</p>
              <DeferredExtendedLeadForm source="course-f3-cta" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
