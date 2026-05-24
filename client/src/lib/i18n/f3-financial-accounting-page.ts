import type { Language } from "@/lib/translations";
import type { SpForWhom } from "@/lib/i18n/strategic-professional-page";

export type F3PageI18n = {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  ogTitle: string;
  ogDescription: string;
  breadcrumbHome: string;
  breadcrumbCourses: string;
  breadcrumbAcca: string;
  breadcrumbF3: string;
  heroBadge: string;
  heroTitleLine1: string;
  heroTitleHighlight: string;
  heroDesc: string;
  heroCta: string;
  heroStudentsLine: string;
  formTitle: string;
  formHint: string;
  formFootnote: string;
  sectionIntroVideoTitle: string;
  sectionIntroVideoLead: string;
  sectionAccaTitle: string;
  accaInfo: string[];
  sectionLearnTitle: string;
  sectionLearnVideoLead: string;
  whatLearn: string[];
  sectionWhyF3Title: string;
  whyF3: string[];
  sectionForWhomTitle: string;
  forWhom: SpForWhom[];
  sectionFormatTitle: string;
  formatItems: string[];
  sectionInstructorTitle: string;
  instructorPlaceholderTitle: string;
  instructorPlaceholderHint: string;
  sectionOutcomesTitle: string;
  sectionOutcomesLead: string;
  outcomes: string[];
  sectionReviewsTitle: string;
  sectionReviewsLead: string;
  reviewScoreLabel: string;
  reviewInstagramBadge: string;
  finalTitle: string;
  finalDesc: string;
  ctaBullets: string[];
  finalFormTitle: string;
  finalFormHint: string;
  jsonLdName: string;
  jsonLdDesc: string;
};

const ACCA_INFO_UZ = [
  "ACCA — xalqaro darajada tan olingan Moliya va Buxgalteriya sertifikati",
  "180 tadan ortiq davlatda tan olingan va ishlash imkoniyatini beradi",
  "O'zbekistonda ham soha vakillaridan talab qilinuvchi muhim ko'nikma",
  "13 ta fandan iborat — F1–F9 hamda P bosqich fanlari",
  "F3 — ACCA o'qishda asos bo'la oladigan, birinchi bo'lib boshlash kerak bo'ladigan fanlardan biridir",
];

const WHAT_LEARN_UZ = [
  "Moliyaviy hisobotlar: balans, foyda-zarar, pul oqimi",
  "Konsolidatsion moliyaviy hisobotlar: balans, foyda-zarar",
  "Hisob tizimi, buxgalteriya asoslari",
  "Hisobotlarni tahlil qilish asoslari",
  "Praktik misollar va real vazifalar",
  "Imtihon shakli, format, savollar",
];

const WHY_F3_UZ = [
  "F3 – moliyaviy hisobning poydevori",
  "ACCAning boshqa fanlarini tushunishga yordam beradi",
  "Ish topishda va amaliyotda bevosita kerak bo'ladigan bilimlar",
  "Ko'p yillik o'qitish tajribamizda eng samarali yo'l aynan F3'dan boshlash bo'ldi",
];

const FOR_WHOM_UZ: SpForWhom[] = [
  { emoji: "🎓", title: "Talabalar", desc: "Iqtisod, buxgalteriya, moliya, soliq, audit, menejment yo'nalishida o'qiyotganlar" },
  { emoji: "💼", title: "Soha mutaxassislari", desc: "Lavozim oshishi, maoshni ko'tarilishi, karyera qilish uchun" },
  { emoji: "🚀", title: "Karyera o'zgartiruvchilar", desc: "Yuqoridagi sohalarda o'z karyerasini qurmoqchi yoki o'zgartirmoqchilar" },
];

const FORMAT_UZ = [
  "Darslar uch qisimga bo'linadi: O'qitish, Takrorlash, Sinov imtihonlari (Mock-exams)",
  "Oflayn (Markazda) va Onlayn (Zoom platformasi orqali)",
  "Nazariy va amaliy mashg'ulotlar",
  "Imtihon savollari va keyslar tahlili",
  "Savol-javob hamda muhokama sessiyalari",
];

const OUT_UZ = [
  "Moliyaviy hisobotlarni tahlil qila olasiz",
  "ACCA'ning qolgan F fanlariga o'tish osonlashadi",
  "ACCA yo'nalishidagi motivatsiyangiz mustahkamlanadi",
  "Ishga joylashish imkoniyatingiz oshadi",
];

export const F3_FINANCIAL_ACCOUNTING_PAGE: Record<Language, F3PageI18n> = {
  en: {
    seoTitle: "F3 Financial Accounting — ACCA Fundamentals | FBA Academy Tashkent",
    seoDescription:
      "ACCA F3 Financial Accounting — financial reporting, bookkeeping foundations and exam prep. The natural first step on the ACCA path. FBA Academy.",
    seoKeywords: "F3 Financial Accounting, ACCA F3 course, ACCA fundamentals, financial accounting Uzbekistan, FBA Academy",
    ogTitle: "F3 Financial Accounting — First Step on the ACCA Path | FBA Academy",
    ogDescription: "International certificate covering financial accounting, reporting and core business concepts.",
    breadcrumbHome: "Home",
    breadcrumbCourses: "Courses",
    breadcrumbAcca: "ACCA",
    breadcrumbF3: "F3 Financial Accounting",
    heroBadge: "First step on the ACCA path",
    heroTitleLine1: "Financial Accounting (F3)",
    heroTitleHighlight: "Your ACCA starting point",
    heroDesc:
      "Build the financial accounting and reporting foundations required for the rest of the ACCA qualification.",
    heroCta: "Request course details",
    heroStudentsLine: "Our student community keeps growing",
    formTitle: "Request detailed course information",
    formHint: "Leave your details — our team will contact you",
    formFootnote: "Your information is kept confidential",
    sectionIntroVideoTitle: "Learn more about the F3 course",
    sectionIntroVideoLead: "Watch a short overview of Financial Accounting (F3) at FBA Academy.",
    sectionAccaTitle: "What is ACCA and why does it matter?",
    accaInfo: [
      "ACCA is a globally recognised finance and accounting qualification",
      "Recognised in 180+ countries for employability",
      "Increasingly valued by employers in Uzbekistan too",
      "13 exams across F1–F9 and the Professional stage",
      "F3 is one of the core papers many learners take first",
    ],
    sectionLearnTitle: "What you will cover in F3",
    sectionLearnVideoLead: "In this short video — what you study in F3 Financial Accounting",
    whatLearn: [
      "Financial statements: balance sheet, P&L, cash flow",
      "Group financial statements: balance sheet, P&L",
      "Accounting systems and bookkeeping basics",
      "Introduction to analysing financial statements",
      "Practice tasks and realistic scenarios",
      "Exam format, structure and question styles",
    ],
    sectionWhyF3Title: "Why start with F3?",
    whyF3: [
      "F3 is the backbone of financial accounting",
      "It unlocks understanding of later ACCA papers",
      "Directly relevant in jobs and internships",
      "Our experience shows F3 is the most effective entry point",
    ],
    sectionForWhomTitle: "Who is this course for?",
    forWhom: [
      { emoji: "🎓", title: "Students", desc: "Economics, accounting, finance, tax, audit or management majors." },
      { emoji: "💼", title: "Practitioners", desc: "Professionals aiming for promotion or a salary step-up." },
      { emoji: "🚀", title: "Career changers", desc: "Anyone pivoting into finance and accounting roles." },
    ],
    sectionFormatTitle: "Format and delivery",
    formatItems: [
      "Structure: teaching, revision and mock exams",
      "Offline at our centre and online via Zoom",
      "Theory with intensive practice",
      "Past exam questions and case analysis",
      "Q&A and discussion sessions",
    ],
    sectionInstructorTitle: "Who delivers the F3 classes?",
    instructorPlaceholderTitle: "Instructor profiles coming soon",
    instructorPlaceholderHint: "Full bios will be published shortly.",
    sectionOutcomesTitle: "After you complete the course",
    sectionOutcomesLead: "You can expect:",
    outcomes: [
      "Ability to analyse financial statements with confidence",
      "A smoother transition to other ACCA F papers",
      "Stronger motivation on your ACCA journey",
      "Better employability in finance roles",
    ],
    sectionReviewsTitle: "Results and student voices",
    sectionReviewsLead: "Scores and experiences from recent learners",
    reviewScoreLabel: "Score",
    reviewInstagramBadge: "Instagram Reel",
    finalTitle: "Start your ACCA career journey",
    finalDesc: "Complete the form for a detailed consultation or to register. We will contact you shortly.",
    ctaBullets: [
      "The first milestone on the ACCA path",
      "Theory and hands-on practice",
      "Career growth opportunities",
      "Professional mentors",
    ],
    finalFormTitle: "Register your interest",
    finalFormHint: "Complete the form — a specialist will contact you",
    jsonLdName: "F3 Financial Accounting — ACCA fundamentals | FBA Academy",
    jsonLdDesc: "ACCA F3 Financial Accounting — reporting, bookkeeping and exam preparation.",
  },
  uz: {
    seoTitle: "F3 Financial Accounting Kursi — ACCA Boshlang'ich | FBA Academy Toshkent",
    seoDescription:
      "ACCA F3 Financial Accounting kursi — moliyaviy hisob, hisobot va buxgalteriya asoslarini o'rganing. ACCA yo'lining birinchi bosqichi. FBA Academy.",
    seoKeywords: "F3 Financial Accounting, ACCA F3 kurs, ACCA boshlangich, moliyaviy hisob kursi, buxgalteriya asoslari, FBA Academy ACCA, ACCA Toshkent",
    ogTitle: "F3 Financial Accounting — ACCA Yo'lining Birinchi Bosqichi | FBA Academy",
    ogDescription: "Moliyaviy hisob, menejment va biznes asoslarini chuqur o'rgatuvchi xalqaro sertifikat. ACCA ning asos bo'ladigan, boshlang'ich bilimlar.",
    breadcrumbHome: "Bosh sahifa",
    breadcrumbCourses: "Kurslar",
    breadcrumbAcca: "ACCA",
    breadcrumbF3: "F3 Financial Accounting",
    heroBadge: "ACCA yo'lining birinchi bosqichi",
    heroTitleLine1: "Financial Accounting (F3)",
    heroTitleHighlight: "ACCA yo'lining birinchi bosqichi",
    heroDesc:
      "Moliyaviy hisob, menejment va biznes asoslarini chuqur o'rgatuvchi Xalqaro sertifikat — ACCA'ning asos bo'ladigan, boshlang'ich bilimlarni beradi",
    heroCta: "Kurs haqida batafsil ma'lumot olish",
    heroStudentsLine: "O'quvchilarimiz soni ortib bormoqda",
    formTitle: "Kurs haqida batafsil ma'lumot olish",
    formHint: "Ma'lumotlaringizni qoldiring — mutaxassislarimiz siz bilan bog'lanadi",
    formFootnote: "Ma'lumotlaringiz maxfiy saqlanadi",
    sectionIntroVideoTitle: "F3 kursi haqida video",
    sectionIntroVideoLead: "FBA Academy'da Financial Accounting (F3) kursi haqida qisqacha tanishing.",
    sectionAccaTitle: "ACCA nima va nimasi bilan muhim?",
    accaInfo: ACCA_INFO_UZ,
    sectionLearnTitle: "F3 fanida nimalarni o'rganasiz?",
    sectionLearnVideoLead: "Qisqa videoda — F3 Financial Accounting fanida nimalar o'rganiladi",
    whatLearn: WHAT_LEARN_UZ,
    sectionWhyF3Title: "Nega F3dan boshlash kerak?",
    whyF3: WHY_F3_UZ,
    sectionForWhomTitle: "Kurs kimlar uchun mos?",
    forWhom: FOR_WHOM_UZ,
    sectionFormatTitle: "Dars formati va imkoniyatlar",
    formatItems: FORMAT_UZ,
    sectionInstructorTitle: "F3 darslarini kimlar olib boradi?",
    instructorPlaceholderTitle: "O'qituvchilar ma'lumoti yig'ilmoqda",
    instructorPlaceholderHint: "Tez orada o'qituvchilar haqida to'liq ma'lumot qo'shiladi",
    sectionOutcomesTitle: "Kursni tugatganingizdan so'ng:",
    sectionOutcomesLead: "Sizni quyidagi natijalar kutmoqda",
    outcomes: OUT_UZ,
    sectionReviewsTitle: "O'quvchilarimiz natijasi va ular biz haqimizda nima deyishadi?",
    sectionReviewsLead: "Kursni tugatgan talabalarimiz tajribasi va imtihon natijalari",
    reviewScoreLabel: "Ball",
    reviewInstagramBadge: "Instagram Reel",
    finalTitle: "ACCA'da karyera qilishni boshlang!",
    finalDesc:
      "Yanada to'liqroq ma'lumot olish yoki kursga ro'yxatdan o'tish uchun quyidagi ma'lumotlarni to'ldiring. Siz bilan tez orada bog'lanamiz.",
    ctaBullets: [
      "ACCA yo'lining birinchi qadami",
      "Amaliy va nazariy bilimlar",
      "Karyerada o'sish imkoniyati",
      "Professional mentorlar",
    ],
    finalFormTitle: "Ro'yxatdan o'tish",
    finalFormHint: "Formani to'ldiring — mutaxassis siz bilan bog'lanadi",
    jsonLdName: "F3 Financial Accounting — ACCA boshlang'ich bosqich | FBA Academy",
    jsonLdDesc: "ACCA F3 Financial Accounting kursi — moliyaviy hisob, hisobot va buxgalteriya asoslari.",
  },
  ru: {
    seoTitle: "F3 Financial Accounting — Старт ACCA | FBA Academy Ташкент",
    seoDescription:
      "Курс ACCA F3 Financial Accounting — финансовый учёт, отчётность и основы бухгалтерии. Первый шаг на пути ACCA.",
    seoKeywords: "ACCA F3, Financial Accounting курс, ACCA Ташкент, финансовый учёт, FBA Academy",
    ogTitle: "F3 Financial Accounting — Первый шаг ACCA | FBA Academy",
    ogDescription: "Международный сертификат: финансовый учёт, отчётность и базовые концепции бизнеса.",
    breadcrumbHome: "Главная",
    breadcrumbCourses: "Курсы",
    breadcrumbAcca: "ACCA",
    breadcrumbF3: "F3 Financial Accounting",
    heroBadge: "Первый этап квалификации ACCA",
    heroTitleLine1: "Financial Accounting (F3)",
    heroTitleHighlight: "Старт программы ACCA",
    heroDesc:
      "Фундамент финансового учёта и отчётности — база для дальнейших экзаменов ACCA и карьеры в финансах.",
    heroCta: "Получить подробности о курсе",
    heroStudentsLine: "Сообщество студентов растёт",
    formTitle: "Запросить подробности о курсе",
    formHint: "Оставьте контакты — мы свяжемся с вами",
    formFootnote: "Данные конфиденциальны",
    sectionIntroVideoTitle: "Видео о курсе F3",
    sectionIntroVideoLead: "Краткий обзор курса Financial Accounting (F3) в FBA Academy.",
    sectionAccaTitle: "Что такое ACCA и зачем он нужен?",
    accaInfo: [
      "ACCA — признанный международный диплом в финансах и учёте",
      "Признаётся в 180+ странах",
      "Востребован у работодателей в Узбекистане",
      "13 экзаменов: уровень F и Professional",
      "F3 — один из ключевых стартовых модулей",
    ],
    sectionLearnTitle: "Что входит в F3",
    sectionLearnVideoLead: "В коротком ролике — что изучают в F3 Financial Accounting",
    whatLearn: [
      "Отчётность: баланс, ОПУ, движение денежных средств",
      "Консолидированная отчётность",
      "План счетов и основы бухгалтерии",
      "Базовый анализ отчётности",
      "Практические кейсы и задания",
      "Формат экзамена и типовые вопросы",
    ],
    sectionWhyF3Title: "Почему начинать с F3?",
    whyF3: [
      "F3 — основа финансового учёта",
      "Упрощает понимание следующих экзаменов F",
      "Напрямую применимо в работе",
      "По нашей практике — оптимальная точка входа",
    ],
    sectionForWhomTitle: "Для кого курс?",
    forWhom: [
      { emoji: "🎓", title: "Студенты", desc: "Экономика, учёт, финансы, налоги, аудит, менеджмент." },
      { emoji: "💼", title: "Специалисты", desc: "Повышение, рост зарплаты и карьеры." },
      { emoji: "🚀", title: "Смена карьеры", desc: "Те, кто входит в финансы и учёт." },
    ],
    sectionFormatTitle: "Формат и возможности",
    formatItems: [
      "Структура: лекции, повторение, пробные экзамены",
      "Офлайн в центре и онлайн в Zoom",
      "Теория и практика",
      "Разбор вопросов и кейсов",
      "Сессии вопросов и ответов",
    ],
    sectionInstructorTitle: "Кто ведёт занятия F3?",
    instructorPlaceholderTitle: "Профили преподавателей скоро",
    instructorPlaceholderHint: "Скоро добавим полные биографии.",
    sectionOutcomesTitle: "После курса",
    sectionOutcomesLead: "Вас ждут результаты:",
    outcomes: [
      "Уверенный анализ финансовой отчётности",
      "Лёгкий переход к другим экзаменам F",
      "Сильная мотивация на пути ACCA",
      "Лучшие шансы на трудоустройство",
    ],
    sectionReviewsTitle: "Результаты и отзывы студентов",
    sectionReviewsLead: "Оценки и опыт недавних выпускников",
    reviewScoreLabel: "Балл",
    reviewInstagramBadge: "Reels в Instagram",
    finalTitle: "Начните карьеру с ACCA!",
    finalDesc: "Заполните форму для консультации или записи — мы свяжемся с вами.",
    ctaBullets: [
      "Первый шаг к ACCA",
      "Теория и практика",
      "Рост карьеры",
      "Профессиональные менторы",
    ],
    finalFormTitle: "Регистрация",
    finalFormHint: "Заполните форму — специалист свяжется с вами",
    jsonLdName: "F3 Financial Accounting — старт ACCA | FBA Academy",
    jsonLdDesc: "Курс ACCA F3 — учёт, отчётность и подготовка к экзамену.",
  },
};

export function f3FinancialAccountingJsonLd(lang: Language, baseUrl: string) {
  const tx = F3_FINANCIAL_ACCOUNTING_PAGE[lang];
  return [
    {
      "@type": "Course",
      "@id": `${baseUrl}/course/f3-financial-accounting#course`,
      name: tx.jsonLdName,
      description: tx.jsonLdDesc,
      url: `${baseUrl}/course/f3-financial-accounting`,
      provider: { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "FBA Academy", url: baseUrl },
      educationalLevel: "Beginner",
      inLanguage: ["uz", "ru", "en"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/course/f3-financial-accounting#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: tx.breadcrumbHome, item: baseUrl },
        { "@type": "ListItem", position: 2, name: tx.breadcrumbCourses, item: `${baseUrl}/courses` },
        { "@type": "ListItem", position: 3, name: tx.breadcrumbAcca, item: `${baseUrl}/course/acca` },
        { "@type": "ListItem", position: 4, name: tx.breadcrumbF3, item: `${baseUrl}/course/f3-financial-accounting` },
      ],
    },
  ];
}
