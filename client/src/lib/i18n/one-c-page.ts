import type { Language } from "@/lib/translations";
import type { AkLearn } from "@/lib/i18n/applied-knowledge-page";
import type { SpForWhom } from "@/lib/i18n/strategic-professional-page";

export type OneCPageI18n = {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  breadcrumbHome: string;
  breadcrumbCourses: string;
  breadcrumbCourseName: string;
  badge: string;
  heroTitleLine1: string;
  heroTitleHighlight: string;
  heroDesc: string;
  heroCta: string;
  formTitle: string;
  formHint: string;
  formFootnote: string;
  sectionWhatTitle: string;
  sectionWhatLead: string;
  whatIs1c: string[];
  sectionLearnTitle: string;
  sectionLearnLead: string;
  learn: AkLearn[];
  sectionForWhomTitle: string;
  forWhom: SpForWhom[];
  sectionWhyTitle: string;
  sectionWhyLead: string;
  why1c: string[];
  sectionFormatTitle: string;
  sectionFormatLead: string;
  format: string[];
  sectionOutcomesTitle: string;
  sectionOutcomesLead: string;
  outcomes: string[];
  finalTitle: string;
  finalDesc: string;
  finalBullet1: string;
  finalBullet2: string;
  finalBullet3: string;
  finalFormTitle: string;
  finalFormHint: string;
  jsonLdName: string;
  jsonLdDesc: string;
};

const WHAT_IS_1C_UZ = [
  "O'zbekiston korxonalarining 90% dan ortig'i 1C dasturidan foydalanadi",
  "1C: Buxgalteriya 8.3 — eng so'nggi va zamonaviy versiya",
  "Moliyaviy hisobot, soliq hisoblash va kadrlar boshqaruvi uchun universal vosita",
  "Davlat soliq xizmati bilan to'g'ridan-to'g'ri integratsiya (my.soliq.uz)",
  "O'zbek va rus tillarida ishlash imkoniyati",
];

const LEARN_UZ: AkLearn[] = [
  { title: "Dastur asoslari", desc: "1C: Buxgalteriya 8.3 interfeysi, sozlash, ma'lumotnomalar va hisob rejasini to'liq o'rganish" },
  { title: "Birlamchi hujjatlar", desc: "Kirim-chiqim orderlari, schyot-fakturalar, aktlar va tovar hujjatlarini rasmiylashtirish" },
  { title: "Ish haqi hisoblash", desc: "Xodimlar uchun ish haqi, soliqlar, INPS va FZSS ajratmalarini to'g'ri hisoblash" },
  { title: "Soliq hisoboti", desc: "QQS, daromad solig'i va boshqa soliq hisobotlarini tayyorlash va yuborish" },
  { title: "Moliyaviy tahlil", desc: "Balans, foyda-zarar hisoboti va pul oqimi tahlilini o'rganish" },
];

const FOR_WHOM_UZ: SpForWhom[] = [
  { emoji: "📊", title: "Buxgalterlar", desc: "1C dasturida professional darajada ishlashni o'rganmoqchi bo'lgan mutaxassislar" },
  { emoji: "💰", title: "Moliya bo'limi xodimlari", desc: "Moliyaviy hisobot va tahlilni avtomatlashtirmoqchi bo'lganlar" },
  { emoji: "💼", title: "Biznes egalari", desc: "Kompaniya buxgalteriyasini nazorat qilish va tushunishni xohlaydiganlar" },
  { emoji: "🚀", title: "Karyera boshlovchilar", desc: "Buxgalteriya sohasida noldan karyera qurmoqchi bo'lgan yoshlar" },
];

const WHY_1C_UZ = [
  "O'zbekistonda eng ko'p talab qilinadigan buxgalteriya ko'nikmasi",
  "hh.uz da 1C biluvchi mutaxassislarga doimiy talab mavjud",
  "1C bilish bilan maosh 30-50% ga oshishi mumkin",
  "Barcha soha va tarmoqlarda ishlatiladi — universal ko'nikma",
  "Freelance va masofaviy ish imkoniyatlari",
  "Karyera o'sishi uchun eng muhim texnik bilim",
];

const FORMAT_UZ = [
  "Real kompaniya ma'lumotlari bilan ishlash — nazariya emas, amaliyot",
  "Amaliy mashqlar — har bir mavzuda mustaqil topshiriqlar",
  "1C dasturiga bepul kirish — o'quv versiyasida mashq qilish",
  "Jonli darslar va yozuvlar — qulay vaqtda qayta ko'rish",
  "Mentor yordami — barcha savollarga javob olish",
];

const OUT_UZ = [
  "Professional darajada 1C: Buxgalteriya 8.3 da ishlash ko'nikmasi",
  "FBA Academy sertifikati — ish beruvchilar tan oladi",
  "Ish topishga yordam — rezyume tayyorlash va vakansiyalarga yo'naltirish",
  "Soliq hisobotlarini mustaqil tayyorlash va yuborish bilimi",
];

const LEARN_EN: AkLearn[] = [
  { title: "Program basics", desc: "1C: Accounting 8.3 interface, setup, directories and chart of accounts." },
  { title: "Primary documents", desc: "Receipts, invoices, acts and inventory documents." },
  { title: "Payroll", desc: "Salaries, taxes, pension and social contributions." },
  { title: "Tax reporting", desc: "VAT, income tax and other returns — preparation and submission." },
  { title: "Financial analysis", desc: "Balance sheet, P&L and cash flow analysis." },
];

const LEARN_RU: AkLearn[] = [
  { title: "Основы программы", desc: "Интерфейс 1С:Бухгалтерия 8.3, настройка, справочники и план счетов." },
  { title: "Первичные документы", desc: "Приходно-расходные ордера, счета-фактуры, акты и товарные документы." },
  { title: "Расчёт зарплаты", desc: "Зарплата, налоги, ИНПС и отчисления в ФСС." },
  { title: "Налоговая отчётность", desc: "НДС, налог на прибыль и другие декларации." },
  { title: "Финансовый анализ", desc: "Баланс, отчёт о прибылях и убытках, движение денежных средств." },
];

const WHAT_IS_EN = [
  "Over 90% of Uzbek companies use 1C",
  "1C: Accounting 8.3 — the current flagship version",
  "One tool for reporting, payroll and tax workflows",
  "Integration with the tax office (my.soliq.uz)",
  "Available in Uzbek and Russian interfaces",
];

const WHAT_IS_RU = [
  "Более 90% компаний Узбекистана используют 1С",
  "1С:Бухгалтерия 8.3 — актуальная версия",
  "Отчётность, зарплата и налоги в одной системе",
  "Интеграция с налоговой (my.soliq.uz)",
  "Интерфейсы на узбекском и русском",
];

export const ONE_C_PAGE: Record<Language, OneCPageI18n> = {
  en: {
    seoTitle: "1C: Accounting Course — Professional Level | FBA Academy",
    seoDescription:
      "1C: Accounting 8.3 — documents, payroll, tax reporting and financial analysis. Uzbekistan’s most used accounting software.",
    seoKeywords: "1C Accounting course, 1C 8.3 Uzbekistan, accounting software, tax reporting 1C, payroll, FBA Academy",
    breadcrumbHome: "Home",
    breadcrumbCourses: "Courses",
    breadcrumbCourseName: "1C: Accounting",
    badge: "1C: Accounting 8.3",
    heroTitleLine1: "1C: Accounting",
    heroTitleHighlight: "Professional skills course",
    heroDesc:
      "Learn Uzbekistan’s most widely used accounting program — 1C: Accounting 8.3 — from zero to a confident professional level.",
    heroCta: "Enroll",
    formTitle: "Get a free consultation",
    formHint: "Leave your details — our team will contact you",
    formFootnote: "Your personal data is protected",
    sectionWhatTitle: "What is 1C: Accounting?",
    sectionWhatLead: "The modern 8.3 version used by the majority of companies in Uzbekistan.",
    whatIs1c: WHAT_IS_EN,
    sectionLearnTitle: "What will you learn?",
    sectionLearnLead: "All core features of 1C: Accounting in hands-on practice.",
    learn: LEARN_EN,
    sectionForWhomTitle: "Who is it for?",
    forWhom: [
      { emoji: "📊", title: "Accountants", desc: "Professionals who want to master 1C at work." },
      { emoji: "💰", title: "Finance staff", desc: "Teams automating reporting and analysis." },
      { emoji: "💼", title: "Business owners", desc: "Leaders who want to understand company books." },
      { emoji: "🚀", title: "Career starters", desc: "Beginners building an accounting career." },
    ],
    sectionWhyTitle: "Why learn 1C?",
    sectionWhyLead: "One of the most in-demand accounting skills in Uzbekistan — salary and career upside.",
    why1c: [
      "Top-requested accounting skill in the market",
      "Steady demand for 1C specialists on job boards",
      "Certified 1C skills can lift compensation significantly",
      "Used across industries — portable skill",
      "Remote and freelance opportunities",
      "Strong lever for career growth",
    ],
    sectionFormatTitle: "Class format",
    sectionFormatLead: "Real company scenarios and exercises — theory and practice together.",
    format: [
      "Practice on realistic data, not slides only",
      "Hands-on homework every module",
      "Access to a learning edition of 1C",
      "Live sessions and recordings",
      "Mentor support for your questions",
    ],
    sectionOutcomesTitle: "After the course",
    sectionOutcomesLead: "Professional 1C skills, a certificate and career support:",
    outcomes: [
      "Confident daily work in 1C: Accounting 8.3",
      "FBA Academy certificate recognized by employers",
      "CV help and vacancy guidance",
      "Independent preparation and filing of tax reports",
    ],
    finalTitle: "Master 1C: Accounting at a professional level",
    finalDesc: "Apply now for the most in-demand accounting platform in Uzbekistan. Leave your details for a free consultation.",
    finalBullet1: "Professional 1C skills",
    finalBullet2: "Certificate",
    finalBullet3: "Job search support",
    finalFormTitle: "Apply now",
    finalFormHint: "Our team will contact you",
    jsonLdName: "1C: Accounting — Professional Course | FBA Academy",
    jsonLdDesc: "1C: Accounting 8.3 — documents, payroll, tax reporting and analysis.",
  },
  uz: {
    seoTitle: "1C: Buxgalteriya Kursi — Professional Darajada Ishlash | FBA Academy",
    seoDescription:
      "1C: Buxgalteriya 8.3 kursi: birlamchi hujjatlar, ish haqi, soliq hisoboti, moliyaviy tahlil. O'zbekistondagi eng ko'p qo'llaniladigan dasturni professional o'rganing.",
    seoKeywords: "1C Buxgalteriya kurs, 1C 8.3 kursi O'zbekiston, buxgalteriya dasturi, soliq hisoboti 1C, ish haqi hisoblash, FBA Academy",
    breadcrumbHome: "Bosh sahifa",
    breadcrumbCourses: "Kurslar",
    breadcrumbCourseName: "1C: Buxgalteriya",
    badge: "1C: Buxgalteriya 8.3",
    heroTitleLine1: "1C: Buxgalteriya",
    heroTitleHighlight: "Professional Darajada Ishlash Kursi",
    heroDesc: "O'zbekistondagi eng ko'p qo'llaniladigan buxgalteriya dasturi — 1C: Buxgalteriya 8.3 ni noldan professional darajagacha o'rganing.",
    heroCta: "Kursga yozilish",
    formTitle: "Bepul konsultatsiya olish",
    formHint: "Ma'lumotlaringizni qoldiring — mutaxassislarimiz siz bilan bog'lanadi",
    formFootnote: "Shaxsiy ma'lumotlaringiz himoyalangan",
    sectionWhatTitle: "1C: Buxgalteriya nima?",
    sectionWhatLead: "O'zbekiston korxonalarining 90% dan ortig'i ishlatadigan, 8.3 versiyasidagi eng zamonaviy buxgalteriya dasturi.",
    whatIs1c: WHAT_IS_1C_UZ,
    sectionLearnTitle: "Nimalarni o'rganasiz?",
    sectionLearnLead: "Kurs davomida 1C: Buxgalteriya dasturining barcha asosiy funksiyalarini amaliy darajada o'zlashtirasiz.",
    learn: LEARN_UZ,
    sectionForWhomTitle: "Kimlar uchun?",
    forWhom: FOR_WHOM_UZ,
    sectionWhyTitle: "Nima uchun 1C bilish kerak?",
    sectionWhyLead: "O'zbekistonda eng ko'p talab qilinadigan buxgalteriya ko'nikmasi — maosh oshishi va karyera o'sishi kafolati.",
    why1c: WHY_1C_UZ,
    sectionFormatTitle: "Dars formati",
    sectionFormatLead: "Real kompaniya ma'lumotlari bilan ishlash va amaliy mashqlar — har bir darsda nazariya va amaliyot birgalikda.",
    format: FORMAT_UZ,
    sectionOutcomesTitle: "Kurs yakunida",
    sectionOutcomesLead: "Professional 1C bilimi, sertifikat va ish topishga yordam — kursni muvaffaqiyatli tugatganingizdan so'ng:",
    outcomes: OUT_UZ,
    finalTitle: "1C: Buxgalteriya ni professional darajada o'rganing",
    finalDesc:
      "Hoziroq ariza topshiring va O'zbekistondagi eng talab qilinadigan buxgalteriya dasturini o'rganing. Bepul konsultatsiya olish uchun ma'lumotlaringizni qoldiring.",
    finalBullet1: "Professional 1C bilim",
    finalBullet2: "Sertifikat",
    finalBullet3: "Ish topish yordami",
    finalFormTitle: "Hoziroq ariza topshiring",
    finalFormHint: "Mutaxassislarimiz siz bilan bog'lanadi",
    jsonLdName: "1C: Buxgalteriya — Professional Darajada Ishlash Kursi | FBA Academy",
    jsonLdDesc: "1C: Buxgalteriya 8.3 — hujjatlar, ish haqi, soliq hisoboti va moliyaviy tahlil.",
  },
  ru: {
    seoTitle: "Курс 1С:Бухгалтерия — Профессиональный уровень | FBA Academy",
    seoDescription:
      "1С:Бухгалтерия 8.3 — первичка, зарплата, налоговая отчётность и финансовый анализ. Самая востребованная программа в Узбекистане.",
    seoKeywords: "курс 1С бухгалтерия Узбекистан, 1С 8.3, зарплата, налоговая отчётность, FBA Academy",
    breadcrumbHome: "Главная",
    breadcrumbCourses: "Курсы",
    breadcrumbCourseName: "1С:Бухгалтерия",
    badge: "1С:Бухгалтерия 8.3",
    heroTitleLine1: "1С:Бухгалтерия",
    heroTitleHighlight: "Курс профессионального уровня",
    heroDesc:
      "Освойте самую распространённую в Узбекистане программу — 1С:Бухгалтерия 8.3 — с нуля до уверенной работы.",
    heroCta: "Записаться",
    formTitle: "Бесплатная консультация",
    formHint: "Оставьте контакты — мы свяжемся с вами",
    formFootnote: "Ваши данные защищены",
    sectionWhatTitle: "Что такое 1С:Бухгалтерия?",
    sectionWhatLead: "Современная версия 8.3, которую использует большинство компаний.",
    whatIs1c: WHAT_IS_RU,
    sectionLearnTitle: "Чему вы научитесь?",
    sectionLearnLead: "Все ключевые функции 1С:Бухгалтерия на практике.",
    learn: LEARN_RU,
    sectionForWhomTitle: "Для кого курс?",
    forWhom: [
      { emoji: "📊", title: "Бухгалтеры", desc: "Кто хочет уверенно работать в 1С." },
      { emoji: "💰", title: "Финансовые специалисты", desc: "Автоматизация отчётности и анализа." },
      { emoji: "💼", title: "Владельцы бизнеса", desc: "Понимание учёта компании." },
      { emoji: "🚀", title: "Новички в профессии", desc: "Старт карьеры в бухгалтерии." },
    ],
    sectionWhyTitle: "Зачем учить 1С?",
    sectionWhyLead: "Один из самых востребованных навыков на рынке Узбекистана.",
    why1c: [
      "Высокий спрос на специалистов 1С",
      "Стабильные вакансии на job-сайтах",
      "Потенциал роста зарплаты",
      "Универсальность по отраслям",
      "Удалённая работа и фриланс",
      "Сильный рычаг для карьеры",
    ],
    sectionFormatTitle: "Формат занятий",
    sectionFormatLead: "Реальные кейсы и задания — теория и практика вместе.",
    format: [
      "Работа на реалистичных данных",
      "Практические задания по модулям",
      "Доступ к учебной версии 1С",
      "Живые занятия и записи",
      "Поддержка ментора",
    ],
    sectionOutcomesTitle: "После курса",
    sectionOutcomesLead: "Навыки 1С, сертификат и помощь с трудоустройством:",
    outcomes: [
      "Уверенная работа в 1С:Бухгалтерия 8.3",
      "Сертификат FBA Academy",
      "Помощь с резюме и вакансиями",
      "Самостоятельная подготовка налоговой отчётности",
    ],
    finalTitle: "Освойте 1С:Бухгалтерия на профессиональном уровне",
    finalDesc: "Подайте заявку и изучите самую востребованную программу. Бесплатная консультация.",
    finalBullet1: "Профессиональные навыки 1С",
    finalBullet2: "Сертификат",
    finalBullet3: "Помощь в поиске работы",
    finalFormTitle: "Подайте заявку",
    finalFormHint: "Мы свяжемся с вами",
    jsonLdName: "1С:Бухгалтерия — Профессиональный курс | FBA Academy",
    jsonLdDesc: "1С:Бухгалтерия 8.3 — документы, зарплата, налоги и анализ.",
  },
};

export function oneCJsonLd(lang: Language, baseUrl: string) {
  const tx = ONE_C_PAGE[lang];
  return [
    {
      "@type": "Course",
      "@id": `${baseUrl}/course/1c-course#course`,
      name: tx.jsonLdName,
      description: tx.jsonLdDesc,
      url: `${baseUrl}/course/1c-course`,
      provider: { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "FBA Academy", url: baseUrl },
      educationalLevel: "Beginner",
      inLanguage: ["uz", "ru", "en"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/course/1c-course#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: tx.breadcrumbHome, item: baseUrl },
        { "@type": "ListItem", position: 2, name: tx.breadcrumbCourses, item: `${baseUrl}/courses` },
        { "@type": "ListItem", position: 3, name: tx.breadcrumbCourseName, item: `${baseUrl}/course/1c-course` },
      ],
    },
  ];
}
