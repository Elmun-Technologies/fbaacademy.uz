import { useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import { partnerCompanies } from "@/lib/data";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  BookOpen,
  BarChart3,
  MapPin,
  Phone,
  Mail,
  Users,
  Award,
  Clock,
  Star,
  CheckCircle2,
  Sparkles,
  Target,
  Eye,
  Heart,
} from "lucide-react";

const STATS = [
  { value: "1 000+", label: "Talabalar" },
  { value: "92%", label: "Ishga joylashish" },
  { value: "50+", label: "Hamkor kompaniyalar" },
  { value: "4.9", label: "O'rtacha baho" },
];

const VALUES = [
  {
    icon: Target,
    title: "Maqsadimiz",
    text: "Har bir insonga xalqaro darajadagi moliya va buxgalteriya ta'limini qulay va samarali usulda yetkazib berish.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Eye,
    title: "Viziyamiz",
    text: "O'zbekistonda ACCA, DipIFR va boshqa xalqaro sertifikatlar bo'yicha eng ishonchli ta'lim markazi bo'lish.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Qadriyatlarimiz",
    text: "Sifat, amaliyot, natija va talabalar muvaffaqiyati — biz uchun eng muhim qadriyatlar. Har bir talaba bizning g'ururumiz.",
    color: "from-emerald-500 to-teal-500",
  },
];

const APPROACH = [
  {
    icon: GraduationCap,
    title: "Ekspert o'qituvchilar",
    desc: "Member va Affiliate darajasidagi o'qituvchilar bilan o'qish osonroq. Big Four tajribasi va ACCA/DipIFR sertifikatlari.",
    color: "from-blue-500 to-cyan-500",
    href: "/teachers",
  },
  {
    icon: Briefcase,
    title: "Ish imkoniyatlari",
    desc: "Biz bilan o'qib ACCA Jobs orqali ish topish imkoniyatlarini qo'lga kiriting.",
    color: "from-emerald-500 to-teal-500",
    href: "/career-center",
  },
  {
    icon: BookOpen,
    title: "Moslashuvchan o'quv",
    desc: "Tematik va foydalanishga qulay o'quv dasturlari. Onlayn va offline formatda.",
    color: "from-violet-500 to-purple-600",
    href: "/catalog",
  },
  {
    icon: BarChart3,
    title: "Xalqaro standart",
    desc: "Talabalarimiz singari siz ham top yutuqlarga erishish imkoniyatiga egasiz.",
    color: "from-amber-500 to-orange-500",
    href: "/catalog",
  },
];

const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Kursni tanlang",
    desc: "Ekspert o'qituvchilarimiz tayyorlagan kurslar bilan tanishing.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    num: "02",
    title: "Ro'yxatdan o'ting",
    desc: "Tez va xavfsiz tarzda ro'yxatdan o'ting va to'lovni amalga oshiring.",
    color: "from-purple-500 to-pink-500",
  },
  {
    num: "03",
    title: "O'qishni boshlang",
    desc: "Hammasi shu! Darhol o'qishni boshlang.",
    color: "from-emerald-500 to-teal-500",
  },
];

const TIMELINE = [
  { year: "2020", title: "Asos solingan", desc: "FBA Academy 3 nafar o'qituvchi va 50 ta talaba bilan faoliyatni boshladi. ACCA kurslari bilan boshlandi.", active: false },
  { year: "2021", title: "Kengayish", desc: "DipIFR va Financial Modeling kurslari qo'shildi. Onlayn ta'lim platformasi ishga tushirildi.", active: false },
  { year: "2022", title: "500+ bitiruvchi", desc: "Birinchi yarim ming bitiruvchi. 20+ hamkor kompaniyalar bilan shartnomalar imzolandi.", active: false },
  { year: "2023", title: "Korporativ treninglar", desc: "Yirik kompaniyalar uchun maxsus korporativ ta'lim dasturlari ishga tushirildi. Huquqshunoslik va 1C: Buxgalteriya kurslari qo'shildi.", active: false },
  { year: "2024–2026", title: "1000+ talaba", desc: "Yunusabad markazida yangi o'quv xonalar ochildi. Applied Knowledge, Skills va Strategic Professional bosqichlari alohida kurs sifatida taqdim etildi.", active: true },
];

const FAQ_ITEMS = [
  { q: "Nima uchun odamlar ACCAni tanlashadi?", a: "ACCA bilan global buxgalteriya va audit standartlarini o'rganishingiz mumkin. ACCA a'zosi sifatida malaka olasiz va xorijda ish izlash oson bo'ladi. Ushbu buxgalteriya standartlarini qabul qilgan istalgan mamlakatda ishlashingiz mumkin." },
  { q: "ACCA'ni o'qish uchun ingliz tilini bilish kerakmi?", a: "Imtihonlar ingliz tilida bo'ladi, shuning uchun B2 darajasida ingliz tili bilimi tavsiya etiladi. Biroq bizning o'qituvchilarimiz o'zbek va rus tillarida tushuntiradi, shuning uchun dastlabki bosqichda ingliz tilini parallel ravishda o'rganish mumkin." },
  { q: "Kimlar chegirma oladi?", a: "Talabalar, ko'p farzandli oilalar, nogironligi bo'lgan shaxslar va referral dasturi orqali do'stini tavsiya qilganlar chegirma oladi. Batafsil ma'lumot uchun administrator bilan bog'laning." },
  { q: "Katta jamoalar uchun maxsus narx bormi?", a: "Ha, 5 va undan ortiq ishchi yuboradigan korporativ mijozlar uchun maxsus narxlar va individual ta'lim dasturlari mavjud. Korporativ treninglar bo'yicha bog'laning." },
  { q: "ACCA o'qisam qayerda va qanday lavozimda ishlay olaman?", a: "ACCA bilan Big Four (Deloitte, PwC, KPMG, EY), banklar, auditorlik firmalari, yirik korporatsiyalar va davlat tashkilotlarida moliyaviy menejer, bosh buxgalter, audit mutaxassisi va moliyaviy direktor lavozimlarida ishlashingiz mumkin." },
];

export default function About() {
  useSEO({
    title: "Biz haqimizda — FBA Academy | ACCA, DipIFR, Moliya ta'limi Toshkent",
    description: "FBA Academy — Toshkent, Yunusabaddagi yetakchi moliya va buxgalteriya ta'lim markazi. 1000+ talabaga ACCA, DipIFR, Financial Modeling va boshqa xalqaro sertifikatlar bo'yicha ta'lim beramiz.",
    keywords: "FBA Academy haqida, ACCA ta'lim Toshkent, DipIFR kurslari Yunusabad, moliya ta'limi O'zbekiston",
    breadcrumb: [{ name: "Biz haqimizda", url: "https://fbaacademy.uz/about" }],
    faqItems: FAQ_ITEMS.map((f) => ({ question: f.q, answer: f.a })),
    jsonLd: {
      "@type": "AboutPage",
      name: "FBA Academy haqida",
      description: "FBA Academy — Toshkent, Yunusabaddagi yetakchi moliya ta'lim markazi.",
      url: "https://fbaacademy.uz/about",
      mainEntity: {
        "@type": "EducationalOrganization",
        name: "FBA Academy",
        foundingDate: "2020",
        alumni: { "@type": "QuantitativeValue", value: 1000 },
        address: { "@type": "PostalAddress", addressLocality: "Toshkent, Yunusabad", addressCountry: "UZ" },
        telephone: "+998781138090",
        email: "fbaacademyuz1@gmail.com",
      },
    },
  });

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14"
        data-testid="section-about-hero"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <Breadcrumb items={[{ label: "Biz haqimizda" }]} light />
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge className="mb-5 inline-flex rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">
                <Sparkles className="mr-1.5 h-3.5 w-3.5" /> FBA Academy haqida
              </Badge>
              <h1
                className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
                data-testid="text-about-title"
              >
                Xalqaro darajadagi{" "}
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  soha mutaxassislari
                </span>{" "}
                tayyorlaymiz
              </h1>
              <p className="mt-5 max-w-lg text-lg text-slate-300 leading-relaxed">
                Xalqaro darajadagi soha mutaxassislarini o'qitish va kasbiy rivojlantirish — bizning asosiy faoliyat yo'nalishimiz.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/catalog">
                  <Button
                    size="lg"
                    className="gap-2 rounded-full bg-white px-7 font-semibold text-slate-900 shadow-lg hover:bg-slate-100"
                    data-testid="button-hero-courses"
                  >
                    Kurslarni ko'rish <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contacts">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 rounded-full border-white/30 px-7 text-white hover:bg-white/10"
                    data-testid="button-hero-contact"
                  >
                    Bog'laning
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  data-testid={`stat-about-${i}`}
                >
                  <div className="text-3xl font-extrabold text-white">{s.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VALUES ───────────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-values">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-values-title">
            Maqsad, viziya va qadriyatlar
          </h2>
          <p className="mb-10 max-w-xl text-muted-foreground">
            Biz xalqaro ta'lim standarti asosida qurilgan markazimiz.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {VALUES.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border bg-white p-6 shadow-sm dark:bg-card"
                data-testid={`card-value-${i}`}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-md`}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ──────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 sm:py-20 dark:bg-slate-900/50" data-testid="section-approach">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-approach-title">
            Bizning yondashuv
          </h2>
          <p className="mb-10 max-w-xl text-muted-foreground">
            FBA Academy — shunchaki ta'lim markazi emas, balki kasbiy karyerangizni qurishga yordam beradigan sherik.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((card, i) => (
              <Link key={i} href={card.href} data-testid={`approach-card-${i}`}>
                <article className="group flex h-full flex-col rounded-xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-card">
                  <div className={`h-1.5 w-full rounded-t-xl bg-gradient-to-r ${card.color}`} />
                  <div className="flex flex-1 flex-col p-6">
                    <div
                      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} shadow-md`}
                    >
                      <card.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="mb-2 font-bold group-hover:text-purple-600 transition-colors dark:group-hover:text-purple-400">
                      {card.title}
                    </h3>
                    <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-400">
                      Batafsil <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-how">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Steps */}
            <div>
              <Badge variant="outline" className="mb-4 rounded-full border-purple-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-600">
                Ro'yxatdan o'tish
              </Badge>
              <h2 className="mb-2 text-2xl font-extrabold sm:text-3xl" data-testid="text-how-title">
                Qanday ishlaydi?
              </h2>
              <p className="mb-8 text-muted-foreground">Bugundan o'quv yo'lingizni boshlang!</p>
              <div className="space-y-6">
                {HOW_IT_WORKS.map((step, i) => (
                  <div key={i} className="flex gap-5" data-testid={`step-${i}`}>
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-base font-extrabold text-white shadow-md`}
                    >
                      {step.num}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-bold">{step.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contacts">
                <Button
                  size="lg"
                  className="mt-8 gap-2 rounded-full bg-purple-600 px-8 font-bold text-white hover:bg-purple-700"
                  data-testid="button-how-cta"
                >
                  Ro'yxatdan o'tish <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="rounded-xl border bg-slate-50 p-8 dark:bg-slate-900/50">
              <h3 className="mb-6 text-lg font-bold">Ekspertlar bilan o'rgan</h3>
              <ul className="space-y-4">
                {[
                  { icon: Users, text: "Member va Affiliate darajasidagi o'qituvchilar" },
                  { icon: Award, text: "ACCA Jobs orqali ish imkoniyatlari" },
                  { icon: BookOpen, text: "Tematik va foydalanishga qulay o'quv dasturi" },
                  { icon: Star, text: "Talabalar uchun bepul mock imtihon" },
                  { icon: Clock, text: "24/7 talabalar qo'llab-quvvatlash xizmati" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-purple-500" />
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl bg-white p-5 dark:bg-card">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Hamkor kompaniyalar
                </p>
                <div className="flex flex-wrap gap-2">
                  {partnerCompanies.slice(0, 6).map((c) => (
                    <span
                      key={c}
                      className="rounded-full border bg-slate-50 px-3 py-1 text-xs font-semibold dark:bg-slate-800"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 sm:py-20 dark:bg-slate-900/50" data-testid="section-timeline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-timeline-title">
            Bizning yo'limiz
          </h2>
          <p className="mb-10 text-muted-foreground">FBA Academy faoliyatidagi muhim bosqichlar</p>

          <div className="mx-auto max-w-3xl space-y-0">
            {TIMELINE.map((item, i) => (
              <div key={i} className="flex gap-5" data-testid={`timeline-${i}`}>
                {/* Line + dot */}
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold text-white shadow-md ${
                      item.active
                        ? "bg-gradient-to-br from-purple-500 to-pink-500"
                        : "bg-gradient-to-br from-slate-400 to-slate-500"
                    }`}
                  >
                    {i + 1}
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <div className="mt-1 h-full w-0.5 bg-slate-200 dark:bg-slate-700" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 pt-1">
                  <Badge
                    variant="outline"
                    className={`mb-2 rounded-full text-xs font-bold ${
                      item.active ? "border-purple-300 text-purple-600 dark:border-purple-700 dark:text-purple-400" : ""
                    }`}
                  >
                    {item.year}
                  </Badge>
                  <h3 className={`text-base font-bold ${item.active ? "text-purple-600 dark:text-purple-400" : ""}`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-about-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr]">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl" data-testid="text-faq-title">
                Ko'p beriladigan savollar
              </h2>
              <p className="mt-4 text-muted-foreground">
                Qo'shimcha savollar bo'lsa biz bilan bog'laning.
              </p>
              <Link href="/contacts">
                <Button variant="outline" className="mt-6 gap-2 rounded-full font-bold" data-testid="button-faq-contact">
                  Bog'laning <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <Accordion type="multiple" className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border bg-white px-6 shadow-sm dark:bg-card"
                  data-testid={`faq-item-${i}`}
                >
                  <AccordionTrigger className="text-left font-bold hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-purple-700 to-blue-700 py-14 sm:py-16" data-testid="section-about-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl" data-testid="text-cta-title">
                Bugundan boshlang
              </h2>
              <p className="mt-2 text-purple-100 leading-relaxed">
                Bepul konsultatsiya oling va karyerangizni yangi bosqichga olib chiqing.
              </p>
              <Link href="/contacts">
                <Button
                  size="lg"
                  className="mt-6 gap-2 rounded-full bg-white px-8 font-bold text-purple-700 hover:bg-slate-100"
                  data-testid="button-cta"
                >
                  Bepul konsultatsiya <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Manzil", value: "Toshkent, Yunusabad", href: undefined },
                { icon: Phone, label: "Telefon", value: "78-113-80-90", href: "tel:+998781138090" },
                { icon: Mail, label: "E-pochta", value: "fbaacademyuz1@gmail.com", href: "mailto:fbaacademyuz1@gmail.com" },
              ].map(({ icon: Icon, label, value, href }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-purple-200">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 block font-bold text-white hover:text-purple-200 transition-colors"
                        data-testid={`link-contact-${i}`}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 font-bold text-white">{value}</p>
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
