import { useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { courses, teachers } from "@/lib/data";
import { CheckCircle2, ArrowRight, Star, Flame, Settings, FileText, Users, BarChart3, DollarSign, Award, Briefcase, BookOpen, Monitor, ChevronLeft, ChevronRight, Play } from "lucide-react";

const course = courses.find((c) => c.id === "1c-course")!;
const mentor = teachers.find((t) => t.id === "teacher-4")!;

const UNSPLASH = "https://images.unsplash.com";

const COURSE_BADGES = [
  "🎓 Ishga joylashish dasturi bor",
  "✅ 1C sertifikatlangan kurs",
];

const HERO_BULLETS = [
  "0 dan professional buxgalterga: 3 oyda ishga tayyor bo'lish",
  "Talabga yuqori: O'zbekistondagi 80%+ kompaniyalar 1C ishlatadi",
  "Elektron soliq hisobotlari va my.soliq.uz bilan ishlashni o'rganasiz",
];

const FEATURES = [
  {
    icon: Monitor,
    title: "Qulay o'quv yuki va jonli vebinarlar",
    desc: "Haftasiga 6–8 soat sarflang — ishingiz bilan oson uyg'unlashtirish. Mavzularni o'qituvchi bilan onlayn tahlil qilasiz.",
  },
  {
    icon: FileText,
    title: "4 ta yirik loyiha va 40+ amaliy topshiriq",
    desc: "Bilimlarni amaliyotda mustahkamlash va kundalik buxgalteriya vazifalarini hal qilishni o'rganasiz.",
  },
  {
    icon: Briefcase,
    title: "Hamkor kompaniyalarda amaliyot imkoniyati",
    desc: "Eng yaxshi talabalar o'qish davomida buxgalteriya firmalarida amaliyot o'tash imkoniyatiga ega bo'ladi.",
  },
  {
    icon: BookOpen,
    title: "20 ta vebinar imtihon tayyorgarligi uchun",
    desc: "1C sertifikat imtihonlarini topshirasiz va rezyumengizni kuchliroq qilasiz.",
  },
  {
    icon: Settings,
    title: "1C dasturiga bepul kirish",
    desc: "6 oy davomida 1C:Buxgalteriya o'quv versiyasiga to'liq kirish imkoniyati — amaliyot uchun.",
  },
  {
    icon: BarChart3,
    title: "Soliq hisobotlari avtomatlashtirish",
    desc: "my.soliq.uz va soliq.uz bilan integratsiya. Elektron hisobot yuborishni o'rganasiz.",
  },
];

const KEY_SKILLS = [
  "1C: Buxgalteriya 8.3'da professional ishlash",
  "Birlamchi hujjatlar: kirim, chiqim, schyot-faktura",
  "Ish haqi va ajratmalarni hisoblash",
  "Bank operatsiyalari va kassa hujjatlari",
  "QQS, daromad solig'i hisobotlarini tayyorlash",
  "Soliq.uz va my.soliq.uz orqali yuborish",
  "Balans va foyda-zarar hisobotlarini tahlil qilish",
  "Inventar va tovar-moddiy boyliklar hisobi",
];

const TOOLS = [
  { name: "1C: Buxgalteriya 8.3", emoji: "🔴" },
  { name: "1C: Kadrlar", emoji: "👥" },
  { name: "My.soliq.uz", emoji: "📊" },
  { name: "Soliq.uz", emoji: "📋" },
  { name: "Stat.uz", emoji: "📈" },
  { name: "Excel", emoji: "🟢" },
  { name: "Hisob rejasi", emoji: "📒" },
  { name: "Elektron imzo", emoji: "🔐" },
];

const PORTFOLIO_PROJECTS = [
  {
    title: "Kompaniya buxgalteriyasini sozlash",
    desc: "Yangi tashkilot uchun 1C'ni sozlang: hisob rejasi, ma'lumotnomalar, boshlang'ich qoldiqlar.",
    img: `${UNSPLASH}/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop`,
  },
  {
    title: "Bir oylik hujjat aylanishi",
    desc: "Schyot-faktura, tovar, bank va kassa operatsiyalarini to'liq qayta ishlash.",
    img: `${UNSPLASH}/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop`,
  },
  {
    title: "Ish haqi hisoboti",
    desc: "5 xodimli kompaniya uchun ish haqi, soliq, INPS va FZSS ajratmalarini hisoblash.",
    img: `${UNSPLASH}/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop`,
  },
];

const PRACTICE_TASKS = [
  "Kirim-chiqim orderlar va kassa kitobini yuritish",
  "Schyot-faktura va aktlarni ro'yxatdan o'tkazish",
  "Bank ko'chirmalarini import qilish va qayta ishlash",
  "QQS hisoboti va reestri tayyorlash",
  "Ish haqi jadvalini va tabriq varaqasini tuzish",
  "Yil yakunida inventarizatsiya o'tkazish",
];

const CAREER_STEPS = [
  {
    num: "01",
    title: "Hamkor kompaniyalarda amaliy vazifalar beramiz",
    desc: "Deloitte, PwC, yirik buxgalteriya firmalari topshiriqlarini bajarasiz — portfolioingizni to'ldirasiz.",
  },
  {
    num: "02",
    title: "Karyera maqsadlarini belgilash va rezyume tayyorlash",
    desc: "Mutaxassis bilan karyera rejasini tuzing, rezyume shablonlari va ish qidirish kanallari oling.",
  },
  {
    num: "03",
    title: "Intensivlar va yashash efirlar o'tkazamiz",
    desc: "Real ish beruvchilar bilan uchrashuvlar, suhbat mashqlari va intervyu tayyorgarligi.",
  },
  {
    num: "04",
    title: "Vakansiyalarga yo'naltiramiz",
    desc: "Hamkor kompaniyalarimizdan maxsus vakansiyalar: junior buxgalter, moliya bo'limi xodimi.",
  },
  {
    num: "05",
    title: "Ish topguncha qo'llab-quvvatlaymiz",
    desc: "O'qish davomida va keyin ham yordam: rezyume tekshirish, suhbat tayyorligi, tavsiyalar.",
  },
];

const CONFIG_TYPES = [
  { name: "1C: Buxgalteriya", emoji: "🔴", desc: "Moliyaviy hisobot va buxgalteriya operatsiyalari" },
  { name: "1C: ZUP (Ish haqi)", emoji: "👥", desc: "Kadrlar va ish haqi boshqaruvi" },
  { name: "1C: Savdo", emoji: "🛒", desc: "Tovar-moddiy boyliklar va savdo hisobi" },
  { name: "1C: ERP", emoji: "🏭", desc: "Yirik korxonalar uchun kompleks boshqaruv" },
];

const FAQ_CATEGORIES = ["To'lov", "O'qish", "Kasb"];

const FAQS: Record<string, { q: string; a: string }[]> = {
  "To'lov": [
    { q: "Bo'lib to'lash imkoniyati bormi?", a: "Ha, 3, 6, 12 oylik bo'lib to'lash imkoniyati mavjud. Foizsiz muddatli to'lov uchun menejerimizga murojaat qiling." },
    { q: "Chegirma qachon tugaydi?", a: "Chegirma cheklangan muddat uchun belgilangan. Hozirgi narxni qulflash uchun so'rov qoldiring." },
    { q: "Kurs mos kelmasa, pulni qaytarib berasizlarmi?", a: "Ha, birinchi 7 kun ichida kurs mos kelmasa, to'liq qaytarib beramiz." },
  ],
  "O'qish": [
    { q: "Kurs qanday formatda o'tiladi?", a: "Onlayn jonli darslar + yozuvlar. Qulay vaqtda qayta ko'rishingiz mumkin. Telegram guruhida doimiy aloqa." },
    { q: "1C dasturi bo'lmasa ham o'qiy olamanmi?", a: "Ha, o'quvchilarga 1C:Buxgalteriya ning o'quv versiyasiga 6 oylik bepul kirish beriladi." },
    { q: "Kurs qancha davom etadi?", a: "Asosiy kurs 3 oy. Ish topguncha qo'llash-quvvatlash esa undan ham uzoq davom etadi." },
  ],
  "Kasb": [
    { q: "Kursdan so'ng ish topishga yordam berasizlarmi?", a: "Ha, HR-konsultant rezyume tayyorlash, vakansiyalar tanlash va suhbatga tayyorlanishda yordam beradi." },
    { q: "FBA Academy sertifikati qanchalik tan olinadi?", a: "O'zbekistondagi yetakchi buxgalteriya va moliya kompaniyalarimiz sertifikatimizni tan oladi." },
    { q: "Boshlovchi uchun ham mosmi?", a: "Ha, kurs 0 darajadan boshlanadi. Oldindan hech qanday bilim kerak emas." },
  ],
};

export default function OneCPage() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeFaqTab, setActiveFaqTab] = useState("To'lov");

  useSEO({
    title: "1C: Buxgalteriya Kursi — 0 dan Professional | FBA Academy",
    description: "1C: Buxgalteriya 8.3 kursi: birlamchi hujjatlar, ish haqi hisoblash, QQS va soliq hisobotlari, moliyaviy tahlil. O'zbekistondagi 80%+ kompaniyalar 1C ishlatadi. 3 oylik intensiv kurs.",
    keywords: "1C Buxgalteriya kurs O'zbekiston, 1C 8.3 Toshkent, buxgalteriya dasturi kursi, soliq hisoboti 1C, FBA Academy 1C",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "1C: Buxgalteriya 8.3 — Professional Kurs",
      "description": "1C: Buxgalteriya dasturini 0 dan professional darajagacha o'rganish.",
      "provider": { "@type": "Organization", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
      "educationalLevel": "Beginner",
      "timeRequired": "P3M",
    },
  });

  return (
    <Layout>
      {/* ===== 1. HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pb-12 pt-8 sm:pb-16 sm:pt-12" data-testid="section-1c-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_340px] lg:gap-6">

            {/* Left — Text */}
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                {COURSE_BADGES.map((b, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm" data-testid={`badge-hero-${i}`}>{b}</span>
                ))}
              </div>
              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl" data-testid="text-1c-title">
                1C: Buxgalteriya —<br />Kengaytirilgan kurs
              </h1>
              <ul className="mt-6 space-y-3">
                {HERO_BULLETS.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300" data-testid={`hero-bullet-${i}`}>
                    <div className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-blue-500 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    </div>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#enroll">
                  <Button size="lg" className="rounded-xl bg-blue-600 px-8 font-bold text-white shadow-lg hover:bg-blue-700" data-testid="button-hero-enroll">
                    Yozilish
                  </Button>
                </Link>
                <Link href="#program">
                  <Button size="lg" variant="outline" className="rounded-xl border-white/30 bg-white/10 px-8 font-bold text-white hover:bg-white/20" data-testid="button-hero-program">
                    Dasturni ko'rish
                  </Button>
                </Link>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                </div>
                <span className="text-sm font-bold text-white">{course.rating}</span>
                <span className="text-sm text-slate-400">{course.studentsCount} talaba</span>
              </div>
            </div>

            {/* Center — image */}
            <div className="hidden lg:flex lg:items-center lg:justify-center">
              <div className="relative">
                <img
                  src={`${UNSPLASH}/photo-1460925895917-afdab827c52f?w=420&h=360&fit=crop`}
                  alt="1C Buxgalteriya"
                  className="w-[300px] rounded-3xl object-cover shadow-2xl"
                  loading="eager"
                  data-testid="img-hero-1c"
                />
                <div className="absolute -bottom-4 -left-4 rounded-2xl bg-[#e8001c] px-5 py-3 shadow-xl">
                  <span className="text-2xl font-extrabold text-white">1C</span>
                </div>
                <div className="absolute -right-4 -top-4 rounded-2xl bg-white px-4 py-2.5 shadow-xl">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Bitiruvchilar</div>
                  <div className="text-xl font-extrabold text-slate-900">{course.studentsCount}</div>
                </div>
              </div>
            </div>

            {/* Right — Enrollment form */}
            <div id="enroll" className="rounded-2xl bg-white p-6 shadow-2xl dark:bg-card" data-testid="card-1c-enroll">
              <div className="mb-1 flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold text-foreground">O'qishni tanlashga yordam beramiz</h3>
                </div>
                <Badge className="rounded-lg bg-rose-500 px-2.5 py-1 text-xs font-extrabold text-white shadow">AKSIYA<br/>-{course.discount}</Badge>
              </div>
              <div className="my-3 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-foreground" data-testid="text-1c-price">{course.price} UZS</span>
                <span className="text-sm text-muted-foreground line-through">{course.oldPrice} UZS</span>
              </div>
              <div className="mb-3 flex items-center gap-1.5 text-xs font-medium text-amber-600">
                <Flame className="h-3.5 w-3.5" /> Chegirma muddati cheklangan
              </div>
              <LeadForm source="course-1c" buttonText="Konsultatsiya olish" />
              <p className="mt-3 text-center text-xs text-muted-foreground">Yoki menejerimiz siz bilan bog'lanadi</p>
            </div>
          </div>

          {/* Quick info bar */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Qachon", value: "Har oy yangi guruh" },
              { label: "Davomiyligi", value: course.duration },
              { label: "Format", value: "Onlayn · Jonli darslar" },
              { label: "Hujjat", value: "Diplom + Sertifikat" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm" data-testid={`quick-info-${i}`}>
                <div className="text-xs text-slate-400 uppercase tracking-wide">{item.label}</div>
                <div className="mt-0.5 text-sm font-bold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. COURSE FEATURES ===== */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/30" data-testid="section-features">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-extrabold sm:text-3xl" data-testid="text-features-title">
            Kursda sizi nima kutayapti — amaliyot va trend bilimlar
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex gap-4" data-testid={`feature-${i}`}>
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 bg-blue-50">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-base font-bold leading-snug">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. WHY 1C — dark with photo + stat ===== */}
      <section className="bg-slate-900 py-14" data-testid="section-why-1c">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-3xl">1C — O'zbekistondagi asosiy buxgalteriya dasturi</h2>
          <div className="overflow-hidden rounded-3xl bg-slate-800">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[280px] overflow-hidden">
                <img
                  src={`${UNSPLASH}/photo-1573497019940-1c28c88b4f3e?w=700&h=500&fit=crop&crop=face`}
                  alt="Buxgalter 1C bilan ishlayapti"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute left-6 top-6 rounded-2xl bg-white/95 px-5 py-3 shadow-xl backdrop-blur-sm" data-testid="stat-bubble">
                  <div className="text-2xl font-extrabold text-slate-900">80%+</div>
                  <div className="text-xs text-slate-600 leading-snug">O'zbekiston kompaniyalari<br/>1C ishlatadi</div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <h3 className="text-xl font-extrabold text-white sm:text-2xl">1C buxgalterini oldindan IT bilimisiz bo'lish mumkin</h3>
                <p className="mt-4 text-slate-300 leading-relaxed text-sm">
                  hh.uz'dagi vakansiyalarning 50%+ dan ortig'i tajribasiz yoki 1 yildan kam tajribali mutaxassislarga mo'ljallangan.
                </p>
                <p className="mt-3 text-slate-300 leading-relaxed text-sm">
                  Boshlash uchun ingliz tili shart emas — tizim o'zbek va rus tilida. Buxgalteriya yoki moliya sohasidagi tajriba afzallik bo'ladi, lekin majburiy emas.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { value: course.studentsCount, label: "Bitiruvchi" },
                    { value: course.rating + "/5", label: "Kurs reytingi" },
                    { value: course.practiceHours + " soat", label: "Amaliyot" },
                    { value: course.projects + " loyiha", label: "Portfolio" },
                  ].map((s, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3" data-testid={`why-stat-${i}`}>
                      <div className="text-lg font-extrabold text-white">{s.value}</div>
                      <div className="text-xs text-slate-400">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. SKILLS + TOOLS ===== */}
      <section className="py-14 sm:py-20" data-testid="section-skills-tools">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">O'qishdan keyingi ko'nikmalaringiz</h2>
          <p className="mb-10 text-muted-foreground">Ish beruvchilarning talablariga to'liq mos keladi</p>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Key Skills */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-muted-foreground uppercase tracking-wide text-sm">Asosiy ko'nikmalar</h3>
              <ul className="space-y-3">
                {KEY_SKILLS.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm" data-testid={`skill-${i}`}>
                    <span className="mt-0.5 text-slate-400">·</span>
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools grid */}
            <div>
              <h3 className="mb-4 text-sm font-bold text-muted-foreground uppercase tracking-wide">Instrumentlar</h3>
              <div className="grid grid-cols-2 gap-3">
                {TOOLS.map((tool, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl border bg-white p-3.5 shadow-sm dark:bg-card" data-testid={`tool-${i}`}>
                    <span className="text-xl">{tool.emoji}</span>
                    <span className="text-sm font-semibold">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. CERTIFICATE ===== */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/30" data-testid="section-certificate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border bg-white shadow-md dark:bg-card">
            <div className="grid lg:grid-cols-2 lg:items-center">
              <div className="p-8 lg:p-12">
                <h2 className="text-2xl font-extrabold sm:text-3xl">Diplom va 1C sertifikatini olasiz</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Kurs yakunida FBA Academy diplomini va 1C tomonidan tasdiqlangan sertifikatni olasiz. Sertifikat raqami 1C rasmiy bazasida saqlanadi — ish beruvchi tekshira oladi.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "FBA Academy to'liq diplomi (professional qayta tayyorlash)",
                    "1C sertifikatlangan kurs belgisi",
                    "Sertifikat raqami rasmiy bazada",
                    "Rezyumega qo'shish uchun raqamli format",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm font-medium" data-testid={`cert-item-${i}`}>
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:from-blue-950/20 dark:to-indigo-950/20 lg:p-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/50" data-testid="img-diploma">
                    <img src={`${UNSPLASH}/photo-1589829545856-d10d557cf95f?w=300&h=220&fit=crop`} alt="FBA Academy Diplomi" className="h-36 w-full object-cover" loading="lazy" />
                    <div className="p-3">
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">FBA Academy</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">Professional Diplom</div>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/50" data-testid="img-certificate">
                    <img src={`${UNSPLASH}/photo-1554224155-6726b3ff858f?w=300&h=220&fit=crop`} alt="1C Sertifikat" className="h-36 w-full object-cover" loading="lazy" />
                    <div className="p-3">
                      <div className="text-xs font-bold text-[#e8001c] uppercase tracking-wide">1C Sertifikat</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">Rasmiy tasdiqlash</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. PORTFOLIO PROJECTS ===== */}
      <section id="program" className="py-14 sm:py-20" data-testid="section-projects">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">Portfolio uchun {course.projects}+ yirik loyiha</h2>
          <p className="mb-10 text-muted-foreground">Real kompaniya ma'lumotlari bilan ishlaysiz</p>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="relative h-64 sm:h-80">
                <img
                  src={PORTFOLIO_PROJECTS[activeProjectIdx].img}
                  alt={PORTFOLIO_PROJECTS[activeProjectIdx].title}
                  className="h-full w-full object-cover transition-all duration-500"
                  loading="lazy"
                  data-testid={`project-img-${activeProjectIdx}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-lg font-extrabold text-white">{PORTFOLIO_PROJECTS[activeProjectIdx].title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{PORTFOLIO_PROJECTS[activeProjectIdx].desc}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-2">
                {PORTFOLIO_PROJECTS.map((_, i) => (
                  <button key={i} onClick={() => setActiveProjectIdx(i)} className={`h-2 rounded-full transition-all ${i === activeProjectIdx ? "w-8 bg-blue-600" : "w-2 bg-slate-300"}`} data-testid={`project-dot-${i}`} />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={() => setActiveProjectIdx((p) => (p - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length)} className="flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-sm hover:bg-slate-50 dark:bg-card" data-testid="button-project-prev">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={() => setActiveProjectIdx((p) => (p + 1) % PORTFOLIO_PROJECTS.length)} className="flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-sm hover:bg-slate-50 dark:bg-card" data-testid="button-project-next">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. PRACTICE TASKS ===== */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/30" data-testid="section-practice">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border bg-white shadow-sm dark:bg-card">
            <div className="grid gap-6 p-8 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-12 lg:items-center">
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 shadow-inner mx-auto lg:mx-0" data-testid="tasks-icon">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-slate-700 dark:text-slate-200">40+</div>
                  <div className="text-xs font-semibold text-slate-500">topshiriq</div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-extrabold sm:text-2xl">Real buxgalteriya amaliyotidan topshiriqlar</h2>
                <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {PRACTICE_TASKS.map((task, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm" data-testid={`task-${i}`}>
                      <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span className="text-muted-foreground">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8. BONUS SOFTWARE ACCESS ===== */}
      <section className="bg-slate-900 py-14" data-testid="section-bonus">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-3xl">6 oy bepul 1C dasturiga kirish</h2>
          <p className="mb-10 text-slate-400">O'qish uchun zarur barcha dasturlar va resurslar tekin</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-6" data-testid="bonus-fresh">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e8001c] text-2xl font-extrabold text-white shadow-lg">1C</div>
              <div>
                <h3 className="text-lg font-bold text-white">1C: Buxgalteriya (O'quv versiya)</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">6 oy davomida o'quv kompaniya ma'lumotlari bilan 1C:Buxgalteriya ning to'liq versiyasida mustaqil mashq qilasiz.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-6" data-testid="bonus-its">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-2xl font-extrabold text-white shadow-lg">📚</div>
              <div>
                <h3 className="text-lg font-bold text-white">FBA Academy Bilim Bazasi</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">Dars yozuvlari, qo'llanmalar, soliq qonunchiligi yangiliklari va amaliy misollarga doimiy kirish.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. CAREER HELP ===== */}
      <section className="py-14 sm:py-20" data-testid="section-career">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-slate-900 p-8 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Ish topishga qadam-baqadam yordam beramiz</h2>
                <p className="mt-3 mb-8 text-slate-400">Ish topguncha qo'llab-quvvatlaymiz</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {CAREER_STEPS.map((step, i) => (
                    <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5" data-testid={`career-step-${i}`}>
                      <div className="mb-3 text-2xl font-extrabold text-blue-400">{step.num}</div>
                      <h3 className="text-sm font-bold text-white leading-snug">{step.title}</h3>
                      <p className="mt-2 text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex lg:items-center">
                <img
                  src={`${UNSPLASH}/photo-1560250097-0b93528c311a?w=280&h=400&fit=crop&crop=face`}
                  alt="Karyera maslahatchi"
                  className="w-52 rounded-3xl object-cover shadow-2xl ring-4 ring-white/10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 10. CONFIGURATION TYPES ===== */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/30" data-testid="section-configs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">Tipik konfiguratsiyalar bilan tanishasiz</h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Eng keng tarqalgan 1C konfiguratsiyalarini — 1C:Buxgalteriya, 1C:ZUP, 1C:Savdo, 1C:ERP — qanday tuzilganini va nima maqsadda ishlatilishini bilib olasiz.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {CONFIG_TYPES.map((cfg, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border bg-white p-4 shadow-sm dark:bg-card" data-testid={`config-${i}`}>
                    <span className="text-2xl">{cfg.emoji}</span>
                    <div>
                      <div className="text-sm font-bold">{cfg.name}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{cfg.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-muted-foreground text-sm uppercase tracking-wide mb-4">Kursda qo'shimcha o'rganasiz</h3>
              {[
                { emoji: "📊", title: "Buxgalteriya hisobi asoslari", desc: "Hisob turlarini, hisobot shakllarini, buxgalteriya yozuvlarini o'rganasiz." },
                { emoji: "🟢", title: "Excel va Google Jadvallar", desc: "1C'dan eksport qilingan ma'lumotlar bilan tizimli ishlash." },
                { emoji: "🔐", title: "Ma'lumotlar xavfsizligi", desc: "Qonunchilik va standartlarni o'rganasiz, ma'lumotlarni himoya qilishni bilasiz." },
                { emoji: "📈", title: "Mantiqiy operatsiyalar", desc: "Hisobot tizimlarida algoritm va mantiqiy operatsiyalarni tushunasiz." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border bg-white p-4 shadow-sm dark:bg-card" data-testid={`extra-${i}`}>
                  <span className="text-xl">{item.emoji}</span>
                  <div>
                    <div className="text-sm font-bold">{item.title}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 11. COURSE MODULES ===== */}
      <section className="py-14" data-testid="section-modules">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold sm:text-3xl">Kurs dasturi</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {course.modules.map((mod, i) => (
                <AccordionItem key={i} value={`m-${i}`} className="rounded-2xl border bg-white px-5 shadow-sm dark:bg-card" data-testid={`module-${i}`}>
                  <AccordionTrigger className="text-left py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-sm font-bold text-white shadow-md">{i + 1}</span>
                      <div>
                        <span className="text-sm font-bold sm:text-base">{mod.title}</span>
                        <div className="text-xs text-muted-foreground">{mod.topics.length} mavzu</div>
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

      {/* ===== 12. TEACHER ===== */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/30" data-testid="section-teacher">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold sm:text-3xl">Sizga amaliyotchi ekspertlar dars beradi</h2>
          <div className="overflow-hidden rounded-3xl border bg-white shadow-md dark:bg-card">
            <div className="grid lg:grid-cols-[auto_1fr] items-center">
              <div className="h-48 overflow-hidden lg:h-56 lg:w-48">
                <img src={mentor.avatar} alt={mentor.name} className="h-full w-full object-cover object-top" loading="lazy" />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-extrabold" data-testid="text-teacher-name">{mentor.name}, kurs muallifi</h3>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "1C: Buxgalteriya bo'yicha sertifikatlangan mutaxassis, 15 yillik tajriba",
                    "Investitsiya banklarida moliyaviy modellashtirish bo'yicha ishlagan",
                    "O'zbekistondagi yetakchi kompaniyalarda 1C tizimlarini joriy etgan",
                    "CFA Level 3 sertifikati egasi",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm" data-testid={`teacher-point-${i}`}>
                      <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      </div>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Support team */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {course.supportTeam.map((person, i) => (
              <div key={i} className="flex items-center gap-4 rounded-2xl border bg-white p-4 shadow-sm dark:bg-card" data-testid={`support-${i}`}>
                <img src={person.avatar} alt={person.role} className="h-14 w-14 shrink-0 rounded-xl object-cover object-top" loading="lazy" />
                <div>
                  <div className="text-sm font-bold">{person.role}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground leading-snug">{person.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 13. PRICING + FORM ===== */}
      <section className="bg-gradient-to-br from-slate-800 via-blue-950 to-slate-900 py-16" data-testid="section-pricing">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
            {/* Pricing info */}
            <div>
              <p className="mb-2 text-sm text-slate-400">O'qishga yozilish</p>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Kursni oling yoki konsultatsiya oling</h2>

              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-4">3 oy o'qish</p>
                <div className="mb-2 flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-white" data-testid="text-pricing-price">{course.price} UZS</span>
                  <span className="text-sm text-slate-400 line-through">{course.oldPrice} UZS</span>
                  <Badge className="rounded-lg bg-rose-500 px-2 py-0.5 text-xs font-bold text-white">-{course.discount}</Badge>
                </div>
                <p className="text-xs text-slate-400 mb-6">Yoki bo'lib to'lash: oyiga 834 000 UZS dan</p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Arzonroq topdingizmi? Chegirma qilamiz",
                    "Kurs mos kelmasa, 7 kun ichida pul qaytarish",
                    "Bo'lib to'lash imkoniyati — foizsiz",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300" data-testid={`pricing-guarantee-${i}`}>
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" /> {item}
                    </li>
                  ))}
                </ul>
                <Link href="#enroll">
                  <Button size="lg" className="w-full rounded-xl bg-blue-600 font-bold text-white hover:bg-blue-700" data-testid="button-pricing-enroll">
                    Yozilish <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Consultation form */}
            <div className="rounded-2xl bg-white p-6 shadow-2xl dark:bg-card" data-testid="card-pricing-form">
              <h3 className="mb-1 text-lg font-bold">O'qishni to'lash yoki konsultatsiya olish</h3>
              <p className="mb-4 text-sm text-muted-foreground">Menejerimiz siz bilan bog'lanadi</p>
              <LeadForm source="course-1c-pricing" buttonText="Yozilish" />
              <p className="mt-3 text-center text-xs text-muted-foreground">Allaqachon akkauntingiz bormi? <span className="text-blue-600 cursor-pointer">Kirish</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 14. FAQ ===== */}
      <section className="py-14 sm:py-20" data-testid="section-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold sm:text-3xl">Savollaringizga javob beramiz</h2>

          {/* Tab filter */}
          <div className="mb-8 flex gap-2">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFaqTab(cat)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${activeFaqTab === cat ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "border border-slate-200 bg-white text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:bg-card dark:text-slate-300"}`}
                data-testid={`faq-tab-${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-0 divide-y">
              {FAQS[activeFaqTab]?.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-none py-1" data-testid={`faq-item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold py-5 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center" data-testid="section-final-cta">
            <h3 className="text-xl font-extrabold text-white sm:text-2xl">Hali savollaringiz bormi?</h3>
            <p className="mt-2 text-blue-100">Menejerimiz barcha tafsilotlarni tushuntiradi</p>
            <Link href="#enroll">
              <Button size="lg" className="mt-5 rounded-full bg-white px-8 font-bold text-blue-700 hover:bg-slate-100" data-testid="button-final-cta">
                Bepul konsultatsiya <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
