import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import CourseBlogLinks from "@/components/course-blog-links";
import CourseRelated from "@/components/course-related";
import CourseFormatSection from "@/components/course-format-section";
import CourseBonusesSection from "@/components/course-bonuses-section";
import { useLanguage } from "@/contexts/language-context";
import LeadForm from "@/components/lead-form";
import YouTubeEmbed from "@/components/youtube-embed";
import { faqItems } from "@/lib/data";
import {
  CheckCircle2, ArrowRight, ChevronRight, Scale, FileText,
  Monitor, Clock, Award, Users, Laptop, MessageSquare,
  Star, Building2, Shield, BookOpen, Globe
} from "lucide-react";

const COURSE_INFO = [
  { label: "Yaqinroq yozilish", value: "10-mart" },
  { label: "O'qish muddati", value: "1 yil" },
  { label: "O'qish formati", value: "Masofaviy" },
  { label: "Tugatgandan so'ng hujjat", value: "Rasmiy diplom" },
  { label: "Soatlar soni", value: "1600 soat" },
];

const FOR_WHOM = [
  {
    emoji: "👔",
    title: "Yuridik karyerani endigina boshlayotgan yosh mutaxassislar uchun",
    desc: "Nazariy bilimlaringizni mustahkamlang, qo'shimcha amaliy ko'nikmalar oling, yuridik hujjatlar bilan ishlashda professional yondashuvni rivojlantiring va malakangizni oshiring.",
  },
  {
    emoji: "🚀",
    title: "Yangi kasbni noldan egallashni xohlayotganlar uchun",
    desc: "Nufuzli kasbga ega bo'lish uchun zarur bilimlarni olasiz va sevimli ishingiz bilan daromad topishni boshlaysiz.",
  },
  {
    emoji: "💼",
    title: "Biznes va moliya sohasidagi mutaxassislar uchun",
    desc: "Yuridik hujjatlar bilan qanday to'g'ri ishlashni, qonunchilik normalariga qanday rioya qilishni, yuridik risklarni qanday minimallashtirish va mumkin bo'lgan yuridik muammolardan qochishni tushunasiz.",
  },
  {
    emoji: "🎓",
    title: "Huquqni o'rganayotgan talabalar uchun",
    desc: "Yurispprudensiya sohasida fundamental bilimlar olishni istayotganlar va amaliy ko'nikmalarini chuqurlashtirmoqchi bo'lganlar uchun.",
  },
];

const SKILLS = [
  { emoji: "⚖️", text: "Fuqarolik huquqini o'rganish" },
  { emoji: "🔒", text: "Jinoyat huquqini o'rganish" },
  { emoji: "📋", text: "Yurist professional etikasini egallash" },
  { emoji: "🔍", text: "Kriminalistikani o'rganish" },
  { emoji: "📜", text: "Notariat asoslarini o'rganish" },
  { emoji: "💡", text: "Intellektual mulk huquqini o'rganish" },
];

const ABOUT_FEATURES = [
  {
    emoji: "📰",
    title: "Faqat dolzarb kontent",
    desc: "Biz muntazam ravishda bozordagi o'zgarishlarni kuzatib boramiz va dasturlarni yangi voqelikka moslashtirамiz. Ichki tadqiqotlar o'tkazib, dasturlarni ish beruvchilar talablariga moslashtirамiz.",
  },
  {
    emoji: "🖥️",
    title: "Qulay masofaviy format",
    desc: "Dastur asosiy faoliyatdan uzmay, masofaviy formatda qulay o'tishi uchun ishlab chiqilgan. O'quv bloklari kundalik tartibga osongina kiritilishi uchun yozuvlarda mavjud.",
  },
  {
    emoji: "⚡",
    title: "Tezroq o'rganing",
    desc: "Dasturni intensiv tarzda o'tish mumkin — standart dasturlardagi bir xil bilim va ko'nikmalarni ikki baravar tezroq olasiz. O'qish narxi o'zgarishsiz qoladi.",
  },
];

const CURRICULUM_SUBJECTS = [
  "Davlat va huquq nazariyasi",
  "Ma'muriy huquq",
  "Fuqarolik huquqi",
  "Mehnat huquqi",
  "Oila huquqi",
  "Konstitutsiyaviy huquq",
];

const TRAINING_STEPS = [
  {
    icon: FileText,
    title: "Onlayn hujjatlar topshirish",
    desc: "Masofaviy o'qish formati barcha hujjatlarni masofadan turib topshirish imkonini beradi.",
  },
  {
    icon: Monitor,
    title: "Yetakchi ekspertlar videoleksiyalarini ko'ring",
    desc: "Har bir talabaning shaxsiy kabineti bor, u erda leksiyalar o'tkaziladi. Barcha mashg'ulotlar yozuvlari o'qish oxirigacha shaxsiy kabinetda saqlanadi.",
  },
  {
    icon: BookOpen,
    title: "Ko'rgazmali ekspert materiallarni o'rganing",
    desc: "Ekspert material dalillarga asoslangan yondashuv (advocacy-based approach) bilan tayyorlangan va o'rganish uchun intuitiv.",
  },
  {
    icon: Clock,
    title: "O'quv vaqtini o'zingiz rejalashtiring",
    desc: "O'qish vaqtini hayot tarzingizga mos ravishda mustaqil taqsimlashingiz va qulay sharoitda o'rganishingiz mumkin.",
  },
];

const FBA_BENEFITS = [
  { icon: Globe, title: "Masofaviy ta'lim", desc: "Dunyoning istalgan nuqtasidan o'qishingiz mumkin" },
  { icon: Shield, title: "Soliq imtiyozi", desc: "O'qish xarajatlarining bir qismini qaytarish imkoniyati" },
  { icon: Building2, title: "Moslashtirilgan dasturlar", desc: "Ish beruvchilar talablariga mos ta'lim dasturlari" },
  { icon: MessageSquare, title: "Mentor va kurator", desc: "Kurs bo'yicha savollar uchun mentor bilan chat va kurator yordami" },
];

const TEACHERS = [
  {
    name: "Malika Yusupova",
    role: "Huquq fanlari nomzodi, 18+ yillik tajriba",
    desc: "Huquqiy platformalardagi maqolalar muallifi. 18 yildan ortiq amaliy tajriba. Fuqarolik va tijorat huquqi bo'yicha mutaxassis.",
    initials: "MY",
    color: "from-amber-600 to-yellow-700",
  },
  {
    name: "Jahongir Raxmatullayev",
    role: "Advokat, huquq fanlari nomzodi",
    desc: "20 yildan ortiq amaliy tajribaga ega advokat. Moliyaviy huquq bo'yicha mutaxassis. Huquq fakultetida dars beradi.",
    initials: "JR",
    color: "from-orange-600 to-amber-700",
  },
  {
    name: "Dilnoza Xasanova",
    role: "Amaliyotchi yurist va maslahatchi",
    desc: "Amaliyotchi yurist, o'qituvchi, huquq va biznesni yuridik qo'llab-quvvatlash masalalari bo'yicha maslahatchi. Huquqiy konsaltingda 10+ yil. O'quv qo'llanmalari muallifi.",
    initials: "DX",
    color: "from-rose-500 to-pink-600",
  },
];

const PRICING_FEATURES = [
  { icon: Globe, text: "Dunyoning istalgan nuqtasidan masofaviy o'qish" },
  { icon: Shield, text: "Soliq imtiyozidan foydalanish imkoniyati" },
  { icon: Clock, text: "1 yil o'qish muddati" },
  { icon: Award, text: "Rasmiy diplom" },
  { icon: Users, text: "To'liq qaytarish — birinchi ikki hafta ichida" },
  { icon: MessageSquare, text: "0% foiz bilan bo'lib to'lash" },
];

const FAQ_ITEMS = [
  {
    q: "O'quv yurtiga kelish shart emasmi?",
    a: "O'qish uchun shaxsiy ishtirok talab etilmaydi. Talabalarning hujjatlar topshirishdan tortib diplom himoyasiga qadar barcha ishi masofadan amalga oshiriladi.",
  },
  {
    q: "Xorijiy fuqarolar o'qiy oladimi?",
    a: "Ha, masofaviy format xorijiy fuqarolarga, shu jumladan O'zbekiston fuqarolariga ham o'qish imkonini beradi. Hujjatlarni onlayn topshirish mumkin.",
  },
  {
    q: "Boshqa mamlakatdan to'lash mumkinmi?",
    a: "Ha, to'lovni turli xalqaro to'lov tizimlari orqali amalga oshirish mumkin. Batafsil ma'lumot uchun bizning menejerlarimizga murojaat qiling.",
  },
  {
    q: "Nastavnik va texnik yordam bo'ladimi?",
    a: "Ha, har bir talabaga mentor va kurator biriktiriladi. Kurs davomida barcha savollaringizga javob olasiz. Texnik muammolar bo'lsa, texnik yordam xizmati ishlaydi.",
  },
  {
    q: "O'qishni qanday tezlashtirish mumkin?",
    a: "Dasturni intensiv tarzda o'tish mumkin — standart dasturlardagi bir xil bilim va ko'nikmalarni ikki baravar tezroq olasiz. Narxi o'zgarishsiz qoladi.",
  },
  {
    q: "Bo'lib to'lash imkoni bormi?",
    a: "Ha, 12 oyga 0% foiz bilan bo'lib to'lash imkoni mavjud. Butun summani bir to'lovda to'lasangiz 10% chegirma beriladi.",
  },
];

const LAW_BONUSES = [
  {
    logo: "⚖️",
    nameUz: "O'zbekiston Huquqiy Bazasi",
    nameRu: "Правовая база Узбекистана",
    nameEn: "Uzbekistan Legal Database",
    descUz: "Asosiy qonunlar, kodekslar va normativ hujjatlarning to'liq to'plami",
    descRu: "Полная подборка основных законов, кодексов и нормативных актов",
    descEn: "Complete collection of main laws, codes and regulatory documents",
    durationUz: "1 yillik kirish",
    durationRu: "Доступ на 1 год",
    durationEn: "1 year access",
    priceUz: "350 000 so'm",
    priceRu: "3,500 ₽",
    priceEn: "$35",
  },
  {
    logo: "📝",
    nameUz: "Shartnoma Shablonlari To'plami",
    nameRu: "Набор шаблонов договоров",
    nameEn: "Contract Templates Collection",
    descUz: "Biznes, mehnat va fuqarolik shartnomalarining 50+ tayyor shablonlari",
    descRu: "50+ готовых шаблонов бизнес, трудовых и гражданских договоров",
    descEn: "50+ ready business, employment and civil contract templates",
    durationUz: "Abadiy kirish",
    durationRu: "Пожизненный доступ",
    durationEn: "Lifetime access",
    priceUz: "250 000 so'm",
    priceRu: "2,500 ₽",
    priceEn: "$25",
  },
  {
    logo: "🏢",
    nameUz: "Soliq Va Bojxona Huquqi Qo'llanmasi",
    nameRu: "Практическое руководство по налоговому и таможенному праву",
    nameEn: "Tax & Customs Law Practical Guide",
    descUz: "Soliq va bojxona qonunchiligini amalda qo'llash bo'yicha step-by-step qo'llanma",
    descRu: "Пошаговое руководство по практическому применению налогового и таможенного законодательства",
    descEn: "Step-by-step guide to practical application of tax and customs legislation",
    durationUz: "6 oylik kirish",
    durationRu: "Доступ на 6 месяцев",
    durationEn: "6 months access",
    priceUz: "300 000 so'm",
    priceRu: "3,000 ₽",
    priceEn: "$30",
  },
];

export default function JurisprudencePage() {
  const { t } = useLanguage();
  useSEO({
    title: "Huquqshunoslik Kursi — Fuqarolik, Jinoyat, Ma'muriy Huquq | FBA Academy",
    description: "Huquqshunoslik kursi O'zbekistonda: Fuqarolik, Jinoyat, Ma'muriy, Mehnat va Oila huquqi. Masofaviy o'qish, 1600 soat, rasmiy diplom. Noldan yurist bo'lish uchun.",
    keywords: "huquqshunoslik kursi, yurist kursi O'zbekiston, fuqarolik huquqi, jinoyat huquqi, masofaviy huquq kursi, FBA Academy",
    breadcrumb: [
      { name: "Kurslar", url: "https://fbaacademy.uz/courses" },
      { name: "Huquqshunoslik", url: "https://fbaacademy.uz/course/jurisprudence" },
    ],
    jsonLd: [
      {
        "@type": "Course",
        "name": "Huquqshunoslik — Jurisprudence",
        "description": "Fuqarolik, Jinoyat, Ma'muriy, Mehnat va Oila huquqi. 1600 soat, masofaviy format, rasmiy diplom.",
        "url": "https://fbaacademy.uz/course/jurisprudence",
        "provider": { "@type": "Organization", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
        "educationalLevel": "Beginner",
        "timeRequired": "P5M",
        "inLanguage": "uz",
        "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
          "coursePrerequisites": "Oliy malumot yoki talaba bolish kifoya.",
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "blended",
            "duration": "P5M",
            "startDate": "2026-04-01",
            "location": {
              "@type": "Place",
              "name": "FBA Academy",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Yunusabad tumani",
                "addressLocality": "Toshkent",
                "addressCountry": "UZ"
              }
            },
            "instructor": { "@type": "Person", "name": "Nilufar Rahimova", "jobTitle": "Huquqshunos, Magistr" },
            "offers": {
              "@type": "Offer",
              "price": "2000000",
              "priceCurrency": "UZS",
              "availability": "https://schema.org/InStock",
            },
          },
          "educationalCredentialAwarded": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certificate",
            "name": "Huquqshunoslik Professional Sertifikati",
            "recognizedBy": { "@type": "Organization", "name": "FBA Academy" }
          },
          "totalHistoricalEnrollment": 420,
          "courseCode": "JUR-001",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "420",
          "bestRating": "5",
          "worstRating": "1",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Bosh sahifa", "item": "https://fbaacademy.uz" },
          { "@type": "ListItem", "position": 2, "name": "Kurslar", "item": "https://fbaacademy.uz/courses" },
          { "@type": "ListItem", "position": 3, "name": "Huquqshunoslik", "item": "https://fbaacademy.uz/course/jurisprudence" },
        ],
      },
    ],
  });

  return (
    <Layout>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-zinc-900 py-10 sm:py-14" data-testid="section-law-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-zinc-400">
            <Link href="/" className="hover:text-white" data-testid="breadcrumb-home">Bosh sahifa</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/courses" className="hover:text-white" data-testid="breadcrumb-courses">Kurslar</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-white">Huquqshunoslik</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14 lg:items-start">
            {/* Left */}
            <div>
              <div className="mb-2 flex flex-wrap gap-2">
                <Badge className="rounded-full border-amber-500/30 bg-amber-900/20 text-amber-300">⚖️ Kurs</Badge>
                <Badge className="rounded-full border-slate-200 bg-[#111] text-zinc-400">Masofaviy format</Badge>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight" data-testid="text-law-title">
                Huquqshunoslik
              </h1>
              <p className="mt-4 max-w-xl text-zinc-400 leading-relaxed">
                Huquqshunoslik kursi ushbu bilim sohasining asosiy tushunchalarini o'zlashtirishni istaydigan tinglovchilar uchun foydali bo'ladi. O'quv dasturiga davlat va huquq nazariyasi, shuningdek konstitutsiyaviy, fuqarolik, oila, mehnat, jinoyat va ma'muriy huquqning alohida muhim tarmoqlari bo'yicha asoslar kiradi.
              </p>

              {/* Course info table */}
              <div className="mt-6 overflow-hidden rounded-2xl border" data-testid="course-info-table">
                {COURSE_INFO.map((item, i) => (
                  <div key={i} className={`flex items-center justify-between px-5 py-3.5 ${i % 2 === 0 ? "bg-[#111]" : "bg-zinc-900"}`}>
                    <span className="text-sm text-zinc-500">{item.label}</span>
                    <span className="text-sm font-bold text-white">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#pricing">
                  <Button className="gap-2 rounded-full bg-amber-600 px-6 font-bold text-white hover:bg-amber-700" data-testid="button-law-enroll">
                    Kursga yozilish <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#curriculum">
                  <Button variant="outline" className="rounded-full border-2 px-6 font-bold" data-testid="button-law-program">
                    Dasturni ko'rish
                  </Button>
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-xl" data-testid="card-law-form">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-extrabold">Konsultatsiya olish</h3>
                <Badge className="rounded-full border-green-200 bg-green-50 text-green-700 font-semibold text-xs">Bepul</Badge>
              </div>
              <div className="mb-4 rounded-xl bg-amber-900/20 border border-amber-500/30 px-4 py-3">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wide">📅 Yaqinroq yozilish</div>
                <div className="text-base font-extrabold text-amber-200 mt-0.5">10-mart, 2026</div>
              </div>
              <LeadForm source="course-jurisprudence" buttonText="Ariza topshirish" />
              <p className="mt-3 text-center text-xs text-zinc-400">Ariza topshirish bilan siz shaxsiy ma'lumotlarni qayta ishlashga rozilik bildirasiz</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOR WHOM ─────────────────────────────────────────── */}
      <section className="bg-[#111] py-14 sm:py-20" data-testid="section-law-for-whom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-law-for-whom-title">
            Bu dastur kimlar uchun?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {FOR_WHOM.map((item, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-zinc-900 p-6 hover:shadow-md transition-shadow" data-testid={`for-whom-card-${i}`}>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-900/20 text-2xl border border-amber-500/20">
                  {item.emoji}
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-law-skills">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-law-skills-title">
                Nimalarga o'rganasiz?
              </h2>
              <div className="space-y-3">
                {SKILLS.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 shadow-sm" data-testid={`skill-item-${i}`}>
                    <span className="text-2xl">{skill.emoji}</span>
                    <span className="text-sm font-semibold text-zinc-200">{skill.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <YouTubeEmbed videoId="eTriMFVGcYg" title="Huquqshunoslik kursi haqida" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT TRAINING ───────────────────────────────────── */}
      <section className="bg-stone-50 py-14 sm:py-20" data-testid="section-law-about">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-law-about-title">
            O'qish haqida
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {ABOUT_FEATURES.map((f, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900" data-testid={`about-feature-${i}`}>
                <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 to-yellow-500" />
                <div className="p-6">
                  <div className="mb-3 text-3xl">{f.emoji}</div>
                  <h3 className="text-base font-extrabold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
                  {i === 2 && (
                    <a href="#pricing" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300">
                      Batafsil ma'lumot <ArrowRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ───────────────────────────────────────── */}
      <section id="curriculum" className="py-14 sm:py-20" data-testid="section-law-curriculum">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-law-curriculum-title">
            Kursning qisqa dasturi
          </h2>
          <p className="mb-8 text-zinc-500 text-sm max-w-2xl">
            O'qitadigan amaliyotlar va kurs quriladigan metodologiya nafaqat o'qituvchilarning amaliy tajribasi, balki ilmiy tadqiqotlar bilan ham sinovdan o'tgan.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl">
            {CURRICULUM_SUBJECTS.map((subject, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 shadow-sm hover:border-amber-500/30 hover:shadow-md transition-all" data-testid={`curriculum-subject-${i}`}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-800/40 text-sm font-extrabold text-amber-300">
                  {i + 1}
                </div>
                <span className="text-sm font-semibold text-zinc-200">{subject}</span>
              </div>
            ))}
          </div>
          {/* CTA for full program */}
          <div className="mt-8 max-w-3xl rounded-2xl border border-amber-500/30 bg-amber-900/20 p-6" data-testid="curriculum-cta">
            <h3 className="text-base font-extrabold text-amber-200">To'liq o'quv rejasini oling</h3>
            <p className="mt-1 text-sm text-amber-400 mb-4">Kontakt ma'lumotlaringizni qoldiring, biz to'liq o'quv rejasini yuboramiz</p>
            <LeadForm source="course-jurisprudence-curriculum" buttonText="To'liq dasturni olish" compact />
          </div>
        </div>
      </section>

      {/* ── TRAINING ORDER ───────────────────────────────────── */}
      <section className="bg-[#111] py-14 sm:py-20" data-testid="section-law-training-order">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-law-order-title">
            O'qish tartibi
          </h2>
          <p className="mb-8 text-zinc-500 text-sm">Kursga kirgan paytdan diplom olguncha</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TRAINING_STEPS.map((step, i) => (
              <div key={i} className="relative rounded-2xl border border-white/10 bg-zinc-900 p-6" data-testid={`training-step-${i}`}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-800/40">
                  <step.icon className="h-6 w-6 text-amber-400" />
                </div>
                <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-amber-600 text-xs font-extrabold text-white">
                  {i + 1}
                </div>
                <h3 className="text-sm font-extrabold text-white">{step.title}</h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FBA BENEFITS ─────────────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-law-fba-benefits">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-law-fba-benefits-title">
            FBA Academy da o'qish — bu:
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FBA_BENEFITS.map((b, i) => (
              <div key={i} className="flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-zinc-900 p-6 hover:shadow-md transition-shadow" data-testid={`fba-benefit-${i}`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-900/20 border border-amber-500/20">
                  <b.icon className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white">{b.title}</h3>
                  <p className="mt-1 text-xs text-zinc-500">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEACHERS ─────────────────────────────────────────── */}
      <section className="bg-[#111] py-14 sm:py-20" data-testid="section-law-teachers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-law-teachers-title">
            O'qituvchilar
          </h2>
          <p className="mb-8 text-zinc-500 text-sm">7 yildan 25 yilgacha tajribaga ega yetakchi o'zbek va xalqaro ekspertlar o'qitadi</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {TEACHERS.map((t, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900" data-testid={`teacher-card-${i}`}>
                <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${t.color}`}>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-2xl font-extrabold text-white ring-4 ring-white/30">
                    {t.initials}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-extrabold text-white">{t.name}</h3>
                  <div className="mt-0.5 text-xs font-semibold text-amber-400">{t.role}</div>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LICENSE & DIPLOMA ────────────────────────────────── */}
      <section className="py-14" data-testid="section-law-diploma">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* License */}
            <div className="rounded-2xl border border-amber-500/30 bg-amber-900/20 p-6" data-testid="license-card">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-800/40">
                  <Shield className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">Ta'lim litsenziyasi</h3>
                  <div className="text-xs text-amber-400 font-medium">Davlat tomonidan berilgan</div>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                FBA Academy ta'lim faoliyatini olib borish uchun rasmiy litsenziyaga ega. Litsenziyani Ta'lim nazorati xizmatining rasmiy saytida tekshirishingiz mumkin.
              </p>
            </div>
            {/* Diploma */}
            <div className="rounded-2xl border border-slate-200 bg-zinc-900 p-6 shadow-sm" data-testid="diploma-card">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0d0d0d]">
                  <Award className="h-6 w-6 text-zinc-400" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">O'qish yakunidagi hujjatlar</h3>
                  <div className="text-xs text-zinc-500 font-medium">Belgilangan namunadagi diplom</div>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Bitiruv testlarini muvaffaqiyatli topshirgandan so'ng talabalar o'z kompetensiya darajasini tasdiqlovchi hujjat oladilar — professional qayta tayyorlash diplomi.
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                Rezyumega ko'rsatishingiz mumkin
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREER ───────────────────────────────────────────── */}
      <section className="bg-stone-900 py-12" data-testid="section-law-career">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-xl font-extrabold text-white sm:text-2xl" data-testid="text-law-career-title">
            Kim bo'lib ishlashingiz mumkin
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Yurist", "Huquqiy maslahatchi", "Korporativ huquqshunos", "Adliya xodimi", "Notarius yordamchisi", "Kompaniya ichki huquqshunosi"].map((role, i) => (
              <div key={i} className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors" data-testid={`career-role-${i}`}>
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section id="pricing" className="py-14 sm:py-20" data-testid="section-law-pricing">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-law-pricing-title">
            O'qish narxi
          </h2>
          <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
            {/* Pricing info */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
                <div className="bg-amber-600 px-6 py-4 text-white">
                  <div className="text-xs font-bold uppercase tracking-wide opacity-80">12 oyga bo'lib to'lashda</div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold" data-testid="text-law-price">990 000</span>
                    <span className="text-lg font-bold">so'm/oy</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between rounded-xl bg-[#111] px-4 py-3 mb-4">
                    <span className="text-sm text-zinc-400">Bir to'lovda to'lashda</span>
                    <span className="text-sm font-extrabold text-green-600">10% chegirma</span>
                  </div>
                  <div className="grid gap-3">
                    {PRICING_FEATURES.map((f, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-zinc-300">
                        <f.icon className="h-4 w-4 shrink-0 text-amber-500" /> {f.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* 0% installment badge */}
              <div className="rounded-2xl border border-blue-500/30 bg-blue-900/20 px-5 py-4 flex items-center gap-3">
                <div className="text-2xl">💳</div>
                <div>
                  <div className="text-sm font-extrabold text-blue-200">T-Bank dan bo'lib to'lash</div>
                  <div className="text-xs text-blue-300">Foizsiz, qo'shimcha to'lovlarsiz</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-xl" data-testid="card-law-pricing-form">
              <h3 className="mb-4 text-lg font-extrabold">Kursga yozilish yoki bepul konsultatsiya</h3>
              <LeadForm source="course-jurisprudence-pricing" buttonText="Ariza topshirish" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CORPORATE CTA ────────────────────────────────────── */}
      <section className="bg-[#111] border-y border-white/10 py-10" data-testid="section-law-corporate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-lg font-extrabold text-white sm:text-xl" data-testid="text-law-corporate-title">
                Xodimlar uchun dastur kerakmi?
              </h2>
              <p className="mt-1 text-sm text-zinc-400">
                Agar o'z xodimlaringizni o'qitishni tashkil qilish kerak bo'lsa — ariza qoldiring. Biz siz uchun individual taklif tayyorladik.
              </p>
            </div>
            <Link href="/corporate">
              <Button className="rounded-full bg-amber-600 px-6 font-bold text-white hover:bg-amber-700 whitespace-nowrap" data-testid="button-law-corporate">
                Ariza qoldirish <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-law-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-law-faq-title">
            {t.page.faqTitle}
          </h2>
          <div className="max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {FAQ_ITEMS.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-white/10 bg-zinc-900 px-6" data-testid={`law-faq-${i}`}>
                  <AccordionTrigger className="text-left font-semibold py-5 text-sm sm:text-base text-white hover:no-underline hover:text-purple-300">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-zinc-400 pb-5 text-sm leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 max-w-3xl rounded-2xl bg-amber-600 p-6 text-white sm:p-8" data-testid="law-faq-bottom-cta">
            <h3 className="text-lg font-extrabold sm:text-xl">Savollaringiz qoldimi?</h3>
            <p className="mt-2 text-amber-100 text-sm">Qabul komissiyasidan maslahat oling</p>
            <div className="mt-5 max-w-sm">
              <LeadForm source="course-jurisprudence-faq" buttonText="Ariza topshirish" />
            </div>
          </div>
        </div>
      </section>

      <CourseFormatSection />
      <CourseBonusesSection
        bonuses={LAW_BONUSES}
        totalUz="900 000 so'mdan ortiq"
        totalRu="Более 9 000 ₽"
        totalEn="Over $90"
      />

      <CourseRelated excludeId="jurisprudence" />

      <CourseBlogLinks color="amber" links={[
        { href: "/blog/ozbekistonda-yurist-maoshi-va-karyera", title: "O'zbekistonda yurist maoshi va karyera", readTime: "9 daqiqa" },
        { href: "/blog/xalqaro-sertifikatlar-ozbekistonda", title: "Xalqaro sertifikatlar va O'zbekistonda ish", readTime: "9 daqiqa" },
        { href: "/blog/moliyaviy-tahlilchi-bolish-yol-xaritasi", title: "Huquq sohasida karyera yo'l xaritasi", readTime: "9 daqiqa" },
      ]} />
    </Layout>
  );
}
