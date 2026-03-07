import { useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import LeadForm from "@/components/lead-form";
import YouTubeEmbed from "@/components/youtube-embed";
import { courses, teachers } from "@/lib/data";
import { CheckCircle2, ArrowRight, Star, Flame, FileText, BookOpen, Clock, Calendar, GraduationCap, Award, Building2, Users, ChevronRight, BarChart3 } from "lucide-react";
import CourseBlogLinks from "@/components/course-blog-links";
import CourseRelated from "@/components/course-related";
import CourseFormatSection from "@/components/course-format-section";
import CourseBonusesSection from "@/components/course-bonuses-section";
import { useLanguage } from "@/contexts/language-context";

const course = courses.find((c) => c.id === "dipifr")!;
const mentor = teachers.find((t) => t.id === "teacher-3")!;
const BASE_URL = "https://fbaacademy.uz";
const UNSPLASH = "https://images.unsplash.com";

const IFRS_STANDARDS = [
  { code: "IAS 1", name: "Moliyaviy hisobotlar taqdimoti", type: "Asosiy" },
  { code: "IAS 16", name: "Asosiy vositalar", type: "Asosiy" },
  { code: "IAS 36", name: "Aktivlar qiymatining pasayishi", type: "Asosiy" },
  { code: "IAS 38", name: "Nomoddiy aktivlar", type: "Asosiy" },
  { code: "IFRS 9", name: "Moliyaviy instrumentlar", type: "Muhim" },
  { code: "IFRS 15", name: "Mijozlar bilan shartnomalar daromadi", type: "Muhim" },
  { code: "IFRS 16", name: "Ijaralar", type: "Muhim" },
  { code: "IFRS 3", name: "Biznes birlashmalari", type: "Murakkab" },
  { code: "IFRS 10", name: "Konsolidatsiyalangan moliyaviy hisobotlar", type: "Murakkab" },
  { code: "IAS 19", name: "Xodimlar uchun to'lovlar", type: "O'rta" },
  { code: "IAS 37", name: "Zaxiralar va shartli majburiyatlar", type: "O'rta" },
  { code: "IAS 21", name: "Chet el valyutasi kurslari ta'siri", type: "O'rta" },
];

const TYPE_COLORS: Record<string, string> = {
  "Asosiy": "bg-indigo-800/40 text-indigo-300 border-indigo-500/30",
  "Muhim": "bg-emerald-800/40 text-emerald-300 border-emerald-500/30",
  "Murakkab": "bg-rose-900/30 text-rose-300 border-rose-500/30",
  "O'rta": "bg-amber-800/40 text-amber-300 border-amber-500/30",
};

const HERO_BADGES = [
  "🎓 ACCA Akkreditatsiyalangan kurs",
  "✅ Xalqaro diplom — IFRS",
];

const HERO_BULLETS = [
  "87% bitiruvchilar DipIFR-rus imtihonini muvaffaqiyatli topshiradilar",
  "2 yillik o'quv materiallariga kirish — istalgan vaqtda o'rganish",
  "Xalqaro kompaniyalar va Big Four audit firmalari uchun sertifikat",
];

const COURSE_FEATURES = [
  {
    icon: BookOpen,
    title: "IFRS bo'yicha fundamental bilimlar",
    desc: "Xalqaro moliyaviy hisobot standartlarining to'liq tizimi, IASB kontseptual asoslari va amaliy qo'llanishi.",
  },
  {
    icon: FileText,
    title: "Imtihon uchun intensiv tayyorgarlik",
    desc: "DipIFR-rus imtihon topshiriqlarini hal qilish, vaqtni boshqarish va javoblarni to'g'ri rasmiylashtirishni o'rganasiz.",
  },
  {
    icon: BarChart3,
    title: "5 ta yirik amaliy loyiha",
    desc: "Real kompaniyalar misolida konsolidatsiya, moliyaviy hisobot va IFRS standartlarini qo'llash.",
  },
  {
    icon: GraduationCap,
    title: "ACCA tomonidan tan olingan diplom",
    desc: "Xalqaro kompaniyalar, Big Four va moliya institutlari qabul qiladigan ACCA DipIFR diplomi.",
  },
  {
    icon: Users,
    title: "Jonli darslar va vebinarlar",
    desc: "Haftasiga 2 marta jonli dars + yozuvlarga doimiy kirish. Savollaringizga darhol javob.",
  },
  {
    icon: Award,
    title: "Yilda 2 marta imtihon imkoniyati",
    desc: "ACCA DipIFR-rus imtihoniga yil davomida 2 marta (iyun va dekabr) yozilish imkoniyati.",
  },
];

const FOR_WHOM = [
  {
    emoji: "📊",
    title: "Buxgalterlar va bosh buxgalterlar",
    desc: "Milliy standartlarda ishlaydigan, IFRS ga o'tmoqchi bo'lgan yoki allaqachon o'tganlar. MFHS bo'yicha mutaxassis bo'lmoqchi.",
  },
  {
    emoji: "🔍",
    title: "Auditorlar va iqtisodchilar",
    desc: "O'z kasbiy qiymatini oshirmoqchi, karyera imkoniyatlarini kengaytirmoqchi va ACCA DipIFR(rus) xalqaro diplomini olmoqchi.",
  },
  {
    emoji: "🏢",
    title: "Moliya va soliq xizmati xodimlari",
    desc: "Moliyaviy hisobot tayyorlash sohasida xalqaro standartlar nazariyasi va amaliyotini puxta o'rganmoqchi.",
  },
  {
    emoji: "🌍",
    title: "Xalqaro karyera uchun",
    desc: "Multinatsional kompaniyalar, investitsiya banklari va xalqaro audit firmalarida ishlashni rejalashtiradiganlar.",
  },
];

const COMPETENCIES = [
  {
    num: "01",
    title: "IFRS tamoyillari va tarkibini tushunish",
    desc: "MFHS terminologiyasida erkin muloqot qilish, moliyaviy hisobot tuzilishi va tarkibini tushunish. Moliyaviy instrumentlarni tan olish, tasniflash, o'lchash, taqdim etish bo'yicha bilim.",
    points: [
      "IASB va standartlar ishlab chiqish jarayoni",
      "Kontseptual asos — elementlar va tan olish mezonlari",
      "IAS 1 — moliyaviy hisobotlar taqdimoti",
      "Moliyaviy instrumentlar: IFRS 9, IAS 32",
    ],
  },
  {
    num: "02",
    title: "IFRS qo'llanishini tushuntira olish",
    desc: "Xalqaro moliyaviy hisobotni tartibga solishning asosiy tamoyillarini tushunish va tushuntira olish. Moliyaviy hisobot elementlarining ta'riflari va alohida moddalarni taqdim etish xususiyatlarini bilish.",
    points: [
      "IFRS talablarini amaliy holatlarga qo'llash",
      "Korporativ auditorlarga tushuntirish qobiliyati",
      "Boshqaruv uchun IFRS asosidagi tahlil",
      "Xalqaro standartlarga o'tish masalalari (IFRS 1)",
    ],
  },
  {
    num: "03",
    title: "IFRS ni amaliyotda erkin qo'llash",
    desc: "Deyarli barcha moliyaviy hisobot elementlari bo'yicha operatsiyalarni hisobga olish va hisobot berishda IFRS ni mustaqil qo'llash. Asosiy MFHS hisob-kitoblarini amalga oshirish.",
    points: [
      "Konsolidatsiya: IFRS 10, IFRS 3 asosida",
      "Lizing hisobi: IFRS 16 to'liq qo'llanishi",
      "Qiymatning pasayishi: IAS 36 testlari",
      "Moliyaviy natijalar hisoboti va tahlili",
    ],
  },
  {
    num: "04",
    title: "DipIFR imtihon topshiriqlarini yechish",
    desc: "Intensiv treningda MFHS nazariyasi va amaliyoti bo'yicha barcha bilim va ko'nikmalar tartibga tushadi. Imtihon topshiriqlarini hal qilish, javoblarni to'g'ri rasmiylashtirish va vaqtni samarali boshqarish.",
    points: [
      "Imtihon vaqtini boshqarish strategiyasi",
      "Topshiriqlarni to'g'ri rasmiylashtirish",
      "Onlayn imtihon simulyatori bilan mashq",
      "O'tgan yillar imtihon topshiriqlari tahlili",
    ],
  },
];

const COURSE_COMPONENTS = [
  {
    num: "1",
    title: "«MFHS» — Fundamental bilimlar",
    desc: "Xalqaro moliyaviy hisobot standartlari bo'yicha fundamental bilimlar. IFRS tizimini asosidan professional darajagacha.",
    color: "from-indigo-600 to-blue-700",
  },
  {
    num: "2",
    title: "«DipIFR. Intensiv» — Imtihon tayyorgarligi",
    desc: "MFHS bo'yicha bilimlarni tizimlashtirish, DipIFR-rus sessiyasida topshiriqlarni tez hal qilish va javoblarni to'g'ri taqdim etish ko'nikmalarini shakllantirish.",
    color: "from-blue-700 to-slate-800",
  },
  {
    num: "3",
    title: "Online imtihon simulyatori",
    desc: "ACCA DipIFR onlayn imtihon muhitining funksionalini o'zlashtirish va onlayn imtihonga tayyorlikni tekshirish uchun trenajer.",
    color: "from-slate-700 to-indigo-900",
  },
];

const DIPIFR_BONUSES = [
  {
    logo: "📚",
    nameUz: "IFRS Standartlar Bazasi",
    nameRu: "База стандартов МСФО",
    nameEn: "IFRS Standards Database",
    descUz: "Barcha asosiy MFHS standartlarining rus tilidagi to'liq matnlari",
    descRu: "Полные тексты всех основных стандартов МСФО на русском языке",
    descEn: "Full texts of all major IFRS standards in English",
    durationUz: "6 oylik kirish",
    durationRu: "Доступ на 6 месяцев",
    durationEn: "6 months access",
    priceUz: "250 000 so'm",
    priceRu: "2,500 ₽",
    priceEn: "$25",
  },
  {
    logo: "📊",
    nameUz: "Excel Shablon To'plami",
    nameRu: "Набор Excel-шаблонов",
    nameEn: "Excel Templates Pack",
    descUz: "Konsolidatsiya, IFRS konversiya va DipIFR topshiriqlari uchun tayyor shablonlar",
    descRu: "Готовые шаблоны для консолидации, конвертации МСФО и задач DipIFR",
    descEn: "Ready templates for consolidation, IFRS conversion and DipIFR tasks",
    durationUz: "Abadiy kirish",
    durationRu: "Пожизненный доступ",
    durationEn: "Lifetime access",
    priceUz: "400 000 so'm",
    priceRu: "4,000 ₽",
    priceEn: "$40",
  },
  {
    logo: "🎯",
    nameUz: "Mock Imtihon Simulyatori",
    nameRu: "Симулятор экзамена DipIFR",
    nameEn: "DipIFR Mock Exam Simulator",
    descUz: "O'tgan yillar imtihon topshiriqlari va ball berish mezonlari bilan to'liq simulyator",
    descRu: "Полный симулятор с заданиями прошлых лет и критериями оценки",
    descEn: "Full simulator with past exam questions and marking criteria",
    durationUz: "3 oylik kirish",
    durationRu: "Доступ на 3 месяца",
    durationEn: "3 months access",
    priceUz: "350 000 so'm",
    priceRu: "3,500 ₽",
    priceEn: "$35",
  },
];

const FAQ_CATEGORIES = ["O'qish", "Imtihon", "To'lov"];

const FAQS: Record<string, { q: string; a: string }[]> = {
  "O'qish": [
    { q: "Bu kurs menga mos ekanligini qanday bilaman?", a: "Ro'yxatdan o'ting va birinchi darsni bepul o'ting — format va mazmunga mos kelishini bilib olasiz. Keyin to'liq kursga yozilasiz. Mos kelmasa, menejerimiz boshqa dastur tavsiya qiladi." },
    { q: "Kurs qanday formatda o'tiladi?", a: "Onlayn jonli darslar + yozuvlar. 2 yil davomida materiallariga kirish. Telegram guruhida kurator bilan doimiy aloqa." },
    { q: "O'quv materiallarini yuklab olish mumkinmi?", a: "Ha, ma'ruza konspektlari, amaliy misollar va test materiallari yuklab olinadi. Vebinar yozuvlari platformada saqlanadiganlar." },
    { q: "Qanday qilib men siz talabangizligimni isbotlashim mumkin?", a: "O'qishdan oldin barcha talabalarga shartnoma tuziladi. Kurs yakunida yuridik shaxslar uchun bajarish dalolatnomasi, jismoniy shaxslar uchun — diplom va sertifikat beriladi." },
  ],
  "Imtihon": [
    { q: "DipIFR imtihoni yiliga necha marta bo'ladi?", a: "Yiliga 2 marta: iyun va dekabr oylarida. Ro'yxatdan o'tish ACCA rasmiy sayti orqali amalga oshiriladi." },
    { q: "DipIFR imtihonini topshira olmasam nima qilaman?", a: "Imtihon muvaffaqiyatsiz yakunlanganida, keyingi sessiyaga tayyorgarlik uchun qo'shimcha materiallar va individual konsultatsiya beriladi. Siz qayta tayyorgarlik ko'rib imtihonni topshirasiz." },
    { q: "Imtihon qaysi tilda o'tkaziladi?", a: "DipIFR-rus — rus tilida. FBA Academy da kurs o'zbek tilida o'tkaziladi, rus tilidagi terminologiya ham parallel o'rgatiladi." },
    { q: "Imtihon yakunida qanday hujjat beriladi?", a: "ACCA DipIFR (rus) diplomini ACCA rasmiy beradi — bu dunyo bo'yicha tan olingan xalqaro diplom. Bundan tashqari FBA Academy o'z sertifikatini ham beradi." },
  ],
  "To'lov": [
    { q: "Bo'lib to'lash imkoniyati bormi?", a: "Ha, bir necha variantda: to'lovni bo'lish, bank-hamkor orqali kreditga olish. Tafsilot va shartlar uchun menejerimizga murojaat qiling." },
    { q: "Kurs mos kelmasa, pulni qaytarib berasizlarmi?", a: "Ha, birinchi 7 kun ichida kurs mos kelmasa, to'liq qaytarib beramiz — hech qanday savol-javovsiz." },
    { q: "O'qish jarayonida to'lovni to'xtatish mumkinmi?", a: "Ha, sababli holatlarda o'qishni vaqtincha to'xtatish mumkin. Menejerimiz individual yechim taklif qiladi." },
  ],
};

const ALL_FAQS_FLAT = Object.values(FAQS).flat();

const SEO_SCHEMAS = [
  {
    "@type": "Course",
    "@id": `${BASE_URL}/course/dipifr#course`,
    "name": "DipIFR — ACCA Diploma in IFRS | FBA Academy Toshkent",
    "description": "ACCA DipIFR — Xalqaro Moliyaviy Hisobot Standartlari (IFRS) bo'yicha xalqaro diplom. O'zbekistonda 4 oylik kurs: IAS, IFRS standartlari, konsolidatsiya, moliyaviy hisobot. 87% o'tish darajasi.",
    "url": `${BASE_URL}/course/dipifr`,
    "thumbnailUrl": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=700&h=450&fit=crop",
    "provider": {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "FBA Academy",
      "url": BASE_URL,
    },
    "educationalLevel": "Professional",
    "teaches": [
      "IFRS (MFHS) standartlari: IAS 1, IAS 16, IFRS 9, IFRS 15, IFRS 16",
      "Moliyaviy hisobotlar konsolidatsiyasi",
      "Moliyaviy instrumentlar hisobi",
      "DipIFR-rus imtihon topshiriqlari",
      "Biznes birlashmalari va IFRS 3",
      "Xalqaro moliyaviy hisobot tayyorlash",
    ],
    "coursePrerequisites": "Buxgalteriya yoki moliya sohasidagi asosiy bilim. ACCA Applied Knowledge yoki o'xshash daraja tavsiya etiladi.",
    "timeRequired": "P4M",
    "inLanguage": "uz",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "duration": "P4M",
      "startDate": "2026-04-01",
      "instructor": {
        "@type": "Person",
        "name": "Murod Yusupov",
        "jobTitle": "ACCA Fellow, DipIFR ekspert",
      },
      "offers": {
        "@type": "Offer",
        "price": "4000000",
        "priceCurrency": "UZS",
        "availability": "https://schema.org/InStock",
      },
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "412",
      "bestRating": "5",
      "worstRating": "1",
    },
    "totalHistoricalEnrollment": 950,
    "courseCode": "DIPIFR-001",
  },
  {
    "@type": "FAQPage",
    "@id": `${BASE_URL}/course/dipifr#faq`,
    "mainEntity": ALL_FAQS_FLAT.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a },
    })),
  },
  {
    "@type": "BreadcrumbList",
    "@id": `${BASE_URL}/course/dipifr#breadcrumb`,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Bosh sahifa", "item": BASE_URL },
      { "@type": "ListItem", "position": 2, "name": "Kurslar", "item": `${BASE_URL}/courses` },
      { "@type": "ListItem", "position": 3, "name": "DipIFR", "item": `${BASE_URL}/course/dipifr` },
    ],
  },
];

export default function DipIFRPage() {
  const { t } = useLanguage();
  const [activeFaqTab, setActiveFaqTab] = useState("O'qish");

  useSEO({
    title: "DipIFR Kursi Toshkent — ACCA IFRS Xalqaro Diplom | FBA Academy",
    description: "DipIFR (ACCA) kursi O'zbekistonda. IFRS standartlari, konsolidatsiya, moliyaviy hisobot. 87% o'tish darajasi. 4 oy, 2 yil kirish, xalqaro diplom. 950+ bitiruvchi.",
    ogTitle: "DipIFR — ACCA IFRS Diplomi | O'zbekistonda Eng Yaxshi Kurs | FBA Academy",
    ogDescription: "ACCA DipIFR: xalqaro moliyaviy hisobot standartlari diplomi. 87% o'tish darajasi. 4 oy kurs, 2 yil materiallar kirishi, diplom + sertifikat. Big Four va xalqaro kompaniyalar uchun.",
    ogImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=630&fit=crop",
    keywords: "DipIFR kurs Toshkent, ACCA DipIFR O'zbekiston, IFRS diplom kurs, MFHS standartlari, xalqaro moliyaviy hisobot, IAS IFRS sertifikat, DipIFR-rus imtihon, FBA Academy DipIFR, ACCA Toshkent, Big Four audit malaka",
    publishedTime: "2024-02-01T09:00:00+05:00",
    modifiedTime: new Date().toISOString(),
    breadcrumb: [
      { name: "Kurslar", url: `${BASE_URL}/courses` },
      { name: "DipIFR", url: `${BASE_URL}/course/dipifr` },
    ],
    hreflang: [
      { lang: "uz", url: `${BASE_URL}/course/dipifr` },
      { lang: "ru", url: `${BASE_URL}/course/dipifr` },
      { lang: "en", url: `${BASE_URL}/course/dipifr` },
      { lang: "x-default", url: `${BASE_URL}/course/dipifr` },
    ],
    jsonLd: SEO_SCHEMAS,
  });

  return (
    <Layout>
      {/* ===== BREADCRUMB ===== */}
      <nav aria-label="Breadcrumb" className="border-b bg-zinc-900" data-testid="breadcrumb">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="hover:text-indigo-400 transition-colors" itemProp="item" data-testid="breadcrumb-home">
                <span itemProp="name">Bosh sahifa</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true" className="text-slate-300">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/courses" className="hover:text-indigo-400 transition-colors" itemProp="item" data-testid="breadcrumb-courses">
                <span itemProp="name">Kurslar</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <li aria-hidden="true" className="text-slate-300">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="font-semibold text-white" itemProp="name" data-testid="breadcrumb-current">DipIFR</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </div>
      </nav>

      {/* ===== 1. HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-800 to-slate-900 pb-12 pt-8 sm:pb-16 sm:pt-12" data-testid="section-dipifr-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-400/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_340px] lg:gap-6">

            {/* Left — Text */}
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                {HERO_BADGES.map((b, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm" data-testid={`badge-hero-${i}`}>{b}</span>
                ))}
              </div>
              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl" data-testid="text-dipifr-title">
                DipIFR — Diploma in<br />
                <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">International Financial Reporting</span>
              </h1>
              <ul className="mt-6 space-y-3">
                {HERO_BULLETS.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300" data-testid={`hero-bullet-${i}`}>
                    <div className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-indigo-500 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
                    </div>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#enroll">
                  <Button size="lg" className="rounded-xl bg-indigo-600 px-8 font-bold text-white shadow-lg hover:bg-indigo-700" data-testid="button-hero-enroll">
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
                <span className="text-sm text-zinc-500">{course.studentsCount} talaba · {course.duration}</span>
              </div>
            </div>

            {/* Center — image */}
            <div className="hidden lg:flex lg:items-center lg:justify-center">
              <div className="relative">
                <img
                  src={`${UNSPLASH}/photo-1590283603385-17ffb3a7f29f?w=340&h=380&fit=crop`}
                  alt="DipIFR ACCA xalqaro diplom kursi"
                  className="w-[260px] rounded-3xl object-cover shadow-2xl"
                  loading="eager"
                  fetchpriority="high"
                  data-testid="img-hero-dipifr"
                />
                <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white/95 px-5 py-3 shadow-xl backdrop-blur-sm" data-testid="stat-bubble-hero">
                  <div className="text-2xl font-extrabold text-indigo-700">87%</div>
                  <div className="text-xs text-zinc-600 leading-snug">bitiruvchilar<br/>imtihonni o'tadilar</div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div id="enroll" className="rounded-2xl bg-zinc-900 p-6 shadow-2xl" data-testid="card-dipifr-enroll">
              <div className="mb-1 flex items-start justify-between">
                <h3 className="text-base font-bold text-white">Bepul birinchi darsga yozing</h3>
                <Badge className="rounded-lg bg-rose-500 px-2.5 py-1 text-xs font-extrabold text-white shadow">-{course.discount}</Badge>
              </div>
              <div className="my-3 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-white" data-testid="text-dipifr-price">{course.price} UZS</span>
                <span className="text-sm text-zinc-400 line-through">{course.oldPrice} UZS</span>
              </div>
              <div className="mb-3 flex items-center gap-1.5 text-xs font-medium text-amber-400">
                <Flame className="h-3.5 w-3.5" /> Joylar cheklangan — chegirma muddati tugayapti
              </div>
              <LeadForm source="course-dipifr" buttonText="Konsultatsiya olish" />
              <p className="mt-3 text-center text-xs text-zinc-400">Ro'yxatdan o'tib, bepul birinchi darsni oling</p>
            </div>
          </div>

          {/* Quick info bar */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Davomiyligi", value: course.duration },
              { label: "Kirish muddati", value: "2 yil" },
              { label: "Format", value: "Onlayn · Jonli" },
              { label: "Hujjat", value: "ACCA Diplom" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm" data-testid={`quick-info-${i}`}>
                <div className="text-xs text-zinc-500 uppercase tracking-wide">{item.label}</div>
                <div className="mt-0.5 text-sm font-bold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. COURSE FEATURES ===== */}
      <section className="bg-[#111] py-14" data-testid="section-features">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white">Kursda sizni nima kutmoqda — amaliyot va kafolatli natija</h2>
          <p className="mb-10 text-zinc-400">DipIFR.Kafolat — kompleks tayyorgarlik dasturi</p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {COURSE_FEATURES.map((f, i) => (
              <div key={i} className="flex gap-4" data-testid={`feature-${i}`}>
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-indigo-500 bg-indigo-50">
                  <CheckCircle2 className="h-4 w-4 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-base font-bold leading-snug">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. WHY DIPIFR — dark + stat ===== */}
      <section className="bg-[#0d0d0d] py-14" data-testid="section-why-dipifr">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-3xl">DipIFR — O'rta Osiyo va MDHning asosiy IFRS malakasi</h2>
          <div className="overflow-hidden rounded-3xl bg-zinc-900">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[280px] overflow-hidden">
                <img
                  src={`${UNSPLASH}/photo-1554224154-26032ffc0d07?w=700&h=500&fit=crop`}
                  alt="IFRS moliyaviy hisobot mutaxassisi"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute left-6 top-6 rounded-2xl bg-white/95 px-5 py-3 shadow-xl backdrop-blur-sm" data-testid="stat-bubble">
                  <div className="text-2xl font-extrabold text-indigo-700">87%</div>
                  <div className="text-xs text-zinc-600 leading-snug">FBA Academy<br/>bitiruvchilari imtihonni o'tadilar</div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <h3 className="text-xl font-extrabold text-white sm:text-2xl">DipIFR diplomini olish uchun oldindan IT yoki ingliz tili bilimi shart emas</h3>
                <p className="mt-4 text-slate-300 leading-relaxed text-sm">
                  DipIFR-rus imtihoni rus tilida o'tkaziladi. FBA Academy da kurs o'zbek tilida, parallel ravishda rus tili terminologiyasi o'rgatiladi.
                </p>
                <p className="mt-3 text-slate-300 leading-relaxed text-sm">
                  Buxgalteriya yoki moliya sohasidagi boshlang'ich bilim kifoya. Big Four audit firmalari va xalqaro kompaniyalar DipIFR ni majburiy talab sifatida belgilaydi.
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
                      <div className="text-xs text-zinc-500">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. FOR WHOM ===== */}
      <section className="py-14 sm:py-20" data-testid="section-for-whom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white">{t.page.forWhom}</h2>
          <p className="mb-10 text-zinc-400">Xalqaro moliyaviy hisobot standartlarini o'rganmoqchi bo'lganlar uchun</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FOR_WHOM.map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900 p-6 transition-shadow hover:shadow-md" data-testid={`for-whom-${i}`}>
                <div className="mb-4 text-3xl">{item.emoji}</div>
                <h3 className="mb-2 text-base font-extrabold">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. WHAT YOU LEARN — 4 Competencies ===== */}
      <section className="bg-[#111] py-14" data-testid="section-competencies">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white">DipIFR kursida nima o'rganasiz?</h2>
          <p className="mb-10 text-zinc-400">4 ta asosiy kompetensiya — fundamental bilimdan imtihon kafolatigacha</p>
          <div className="grid gap-6 lg:grid-cols-2">
            {COMPETENCIES.map((comp, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900" data-testid={`competency-${i}`}>
                <div className="flex items-center gap-4 border-b p-5">
                  <span className="text-3xl font-extrabold text-indigo-200">{comp.num}</span>
                  <div>
                    <h3 className="text-base font-extrabold">{comp.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="mb-4 text-sm text-zinc-400 leading-relaxed">{comp.desc}</p>
                  <ul className="space-y-2">
                    {comp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                        <span className="font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. IFRS STANDARDS TABLE ===== */}
      <section className="py-14" data-testid="section-ifrs-standards">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white">O'rganiladigan IFRS/IAS standartlari</h2>
          <p className="mb-6 text-zinc-400">Kursda quyidagi asosiy standartlarni amaliyotda qo'llashni o'rganasiz</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {Object.entries(TYPE_COLORS).map(([type, color]) => (
              <Badge key={type} variant="outline" className={`rounded-full border text-xs font-semibold ${color}`}>{type}</Badge>
            ))}
          </div>
          <div className="overflow-hidden rounded-2xl border shadow-md">
            <table className="w-full text-sm" data-testid="table-ifrs-standards">
              <thead>
                <tr className="bg-indigo-950 text-white">
                  <th className="px-4 py-3 text-left font-bold">Standart</th>
                  <th className="px-4 py-3 text-left font-bold">Nomi</th>
                  <th className="px-4 py-3 text-left font-bold hidden sm:table-cell">Turi</th>
                </tr>
              </thead>
              <tbody>
                {IFRS_STANDARDS.map((std, i) => (
                  <tr key={i} className={`border-t transition-colors hover:bg-indigo-950/30 ${i % 2 === 0 ? "bg-zinc-900" : "bg-[#111]"}`} data-testid={`std-row-${i}`}>
                    <td className="px-4 py-3 font-extrabold text-indigo-300">{std.code}</td>
                    <td className="px-4 py-3 font-medium">{std.name}</td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <Badge variant="outline" className={`rounded-full border text-xs ${TYPE_COLORS[std.type]}`}>{std.type}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== 7. COURSE COMPONENTS ===== */}
      <section className="bg-[#0d0d0d] py-14" data-testid="section-components">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-3xl">DipIFR.Kafolat — kompleks dastur tarkibi</h2>
          <p className="mb-10 text-zinc-500">Uchta komponent birgalikda kafolatlangan natija beradi</p>
          <div className="grid gap-6 lg:grid-cols-3">
            {COURSE_COMPONENTS.map((comp, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-white/10" data-testid={`component-${i}`}>
                <div className={`bg-gradient-to-br ${comp.color} p-5`}>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-xl font-extrabold text-white">{comp.num}</div>
                  <h3 className="text-base font-extrabold text-white">{comp.title}</h3>
                </div>
                <div className="bg-zinc-900 p-5">
                  <p className="text-sm text-slate-300 leading-relaxed">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. VIDEO + WHY ===== */}
      <section className="py-14 sm:py-20" data-testid="section-dipifr-video">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <YouTubeEmbed videoId={course.videoId!} title="DipIFR — IFRS diplomi haqida FBA Academy" />
            </div>
            <div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white">Nima uchun DipIFR?</h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">DipIFR diplomi xalqaro kompaniyalarda ishlash uchun zarur bo'lgan IFRS bilimlarini rasman tasdiqlaydi. Bu karyerangizdagi eng muhim investitsiya.</p>
              <div className="mt-6 space-y-3">
                {[
                  "ACCA tomonidan xalqaro miqyosda tan olingan diplom",
                  "Big Four: Deloitte, PwC, EY, KPMG ga kirish",
                  "O'zbekistondagi multinatsional kompaniyalar talabi",
                  "ACCA to'liq sertifikatiga keyingi qadam",
                  "Maosh 2–3 baravargacha o'sish imkoniyati",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium" data-testid={`benefit-${i}`}>
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-500" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. CERTIFICATE ===== */}
      <section className="bg-[#111] py-14" data-testid="section-certificate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
            <div className="grid lg:grid-cols-2 lg:items-center">
              <div className="p-8 lg:p-12">
                <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white">ACCA DipIFR Diplomini olasiz</h2>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  Imtihonni muvaffaqiyatli topshirganingizdan so'ng ACCA tomonidan beriladigan DipIFR — Diploma in International Financial Reporting diplomini olasiz. Bu dunyo bo'yicha tan olingan sertifikat.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "ACCA DipIFR xalqaro diplom (global tan olingan)",
                    "FBA Academy sertifikati (O'zbekistonda)",
                    "Raqamli format — LinkedIn'ga qo'shish mumkin",
                    "Imtihon 6 oyda bir marta: iyun va dekabr",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm font-medium" data-testid={`cert-item-${i}`}>
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-slate-50 p-8 dark:from-indigo-950/20 dark:to-slate-950/20 lg:p-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-2xl bg-zinc-900 shadow-lg ring-1 ring-slate-200/50">
                    <img src={`${UNSPLASH}/photo-1589829545856-d10d557cf95f?w=300&h=220&fit=crop`} alt="ACCA DipIFR Diplomi" className="h-36 w-full object-cover" loading="lazy" />
                    <div className="p-3">
                      <div className="text-xs font-bold text-indigo-300 uppercase tracking-wide">ACCA</div>
                      <div className="mt-0.5 text-xs text-zinc-400">DipIFR Diplom</div>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-2xl bg-zinc-900 shadow-lg ring-1 ring-slate-200/50">
                    <img src={`${UNSPLASH}/photo-1554224155-6726b3ff858f?w=300&h=220&fit=crop`} alt="FBA Academy Sertifikati" className="h-36 w-full object-cover" loading="lazy" />
                    <div className="p-3">
                      <div className="text-xs font-bold text-indigo-300 uppercase tracking-wide">FBA Academy</div>
                      <div className="mt-0.5 text-xs text-zinc-400">Sertifikat</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 10. SALARY ===== */}
      <section className="py-14" data-testid="section-dipifr-salary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-zinc-900 p-6 shadow-2xl sm:p-10">
            <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-3xl">DipIFR bilan maosh darajasi</h2>
            <p className="mb-8 text-zinc-500">O'zbekistondagi moliya va buxgalteriya sohasidagi taxminiy maosh</p>
            <div className="space-y-4">
              {course.salaryLevels.map((level, i) => (
                <div key={i} className="rounded-2xl bg-indigo-400 p-4 sm:p-5 transition-all" style={{ maxWidth: `${45 + i * 27}%`, minWidth: "240px" }} data-testid={`dipifr-salary-${i}`}>
                  <div className="text-lg font-extrabold text-white sm:text-xl">{level.salary} so'm dan</div>
                  <div className="text-sm font-medium text-indigo-100">{level.level} — {level.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 11. PROGRAM MODULES ===== */}
      <section id="program" className="bg-[#111] py-14" data-testid="section-dipifr-modules">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white">{t.page.curriculum}</h2>
          <div className="mb-6 flex flex-wrap gap-2">
            {[
              { icon: Calendar, text: course.duration },
              { icon: BookOpen, text: `${course.projects} loyiha` },
              { icon: Clock, text: `${course.theoryHours} soat nazariya` },
              { icon: Clock, text: `${course.practiceHours} soat amaliyot` },
            ].map((item, i) => (
              <Badge key={i} variant="outline" className="rounded-full gap-1.5 border-2 px-3 py-1.5 text-xs font-semibold">
                <item.icon className="h-3.5 w-3.5" /> {item.text}
              </Badge>
            ))}
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {course.modules.map((mod, i) => (
                <AccordionItem key={i} value={`m-${i}`} className="rounded-2xl border border-white/10 bg-zinc-900 px-5" data-testid={`dipifr-module-${i}`}>
                  <AccordionTrigger className="text-left py-4 text-white">
                    <div className="flex items-center gap-3">
                      <span className="step-badge h-9 w-9 bg-gradient-to-br from-indigo-600 to-blue-700 text-sm icon-glow-indigo">{i + 1}</span>
                      <div>
                        <span className="text-sm font-bold sm:text-base">{mod.title}</span>
                        <div className="text-xs text-zinc-400">{mod.topics.length} mavzu</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="ml-12 space-y-2.5 pb-3">
                      {mod.topics.map((topic, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-zinc-400">
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

      {/* ===== 12. CORPORATE TRAINING ===== */}
      <section className="py-14" data-testid="section-corporate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-800 to-slate-900">
            <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_360px] lg:gap-12">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1.5 text-xs font-semibold text-indigo-300">
                  <Building2 className="h-3.5 w-3.5" /> Korporativ o'qitish
                </div>
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Buxgalteriya bo'limi xodimlaringiz malakasini oshiring</h2>
                <p className="mt-4 text-slate-300 leading-relaxed">Maxsus shartlarda korporativ o'qitish o'tkazamiz:</p>
                <ul className="mt-5 space-y-3">
                  {[
                    "Tayyor va individual dasturlar (kompaniyangizning so'rovi va faoliyat spetsifikasiga ko'ra)",
                    "Onlayn, oflayn va aralash (blended-learning) formatlarda",
                    "O'qishdan oldin va keyin mutaxassislar bilimini chuqur tekshirish bilan",
                    "Guruh chegirmalari va moslashuvchan to'lov shartlari",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300" data-testid={`corporate-item-${i}`}>
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm" data-testid="card-corporate-form">
                <h3 className="mb-1 text-base font-bold text-white">Korporativ o'qitish haqida bilish</h3>
                <p className="mb-4 text-sm text-zinc-500">Menejerimiz siz bilan bog'lanadi va eng mos dasturni taklif qiladi</p>
                <LeadForm source="dipifr-corporate" buttonText="Konsultatsiyaga yozilish" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 13. SUPPORT TEAM + TEACHER ===== */}
      <section className="bg-[#111] py-14" data-testid="section-support">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white">{t.page.supportTitle}</h2>

          {/* Teacher */}
          <div className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
            <div className="grid lg:grid-cols-[auto_1fr] items-center">
              <div className="h-48 overflow-hidden lg:h-56 lg:w-48">
                <img src={mentor.avatar} alt={mentor.name} className="h-full w-full object-cover object-top" loading="lazy" />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-extrabold" data-testid="text-teacher-name">{mentor.name}</h3>
                <p className="text-sm font-medium text-indigo-400">{mentor.role} · {mentor.experience}</p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "ACCA Fellow va DipIFR ekspert, 12 yillik tajriba",
                    "Big Four audit firmasida senior auditor sifatida ishlagan",
                    "O'zbekistondagi yirik xalqaro kompaniyalarda IFRS joriy etgan",
                    "700+ talabani DipIFR imtihoniga muvaffaqiyatli tayyorlagan",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm" data-testid={`teacher-point-${i}`}>
                      <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-indigo-800/40 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      </div>
                      <span className="text-zinc-400">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Support team */}
          <div className="grid gap-4 sm:grid-cols-3">
            {course.supportTeam.map((person, i) => (
              <div key={i} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900 p-4" data-testid={`support-${i}`}>
                <img src={person.avatar} alt={person.role} className="h-14 w-14 shrink-0 rounded-xl object-cover object-top" loading="lazy" />
                <div>
                  <div className="text-sm font-bold">{person.role}</div>
                  <div className="mt-0.5 text-xs text-zinc-400 leading-snug">{person.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 14. PRICING + FORM ===== */}
      <section className="bg-gradient-to-br from-indigo-900 via-blue-950 to-slate-900 py-16" data-testid="section-pricing">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
            <div>
              <p className="mb-2 text-sm text-zinc-500">O'qishga yozilish</p>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Kursni oling yoki konsultatsiya oling</h2>
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs text-zinc-500 uppercase tracking-wide mb-4">4 oy o'qish · 2 yil kirish</p>
                <div className="mb-2 flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-white">{course.price} UZS</span>
                  <span className="text-sm text-zinc-500 line-through">{course.oldPrice} UZS</span>
                  <Badge className="rounded-lg bg-rose-500 px-2 py-0.5 text-xs font-bold text-white">-{course.discount}</Badge>
                </div>
                <p className="text-xs text-zinc-500 mb-6">Yoki bo'lib to'lash: oyiga 1 100 000 UZS dan</p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Arzonroq topdingizmi? Chegirma qilamiz",
                    "Kurs mos kelmasa, 7 kun ichida pul qaytarish",
                    "Imtihon muvaffaqiyatsiz — qayta tayyorgarlik bepul",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300" data-testid={`pricing-guarantee-${i}`}>
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-400" /> {item}
                    </li>
                  ))}
                </ul>
                <Link href="#enroll">
                  <Button size="lg" className="w-full rounded-xl bg-indigo-600 font-bold text-white hover:bg-indigo-700" data-testid="button-pricing-enroll">
                    Yozilish <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-zinc-900 p-6 shadow-2xl" data-testid="card-pricing-form">
              <h3 className="mb-1 text-lg font-extrabold text-white">O'qishni to'lash yoki konsultatsiya</h3>
              <p className="mb-4 text-sm text-zinc-400">Ro'yxatdan o'tib, bepul birinchi modulga kirish oling</p>
              <LeadForm source="course-dipifr-pricing" buttonText="Yozilish" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 15. FAQ ===== */}
      <section className="py-14 sm:py-20" data-testid="section-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-extrabold uppercase tracking-tight text-white">Savollarga javob beramiz</h2>
          <div className="mb-8 flex gap-2">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFaqTab(cat)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${activeFaqTab === cat ? "bg-zinc-900 text-white" : "border border-white/20 bg-zinc-900 text-zinc-300 hover:border-white/40"}`}
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
                  <AccordionTrigger className="text-left text-base font-semibold py-5 text-white hover:no-underline hover:text-purple-300">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-zinc-400 pb-5 text-sm leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-700 p-8 text-center" data-testid="section-final-cta">
            <h3 className="text-xl font-extrabold text-white sm:text-2xl">Hali savollaringiz bormi?</h3>
            <p className="mt-2 text-indigo-100">Menejerimiz barcha tafsilotlarni tushuntiradi va sizga eng mos yo'nalishni tavsiya qiladi</p>
            <Link href="#enroll">
              <Button size="lg" className="mt-5 rounded-full bg-zinc-900 px-8 font-bold text-indigo-400 hover:bg-zinc-800" data-testid="button-final-cta">
                Bepul konsultatsiya <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FORMAT ===== */}
      <CourseFormatSection />

      {/* ===== BONUSES ===== */}
      <CourseBonusesSection
        bonuses={DIPIFR_BONUSES}
        totalUz="1 000 000 so'mdan ortiq"
        totalRu="Более 10 000 ₽"
        totalEn="Over $100"
      />

      {/* ===== 16. RELATED COURSES ===== */}
      <CourseBlogLinks color="indigo" links={[
        { href: "/blog/dipifr-nima-va-nima-uchun", title: "DipIFR nima va nima uchun kerak?", readTime: "7 daqiqa" },
        { href: "/blog/acca-vs-dipifr-vs-cfa-qaysi-yaxshi", title: "ACCA vs DipIFR vs CFA — qaysi biri yaxshi?", readTime: "11 daqiqa" },
        { href: "/blog/xalqaro-sertifikatlar-ozbekistonda", title: "Xalqaro sertifikatlar O'zbekistonda", readTime: "9 daqiqa" },
        { href: "/blog/buxgalter-maoshi-ozbekiston-2026", title: "Buxgalter maoshi 2026", readTime: "8 daqiqa" },
      ]} />

      <CourseRelated excludeId="dipifr" />
    </Layout>
  );
}
