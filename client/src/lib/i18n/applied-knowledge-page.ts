import type { Language } from "@/lib/translations";

export type AkLearn = { title: string; desc: string; href?: string };
export type AkFormat = { title: string; desc: string };

export type AppliedKnowledgePageI18n = {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  breadcrumbHome: string;
  breadcrumbCourses: string;
  badge: string;
  heroTitle: string;
  heroDesc: string;
  heroCta: string;
  formTitle: string;
  sectionWhatTitle: string;
  sectionLearnTitle: string;
  sectionForWhomTitle: string;
  sectionWhyTitle: string;
  sectionFormatTitle: string;
  sectionResultsTitle: string;
  finalTitle: string;
  finalDesc: string;
  finalFormTitle: string;
  whatIs: string[];
  learn: AkLearn[];
  forWhom: string[];
  why: string[];
  format: AkFormat[];
  results: string[];
  jsonLdName: string;
  jsonLdDesc: string;
};

const LEARN_EN: AkLearn[] = [
  { title: "Business & Technology (BT)", desc: "IT systems, organizational management, professional ethics and the business environment." },
  { title: "Management Accounting (MA)", desc: "Cost analysis, budgeting, standard costing and decision-making." },
  { title: "Financial Accounting (FA)", desc: "Financial statements, assets, liabilities and accounting standards." },
];

const LEARN_UZ: AkLearn[] = [
  { title: "Biznes texnologiyalari (BT)", desc: "IT tizimlari, tashkiliy boshqaruv, professional etika va biznes muhiti" },
  { title: "Boshqaruv hisobi (MA)", desc: "Xarajatlar tahlili, byudjetlashtirish, standart xarajatlar va qaror qabul qilish" },
  { title: "Moliyaviy hisob (FA)", desc: "Moliyaviy hisobotlar, aktivlar, majburiyatlar va buxgalteriya standartlari" },
];

const LEARN_RU: AkLearn[] = [
  { title: "Business & Technology (BT)", desc: "IT-системы, организационное управление, профессиональная этика и бизнес-среда." },
  { title: "Управленческий учёт (MA)", desc: "Анализ затрат, бюджетирование, калькулирование и принятие решений." },
  { title: "Финансовый учёт (FA)", desc: "Финансовая отчётность, активы, обязательства и стандарты учёта." },
];

const WHAT_IS_UZ = [
  "ACCA sertifikatsiyasining boshlang'ich bosqichi",
  "3 ta imtihon: BT, MA, FA",
  "Moliya va buxgalteriya asoslari",
  "Har kim boshlashi mumkin — maxsus talab yo'q",
];

const FOR_WHOM_UZ = [
  "Yangi boshlovchilar — moliya sohasiga kirishni xohlovchilar",
  "Talabalar — iqtisodiyot va moliya yo'nalishi o'qiyotganlar",
  "Karyera o'zgartiruvchilar — boshqa sohadan moliyaga o'tmoqchilar",
  "Buxgalterlar — xalqaro sertifikat olishni boshlamoqchilar",
];

const WHY_UZ = [
  "ACCA yo'lining boshi — bu yerdan hammasi boshlanadi",
  "Fundamental bilimlar — moliya, hisob, texnologiya",
  "Xalqaro tan olingan sertifikat",
  "Keyingi bosqich (Applied Skills) ga mustahkam poydevor",
  "CBE formatida istalgan vaqtda topshirish mumkin",
];

const FORMAT_UZ: AkFormat[] = [
  { title: "O'qitish", desc: "Professional o'qituvchilar tomonidan jonli darslar" },
  { title: "Takrorlash", desc: "Har bir mavzu bo'yicha mustahkamlash mashg'ulotlari" },
  { title: "Mock-exams", desc: "Haqiqiy imtihon sharoitida sinov imtihonlar" },
  { title: "Onlayn + Oflayn", desc: "Toshkentda oflayn yoki istalgan joydan onlayn" },
];

const RESULTS_UZ = [
  "Applied Skills bosqichiga o'tish imkoniyati",
  "BT, MA, FA fanlaridan fundamental bilimlar",
  "ACCA Applied Knowledge sertifikati",
  "Moliyaviy hisobotlarni tushunish qobiliyati",
  "Professional buxgalteriya asoslari",
];

export const APPLIED_KNOWLEDGE_PAGE: Record<Language, AppliedKnowledgePageI18n> = {
  en: {
    seoTitle: "ACCA Applied Knowledge — Stage 1 | FBA Academy",
    seoDescription:
      "ACCA Applied Knowledge — the first stage of ACCA. BT, MA, FA exams. Study in Tashkent or online at FBA Academy.",
    seoKeywords:
      "ACCA Applied Knowledge, BT MA FA, ACCA stage 1, ACCA beginner course Uzbekistan, ACCA Tashkent online, FBA Academy",
    breadcrumbHome: "Home",
    breadcrumbCourses: "Courses",
    badge: "ACCA Stage 1",
    heroTitle: "ACCA Applied Knowledge — the first stage of ACCA",
    heroDesc: "Enter the world of finance and accounting. Three exams: BT, MA, FA — the essential start of your ACCA journey.",
    heroCta: "Enroll",
    formTitle: "Submit a request",
    sectionWhatTitle: "What is Applied Knowledge?",
    sectionLearnTitle: "What will you learn?",
    sectionForWhomTitle: "Who is it for?",
    sectionWhyTitle: "Why Applied Knowledge?",
    sectionFormatTitle: "Class format",
    sectionResultsTitle: "After the course",
    finalTitle: "Start your ACCA journey today",
    finalDesc: "Applied Knowledge is the first step in your finance career. Leave a request and we will contact you.",
    finalFormTitle: "Free consultation",
    whatIs: [
      "The entry stage of ACCA certification",
      "Three exams: BT, MA, FA",
      "Foundations of finance and accounting",
      "Anyone can start — no special prerequisites",
    ],
    learn: LEARN_EN,
    forWhom: [
      "Beginners who want to enter finance",
      "Students studying economics and finance",
      "Career switchers moving into finance",
      "Accountants starting an international certificate",
    ],
    why: [
      "The beginning of the ACCA pathway — everything starts here",
      "Fundamentals — finance, accounting, technology",
      "Internationally recognized certificate",
      "Solid foundation for Applied Skills",
      "CBE format — flexible exam scheduling",
    ],
    format: [
      { title: "Teaching", desc: "Live classes with professional instructors" },
      { title: "Revision", desc: "Consolidation sessions for each topic" },
      { title: "Mock exams", desc: "Practice exams under real exam conditions" },
      { title: "Online + Offline", desc: "In Tashkent or online from anywhere" },
    ],
    results: [
      "Progress to the Applied Skills stage",
      "Core knowledge in BT, MA, FA",
      "ACCA Applied Knowledge certificate",
      "Ability to understand financial statements",
      "Professional accounting foundations",
    ],
    jsonLdName: "ACCA Applied Knowledge — Stage 1",
    jsonLdDesc: "The first stage of ACCA: BT, MA, FA exams.",
  },
  uz: {
    seoTitle: "ACCA Applied Knowledge — 1-Bosqich Kursi | FBA Academy",
    seoDescription:
      "ACCA Applied Knowledge — ACCA sertifikatsiyasining birinchi bosqichi. BT, MA, FA imtihonlari. FBA Academy'da Toshkentda o'qing yoki onlayn.",
    seoKeywords:
      "ACCA Applied Knowledge, BT MA FA, ACCA 1 bosqich, ACCA boshlang'ich kurs, ACCA Toshkent onlayn, FBA Academy",
    breadcrumbHome: "Bosh sahifa",
    breadcrumbCourses: "Kurslar",
    badge: "ACCA 1-bosqich",
    heroTitle: "ACCA Applied Knowledge — ACCA ning birinchi bosqichi",
    heroDesc: "Moliya va buxgalteriya dunyosiga kirish. 3 ta imtihon: BT, MA, FA — ACCA yo'lining eng muhim boshlanishi.",
    heroCta: "Ro'yxatdan o'tish",
    formTitle: "So'rov qoldiring",
    sectionWhatTitle: "Applied Knowledge nima?",
    sectionLearnTitle: "Nimalarni o'rganasiz?",
    sectionForWhomTitle: "Kimlar uchun?",
    sectionWhyTitle: "Nima uchun Applied Knowledge?",
    sectionFormatTitle: "Dars formati",
    sectionResultsTitle: "Kurs yakunida",
    finalTitle: "ACCA yo'lini bugun boshlang",
    finalDesc: "Applied Knowledge — moliya sohasidagi karyerangizning birinchi qadami. So'rov qoldiring va biz siz bilan bog'lanamiz.",
    finalFormTitle: "Bepul konsultatsiya",
    whatIs: WHAT_IS_UZ,
    learn: LEARN_UZ,
    forWhom: FOR_WHOM_UZ,
    why: WHY_UZ,
    format: FORMAT_UZ,
    results: RESULTS_UZ,
    jsonLdName: "ACCA Applied Knowledge — 1-Bosqich",
    jsonLdDesc: "ACCA sertifikatsiyasining birinchi bosqichi: BT, MA, FA imtihonlari.",
  },
  ru: {
    seoTitle: "ACCA Applied Knowledge — Этап 1 | FBA Academy",
    seoDescription:
      "ACCA Applied Knowledge — первый этап ACCA. Экзамены BT, MA, FA. Обучение в Ташкенте или онлайн в FBA Academy.",
    seoKeywords:
      "ACCA Applied Knowledge, BT MA FA, первый этап ACCA, курс ACCA для начинающих, ACCA Ташкент онлайн, FBA Academy",
    breadcrumbHome: "Главная",
    breadcrumbCourses: "Курсы",
    badge: "ACCA Этап 1",
    heroTitle: "ACCA Applied Knowledge — первый этап ACCA",
    heroDesc: "Вход в мир финансов и бухгалтерии. Три экзамена: BT, MA, FA — ключевое начало пути ACCA.",
    heroCta: "Записаться",
    formTitle: "Оставить заявку",
    sectionWhatTitle: "Что такое Applied Knowledge?",
    sectionLearnTitle: "Чему вы научитесь?",
    sectionForWhomTitle: "Для кого курс?",
    sectionWhyTitle: "Зачем Applied Knowledge?",
    sectionFormatTitle: "Формат занятий",
    sectionResultsTitle: "После курса",
    finalTitle: "Начните путь ACCA сегодня",
    finalDesc: "Applied Knowledge — первый шаг в карьере в финансах. Оставьте заявку, и мы свяжемся с вами.",
    finalFormTitle: "Бесплатная консультация",
    whatIs: [
      "Начальный этап сертификации ACCA",
      "Три экзамена: BT, MA, FA",
      "Основы финансов и бухгалтерии",
      "Можно начать без специальных требований",
    ],
    learn: LEARN_RU,
    forWhom: [
      "Новички, которые хотят войти в финансы",
      "Студенты по экономике и финансам",
      "Те, кто меняет сферу на финансы",
      "Бухгалтеры, начинающие международный сертификат",
    ],
    why: [
      "Начало пути ACCA — всё начинается здесь",
      "Фундаментальные знания — финансы, учёт, технологии",
      "Международно признанный сертификат",
      "Надёжная база для этапа Applied Skills",
      "Формат CBE — гибкий график сдачи",
    ],
    format: [
      { title: "Обучение", desc: "Живые занятия с профессиональными преподавателями" },
      { title: "Повторение", desc: "Закрепление по каждой теме" },
      { title: "Пробные экзамены", desc: "Тренировка в условиях реального экзамена" },
      { title: "Онлайн + Офлайн", desc: "В Ташкенте или онлайн из любой точки" },
    ],
    results: [
      "Возможность перейти на этап Applied Skills",
      "Фундаментальные знания по BT, MA, FA",
      "Сертификат ACCA Applied Knowledge",
      "Понимание финансовой отчётности",
      "Профессиональные основы бухгалтерии",
    ],
    jsonLdName: "ACCA Applied Knowledge — Этап 1",
    jsonLdDesc: "Первый этап ACCA: экзамены BT, MA, FA.",
  },
};

export function appliedKnowledgeJsonLd(lang: Language, baseUrl: string) {
  const tx = APPLIED_KNOWLEDGE_PAGE[lang];
  return [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: tx.jsonLdName,
      description: tx.jsonLdDesc,
      provider: { "@type": "Organization", name: "FBA Academy", url: baseUrl },
      educationalLevel: "Beginner",
      timeRequired: "P4M",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: tx.breadcrumbHome, item: baseUrl },
        { "@type": "ListItem", position: 2, name: tx.breadcrumbCourses, item: `${baseUrl}/courses` },
        { "@type": "ListItem", position: 3, name: "ACCA", item: `${baseUrl}/course/acca` },
        { "@type": "ListItem", position: 4, name: "Applied Knowledge", item: `${baseUrl}/course/applied-knowledge` },
      ],
    },
  ];
}
