import type { Language } from "@/lib/translations";
import type { AkLearn } from "@/lib/i18n/applied-knowledge-page";
import type { SpForWhom } from "@/lib/i18n/strategic-professional-page";

export type FinancialModelingPageI18n = {
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
  portfolioTitle: string;
  portfolioDesc: string;
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
  { title: "Advanced Excel", desc: "FAST standards, dashboards, INDEX-MATCH, validation and dynamic tables." },
  { title: "3-Statement Model", desc: "Build an integrated model linking balance sheet, P&L and cash flow." },
  { title: "DCF Valuation", desc: "Company valuation with discounted cash flows, WACC and terminal value." },
  { title: "LBO Modeling", desc: "Leveraged buyout models for debt-financed transactions." },
  { title: "Comparable Analysis", desc: "Peer multiples: P/E, EV/EBITDA, EV/Revenue." },
  { title: "Sensitivity analysis", desc: "Scenario testing and risk assessment in financial models." },
];

const LEARN_UZ: AkLearn[] = [
  { title: "Excel ilg'or funksiyalar", desc: "FAST standartlari, interaktiv dashboardlar, INDEX-MATCH, DATA validatsiya va dinamik jadvallar" },
  { title: "3-Statement Model", desc: "Balans, Foyda-zarar va Pul oqimi hisobotlarini birlashtirgan to'liq moliyaviy model qurish" },
  { title: "DCF Valuation", desc: "Diskontlangan pul oqimlari usulida kompaniyani baholash, WACC hisoblash, Terminal Value" },
  { title: "LBO Modeling", desc: "Leveraged Buyout modelini qurish — qarzli xarid bitimlarini tahlil qilish" },
  { title: "Comparable Analysis", desc: "Solishtirma kompaniyalar tahlili — P/E, EV/EBITDA, EV/Revenue multipllaridan foydalanish" },
  { title: "Sezgirlik tahlili", desc: "Turli stsenariylar uchun moliyaviy modelni sinovdan o'tkazish va risklarni baholash" },
];

const LEARN_RU: AkLearn[] = [
  { title: "Продвинутый Excel", desc: "Стандарты FAST, дашборды, INDEX-MATCH, валидация и динамические таблицы." },
  { title: "3-Statement Model", desc: "Интегрированная модель баланса, ОПУ и ДДС." },
  { title: "Оценка DCF", desc: "Оценка компании методом дисконтированных денежных потоков, WACC, терминальная стоимость." },
  { title: "LBO-моделирование", desc: "Модели сделок с долговым финансированием." },
  { title: "Сравнительный анализ", desc: "Мультипликаторы P/E, EV/EBITDA, EV/Revenue." },
  { title: "Анализ чувствительности", desc: "Сценарии и оценка рисков в моделях." },
];

export const FINANCIAL_MODELING_PAGE: Record<Language, FinancialModelingPageI18n> = {
  en: {
    seoTitle: "Financial Modeling — Professional Training | FBA Academy",
    seoDescription:
      "Financial Modeling: advanced Excel, DCF, 3-statement model, LBO, comparables. Hands-on projects with real companies. FBA Academy.",
    seoKeywords:
      "financial modeling course, DCF valuation, Excel financial model, LBO model, 3-statement model, company valuation Uzbekistan, FBA Academy Tashkent",
    breadcrumbHome: "Home",
    breadcrumbCourses: "Courses",
    badge: "Professional modeling",
    heroTitleLine1: "Financial Modeling —",
    heroTitleHighlight: "Professional financial modeling",
    heroDesc:
      "Advanced Excel, DCF valuation, 3-statement models and company valuation — hands-on projects with real data. Learn to build professional models in 1–2 months.",
    heroCta: "Enroll",
    formTitle: "Free consultation",
    sectionWhatTitle: "What is financial modeling?",
    sectionWhatLead:
      "Expressing a company’s financial position as a numeric model — forecasting revenue, costs and cash flows to support strategic decisions.",
    sectionLearnTitle: "What will you learn?",
    sectionLearnLead: "All essential skills for professional financial modeling",
    sectionForWhomTitle: "Who is it for?",
    sectionForWhomLead: "Financial modeling is essential for:",
    sectionWhyTitle: "Why financial modeling?",
    sectionWhyLead: "How this skill transforms your career:",
    sectionFormatTitle: "Class format",
    sectionFormatLead: "Hands-on projects, real company data and professional dashboards",
    sectionOutcomesTitle: "After the course",
    sectionOutcomesLead: "When you complete the course you will have:",
    portfolioTitle: "Portfolio and career support",
    portfolioDesc:
      "Models you build become your portfolio. Mentors help with CV preparation and job search support.",
    finalTitle: "Master financial modeling",
    finalDesc:
      "Book a free consultation — our team explains the curriculum, recommends the best track and answers your questions.",
    stat1: "700+ graduates",
    stat2: "Official certificate",
    stat3: "8M+ salary potential",
    finalFormTitle: "Submit your request now",
    whatIs: [
      "Represent the company’s finances as a quantitative model",
      "Forecast revenue, costs and cash flows in Excel",
      "Apply DCF, LBO and comparable analysis",
      "Build a numeric basis for management decisions",
      "Prepare investor-grade financial analysis",
    ],
    learn: LEARN_EN,
    forWhom: [
      { emoji: "🏦", title: "Investment banking", desc: "M&A analysis, valuation and pitch materials." },
      { emoji: "📊", title: "Financial analysts", desc: "Deep analysis and recommendations for management." },
      { emoji: "🚀", title: "Business owners", desc: "Value your business, raise capital and plan strategy." },
      { emoji: "💼", title: "Corporate finance", desc: "Budgeting, forecasting and financial planning." },
    ],
    why: [
      "One of the most in-demand skills in finance",
      "Strong salary upside for FM specialists",
      "Universal — banks, consulting, startups, corporates",
      "Fast results — build real models in 1–2 months",
      "Your course work becomes a portfolio",
    ],
    format: [
      "Hands-on projects with real company data",
      "Interactive lessons — 26 videos + assignments",
      "Professional dashboards",
      "Four business cases across industries",
      "365-day mentor support",
    ],
    outcomes: [
      "A portfolio of real financial models",
      "Career support including CV guidance",
      "Official FBA Academy certificate",
      "Practical skills you use on the job",
    ],
    jsonLdName: "Financial Modeling — Professional Training",
    jsonLdDesc: "DCF, 3-statement model, LBO, comparables. Advanced Excel and hands-on projects.",
  },
  uz: {
    seoTitle: "Financial Modeling — Professional Moliyaviy Modellashtirish | FBA Academy",
    seoDescription:
      "Financial Modeling kursi: Excel ilg'or, DCF, 3-Statement Model, LBO, Comparable Analysis. Real kompaniyalar bilan amaliy loyihalar. 1-2 oyda natija. FBA Academy.",
    seoKeywords:
      "Financial Modeling kurs, DCF baholash, Excel moliyaviy model, LBO, 3-Statement Model, kompaniya baholash, FBA Academy Toshkent",
    breadcrumbHome: "Bosh sahifa",
    breadcrumbCourses: "Kurslar",
    badge: "Professional Modellashtirish",
    heroTitleLine1: "Financial Modeling —",
    heroTitleHighlight: "Professional Moliyaviy Modellashtirish",
    heroDesc:
      "Excel ilg'or, DCF valuation, 3-Statement Model, kompaniya baholash — real kompaniyalar ma'lumotlari bilan amaliy loyihalar. 1-2 oyda professional moliyaviy modellarni qurishni o'rganing.",
    heroCta: "Kursga yozilish",
    formTitle: "Bepul konsultatsiya",
    sectionWhatTitle: "Financial Modeling nima?",
    sectionWhatLead:
      "Kompaniyaning moliyaviy holatini raqamli model sifatida ifodalash — daromad, xarajat va pul oqimlarini bashorat qilish va strategik qarorlar qabul qilish uchun asos yaratish.",
    sectionLearnTitle: "Nimalarni o'rganasiz?",
    sectionLearnLead: "Professional moliyaviy modellashtirish uchun zarur barcha ko'nikmalar",
    sectionForWhomTitle: "Kimlar uchun?",
    sectionForWhomLead: "Financial Modeling — quyidagilar uchun zarur ko'nikma:",
    sectionWhyTitle: "Nima uchun Financial Modeling?",
    sectionWhyLead: "Bu ko'nikma sizning karyerangizni tubdan o'zgartiradi:",
    sectionFormatTitle: "Dars formati",
    sectionFormatLead: "Amaliy loyihalar, real kompaniyalar ma'lumotlari va professional dashboardlar",
    sectionOutcomesTitle: "Kurs yakunida",
    sectionOutcomesLead: "Kursni tugatgach siz quyidagilarga ega bo'lasiz:",
    portfolioTitle: "Portfolio va ish topish yordami",
    portfolioDesc:
      "Kurs davomida yaratgan modellaringiz professional portfolio bo'lib xizmat qiladi. Kurator CV tayyorlash va ish topishda sizga bevosita yordam beradi.",
    finalTitle: "Moliyaviy modellashtirish ko'nikmasini egallang",
    finalDesc:
      "Bepul konsultatsiya oling — mutaxassislarimiz kurs tafsilotlarini tushuntiradi, sizga mos dasturni tavsiya qiladi va barcha savollaringizga javob beradi.",
    stat1: "700+ bitiruvchi",
    stat2: "Rasmiy diplom",
    stat3: "8M+ maosh",
    finalFormTitle: "Hoziroq ariza qoldiring",
    whatIs: [
      "Kompaniyaning moliyaviy holatini raqamli model sifatida ifodalash",
      "Excel yordamida daromad, xarajat va pul oqimlarini bashorat qilish",
      "DCF, LBO, Comparable analysis kabi baholash usullarini qo'llash",
      "Moliyaviy qarorlar qabul qilish uchun raqamli asos yaratish",
      "Investorlar va rahbariyat uchun professional moliyaviy tahlil tayyorlash",
    ],
    learn: LEARN_UZ,
    forWhom: [
      { emoji: "🏦", title: "Investitsiya bankirlari", desc: "M&A bitimlarini tahlil qilish, kompaniya baholash va investitsiya taklifnomalarini tayyorlash uchun" },
      { emoji: "📊", title: "Moliyaviy tahlilchilar", desc: "Kompaniya moliyaviy holatini chuqur tahlil qilish va boshqaruvga tavsiyalar berish uchun" },
      { emoji: "🚀", title: "Biznes egalari", desc: "O'z biznesini baholash, investorlarni jalb qilish va strategik qarorlar qabul qilish uchun" },
      { emoji: "💼", title: "Korporativ moliya mutaxassislari", desc: "Byudjetlashtirish, prognozlash va moliyaviy rejalashtirish jarayonlarini professional boshqarish uchun" },
    ],
    why: [
      "Eng ko'p talab qilinadigan ko'nikma — moliya sohasida Financial Modeling bilimi majburiy talab",
      "Yuqori maosh — FM mutaxassislari O'zbekistonda 8 000 000 — 25 000 000+ so'm maosh oladi",
      "Universal ko'nikma — bank, konsalting, startap, korporativ moliya — barcha sohalarda kerak",
      "Tez natija — 1-2 oy ichida real kompaniyalar uchun model qurishni o'rganasiz",
      "Portfolio — kurs davomida yaratgan modellaringiz ish topishda portfolio bo'lib xizmat qiladi",
    ],
    format: [
      "Amaliy loyihalar — real kompaniyalar ma'lumotlari asosida modellar qurasiz",
      "Interaktiv darslar — 26 ta video dars + amaliy topshiriqlar",
      "Dashboard yaratish — professional ko'rinishdagi moliyaviy dashboardlar",
      "4 ta biznes-keys — turli tarmoqdagi kompaniyalar uchun modellar",
      "Kurator yordami — 365 kun davomida savollaringizga javob olasiz",
    ],
    outcomes: [
      "Professional portfolio — real kompaniyalar uchun moliyaviy modellar to'plami",
      "Ish topish yordami — kurator CV tayyorlash va karyera maslahatida yordam beradi",
      "Rasmiy diplom — FBA Academy tomonidan berilgan sertifikat",
      "Amaliy ko'nikmalar — biron-bir nazariyasiz, faqat ish joyida kerak bo'ladigan bilimlar",
    ],
    jsonLdName: "Financial Modeling — Professional Moliyaviy Modellashtirish",
    jsonLdDesc: "DCF, 3-Statement Model, LBO, Comparable Analysis. Excel ilg'or, real kompaniyalar bilan amaliy loyihalar. 26 dars, rasmiy diplom.",
  },
  ru: {
    seoTitle: "Financial Modeling — Профессиональное обучение | FBA Academy",
    seoDescription:
      "Курс Financial Modeling: продвинутый Excel, DCF, 3-Statement Model, LBO, сравнительный анализ. Практика на реальных компаниях.",
    seoKeywords:
      "курс financial modeling, DCF оценка, финансовая модель Excel, LBO, трёхчастная модель, оценка компании Узбекистан, FBA Academy Ташкент",
    breadcrumbHome: "Главная",
    breadcrumbCourses: "Курсы",
    badge: "Профессиональное моделирование",
    heroTitleLine1: "Financial Modeling —",
    heroTitleHighlight: "профессиональное финансовое моделирование",
    heroDesc:
      "Продвинутый Excel, оценка DCF, 3-Statement Model и оценка компании — практические проекты на реальных данных. Освойте модели за 1–2 месяца.",
    heroCta: "Записаться",
    formTitle: "Бесплатная консультация",
    sectionWhatTitle: "Что такое финансовое моделирование?",
    sectionWhatLead:
      "Представление финансового положения компании в виде числовой модели — прогноз доходов, расходов и денежных потоков для стратегических решений.",
    sectionLearnTitle: "Чему вы научитесь?",
    sectionLearnLead: "Все ключевые навыки профессионального финмоделирования",
    sectionForWhomTitle: "Для кого курс?",
    sectionForWhomLead: "Финансовое моделирование необходимо:",
    sectionWhyTitle: "Зачем Financial Modeling?",
    sectionWhyLead: "Как этот навык меняет карьеру:",
    sectionFormatTitle: "Формат занятий",
    sectionFormatLead: "Практика на реальных данных и профессиональные дашборды",
    sectionOutcomesTitle: "После курса",
    sectionOutcomesLead: "По завершении курса вы получите:",
    portfolioTitle: "Портфолио и карьерная поддержка",
    portfolioDesc:
      "Созданные модели станут портфолио. Кураторы помогут с CV и поиском работы.",
    finalTitle: "Освойте финансовое моделирование",
    finalDesc:
      "Запишитесь на бесплатную консультацию — мы расскажем о программе и ответим на вопросы.",
    stat1: "700+ выпускников",
    stat2: "Официальный диплом",
    stat3: "Потенциал зарплаты 8M+",
    finalFormTitle: "Оставьте заявку",
    whatIs: [
      "Финансовое состояние компании в виде модели",
      "Прогноз в Excel: доходы, расходы, денежные потоки",
      "DCF, LBO и сравнительный анализ",
      "Численная база для управленческих решений",
      "Анализ для инвесторов и руководства",
    ],
    learn: LEARN_RU,
    forWhom: [
      { emoji: "🏦", title: "Инвестиционный банкинг", desc: "M&A, оценка и презентационные материалы." },
      { emoji: "📊", title: "Финансовые аналитики", desc: "Глубокий анализ и рекомендации руководству." },
      { emoji: "🚀", title: "Владельцы бизнеса", desc: "Оценка бизнеса, привлечение капитала, стратегия." },
      { emoji: "💼", title: "Корпоративные финансисты", desc: "Бюджетирование, прогнозирование и планирование." },
    ],
    why: [
      "Один из самых востребованных навыков в финансах",
      "Сильный потенциал роста дохода",
      "Универсальность — банки, консалтинг, стартапы, корпорации",
      "Быстрый результат — реальные модели за 1–2 месяца",
      "Портфолио из учебных проектов",
    ],
    format: [
      "Практика на реальных данных компаний",
      "26 видеоуроков + задания",
      "Профессиональные дашборды",
      "4 бизнес-кейса",
      "Поддержка ментора 365 дней",
    ],
    outcomes: [
      "Портфолио финансовых моделей",
      "Помощь с CV и поиском работы",
      "Официальный сертификат FBA Academy",
      "Практические навыки для работы",
    ],
    jsonLdName: "Financial Modeling — Профессиональное обучение",
    jsonLdDesc: "DCF, 3-Statement Model, LBO, сравнительный анализ. Продвинутый Excel и практика.",
  },
};

export function financialModelingJsonLd(lang: Language, baseUrl: string) {
  const tx = FINANCIAL_MODELING_PAGE[lang];
  return [
    {
      "@type": "Course",
      "@id": `${baseUrl}/course/financial-modeling#course`,
      name: tx.jsonLdName,
      description: tx.jsonLdDesc,
      url: `${baseUrl}/course/financial-modeling`,
      provider: { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "FBA Academy", url: baseUrl },
      educationalLevel: "Intermediate",
      inLanguage: ["uz", "ru", "en"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: tx.breadcrumbHome, item: baseUrl },
        { "@type": "ListItem", position: 2, name: tx.breadcrumbCourses, item: `${baseUrl}/courses` },
        { "@type": "ListItem", position: 3, name: "Financial Modeling", item: `${baseUrl}/course/financial-modeling` },
      ],
    },
  ];
}
