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
import { faqItems } from "@/lib/data";
import CourseBlogLinks from "@/components/course-blog-links";
import CourseRelated from "@/components/course-related";
import CourseFormatSection from "@/components/course-format-section";
import CourseBonusesSection from "@/components/course-bonuses-section";
import { useLanguage } from "@/contexts/language-context";
import {
  CheckCircle2, ArrowRight, Star, ChevronRight, Play,
  BarChart3, Calculator, TrendingUp, BookOpen, Clock,
  Award, Users, MessageSquare, Zap, Target, Shield
} from "lucide-react";

const HERO_BULLETS = [
  "Barcha turdagi biznes uchun noldan moliyaviy modellar qurish",
  "Plan-fakt tahlil o'tkazish va DCF usuli bilan biznes holatini bir nechta metod yordamida baholash",
  "Kompaniyaning joriy vazifalari uchun modellardan foydalanish va moliyaviy hisobot asosida qarorlar qabul qilish",
];

const FEATURES = [
  { title: "Amaliyotga fokus", desc: "Excel da moliyaviy modellar bilan 10+ soat ish", emoji: "🎯" },
  { title: "Noldan o'rganish", desc: "Oddiy va murakkab moliyaviy modellarni bosqichma-bosqich", emoji: "📈" },
  { title: "Amaliyotchi o'qituvchilar", desc: "Moliyaviy tahlilda 10+ yillik tajriba bilan", emoji: "👨‍🏫" },
  { title: "Qo'llab-quvvatlash", desc: "Kurator 365 kun davomida aloqada", emoji: "💬" },
  { title: "Rasmiy diplom", desc: "Kurs tugatgandan so'ng ishga kirish uchun", emoji: "🎓" },
];

const FM_POWERS = [
  "Daromad, foyda va pul oqimlarini bashorat qilish",
  "Kompaniyaning o'sish omillarini aniqlash",
  "Zararsizlik nuqtasini hisoblash",
  "Biznesning joriy qiymatini baholash va investitsiyalar rejasini tuzish",
  "Ichki va tashqi omillarga qarab kompaniyaning rivojlanish stsenariylarini ishlab chiqish",
];

const JOB_CHIPS = [
  "Moliyaviy tahlilchi", "Korporativ moliya menejeri", "Investitsiyalar tahlilchisi",
  "Moliya maslahatchisi", "Biznes-tahlilchi", "Moliyaviy nazoratchi", "Risk-menejer",
];

const SALARY_STATS = [
  { value: "2 500+", label: "vakansiya hh.uz da", highlight: false },
  { value: "4 000 000", sublabel: "so'm/oy", label: "1–3 yil tajriba bilan o'rtacha maosh", highlight: false },
  { value: "8 000 000", sublabel: "so'm/oy", label: "3–5 yil tajriba bilan o'rtacha maosh", highlight: false },
  { value: "18 000 000+", sublabel: "so'm/oy", label: "5+ yil tajriba bilan o'rtacha maosh", highlight: true },
];

const INDUSTRIES = [
  {
    emoji: "🏭",
    title: "Sanoat korxonalari",
    desc: "Ishlab chiqaruvchi kompaniyalarga moliyaviy modellashtirish ishlab chiqarish hajmini rejalashtirishga, uskunalarga investitsiya samaradorligini baholashga, foyda va zararni bashorat qilishga hamda cash flow'ni boshqarishga yordam beradi.",
  },
  {
    emoji: "🏦",
    title: "Bank sektori",
    desc: "Banklar moliyaviy modellardan qarz oluvchilarning kredit layoqatini baholash, risklarni hisoblash va pul mablag'larini bashorat qilish uchun foydalanadi. Modellar kredit berish va kredit portfelini boshqarish bo'yicha qarorlar qabul qilish uchun zarur.",
  },
  {
    emoji: "🚀",
    title: "Startaplar va IT kompaniyalar",
    desc: "Startaplar va IT-biznes uchun kengayish imkoniyatlarini va prognoz ko'rsatkichlarini ko'rsatadigan moliyaviy modellar qurish juda muhim. Ishonchli moliyaviy modelsiz investorlarni jalb qilish va moliyalashtirish olish deyarli imkonsiz.",
  },
  {
    emoji: "🛒",
    title: "Savdo va distribusiya",
    desc: "Savdo sohasida moliyaviy modellar savdoni rejalashtirish, inventar va logistikani boshqarish, marketing kampaniyalarini baholash, tarmoqni rivojlantirish va yangi mahsulotlar chiqarish bo'yicha qarorlar qabul qilish uchun kerak.",
  },
  {
    emoji: "💼",
    title: "Investitsiya kompaniyalari va fondlar",
    desc: "Moliyaviy modellashtirish potentsial investitsiyalarni baholash, daromadlilik prognozlarini tuzish va investitsiya qarorlarini qabul qilish uchun hal qiluvchi ahamiyatga ega. Sifatli moliyaviy modellarsiz investitsiya ob'ektlarini chuqur tahlil qilish mumkin emas.",
  },
  {
    emoji: "🤝",
    title: "Konsalting va professional xizmatlar",
    desc: "Konsultantlar mijozlarning muammolarini diagnostika qilish, o'sish nuqtalarini topish, biznesni rivojlantirish strategiyalarini ishlab chiqish va gipotezalarni tekshirish uchun moliyaviy modellashtirdan foydalanadi.",
  },
  {
    emoji: "🏗️",
    title: "Ko'chmas mulk va qurilish",
    desc: "Moliyaviy modellashtirish rivojlantirish loyihalarining iqtisodiyotini baholash, daromadliligini bashorat qilish, optimal qurilish parametrlarini belgilash va loyihani amalga oshirish byudjeti va jadvalini tuzishga yordam beradi.",
  },
  {
    emoji: "🏢",
    title: "Turli sohalardagi korporativ moliya",
    desc: "Yangi bozorlarga chiqish, yangi mahsulotlar ishlab chiqish, M&A bitimlarini tuzish va moliyalashtirishni jalb qilish kabi kompaniyaning strategik rivojlanish bo'yicha qarorlar qabul qilish uchun ishonchli moliyaviy modellarga ehtiyoj mavjud.",
  },
];

const FOR_WHOM = [
  {
    icon: "💼",
    title: "Moliya mutaxassislari",
    desc: "Aniq va ishonchli prognozlar yaratishni o'rganing, o'z samaradorligingizni va mutaxassis sifatidagi qiymatni oshiring hamda karyera o'sishi uchun raqobat ustunligini qo'lga kiriting.",
  },
  {
    icon: "📊",
    title: "Tahlilchilar",
    desc: "Biznesni har tomonlama baholashni, g'oyalar yaratishni va asoslangan yechimlar taklif qilishni o'rganing. Tahliliy salohiyatingizni mustahkamlang va yangi karyera istiqbollarini oching.",
  },
  {
    icon: "🚀",
    title: "Tadbirkorlar va rahbarlar",
    desc: "Yuqori daromadli investitsiyalarni jalb qilish va loyihalar rentabelligini bashorat qilish vositalarini oling. Realistik biznes-reja tuzishni, investorlar va hamkorlar bilan raqamlar tilida gaplashishni o'rganing.",
  },
  {
    icon: "🎓",
    title: "Bitiruvchilar va talabalar",
    desc: "Real tijorat masalalarini tahlil qilish va hal qilish uchun moliyaviy modellarni yaratish va ulardan foydalanishni o'rganing. Egallangan ko'nikmalar ishga joylashishda raqobat ustunligingiz bo'ladi.",
  },
];

const SKILLS = [
  { icon: "📊", text: "Operatsion foydaning o'sish omillarini aniqlash" },
  { icon: "📋", text: "FAST standartlari bo'yicha kompleks moliyaviy modellar tuzish" },
  { icon: "📈", text: "Bozor sharoitlari o'zgarishiga foyda sezgirligini baholash" },
  { icon: "🔍", text: "Plan-fakt tahlil o'tkazish" },
  { icon: "💹", text: "DCF usulida kompaniyani baholash (diskontlangan pul oqimlari)" },
  { icon: "⚠️", text: "Moliyaviy risklarni aniqlash va baholash" },
];

const CURRICULUM = [
  {
    title: "Moliyaviy modellashtirish asoslari va Excel sozlash",
    topics: [
      "Moliyaviy modellashtirish standartlari",
      "FAST moliyaviy model qurilish standartlari",
      "Moliyaviy modellashtirish uchun Excel asosiy funksiyalari",
    ],
    tags: ["1 topshiriq"],
  },
  {
    title: "Kompleks moliyaviy modelni qanday tuzish",
    topics: [
      "Moliyaviy model tuzishdagi keng tarqalgan xatolar",
      "Sezgirlik jadvalini qanday tuzish",
      "Hisobotlarni yig'ish va kompleks moliyaviy model qurish",
    ],
    tags: ["1 topshiriq", "2 biznes-keys", "1 shablon"],
  },
  {
    title: "Biznesni baholash uchun moliyaviy modelni qanday tuzish",
    topics: [
      "DCF, qiyosiy va xarajat usullari bilan biznesni baholash",
      "Operatsion ko'rsatkichlar, CAPEX va kapital qiymati (WACC) prognozi",
      "Moliyaviy hisobotlarni qurilish va tahlil tamoyillari",
    ],
    tags: ["2 topshiriq", "1 biznes-keys", "1 shablon"],
  },
  {
    title: "AI va qo'shimcha vositalar",
    topics: [
      "Taqdimot yaratish",
      "Google Sheets uchun AI dan foydalanish",
      "Excel uchun AI dan foydalanish",
      "Shaxsiy samaradorlikni oshirish",
      "Karyera strategiyasini yaratish",
    ],
    tags: ["5 dars"],
  },
  {
    title: "Moliyaviy tahlilning qo'shimcha vositalari",
    topics: [
      "Moliyaviy nazorat vositalari: plan-fakt tahlil",
      "IRR, XIRR, NPV va XNPV yordamida investitsiya loyihalarini baholash",
    ],
    tags: ["1 biznes-keys"],
    isFinal: true,
  },
];

const PRACTICAL_PROJECTS = [
  {
    num: "1",
    title: "Ishlab chiqarish korxonalari uchun 2 ta moliyaviy model quring",
    items: [
      "Daromad va xarajatlar prognozi",
      "Aylanma kapitalini hisoblash",
      "Balans, P&L va Cash Flow to'ldirish",
      "Sezgirlik tahlili o'tkazish",
      "Turli stsenariylar uchun moliyalashtirish ehtiyojini bashorat qilish",
    ],
  },
  {
    num: "2",
    title: "O'zgaruvchan boshlang'ich ma'lumotlarni hisobga olgan holda kompaniyaning moliyaviy holatini baholash",
    items: [
      "Kredit ta'sirini hisobga olgan holda moliyaviy hisobotni tuzatish",
      "WACC hisoblash",
      "Kompaniyaning o'ziga xos xavfini baholash",
    ],
  },
  {
    num: "3",
    title: "Avtodiler uchun DCF usulida moliyaviy model quring",
    items: [
      "Daromad va operatsion xarajatlar prognozi",
      "Prognoz moliyaviy hisobotlarni tuzish",
      "DCF usulida kompaniyani baholash",
    ],
  },
];

const TEACHERS = [
  {
    name: "Bobur Nazarov",
    role: "Moliyaviy direktor, 12 yillik tajriba",
    desc: "Yirik o'zbek va xalqaro kompaniyalarda moliyaviy boshqaruv jarayonlarini muvaffaqiyatli tashkil etgan. CFA sertifikatiga ega.",
    initials: "BN",
    color: "from-emerald-600 to-green-700",
  },
  {
    name: "Jasur Toshmatov",
    role: "Investitsiya tahlilchisi",
    desc: "Investitsiya tahlili va loyihalarni moliyalashtirish sohasida ishlaydi. Yirik infratuzilma loyihalarida moliyaviy modellar ishlab chiqqan.",
    initials: "JT",
    color: "from-blue-600 to-indigo-700",
  },
  {
    name: "Alisher Xoliqov",
    role: "CFA va ACCA egasi",
    desc: "Konsalting va auditda tajribaga ega. Katta to'rtlik kompaniyalarida ishlagan. CFA va ACCA malakasiga ega moliyaviy mutaxassis.",
    initials: "AX",
    color: "from-violet-600 to-purple-700",
  },
];

const WHY_FBA = [
  { icon: "🖥️", title: "Interaktiv darslar", desc: "Vebinarlar o'tmishda: bizda o'yin asosida ta'lim — trenajyorlar, keys va stsenariylar." },
  { icon: "👑", title: "Eng yaxshi o'qituvchilar", desc: "Natijaga Uzbekistonning yetakchi kompaniyalari ekspertlari yo'naltiradi." },
  { icon: "💪", title: "Amaliy ko'nikmalar", desc: "Hech qanday nazariya emas — faqat ish joyi yoki karyerangizni oshirishda kerak bo'ladigan bilimlar." },
  { icon: "🏆", title: "Karyera istiqbollari", desc: "Bitiruvchilarimiz O'zbekistonning yetakchi kompaniyalarida ishlaydi." },
  { icon: "🤝", title: "Korporativ sheriklik", desc: "Biz HR-menejerlar qidirayotgan narsani aniq bilamiz, chunki ular bilan hamkorlik qilamiz." },
];

const REVIEWS = [
  {
    name: "Nilufar T.",
    rating: 5,
    course: "Moliyaviy Modellashtirish",
    title: "Moliyaning tor tematikasi, lekin juda foydali",
    text: "Moliyaviy modellashtirish kursi — bu men uchun yangi, salqin bilimlarning bir ko'rinishi. Biznesni unchalik uzoq emas, bir yildan kam vaqt boshlaganman va yo'nalishimda rivojlanishga harakat qilyapman. Ba'zida bilim yetishmasligi seziladi. Kurs atigi bir oy, lekin hajmlar katta + 10 soat amaliyot. Olingan tajribani allaqachon o'z amaliy ishimda qo'llamoqdaman.",
    source: "Google",
  },
  {
    name: "Muhabbat K.",
    rating: 5,
    course: "Moliyaviy Modellashtirish",
    title: "Mening tavsiyalarim",
    text: "Moliyaviy analitika va modellashtirish kurslarini o'tishga qaror qildim. Ishda kerak bo'ldi. Hammasi yaxshi. Amaliy topshiriqlar real ish vazifalariga mos darajada tuzilgan.",
    source: "Yandex",
  },
  {
    name: "Sardor E.",
    rating: 5,
    course: "Moliyaviy tahlilchi",
    title: "Tavsiya qilaman",
    text: "Kurs moliya sohasini noldan o'rganishga yordam beradi. O'quv materialini taqdim etish juda oddiy va tushunarli. Amaliy topshiriqlar real ish vazifalariga mos darajada tuzilgan. Kurs moliya sohasida karyera qurmoqchi bo'lganlar va mavjud bilimlarini oshirmoqchi bo'lganlar uchun mos.",
    source: "tutortop",
  },
];

const RELATED = [
  { href: "/course/acca", label: "ACCA", desc: "Xalqaro moliya sertifikati", color: "from-purple-500 to-indigo-600" },
  { href: "/course/dipifr", label: "DipIFR", desc: "IFRS xalqaro standartlari", color: "from-indigo-500 to-slate-600" },
  { href: "/course/1c-course", label: "1C: Buxgalteriya", desc: "Amaliy buxgalteriya dasturi", color: "from-blue-500 to-indigo-600" },
];

const FM_BONUSES = [
  {
    logo: "📊",
    nameUz: "DCF Model Shablonlar To'plami",
    nameRu: "Набор шаблонов DCF-моделей",
    nameEn: "DCF Model Templates Pack",
    descUz: "Real kompaniyalar uchun tayyor DCF modellar va baholash shablonlari",
    descRu: "Готовые DCF-модели и шаблоны оценки для реальных компаний",
    descEn: "Ready DCF models and valuation templates for real companies",
    durationUz: "Abadiy kirish",
    durationRu: "Пожизненный доступ",
    durationEn: "Lifetime access",
    priceUz: "450 000 so'm",
    priceRu: "4,500 ₽",
    priceEn: "$45",
  },
  {
    logo: "📈",
    nameUz: "FAST Standart Kurs Materiallar",
    nameRu: "Материалы курса FAST Standard",
    nameEn: "FAST Standard Course Materials",
    descUz: "Moliyaviy modellashtirishning FAST standartiga oid to'liq qo'llanma va shablonlar",
    descRu: "Полное руководство и шаблоны по стандарту FAST для финансового моделирования",
    descEn: "Complete guide and templates for FAST financial modeling standard",
    durationUz: "1 yillik kirish",
    durationRu: "Доступ на 1 год",
    durationEn: "1 year access",
    priceUz: "350 000 so'm",
    priceRu: "3,500 ₽",
    priceEn: "$35",
  },
  {
    logo: "🏦",
    nameUz: "Tarmoq Moliyaviy Modellari",
    nameRu: "Отраслевые финансовые модели",
    nameEn: "Industry Financial Models",
    descUz: "Bank, ritel, ishlab chiqarish va boshqa tarmoqlar uchun tayyor moliyaviy modellar",
    descRu: "Готовые финансовые модели для банков, ретейла, производства и других отраслей",
    descEn: "Ready financial models for banking, retail, manufacturing and other sectors",
    durationUz: "6 oylik kirish",
    durationRu: "Доступ на 6 месяцев",
    durationEn: "6 months access",
    priceUz: "300 000 so'm",
    priceRu: "3,000 ₽",
    priceEn: "$30",
  },
];

export default function FinancialModelingPage() {
  const { t } = useLanguage();
  useSEO({
    title: "Moliyaviy Modellashtirish Kursi — DCF, Excel, FAST | FBA Academy",
    description: "Amaliy Moliyaviy Modellashtirish kursi O'zbekistonda: DCF, FAST standartlari, plan-fakt tahlil, WACC, kompaniyani baholash. 26 dars, 4 biznes-keys, rasmiy diplom. 1-2 oyda natija.",
    keywords: "moliyaviy modellashtirish kursi, financial modeling O'zbekiston, DCF model, Excel moliya kursi, FAST standart, kompaniyani baholash, FBA Academy",
    breadcrumb: [
      { name: "Kurslar", url: "https://fbaacademy.uz/courses" },
      { name: "Financial Modeling", url: "https://fbaacademy.uz/course/financial-modeling" },
    ],
    jsonLd: [
      {
        "@type": "Course",
        "name": "Moliyaviy Modellashtirish — Financial Modeling",
        "description": "DCF, FAST standartlari, plan-fakt tahlil, WACC. 26 dars, 4 biznes-keys, rasmiy diplom.",
        "url": "https://fbaacademy.uz/course/financial-modeling",
        "provider": { "@type": "Organization", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
        "educationalLevel": "Intermediate",
        "timeRequired": "P3M",
        "inLanguage": "uz",
          "coursePrerequisites": "Excel asosiy bilimlari. Moliya yoki iqtisodiyot sohasidagi bilim tavsiya etiladi.",
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "online",
            "duration": "P3M",
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
            "instructor": { "@type": "Person", "name": "Bekzod Karimov", "jobTitle": "CFA, Moliya tahlilchisi" },
            "offers": {
              "@type": "Offer",
              "price": "2500000",
              "priceCurrency": "UZS",
              "availability": "https://schema.org/InStock",
            },
          },
          "educationalCredentialAwarded": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certificate",
            "name": "Financial Modeling & Valuation Certificate",
            "recognizedBy": { "@type": "Organization", "name": "FBA Academy" }
          },
          "totalHistoricalEnrollment": 700,
          "courseCode": "FM-001",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "700",
          "bestRating": "5",
          "worstRating": "1",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Moliyaviy modellashtirish kursi qancha davom etadi?", "acceptedAnswer": { "@type": "Answer", "text": "Kurs 1-2 oy davom etadi: 26 interaktiv dars, 4 biznes-keys, 4 topshiriq va 2 shablon." } },
          { "@type": "Question", "name": "Kursdan keyin qanday ish topish mumkin?", "acceptedAnswer": { "@type": "Answer", "text": "Moliyaviy tahlilchi, investitsiya tahlilchisi, biznes-tahlilchi, korporativ moliya menejeri lavozimlariga da'vo qilishingiz mumkin." } },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Bosh sahifa", "item": "https://fbaacademy.uz" },
          { "@type": "ListItem", "position": 2, "name": "Kurslar", "item": "https://fbaacademy.uz/courses" },
          { "@type": "ListItem", "position": 3, "name": "Moliyaviy Modellashtirish", "item": "https://fbaacademy.uz/course/financial-modeling" },
        ],
      },
    ],
  });

  const faqs = faqItems.filter((f) => f.category === "Financial Modeling" || f.category === "Umumiy").slice(0, 6);
  const [openModules, setOpenModules] = useState<string[]>([]);

  return (
    <Layout>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-zinc-900 py-10 sm:py-14" data-testid="section-fm-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-zinc-400">
            <Link href="/" className="hover:text-white" data-testid="breadcrumb-home">Bosh sahifa</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/courses" className="hover:text-white" data-testid="breadcrumb-courses">Kurslar</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-white">Moliyaviy Modellashtirish</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14 lg:items-start">
            {/* Left */}
            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                <Badge className="rounded-full border-emerald-500/30 bg-emerald-900/20 text-emerald-400 font-medium">Amaliy onlayn-kurs</Badge>
                <Badge className="rounded-full border-blue-500/30 bg-blue-900/20 text-blue-300 font-medium">📅 2026 yilda yangilangan dastur</Badge>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight" data-testid="text-fm-title">
                Moliyaviy<br />
                <span className="text-emerald-400">Modellashtirish</span>
              </h1>
              <p className="mt-4 text-base text-zinc-400 font-medium">1–2 oyda nimalarni o'rganasiz:</p>
              <ul className="mt-3 space-y-3">
                {HERO_BULLETS.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-zinc-300" data-testid={`fm-bullet-${i}`}>
                    <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <span className="text-sm sm:text-base">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#pricing">
                  <Button className="gap-2 rounded-full bg-emerald-600 px-6 font-bold text-white hover:bg-emerald-700" data-testid="button-fm-enroll-hero">
                    Kursga yozilish <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#curriculum">
                  <Button variant="outline" className="rounded-full border-2 px-6 font-bold" data-testid="button-fm-program">
                    Dasturni ko'rish
                  </Button>
                </a>
              </div>
            </div>

            {/* Right — form card */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-xl" data-testid="card-fm-form">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-extrabold">Konsultatsiya olish</h3>
                <span className="rounded-full bg-rose-500 px-3 py-1 text-xs font-extrabold text-white">-50% chegirma</span>
              </div>
              <div className="mb-4 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
                <div className="text-xs font-bold text-amber-800 uppercase tracking-wide">⏰ Chegirma muddati</div>
                <div className="text-sm text-amber-700 font-medium mt-0.5">8-mart gacha — maxsus narx saqlanadi</div>
              </div>
              <div className="mb-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-white" data-testid="text-fm-price">990 000 so'm/oy</span>
                </div>
                <div className="text-sm text-zinc-400 line-through">1 980 000 so'm/oy</div>
                <div className="mt-1 text-xs text-zinc-500">12 oyga foizsiz bo'lib to'lash mumkin</div>
              </div>
              <LeadForm source="course-financial-modeling" buttonText="Konsultatsiya olish" />
              <ul className="mt-4 space-y-1.5 text-xs text-zinc-400">
                {["Rasmiy diplom", "Kurator 1 yil davomida aloqada", "Kursga abadiy kirish. Yangilanishlar bepul!"].map((t, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 FEATURES STRIP ─────────────────────────────────── */}
      <section className="border-y bg-[#111] py-8" data-testid="section-fm-features">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {FEATURES.map((f, i) => (
              <div key={i} className="rounded-xl bg-zinc-900 border p-4 shadow-sm" data-testid={`fm-feature-${i}`}>
                <div className="text-2xl mb-2">{f.emoji}</div>
                <div className="text-sm font-extrabold text-white">{f.title}</div>
                <div className="mt-1 text-xs text-zinc-500 leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCIAL MODEL = UNIVERSAL TOOL ─────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-fm-universal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <YouTubeEmbed videoId="PU8ZCSuHWXE" title="Moliyaviy Modellashtirish kursi" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl" data-testid="text-fm-universal-title">
                <span className="text-emerald-400">Moliyaviy model</span> — universal vosita, u quyidagilarga imkon beradi:
              </h2>
              <ul className="mt-6 space-y-4">
                {FM_POWERS.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300" data-testid={`fm-power-${i}`}>
                    <span className="mt-1 text-xl font-extrabold text-emerald-400 leading-none">—</span>
                    <span className="text-sm sm:text-base leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREER VACANCIES ─────────────────────────────────── */}
      <section className="bg-[#111] py-14 sm:py-20" data-testid="section-fm-career">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-fm-career-title">
            Kursdan keyin quyidagi vakansiyalarga da'vo qilishingiz mumkin:
          </h2>
          <div className="mb-8 flex flex-wrap gap-2.5">
            {JOB_CHIPS.map((job, i) => (
              <span key={i} className="rounded-full border border-emerald-500/30 bg-emerald-900/20 px-4 py-2 text-sm font-semibold text-emerald-300" data-testid={`job-chip-${i}`}>
                {job}
              </span>
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SALARY_STATS.map((s, i) => (
              <div key={i} className={`rounded-2xl border p-6 ${s.highlight ? "border-emerald-500/40 bg-emerald-900/20" : "bg-zinc-900"}`} data-testid={`salary-stat-${i}`}>
                <div className={`text-3xl font-extrabold ${s.highlight ? "text-emerald-400" : "text-white"} sm:text-4xl`}>{s.value}</div>
                {s.sublabel && <div className="text-sm font-bold text-zinc-400">{s.sublabel}</div>}
                <div className="mt-2 text-xs text-zinc-500 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-zinc-500">O'quv muddati — 1−2 oy: 26 dars, 4 biznes-keys, 4 amaliy topshiriq va 2 shablon.</p>
        </div>
      </section>

      {/* ── INDUSTRIES ──────────────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-fm-industries">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-fm-industries-title">
            Qaysi sohalarda moliyaviy modellar kerak
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-zinc-900 p-5 hover:shadow-md transition-shadow" data-testid={`industry-card-${i}`}>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-900/20 text-2xl border border-emerald-700/30">
                  {ind.emoji}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">{ind.title}</h3>
                  <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR WHOM — dark cards ─────────────────────────────── */}
      <section className="bg-slate-900 py-14 sm:py-20" data-testid="section-fm-for-whom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-3xl" data-testid="text-fm-for-whom-title">
            Bu kurs kimlar uchun foydali
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {FOR_WHOM.map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-900/60 to-teal-900/40 p-6 backdrop-blur-sm" data-testid={`for-whom-card-${i}`}>
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="text-base font-extrabold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS GRID ──────────────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-fm-skills">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-fm-skills-title">
            Nimalarga o'rganasiz
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((skill, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-zinc-900 p-5" data-testid={`skill-card-${i}`}>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-900/20 text-2xl border border-emerald-700/30">
                  {skill.icon}
                </div>
                <p className="text-sm font-semibold text-zinc-300 leading-relaxed mt-1">{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA DARK ─────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-700 py-12" data-testid="section-fm-cta-mid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Savollaringiz bormi?</h2>
              <p className="mt-2 text-emerald-100">Bepul konsultatsiya buyurtma bering — maslahatchi kurs tafsilotlarini tushuntiradi</p>
            </div>
            <a href="#pricing">
              <Button size="lg" className="rounded-full bg-zinc-900 px-8 font-extrabold text-emerald-400 hover:bg-zinc-800 whitespace-nowrap" data-testid="button-fm-cta-mid">
                Bepul konsultatsiya olish <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ───────────────────────────────────────── */}
      <section id="curriculum" className="py-14 sm:py-20" data-testid="section-fm-curriculum">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-2 flex items-center gap-2">
            <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-fm-curriculum-title">{t.page.curriculum}</h2>
            <Badge className="rounded-full border-emerald-500/30 bg-emerald-900/20 text-emerald-400 font-semibold">2026 yilda yangilangan</Badge>
          </div>
          <div className="mb-2 flex flex-wrap gap-1.5 text-sm font-semibold text-zinc-400">
            <span className="rounded-full bg-[#0d0d0d] px-3 py-1">📹 26 interaktiv dars</span>
            <span className="rounded-full bg-[#0d0d0d] px-3 py-1">📦 4 biznes-keys</span>
            <span className="rounded-full bg-[#0d0d0d] px-3 py-1">📝 4 amaliy topshiriq</span>
            <span className="rounded-full bg-[#0d0d0d] px-3 py-1">📄 2 shablon</span>
          </div>
          <div className="mb-2 rounded-xl border border-emerald-500/30 bg-emerald-900/20 px-5 py-4">
            <div className="flex items-center gap-2 text-sm font-extrabold text-emerald-300">
              <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-xs text-white font-bold">+5 dars</span>
              Yangi darslar qo'shildi
            </div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-emerald-400">
              {["AI ni Excel da qo'llash", "Google Sheets uchun AI", "Karyera strategiyasi", "Shaxsiy samaradorlik", "Taqdimot yaratish"].map((t, i) => (
                <span key={i} className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3" />{t}</span>
              ))}
            </div>
          </div>

          <div className="mt-6 max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {CURRICULUM.map((mod, i) => (
                <AccordionItem key={i} value={`mod-${i}`} className="rounded-2xl border border-white/10 bg-zinc-900 px-5" data-testid={`curriculum-module-${i}`}>
                  <AccordionTrigger className="text-left py-4 text-white hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-sm font-extrabold text-white shadow">
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-extrabold sm:text-base pr-2">{mod.title}</div>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {mod.tags.map((tag, j) => (
                            <span key={j} className="rounded-full bg-emerald-800/30 px-2 py-0.5 text-xs font-semibold text-emerald-400">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="ml-12 space-y-2">
                      {mod.topics.map((topic, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-zinc-400">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" /> {topic}
                        </li>
                      ))}
                      {mod.isFinal && (
                        <li className="mt-3 rounded-xl border border-emerald-500/30 bg-emerald-900/20 px-4 py-3">
                          <div className="text-sm font-bold text-emerald-300">🎓 Yakuniy ish</div>
                          <div className="text-xs text-emerald-400 mt-0.5">Barcha darslar va amaliy keyslarni tugatganingizdan so'ng rasmiy diplom olasiz</div>
                        </li>
                      )}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── DIPLOMA ──────────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-12" data-testid="section-fm-diploma">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Award className="h-8 w-8 text-emerald-400" />
                <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-fm-diploma-title">Rasmiy diplom oling</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Barcha darslar va amaliy keyslarni tugatganingizdan so'ng siz rasmiy diplom olasiz. Uni rezyumengizga ko'rsata olasiz.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#pricing">
                  <Button className="rounded-full bg-emerald-600 font-bold text-white hover:bg-emerald-700" data-testid="button-fm-diploma-cta">
                    Ariza qoldirish <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="rounded-2xl border-4 border-white bg-zinc-900 p-6 shadow-xl text-center">
              <div className="text-4xl mb-3">🎓</div>
              <div className="text-lg font-extrabold text-white">Moliyaviy Modellashtirish</div>
              <div className="mt-1 text-sm text-zinc-500">FBA Academy diplomi</div>
              <div className="mt-4 h-0.5 bg-emerald-800/30" />
              <div className="mt-4 text-xs text-zinc-500">Kurs yakunlangandan so'ng beriladi</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRACTICAL PROJECTS ───────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-fm-projects">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-fm-projects-title">
            Kursda amaliy tajriba olasiz
          </h2>
          <div className="grid gap-5 lg:grid-cols-3">
            {PRACTICAL_PROJECTS.map((proj, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-md" data-testid={`project-card-${i}`}>
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-lg font-extrabold text-white shadow-md">
                  {proj.num}
                </div>
                <h3 className="text-sm font-extrabold text-white leading-snug">{proj.title}</h3>
                <ul className="mt-4 space-y-2">
                  {proj.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-zinc-400">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEACHERS ─────────────────────────────────────────── */}
      <section className="bg-[#111] py-14 sm:py-20" data-testid="section-fm-teachers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-fm-teachers-title">
            O'qituvchilaringiz — 10 yildan ortiq tajribali amaliyotchi moliyachilar
          </h2>
          <p className="mb-8 text-zinc-400 text-sm">Har bir o'qituvchi real kompaniyalarda ishlagan va nazariyani amaliyot bilan uyg'unlashtiradi</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {TEACHERS.map((t, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900" data-testid={`teacher-card-${i}`}>
                <div className={`flex h-40 items-center justify-center bg-gradient-to-br ${t.color}`}>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-3xl font-extrabold text-white ring-4 ring-white/30">
                    {t.initials}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-extrabold text-white">{t.name}</h3>
                  <div className="mt-0.5 text-xs font-semibold text-emerald-400">{t.role}</div>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURATOR ──────────────────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-fm-curator">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-fm-curator-title">
                Shaxsiy kurator yangi bilimlarni amalda qo'llashga yordam beradi
              </h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Kuratoringiz haftaning 7 kunida aloqada bo'ladi — amaliy ishlaridagi xatolarni tuzatishga va savollaringizga javob berishga yordam beradi.
              </p>
              <div className="mt-6 space-y-3">
                {["Amaliy topshiriqlarni tekshirish va izoh berish", "Kurs davomidagi savollarga javob berish", "Karyera bo'yicha maslahat berish"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm font-medium text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" /> {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Chat mockup */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6" data-testid="curator-chat-mockup">
              <div className="mb-4 text-xs font-bold uppercase tracking-wide text-zinc-400">💬 Kurator bilan suhbat</div>
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="max-w-xs rounded-2xl rounded-tr-sm bg-emerald-500 px-4 py-3 text-sm text-white shadow-sm">
                    Salom! Amaliy ishni topshirdim. Iltimos, tekshiring. Hujjatda bir nechta savol qoldirdim. Javob bera olasizmi?
                    <div className="mt-1 text-right text-xs opacity-70">Aziz ✓✓</div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-xs rounded-2xl rounded-tl-sm bg-[#0d0d0d] px-4 py-3 text-sm text-zinc-200 shadow-sm">
                    Albatta! Amaliy ishni tekshirdim, savollarga javob berdim. Yaxshi ishlabsiz, birozgina tuzatilsa a'lo bo'ladi 😊
                    <div className="mt-1 text-xs text-zinc-500">Kurator</div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-xs rounded-2xl rounded-tr-sm bg-emerald-500 px-4 py-3 text-sm text-white shadow-sm">
                    Rahmat! Tuzataman va qayta topshiraman 🙏
                    <div className="mt-1 text-right text-xs opacity-70">Aziz ✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY FBA ──────────────────────────────────────────── */}
      <section className="bg-[#111] py-14 sm:py-20" data-testid="section-fm-why-fba">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-fm-why-fba-title">
            Nima uchun FBA Academy?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {WHY_FBA.map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900 p-5" data-testid={`why-fba-card-${i}`}>
                <div className="mb-3 text-3xl">{item.icon}</div>
                <div className="text-sm font-extrabold text-white">{item.title}</div>
                <p className="mt-2 text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-fm-reviews">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-2 flex items-baseline justify-between">
            <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-fm-reviews-title">Talabalar sharhlari</h2>
            <span className="text-sm text-zinc-500">O'rtacha reyting — ⭐ 4.8</span>
          </div>
          <p className="mb-8 text-zinc-500 text-sm">Talabalar kursimizni yaxshi ko'radi va o'z sharhlarini yozadi</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((rev, i) => (
              <div key={i} className="flex flex-col rounded-2xl border border-white/10 bg-zinc-900 p-6" data-testid={`review-card-${i}`}>
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-extrabold text-white">{rev.name}</div>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[1,2,3,4,5].map((s) => <Star key={s} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
                      <span className="ml-1 text-xs font-bold text-zinc-400">{rev.rating}.0</span>
                    </div>
                  </div>
                  <span className="text-xs text-zinc-500 font-medium">{rev.source}</span>
                </div>
                <div className="mb-2 text-xs font-semibold text-emerald-400">{rev.course}</div>
                <h3 className="mb-2 text-sm font-extrabold text-white">{rev.title}</h3>
                <p className="flex-1 text-xs text-zinc-400 leading-relaxed">{rev.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section id="pricing" className="bg-slate-900 py-14 sm:py-20" data-testid="section-fm-pricing">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-3xl" data-testid="text-fm-pricing-title">Kurs narxi</h2>
          <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white">-50% chegirma</span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white">📅 Boshlanish: 8-mart</span>
              </div>
              <p className="mb-4 text-sm text-zinc-500">12 oyga foizsiz bo'lib to'lash mumkin</p>
              <div className="mb-1">
                <span className="text-4xl font-extrabold text-white" data-testid="text-fm-price-main">990 000</span>
                <span className="text-lg font-bold text-white"> so'm/oy</span>
              </div>
              <div className="mb-6 text-base text-zinc-500 line-through">Chegirmasiz: 1 980 000 so'm/oy</div>
              <div className="grid grid-cols-2 gap-3">
                {["Rasmiy diplom", "Kurator 1 yil", "Kursga abadiy kirish", "Bepul yangilanishlar"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-zinc-900 p-6 shadow-2xl" data-testid="card-fm-pricing-form">
              <h3 className="mb-4 text-lg font-extrabold text-white">Kursga yozilish yoki bepul konsultatsiya</h3>
              <LeadForm source="course-financial-modeling-pricing" buttonText="Bepul konsultatsiya olish" />
            </div>
          </div>
        </div>
      </section>

      <CourseFormatSection />
      <CourseBonusesSection
        bonuses={FM_BONUSES}
        totalUz="1 100 000 so'mdan ortiq"
        totalRu="Более 11 000 ₽"
        totalEn="Over $110"
      />

      <CourseRelated excludeId="financial-modeling" />

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-[#111] py-14 sm:py-20" data-testid="section-fm-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-fm-faq-title">{t.page.faqTitle}</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {faqs.length > 0 ? faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="rounded-2xl border border-white/10 bg-zinc-900 px-6" data-testid={`fm-faq-${faq.id}`}>
                  <AccordionTrigger className="text-left font-semibold py-5 text-sm sm:text-base text-white hover:no-underline hover:text-purple-300">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-zinc-400 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              )) : [
                { q: "Moliya bo'yicha oldindan bilim kerakmi?", a: "Yo'q, kurs noldan boshlanadi. Excel bilan ishlashning asosiy ko'nikmalari yetarli." },
                { q: "Kurs qancha davom etadi?", a: "1-2 oy: 26 interaktiv dars, 4 biznes-keys, 4 amaliy topshiriq." },
                { q: "Bo'lib to'lash imkoni bormi?", a: "Ha, 12 oyga foizsiz bo'lib to'lash mumkin." },
                { q: "Diplom rasmiy hujjatmi?", a: "Ha, FBA Academy tomonidan berilgan rasmiy diplom bo'lib, uni rezyumengizga qo'shishingiz mumkin." },
                { q: "Kursni tugatgandan keyin ish topishda yordam bormi?", a: "Kurator karyera bo'yicha maslahat beradi va rezyume tayyorlashda yordam qiladi." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`q-${i}`} className="rounded-2xl border border-white/10 bg-zinc-900 px-6" data-testid={`fm-faq-default-${i}`}>
                  <AccordionTrigger className="text-left font-semibold py-5 text-sm sm:text-base text-white hover:no-underline hover:text-purple-300">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-zinc-400 pb-5 text-sm leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CourseBlogLinks color="green" links={[
        { href: "/blog/financial-modeling-excel-dan-kariyeragacha", title: "Financial Modeling: Excel dan karyeragacha", readTime: "9 daqiqa" },
        { href: "/blog/moliyaviy-tahlilchi-bolish-yol-xaritasi", title: "Moliyaviy tahlilchi bo'lish yo'l xaritasi", readTime: "9 daqiqa" },
        { href: "/blog/acca-vs-dipifr-vs-cfa-qaysi-yaxshi", title: "ACCA vs DipIFR vs CFA — qaysi biri yaxshi?", readTime: "11 daqiqa" },
        { href: "/blog/buxgalter-maoshi-ozbekiston-2026", title: "Moliya mutaxassisi maoshi 2026", readTime: "8 daqiqa" },
      ]} />
    </Layout>
  );
}
