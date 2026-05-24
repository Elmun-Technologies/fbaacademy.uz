import type { LmsCourse, LmsLesson } from "../lms-course-types";

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/['\u2019]/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const v = (title: string, duration?: string, opts?: Partial<LmsLesson>): LmsLesson => ({
  id: slugify(title),
  title,
  duration,
  type: "video",
  ...opts,
});

const a = (title: string, opts?: Partial<LmsLesson>): LmsLesson => ({
  id: slugify(title),
  title,
  type: "article",
  ...opts,
});

const q = (title: string, opts?: Partial<LmsLesson>): LmsLesson => ({
  id: slugify(title),
  title,
  type: "quiz",
  ...opts,
});

export const SBR_STRATEGIC_BUSINESS_REPORTING: LmsCourse = {
  slug: "sbr-strategic-business-reporting",
  wpEnrollUrl: "https://fbaacademy.uz/courses/sbr-strategic-business-reporting-jm001/",
  title: "SBR – Strategic Business Reporting",
  badges: ["ACCA", "Strategic Professional"],
  rating: 0,
  reviewCount: 0,
  enrolledCount: 12,
  level: "Intermediate",
  instructorId: "javohirbek-mominov",
  instructorBio:
    "Ish joyi: Adler Group & Havas Food. Lavozimi: Internal Auditor. ACCA Member. 90% pass rate (last 5 sessions).",
  price: { current: "0", currency: "UZS", isFree: true },
  about: {
    en: "This ACCA SBR – Strategic Business Reporting course is designed to equip you with advanced financial reporting skills required for effective decision-making. You will learn to analyze, interpret, and communicate financial information at a strategic level while mastering IFRS applications. Prepare to elevate your expertise in business reporting and achieve exam success.",
    uz: "Ushbu ACCA SBR – Strategik biznes hisobotlari kursi sizni samarali qaror qabul qilish uchun zarur bo'lgan ilg'or moliyaviy hisobot ko'nikmalariga tayyorlaydi. Strategik darajada moliyaviy ma'lumotlarni tahlil qilish, talqin qilish va yetkazishni, shuningdek MHXS (IFRS) qo'llashni o'rganasiz. Biznes hisobotidagi malakangizni oshiring va imtihonda muvaffaqiyatga erishing.",
    ru: "Курс ACCA SBR – Strategic Business Reporting разработан для формирования продвинутых навыков финансовой отчётности, необходимых для эффективного принятия решений. Вы научитесь анализировать, интерпретировать и представлять финансовую информацию на стратегическом уровне и применять МСФО. Повышайте экспертизу в области корпоративной отчётности и готовьтесь к успешной сдаче экзамена.",
  },
  learn: {
    en: [
      "Interpret and apply International Financial Reporting Standards (IFRS);",
      "Analyze complex financial statements with confidence;",
      "Prepare for ethical and professional challenges in reporting;",
      "Develop skills to advise stakeholders on financial performance;",
      "Achieve mastery of key topics like consolidations, financial instruments, and deferred tax;",
      "Build expertise in integrated reporting and sustainability reporting.",
    ],
    uz: [
      "Xalqaro moliyaviy hisobot standartlari (MHXS/IFRS)ni talqin qilish va qo'llash;",
      "Murakkab moliyaviy hisobotlarni ishonch bilan tahlil qilish;",
      "Hisobotdagi axloqiy va kasbiy muammolarga tayyorlanish;",
      "Manfaatdor tomonlarga moliyaviy natijalar bo'yicha maslahat berish ko'nikmalarini rivojlantirish;",
      "Konsolidatsiya, moliyaviy instrumentlar va kechiktirilgan soliq kabi asosiy mavzularda chuqur bilim;",
      "Integratsiyalashgan va barqarorlik hisobotlarida malaka oshirish.",
    ],
    ru: [
      "Толковать и применять Международные стандарты финансовой отчётности (МСФО);",
      "Уверенно анализировать сложную финансовую отчётность;",
      "Готовиться к этическим и профессиональным вызовам в отчётности;",
      "Развивать навыки консультирования заинтересованных сторон по финансовым результатам;",
      "Освоить ключевые темы: консолидация, финансовые инструменты, отложенный налог;",
      "Сформировать компетенции в интегрированной и устойчивой отчётности.",
    ],
  },
  materials: {
    en: [
      "Pre-Recorded Video Lessons",
      "Bespoke Course Notes",
      "Interactive Quizzes",
      "Exam Kit Questions with Video Explanations",
      "Weekly Revision Sessions",
      "Case Studies and Real-Life Scenarios",
      "2X Full Mock Exams",
    ],
    uz: [
      "Oldindan yozib olingan video darslar",
      "Maxsus kurs qo'llanmalari",
      "Interaktiv testlar",
      "Video tushuntirishli imtihon to'plami savollari",
      "Haftalik takrorlash mashg'ilotlari",
      "Keys-stadi va real hayot ssenariylari",
      "2 ta to'liq sinov imtihoni (mock)",
    ],
    ru: [
      "Предзаписанные видеоуроки",
      "Авторские конспекты курса",
      "Интерактивные тесты",
      "Вопросы exam kit с видеоразбором",
      "Еженедельные сессии повторения",
      "Кейсы и реальные сценарии",
      "2 полных пробных экзамена",
    ],
  },
  requirements: {
    en: [
      "Intermediate English Language (no less than IELTS 6.5)",
      "Typing skills average 35-40 wpm",
      "Strong FR (Financial Reporting) Knowledge",
      "Ethics Knowledge",
    ],
    uz: [
      "O'rta darajadagi ingliz tili (IELTS 6.5 dan past emas)",
      "Matn terish tezligi o'rtacha 35–40 so'z/daqiqa",
      "FR (Moliyaviy hisobot) bo'yicha mustahkam bilim",
      "Etika bo'yicha bilim",
    ],
    ru: [
      "Английский язык на среднем уровне (не ниже IELTS 6.5)",
      "Скорость набора текста в среднем 35–40 слов/мин",
      "Уверенные знания FR (Financial Reporting)",
      "Знания в области этики",
    ],
  },
  audience: {
    en: [
      "Accountants",
      "Auditors",
      "Financial controllers",
      "Financial managers",
      "Business analysts",
      "Investment analysts",
    ],
    uz: [
      "Buxgalterlar",
      "Auditorlar",
      "Moliyaviy nazoratchilar",
      "Moliyaviy menejerlar",
      "Biznes tahlilchilari",
      "Investitsiya tahlilchilari",
    ],
    ru: [
      "Бухгалтеры",
      "Аудиторы",
      "Финансовые контролёры",
      "Финансовые менеджеры",
      "Бизнес-аналитики",
      "Инвестиционные аналитики",
    ],
  },
  curriculum: [
    {
      id: "introduction-to-sbr-strategic-business-reporting",
      title: "Introduction to SBR – Strategic Business Reporting",
      description: "Gain an understanding of SBR, its exam structure, essential materials, and guidance to effectively navigate the course.",
      lessons: [
        v("Introduction to Strategic Business Reporting (SBR)", "15:23", { isPreview: true }),
        v("Exam Structure and Format", "13:29", { isPreview: true }),
        v("Required Skills to PASS SBR exam successfully", "04:50"),
        v("Stepping up From Financial Reporting", "08:49"),
        v("How to Use Website Course effectively", "06:06"),
      ],
    },
    {
      id: "non-current-assets",
      title: "Non-Current Assets",
      description: "Learn the accounting treatments for non-current assets, including initial recognition, subsequent measurement, borrowing costs, government grants, and investment property.",
      lessons: [
        v("IAS 16 Property, Plant and Equipment", "58:57"),
        v("IAS 40 Investment Property", "27:34"),
        v("IAS 23 Borrowing Costs", "20:15"),
        v("IAS 20 Government Grants", "20:00"),
        v("IAS 38 Intangible Assets", "26:54"),
        a("IAS 38 Intangible assets – Technical Article"),
        v("Exam Approach – Gamma Co – Non-current assets", "40:50"),
        v("IAS 36 Impairment of Assets", "40:55"),
        v("IFRS 5 Non-current Assets Held for Sale", "21:34"),
        v("IFRS 5 Discontinued Operations", "11:51"),
        a("IFRS 5 Non-current Assets Held for Sale and Discontinued Operations – Technical Article"),
        v("Exam Approach – Omikron Co – Impairment of Assets", "43:36"),
        q("Test your Learning – Quiz – Non-current assets"),
        q("Test your Learning – Quiz – Impairment of Assets"),
      ],
    },
    {
      id: "ias-41-agriculture-and-ias-2-inventories",
      title: "IAS 41 Agriculture & IAS 2 Inventories",
      description: "Learn how to describe and apply the principles of inventory valuation and requirements of relevant IFRS Standards for biological assets and agricultural produce.",
      lessons: [
        v("IAS 41 Agriculture and IAS 2 Inventories", "20:54"),
      ],
    },
    {
      id: "ifrs-15-revenue-from-contracts-with-customers",
      title: "IFRS 15 Revenue from Contracts with Customers",
      lessons: [
        v("Revenue – 5 Steps for Revenue Recognition", "01:10:14"),
        v("Revenue – Contract assets and liabilities", "00:00"),
        v("Exam approach. Jassie (Revenue IFRS 15)", "35:11"),
        v("Exam Approach. Calibra (Revenue IFRS 15)", "19:51"),
        a("Revenue revisited (part 1) – Technical Article"),
        a("Revenue revisited (part 2) – Technical Article"),
      ],
    },
    {
      id: "ifrs-16-leases",
      title: "IFRS 16 Leases",
      lessons: [
        v("Leases. Lessee Accounting", "01:55:51"),
        v("Leases. Sale and Leaseback", "00:00"),
        v("Leases. Lessor Accounting", "00:00"),
        v("Exam Approach. Benito (IFRS 16 Leases)", "51:13"),
        v("Exam Approach. Stem (IFRS 16 Leases)", "42:35"),
      ],
    },
    {
      id: "ias-8-accounting-policies-estimates-and-prior-year-errors",
      title: "IAS 8 Accounting Policies, Estimates and Prior year errors",
      description: "Learn how to apply the judgements made in selecting and applying accounting policies, accounting for changes in estimates and reflecting corrections of prior period errors",
      lessons: [
        v("IAS 8 Accounting Policies, Changes in Accounting Estimates and Errors", "00:00"),
        a("IFRS 13 Fair Value Measurement – Technical Article"),
        a("Measurement – Technical Article"),
      ],
    },
    {
      id: "ifrs-9-financial-instruments",
      title: "IFRS 9 Financial Instruments",
      lessons: [
        v("Financial Instruments. Financial Assets (Equity instruments)", "00:00"),
        v("Financial Instruments. Financial Assets (Debt instruments)", "00:00"),
        v("Financial Instruments. Financial Liabilities", "00:00"),
        v("Financial Instruments. Convertible Loan note", "00:00"),
        v("Financial Instruments. Impairment of Financial Assets", "00:00"),
        v("Derivatives. Measurement of derivatives", "00:00"),
        a("Financial instruments (part 1) – Technical Article"),
        v("Hedge accounting. Fair Value Hedge and Cash Flow Hedge", "00:00"),
        a("Financial instruments (part 2) – Technical Article"),
        a("Impairment of financial assets – Technical Article"),
        a("When does debt seem to be equity? – Technical Article"),
        v("Topic explainer video: Financial instruments (Debt vs Equity)", "33:03"),
        v("Topic explainer video: Financial instruments (Financial assets)", "34:12"),
      ],
    },
    {
      id: "ias-37-provisions-contingent-liabilities-and-contingent-assets-and-ias-10-events-after-the-reporting-period",
      title: "IAS 37 Provisions, Contingent liabilities and contingent assets & IAS 10 Events After the Reporting Period",
      lessons: [
      ],
    },
    {
      id: "ias-19-employee-benefits",
      title: "IAS 19 Employee Benefits",
      lessons: [
        a("The asset ceiling test, initial coin offerings, non-GAAP, and non-financial performance measures – Technical Article"),
      ],
    },
    {
      id: "ias-12-income-taxes",
      title: "IAS 12 Income Taxes",
      lessons: [
        a("Deferred tax – Technical Article"),
        v("Topic explainer video: Deferred tax / deferred tax and group scenarios", "23:51"),
      ],
    },
    {
      id: "ifrs-2-share-based-payment",
      title: "IFRS 2 Share Based Payment",
      lessons: [
        a("IFRS 2 Share-based Payment – Technical Article"),
      ],
    },
    {
      id: "ifrs-8-operating-segments-segment-reporting",
      title: "IFRS 8 Operating Segments. Segment Reporting",
      lessons: [
      ],
    },
    {
      id: "ias-24-related-parties",
      title: "IAS 24 Related Parties",
      lessons: [
      ],
    },
    {
      id: "group-accounting-basic-groups",
      title: "Group Accounting – basic groups",
      lessons: [
        a("Business Combinations – IFRS 3 (Revised) – Technical Article"),
        a("Impairment of goodwill – Technical Article"),
      ],
    },
    {
      id: "change-in-group-structure",
      title: "Change in Group Structure",
      lessons: [
      ],
    },
    {
      id: "foreign-currency-transactions",
      title: "Foreign Currency Transactions",
      lessons: [
      ],
    },
    {
      id: "group-statement-of-cash-flows",
      title: "Group Statement of Cash Flows",
      lessons: [
      ],
    },
    {
      id: "analysis-and-interpretation",
      title: "Analysis and Interpretation",
      lessons: [
        a("Additional performance measures – Technical Article"),
        a("Giving investors what they need – Technical Article"),
        a("Using the business model of a company to help analyse its performance – Technical Article"),
      ],
    },
    {
      id: "sustainability-and-integrated-reporting",
      title: "Sustainability and Integrated Reporting",
      lessons: [
        a("IFRS Sustainability Disclosure Standards – Technical Article"),
        a("Climate change and IFRS Accounting Standards – Technical Article"),
      ],
    },
    {
      id: "current-issues-in-financial-reporting",
      title: "Current Issues in Financial Reporting",
      lessons: [
        a("Accounting for cryptocurrencies – Technical Article"),
        a("Crowdfunding and impairment of financial instruments – Technical Article"),
      ],
    },
    {
      id: "conceptual-framework",
      title: "Conceptual Framework",
      lessons: [
        a("Profit, loss and other comprehensive income – Technical Article"),
        a("The Conceptual Framework for Financial Reporting – Technical Article"),
      ],
    },
    {
      id: "ethics-and-accountant",
      title: "Ethics and Accountant",
      lessons: [
        a("Accounting ethics in the digital age – Technical Article"),
        v("Topic explainer video: Applying the ethical principles to earn marks", "27:23"),
      ],
    },
    {
      id: "ifrs-accounting-standards-and-the-ifrs-for-smes-accounting-standard",
      title: "IFRS Accounting Standards and the IFRS for SMEs Accounting Standard",
      lessons: [
        a("IFRS for SMEs Accounting Standard – Technical Article"),
      ],
    },
  ],
  tags: [
    "Accounting",
    "Finance",
    "Financial analysis",
    "Financial Reporting",
    "Financial Statements",
    "Statement of Financial Position",
    "Statement of Profit or loss",
  ],
  enrollmentValidity: {
    en: "90 days",
    uz: "90 kun",
    ru: "90 дней",
  },
  lastUpdated: "March 28, 2025",
  certificate: {
    en: "Certificate of completion",
    uz: "Kursni tugatish sertifikati",
    ru: "Сертификат об окончании",
  },
  relatedCourses: [
    {
      slug: "f6",
      title: "F6 – Taxation (The UK version)",
      badge: "ACCA",
      level: "Expert",
      lessonCount: 0,
      instructorName: "Samandar Jo'raqulov",
      href: "https://fbaacademy.uz/courses/f6/",
    },
    {
      slug: "audit-and-assurance-revision-mjd24",
      title: "Audit and Assurance – Revision",
      badge: "ACCA",
      level: "Intermediate",
      lessonCount: 0,
      instructorName: "Javohirbek Mo'minov",
      href: "https://fbaacademy.uz/courses/audit-and-assurance-revision-mjd24/",
    },
    {
      slug: "fr-financial-reportingmjfr001",
      title: "FR 500 – Financial Reporting",
      badge: "ACCA",
      level: "Intermediate",
      lessonCount: 0,
      instructorName: "Javohirbek Mo'minov",
      price: { current: "4300000", original: "4900000", currency: "UZS" },
      href: "https://fbaacademy.uz/courses/fr-financial-reportingmjfr001/",
    },
    {
      slug: "aamj01",
      title: "AA – Audit and Assurance",
      badge: "ACCA",
      level: "Intermediate",
      lessonCount: 0,
      instructorName: "Javohirbek Mo'minov",
      href: "https://fbaacademy.uz/courses/aamj01/",
    },
  ],
};
