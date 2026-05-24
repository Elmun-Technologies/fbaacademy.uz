import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import TeacherAvatar from "@/components/teacher-avatar";
import { instructorPortraitClass } from "@/components/instructor-photo";
import YouTubeEmbed from "@/components/youtube-embed";
import { teachers, testimonials, stats, whyUsFeatures, graduateResults } from "@/lib/site-data";
import type { GraduateResult } from "@/lib/data-types";
import PartnerLogosMarquee from "@/components/partner-logos-marquee";
import { resolveBundledPublicUrl } from "@/lib/public-media";
import {
  Code, TrendingUp, Briefcase, FolderOpen, Users, Award,
  ArrowRight, Star, CheckCircle2, Sparkles, GraduationCap, Clock, BookOpen, Scale, Calculator, Quote
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useMemo } from "react";
import { localizeGraduates, localizeTeachers, localizeTestimonials } from "@/lib/localize-content";
import { STATS_I18N } from "@/lib/i18n/site-content-i18n";
import { pick } from "@/lib/i18n/pick";

const iconMap: Record<string, any> = { Code, TrendingUp, Briefcase, FolderOpen, Users, Award };

const UNSPLASH = "https://images.unsplash.com";

export default function Home() {
  const { lang } = useLanguage();
  const tt = (en: string, uz: string, ru: string) => (lang === "uz" ? uz : lang === "ru" ? ru : en);

  const courseHighlights = [
    {
      icon: Award,
      title: "ACCA",
      sub: "Applied Knowledge · Skills · Strategic Professional",
      color: "from-blue-500 to-cyan-500",
      path: "/course/acca",
      badge: { label: tt("Top", "Top", "Топ"), color: "bg-brand" },
      image: `${UNSPLASH}/photo-1554224155-6726b3ff858f?w=700&h=450&fit=crop`,
      shortDesc: tt("International accounting certificate — take your career global", "Xalqaro buxgalteriya sertifikati — karyerangizni global darajaga olib chiqing", "Международный сертификат по бухучёту — выведите карьеру на глобальный уровень"),
      duration: tt("12 months", "12 oy", "12 месяцев"),
      rating: "4.8",
    },
    {
      icon: TrendingUp,
      title: "DipIFR",
      sub: tt("International Financial Reporting diploma", "Xalqaro moliyaviy hisobot standartlari diplomi", "Диплом по международным стандартам финансовой отчётности"),
      color: "from-emerald-500 to-teal-500",
      path: "/course/dipifr",
      badge: { label: tt("International", "Xalqaro", "Международный"), color: "bg-indigo-600" },
      image: `${UNSPLASH}/photo-1590283603385-17ffb3a7f29f?w=700&h=450&fit=crop`,
      shortDesc: tt("IFRS international diploma — taught in Russian", "IFRS bo'yicha xalqaro diplom — rus tilida o'qitiladi", "Международный диплом по МСФО — обучение на русском языке"),
      duration: tt("4 months", "4 oy", "4 месяца"),
      rating: "4.8",
    },
    {
      icon: BookOpen,
      title: "DipIFR",
      sub: "Diploma in International Financial Reporting Standards",
      color: "from-violet-500 to-brand",
      path: "/course/dipifr",
      badge: { label: tt("New", "Yangi", "Новый"), color: "bg-violet-600" },
      image: `${UNSPLASH}/photo-1551288049-bebda4e38f71?w=700&h=450&fit=crop`,
      shortDesc: tt("IFRS diploma in English — international career opportunities", "IFRS diplomi ingliz tilida — xalqaro karyera imkoniyatlari", "Диплом МСФО на английском — международные карьерные возможности"),
      duration: tt("4 months", "4 oy", "4 месяца"),
      rating: "4.9",
    },
    {
      icon: Scale,
      title: "МСФО",
      sub: tt("International Financial Reporting Standards", "Xalqaro moliyaviy hisobot standartlari", "Международные стандарты финансовой отчётности"),
      color: "from-amber-500 to-orange-500",
      path: "/course/msfo",
      badge: { label: tt("Popular", "Mashhur", "Популярный"), color: "bg-emerald-600" },
      image: `${UNSPLASH}/photo-1460925895917-afdab827c52f?w=700&h=450&fit=crop`,
      shortDesc: tt("Applying IFRS standards in practice — professional knowledge", "МСФО standartlarini amaliyotda qo'llash — professional bilim", "Применение стандартов МСФО на практике — профессиональные знания"),
      duration: tt("3 months", "3 oy", "3 месяца"),
      rating: "4.7",
    },
    {
      icon: Briefcase,
      title: "Financial Analyst",
      sub: tt("Financial analysis · DCF · Valuation · Investment", "Moliyaviy tahlil · DCF · Baholash · Investitsiya", "Финансовый анализ · DCF · Оценка · Инвестиции"),
      color: "from-rose-500 to-brand-dark",
      path: "/courses",
      badge: { label: tt("Practical", "Amaliy", "Практический"), color: "bg-blue-600" },
      image: `${UNSPLASH}/photo-1611974789855-9c2a0a7236a3?w=700&h=450&fit=crop`,
      shortDesc: tt("Financial analyst — DCF, company valuation, investment analysis", "Moliyaviy tahlilchi — DCF, kompaniya baholash, investitsiya tahlili", "Финансовый аналитик — DCF, оценка компаний, инвестиционный анализ"),
      duration: tt("4 months", "4 oy", "4 месяца"),
      rating: "4.9",
    },
  ];

  useSEO({
    title: tt(
      "FBA Academy — ACCA, DipIFR, МСФО, Financial Analyst Courses | Uzbekistan",
      "FBA Academy — ACCA, DipIFR, МСФО, Financial Analyst kurslari | O'zbekiston",
      "FBA Academy — ACCA, DipIFR, МСФО, Financial Analyst | Узбекистан"
    ),
    hreflang: [
      { lang: "en", url: "https://fbaacademy.uz/" },
      { lang: "uz", url: "https://fbaacademy.uz/?lang=uz" },
      { lang: "ru", url: "https://fbaacademy.uz/?lang=ru" },
      { lang: "x-default", url: "https://fbaacademy.uz/" },
    ],
    description: tt(
      "FBA Academy is a leading finance education platform in Uzbekistan. ACCA, DipIFR, МСФО, Financial Analyst courses. 3,500+ individual students, 92% placement rate.",
      "FBA Academy — O'zbekistondagi yetakchi moliya ta'lim platformasi. ACCA, DipIFR, МСФО va Financial Analyst kurslari. 3 500+ individual o'quvchi, 92% ishga joylashish.",
      "FBA Academy — ведущая финансовая образовательная платформа Узбекистана. Курсы ACCA, DipIFR, МСФО, Financial Analyst. 3 500+ индивидуальных студентов, 92% трудоустройства."
    ),
    keywords: tt(
      "ACCA courses Uzbekistan, DipIFR Tashkent, МСФО course, Financial Analyst Uzbekistan, finance certifications",
      "ACCA kurslari O'zbekiston, DipIFR Toshkent, МСФО kursi, Financial Analyst kursi, moliya sertifikati, xalqaro sertifikat, Big Four, moliya kurslari Toshkent",
      "курсы ACCA Узбекистан, DipIFR Ташкент, курс МСФО, Financial Analyst, финансовые сертификаты"
    ),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": tt("FBA Academy — Home", "FBA Academy — Bosh sahifa", "FBA Academy — Главная"),
        "description": tt("Leading finance education platform in Uzbekistan. ACCA, DipIFR, МСФО, Financial Analyst courses.", "O'zbekistondagi yetakchi moliya ta'lim platformasi. ACCA, DipIFR, МСФО, Financial Analyst kurslari.", "Ведущая платформа финансового образования в Узбекистане. Курсы ACCA, DipIFR, МСФО, Financial Analyst."),
        "url": "https://fbaacademy.uz/",
        "isPartOf": { "@type": "WebSite", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [{ "@type": "ListItem", "position": 1, "name": tt("Home", "Bosh sahifa", "Главная"), "item": "https://fbaacademy.uz/" }]
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": tt("FBA Academy courses", "FBA Academy kurslari", "Курсы FBA Academy"),
        "description": tt("Professional finance and accounting courses in Uzbekistan", "O'zbekistondagi professional moliya va buxgalteriya kurslari", "Профессиональные курсы финансов и бухучёта в Узбекистане"),
        "url": "https://fbaacademy.uz/courses",
        "numberOfItems": 4,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ACCA", "url": "https://fbaacademy.uz/course/acca", "description": tt("ACCA international accounting certificate. 3 levels: Applied Knowledge, Applied Skills, Strategic Professional.", "ACCA xalqaro moliyaviy hisobot sertifikati. 3 bosqich: Applied Knowledge, Applied Skills, Strategic Professional.", "Международный сертификат ACCA. 3 уровня: Applied Knowledge, Applied Skills, Strategic Professional.") },
          { "@type": "ListItem", "position": 2, "name": "DipIFR", "url": "https://fbaacademy.uz/course/dipifr", "description": tt("DipIFR — ACCA international IFRS diploma.", "DipIFR — ACCA xalqaro IFRS diplomi.", "DipIFR — международный диплом ACCA по МСФО.") },
          { "@type": "ListItem", "position": 3, "name": "МСФО", "url": "https://fbaacademy.uz/course/msfo", "description": tt("International Financial Reporting Standards — practical course.", "Xalqaro moliyaviy hisobot standartlari — amaliy kurs.", "Международные стандарты финансовой отчётности — практический курс.") },
          { "@type": "ListItem", "position": 4, "name": "Financial Analyst", "url": "https://fbaacademy.uz/courses", "description": tt("Financial analyst course — DCF, valuation, investment analysis.", "Moliyaviy tahlilchi kursi — DCF, baholash, investitsiya tahlili.", "Курс финансового аналитика — DCF, оценка, инвестиционный анализ.") }
        ]
      }
    ],
    faqItems: [
      {
        question: tt("What courses does FBA Academy offer?", "FBA Academy qanday kurslar taklif etadi?", "Какие курсы предлагает FBA Academy?"),
        answer: tt("FBA Academy offers ACCA, DipIFR, МСФО and Financial Analyst courses. All courses are practical and internationally certified.", "FBA Academy ACCA, DipIFR, МСФО va Financial Analyst kurslarini taklif etadi. Barcha kurslar amaliy va xalqaro sertifikatga yo'naltirilgan.", "FBA Academy предлагает курсы ACCA, DipIFR, МСФО и Financial Analyst. Все курсы практические и международно сертифицированные."),
      },
      {
        question: tt("Are classes online or offline?", "Kurslar online yoki oflaynda o'tiladimi?", "Занятия онлайн или офлайн?"),
        answer: tt("Classes are held online. New lectures, practical assignments and Q&A sessions every week.", "Kurslar onlayn formatda o'tkaziladi. Har hafta yangi leksiyalar, amaliy topshiriqlar va Q&A sessiyalar mavjud.", "Занятия проводятся онлайн. Каждую неделю новые лекции, практические задания и сессии Q&A."),
      },
      {
        question: tt("How long does it take to complete a course?", "Qancha vaqtda kursni tugatish mumkin?", "Сколько времени занимает курс?"),
        answer: tt("Duration is 3 to 12 months depending on the course. ACCA full programme 12–18 months, DipIFR 4–6 months.", "Kurs davomiyligi 3 oydan 12 oygacha, kurs turiga qarab. ACCA to'liq dasturi 12-18 oy, DipIFR 4-6 oy.", "Длительность от 3 до 12 месяцев в зависимости от курса. Полная программа ACCA 12–18 месяцев, DipIFR 4–6 месяцев."),
      },
      {
        question: tt("How much do graduates earn?", "Bitiruvchilar qancha maosh oladi?", "Сколько зарабатывают выпускники?"),
        answer: tt("ACCA-certified professionals earn 3–8 mln UZS in Uzbekistan and 1,000–3,000 USD at international companies.", "ACCA sertifikatlangan mutaxassislar O'zbekistonda o'rtacha 3-8 mln so'm, xalqaro kompaniyalarda 1000-3000 USD maosh oladi.", "Специалисты с сертификатом ACCA зарабатывают 3–8 млн сум в Узбекистане и 1000–3000 USD в международных компаниях."),
      },
      {
        question: tt("How is payment made?", "To'lov qanday amalga oshiriladi?", "Как производится оплата?"),
        answer: tt("Via Click, Payme, bank transfer or cash. Monthly installments also available.", "Click, Payme, bank o'tkazmasi yoki naqd to'lov orqali. Oy sayin to'lash ham mumkin.", "Через Click, Payme, банковский перевод или наличными. Также доступна ежемесячная рассрочка."),
      },
    ],
    speakable: ["[data-speakable='hero-title']", "[data-speakable='hero-desc']"],
  });

  const normalizeStatLabel = (label: string) => {
    const mapped = STATS_I18N[label];
    if (mapped) return pick(lang, mapped);
    const l = label.toLowerCase();
    if (l.includes("bitiruv")) return tt("Graduates", "Bitiruvchilar", "Выпускники");
    if (l.includes("ishga") || l.includes("joylash")) return tt("Employment", "Ishga joylashish", "Трудоустройство");
    if (l.includes("hamkor")) return tt("Partner companies", "Hamkor kompaniyalar", "Компании-партнёры");
    if (l.includes("baho") || l.includes("rating")) return tt("Average rating", "O'rtacha baho", "Средний рейтинг");
    return label;
  };
  const normalizeHighlightSub = (path: string, sub: string) => {
    if (path === "/course/financial-modeling") return tt("DCF · Valuation · Investment analysis", "DCF · Kompaniya baholash · Investitsiya tahlili", "DCF · Оценка компании · Инвест. анализ");
    if (path === "/course/jurisprudence") return tt("Civil · Labor · Tax · Commercial law", "Fuqarolik · Mehnat · Soliq · Tijorat huquqi", "Гражданское · Трудовое · Налоговое · Коммерческое право");
    if (path === "/course/1c-course") return tt("Master accounting software professionally", "Buxgalteriya dasturini professional o'rganing", "Профессионально изучите бухгалтерскую систему");
    return sub;
  };

  const localizedTeachers = useMemo(() => localizeTeachers(teachers, lang), [lang]);
  const localizedTestimonials = useMemo(() => localizeTestimonials(testimonials, lang), [lang]);
  const localizedGraduates = useMemo(() => localizeGraduates(graduateResults, lang), [lang]);

  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#11133c] via-[#1a2a4a] to-slate-900 pb-14 pt-5 sm:pb-28 lg:pt-24" data-testid="section-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-2.5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-brand-accent/30 bg-brand/20 px-2.5 py-1.5 text-[11px] font-semibold text-brand-accent-light backdrop-blur-sm sm:px-3 sm:text-sm" data-testid="badge-hero-label">
                <Sparkles className="h-3.5 w-3.5" /> {tt("#1 finance education platform in Uzbekistan", "O'zbekistondagi #1 moliya ta'lim platformasi", "Финансовая образовательная платформа №1 в Узбекистане")}
              </div>
              <h1 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-white break-words sm:text-6xl lg:text-7xl" data-testid="text-hero-title" data-speakable="hero-title">
                {tt("With international certifications ", "Xalqaro sertifikatlar bilan ", "С международными сертификатами ")}
                <span className="bg-gradient-to-r from-brand-accent-light to-brand-accent bg-clip-text text-transparent">{tt("your career", "karyerangizni", "свою карьеру")}</span>{" "}
                {tt("to the next level", "yangi bosqichga olib chiqing", "выведите на новый уровень")}
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300 sm:mt-6 sm:text-lg" data-testid="text-hero-subtitle" data-speakable="hero-desc">
                {tt(
                  "Professional courses in ACCA, DipIFR, МСФО and Financial Analyst. Opportunity to get hired by Big Four firms.",
                  "ACCA, DipIFR, МСФО va Financial Analyst bo'yicha professional kurslar. Big Four kompaniyalariga ishga kirish imkoniyati.",
                  "Профессиональные курсы по ACCA, DipIFR, МСФО и Financial Analyst. Возможность трудоустройства в Big Four."
                )}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="w-full gap-2 rounded-full bg-amber-400 px-7 text-base font-bold text-black shadow-lg hover:bg-amber-300 sm:w-auto" data-testid="button-hero-courses">
                  <Link href="/courses">
                    {tt("View courses", "Kurslarni ko'rish", "Смотреть курсы")} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full gap-2 rounded-full border-white/30 px-7 text-base text-white hover:bg-white/10 sm:w-auto" data-testid="button-hero-consultation">
                  <Link href="/contacts">{tt("Free consultation", "Bepul konsultatsiya", "Бесплатная консультация")}</Link>
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-5 border-t border-white/10 pt-6 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:gap-8 sm:pt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-left sm:text-center" data-testid={`stat-hero-${stat.label}`}>
                    <div className="text-2xl font-extrabold text-white sm:text-4xl">{stat.value}</div>
                    <div className="mt-0.5 text-xs text-slate-400">{normalizeStatLabel(stat.label)}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {courseHighlights.map((item) => (
                <Link key={item.path} href={item.path}>
                  <div className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:bg-white/10 hover:shadow-xl" data-testid={`card-highlight-${item.title.toLowerCase().replace(/\s|:/g, "-")}`}>
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-md`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="mb-1 text-base font-extrabold text-white">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-400">{normalizeHighlightSub(item.path, item.sub)}</p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-brand-accent-light font-medium">
                      {tt("Learn more", "Batafsil", "Подробнее")} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO — WHY US ── */}
      <section className="bg-[#0d0d0d] py-20 sm:py-24" data-testid="section-video">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">{tt("About FBA Academy", "FBA Academy haqida", "О FBA Academy")}</div>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl" data-testid="text-video-title">
                {tt("Why study with us?", "Nima uchun biz bilan o'qish kerak?", "Почему стоит учиться у нас?")}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                {tt("Live classes with experienced experts, real projects, and career placement support.", "Tajribali mutaxassislar bilan jonli darslar, real loyihalar va kafolatlangan ishga joylashish yordami.", "Живые занятия с опытными специалистами, реальные проекты и помощь в трудоустройстве.")}
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  tt("Partnerships with Big Four firms", "Big Four firmalar bilan hamkorlik", "Партнёрство с Big Four"),
                  tt("Live classes and practice", "Jonli darslar va amaliyot", "Живые занятия и практика"),
                  tt("0% installment option", "0% bo'lib to'lash imkoniyati", "Рассрочка 0%"),
                  tt("Certification and career support", "Sertifikat va ishga joylashish yordami", "Сертификат и помощь в трудоустройстве"),
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-8 gap-2 rounded-full border-white/30 text-white hover:bg-white/10" data-testid="button-learn-more-about">
                <Link href="/about">
                  {tt("About us", "Biz haqimizda", "О нас")} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <YouTubeEmbed videoId="PU8ZCSuHWXE" title={tt("FBA Academy — About the platform", "FBA Academy — Ta'lim platformasi haqida", "FBA Academy — О платформе")} />
            </div>
          </div>
        </div>
      </section>

      {/* ── POPULAR COURSES ── */}
      <section className="bg-[#111] py-20 sm:py-24" data-testid="section-popular-courses">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">{tt("Courses", "Kurslar", "Курсы")}</div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-popular-title">
                {tt("Most popular programs", "Eng mashhur dasturlar", "Самые популярные программы")}
              </h2>
            </div>
            <Button asChild variant="outline" className="gap-1.5 rounded-full border-white/30 text-white hover:bg-white/10" data-testid="button-view-all-courses">
              <Link href="/courses">
                {tt("All courses", "Barcha kurslar", "Все курсы")} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {courseHighlights.map((course) => (
              <Link key={course.title} href={course.path}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-zinc-900 ix-card-strong">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-48 w-full object-cover ix-media"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
                    <span className={`absolute left-3 top-3 rounded-full ${course.badge.color} px-3 py-1 text-xs font-bold text-white shadow-lg`}>
                      {course.badge.label}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 text-base font-extrabold uppercase tracking-wide text-white">
                      {course.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-zinc-400 line-clamp-2">{course.shortDesc}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-zinc-500">
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {course.duration}</span>
                      <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-amber-400" /> {course.rating}</span>
                    </div>
                    <div className="mt-4 border-t border-white/5 pt-4">
                      <span className="text-sm font-semibold text-zinc-400">{tt("Price on request", "Narx so'rov orqali", "Цена по запросу")}</span>
                    </div>
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/70 px-4 py-2 text-xs font-bold text-amber-400 ix-pill-amber">
                        {tt("Learn more", "Batafsil", "Подробнее")} <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-[#0d0d0d] py-20 sm:py-24" data-testid="section-why-us">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">{tt("Advantages", "Afzalliklar", "Преимущества")}</div>
            <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-why-us-title">
              {tt("Why us?", "Nima uchun aynan biz?", "Почему именно мы?")}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award,
                title: tt("ACCA Member tutors", "ACCA Member maqomidagi ustozlar", "Преподаватели со статусом ACCA Member"),
                desc: tt("All tutors hold full ACCA membership and teach from real professional experience.", "Barcha ustozlarimiz ACCA Member maqomiga ega va real tajribadan o'rgatadi.", "Все наши преподаватели имеют статус ACCA Member и преподают из реального опыта."),
                gradient: "from-blue-600 to-cyan-600",
              },
              {
                icon: GraduationCap,
                title: tt("Proven methodology", "Sinovdan o'tgan metodika", "Проверенная методика"),
                desc: tt("Years of refined teaching methodology with consistently high pass rates.", "Yillar davomida sinovdan o'tgan metodika — doimiy yuqori natijalar.", "Годами отточенная методика преподавания со стабильно высокими результатами."),
                gradient: "from-emerald-600 to-teal-600",
              },
              {
                icon: Star,
                title: tt("Record results", "Rekordli natijalar", "Рекордные результаты"),
                desc: tt("Our students achieve scores of 98, 97, 95, 94, 93 — consistently at the top.", "O'quvchilarimiz 98-97-95-94-93 kabi rekordli natijalar qo'lga kiritadi.", "Наши студенты показывают рекордные результаты: 98, 97, 95, 94, 93."),
                gradient: "from-amber-500 to-orange-500",
              },
              {
                icon: Sparkles,
                title: tt("Top Achievers", "Top Achiever'lar", "Top Achievers"),
                desc: tt("O'zbekiston bo'ylab F fanlaridan chiqadigan 5 ta Top Achiever'ning 2-3 tasi — bizning o'quvchilarimiz.", "O'zbekiston bo'ylab F fanlaridan chiqadigan 5 ta Top Achiever'ning 2-3 tasi — bizning o'quvchilarimiz.", "2-3 из 5 Top Achievers по Узбекистану по предметам F — наши студенты."),
                gradient: "from-violet-600 to-purple-600",
              },
              {
                icon: Clock,
                title: tt("Flexible schedule", "Mos grafik", "Гибкий график"),
                desc: tt("Class schedule designed for working professionals — study without quitting your job.", "Ishlaydigan mutaxassislar uchun mos grafik — ishdan bo'shamasdan o'qing.", "График занятий для работающих специалистов — учитесь не уходя с работы."),
                gradient: "from-rose-600 to-pink-600",
              },
              {
                icon: BookOpen,
                title: tt("Practice-based learning", "Amaliy yondashuv", "Практический подход"),
                desc: tt("Learning built on practical exercises, real cases and hands-on tasks.", "Amaliy mashg'ulotlarga asoslangan yondashuv — real holat va vaziyatlar.", "Обучение построено на практических упражнениях, реальных кейсах и задачах."),
                gradient: "from-teal-600 to-emerald-600",
              },
              {
                icon: Users,
                title: tt("Online & offline", "Onlayn va oflayn darslar", "Онлайн и офлайн"),
                desc: tt("Choose the format that suits you — live online classes or in-person sessions.", "Onlayn va oflayn formatdagi darslar — o'zingizga mos formatni tanlang.", "Выберите удобный формат — онлайн-занятия вживую или очные сессии."),
                gradient: "from-indigo-600 to-blue-600",
              },
              {
                icon: Briefcase,
                title: tt("Prime location", "Qulay lokatsiya", "Удобная локация"),
                desc: tt("Central city location — comfortable and convenient for studying.", "Shahar markazida, ta'lim uchun qulay va shinam lokatsiya.", "В центре города — удобное и комфортное место для обучения."),
                gradient: "from-zinc-600 to-slate-600",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="group rounded-2xl border border-white/10 bg-zinc-900 p-6 transition-all duration-300 hover:border-brand/40 hover:scale-[1.02]" data-testid={`card-feature-${i}`}>
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-base font-extrabold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GRADUATES INTRO (video stories live in “natijasi” below) ── */}
      <section className="bg-[#111] py-20 sm:py-24" data-testid="section-video-graduates">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-950/40 via-zinc-900 to-zinc-950 p-10 shadow-2xl lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                {tt("Video stories", "Video guvohlar", "Видеоотзывы")}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-300">
                {tt(
                  "Below, graduates share real outcomes in short videos.",
                  "Bitiruvchilarimiz haqiqiy o‘zgarishlar haqida pastdagi bo‘limda qisqa videolarda gapirib beradi.",
                  "Ниже выпускники рассказывают о реальных изменениях в коротких видео.",
                  
                )}
              </p>
              <Button asChild variant="outline" className="mt-8 gap-2 rounded-full border-white/30 text-white hover:bg-white/10" data-testid="button-view-graduates">
                <Link href="/case-studies">
                  {tt("All outcomes", "Barcha natijalar", "Все результаты")} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">{tt("Graduates", "Bitiruvchilar", "Выпускники")}</div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-video-graduates-title">
                {tt("Our graduates' success", "Bitiruvchilarimiz muvaffaqiyati", "Успех наших выпускников")}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                {tt(
                  "3,500+ individual students. Our graduates work at Deloitte, KPMG, EY, Havas Holding, Central Bank, Ministry of Finance & Economy, National Bank, DCC, Anglesey Food (Korzinka) and other major companies.",
                  "3 500+ individual o'quvchi. Bitiruvchilarimiz Deloitte, KPMG, EY, Havas Holding, Markaziy Bank, Moliya va Iqtisodiyot Vazirligi, Milliy Bank, DCC, Anglesey Food (Korzinka) kabi yirik kompaniyalarda muvaffaqiyatli ishlashmoqda.",
                  "3 500+ индивидуальных студентов. Наши выпускники работают в Deloitte, KPMG, EY, Havas Holding, Центральном Банке, Министерстве Финансов и Экономики, Национальном Банке, DCC, Anglesey Food (Korzinka) и других крупных компаниях."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GRADUATE STORIES ── */}
      <section className="bg-[#0d0d0d] py-20 sm:py-24" data-testid="section-graduates">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">{tt("Results", "Natijalar", "Результаты")}</div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-graduates-title">
                {tt("Graduate outcomes", "Bitiruvchilarimiz natijasi", "Результаты выпускников")}
              </h2>
            </div>
            <Button asChild variant="outline" className="gap-1.5 rounded-full border-white/30 text-white hover:bg-white/10" data-testid="button-view-cases">
              <Link href="/case-studies">
                {tt("All", "Barchasi", "Все")} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {localizedGraduates.map((grad: GraduateResult) => {
              const avatarSrc =
                grad.avatar.startsWith("/") ? resolveBundledPublicUrl(grad.avatar) : grad.avatar;
              return (
              <article key={grad.id} className="group overflow-hidden rounded-2xl bg-zinc-900" data-testid={`card-grad-${grad.id}`}>
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                  {grad.videoId ? (
                    <YouTubeEmbed
                      videoId={grad.videoId}
                      title={`${grad.name} — ${grad.courseName}`}
                      className="rounded-none"
                    />
                  ) : (
                    <>
                      <img
                        src={avatarSrc}
                        alt={grad.name}
                        className="h-full w-full object-cover object-top ix-media"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">{grad.courseName}</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-5">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h3 className="font-extrabold text-white" data-testid={`text-grad-name-${grad.id}`}>{grad.name}</h3>
                    <span className="rounded-full bg-brand/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      {grad.courseName}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm flex-wrap">
                    <span className="text-zinc-500">{grad.beforeRole}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-brand-accent shrink-0" />
                    <span className="font-bold text-brand-accent">{grad.afterRole}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-xs font-bold text-emerald-400">
                    <TrendingUp className="h-3.5 w-3.5" />
                    {grad.salaryIncrease}
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HELP / CTA CARDS ── */}
      <section className="bg-[#111] py-20 sm:py-24" data-testid="section-help">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-help-title">
              {tt("If you don't know where to start", "Qayerdan boshlashni bilmasangiz", "Если не знаете, с чего начать")}
            </h2>
            <p className="mt-4 text-lg text-zinc-400">{tt("We help you choose the right path", "Biz sizga to'g'ri yo'nalishni topishda yordam beramiz", "Мы поможем выбрать правильное направление")}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/60 to-zinc-900 p-8" data-testid="card-help-consultation">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 shadow-lg">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-extrabold text-white">{tt("Find your direction", "Yo'nalishni aniqlang", "Определите направление")}</h3>
              <p className="mb-7 leading-relaxed text-zinc-400">
                {tt("Which track fits you best: ACCA, DipIFR, МСФО or Financial Analyst? Get a free consultation and make the right decision.", "ACCA, DipIFR, МСФО yoki Financial Analyst — qaysi biri sizga mos? Bepul konsultatsiya oling va to'g'ri qaror qabul qiling.", "Что вам подходит: ACCA, DipIFR, МСФО или Financial Analyst? Получите бесплатную консультацию и примите верное решение.")}
              </p>
              <Button asChild className="gap-2 rounded-full bg-emerald-600 px-6 font-bold text-white shadow-lg hover:bg-emerald-500" data-testid="button-help-profession">
                <Link href="/contacts">
                  {tt("Free consultation", "Bepul konsultatsiya", "Бесплатная консультация")} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/60 to-zinc-900 p-8" data-testid="card-help-free">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-extrabold text-white">{tt("All courses", "Barcha kurslar", "Все курсы")}</h3>
              <ul className="mb-7 space-y-2">
                {[
                  "ACCA (Applied Knowledge, Skills, Professional)",
                  "DipIFR",
                  "МСФО",
                  "Financial Analyst",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                    <span className="text-sm text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="gap-2 rounded-full bg-blue-600 px-6 font-bold text-white shadow-lg hover:bg-blue-500" data-testid="button-help-free">
                <Link href="/courses">
                  {tt("View courses", "Kurslarni ko'rish", "Смотреть курсы")} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEACHERS ── */}
      <section className="bg-[#0d0d0d] py-20 sm:py-24" data-testid="section-teachers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">{tt("Experts", "Ekspertlar", "Эксперты")}</div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-teachers-title">
                {tt("Mentor team", "Mentorlar jamoasi", "Команда менторов")}
              </h2>
            </div>
            <Button asChild variant="outline" className="gap-1.5 rounded-full border-white/30 text-white hover:bg-white/10" data-testid="button-all-teachers">
              <Link href="/teachers">
                {tt("All", "Barchasi", "Все")} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {localizedTeachers.slice(0, 8).map((teacher, index) => (
              <article key={teacher.id} className="group overflow-hidden rounded-2xl bg-zinc-900" data-testid={`card-teacher-${teacher.id}`}>
                <div className="relative aspect-[4/5] w-full max-h-64 overflow-hidden bg-zinc-950">
                  <TeacherAvatar
                    name={teacher.name}
                    src={teacher.avatar}
                    className={instructorPortraitClass()}
                    fetchPriority={index === 0 ? "high" : undefined}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-white" data-testid={`text-teacher-name-${teacher.id}`}>{teacher.name}</h3>
                  <p className="text-sm font-semibold text-brand-accent">{teacher.role}</p>
                  <p className="mt-1 text-xs text-zinc-500">{teacher.experience}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#111] py-20 sm:py-24" data-testid="section-testimonials">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">{tt("Reviews", "Fikrlar", "Отзывы")}</div>
            <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-testimonials-title">
              {tt("What do our students say?", "Talabalarimiz nima deydi?", "Что говорят наши студенты?")}
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {localizedTestimonials.map((t) => {
              const initials = t.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
              return (
                <div key={t.id} className="flex flex-col rounded-2xl border border-white/10 bg-zinc-900 p-6" data-testid={`card-testimonial-${t.id}`}>
                  <Quote className="mb-4 h-6 w-6 text-brand opacity-70" />
                  <p className="flex-1 text-sm leading-relaxed text-zinc-400">{t.text}</p>
                  <div className="mt-4 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3 border-t border-white/5 pt-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-xs font-bold text-white">
                      {initials}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white" data-testid={`text-testimonial-name-${t.id}`}>{t.name}</div>
                      <div className="text-xs text-zinc-500">{t.role}</div>
                    </div>
                  </div>
                  <span className="mt-3 inline-block self-start rounded-full border border-white/10 px-3 py-0.5 text-xs text-zinc-400">{t.courseName}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PartnerLogosMarquee
        className="border-y border-white/5 bg-[#0d0d0d] py-12 sm:py-14"
        title={tt("Our graduates work at these organizations", "Bitiruvchilarimiz shu tashkilotlarda ishlaydi", "Наши выпускники работают в этих организациях")}
        compactHeading
        headingClassName="text-center"
        fadeFrom="from-[#0d0d0d]"
        testId="section-partners"
      />

      {/* ── FINAL CTA ── */}
      <section className="bg-gradient-to-r from-brand-dark via-brand-dark to-brand py-20 sm:py-24" data-testid="section-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl" data-testid="text-cta-title">
                {tt("Start now — your future starts here", "Hoziroq boshlang — kelajagingiz shu yerdan boshlanadi", "Начните сейчас — ваше будущее начинается здесь")}
              </h2>
              <p className="mt-3 text-lg text-brand-accent-light">{tt("Take the first step with a free consultation", "Birinchi qadam sifatida bepul konsultatsiya oling", "Сделайте первый шаг — получите бесплатную консультацию")}</p>
            </div>
            <Button asChild size="lg" className="shrink-0 gap-2 rounded-full bg-amber-400 px-10 text-base font-extrabold text-black shadow-2xl hover:bg-amber-300" data-testid="button-cta-consultation">
              <Link href="/contacts">
                {tt("Free consultation", "Bepul konsultatsiya", "Бесплатная консультация")} <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
}
