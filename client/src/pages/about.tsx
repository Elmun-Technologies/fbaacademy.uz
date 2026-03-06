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
import { teachers, partnerCompanies } from "@/lib/data";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  BookOpen,
  BarChart3,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";

const STATS = [
  { value: "1 000+", label: "O'qitilgan talabalar" },
  { value: "92%", label: "Ishga joylashish darajasi" },
  { value: "50+", label: "Hamkor kompaniyalar" },
  { value: "2020", label: "Tashkil etilgan yil" },
];

const DIRECTIONS = [
  { icon: GraduationCap, title: "ACCA", desc: "O'zbekistondagi ACCA kurslarimiz Applied Knowledge, Applied Skills va Strategic Professional bosqichlarini o'z ichiga oladi." },
  { icon: BarChart3, title: "DipIFR", desc: "Xalqaro moliyaviy hisobot standartlari bo'yicha ACCA diplomiga tayyorlash. Yiliga 2 marta imtihon." },
  { icon: Briefcase, title: "Financial Modeling", desc: "DCF, kompaniya baholash va investitsiya tahlili. Real loyihalar bilan amaliy ko'nikmalar." },
  { icon: BookOpen, title: "1C: Buxgalteriya", desc: "1C: Buxgalteriya 8.3 ni boshidan o'rganish. Sertifikatlangan mutaxassis sifatida ish toping." },
];

const HOW_STEPS = [
  { num: "01", title: "Kursni tanlang", desc: "Ekspert o'qituvchilarimiz tayyorlagan kurslar bilan tanishing va o'zingizga mos yo'nalishni tanlang." },
  { num: "02", title: "Ro'yxatdan o'ting", desc: "Bepul konsultatsiya oling, to'lov formatini tanlang va o'quv jarayonini boshlang." },
  { num: "03", title: "O'qib, amaliyot qiling", desc: "Tajribali mentorlar nazoratida o'rganing. Mock imtihonlar va real loyihalar bilan mustahkamlang." },
  { num: "04", title: "Ish toping", desc: "Bitiruvchilarimizning 92% o'qishni tugatgandan so'ng 3 oy ichida ish topadi." },
];

const TIMELINE = [
  { year: "2020", title: "Asos solingan", desc: "FBA Academy 3 nafar o'qituvchi va 50 ta talaba bilan faoliyatni boshladi. ACCA kurslari bilan boshlandi." },
  { year: "2021", title: "Kengayish", desc: "DipIFR va Financial Modeling kurslari qo'shildi. Onlayn ta'lim platformasi ishga tushirildi." },
  { year: "2022", title: "500+ bitiruvchi", desc: "Birinchi yarim ming bitiruvchi. 20+ hamkor kompaniyalar bilan shartnomalar imzolandi." },
  { year: "2023", title: "Korporativ treninglar", desc: "Yirik kompaniyalar uchun maxsus korporativ ta'lim dasturlari ishga tushirildi. Huquqshunoslik va 1C: Buxgalteriya qo'shildi." },
  { year: "2024–2026", title: "1000+ talaba", desc: "Yunusabad markazida yangi o'quv xonalar ochildi. Applied Knowledge, Skills va Strategic Professional alohida kurs sifatida taqdim etildi.", active: true },
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-slate-900 py-16 sm:py-20" data-testid="section-about-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Biz haqimizda" }]} light />
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-purple-400">FBA Academy</div>
              <h1 className="text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl" data-testid="text-about-title">
                O'zbekistonda moliya mutaxassislari tayyorlaymiz
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                2020-yildan buyon ACCA, DipIFR, Financial Modeling va boshqa xalqaro sertifikatlar bo'yicha ta'lim beramiz.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/courses">
                  <Button size="lg" className="gap-2 rounded-full bg-amber-400 px-7 font-bold text-black hover:bg-amber-300" data-testid="button-hero-courses">
                    Barcha kurslar <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="/contacts">
                  <Button size="lg" variant="outline" className="rounded-full border-white/30 px-7 text-white hover:bg-white/10" data-testid="button-hero-contact">
                    Bog'laning
                  </Button>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm" data-testid={`stat-about-${i}`}>
                  <div className="text-4xl font-extrabold text-white">{s.value}</div>
                  <div className="mt-2 text-sm text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-16 sm:py-20" data-testid="section-mission">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-purple-400">Missiyamiz</div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-mission-title">
                Har bir talabaning muvaffaqiyati bizning natijamiz
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                FBA Academy — shunchaki ta'lim markazi emas, balki kasbiy karyerangizni qurishga yordam beradigan sherik.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Xalqaro sertifikatlangan ekspert o'qituvchilar",
                  "Big Four firmalarida amaliy tajribaga ega mentorlar",
                  "Real loyihalar va mock imtihonlar bilan o'qitish",
                  "Ish topishgacha va keyin ham qo'llab-quvvatlash",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {teachers.map((t) => (
                <div key={t.id} className="group overflow-hidden rounded-2xl bg-zinc-900" data-testid={`card-teacher-about-${t.id}`}>
                  <img
                    src={t.avatar}
                    alt={`${t.name} — FBA Academy o'qituvchisi`}
                    width={300}
                    height={220}
                    loading="lazy"
                    className="h-44 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <p className="font-extrabold text-white">{t.name}</p>
                    <p className="mt-0.5 text-xs font-semibold text-purple-400">{t.role}</p>
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
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Kurslar</div>
          <h2 className="mb-10 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-directions-title">
            Nimaga o'qitamiz?
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DIRECTIONS.map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900 p-7 transition-all hover:border-purple-500/30 hover:scale-[1.02]" data-testid={`card-direction-${i}`}>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-extrabold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-16 sm:py-20" data-testid="section-how">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Jarayon</div>
          <h2 className="mb-10 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-how-title">
            Qanday ishlaydi?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_STEPS.map((step, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900 p-7" data-testid={`step-${i}`}>
                <div className="mb-4 text-5xl font-extrabold text-purple-500/30 select-none leading-none">{step.num}</div>
                <h3 className="mb-2 text-lg font-extrabold text-white">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href="/contacts">
              <Button size="lg" className="gap-2 rounded-full bg-purple-600 px-8 font-bold text-white hover:bg-purple-500" data-testid="button-how-cta">
                Bepul konsultatsiya <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────── */}
      <section className="bg-[#111] py-16 sm:py-20" data-testid="section-timeline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_2fr]">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Tarix</div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-timeline-title">
                Bizning yo'limiz
              </h2>
              <p className="mt-4 text-zinc-400">
                2020-yildan buyon o'sib kelmoqdamiz va hali ko'p ishlar oldinda.
              </p>
            </div>
            <div className="space-y-0">
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-6" data-testid={`timeline-${i}`}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
                        item.active
                          ? "border-purple-500 bg-purple-600 text-white"
                          : "border-zinc-700 bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      {i + 1}
                    </div>
                    {i < TIMELINE.length - 1 && (
                      <div className="mt-1 h-full w-px bg-zinc-800" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className={`text-xs font-bold uppercase tracking-wider ${item.active ? "text-purple-400" : "text-zinc-600"}`}>
                      {item.year}
                    </span>
                    <h3 className={`mt-1 font-extrabold ${item.active ? "text-purple-400" : "text-white"}`}>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ──────────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-16 sm:py-20" data-testid="section-partners">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            Bitiruvchilarimiz ishlaydigan kompaniyalar
          </p>
          <div className="flex flex-wrap gap-3">
            {partnerCompanies.map((c) => (
              <span key={c} className="rounded-full border border-white/10 bg-zinc-900 px-5 py-2 text-sm font-semibold text-zinc-300 transition-colors hover:border-purple-500/40 hover:text-white" data-testid={`partner-${c}`}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="bg-[#111] py-16 sm:py-20" data-testid="section-about-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr]">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">FAQ</div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-faq-title">
                Ko'p beriladigan savollar
              </h2>
              <p className="mt-4 text-zinc-400">
                Qo'shimcha savollar bo'lsa biz bilan bog'laning.
              </p>
              <a href="/contacts">
                <Button variant="outline" className="mt-6 gap-2 rounded-full border-white/20 font-semibold text-white hover:bg-white/10" data-testid="button-faq-contact">
                  Bog'laning <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
            <Accordion type="multiple" className="space-y-2">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-white/10 bg-zinc-900 px-6"
                  data-testid={`faq-item-${i}`}
                >
                  <AccordionTrigger className="text-left font-bold text-white hover:no-underline hover:text-purple-300">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-zinc-400 leading-relaxed">
                    {item.a}
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
          <div className="grid gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-[#1e1060] to-slate-900 p-10 lg:grid-cols-2 lg:items-center lg:p-14">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-purple-400">Boshlash</div>
              <h2 className="text-4xl font-extrabold uppercase text-white sm:text-5xl" data-testid="text-cta-title">
                Bugundan boshlang
              </h2>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Bepul konsultatsiya oling va karyerangizni yangi bosqichga olib chiqing.
              </p>
              <a href="/contacts">
                <Button
                  size="lg"
                  className="mt-7 gap-2 rounded-full bg-amber-400 px-8 font-bold text-black hover:bg-amber-300"
                  data-testid="button-cta"
                >
                  Bepul konsultatsiya <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Manzil", value: "Toshkent, Yunusabad", href: undefined },
                { icon: Phone, label: "Telefon", value: "78-113-80-90", href: "tel:+998781138090" },
                { icon: Mail, label: "E-pochta", value: "fbaacademyuz1@gmail.com", href: "mailto:fbaacademyuz1@gmail.com" },
              ].map(({ icon: Icon, label, value, href }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-purple-300">{label}</p>
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
