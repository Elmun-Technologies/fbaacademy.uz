import { useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import { partnerCompanies } from "@/lib/data";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  Clock,
  Star,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Users,
  Award,
  BookOpen,
  BarChart3,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const STATS = [
  { value: "1 000+", label: "Talabalar" },
  { value: "92%", label: "Ishga joylashish" },
  { value: "50+", label: "Hamkor kompaniyalar" },
  { value: "4.9", label: "O'rtacha baho" },
];

const APPROACH_CARDS = [
  {
    icon: GraduationCap,
    title: "Ekspert o'qituvchilar",
    desc: "Member va Affiliate darajasidagi o'qituvchilar bilan o'qish osonroq. Big Four tajribasi va ACCA/DipIFR sertifikatlari.",
    href: "/teachers",
  },
  {
    icon: Briefcase,
    title: "Ish imkoniyatlari",
    desc: "Biz bilan o'qib ACCA Jobs orqali ish topish imkoniyatlarini qo'lga kiriting.",
    href: "/career-center",
  },
  {
    icon: BookOpen,
    title: "Moslashuvchan o'quv",
    desc: "Tematik va foydalanishga qulay o'quv dasturlari. Onlayn va offline formatda.",
    href: "/catalog",
  },
  {
    icon: BarChart3,
    title: "Xalqaro standart",
    desc: "Talabalarimiz singari siz ham top yutuqlarga erishish imkoniyatiga egasiz.",
    href: "/catalog",
  },
];

const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Kursni tanlang",
    desc: "Ekspert o'qituvchilarimiz tayyorlagan kurslar bilan tanishing.",
  },
  {
    num: "02",
    title: "Ro'yxatdan o'ting",
    desc: "Tez va xavfsiz tarzda ro'yxatdan o'ting va to'lovni amalga oshiring.",
  },
  {
    num: "03",
    title: "O'qishni boshlang",
    desc: "Hammasi shu! Darhol o'qishni boshlang.",
  },
];

const TIMELINE = [
  {
    year: "2020",
    month: "Mart",
    event: "FBA Academy 3 nafar o'qituvchi va 50 ta talaba bilan faoliyatni boshladi. ACCA kurslari bilan boshlandi.",
  },
  {
    year: "2021",
    month: "Yanvar",
    event: "DipIFR va Financial Modeling kurslari qo'shildi. Onlayn ta'lim platformasi ishga tushirildi.",
  },
  {
    year: "2022",
    month: "Iyun",
    event: "Birinchi 500+ bitiruvchi. 20+ hamkor kompaniyalar bilan shartnomalar imzolandi.",
  },
  {
    year: "2023",
    month: "Fevral",
    event: "Korporativ ta'lim dasturlari ishga tushirildi. Huquqshunoslik va 1C: Buxgalteriya kurslari qo'shildi.",
  },
  {
    year: "2024",
    month: "Sentabr",
    event: "1000+ talaba miltig'i. Toshkent, Yunusabad markazida yangi o'quv xonalar ochildi.",
  },
  {
    year: "2025–2026",
    month: "Hozir",
    event: "Applied Knowledge, Applied Skills va Strategic Professional bosqichlari alohida kurs sifatida taqdim etildi. Hamkor kompaniyalar 50+ ga yetdi.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Nima uchun odamlar ACCAni tanlashadi?",
    a: "ACCA bilan global buxgalteriya va audit standartlarini o'rganishingiz mumkin. ACCA a'zosi sifatida malaka olasiz va xorijda ish izlash oson bo'ladi. Ushbu buxgalteriya standartlarini qabul qilgan istalgan mamlakatda ishlashingiz mumkin.",
  },
  {
    q: "ACCA'ni o'qish uchun ingliz tilini bilish kerakmi?",
    a: "Imtihonlar ingliz tilida bo'ladi, shuning uchun B2 darajasida ingliz tili bilimi tavsiya etiladi. Biroq bizning o'qituvchilarimiz o'zbek va rus tillarida tushuntiradi, shuning uchun dastlabki bosqichda ingliz tilini parallel ravishda o'rganish mumkin.",
  },
  {
    q: "Kimlar chegirma oladi?",
    a: "Talabalar, ko'p farzandli oilalar, nogironligi bo'lgan shaxslar va referral dasturi orqali do'stini tavsiya qilganlar chegirma oladi. Batafsil ma'lumot uchun administrator bilan bog'laning.",
  },
  {
    q: "Katta jamoalar uchun maxsus narx bormi?",
    a: "Ha, 5 va undan ortiq ishchi yuboradigan korporativ mijozlar uchun maxsus narxlar va individual ta'lim dasturlari mavjud. Korporativ treninglar bo'yicha bog'laning.",
  },
  {
    q: "ACCA o'qisam qayerda va qanday lavozimda ishlay olaman?",
    a: "ACCA bilan Big Four (Deloitte, PwC, KPMG, EY), banklar, auditorlik firmalari, yirik korporatsiyalar va davlat tashkilotlarida moliyaviy menejer, bosh buxgalter, audit mutaxassisi va moliyaviy direktor lavozimlarida ishlashingiz mumkin.",
  },
];

export default function About() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTimeline, setActiveTimeline] = useState(5);

  useSEO({
    title: "Biz haqimizda — FBA Academy | ACCA, DipIFR, Moliya ta'limi Toshkent",
    description: "FBA Academy — Toshkent, Yunusabaddagi yetakchi moliya va buxgalteriya ta'lim markazi. 1000+ talabaga ACCA, DipIFR, Financial Modeling va boshqa xalqaro sertifikatlar bo'yicha ta'lim beramiz.",
    keywords: "FBA Academy haqida, ACCA ta'lim Toshkent, DipIFR kurslari Yunusabad, moliya ta'limi O'zbekiston, buxgalteriya kursi",
    breadcrumb: [{ name: "Biz haqimizda", url: "https://fbaacademy.uz/about" }],
    faqItems: FAQ_ITEMS.map((f) => ({ question: f.q, answer: f.a })),
    jsonLd: {
      "@type": "AboutPage",
      "name": "FBA Academy haqida",
      "description": "FBA Academy — Toshkent, Yunusabaddagi yetakchi moliya ta'lim markazi. 1000+ talabaga ACCA, DipIFR va boshqa xalqaro sertifikatlar bo'yicha ta'lim beramiz.",
      "url": "https://fbaacademy.uz/about",
      "mainEntity": {
        "@type": "EducationalOrganization",
        "name": "FBA Academy",
        "foundingDate": "2020",
        "alumni": { "@type": "QuantitativeValue", "value": 1000 },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Toshkent, Yunusabad",
          "addressCountry": "UZ",
        },
        "telephone": "+998781138090",
        "email": "fbaacademyuz1@gmail.com",
      },
    },
  });

  return (
    <Layout>
      {/* ===== HERO ===== */}
      <section className="bg-white py-14 sm:py-20" data-testid="section-about-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Biz haqimizda" }]} />
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1
                className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
                data-testid="text-about-title"
              >
                FBA Academy<br />
                <span className="text-slate-400">haqida</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-600 leading-relaxed">
                Xalqaro darajadagi soha mutaxassislarini o'qitish va kasbiy rivojlantirish — bizning asosiy faoliyat yo'nalishimiz.
              </p>

              {/* Mission box — amber, Rush Agency style */}
              <div className="mt-8 rounded-2xl bg-amber-400 px-7 py-5" data-testid="card-mission">
                <p className="text-base font-bold text-amber-950">Bizning missiyamiz</p>
                <p className="mt-1.5 text-sm text-amber-900 leading-relaxed">
                  Har bir insonga xalqaro darajadagi moliya va buxgalteriya ta'limini qulay va samarali usulda yetkazib berish. Bugun markaz talabalari ko'pchiligini yuqori ball bilan muvaffaqiyatli imtihon topshirdi.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm"
                  data-testid={`stat-about-${i}`}
                >
                  <div className="text-3xl font-extrabold text-slate-900">{s.value}</div>
                  <div className="mt-1 text-sm text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR APPROACH ===== */}
      <section className="border-t bg-slate-50 py-16 sm:py-20" data-testid="section-approach">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl" data-testid="text-approach-title">
            Bizning yondashuv
          </h2>
          <p className="mb-10 max-w-xl text-slate-500">
            FBA Academy — shunchaki ta'lim markazi emas, balki kasbiy karyerangizni qurishga yordam beradigan sherik.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH_CARDS.map((card, i) => (
              <Link key={i} href={card.href} data-testid={`approach-card-${i}`}>
                <div className="group flex h-full flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer">
                  <div>
                    <card.icon className="mb-4 h-7 w-7 text-amber-500" />
                    <h3 className="mb-2 text-base font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-1 text-xs font-bold text-amber-600">
                    Batafsil <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-white py-16 sm:py-20" data-testid="section-how-it-works">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge className="mb-4 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-700">
                Ro'yxatdan o'tish
              </Badge>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl" data-testid="text-how-title">
                Qanday ishlaydi?
              </h2>
              <p className="mb-8 text-slate-500 leading-relaxed">
                Bugundan o'quv yo'lingizni boshlang!
              </p>
              <div className="space-y-6">
                {HOW_IT_WORKS.map((step, i) => (
                  <div key={i} className="flex gap-5" data-testid={`step-${i}`}>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-lg font-extrabold text-amber-950">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{step.title}</h3>
                      <p className="mt-0.5 text-sm text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contacts">
                <Button
                  size="lg"
                  className="mt-8 rounded-full bg-slate-900 px-8 font-bold text-white hover:bg-slate-700"
                  data-testid="button-how-cta"
                >
                  Ro'yxatdan o'tish <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Features list */}
            <div className="rounded-3xl border bg-slate-50 p-8">
              <h3 className="mb-6 text-lg font-extrabold text-slate-900">Ekspertlar bilan o'rgan</h3>
              <ul className="space-y-4">
                {[
                  { icon: Users, text: "Member va Affiliate darajasidagi o'qituvchilar" },
                  { icon: Award, text: "ACCA Jobs orqali ish imkoniyatlari" },
                  { icon: BookOpen, text: "Tematik va foydalanishga qulay o'quv dasturi" },
                  { icon: Star, text: "Talabalar uchun bepul mock imtihon" },
                  { icon: Clock, text: "24/7 talabalar qo'llab-quvvatlash xizmati" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                      <item.icon className="h-4 w-4 text-amber-600" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-white border p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Mamlakat ishonchi</p>
                <p className="text-base font-extrabold text-slate-900">Millat e'tiboriga sazovor</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {partnerCompanies.slice(0, 6).map((c) => (
                    <span key={c} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPANY HISTORY / TIMELINE ===== */}
      <section className="border-t bg-slate-50 py-16 sm:py-20" data-testid="section-about-timeline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl" data-testid="text-timeline-title">
            <span className="text-amber-500 italic">Kompaniya</span> rivojlanish tarixi
          </h2>
          <p className="mb-10 text-slate-500">FBA Academy faoliyatidagi muhim bosqichlar</p>

          {/* Desktop: horizontal card navigation */}
          <div className="hidden sm:block">
            <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
              {TIMELINE.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTimeline(i)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                    activeTimeline === i
                      ? "bg-amber-400 text-amber-950"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-amber-300"
                  }`}
                  data-testid={`timeline-tab-${i}`}
                >
                  {item.year}
                </button>
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {TIMELINE.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setActiveTimeline(i)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all ${
                    activeTimeline === i
                      ? "bg-amber-400 shadow-md"
                      : "border bg-white hover:border-amber-200 hover:shadow-sm"
                  }`}
                  data-testid={`timeline-card-${i}`}
                >
                  <Badge
                    className={`mb-3 rounded-full text-xs font-bold ${
                      activeTimeline === i
                        ? "bg-amber-950/20 text-amber-950 border-transparent"
                        : "border-slate-200 bg-slate-100 text-slate-600"
                    }`}
                  >
                    {item.month}
                  </Badge>
                  <div className={`mb-2 text-2xl font-extrabold ${activeTimeline === i ? "text-amber-950" : "text-slate-900"}`}>
                    {item.year}
                  </div>
                  <p className={`text-sm leading-relaxed ${activeTimeline === i ? "text-amber-900" : "text-slate-500"}`}>
                    {item.event}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="space-y-4 sm:hidden">
            {TIMELINE.map((item, i) => (
              <div key={i} className={`rounded-2xl p-5 ${i === TIMELINE.length - 1 ? "bg-amber-400" : "border bg-white"}`} data-testid={`timeline-mobile-${i}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xl font-extrabold ${i === TIMELINE.length - 1 ? "text-amber-950" : "text-slate-900"}`}>{item.year}</span>
                  <Badge className={`rounded-full text-xs ${i === TIMELINE.length - 1 ? "bg-amber-950/20 text-amber-950 border-transparent" : "border-slate-200 bg-slate-100 text-slate-600"}`}>{item.month}</Badge>
                </div>
                <p className={`text-sm leading-relaxed ${i === TIMELINE.length - 1 ? "text-amber-900" : "text-slate-500"}`}>{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-16 sm:py-20" data-testid="section-about-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl" data-testid="text-faq-title">
                Ko'p beriladigan savollar.
              </h2>
              <p className="mt-4 text-slate-500">
                Qo'shimcha savollar bo'lsa biz bilan bog'laning.
              </p>
              <Link href="/contacts">
                <Button variant="outline" className="mt-6 rounded-full font-bold" data-testid="button-faq-contact">
                  Bog'laning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} data-testid={`faq-item-${i}`}>
                  <button
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    data-testid={`faq-toggle-${i}`}
                  >
                    <span className="font-bold text-slate-900">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <p className="pb-5 text-sm text-slate-500 leading-relaxed">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="border-t bg-slate-900 py-16 sm:py-20" data-testid="section-about-contact">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl" data-testid="text-contact-title">
                Bugundan boshlang
              </h2>
              <p className="mt-3 text-slate-400 leading-relaxed">
                Bepul konsultatsiya oling va karyerangizni yangi bosqichga olib chiqing.
              </p>
              <Link href="/contacts">
                <Button
                  size="lg"
                  className="mt-8 rounded-full bg-amber-400 px-8 font-bold text-amber-950 hover:bg-amber-300"
                  data-testid="button-contact-cta"
                >
                  Bepul konsultatsiya <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10">
                  <MapPin className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Manzil</p>
                  <p className="mt-0.5 font-bold text-white">Toshkent, Yunusabad</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10">
                  <Phone className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Telefon</p>
                  <a
                    href="tel:+998781138090"
                    className="mt-0.5 block font-bold text-white hover:text-amber-400 transition-colors"
                    data-testid="link-phone"
                  >
                    78-113-80-90
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10">
                  <Mail className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">E-pochta</p>
                  <a
                    href="mailto:fbaacademyuz1@gmail.com"
                    className="mt-0.5 block font-bold text-white hover:text-amber-400 transition-colors"
                    data-testid="link-email"
                  >
                    fbaacademyuz1@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
