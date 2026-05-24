import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import { teachers } from "@/lib/data";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  BookOpen,
  BarChart3,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { Link } from "wouter";
import TeacherAvatar from "@/components/teacher-avatar";
import { instructorPortraitClass } from "@/components/instructor-photo";
import PartnerLogosMarquee from "@/components/partner-logos-marquee";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, CONTACT_EMAIL, CONTACT_EMAIL_HREF, CONTACT_ADDRESS } from "@/lib/constants";
import { useMemo } from "react";
import { ABOUT_DIRECTIONS, ABOUT_STEPS, ABOUT_FAQ, aboutFaqForLang } from "@/lib/i18n/about-content";
import { pick } from "@/lib/i18n/pick";
import { localizeTeacher } from "@/lib/localize-content";

const DIRECTION_ICONS = [GraduationCap, BarChart3, Briefcase, TrendingUp] as const;

const STATS = [
  { value: "1 000+", label: "O'qitilgan talabalar" },
  { value: "92%", label: "Ishga joylashish darajasi" },
  { value: "50+", label: "Hamkor kompaniyalar" },
  { value: "2020", label: "Tashkil etilgan yil" },
];

export default function About() {
  const { lang } = useLanguage();
  const tt = (en: string, uz: string, ru: string) => (lang === "uz" ? uz : lang === "ru" ? ru : en);
  const localizedTeachers = useMemo(() => teachers.map((t) => localizeTeacher(t, lang)), [lang]);

  useSEO({
    title: tt(
      "About Us — FBA Academy | ACCA, DipIFR, Finance Education in Tashkent",
      "Biz haqimizda — FBA Academy | ACCA, DipIFR, Moliya ta'limi Toshkent",
      "О нас — FBA Academy | ACCA, DipIFR, финансовое образование в Ташкенте"
    ),
    description: tt(
      "FBA Academy is a leading finance and accounting training center in Tashkent. We have trained 1000+ students in ACCA, DipIFR, МСФО, Financial Analyst and other international tracks.",
      "FBA Academy — Toshkentdagi yetakchi moliya va buxgalteriya ta'lim markazi. 1000+ talabaga ACCA, DipIFR, МСФО, Financial Analyst va boshqa xalqaro sertifikatlar bo'yicha ta'lim beramiz.",
      "FBA Academy — ведущий центр финансового обучения в Ташкенте. Обучили 1000+ студентов по ACCA, DipIFR, МСФО, Financial Analyst и другим международным программам."
    ),
    keywords: tt(
      "about FBA Academy, ACCA training Tashkent, DipIFR courses Yunusabad, finance education Uzbekistan",
      "FBA Academy haqida, ACCA ta'lim Toshkent, DipIFR kurslari Yunusabad, moliya ta'limi O'zbekiston",
      "о FBA Academy, обучение ACCA Ташкент, курсы DipIFR Юнусабад, финансовое обучение Узбекистан"
    ),
    breadcrumb: [{ name: tt("About us", "Biz haqimizda", "О нас"), url: "https://fbaacademy.uz/about" }],
    faqItems: aboutFaqForLang(lang),
    speakable: ["[data-speakable='about-title']", "[data-speakable='about-desc']"],
    jsonLd: {
      "@type": "AboutPage",
      name: "FBA Academy haqida",
      description: "FBA Academy — Toshkentdagi yetakchi moliya ta'lim markazi. Shayxontohur tumani, U-Tower binosi.",
      url: "https://fbaacademy.uz/about",
      mainEntity: {
        "@type": "EducationalOrganization",
        name: "FBA Academy",
        foundingDate: "2020",
        alumni: { "@type": "QuantitativeValue", value: 1000 },
        address: { "@type": "PostalAddress", streetAddress: "Beshyog'och ko'ch., 1/1, U-Tower, 1-qavat", addressLocality: "Toshkent, Shayxontohur", addressCountry: "UZ" },
        telephone: CONTACT_PHONE_TEL.replace("tel:", ""),
        email: CONTACT_EMAIL,
      },
    },
  });

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#11133c] via-[#1a2a4a] to-slate-900 pb-10 pt-5 sm:pb-12 lg:pt-24" data-testid="section-about-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: tt("About us", "Biz haqimizda", "О нас") }]} light />
          <div className="mt-5 grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">FBA Academy</div>
              <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl" data-testid="text-about-title" data-speakable="about-title">
                {tt("We train finance specialists in Uzbekistan", "O'zbekistonda moliya mutaxassislari tayyorlaymiz", "Готовим финансовых специалистов в Узбекистане")}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-300" data-speakable="about-desc">
                {tt("Since 2020, we have been teaching ACCA, DipIFR, МСФО, Financial Analyst and other international certification tracks.", "2020-yildan buyon ACCA, DipIFR, МСФО, Financial Analyst va boshqa xalqaro sertifikatlar bo'yicha ta'lim beramiz.", "С 2020 года обучаем по ACCA, DipIFR, МСФО, Financial Analyst и другим международным сертификациям.")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="gap-2 rounded-full bg-amber-400 px-7 font-bold text-black hover:bg-amber-300" data-testid="button-hero-courses">
                  <Link href="/courses">
                    {tt("All courses", "Barcha kurslar", "Все курсы")} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 px-7 text-white hover:bg-white/10" data-testid="button-hero-contact">
                  <Link href="/contacts">{tt("Contact us", "Bog'laning", "Связаться")}</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm" data-testid={`stat-about-${i}`}>
                  <div className="text-4xl font-extrabold text-white">{s.value}</div>
                  <div className="mt-2 text-sm text-slate-400">
                    {i === 0 && tt("Students trained", "O'qitilgan talabalar", "Обученных студентов")}
                    {i === 1 && tt("Employment rate", "Ishga joylashish darajasi", "Уровень трудоустройства")}
                    {i === 2 && tt("Partner companies", "Hamkor kompaniyalar", "Компаний-партнёров")}
                    {i === 3 && tt("Founded in", "Tashkil etilgan yil", "Год основания")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] pb-16 pt-10 sm:pb-20 sm:pt-12" data-testid="section-mission">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">{tt("Our mission", "Missiyamiz", "Наша миссия")}</div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-mission-title">
                {tt("Every student’s success is our result", "Har bir talabaning muvaffaqiyati bizning natijamiz", "Успех каждого студента — наш результат")}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                {tt("FBA Academy is not just an education center, but a partner in building your professional career.", "FBA Academy — shunchaki ta'lim markazi emas, balki kasbiy karyerangizni qurishga yordam beradigan sherik.", "FBA Academy — это не просто учебный центр, а партнёр в построении вашей профессиональной карьеры.")}
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  tt("International certified expert instructors", "Xalqaro sertifikatlangan ekspert o'qituvchilar", "Международные сертифицированные эксперты-преподаватели"),
                  tt("Mentors with practical experience at Big Four firms", "Big Four firmalarida amaliy tajribaga ega mentorlar", "Менторы с практическим опытом в Big Four"),
                  tt("Teaching with real projects and mock exams", "Real loyihalar va mock imtihonlar bilan o'qitish", "Обучение на реальных проектах и пробных экзаменах"),
                  tt("Support before and after finding a job", "Ish topishgacha va keyin ham qo'llab-quvvatlash", "Поддержка до и после трудоустройства"),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {localizedTeachers.slice(0, 6).map((t) => (
                <div key={t.id} className="group overflow-hidden rounded-2xl bg-zinc-900" data-testid={`card-teacher-about-${t.id}`}>
                  <div className="relative aspect-[4/5] w-full max-h-48 overflow-hidden bg-zinc-950">
                    <TeacherAvatar
                      name={t.name}
                      src={t.avatar}
                      className={instructorPortraitClass()}
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-extrabold text-white">{t.name}</p>
                    <p className="mt-0.5 text-xs font-semibold text-brand-accent">{t.role}</p>
                    <p className="mt-1 text-xs text-zinc-500">{t.experience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE TEACH ─────────────────────────────────────── */}
      <section className="bg-[#111] py-16 sm:py-20" data-testid="section-directions">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">{tt("Courses", "Kurslar", "Курсы")}</div>
          <h2 className="mb-10 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-directions-title">
            {tt("What do we teach?", "Nimaga o'qitamiz?", "Чему мы обучаем?")}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_DIRECTIONS.map((item, i) => {
              const Icon = DIRECTION_ICONS[i];
              return (
              <div key={i} className="ix-card-border rounded-2xl border border-white/10 bg-zinc-900 p-7 hover:border-brand/30" data-testid={`card-direction-${i}`}>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-indigo-600 shadow-lg">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-extrabold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{pick(lang, item.desc)}</p>
              </div>
            );})}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-16 sm:py-20" data-testid="section-how">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">{tt("Process", "Jarayon", "Процесс")}</div>
          <h2 className="mb-10 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-how-title">
            {tt("How does it work?", "Qanday ishlaydi?", "Как это работает?")}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_STEPS.map((step, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900 p-7" data-testid={`step-${i}`}>
                <div className="mb-4 text-3xl sm:text-5xl font-extrabold text-brand/30 select-none leading-none">{step.num}</div>
                <h3 className="mb-2 text-lg font-extrabold text-white">{pick(lang, step.title)}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{pick(lang, step.desc)}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild size="lg" className="gap-2 rounded-full bg-brand px-8 font-bold text-white hover:bg-brand" data-testid="button-how-cta">
              <Link href="/contacts">
                {tt("Free consultation", "Bepul konsultatsiya", "Бесплатная консультация")} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      <PartnerLogosMarquee
        className="bg-[#0d0d0d] py-16 sm:py-20"
        title={tt("Our graduates work at these organizations", "Bitiruvchilarimiz shu tashkilotlarda ishlaydi", "Наши выпускники работают в этих организациях")}
        compactHeading
        fadeFrom="from-[#0d0d0d]"
        testId="section-partners"
      />

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="bg-[#111] py-16 sm:py-20" data-testid="section-about-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr]">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">FAQ</div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-faq-title">
                {tt("Frequently asked questions", "Ko'p beriladigan savollar", "Часто задаваемые вопросы")}
              </h2>
              <p className="mt-4 text-zinc-400">
                {tt("If you have additional questions, contact us.", "Qo'shimcha savollar bo'lsa biz bilan bog'laning.", "Если есть дополнительные вопросы, свяжитесь с нами.")}
              </p>
              <Button asChild variant="outline" className="mt-6 gap-2 rounded-full border-white/20 font-semibold text-white hover:bg-white/10" data-testid="button-faq-contact">
                <Link href="/contacts">
                  {tt("Contact us", "Bog'laning", "Связаться")} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Accordion type="multiple" className="space-y-2">
              {ABOUT_FAQ.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-white/10 bg-zinc-900 px-6"
                  data-testid={`faq-item-${i}`}
                >
                  <AccordionTrigger className="text-left font-bold text-white hover:no-underline hover:text-brand-accent-light">
                    {pick(lang, item.q)}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-zinc-400 leading-relaxed">
                    {pick(lang, item.a)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-16 sm:py-20" data-testid="section-about-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark via-[#1a2a4a] to-slate-900 p-10 lg:grid-cols-2 lg:items-center lg:p-14">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">{tt("Get started", "Boshlash", "Начать")}</div>
              <h2 className="text-4xl font-extrabold uppercase text-white sm:text-5xl" data-testid="text-cta-title">
                {tt("Start today", "Bugundan boshlang", "Начните сегодня")}
              </h2>
              <p className="mt-3 text-slate-300 leading-relaxed">
                {tt("Get a free consultation and take your career to the next level.", "Bepul konsultatsiya oling va karyerangizni yangi bosqichga olib chiqing.", "Получите бесплатную консультацию и выведите карьеру на новый уровень.")}
              </p>
              <Button asChild size="lg" className="mt-7 gap-2 rounded-full bg-amber-400 px-8 font-bold text-black hover:bg-amber-300" data-testid="button-cta">
                <Link href="/contacts">
                  {tt("Free consultation", "Bepul konsultatsiya", "Бесплатная консультация")} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-5">
              {[
                { icon: MapPin, label: tt("Address", "Manzil", "Адрес"), value: tt(CONTACT_ADDRESS.en, CONTACT_ADDRESS.uz, CONTACT_ADDRESS.ru), href: undefined },
                { icon: Phone, label: tt("Phone", "Telefon", "Телефон"), value: CONTACT_PHONE_DISPLAY, href: CONTACT_PHONE_TEL },
                { icon: Mail, label: tt("Email", "E-pochta", "Эл. почта"), value: CONTACT_EMAIL, href: CONTACT_EMAIL_HREF },
              ].map(({ icon: Icon, label, value, href }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-accent-light">{label}</p>
                    {href ? (
                      <a href={href} className="block font-bold text-white transition-colors hover:text-amber-300" data-testid={`link-contact-${i}`}>
                        {value}
                      </a>
                    ) : (
                      <p className="font-bold text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
