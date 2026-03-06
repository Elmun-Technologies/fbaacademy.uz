import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import LeadForm from "@/components/lead-form";
import YouTubeEmbed from "@/components/youtube-embed";
import { courses, teachers, faqItems } from "@/lib/data";
import { CheckCircle2, ArrowRight, Star, Flame, Globe, Award, Users, TrendingUp, BookOpen, Clock, Calendar, Wrench, GraduationCap } from "lucide-react";
import CourseBlogLinks from "@/components/course-blog-links";
import CourseRelated from "@/components/course-related";
import CourseFormatSection from "@/components/course-format-section";
import CourseBonusesSection from "@/components/course-bonuses-section";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/lib/translations";

const course = courses.find((c) => c.id === "acca")!;
const mentor = teachers.find((t) => t.id === "teacher-1")!;

const ACCA_STAGES = [
  { stage: "Applied Knowledge", color: "from-sky-500 to-blue-600", papers: ["BT — Business & Technology", "MA — Management Accounting", "FA — Financial Accounting"], duration: "4 oy", href: "/course/applied-knowledge" },
  { stage: "Applied Skills", color: "from-emerald-500 to-teal-600", papers: ["LW — Law", "PM — Performance Mgmt", "TX — Taxation", "FR — Financial Reporting", "AA — Audit", "FM — Financial Mgmt"], duration: "6 oy", href: "/course/applied-skills" },
  { stage: "Strategic Professional", color: "from-amber-500 to-orange-600", papers: ["SBL — Strategic Business Leader", "SBR — Strategic Business Reporting", "AFM yoki AAA (ixtiyoriy)"], duration: "8 oy", href: "/course/strategic-professional" },
];

const GLOBAL_STATS = [
  { value: "252,000+", labelKey: "statsA" },
  { value: "180+", labelKey: "statsB" },
  { value: "#1", labelKey: "statsC" },
  { value: "Big Four", labelKey: "statsD" },
];

const TEXT: Record<Language, {
  heroTitle: string; badge1: string; badge2: string;
  featLabel1: string; featSub1: string; featLabel2: string; featSub2: string;
  statsA: string; statsB: string; statsC: string; statsD: string;
  roadmapLabel: string; roadmapTitle: string; roadmapDesc: string;
  videoTitle: string; videoDesc: string;
  feat1: string; feat2: string; feat3: string; feat4: string;
  salaryDemand: string; ctaDesc: string;
}> = {
  uz: {
    heroTitle: "ACCA — To'liq\nSertifikatlanish Dasturi",
    badge1: "🏆 #1 Buxgalteriya sertifikati",
    badge2: "180+ davlatda tan olingan",
    featLabel1: "Xalqaro", featSub1: "180+ mamlakat",
    featLabel2: "Big Four", featSub2: "Tan olingan",
    statsA: "Dunyodagi ACCA a'zolar",
    statsB: "Davlatda tan olingan",
    statsC: "Buxgalteriya sertifikati",
    statsD: "Barcha firmalar talabi",
    roadmapLabel: "ACCA yo'li",
    roadmapTitle: "3 bosqichda to'liq ACCA malakasi",
    roadmapDesc: "Har bosqichni alohida yoki to'liq dastur sifatida o'qishingiz mumkin",
    videoTitle: "ACCA kurs haqida ko'proq bilib oling",
    videoDesc: "Mentorlarimiz ACCA sertifikatining imkoniyatlari, o'quv jarayoni va karyera istiqbollari haqida to'liq tushuntiradi.",
    feat1: "Xalqaro standartlarda ta'lim",
    feat2: "Big Four firmalarga kirish",
    feat3: "Jonli darslar mini-guruhlarda",
    feat4: "Imtihon tayyorligi va simulyatsiyalar",
    salaryDemand: "ACCA mutaxassislariga talab yil sayin ortib bormoqda",
    ctaDesc: "10 daqiqada ACCA yo'li haqida barcha savollaringizga javob oling",
  },
  ru: {
    heroTitle: "ACCA — Полная\nПрограмма Сертификации",
    badge1: "🏆 #1 Бухгалтерская квалификация",
    badge2: "Признана в 180+ странах",
    featLabel1: "Международный", featSub1: "180+ стран",
    featLabel2: "Big Four", featSub2: "Признан",
    statsA: "Членов ACCA в мире",
    statsB: "Стран признания",
    statsC: "Бухгалтерская квалификация",
    statsD: "Требование всех компаний",
    roadmapLabel: "Путь ACCA",
    roadmapTitle: "Полная квалификация ACCA за 3 этапа",
    roadmapDesc: "Каждый этап можно изучать отдельно или в рамках полной программы",
    videoTitle: "Узнайте больше о курсе ACCA",
    videoDesc: "Наши менторы подробно расскажут о возможностях сертификата ACCA, процессе обучения и карьерных перспективах.",
    feat1: "Обучение по международным стандартам",
    feat2: "Доступ в компании Big Four",
    feat3: "Живые занятия в мини-группах",
    feat4: "Подготовка к экзаменам и симуляции",
    salaryDemand: "Спрос на специалистов ACCA растёт год за годом",
    ctaDesc: "За 10 минут ответим на все вопросы о пути ACCA",
  },
  en: {
    heroTitle: "ACCA — Complete\nCertification Program",
    badge1: "🏆 #1 Accounting Qualification",
    badge2: "Recognized in 180+ Countries",
    featLabel1: "International", featSub1: "180+ countries",
    featLabel2: "Big Four", featSub2: "Recognized",
    statsA: "ACCA Members Worldwide",
    statsB: "Countries of Recognition",
    statsC: "Accounting Qualification",
    statsD: "All Big Four Require It",
    roadmapLabel: "ACCA Path",
    roadmapTitle: "Full ACCA Qualification in 3 Stages",
    roadmapDesc: "Each stage can be studied separately or as part of the full program",
    videoTitle: "Learn More About the ACCA Course",
    videoDesc: "Our mentors will explain the opportunities of the ACCA certificate, the learning process and career prospects.",
    feat1: "International standard education",
    feat2: "Access to Big Four firms",
    feat3: "Live classes in small groups",
    feat4: "Exam preparation & simulations",
    salaryDemand: "Demand for ACCA specialists grows year by year",
    ctaDesc: "10-minute Q&A about the ACCA path",
  },
};

export default function AccaPage() {
  const { lang, t } = useLanguage();
  const tx = TEXT[lang];
  const faqs = faqItems.filter((f) => f.category === "ACCA" || f.category === "Umumiy" || f.category === "Sertifikat").slice(0, 6);

  useSEO({
    title: "ACCA Sertifikati — To'liq Dastur | FBA Academy Toshkent",
    description: "ACCA (Association of Chartered Certified Accountants) — dunyodagi eng nufuzli buxgalteriya sertifikati. FBA Academy'da Applied Knowledge, Applied Skills va Strategic Professional bosqichlarini o'rganing. Big Four'ga kirish yo'li.",
    keywords: "ACCA sertifikati O'zbekiston, ACCA kurs Toshkent, ACCA Applied Knowledge, ACCA Applied Skills, ACCA Strategic Professional, Big Four buxgalteriya",
    breadcrumb: [
      { name: "Kurslar", url: "https://fbaacademy.uz/courses" },
      { name: "ACCA", url: "https://fbaacademy.uz/course/acca" },
    ],
    faqItems: faqs.map((f) => ({ question: f.question, answer: f.answer })),
    jsonLd: {
      "@type": "Course",
      "name": "ACCA (Association of Chartered Certified Accountants) — To'liq Dastur",
      "description": "Dunyodagi eng nufuzli buxgalteriya sertifikati. 3 bosqich: Applied Knowledge, Applied Skills, Strategic Professional.",
      "url": "https://fbaacademy.uz/course/acca",
      "image": "https://fbaacademy.uz/og-image.svg",
      "provider": {
        "@type": "Organization",
        "name": "FBA Academy",
        "url": "https://fbaacademy.uz",
        "sameAs": "https://t.me/fbaacademy",
      },
      "educationalLevel": "Professional",
      "timeRequired": "P12M",
      "courseLanguage": ["uz", "ru"],
      "inLanguage": "uz",
      "teaches": ["ACCA Applied Knowledge", "ACCA Applied Skills", "ACCA Strategic Professional", "IFRS", "Financial Reporting"],
      "offers": {
        "@type": "Offer",
        "category": "Professional Education",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "UZS",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1200",
        "bestRating": "5",
        "worstRating": "1",
      },
    },
  });

  return (
    <Layout>
      {/* Hero — deep royal purple */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14" data-testid="section-acca-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <Breadcrumb items={[{ label: t.page.coursesLabel, href: "/courses" }, { label: "ACCA" }]} light />
          </div>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge className="rounded-full bg-yellow-500/20 text-yellow-300 border-yellow-400/30 px-3">{tx.badge1}</Badge>
                <Badge className="rounded-full bg-purple-500/20 text-purple-300 border-purple-400/30 px-3">{tx.badge2}</Badge>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight" data-testid="text-acca-title">
                {tx.heroTitle.split("\n")[0]}<br />
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">{tx.heroTitle.split("\n")[1]}</span>
              </h1>
              <p className="mt-4 max-w-xl text-slate-300 leading-relaxed text-lg">{course.description}</p>
              <div className="mt-5 flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                  <span className="text-sm font-bold text-white ml-1">{course.rating}</span>
                </div>
                <span className="text-sm text-slate-400">{course.studentsCount} {t.page.students}</span>
                <span className="text-sm text-slate-400">· {course.duration}</span>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: Globe, label: tx.featLabel1, sub: tx.featSub1 },
                  { icon: Award, label: tx.featLabel2, sub: tx.featSub2 },
                  { icon: Users, label: course.studentsCount, sub: t.page.graduates },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-sm" data-testid={`feature-${i}`}>
                    <item.icon className="mb-2 h-5 w-5 text-purple-300" />
                    <div className="text-xs font-bold text-white sm:text-sm">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl dark:bg-card" data-testid="card-enroll">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-bold">{t.page.submitRequest}</h3>
                  <Badge className="rounded-full bg-rose-500 text-white font-bold">-{course.discount}</Badge>
                </div>
                <div className="mb-2 flex items-center gap-1.5 text-sm font-medium text-amber-600">
                  <Flame className="h-4 w-4" /> {t.page.spotsLimited}
                </div>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold" data-testid="text-price">{course.price} UZS</span>
                  <span className="text-sm text-muted-foreground line-through">{course.oldPrice} UZS</span>
                </div>
                <LeadForm source="course-acca" buttonText={t.page.enrollWithDiscount} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCA Global Stats */}
      <section className="bg-white py-10 dark:bg-background" data-testid="section-global-stats">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {GLOBAL_STATS.map((s, i) => (
              <div key={i} className="rounded-2xl border-2 border-purple-100 bg-purple-50 p-5 text-center dark:border-purple-900/30 dark:bg-purple-900/10" data-testid={`stat-${i}`}>
                <div className="text-2xl font-extrabold text-purple-700 dark:text-purple-300 sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{tx[s.labelKey as keyof typeof tx] as string}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCA 3-Stage Roadmap */}
      <section className="py-14 sm:py-20" data-testid="section-roadmap">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-4 rounded-full border-purple-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-600">{tx.roadmapLabel}</Badge>
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-roadmap-title">{tx.roadmapTitle}</h2>
          <p className="mb-10 text-muted-foreground">{tx.roadmapDesc}</p>
          <div className="relative grid gap-6 md:grid-cols-3">
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-400 md:block md:mx-[16.7%]" />
            {ACCA_STAGES.map((stage, i) => (
              <Link key={i} href={stage.href}>
                <div className="group cursor-pointer rounded-2xl border bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-card" data-testid={`card-stage-${i}`}>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stage.color} text-2xl font-extrabold text-white shadow-md`}>{i + 1}</div>
                  <Badge className={`mb-3 rounded-full bg-gradient-to-r ${stage.color} text-white text-xs font-bold shadow-sm`}>{stage.duration}</Badge>
                  <h3 className="mb-3 text-lg font-extrabold">{stage.stage}</h3>
                  <ul className="space-y-1.5">
                    {stage.papers.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" /> {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-purple-600 opacity-0 transition-opacity group-hover:opacity-100">
                    {t.common.learnMore} <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-video">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl" data-testid="text-video-title">{tx.videoTitle}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{tx.videoDesc}</p>
              <div className="mt-6 space-y-3">
                {[tx.feat1, tx.feat2, tx.feat3, tx.feat4].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <YouTubeEmbed videoId={course.videoId!} title={tx.videoTitle} />
            </div>
          </div>
        </div>
      </section>

      {/* Salary */}
      <section className="py-14 sm:py-20" data-testid="section-salary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 p-6 shadow-2xl sm:p-10">
            <h2 className="mb-2 text-2xl font-extrabold text-white sm:text-3xl">{t.page.salary.title}</h2>
            <p className="mb-8 text-slate-400 text-sm">{tx.salaryDemand}</p>
            <div className="space-y-4">
              {course.salaryLevels.map((level, i) => (
                <div key={i} className="rounded-2xl bg-[#c8ff00] p-4 sm:p-5" style={{ maxWidth: `${50 + i * 25}%`, minWidth: "220px" }} data-testid={`salary-${i}`}>
                  <div className="text-lg font-extrabold text-slate-900 sm:text-xl">{level.salary} {t.page.salary.from}</div>
                  <div className="text-sm font-medium text-slate-700">{level.level} — {level.description}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-500">{t.page.salary.source}</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-skills">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold sm:text-3xl">{t.page.youWillLearn}</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {course.skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm dark:bg-card" data-testid={`skill-${i}`}>
                <CheckCircle2 className="h-5 w-5 shrink-0 text-purple-500" />
                <span className="font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-14 sm:py-20" data-testid="section-for-whom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold sm:text-3xl">{t.page.forWhom}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.forWhom.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border bg-white p-5 shadow-sm dark:bg-card" data-testid={`for-whom-${i}`}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <GraduationCap className="h-4 w-4 text-purple-600" />
                </div>
                <span className="font-medium text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-modules">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">{t.page.curriculum}</h2>
          <div className="mb-6 flex flex-wrap gap-2">
            {[{ icon: Calendar, text: course.duration }, { icon: BookOpen, text: `${course.projects} ${t.page.project}` }, { icon: Clock, text: `${course.theoryHours} ${t.page.theory}` }, { icon: Wrench, text: `${course.practiceHours} ${t.page.practice}` }].map((item, i) => (
              <Badge key={i} variant="outline" className="rounded-full gap-1.5 border-2 px-3 py-1.5 text-xs font-semibold">
                <item.icon className="h-3.5 w-3.5" /> {item.text}
              </Badge>
            ))}
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {course.modules.map((mod, i) => (
                <AccordionItem key={i} value={`m-${i}`} className="rounded-2xl border bg-white px-5 shadow-sm dark:bg-card" data-testid={`module-${i}`}>
                  <AccordionTrigger className="text-left py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-sm font-bold text-white shadow-md">{i + 1}</span>
                      <div>
                        <span className="text-sm font-bold sm:text-base">{mod.title}</span>
                        <div className="text-xs text-muted-foreground">{mod.topics.length} {t.page.topics}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="ml-12 space-y-2.5 pb-3">
                      {mod.topics.map((topic, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> {topic}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-14 sm:py-20" data-testid="section-support">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold sm:text-3xl">{t.page.supportTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {course.supportTeam.map((person, i) => (
              <Card key={i} className="border shadow-md overflow-hidden text-center" data-testid={`support-${i}`}>
                <div className="h-48 overflow-hidden">
                  <img src={person.avatar} alt={person.role} width={400} height={192} className="h-full w-full object-cover object-top" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold">{person.role}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{person.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-700 to-blue-700 py-12 sm:py-16" data-testid="section-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{t.page.freeConsultationTitle}</h2>
              <p className="mt-3 text-purple-100">{tx.ctaDesc}</p>
              <Link href="/contacts">
                <Button size="lg" className="mt-6 gap-2 rounded-full bg-white px-8 font-bold text-purple-700 hover:bg-slate-100" data-testid="button-cta">
                  {t.page.getConsultation} <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <img src={mentor.avatar} alt={mentor.name} width={80} height={80} className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top ring-4 ring-white/20 shadow-xl" loading="lazy" />
              <div>
                <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                <p className="text-sm text-purple-200">{mentor.role}</p>
                <p className="text-sm text-purple-200">{mentor.experience}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CourseBlogLinks color="purple" links={[
        { href: "/blog/acca-imtihoniga-tayyorlanish", title: "ACCA imtihoniga qanday tayyorlanish kerak?", readTime: "8 daqiqa" },
        { href: "/blog/acca-vs-dipifr-vs-cfa-qaysi-yaxshi", title: "ACCA vs DipIFR vs CFA — qaysi biri yaxshi?", readTime: "11 daqiqa" },
        { href: "/blog/xalqaro-sertifikatlar-ozbekistonda", title: "Xalqaro sertifikatlar va O'zbekistonda ish", readTime: "9 daqiqa" },
        { href: "/blog/buxgalter-maoshi-ozbekiston-2026", title: "Buxgalter maoshi 2026: ACCA bilan qancha?", readTime: "8 daqiqa" },
        { href: "/blog/moliyaviy-tahlilchi-bolish-yol-xaritasi", title: "Moliyaviy tahlilchi bo'lish yo'l xaritasi", readTime: "9 daqiqa" },
      ]} />

      <CourseRelated excludeId="acca" />

      {/* FAQ */}
      <section className="py-14 sm:py-20" data-testid="section-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">{t.page.faqTitle}</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="rounded-2xl border bg-white px-6 shadow-sm dark:bg-card" data-testid={`faq-${faq.id}`}>
                  <AccordionTrigger className="text-left font-semibold py-5 text-sm sm:text-base">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <CourseFormatSection />
      <CourseBonusesSection
        totalUz="4,500,000+ so'm qiymatida"
        totalRu="Более 15,000 RUB стоимостью"
        totalEn="Worth $190+ — yours for free"
        bonuses={[
          {
            logo: "📚",
            nameUz: "ACCA Past Papers to'plami 2010–2024",
            nameRu: "База ACCA Past Papers 2010–2024",
            nameEn: "ACCA Past Papers Bank 2010–2024",
            descUz: "Barcha 13 ta fanning to'liq imtihon savollari va rasmiy javoblari",
            descRu: "Полные экзаменационные вопросы и ответы по всем 13 предметам",
            descEn: "Complete exam questions and official answers for all 13 papers",
            durationUz: "Doimiy kirish",
            durationRu: "Постоянный доступ",
            durationEn: "Lifetime access",
            priceUz: "1,200,000 so'm",
            priceRu: "4,500 RUB",
            priceEn: "$55",
          },
          {
            logo: "⚡",
            nameUz: "ACCA Flashcards & Formula Pack",
            nameRu: "ACCA Флэшкарты и формулы",
            nameEn: "ACCA Flashcards & Formula Pack",
            descUz: "500+ flashcard va barcha fanlar uchun formula listlari — tezkor takrorlash",
            descRu: "500+ флэшкарт и формульные листы по всем предметам для быстрого повторения",
            descEn: "500+ flashcards and formula sheets for all papers — rapid revision tool",
            durationUz: "1 yillik kirish",
            durationRu: "Доступ на 1 год",
            durationEn: "1 year access",
            priceUz: "800,000 so'm",
            priceRu: "3,000 RUB",
            priceEn: "$36",
          },
          {
            logo: "🎯",
            nameUz: "ACCA Mock Exam Simulator — Professional",
            nameRu: "Симулятор ACCA Mock Exams — Professional",
            nameEn: "ACCA Mock Exam Simulator — Professional",
            descUz: "Real imtihon sharoitida 20+ to'liq mock — vaqt hisoblagich va avtomatik baholash",
            descRu: "20+ полных мок-экзаменов в условиях реального экзамена с таймером и автооценкой",
            descEn: "20+ full mock exams in real exam conditions with timer and auto-grading",
            durationUz: "6 oylik kirish",
            durationRu: "Доступ на 6 месяцев",
            durationEn: "6 months access",
            priceUz: "2,000,000 so'm",
            priceRu: "7,200 RUB",
            priceEn: "$88",
          },
          {
            logo: "📅",
            nameUz: "ACCA Study Planner (Excel) — shaxsiy jadval",
            nameRu: "ACCA Study Planner (Excel) — персональный график",
            nameEn: "ACCA Study Planner (Excel) — personal schedule",
            descUz: "Har bir fan uchun moslashuvchan o'qish jadvali — progress tracking bilan",
            descRu: "Гибкий план обучения для каждого предмета с отслеживанием прогресса",
            descEn: "Flexible study schedule for each paper with built-in progress tracking",
            durationUz: "Doimiy kirish",
            durationRu: "Постоянный доступ",
            durationEn: "Lifetime access",
            priceUz: "500,000 so'm",
            priceRu: "1,800 RUB",
            priceEn: "$22",
          },
        ]}
      />
    </Layout>
  );
}
