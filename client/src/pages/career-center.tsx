import { useSEO } from "@/hooks/use-seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import { graduateResults } from "@/lib/data";
import PartnerLogosMarquee from "@/components/partner-logos-marquee";
import {
  Briefcase, FileText, Users, Target, ArrowRight,
  Building2, UserCheck, TrendingUp, Sparkles,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useMemo } from "react";
import { localizeGraduates } from "@/lib/localize-content";
import type { Language } from "@/lib/translations";

const HELP_CARDS = [
  {
    icon: FileText,
    title: { uz: "Rezyume tayyorlash", ru: "Подготовка резюме", en: "Resume Preparation" },
    desc: {
      uz: "Professional rezyume va portfolio yaratishda yordam beramiz.",
      ru: "Помогаем создать профессиональное резюме и портфолио.",
      en: "We help you build a professional resume and portfolio.",
    },
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: { uz: "Suhbatga tayyorgarlik", ru: "Подготовка к интервью", en: "Interview Preparation" },
    desc: {
      uz: "HR mutaxassislari bilan amaliy suhbat mashqlari o'tkazamiz.",
      ru: "Проводим практические интервью с HR-специалистами.",
      en: "We run practical interview training with HR specialists.",
    },
    color: "from-brand to-brand-accent",
  },
  {
    icon: Target,
    title: { uz: "Vakansiya tanlash", ru: "Подбор вакансий", en: "Vacancy Matching" },
    desc: {
      uz: "Sizning ko'nikmalaringizga mos vakansiyalarni topamiz.",
      ru: "Подбираем вакансии под ваши навыки.",
      en: "We find vacancies that match your skills.",
    },
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Briefcase,
    title: { uz: "To'g'ridan-to'g'ri tavsiya", ru: "Прямая рекомендация", en: "Direct Referral" },
    desc: {
      uz: "50+ hamkor kompaniyamizga to'g'ridan-to'g'ri tavsiya qilamiz.",
      ru: "Рекомендуем вас напрямую в 50+ партнёрских компаний.",
      en: "We directly refer you to 50+ partner companies.",
    },
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Building2,
    title: { uz: "Stajirovka imkoniyati", ru: "Стажировки", en: "Internship Opportunities" },
    desc: {
      uz: "Yetakchi kompaniyalarda amaliyot o'tash imkoniyatini beramiz.",
      ru: "Открываем возможности стажировок в ведущих компаниях.",
      en: "We provide internship opportunities in leading companies.",
    },
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: UserCheck,
    title: { uz: "Doimiy qo'llab-quvvatlash", ru: "Постоянная поддержка", en: "Ongoing Support" },
    desc: {
      uz: "Ish topguningizcha va undan keyin ham qo'llab-quvvatlaymiz.",
      ru: "Поддерживаем вас до трудоустройства и после.",
      en: "We support you until you get hired and beyond.",
    },
    color: "from-rose-500 to-brand-accent",
  },
];

const SALARY_TABLE = [
  {
    position: { uz: "Bosh buxgalter (ACCA)", ru: "Главный бухгалтер (ACCA)", en: "Chief Accountant (ACCA)" },
    min: "8 000 000",
    max: "20 000 000",
    growth: "+250%",
  },
  {
    position: { uz: "Audit Menejer (Big Four)", ru: "Менеджер по аудиту (Big Four)", en: "Audit Manager (Big Four)" },
    min: "12 000 000",
    max: "30 000 000",
    growth: "+400%",
  },
  {
    position: { uz: "Moliyaviy Menejer (DipIFR)", ru: "Финансовый менеджер (DipIFR)", en: "Finance Manager (DipIFR)" },
    min: "10 000 000",
    max: "25 000 000",
    growth: "+350%",
  },
  {
    position: { uz: "Investment Analyst (FM)", ru: "Инвестиционный аналитик (FM)", en: "Investment Analyst (FM)" },
    min: "8 000 000",
    max: "18 000 000",
    growth: "+300%",
  },
  {
    position: { uz: "1C Administrator", ru: "Администратор 1C", en: "1C Administrator" },
    min: "5 000 000",
    max: "12 000 000",
    growth: "+180%",
  },
];

const TEXT: Record<
  Language,
  {
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string;
    breadcrumb: string;
    badge: string;
    title: string;
    subtitle: string;
    stats: Array<{ value: string; label: string }>;
    helpTitle: string;
    helpDesc: string;
    salaryTitle: string;
    salaryDesc: string;
    salaryColPosition: string;
    salaryColRange: string;
    salaryColGrowth: string;
    successTitle: string;
    successDesc: string;
    partnersTitle: string;
    partnersDesc: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  }
> = {
  uz: {
    seoTitle: "Ishga Joylashish Markazi — Big Four, Moliya Kompaniyalari | FBA Academy",
    seoDescription: "FBA Academy bitiruvchilari Deloitte, PwC, KPMG, EY va yetakchi moliya kompaniyalarida ishlashadi. 92% ishga joylashish ko'rsatkichi. Bepul karyera yordam.",
    seoKeywords: "ACCA ishga joylashish, Big Four O'zbekiston, DipIFR ish joyi, moliya karyera",
    breadcrumb: "Ishga joylashish",
    badge: "Karyera Markazi",
    title: "Karyerangizni yangi bosqichga olib chiqing",
    subtitle: "Kursni tugatgach, biz sizga ish topishda faol yordam beramiz. 50+ hamkor kompaniyalar bilan hamkorlik qilamiz.",
    stats: [
      { value: "92%", label: "Ishga joylashish" },
      { value: "50+", label: "Hamkor kompaniyalar" },
      { value: "3 oy", label: "O'rtacha ish topish" },
      { value: "3x", label: "Maosh o'sishi" },
    ],
    helpTitle: "Qanday yordam beramiz?",
    helpDesc: "O'qish jarayonidan ish topishgacha — har qadamda yoningizda.",
    salaryTitle: "Lavozim va maosh darajalari",
    salaryDesc: "FBA Academy bitiruvchilarining O'zbekiston bozorida o'rtacha maosh ko'rsatkichlari",
    salaryColPosition: "Lavozim",
    salaryColRange: "Maosh oralig'i (UZS)",
    salaryColGrowth: "Maosh o'sishi",
    successTitle: "Muvaffaqiyatli bitiruvchilar",
    successDesc: "Ular o'qishdi, imtihon topshirdi va yangi karyera boshladi.",
    partnersTitle: "Bitiruvchilarimiz shu tashkilotlarda ishlaydi",
    partnersDesc: "50+ hamkor kompaniya bizning bitiruvchilarimizni qabul qiladi",
    ctaTitle: "Yangi karyerangizni boshlang",
    ctaDesc: "Bepul konsultatsiya oling va birinchi qadamni qo'ying",
    ctaBtn: "Bepul konsultatsiya",
  },
  ru: {
    seoTitle: "Центр трудоустройства — Big Four и финкомпании | FBA Academy",
    seoDescription: "Выпускники FBA Academy работают в Deloitte, PwC, KPMG, EY и ведущих финансовых компаниях. 92% трудоустройства и карьерная поддержка.",
    seoKeywords: "трудоустройство ACCA, Big Four Узбекистан, работа DipIFR, карьера в финансах",
    breadcrumb: "Трудоустройство",
    badge: "Карьерный центр",
    title: "Выведите карьеру на новый уровень",
    subtitle: "После окончания курса мы активно помогаем с трудоустройством. У нас 50+ компаний-партнёров.",
    stats: [
      { value: "92%", label: "Трудоустройство" },
      { value: "50+", label: "Компаний-партнёров" },
      { value: "3 мес", label: "Средний срок найма" },
      { value: "3x", label: "Рост зарплаты" },
    ],
    helpTitle: "Как мы помогаем?",
    helpDesc: "От обучения до первого оффера — мы рядом на каждом шаге.",
    salaryTitle: "Должности и уровни зарплат",
    salaryDesc: "Средние зарплаты выпускников FBA Academy на рынке Узбекистана",
    salaryColPosition: "Должность",
    salaryColRange: "Диапазон (UZS)",
    salaryColGrowth: "Рост зарплаты",
    successTitle: "Успешные выпускники",
    successDesc: "Они обучились, сдали экзамены и начали новую карьеру.",
    partnersTitle: "Наши выпускники работают в этих организациях",
    partnersDesc: "50+ партнёрских компаний нанимают наших выпускников",
    ctaTitle: "Начните новую карьеру",
    ctaDesc: "Получите бесплатную консультацию и сделайте первый шаг",
    ctaBtn: "Бесплатная консультация",
  },
  en: {
    seoTitle: "Career Center — Big Four and Finance Companies | FBA Academy",
    seoDescription: "FBA Academy graduates work at Deloitte, PwC, KPMG, EY and leading finance companies. 92% placement rate with career support.",
    seoKeywords: "ACCA job placement, Big Four Uzbekistan, DipIFR jobs, finance career",
    breadcrumb: "Career",
    badge: "Career Center",
    title: "Take your career to the next level",
    subtitle: "After graduation, we actively support your job search through 50+ partner companies.",
    stats: [
      { value: "92%", label: "Placement rate" },
      { value: "50+", label: "Partner companies" },
      { value: "3 months", label: "Avg. hiring time" },
      { value: "3x", label: "Salary growth" },
    ],
    helpTitle: "How do we help?",
    helpDesc: "From learning to hiring, we support you at every step.",
    salaryTitle: "Roles and salary levels",
    salaryDesc: "Average salary ranges of FBA Academy graduates in Uzbekistan",
    salaryColPosition: "Role",
    salaryColRange: "Salary range (UZS)",
    salaryColGrowth: "Growth",
    successTitle: "Successful graduates",
    successDesc: "They studied, passed exams and started a new career.",
    partnersTitle: "Our graduates work at these organizations",
    partnersDesc: "50+ partner companies hire our graduates",
    ctaTitle: "Start your new career",
    ctaDesc: "Get a free consultation and take your first step",
    ctaBtn: "Free consultation",
  },
};

export default function CareerCenter() {
  const { lang } = useLanguage();
  const tx = TEXT[lang];
  const gl = (item: { uz: string; ru: string; en: string }) => (lang === "ru" ? item.ru : lang === "en" ? item.en : item.uz);
  const localizedGraduates = useMemo(() => localizeGraduates(graduateResults, lang), [lang]);

  useSEO({
    title: tx.seoTitle,
    description: tx.seoDescription,
    keywords: tx.seoKeywords,
    breadcrumb: [{ name: tx.breadcrumb, url: "https://fbaacademy.uz/career" }],
    speakable: ["[data-speakable='career-title']", "[data-speakable='career-desc']"],
    jsonLd: {
      "@type": "EmploymentAgency",
      name: lang === "ru" ? "FBA Academy Карьерный центр" : lang === "en" ? "FBA Academy Career Center" : "FBA Academy Karyera Markazi",
      description: lang === "ru"
        ? "FBA Academy помогает выпускникам трудоустроиться в Deloitte, PwC, KPMG, EY и ведущих финансовых компаниях."
        : lang === "en"
          ? "FBA Academy helps graduates get hired at Deloitte, PwC, KPMG, EY and leading finance companies."
          : "FBA Academy bitiruvchilariga Deloitte, PwC, KPMG, EY va yetakchi moliya kompaniyalarida ishga joylashishda yordam beradi.",
      url: "https://fbaacademy.uz/career",
    },
  });

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#11133c] via-[#1a2a4a] to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14"
        data-testid="section-career-hero"
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
            data-testid="text-career-title"
            data-speakable="career-title"
          >
            {tx.title}
          </h1>
          <p className="mb-10 max-w-xl text-lg text-slate-300 leading-relaxed" data-speakable="career-desc">
            {tx.subtitle}
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {tx.stats.map((s, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm" data-testid={`stat-career-${i}`}>
                <div className="text-3xl font-extrabold text-white">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE HELP ───────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-14 sm:py-20" data-testid="section-career-help">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-career-help-title">
            {tx.helpTitle}
          </h2>
          <p className="mb-10 max-w-xl text-zinc-400">
            {tx.helpDesc}
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HELP_CARDS.map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900 p-7 transition-all hover:border-brand/30 hover:scale-[1.02]" data-testid={`card-career-help-${i}`}>
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-extrabold text-white">{gl(item.title)}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{gl(item.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SALARY TABLE ──────────────────────────────────────── */}
      <section className="bg-[#111] py-14 sm:py-20" data-testid="section-salary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-salary-title">
            {tx.salaryTitle}
          </h2>
          <p className="mb-8 text-zinc-400">{tx.salaryDesc}</p>
          <div className="overflow-x-auto overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
            <div className="grid min-w-[500px] grid-cols-4 gap-4 border-b border-white/10 bg-zinc-800/50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-400">
              <div className="col-span-2">{tx.salaryColPosition}</div>
              <div>{tx.salaryColRange}</div>
              <div>{tx.salaryColGrowth}</div>
            </div>
            {SALARY_TABLE.map((row, i) => (
              <div
                key={i}
                className="grid min-w-[500px] grid-cols-4 gap-4 border-b border-white/5 px-6 py-4 transition-colors last:border-0 hover:bg-zinc-800/30"
                data-testid={`salary-row-${i}`}
              >
                <div className="col-span-2 font-semibold text-white">{gl(row.position)}</div>
                <div className="text-sm text-zinc-400">
                  {row.min} — {row.max}
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-900/30 px-2.5 py-1 text-xs font-bold text-emerald-400">
                    <TrendingUp className="h-3 w-3" /> {row.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ───────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-14 sm:py-20" data-testid="section-success">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-success-title">
            {tx.successTitle}
          </h2>
          <p className="mb-10 text-zinc-400 max-w-xl">
            {tx.successDesc}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {localizedGraduates.map((g) => (
              <div key={g.id} className="group overflow-hidden rounded-2xl bg-zinc-900 ix-card" data-testid={`card-graduate-${g.id}`}>
                <div className="relative h-48">
                  <img src={g.avatar} alt={g.name} width={400} height={192} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <Badge className="rounded-full bg-emerald-500/90 text-xs font-bold text-white">
                      {g.courseName}
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-extrabold text-white">{g.name}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-zinc-400">
                    <span className="line-through">{g.beforeRole}</span>
                    <ArrowRight className="h-3 w-3 shrink-0" />
                    <span className="font-bold text-brand-accent">{g.afterRole}</span>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-emerald-400">{g.salaryIncrease}</p>
                  <p className="mt-3 text-xs text-zinc-400 leading-relaxed">{g.story}</p>
                  <div className="mt-3 flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 text-zinc-400" />
                    <span className="text-xs font-semibold">{g.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerLogosMarquee
        className="bg-[#111] py-14 sm:py-20"
        title={tx.partnersTitle}
        subtitle={tx.partnersDesc}
        fadeFrom="from-[#111]"
        testId="section-partners"
      />

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-brand-dark to-blue-700 py-14 sm:py-16" data-testid="section-career-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{tx.ctaTitle}</h2>
              <p className="mt-2 text-brand-accent-light">{tx.ctaDesc}</p>
            </div>
            <Button asChild size="lg" className="gap-2 rounded-full bg-amber-400 px-8 font-bold text-black hover:bg-amber-300" data-testid="button-career-cta">
              <Link href="/contacts">
                {tx.ctaBtn} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
