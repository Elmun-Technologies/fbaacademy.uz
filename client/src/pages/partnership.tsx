import { useSEO } from "@/hooks/use-seo";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import { DeferredLeadForm } from "@/components/lazy-lead-form";
import PartnerLogosMarquee from "@/components/partner-logos-marquee";
import {
  Handshake, Building2, Users, Gift, CheckCircle2,
  TrendingUp, Globe, ArrowRight, Sparkles,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/lib/translations";

const PARTNERSHIP_TYPES: Record<Language, Array<{ icon: typeof Building2; title: string; desc: string; benefits: string[]; color: string }>> = {
  uz: [
    { icon: Building2, title: "Korporativ hamkorlik", desc: "Kompaniyalar uchun maxsus chegirmalar va korporativ ta'lim dasturlari.", benefits: ["Maxsus narxlar", "Individual dastur", "Moslashuvchan jadval"], color: "from-blue-500 to-cyan-500" },
    { icon: Users, title: "Affiliate dastur", desc: "FBA Academy kurslarini tavsiya qiling va har bir talabadan komissiya oling.", benefits: ["20% komissiya", "Shaxsiy hisobot paneli", "Tavsiya havolasi"], color: "from-brand to-brand-accent" },
    { icon: Globe, title: "Ta'lim muassasalari", desc: "Universitetlar va kollejlar bilan akademik hamkorlik.", benefits: ["Akademik chegirmalar", "Birgalikdagi sertifikat", "Professor almashish"], color: "from-emerald-500 to-teal-500" },
    { icon: Gift, title: "Sponsorlik", desc: "FBA Academy tadbirlarini qo'llab-quvvatlash va brendingizni tanitish.", benefits: ["Brend ko'rinishi", "Networking imkoniyati", "CSR hisoboti"], color: "from-amber-500 to-orange-500" },
    { icon: TrendingUp, title: "Strategik investitsiya", desc: "FBA Academy rivojlanishiga investitsiya qiling.", benefits: ["Daromad ulushi", "Boshqaruv kengashi", "Strategik qarorlar"], color: "from-indigo-500 to-violet-500" },
    { icon: Handshake, title: "Texnologik hamkorlik", desc: "Platforma va texnologiya sohasida hamkorlik.", benefits: ["API integratsiya", "Data sharing", "Birgalikdagi R&D"], color: "from-rose-500 to-brand-accent" },
  ],
  ru: [
    { icon: Building2, title: "Корпоративное партнёрство", desc: "Специальные скидки и корпоративные программы обучения для компаний.", benefits: ["Специальные цены", "Индивидуальная программа", "Гибкий график"], color: "from-blue-500 to-cyan-500" },
    { icon: Users, title: "Affiliate-программа", desc: "Рекомендуйте курсы FBA Academy и получайте комиссию за каждого студента.", benefits: ["20% комиссия", "Личный дашборд", "Реферальная ссылка"], color: "from-brand to-brand-accent" },
    { icon: Globe, title: "Учебные заведения", desc: "Академическое сотрудничество с университетами и колледжами.", benefits: ["Академические скидки", "Совместный сертификат", "Обмен преподавателями"], color: "from-emerald-500 to-teal-500" },
    { icon: Gift, title: "Спонсорство", desc: "Поддержка мероприятий FBA Academy и продвижение вашего бренда.", benefits: ["Видимость бренда", "Нетворкинг", "CSR-отчётность"], color: "from-amber-500 to-orange-500" },
    { icon: TrendingUp, title: "Стратегические инвестиции", desc: "Инвестируйте в развитие FBA Academy.", benefits: ["Доля дохода", "Совет управления", "Стратегические решения"], color: "from-indigo-500 to-violet-500" },
    { icon: Handshake, title: "Технологическое партнёрство", desc: "Сотрудничество в области платформ и технологий.", benefits: ["API-интеграция", "Обмен данными", "Совместные R&D"], color: "from-rose-500 to-brand-accent" },
  ],
  en: [
    { icon: Building2, title: "Corporate Partnership", desc: "Special discounts and corporate training programs for companies.", benefits: ["Custom pricing", "Individual program", "Flexible schedule"], color: "from-blue-500 to-cyan-500" },
    { icon: Users, title: "Affiliate Program", desc: "Recommend FBA Academy courses and earn a commission per student.", benefits: ["20% commission", "Personal dashboard", "Referral link"], color: "from-brand to-brand-accent" },
    { icon: Globe, title: "Educational Institutions", desc: "Academic collaboration with universities and colleges.", benefits: ["Academic discounts", "Joint certificate", "Professor exchange"], color: "from-emerald-500 to-teal-500" },
    { icon: Gift, title: "Sponsorship", desc: "Support FBA Academy events and promote your brand.", benefits: ["Brand visibility", "Networking opportunity", "CSR reporting"], color: "from-amber-500 to-orange-500" },
    { icon: TrendingUp, title: "Strategic Investment", desc: "Invest in the development of FBA Academy.", benefits: ["Revenue share", "Board seat", "Strategic decisions"], color: "from-indigo-500 to-violet-500" },
    { icon: Handshake, title: "Technology Partnership", desc: "Collaborate in platforms and technology.", benefits: ["API integration", "Data sharing", "Joint R&D"], color: "from-rose-500 to-brand-accent" },
  ],
};

const PROCESS_STEPS: Record<Language, Array<{ num: string; title: string; desc: string }>> = {
  uz: [
    { num: "01", title: "Murojaat qiling", desc: "Quyidagi forma orqali so'rov yuboring." },
    { num: "02", title: "Muzokaralar", desc: "Mutaxassislarimiz siz bilan bog'lanadi va shartlarni muhokama qiladi." },
    { num: "03", title: "Shartnoma", desc: "Hamkorlik shartnomasini imzolaymiz." },
    { num: "04", title: "Boshlaymiz", desc: "Birgalikda natijaga erisamiz." },
  ],
  ru: [
    { num: "01", title: "Подайте заявку", desc: "Отправьте запрос через форму ниже." },
    { num: "02", title: "Переговоры", desc: "Наши специалисты свяжутся с вами и обсудят условия." },
    { num: "03", title: "Договор", desc: "Подписываем партнёрское соглашение." },
    { num: "04", title: "Начинаем", desc: "Вместе достигаем результатов." },
  ],
  en: [
    { num: "01", title: "Apply", desc: "Submit a request through the form below." },
    { num: "02", title: "Negotiation", desc: "Our team will contact you and discuss the terms." },
    { num: "03", title: "Agreement", desc: "We sign a partnership agreement." },
    { num: "04", title: "Let's Go", desc: "Together we achieve results." },
  ],
};

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
    stats: Array<{ value: string; label: string }>;
    typesTitle: string;
    typesDesc: string;
    processTitle: string;
    processDesc: string;
    partnersTitle: string;
    partnersDesc: string;
    formTitle: string;
    formDesc: string;
    formBullets: string[];
    formCardTitle: string;
    formCardDesc: string;
    formButton: string;
  }
> = {
  uz: {
    seoTitle: "Hamkorlik — Korporativ, Affiliate, Ta'lim | FBA Academy",
    seoDescription: "FBA Academy bilan hamkorlik qiling: korporativ treninglar, affiliate dastur, universitetlar bilan hamkorlik va sponsorlik imkoniyatlari.",
    seoKeywords: "FBA Academy hamkorlik, ACCA korporativ trening, ta'lim muassasa hamkorlik, affiliate dastur",
    breadcrumb: "Hamkorlik",
    badge: "Hamkorlik",
    heroTitle: "FBA Academy bilan hamkorlik qiling",
    heroSubtitle: "Birgalikda yanada ko'proq insonlarga yordam bering va biznesingizni rivojlantiring.",
    stats: [
      { value: "50+", label: "Hamkor kompaniyalar" },
      { value: "1000+", label: "Bitiruvchilar" },
      { value: "20%", label: "Affiliate komissiya" },
    ],
    typesTitle: "Hamkorlik turlari",
    typesDesc: "Biznesingiz ehtiyojlariga mos hamkorlik shaklini tanlang.",
    processTitle: "Hamkorlik jarayoni",
    processDesc: "4 qadamda hamkorlikni boshlang",
    partnersTitle: "Bitiruvchilarimiz shu tashkilotlarda ishlaydi",
    partnersDesc: "Bizning bitiruvchilar yetakchi kompaniyalarda faoliyat yuritadi",
    formTitle: "Hamkorlik so'rovi",
    formDesc: "So'rovingizni qoldiring, mutaxassislarimiz 24 soat ichida bog'lanadi va qulay hamkorlik shaklini taklif qiladi.",
    formBullets: ["24 soat ichida javob", "Bepul maslahat", "Moslashuvchan shartlar", "Uzoq muddatli hamkorlik"],
    formCardTitle: "So'rov yuborish",
    formCardDesc: "Barcha maydonlarni to'ldiring",
    formButton: "So'rov yuborish",
  },
  ru: {
    seoTitle: "Партнёрство — Корпоративное, Affiliate, Образование | FBA Academy",
    seoDescription: "Сотрудничайте с FBA Academy: корпоративные тренинги, affiliate-программа, партнёрство с вузами и спонсорство.",
    seoKeywords: "партнерство FBA Academy, корпоративный ACCA тренинг, affiliate программа",
    breadcrumb: "Партнёрство",
    badge: "Партнёрство",
    heroTitle: "Сотрудничайте с FBA Academy",
    heroSubtitle: "Вместе помогайте большему числу людей и развивайте свой бизнес.",
    stats: [
      { value: "50+", label: "Компаний-партнёров" },
      { value: "1000+", label: "Выпускников" },
      { value: "20%", label: "Affiliate комиссия" },
    ],
    typesTitle: "Форматы партнёрства",
    typesDesc: "Выберите формат сотрудничества под задачи вашего бизнеса.",
    processTitle: "Процесс сотрудничества",
    processDesc: "Запустите партнёрство в 4 шага",
    partnersTitle: "Наши выпускники работают в этих организациях",
    partnersDesc: "Наши выпускники работают в ведущих компаниях",
    formTitle: "Заявка на партнёрство",
    formDesc: "Оставьте заявку, и наши специалисты свяжутся с вами в течение 24 часов.",
    formBullets: ["Ответ в течение 24 часов", "Бесплатная консультация", "Гибкие условия", "Долгосрочное партнёрство"],
    formCardTitle: "Отправить заявку",
    formCardDesc: "Заполните все поля формы",
    formButton: "Отправить заявку",
  },
  en: {
    seoTitle: "Partnership — Corporate, Affiliate, Education | FBA Academy",
    seoDescription: "Partner with FBA Academy through corporate training, affiliate program, university collaboration and sponsorship opportunities.",
    seoKeywords: "FBA Academy partnership, corporate ACCA training, affiliate program",
    breadcrumb: "Partnership",
    badge: "Partnership",
    heroTitle: "Partner with FBA Academy",
    heroSubtitle: "Help more people grow and expand your business together with us.",
    stats: [
      { value: "50+", label: "Partner companies" },
      { value: "1000+", label: "Graduates" },
      { value: "20%", label: "Affiliate commission" },
    ],
    typesTitle: "Partnership types",
    typesDesc: "Choose the partnership model that fits your business needs.",
    processTitle: "Partnership process",
    processDesc: "Start collaboration in 4 steps",
    partnersTitle: "Our graduates work at these organizations",
    partnersDesc: "Our graduates are employed at leading companies",
    formTitle: "Partnership request",
    formDesc: "Leave your request and our team will contact you within 24 hours.",
    formBullets: ["Response within 24 hours", "Free consultation", "Flexible terms", "Long-term partnership"],
    formCardTitle: "Submit request",
    formCardDesc: "Please complete all form fields",
    formButton: "Submit request",
  },
};

export default function Partnership() {
  const { lang } = useLanguage();
  const tx = TEXT[lang];

  useSEO({
    title: tx.seoTitle,
    description: tx.seoDescription,
    keywords: tx.seoKeywords,
    breadcrumb: [{ name: tx.breadcrumb, url: "https://fbaacademy.uz/partnership" }],
    dateModified: "2026-04-16",
    speakable: ["[data-speakable='partner-title']", "[data-speakable='partner-desc']"],
    jsonLd: {
      "@type": "Service",
      "name": lang === "ru" ? "FBA Academy — Программа партнёрства" : lang === "en" ? "FBA Academy — Partnership Program" : "FBA Academy — Hamkorlik dasturi",
      "description": lang === "ru"
        ? "Партнёрство с FBA Academy: корпоративные и образовательные программы по ACCA, DipIFR, Financial Modeling."
        : lang === "en"
          ? "Partner with FBA Academy: corporate and educational programs in ACCA, DipIFR, Financial Modeling."
          : "FBA Academy bilan hamkorlik: korporativ va ta'lim muassasalari uchun moliyaviy ta'lim dasturlari. ACCA, DipIFR, Financial Modeling bo'yicha hamkorlik.",
      "url": "https://fbaacademy.uz/partnership",
      "provider": { "@type": "Organization", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
      "serviceType": "Education Partnership",
      "areaServed": { "@type": "Country", "name": "Uzbekistan" },
    },
  });

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#11133c] via-[#1a2a4a] to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14"
        data-testid="section-partnership-hero"
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
            data-testid="text-partnership-title"
            data-speakable="partner-title"
          >
            {tx.heroTitle}
          </h1>
          <p className="mb-10 max-w-xl text-lg text-slate-300 leading-relaxed" data-speakable="partner-desc">
            {tx.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-5">
            {tx.stats.map((s, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm" data-testid={`stat-partner-${i}`}>
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-sm text-zinc-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP TYPES ─────────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-partnership-types">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-types-title">
            {tx.typesTitle}
          </h2>
          <p className="mb-10 max-w-xl text-zinc-400">
            {tx.typesDesc}
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERSHIP_TYPES[lang].map((item, i) => (
              <div
                key={i}
                className="ix-card-border overflow-hidden rounded-xl border border-white/10 bg-zinc-900"
                data-testid={`card-partnership-${i}`}
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${item.color}`} />
                <div className="p-6">
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-md`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-2 font-bold">{item.title}</h3>
                  <p className="mb-4 text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.benefits.map((b, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        <span className="text-zinc-400">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section className="bg-[#111] py-14 sm:py-20" data-testid="section-process">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-process-title">
            {tx.processTitle}
          </h2>
          <p className="mb-10 text-zinc-400">{tx.processDesc}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS[lang].map((step, i) => (
              <div key={i} className="relative" data-testid={`step-partner-${i}`}>
                {i < PROCESS_STEPS[lang].length - 1 && (
                  <div className="absolute left-6 top-6 hidden h-0.5 w-full bg-slate-200 lg:block dark:bg-slate-700" />
                )}
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-accent text-sm font-extrabold text-white shadow-md">
                    {step.num}
                  </div>
                  <h3 className="font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerLogosMarquee
        className="py-14 sm:py-20"
        title={tx.partnersTitle}
        subtitle={tx.partnersDesc}
        headingClassName="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white"
        testId="section-current-partners"
      />

      {/* ── FORM ──────────────────────────────────────────────── */}
      <section className="bg-[#111] py-14 sm:py-20" data-testid="section-partnership-form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-form-title">
                {tx.formTitle}
              </h2>
              <p className="mt-3 text-zinc-400 leading-relaxed">
                {tx.formDesc}
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
            <div className="rounded-xl border border-white/10 bg-zinc-900 p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-accent shadow-md">
                <Handshake className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-1 text-lg font-extrabold">{tx.formCardTitle}</h3>
              <p className="mb-6 text-sm text-zinc-400">{tx.formCardDesc}</p>
              <DeferredLeadForm source="partnership" buttonText={tx.formButton} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
