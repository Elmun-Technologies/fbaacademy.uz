import type { Language } from "@/lib/translations";
import type { AkLearn, AkFormat } from "@/lib/i18n/applied-knowledge-page";

export type AppliedSkillsPageI18n = {
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
  { title: "Corporate & Business Law (LW)", desc: "Contracts, employment, corporate and commercial law foundations." },
  { title: "Performance Management (PM)", desc: "Budgeting, performance analysis and transfer pricing." },
  { title: "Taxation (TX)", desc: "Income tax, VAT, tax planning and declarations." },
  { title: "Financial Reporting (FR)", desc: "IFRS/IAS standards, consolidation and financial statements." },
  { title: "Audit & Assurance (AA)", desc: "Audit process, internal control and professional ethics." },
  { title: "Financial Management (FM)", desc: "Investment decisions, financing and risk management." },
];

const LEARN_UZ: AkLearn[] = [
  { title: "Korporativ huquq (LW)", desc: "Shartnoma, mehnat, korporativ va tijorat huquqi asoslari" },
  { title: "Samaradorlik boshqaruvi (PM)", desc: "Byudjetlashtirish, samaradorlik tahlili va transfer narxlash" },
  { title: "Soliq (TX)", desc: "Daromad solig'i, QQS, soliq rejalash va deklaratsiyalar" },
  { title: "IFRS hisobot (FR)", desc: "IFRS/IAS standartlari, konsolidatsiya va moliyaviy hisobotlar" },
  { title: "Audit (AA)", desc: "Audit jarayoni, ichki nazorat, professional etika" },
  { title: "Moliyaviy menejment (FM)", desc: "Investitsiya qarorlari, moliyalashtirish va risk boshqaruvi" },
];

const LEARN_RU: AkLearn[] = [
  { title: "Корпоративное право (LW)", desc: "Договоры, трудовое право, корпоративное и коммерческое право." },
  { title: "Управление эффективностью (PM)", desc: "Бюджетирование, анализ эффективности и трансфертное ценообразование." },
  { title: "Налогообложение (TX)", desc: "НДФЛ, НДС, налоговое планирование и декларации." },
  { title: "Финансовая отчётность (FR)", desc: "Стандарты IFRS/IAS, консолидация и отчётность." },
  { title: "Аудит и assurance (AA)", desc: "Процесс аудита, внутренний контроль и этика." },
  { title: "Финансовый менеджмент (FM)", desc: "Инвестиционные решения, финансирование и управление рисками." },
];

const WHAT_UZ = [
  "ACCA sertifikatsiyasining ikkinchi bosqichi",
  "6 ta imtihon: LW, PM, TX, FR, AA, FM",
  "Professional darajadagi chuqur bilimlar",
  "Applied Knowledge tugatgandan so'ng o'tiladi",
];

const FOR_WHOM_UZ = [
  "Applied Knowledge tugatganlar — keyingi bosqichga tayyor",
  "Tajribali buxgalterlar — xalqaro sertifikat olmoqchilar",
  "Moliya mutaxassislari — IFRS va audit bo'yicha chuqur bilim olmoqchilar",
  "Auditorlar — ACCA malakasini to'ldirmoqchi bo'lganlar",
];

const WHY_UZ = [
  "Professional darajaga o'tish — ACCA yo'lining eng muhim qismi",
  "Chuqur bilimlar — audit, soliq, IFRS, moliyaviy menejment",
  "Ish beruvchilar tomonidan yuqori baholanadi",
  "Strategic Professional ga tayyorgarlik",
  "Xalqaro amaliyotga mos bilimlar",
];

const FORMAT_UZ: AkFormat[] = [
  { title: "O'qitish", desc: "Professional o'qituvchilar tomonidan jonli darslar" },
  { title: "Takrorlash", desc: "Har bir mavzu bo'yicha mustahkamlash mashg'ulotlari" },
  { title: "Mock-exams", desc: "Haqiqiy imtihon sharoitida sinov imtihonlar" },
  { title: "Onlayn + Oflayn", desc: "Toshkentda oflayn yoki istalgan joydan onlayn" },
];

const RESULTS_UZ = [
  "Strategic Professional bosqichiga o'tish imkoniyati",
  "6 ta fandan chuqur professional bilimlar",
  "ACCA Applied Skills sertifikati",
  "IFRS bo'yicha moliyaviy hisobot tayyorlash",
  "Audit va soliq bo'yicha amaliy ko'nikmalar",
  "Moliyaviy menejment va investitsiya tahlili",
];

export const APPLIED_SKILLS_PAGE: Record<Language, AppliedSkillsPageI18n> = {
  en: {
    seoTitle: "ACCA Applied Skills — Stage 2 | FBA Academy",
    seoDescription:
      "ACCA Applied Skills — the second stage of ACCA. Six exams: LW, PM, TX, FR, AA, FM. Study in Tashkent or online.",
    seoKeywords:
      "ACCA Applied Skills, LW PM TX FR AA FM, ACCA stage 2, IFRS FR course, ACCA tax audit Uzbekistan, FBA Academy",
    breadcrumbHome: "Home",
    breadcrumbCourses: "Courses",
    badge: "ACCA Stage 2",
    heroTitle: "ACCA Applied Skills — the second stage of ACCA",
    heroDesc:
      "Move to a professional level. Six exams: LW, PM, TX, FR, AA, FM — deep knowledge in audit, tax, IFRS and financial management.",
    heroCta: "Enroll",
    formTitle: "Submit a request",
    sectionWhatTitle: "What is Applied Skills?",
    sectionLearnTitle: "What will you learn?",
    sectionForWhomTitle: "Who is it for?",
    sectionWhyTitle: "Why Applied Skills?",
    sectionFormatTitle: "Class format",
    sectionResultsTitle: "After the course",
    finalTitle: "Step up to professional level",
    finalDesc: "Applied Skills is the core stage of ACCA. Leave a request and we will contact you.",
    finalFormTitle: "Free consultation",
    whatIs: [
      "The second stage of ACCA certification",
      "Six exams: LW, PM, TX, FR, AA, FM",
      "In-depth professional knowledge",
      "Taken after completing Applied Knowledge",
    ],
    learn: LEARN_EN,
    forWhom: [
      "Graduates of Applied Knowledge — ready for the next stage",
      "Experienced accountants pursuing an international certificate",
      "Finance specialists seeking deeper IFRS and audit skills",
      "Auditors completing the ACCA pathway",
    ],
    why: [
      "The professional leap — the most important part of ACCA",
      "Deep skills in audit, tax, IFRS and financial management",
      "Highly valued by employers",
      "Preparation for Strategic Professional",
      "Knowledge aligned with international practice",
    ],
    format: [
      { title: "Teaching", desc: "Live classes with professional instructors" },
      { title: "Revision", desc: "Consolidation for each topic" },
      { title: "Mock exams", desc: "Practice under exam conditions" },
      { title: "Online + Offline", desc: "In Tashkent or online from anywhere" },
    ],
    results: [
      "Progress to Strategic Professional",
      "Deep professional knowledge across six papers",
      "ACCA Applied Skills certificate",
      "Prepare IFRS financial statements",
      "Practical audit and tax skills",
      "Financial management and investment analysis",
    ],
    jsonLdName: "ACCA Applied Skills — Stage 2",
    jsonLdDesc: "Second stage of ACCA: LW, PM, TX, FR, AA, FM exams.",
  },
  uz: {
    seoTitle: "ACCA Applied Skills — 2-Bosqich Kursi | FBA Academy",
    seoDescription:
      "ACCA Applied Skills — ACCA sertifikatsiyasining ikkinchi bosqichi. 6 ta imtihon: LW, PM, TX, FR, AA, FM. FBA Academy'da Toshkentda o'qing yoki onlayn.",
    seoKeywords:
      "ACCA Applied Skills, LW PM TX FR AA FM, ACCA 2 bosqich, IFRS FR kurs, ACCA audit soliq O'zbekiston, FBA Academy",
    breadcrumbHome: "Bosh sahifa",
    breadcrumbCourses: "Kurslar",
    badge: "ACCA 2-bosqich",
    heroTitle: "ACCA Applied Skills — ACCA ning ikkinchi bosqichi",
    heroDesc:
      "Professional darajaga o'tish. 6 ta imtihon: LW, PM, TX, FR, AA, FM — audit, soliq, IFRS va moliyaviy menejment bo'yicha chuqur bilimlar.",
    heroCta: "Ro'yxatdan o'tish",
    formTitle: "So'rov qoldiring",
    sectionWhatTitle: "Applied Skills nima?",
    sectionLearnTitle: "Nimalarni o'rganasiz?",
    sectionForWhomTitle: "Kimlar uchun?",
    sectionWhyTitle: "Nima uchun Applied Skills?",
    sectionFormatTitle: "Dars formati",
    sectionResultsTitle: "Kurs yakunida",
    finalTitle: "Professional darajaga o'ting",
    finalDesc: "Applied Skills — ACCA yo'lining eng muhim bosqichi. So'rov qoldiring va biz siz bilan bog'lanamiz.",
    finalFormTitle: "Bepul konsultatsiya",
    whatIs: WHAT_UZ,
    learn: LEARN_UZ,
    forWhom: FOR_WHOM_UZ,
    why: WHY_UZ,
    format: FORMAT_UZ,
    results: RESULTS_UZ,
    jsonLdName: "ACCA Applied Skills — 2-Bosqich",
    jsonLdDesc: "ACCA sertifikatsiyasining ikkinchi bosqichi: LW, PM, TX, FR, AA, FM imtihonlari.",
  },
  ru: {
    seoTitle: "ACCA Applied Skills — Этап 2 | FBA Academy",
    seoDescription:
      "ACCA Applied Skills — второй этап ACCA. Шесть экзаменов: LW, PM, TX, FR, AA, FM. Обучение в Ташкенте или онлайн.",
    seoKeywords:
      "ACCA Applied Skills, LW PM TX FR AA FM, второй этап ACCA, курс IFRS FR, аудит налоги ACCA Узбекистан, FBA Academy",
    breadcrumbHome: "Главная",
    breadcrumbCourses: "Курсы",
    badge: "ACCA Этап 2",
    heroTitle: "ACCA Applied Skills — второй этап ACCA",
    heroDesc:
      "Переход на профессиональный уровень. Шесть экзаменов: LW, PM, TX, FR, AA, FM — глубокие знания по аудиту, налогам, IFRS и финансовому менеджменту.",
    heroCta: "Записаться",
    formTitle: "Оставить заявку",
    sectionWhatTitle: "Что такое Applied Skills?",
    sectionLearnTitle: "Чему вы научитесь?",
    sectionForWhomTitle: "Для кого курс?",
    sectionWhyTitle: "Зачем Applied Skills?",
    sectionFormatTitle: "Формат занятий",
    sectionResultsTitle: "После курса",
    finalTitle: "Перейдите на профессиональный уровень",
    finalDesc: "Applied Skills — ключевой этап ACCA. Оставьте заявку, и мы свяжемся с вами.",
    finalFormTitle: "Бесплатная консультация",
    whatIs: [
      "Второй этап сертификации ACCA",
      "Шесть экзаменов: LW, PM, TX, FR, AA, FM",
      "Углублённые профессиональные знания",
      "После завершения Applied Knowledge",
    ],
    learn: LEARN_RU,
    forWhom: [
      "Выпускники Applied Knowledge — готовы к следующему этапу",
      "Опытные бухгалтеры, получающие международный сертификат",
      "Финансовые специалисты по IFRS и аудиту",
      "Аудиторы, завершающие путь ACCA",
    ],
    why: [
      "Профессиональный рост — ключевая часть ACCA",
      "Глубокие знания по аудиту, налогам, IFRS и финменеджменту",
      "Высокая ценность для работодателей",
      "Подготовка к Strategic Professional",
      "Соответствие международной практике",
    ],
    format: [
      { title: "Обучение", desc: "Живые занятия с преподавателями" },
      { title: "Повторение", desc: "Закрепление по темам" },
      { title: "Пробные экзамены", desc: "Условия реального экзамена" },
      { title: "Онлайн + Офлайн", desc: "В Ташкенте или онлайн" },
    ],
    results: [
      "Переход к Strategic Professional",
      "Углублённые знания по шести дисциплинам",
      "Сертификат ACCA Applied Skills",
      "Подготовка отчётности по IFRS",
      "Практические навыки аудита и налогов",
      "Финменеджмент и инвестиционный анализ",
    ],
    jsonLdName: "ACCA Applied Skills — Этап 2",
    jsonLdDesc: "Второй этап ACCA: экзамены LW, PM, TX, FR, AA, FM.",
  },
};

export function appliedSkillsJsonLd(lang: Language, baseUrl: string) {
  const tx = APPLIED_SKILLS_PAGE[lang];
  return [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: tx.jsonLdName,
      description: tx.jsonLdDesc,
      provider: { "@type": "Organization", name: "FBA Academy", url: baseUrl },
      educationalLevel: "Intermediate",
      timeRequired: "P6M",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: tx.breadcrumbHome, item: baseUrl },
        { "@type": "ListItem", position: 2, name: tx.breadcrumbCourses, item: `${baseUrl}/courses` },
        { "@type": "ListItem", position: 3, name: "ACCA", item: `${baseUrl}/course/acca` },
        { "@type": "ListItem", position: 4, name: "Applied Skills", item: `${baseUrl}/course/applied-skills` },
      ],
    },
  ];
}
