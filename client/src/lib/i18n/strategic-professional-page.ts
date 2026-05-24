import type { Language } from "@/lib/translations";
import type { AkLearn } from "@/lib/i18n/applied-knowledge-page";

export type SpForWhom = { emoji: string; title: string; desc: string };

export type StrategicProfessionalPageI18n = {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  breadcrumbHome: string;
  breadcrumbCourses: string;
  badge: string;
  heroTitleLine1: string;
  heroTitleHighlight: string;
  heroDesc: string;
  heroCta: string;
  formTitle: string;
  sectionWhatTitle: string;
  sectionWhatLead: string;
  sectionLearnTitle: string;
  sectionLearnLead: string;
  sectionForWhomTitle: string;
  sectionForWhomLead: string;
  sectionWhyTitle: string;
  sectionWhyLead: string;
  sectionFormatTitle: string;
  sectionFormatLead: string;
  sectionOutcomesTitle: string;
  sectionOutcomesLead: string;
  fellowTitle: string;
  fellowDesc: string;
  finalTitle: string;
  finalDesc: string;
  stat1: string;
  stat2: string;
  stat3: string;
  finalFormTitle: string;
  whatIs: string[];
  learn: AkLearn[];
  forWhom: SpForWhom[];
  why: string[];
  format: string[];
  outcomes: string[];
  jsonLdName: string;
  jsonLdDesc: string;
};

const LEARN_EN: AkLearn[] = [
  { title: "Strategic Business Leader (SBL)", desc: "Strategic leadership, governance, risk and ethics. Assessed with case studies." },
  { title: "Strategic Business Reporting (SBR)", desc: "Complex IFRS reporting, consolidation, financial instruments, sustainability reporting.", href: "/course/sbr-strategic-business-reporting" },
  { title: "Advanced Financial Management (AFM)", desc: "M&A, derivatives, hedging, international finance and valuation." },
  { title: "Advanced Audit & Assurance (AAA)", desc: "Complex audit, IT audit, professional ethics and special engagements." },
];

const LEARN_UZ: AkLearn[] = [
  { title: "Strategic Business Leader (SBL)", desc: "Strategik yetakchilik, korporativ boshqaruv, risk va etika. Case study asosida baholanadi." },
  { title: "Strategic Business Reporting (SBR)", desc: "Murakkab IFRS hisoboti, konsolidatsiya, moliyaviy instrumentlar, ijtimoiy hisobot.", href: "/course/sbr-strategic-business-reporting" },
  { title: "Advanced Financial Management (AFM)", desc: "M&A, derivativlar, hedjirlash, xalqaro moliya, kompaniya baholash." },
  { title: "Advanced Audit & Assurance (AAA)", desc: "Murakkab audit, IT audit, professional etika, maxsus topshiriqlar." },
];

const LEARN_RU: AkLearn[] = [
  { title: "Strategic Business Leader (SBL)", desc: "Стратегическое лидерство, корпоративное управление, риски и этика. Оценка на кейсах." },
  { title: "Strategic Business Reporting (SBR)", desc: "Сложная отчётность по IFRS, консолидация, финансовые инструменты, устойчивое развитие.", href: "/course/sbr-strategic-business-reporting" },
  { title: "Advanced Financial Management (AFM)", desc: "M&A, деривативы, хеджирование, международные финансы и оценка." },
  { title: "Advanced Audit & Assurance (AAA)", desc: "Сложный аудит, IT-аудит, профессиональная этика и специальные задания." },
];

export const STRATEGIC_PROFESSIONAL_PAGE: Record<Language, StrategicProfessionalPageI18n> = {
  en: {
    seoTitle: "ACCA Strategic Professional — Final Stage, CFO Path | FBA Academy",
    seoDescription:
      "ACCA Strategic Professional — the highest stage. SBL, SBR + optional papers. Full ACCA qualification. Path to CFO. FBA Academy Tashkent.",
    seoKeywords:
      "ACCA Strategic Professional, SBL SBR AFM AAA, ACCA final stage, ACCA Uzbekistan, CFO preparation course, FBA Academy",
    breadcrumbHome: "Home",
    breadcrumbCourses: "Courses",
    badge: "ACCA Final Stage",
    heroTitleLine1: "ACCA Strategic Professional —",
    heroTitleHighlight: "the final stage of ACCA",
    heroDesc:
      "Strategic financial management, leadership and advanced reporting — direct preparation for CFO roles. Complete the highest ACCA stage at FBA Academy.",
    heroCta: "Enroll",
    formTitle: "Free consultation",
    sectionWhatTitle: "What is Strategic Professional?",
    sectionWhatLead: "The highest ACCA stage — preparation for full qualification and the ACCA Fellow designation.",
    sectionLearnTitle: "What will you learn?",
    sectionLearnLead: "Four papers — two compulsory and two optional",
    sectionForWhomTitle: "Who is it for?",
    sectionForWhomLead: "Strategic Professional is ideal if you:",
    sectionWhyTitle: "Why Strategic Professional?",
    sectionWhyLead: "Benefits of completing the final ACCA stage:",
    sectionFormatTitle: "Class format",
    sectionFormatLead: "A professional, convenient learning experience",
    sectionOutcomesTitle: "After the course",
    sectionOutcomesLead: "Once you complete Strategic Professional you will:",
    fellowTitle: "ACCA Fellow designation",
    fellowDesc:
      "With full ACCA membership and sufficient experience you can achieve ACCA Fellow — one of the most respected designations for finance professionals worldwide.",
    finalTitle: "Complete your ACCA journey — step towards CFO",
    finalDesc:
      "Book a free consultation and get answers about Strategic Professional. Our team will explain the full roadmap.",
    stat1: "400+ graduates",
    stat2: "ACCA Fellow pathway",
    stat3: "50M+ salary potential",
    finalFormTitle: "Submit your request now",
    whatIs: [
      "The highest and final stage of ACCA",
      "Taken after Applied Skills",
      "Two compulsory + two optional exams — four papers in total",
      "Leads to full ACCA membership and the ACCA Fellow designation",
      "Recognized in 180+ countries",
    ],
    learn: LEARN_EN,
    forWhom: [
      { emoji: "📘", title: "Applied Skills graduates", desc: "Those who completed stage 2 and want to finish ACCA." },
      { emoji: "💼", title: "Aspiring CFOs", desc: "Professionals targeting finance leadership and executive teams." },
      { emoji: "🏦", title: "Senior finance managers", desc: "Those who need full qualification for global companies or Big Four." },
      { emoji: "🎓", title: "Seeking professional designation", desc: "Those aiming for ACCA Member and ACCA Fellow status." },
    ],
    why: [
      "Full ACCA qualification — among the world’s most respected finance credentials",
      "Higher earning potential for ACCA-qualified professionals",
      "Leadership roles — CFO, Finance Director, Partner",
      "Global mobility with a certificate recognized in 180+ countries",
      "ACCA Fellow — the highest professional standing",
    ],
    format: [
      "Weekly classes: theory + practice",
      "Offline at our center and online via Zoom",
      "Case studies and mock exams",
      "Dedicated instructor and mentor per paper",
      "Q&A sessions and group discussions",
    ],
    outcomes: [
      "Full ACCA membership — ACCA Member or ACCA Fellow",
      "Position yourself for CFO, Finance Director or Partner roles",
      "Make strategic financial decisions in international companies",
      "Opportunities at Big Four and global consulting firms",
    ],
    jsonLdName: "ACCA Strategic Professional — Final Stage",
    jsonLdDesc: "Final ACCA stage: SBL, SBR and optional papers. Path to full ACCA membership and CFO roles.",
  },
  uz: {
    seoTitle: "ACCA Strategic Professional — Yakuniy Bosqich, CFO Yo'li | FBA Academy",
    seoDescription:
      "ACCA Strategic Professional — eng yuqori bosqich. SBL, SBR + ixtiyoriy fanlar. To'liq ACCA malakasi. CFO va Finance Director bo'lish yo'li. FBA Academy Toshkent.",
    seoKeywords:
      "ACCA Strategic Professional, SBL SBR, ACCA yakuniy bosqich, ACCA O'zbekiston, CFO kursi, moliya direktori tayyorgarlik, FBA Academy",
    breadcrumbHome: "Bosh sahifa",
    breadcrumbCourses: "Kurslar",
    badge: "ACCA Yakuniy Bosqich",
    heroTitleLine1: "ACCA Strategic Professional —",
    heroTitleHighlight: "ACCA ning yakuniy bosqichi",
    heroDesc:
      "Strategik moliyaviy boshqaruv, korporativ yetakchilik va murakkab hisobot — CFO lavozimiga to'g'ridan-to'g'ri tayyorgarlik. ACCA yo'lining eng yuqori bosqichini FBA Academy da o'rganing.",
    heroCta: "Kursga yozilish",
    formTitle: "Bepul konsultatsiya",
    sectionWhatTitle: "Strategic Professional nima?",
    sectionWhatLead: "ACCA ning eng yuqori bosqichi — to'liq malakaga ega bo'lish va ACCA Fellow unvonini olish uchun tayyorgarlik.",
    sectionLearnTitle: "Nimalarni o'rganasiz?",
    sectionLearnLead: "4 ta fan — 2 ta majburiy, 2 ta ixtiyoriy",
    sectionForWhomTitle: "Kimlar uchun?",
    sectionForWhomLead: "Strategic Professional — quyidagilar uchun ideal bosqich:",
    sectionWhyTitle: "Nima uchun Strategic Professional?",
    sectionWhyLead: "ACCA ning yakuniy bosqichini tugatishning afzalliklari:",
    sectionFormatTitle: "Dars formati",
    sectionFormatLead: "O'qish jarayoni professional va qulay tarzda tashkil etilgan",
    sectionOutcomesTitle: "Kurs yakunida",
    sectionOutcomesLead: "Strategic Professional bosqichini tugatgach siz:",
    fellowTitle: "ACCA Fellow unvoni",
    fellowDesc:
      "To'liq ACCA malakasi va yetarli ish tajribasi bilan siz ACCA Fellow — dunyoda eng nufuzli moliyaviy professional unvonlaridan biriga ega bo'lasiz.",
    finalTitle: "ACCA yo'lingizni yakunlang — CFO lavozimiga qadam qo'ying",
    finalDesc:
      "Bepul konsultatsiya oling va Strategic Professional bosqichi haqida barcha savollaringizga javob toping. Mutaxassislarimiz sizga to'liq yo'l xaritasini tushuntirib beradi.",
    stat1: "400+ bitiruvchi",
    stat2: "ACCA Fellow yo'li",
    stat3: "50M+ maosh",
    finalFormTitle: "Hoziroq ariza qoldiring",
    whatIs: [
      "ACCA sertifikatsiyasining eng yuqori va yakuniy bosqichi",
      "Applied Skills bosqichidan keyin o'tiladi",
      "2 ta majburiy + 2 ta ixtiyoriy fan — jami 4 ta imtihon",
      "To'liq ACCA malakasi va ACCA Fellow unvoniga olib boradi",
      "Dunyoning 180+ davlatida tan olingan professional sertifikat",
    ],
    learn: LEARN_UZ,
    forWhom: [
      { emoji: "📘", title: "Applied Skills tugatganlar", desc: "ACCA yo'lining 2-bosqichini muvaffaqiyatli tugatgan va yakuniy bosqichga o'tmoqchi bo'lganlar" },
      { emoji: "💼", title: "CFO bo'lishni xohlovchilar", desc: "Moliyaviy direktorlik lavozimiga ko'tarilish va yuqori boshqaruv jamoasida ishlashni maqsad qilganlar" },
      { emoji: "🏦", title: "Katta kompaniya moliyachilari", desc: "Xalqaro kompaniyalar va Big Four tashkilotlarida ishlash uchun to'liq malakaga ehtiyoj sezganlar" },
      { emoji: "🎓", title: "Professional unvon olishni xohlovchilar", desc: "ACCA Member va ACCA Fellow unvoni bilan karyerasini yangi bosqichga ko'tarmoqchilar" },
    ],
    why: [
      "To'liq ACCA malakasi — dunyoda eng nufuzli moliya sertifikatlaridan biri",
      "Yuqori maosh — ACCA Qualified mutaxassislar 50 000 000+ so'm maosh oladi",
      "Boshqaruv lavozimi — CFO, Finance Director, Partner kabi pozitsiyalarga yo'l ochiladi",
      "Xalqaro mobillik — 180+ davlatda tan olingan sertifikat bilan istalgan mamlakatda ishlash",
      "ACCA Fellow unvoni — eng yuqori professional maqom va obro'",
    ],
    format: [
      "Haftalik darslar: nazariya + amaliyot",
      "Oflayn (Markazda) va Onlayn (Zoom) formatda",
      "Case study tahlili va mock imtihonlar",
      "Har bir fan uchun alohida o'qituvchi va mentor",
      "Savol-javob sessiyalari va guruh muhokamasi",
    ],
    outcomes: [
      "To'liq ACCA malakasiga ega bo'lasiz — ACCA Member yoki ACCA Fellow",
      "CFO, Finance Director yoki Partner lavozimiga da'vo qila olasiz",
      "Xalqaro kompaniyalarda strategik moliyaviy qarorlar qabul qila olasiz",
      "Big Four va xalqaro konsalting kompaniyalarida ishlash imkoniyatiga ega bo'lasiz",
    ],
    jsonLdName: "ACCA Strategic Professional — Yakuniy Bosqich",
    jsonLdDesc: "ACCA sertifikatsiyasining yakuniy bosqichi. SBL, SBR va ixtiyoriy fanlar. To'liq ACCA malakasi va CFO lavozimiga yo'l.",
  },
  ru: {
    seoTitle: "ACCA Strategic Professional — Финальный этап, путь к CFO | FBA Academy",
    seoDescription:
      "ACCA Strategic Professional — высший этап. SBL, SBR + опциональные дисциплины. Полная квалификация ACCA. Путь к CFO. FBA Academy Ташкент.",
    seoKeywords:
      "ACCA Strategic Professional, SBL SBR, финальный этап ACCA, ACCA Узбекистан, подготовка CFO, FBA Academy Ташкент",
    breadcrumbHome: "Главная",
    breadcrumbCourses: "Курсы",
    badge: "ACCA Финальный этап",
    heroTitleLine1: "ACCA Strategic Professional —",
    heroTitleHighlight: "финальный этап ACCA",
    heroDesc:
      "Стратегический финансовый менеджмент, лидерство и сложная отчётность — прямая подготовка к роли CFO. Завершите высший этап ACCA в FBA Academy.",
    heroCta: "Записаться",
    formTitle: "Бесплатная консультация",
    sectionWhatTitle: "Что такое Strategic Professional?",
    sectionWhatLead: "Высший этап ACCA — подготовка к полной квалификации и статусу ACCA Fellow.",
    sectionLearnTitle: "Чему вы научитесь?",
    sectionLearnLead: "Четыре дисциплины — две обязательные и две на выбор",
    sectionForWhomTitle: "Для кого курс?",
    sectionForWhomLead: "Strategic Professional идеален, если вы:",
    sectionWhyTitle: "Зачем Strategic Professional?",
    sectionWhyLead: "Преимущества завершения финального этапа ACCA:",
    sectionFormatTitle: "Формат занятий",
    sectionFormatLead: "Профессиональный и удобный формат обучения",
    sectionOutcomesTitle: "После курса",
    sectionOutcomesLead: "После Strategic Professional вы сможете:",
    fellowTitle: "Статус ACCA Fellow",
    fellowDesc:
      "С полной квалификацией ACCA и достаточным опытом вы можете получить ACCA Fellow — один из самых престижных статусов в финансах.",
    finalTitle: "Завершите путь ACCA — шаг к роли CFO",
    finalDesc:
      "Запишитесь на бесплатную консультацию и получите ответы о Strategic Professional. Наша команда объяснит полный маршрут.",
    stat1: "400+ выпускников",
    stat2: "Путь к ACCA Fellow",
    stat3: "Потенциал зарплаты 50M+",
    finalFormTitle: "Оставьте заявку сейчас",
    whatIs: [
      "Высший и финальный этап ACCA",
      "После этапа Applied Skills",
      "Два обязательных + два опциональных экзамена — всего четыре дисциплины",
      "Ведёт к полному членству ACCA и статусу ACCA Fellow",
      "Признание в 180+ странах",
    ],
    learn: LEARN_RU,
    forWhom: [
      { emoji: "📘", title: "Выпускники Applied Skills", desc: "Завершили 2-й этап и хотят финальный этап ACCA." },
      { emoji: "💼", title: "Будущие CFO", desc: "Цель — финансовое руководство и работа в топ-команде." },
      { emoji: "🏦", title: "Старшие финансовые менеджеры", desc: "Нужна полная квалификация для международных компаний или Big Four." },
      { emoji: "🎓", title: "Статус ACCA Member / Fellow", desc: "Карьерный рост с международным признанием." },
    ],
    why: [
      "Полная квалификация ACCA — одна из самых уважаемых финансовых квалификаций",
      "Высокий потенциал дохода для квалифицированных специалистов",
      "Руководящие роли — CFO, финансовый директор, партнёр",
      "Глобальная мобильность — признание в 180+ странах",
      "ACCA Fellow — высший профессиональный статус",
    ],
    format: [
      "Еженедельные занятия: теория + практика",
      "Офлайн в центре и онлайн в Zoom",
      "Кейсы и пробные экзамены",
      "Отдельный преподаватель и ментор по каждой дисциплине",
      "Сессии вопросов и групповые обсуждения",
    ],
    outcomes: [
      "Полное членство ACCA — Member или Fellow",
      "Претендовать на роли CFO, финансового директора или партнёра",
      "Принимать стратегические финансовые решения в международных компаниях",
      "Возможности в Big Four и глобальном консалтинге",
    ],
    jsonLdName: "ACCA Strategic Professional — Финальный этап",
    jsonLdDesc: "Финальный этап ACCA: SBL, SBR и опциональные дисциплины. Путь к полной квалификации и роли CFO.",
  },
};

export function strategicProfessionalJsonLd(lang: Language, baseUrl: string) {
  const tx = STRATEGIC_PROFESSIONAL_PAGE[lang];
  return [
    {
      "@type": "Course",
      "@id": `${baseUrl}/course/strategic-professional#course`,
      name: tx.jsonLdName,
      description: tx.jsonLdDesc,
      url: `${baseUrl}/course/strategic-professional`,
      provider: { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "FBA Academy", url: baseUrl },
      educationalLevel: "Advanced",
      timeRequired: "P8M",
      inLanguage: ["uz", "ru", "en"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: tx.breadcrumbHome, item: baseUrl },
        { "@type": "ListItem", position: 2, name: tx.breadcrumbCourses, item: `${baseUrl}/courses` },
        { "@type": "ListItem", position: 3, name: "ACCA", item: `${baseUrl}/course/acca` },
        { "@type": "ListItem", position: 4, name: "Strategic Professional", item: `${baseUrl}/course/strategic-professional` },
      ],
    },
  ];
}
