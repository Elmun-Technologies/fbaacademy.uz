import { useSEO } from "@/hooks/use-seo";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import { DeferredLeadForm } from "@/components/lazy-lead-form";
import {
  BarChart3, Users, Target, Award, BookOpen, Building2,
  CheckCircle2, ArrowRight, Sparkles, Clock, Shield,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/lib/translations";

const DIRECTIONS: Record<Language, Array<{ icon: typeof Award; title: string; desc: string; color: string }>> = {
  uz: [
    { icon: Award, title: "ACCA treningi", desc: "Kompaniya buxgalter va moliyachilariga ACCA Applied Knowledge, Skills, Professional darajalarida trening.", color: "from-blue-500 to-cyan-500" },
    { icon: BarChart3, title: "IFRS / DipIFR", desc: "Moliyaviy hisobotlarni xalqaro IFRS standartlariga o'tkazish bo'yicha jamoaviy treninglar.", color: "from-emerald-500 to-teal-500" },
    { icon: Target, title: "Financial Modeling", desc: "Moliya bo'limi jamoasi uchun DCF, kompaniya baholash va investitsiya tahlili treningi.", color: "from-violet-500 to-brand" },
    { icon: BookOpen, title: "1C: Buxgalteriya", desc: "Kompaniyangiz uchun 1C: Buxgalteriya 8.3 ni to'liq joriy etish va xodimlarni o'qitish.", color: "from-amber-500 to-orange-500" },
    { icon: Users, title: "Huquqiy savodxonlik", desc: "Moliya, mehnat va soliq huquqi bo'yicha jamoaviy treninglar.", color: "from-rose-500 to-brand-accent" },
    { icon: Building2, title: "Maxsus dasturlar", desc: "Sizning kompaniyangiz ehtiyojlariga individual ravishda ishlab chiqilgan maxsus ta'lim dasturi.", color: "from-indigo-500 to-violet-500" },
  ],
  ru: [
    { icon: Award, title: "Тренинг ACCA", desc: "Тренинги для бухгалтеров и финансистов компании по уровням ACCA Applied Knowledge, Skills, Professional.", color: "from-blue-500 to-cyan-500" },
    { icon: BarChart3, title: "IFRS / DipIFR", desc: "Командные тренинги по переходу финансовой отчётности на международные стандарты IFRS.", color: "from-emerald-500 to-teal-500" },
    { icon: Target, title: "Financial Modeling", desc: "Тренинг для финансовой команды по DCF, оценке компаний и инвестиционному анализу.", color: "from-violet-500 to-brand" },
    { icon: BookOpen, title: "1C: Бухгалтерия", desc: "Полное внедрение 1C: Бухгалтерия 8.3 и обучение сотрудников вашей компании.", color: "from-amber-500 to-orange-500" },
    { icon: Users, title: "Правовая грамотность", desc: "Командные тренинги по финансовому, трудовому и налоговому праву.", color: "from-rose-500 to-brand-accent" },
    { icon: Building2, title: "Индивидуальные программы", desc: "Специальная образовательная программа, разработанная под потребности вашей компании.", color: "from-indigo-500 to-violet-500" },
  ],
  en: [
    { icon: Award, title: "ACCA Training", desc: "Training for company accountants and finance staff at ACCA Applied Knowledge, Skills, and Professional levels.", color: "from-blue-500 to-cyan-500" },
    { icon: BarChart3, title: "IFRS / DipIFR", desc: "Team training on transitioning financial reporting to international IFRS standards.", color: "from-emerald-500 to-teal-500" },
    { icon: Target, title: "Financial Modeling", desc: "DCF, company valuation and investment analysis training for the finance team.", color: "from-violet-500 to-brand" },
    { icon: BookOpen, title: "1C: Accounting", desc: "Full implementation of 1C: Accounting 8.3 and staff training for your company.", color: "from-amber-500 to-orange-500" },
    { icon: Users, title: "Legal Literacy", desc: "Team training in financial, labor and tax law.", color: "from-rose-500 to-brand-accent" },
    { icon: Building2, title: "Custom Programs", desc: "A tailored education program built around your company's specific needs.", color: "from-indigo-500 to-violet-500" },
  ],
};

const PROCESS: Record<Language, Array<{ num: string; title: string; desc: string; color: string }>> = {
  uz: [
    { num: "01", title: "Tahlil", desc: "Kompaniya ehtiyojlari va xodimlar darajasini aniqlaymiz.", color: "from-blue-500 to-cyan-500" },
    { num: "02", title: "Dastur", desc: "Maxsus o'quv dasturini tuzib, siz bilan kelishib olamiz.", color: "from-brand to-brand-accent" },
    { num: "03", title: "Trening", desc: "Professional mentorlar siz tanlagan formatda o'qitadi.", color: "from-emerald-500 to-teal-500" },
    { num: "04", title: "Natija", desc: "KPI asosida o'sish ko'rsatkichlarini o'lchaymiz.", color: "from-amber-500 to-orange-500" },
  ],
  ru: [
    { num: "01", title: "Анализ", desc: "Определяем потребности компании и уровень сотрудников.", color: "from-blue-500 to-cyan-500" },
    { num: "02", title: "Программа", desc: "Составляем индивидуальную учебную программу и согласуем с вами.", color: "from-brand to-brand-accent" },
    { num: "03", title: "Тренинг", desc: "Профессиональные менторы обучают в выбранном вами формате.", color: "from-emerald-500 to-teal-500" },
    { num: "04", title: "Результат", desc: "Измеряем показатели роста на основе KPI.", color: "from-amber-500 to-orange-500" },
  ],
  en: [
    { num: "01", title: "Analysis", desc: "We assess company needs and staff skill levels.", color: "from-blue-500 to-cyan-500" },
    { num: "02", title: "Program", desc: "We design a custom curriculum and align it with you.", color: "from-brand to-brand-accent" },
    { num: "03", title: "Training", desc: "Professional mentors deliver training in your preferred format.", color: "from-emerald-500 to-teal-500" },
    { num: "04", title: "Results", desc: "We measure growth indicators based on KPIs.", color: "from-amber-500 to-orange-500" },
  ],
};

const WHY_US: Record<Language, Array<{ icon: typeof Shield; title: string; desc: string }>> = {
  uz: [
    { icon: Shield, title: "Moslashuvchan format", desc: "Online, offline yoki aralash format — siz tanlaysiz." },
    { icon: Clock, title: "Qulay jadval", desc: "Ishchi soatlarga mos vaqtlarda darslar tashkil qilinadi." },
    { icon: Award, title: "Xalqaro sertifikat", desc: "O'qitish yakuni o'quvchilarga xalqaro sertifikat beriladi." },
    { icon: BarChart3, title: "KPI tizimi", desc: "Natijalarni o'lchaydigan hisobot tizimi bilan ishlashadi." },
  ],
  ru: [
    { icon: Shield, title: "Гибкий формат", desc: "Онлайн, офлайн или смешанный формат — вы выбираете." },
    { icon: Clock, title: "Удобный график", desc: "Занятия проводятся в удобное для рабочего графика время." },
    { icon: Award, title: "Международный сертификат", desc: "По окончании обучения выдаётся международный сертификат." },
    { icon: BarChart3, title: "Система KPI", desc: "Работа с системой отчётности для измерения результатов." },
  ],
  en: [
    { icon: Shield, title: "Flexible Format", desc: "Online, offline or blended — you choose." },
    { icon: Clock, title: "Convenient Schedule", desc: "Classes are organized to fit your working hours." },
    { icon: Award, title: "International Certificate", desc: "Participants receive an international certificate upon completion." },
    { icon: BarChart3, title: "KPI System", desc: "Includes a reporting system to measure learning outcomes." },
  ],
};

const TRUSTED_PARTNER_LOGOS = [
  { name: "Deloitte", src: "partner-logos/Deloitte.jpg", cardClass: "w-[190px]", imageClass: "max-h-9", surfaceClass: "bg-white" },
  { name: "PwC", src: "partner-logos/PWC.jpg", cardClass: "w-[185px]", imageClass: "max-h-9", surfaceClass: "bg-white" },
  { name: "KPMG", src: "partner-logos/KPMG.jpg", cardClass: "w-[185px]", imageClass: "max-h-9", surfaceClass: "bg-white" },
  { name: "EY", src: "partner-logos/EY.jpg", cardClass: "w-[175px]", imageClass: "max-h-8", surfaceClass: "bg-white" },
  { name: "BDO", src: "partner-logos/BDO.jpg", cardClass: "w-[180px]", imageClass: "max-h-9", surfaceClass: "bg-white" },
  { name: "Grant Thornton", src: "partner-logos/GRANT THORTON.jpg", cardClass: "w-[190px]", imageClass: "max-h-9", surfaceClass: "bg-white" },
  { name: "UzCard", src: "partner-logos/UZCARD.jpg", cardClass: "w-[195px]", imageClass: "max-h-11", surfaceClass: "bg-white" },
  { name: "NBU", src: "partner-logos/NBU.jpg", cardClass: "w-[185px]", imageClass: "max-h-11", surfaceClass: "bg-white" },
  { name: "Kapitalbank", src: "partner-logos/KAPITALBANK.jpg", cardClass: "w-[210px]", imageClass: "max-h-11", surfaceClass: "bg-white" },
  { name: "Artel", src: "partner-logos/ARTEL.jpg", cardClass: "w-[180px]", imageClass: "max-h-11", surfaceClass: "bg-white" },
  { name: "Payme", src: "partner-logos/PAYME.jpg", cardClass: "w-[180px]", imageClass: "max-h-11", surfaceClass: "bg-white" },
  { name: "Humans", src: "partner-logos/HUMANS.jpg", cardClass: "w-[190px]", imageClass: "max-h-11", surfaceClass: "bg-white" },
];

const TRUSTED_PARTNER_MARQUEE = [...TRUSTED_PARTNER_LOGOS, ...TRUSTED_PARTNER_LOGOS];

const TEXT: Record<
  Language,
  {
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string;
    breadcrumb: string;
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    heroStats: Array<{ value: string; label: string }>;
    directionsTitle: string;
    directionsDesc: string;
    processTitle: string;
    processDesc: string;
    whyTitle: string;
    whyDesc: string;
    trustedTitle: string;
    trustedHint: string;
    formTitle: string;
    formLeadDesc: string;
    formBullets: string[];
    formCardTitle: string;
    formSubtitle: string;
    formButton: string;
  }
> = {
  uz: {
    seoTitle: "Korporativ Treninglar — ACCA, IFRS, Moliya | FBA Academy",
    seoDescription: "Kompaniyangiz moliya va buxgalteriya jamoasi uchun ACCA, DipIFR, IFRS va Financial Modeling bo'yicha korporativ treninglar. Moslashuvchan jadval, xalqaro sertifikatlar.",
    seoKeywords: "korporativ trening ACCA, IFRS trening kompaniya, moliya treningi O'zbekiston, korporativ ta'lim",
    breadcrumb: "Korporativ treninglar",
    badge: "Korporativ",
    heroTitle: "Jamoangiz malakasini oshiring",
    heroSubtitle: "Kompaniyangiz ehtiyojlariga moslashtirilgan maxsus ta'lim dasturlari. Tajribali mentorlar, amaliy loyihalar, xalqaro sertifikatlar.",
    heroStats: [
      { value: "50+", label: "Hamkor kompaniya" },
      { value: "6", label: "Ta'lim yo'nalishi" },
      { value: "100%", label: "Moslashuvchan jadval" },
    ],
    directionsTitle: "Trening yo'nalishlari",
    directionsDesc: "Kompaniyangiz ehtiyojiga ko'ra bitta yoki bir nechta yo'nalishni tanlang.",
    processTitle: "Qanday ishlaydi?",
    processDesc: "Jamoangiz uchun ideal dastur yaratishning 4 bosqichi",
    whyTitle: "Nima uchun FBA Academy?",
    whyDesc: "Korporativ treninglarimiz natijaga yo'naltirilgan va o'lchanadigan.",
    trustedTitle: "Bizga ishonishadi",
    trustedHint: "Hamkor logotiplari uzluksiz ko'rinishda aylantiriladi. Ustiga olib borsangiz lenta to'xtaydi.",
    formTitle: "Bepul konsultatsiya oling",
    formLeadDesc: "Jamoangiz uchun maxsus dastur tuzamiz. So'rov qoldiring — 24 soat ichida bog'lanamiz.",
    formBullets: [
      "Kompaniya ehtiyojlariga moslashtirilgan dastur",
      "Tajribali mentorlar tomonidan olib boriladi",
      "Amaliy loyihalar va real case'lar",
      "Natijani o'lchaydigan KPI tizimi",
    ],
    formCardTitle: "So'rov yuborish",
    formSubtitle: "Jamoangiz uchun maxsus dastur tuzamiz",
    formButton: "So'rov yuborish",
  },
  ru: {
    seoTitle: "Корпоративные тренинги — ACCA, IFRS, Финансы | FBA Academy",
    seoDescription: "Корпоративные тренинги для финансовых и бухгалтерских команд по ACCA, DipIFR, IFRS и Financial Modeling. Гибкий график и международные сертификаты.",
    seoKeywords: "корпоративный тренинг ACCA, IFRS тренинг компании, корпоративное обучение финансы",
    breadcrumb: "Корпоративные тренинги",
    badge: "Корпоративный формат",
    heroTitle: "Повысьте квалификацию вашей команды",
    heroSubtitle: "Индивидуальные учебные программы под задачи вашей компании. Опытные менторы, практика и международные сертификаты.",
    heroStats: [
      { value: "50+", label: "Компаний-партнёров" },
      { value: "6", label: "Направлений обучения" },
      { value: "100%", label: "Гибкий график" },
    ],
    directionsTitle: "Направления тренингов",
    directionsDesc: "Выберите одно или несколько направлений под задачи вашей компании.",
    processTitle: "Как это работает?",
    processDesc: "4 шага к идеальной программе для вашей команды",
    whyTitle: "Почему FBA Academy?",
    whyDesc: "Наши корпоративные тренинги ориентированы на результат и измеримы.",
    trustedTitle: "Нам доверяют",
    trustedHint: "Лента логотипов движется непрерывно. При наведении анимация останавливается.",
    formTitle: "Получите бесплатную консультацию",
    formLeadDesc: "Составим индивидуальную программу для вашей команды. Оставьте заявку — свяжемся в течение 24 часов.",
    formBullets: [
      "Программа под потребности компании",
      "Ведут опытные менторы",
      "Практические проекты и реальные кейсы",
      "Система KPI для измерения результата",
    ],
    formCardTitle: "Отправить заявку",
    formSubtitle: "Соберем индивидуальную программу для вашей команды",
    formButton: "Отправить заявку",
  },
  en: {
    seoTitle: "Corporate Training — ACCA, IFRS, Finance | FBA Academy",
    seoDescription: "Corporate training for finance and accounting teams in ACCA, DipIFR, IFRS and Financial Modeling. Flexible schedule and international certification.",
    seoKeywords: "corporate ACCA training, IFRS company training, finance team upskilling",
    breadcrumb: "Corporate Training",
    badge: "Corporate",
    heroTitle: "Upskill your team",
    heroSubtitle: "Custom training programs built around your company goals. Experienced mentors, practical projects and international certification.",
    heroStats: [
      { value: "50+", label: "Partner companies" },
      { value: "6", label: "Training directions" },
      { value: "100%", label: "Flexible schedule" },
    ],
    directionsTitle: "Training directions",
    directionsDesc: "Choose one or more directions that fit your company's needs.",
    processTitle: "How it works",
    processDesc: "4 steps to the perfect program for your team",
    whyTitle: "Why FBA Academy?",
    whyDesc: "Our corporate training is results-oriented and measurable.",
    trustedTitle: "Trusted by",
    trustedHint: "Partner logos move continuously. Hover to pause the strip.",
    formTitle: "Get a free consultation",
    formLeadDesc: "We will build a custom program for your team. Leave a request and we will contact you within 24 hours.",
    formBullets: [
      "Program tailored to company needs",
      "Led by experienced mentors",
      "Practical projects and real cases",
      "KPI system to measure outcomes",
    ],
    formCardTitle: "Submit request",
    formSubtitle: "We will build a custom program for your team",
    formButton: "Submit request",
  },
};

function resolvePartnerLogoSrc(path: string): string {
  const win = typeof window !== "undefined" ? (window as { FBA_ASSET_BASE?: string }) : undefined;
  const baseFromWordPress = typeof win?.FBA_ASSET_BASE === "string" ? win.FBA_ASSET_BASE : "";
  const base = (baseFromWordPress || import.meta.env.BASE_URL || "/").replace(/\/+$/, "/");
  return `${base}${path.replace(/^\/+/, "")}`;
}

export default function CorporateTraining() {
  const { lang } = useLanguage();
  const tx = TEXT[lang];

  useSEO({
    title: tx.seoTitle,
    description: tx.seoDescription,
    keywords: tx.seoKeywords,
    breadcrumb: [{ name: tx.breadcrumb, url: "https://fbaacademy.uz/corporate" }],
    dateModified: "2026-04-16",
    speakable: ["[data-speakable='corporate-title']", "[data-speakable='corporate-desc']"],
    jsonLd: {
      "@type": "Service",
      "name": lang === "ru" ? "FBA Academy — Корпоративные тренинги" : lang === "en" ? "FBA Academy — Corporate Training" : "FBA Academy — Korporativ treninglar",
      "description": lang === "ru"
        ? "Специальные финансовые тренинги для компаний: ACCA, IFRS, Financial Modeling, 1C Бухгалтерия. Программы повышения квалификации."
        : lang === "en"
          ? "Specialized financial training for companies: ACCA, IFRS, Financial Modeling, 1C Accounting. Staff upskilling programs."
          : "Kompaniyalar uchun maxsus moliyaviy treninglar: ACCA, IFRS, Financial Modeling, 1C Buxgalteriya. Xodimlar malakasini oshirish dasturlari.",
      "url": "https://fbaacademy.uz/corporate",
      "provider": { "@type": "Organization", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
      "serviceType": "Corporate Training",
      "areaServed": { "@type": "Country", "name": "Uzbekistan" },
    },
  });

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#11133c] via-[#1a2a4a] to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14"
        data-testid="section-corporate-hero"
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
            data-testid="text-corporate-title"
            data-speakable="corporate-title"
          >
            {tx.heroTitle}
          </h1>
          <p className="mb-10 max-w-xl text-lg text-slate-300 leading-relaxed" data-speakable="corporate-desc">
            {tx.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            {tx.heroStats.map((s, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm" data-testid={`stat-corp-${i}`}>
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECTIONS ────────────────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-directions">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-directions-title">
            {tx.directionsTitle}
          </h2>
          <p className="mb-10 max-w-xl text-zinc-400">
            {tx.directionsDesc}
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DIRECTIONS[lang].map((item, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-zinc-900" data-testid={`card-direction-${i}`}>
                <div className={`h-1.5 w-full bg-gradient-to-r ${item.color}`} />
                <div className="p-6">
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-md`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-extrabold text-white">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section className="bg-[#111] py-14 sm:py-20" data-testid="section-corp-process">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-process-title">
            {tx.processTitle}
          </h2>
          <p className="mb-10 text-zinc-400">{tx.processDesc}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS[lang].map((item, i) => (
              <div key={i} className="relative" data-testid={`step-corp-${i}`}>
                {i < PROCESS[lang].length - 1 && (
                  <div className="absolute left-6 top-6 hidden h-0.5 w-full bg-zinc-700 lg:block" />
                )}
                <div className="relative">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-sm font-extrabold text-white shadow-md`}>
                    {item.num}
                  </div>
                  <h3 className="font-extrabold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-14 sm:py-20" data-testid="section-corp-why">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-why-title">
            {tx.whyTitle}
          </h2>
          <p className="mb-10 text-zinc-400 max-w-xl">
            {tx.whyDesc}
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US[lang].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900 p-7" data-testid={`card-why-corp-${i}`}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20">
                  <item.icon className="h-5 w-5 text-brand-accent" />
                </div>
                <h3 className="mb-2 text-lg font-extrabold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ───────────────────────────────────────────── */}
      <section className="bg-white py-12 sm:py-16" data-testid="section-corp-clients">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-500">{tx.trustedTitle}</p>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white py-5 shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-white to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-white to-transparent sm:w-20" />
            <div className="fba-logo-marquee">
              {TRUSTED_PARTNER_MARQUEE.map((logo, idx) => (
                <div
                  key={`${logo.name}-${idx}`}
                  className={`flex h-20 shrink-0 items-center justify-center rounded-xl border border-slate-200 px-5 ${logo.cardClass} ${logo.surfaceClass}`}
                  data-testid={`corp-partner-${logo.name}-${idx}`}
                >
                  <img
                    src={resolvePartnerLogoSrc(logo.src)}
                    alt={`${logo.name} logotipi`}
                    loading="lazy"
                    decoding="async"
                    className={`w-auto object-contain ${logo.imageClass}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 text-xs text-slate-500">
            {tx.trustedHint}
          </div>
        </div>
      </section>

      {/* ── FORM CTA ──────────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-14 sm:py-20" data-testid="section-corp-form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-form-title">
                {tx.formTitle}
              </h2>
              <p className="mt-3 text-zinc-400 leading-relaxed">
                {tx.formLeadDesc}
              </p>
              <ul className="mt-6 space-y-3">
                {tx.formBullets.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8" data-testid="card-corp-form">
              <h3 className="mb-1 text-lg font-extrabold text-white">{tx.formCardTitle}</h3>
              <p className="mb-6 text-sm text-zinc-400">{tx.formSubtitle}</p>
              <DeferredLeadForm source="corporate" buttonText={tx.formButton} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
