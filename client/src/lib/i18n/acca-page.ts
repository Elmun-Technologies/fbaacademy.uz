import type { Language } from "@/lib/translations";

export type AccaStage = {
  title: string;
  color: string;
  papers: string[];
  duration: string;
  href: string;
};

export type AccaWhatLearn = { title: string; desc: string };
export type AccaForWhom = { emoji: string; title: string; desc: string };

export type AccaPageI18n = {
  heroDescription: string;
  heroDurationValue: string;
  seoTitle: string;
  seoDescription: string;
  seoOgTitle: string;
  seoOgDescription: string;
  seoKeywords: string;
  breadcrumbHome: string;
  breadcrumbCourses: string;
  heroBadge: string;
  heroCta: string;
  formTitle: string;
  formHint: string;
  formFootnote: string;
  statDuration: string;
  statSubjects: string;
  statSubjectsValue: string;
  statFormat: string;
  statFormatValue: string;
  statStudents: string;
  sectionWhatIsTitle: string;
  sectionWhatIsLead: string;
  sectionLearnTitle: string;
  sectionLearnLead: string;
  sectionForWhomTitle: string;
  sectionForWhomLead: string;
  sectionWhyTitle: string;
  sectionWhyLead: string;
  sectionStagesTitle: string;
  sectionStagesLead: string;
  sectionFormatTitle: string;
  sectionFormatLead: string;
  sectionOutcomesTitle: string;
  sectionOutcomesLead: string;
  finalCtaTitle: string;
  finalCtaLead: string;
  finalFormTitle: string;
  finalFormHint: string;
  stageMore: string;
  accaInfo: string[];
  whatLearn: AccaWhatLearn[];
  forWhom: AccaForWhom[];
  whyAcca: string[];
  stages: AccaStage[];
  formatItems: string[];
  outcomes: string[];
  finalBullets: string[];
  jsonLdCourseName: string;
  jsonLdCourseDescription: string;
  jsonLdBreadcrumbHome: string;
  jsonLdBreadcrumbCourses: string;
};

const STAGES_BASE: Omit<AccaStage, "duration">[] = [
  {
    title: "Applied Knowledge",
    color: "from-sky-500 to-blue-600",
    papers: ["BT — Business & Technology", "MA — Management Accounting", "FA — Financial Accounting"],
    href: "/course/applied-knowledge",
  },
  {
    title: "Applied Skills",
    color: "from-emerald-500 to-teal-600",
    papers: ["LW — Law", "PM — Performance Mgmt", "TX — Taxation", "FR — Financial Reporting", "AA — Audit", "FM — Financial Mgmt"],
    href: "/course/applied-skills",
  },
  {
    title: "Strategic Professional",
    color: "from-amber-500 to-orange-600",
    papers: ["SBL — Strategic Business Leader", "SBR — Strategic Business Reporting", "AFM or AAA (optional)"],
    href: "/course/strategic-professional",
  },
];

function stagesWithDuration(durations: [string, string, string]): AccaStage[] {
  return STAGES_BASE.map((s, i) => ({ ...s, duration: durations[i]! }));
}

export const ACCA_PAGE: Record<Language, AccaPageI18n> = {
  en: {
    heroDescription:
      "ACCA is one of the world’s most respected accounting and finance qualifications. Through this program you gain deep knowledge of international accounting standards, audit, taxation and financial management.",
    heroDurationValue: "12 mo.",
    seoTitle: "ACCA Certificate — Full Program | FBA Academy Tashkent",
    seoDescription:
      "ACCA (Association of Chartered Certified Accountants) — a leading global accounting qualification. Study Applied Knowledge, Applied Skills and Strategic Professional stages.",
    seoOgTitle: "ACCA — International Accounting Certificate | FBA Academy",
    seoOgDescription:
      "ACCA is recognized in 180+ countries. Your path to Big Four and global careers. Prepare with professional mentors at FBA Academy.",
    seoKeywords:
      "ACCA Uzbekistan, ACCA course Tashkent, ACCA Applied Knowledge, ACCA Applied Skills, ACCA Strategic Professional, Big Four accounting, FBA Academy",
    breadcrumbHome: "Home",
    breadcrumbCourses: "Courses",
    heroBadge: "#1 accounting certificate — 180+ countries",
    heroCta: "Get course details",
    formTitle: "Get a free consultation",
    formHint: "Leave your details — our team will contact you",
    formFootnote: "Get answers about the ACCA path in 10 minutes",
    statDuration: "Duration",
    statSubjects: "Papers",
    statSubjectsValue: "13 papers",
    statFormat: "Format",
    statFormatValue: "Online · Offline",
    statStudents: "Students",
    sectionWhatIsTitle: "What is ACCA?",
    sectionWhatIsLead:
      "ACCA (Association of Chartered Certified Accountants) is one of the world’s most respected accounting and finance qualifications. Three stages: Applied Knowledge, Applied Skills and Strategic Professional — 13 papers in total.",
    sectionLearnTitle: "What will you learn on ACCA?",
    sectionLearnLead: "Audit, tax, financial management and strategy — deep knowledge at an international level",
    sectionForWhomTitle: "Who is ACCA for?",
    sectionForWhomLead: "For professionals who want an internationally recognized certificate in finance and accounting",
    sectionWhyTitle: "Why ACCA?",
    sectionWhyLead: "The ACCA qualification is one of the most important investments in your career",
    sectionStagesTitle: "ACCA stages",
    sectionStagesLead: "Full ACCA qualification in three stages — you can study each stage separately or as a full program",
    sectionFormatTitle: "Class format",
    sectionFormatLead: "Online and offline, theory and practice together — convenient and effective",
    sectionOutcomesTitle: "Outcomes after the program",
    sectionOutcomesLead: "Professional skills, career opportunities and global recognition",
    finalCtaTitle: "Take your career global with the ACCA certificate",
    finalCtaLead:
      "Book a free consultation — our specialists will answer your questions about the ACCA pathway and recommend the best stage for you.",
    finalFormTitle: "Free consultation",
    finalFormHint: "Fill out the form — a specialist will contact you",
    stageMore: "Learn more",
    accaInfo: [
      "ACCA — one of the world’s most prestigious accounting and finance certificates",
      "Recognized and accepted in 180+ countries",
      "13 papers across 3 stages — Applied Knowledge, Applied Skills, Strategic Professional",
      "Valued by the Big Four (Deloitte, PwC, EY, KPMG)",
      "A key qualification demanded by employers in Uzbekistan",
      "Four exam sessions per year: March, June, September, December",
    ],
    whatLearn: [
      { title: "Financial reporting", desc: "Prepare and analyze financial statements under IFRS and international standards." },
      { title: "Audit & assurance", desc: "Internal and external audit processes, evidence and reporting." },
      { title: "Taxation", desc: "Tax systems, tax planning, corporate and personal taxation." },
      { title: "Financial management", desc: "Investment decisions, financing, capital structure and risk management." },
      { title: "Management accounting", desc: "Performance management, budgeting and cost analysis." },
      { title: "Strategic leadership", desc: "Corporate governance, strategic planning and ethics." },
    ],
    forWhom: [
      { emoji: "📊", title: "Accountants & finance professionals", desc: "Those who want to grow with an international certificate." },
      { emoji: "🔍", title: "Audit professionals", desc: "Those aiming for Big Four and international audit firms." },
      { emoji: "🎓", title: "Students & graduates", desc: "Studying or recently graduated in finance, accounting or economics." },
      { emoji: "🌍", title: "Global career builders", desc: "Those who want a certificate recognized in 180+ countries." },
    ],
    whyAcca: [
      "Big Four demand — Deloitte, PwC, EY, KPMG",
      "International certificate recognized in 180+ countries",
      "Potential to increase salary 2–3x",
      "Faster, sustainable career growth",
      "Often required by international companies in Uzbekistan",
    ],
    stages: stagesWithDuration(["4 mo.", "6 mo.", "8 mo."]),
    formatItems: [
      "Classes online (Zoom) and offline at our center",
      "Theory and practice together",
      "Mock exams for regular progress checks",
      "Past paper analysis",
      "Ongoing support via Telegram with a curator",
    ],
    outcomes: [
      "Apply international financial reporting standards in practice",
      "Run audit and assurance processes independently",
      "Deep knowledge of tax planning and corporate governance",
      "Stronger chances to join Big Four and international firms",
      "ACCA as the strongest proof on your CV",
    ],
    finalBullets: [
      "Recognized in 180+ countries",
      "Theory and practice",
      "Fast career growth",
      "Professional mentors",
    ],
    jsonLdCourseName: "ACCA — Association of Chartered Certified Accountants | FBA Academy",
    jsonLdCourseDescription:
      "ACCA — a leading global accounting qualification. Three stages: Applied Knowledge, Applied Skills, Strategic Professional.",
    jsonLdBreadcrumbHome: "Home",
    jsonLdBreadcrumbCourses: "Courses",
  },
  uz: {
    heroDescription:
      "ACCA — bu dunyodagi eng nufuzli buxgalteriya va moliyaviy sertifikatlardan biri. Ushbu dastur orqali siz xalqaro buxgalteriya standartlari, audit, soliqqa tortish va moliyaviy boshqaruv bo'yicha chuqur bilim olasiz.",
    heroDurationValue: "12 oy",
    seoTitle: "ACCA sertifikati — To'liq dastur | FBA Academy Toshkent",
    seoDescription:
      "ACCA (Association of Chartered Certified Accountants) — dunyodagi eng nufuzli buxgalteriya sertifikatlaridan biri. Applied Knowledge, Applied Skills va Strategic Professional bosqichlari.",
    seoOgTitle: "ACCA — Xalqaro buxgalteriya sertifikati | FBA Academy",
    seoOgDescription:
      "ACCA — 180+ davlatda tan olingan. Big Four va xalqaro karyeraga yo'l. FBA Academy'da professional mentorlar bilan tayyorlaning.",
    seoKeywords:
      "ACCA sertifikati O'zbekiston, ACCA kurs Toshkent, ACCA Applied Knowledge, ACCA Applied Skills, ACCA Strategic Professional, Big Four buxgalteriya, FBA Academy",
    breadcrumbHome: "Bosh sahifa",
    breadcrumbCourses: "Kurslar",
    heroBadge: "#1 Buxgalteriya sertifikati — 180+ davlatda",
    heroCta: "Kurs haqida ma'lumot olish",
    formTitle: "Bepul konsultatsiya oling",
    formHint: "Ma'lumotlaringizni qoldiring — mutaxassislarimiz siz bilan bog'lanadi",
    formFootnote: "10 daqiqada ACCA yo'li haqida barcha savollaringizga javob oling",
    statDuration: "Davomiyligi",
    statSubjects: "Fanlar soni",
    statSubjectsValue: "13 ta fan",
    statFormat: "Format",
    statFormatValue: "Onlayn · Oflayn",
    statStudents: "Talabalar",
    sectionWhatIsTitle: "ACCA nima?",
    sectionWhatIsLead:
      "ACCA (Association of Chartered Certified Accountants) — dunyodagi eng nufuzli buxgalteriya va moliyaviy sertifikatlardan biri. 3 bosqich: Applied Knowledge, Applied Skills va Strategic Professional. Jami 13 ta fan.",
    sectionLearnTitle: "ACCA da nimalarni o'rganasiz?",
    sectionLearnLead: "Audit, soliq, moliyaviy boshqaruv va strategiya — xalqaro darajadagi chuqur bilimlar",
    sectionForWhomTitle: "ACCA kimlar uchun?",
    sectionForWhomLead: "Moliya va buxgalteriya sohasida xalqaro darajadagi sertifikat olishni maqsad qilganlar uchun",
    sectionWhyTitle: "Nima uchun ACCA?",
    sectionWhyLead: "ACCA sertifikati karyerangizdagi eng muhim investitsiya",
    sectionStagesTitle: "ACCA bosqichlari",
    sectionStagesLead: "3 bosqichda to'liq ACCA malakasi — har bosqichni alohida yoki to'liq dastur sifatida o'qishingiz mumkin",
    sectionFormatTitle: "Dars formati",
    sectionFormatLead: "Onlayn va oflayn formatda, nazariya va amaliyot birga — qulay va samarali",
    sectionOutcomesTitle: "Kurs yakunida natija",
    sectionOutcomesLead: "Professional bilim, ish imkoniyatlari va xalqaro tan olinish",
    finalCtaTitle: "ACCA sertifikati bilan karyerangizni global darajaga olib chiqing",
    finalCtaLead:
      "Bepul konsultatsiya oling — mutaxassislarimiz ACCA yo'li haqida barcha savollaringizga javob beradi va sizga eng mos bosqichni tavsiya qiladi.",
    finalFormTitle: "Bepul konsultatsiya",
    finalFormHint: "Formani to'ldiring — mutaxassis siz bilan bog'lanadi",
    stageMore: "Batafsil",
    accaInfo: [
      "ACCA — dunyodagi eng nufuzli buxgalteriya va moliyaviy sertifikat",
      "180 dan ortiq davlatda tan olingan va qabul qilingan",
      "13 ta fandan iborat: 3 bosqich — Applied Knowledge, Applied Skills, Strategic Professional",
      "Big Four (Deloitte, PwC, EY, KPMG) tomonidan talqin etiladi",
      "O'zbekistonda ham soha vakillaridan talab qilinuvchi muhim malaka",
      "Yiliga 4 marta imtihon sessiyasi: mart, iyun, sentyabr, dekabr",
    ],
    whatLearn: [
      { title: "Moliyaviy hisobot", desc: "IFRS va xalqaro standartlar asosida moliyaviy hisobotlar tayyorlash va tahlil qilish." },
      { title: "Audit va assurance", desc: "Ichki va tashqi audit jarayonlari, audit dalillari va hisobotlari." },
      { title: "Soliqqa tortish", desc: "Soliq tizimi, soliq rejalash, korporativ va jismoniy shaxslar solig'i." },
      { title: "Moliyaviy boshqaruv", desc: "Investitsiya qarorlari, moliyalashtirish, kapital tuzilmasi va risk boshqaruvi." },
      { title: "Boshqaruv hisobi", desc: "Samaradorlik boshqaruvi, byudjetlashtirish, xarajatlar tahlili." },
      { title: "Strategik yetakchilik", desc: "Korporativ boshqaruv, strategik rejalashtirish va etika masalalari." },
    ],
    forWhom: [
      { emoji: "📊", title: "Buxgalterlar va moliyachilar", desc: "Xalqaro sertifikat bilan malakasini oshirib, karyerasini rivojlantirmoqchi bo'lganlar." },
      { emoji: "🔍", title: "Audit xodimlari", desc: "Big Four va xalqaro audit firmalarida ishlashni maqsad qilgan mutaxassislar." },
      { emoji: "🎓", title: "Talabalar va bitiruvchilar", desc: "Moliya, buxgalteriya, iqtisod yo'nalishida o'qiyotgan yoki endigina tugatganlar." },
      { emoji: "🌍", title: "Xalqaro karyera quruvchilar", desc: "180+ davlatda tan olingan sertifikat bilan global bozorga chiqmoqchilar." },
    ],
    whyAcca: [
      "Big Four firmalar talabi — Deloitte, PwC, EY, KPMG",
      "180+ davlatda tan olingan xalqaro sertifikat",
      "Maosh 2–3 barobargacha o'sish imkoniyati",
      "Karyerada tez va barqaror o'sish",
      "O'zbekistondagi xalqaro kompaniyalar uchun majburiy talab",
    ],
    stages: stagesWithDuration(["4 oy", "6 oy", "8 oy"]),
    formatItems: [
      "Onlayn (Zoom) va oflayn (Markazda) formatda darslar",
      "Nazariy bilimlar va amaliy mashg'ulotlar birgalikda",
      "Mock-exams — sinov imtihonlari bilan muntazam tekshirish",
      "Past papers — o'tgan yillar imtihon savollari tahlili",
      "Telegram guruhida kurator bilan doimiy aloqa",
    ],
    outcomes: [
      "Xalqaro moliyaviy hisobot standartlarini amaliyotda qo'llay olasiz",
      "Audit va tekshiruv jarayonlarini mustaqil olib borasiz",
      "Soliq rejalash va korporativ boshqaruv bo'yicha chuqur bilim olasiz",
      "Big Four va xalqaro kompaniyalarga ishga kirish imkoniyati",
      "ACCA sertifikati — karyerangizda eng kuchli dalil",
    ],
    finalBullets: [
      "180+ davlatda tan olingan",
      "Amaliy va nazariy bilimlar",
      "Karyerada tez o'sish",
      "Professional mentorlar",
    ],
    jsonLdCourseName: "ACCA — Association of Chartered Certified Accountants | FBA Academy",
    jsonLdCourseDescription:
      "ACCA sertifikati — dunyodagi eng nufuzli buxgalteriya malakasi. 3 bosqich: Applied Knowledge, Applied Skills, Strategic Professional.",
    jsonLdBreadcrumbHome: "Bosh sahifa",
    jsonLdBreadcrumbCourses: "Kurslar",
  },
  ru: {
    heroDescription:
      "ACCA — один из самых престижных международных сертификатов в бухгалтерии и финансах. В рамках программы вы получите глубокие знания по международным стандартам, аудиту, налогообложению и финансовому менеджменту.",
    heroDurationValue: "12 мес.",
    seoTitle: "Сертификат ACCA — Полная программа | FBA Academy Ташкент",
    seoDescription:
      "ACCA (Association of Chartered Certified Accountants) — один из самых престижных международных сертификатов в бухгалтерии и финансах. Этапы Applied Knowledge, Applied Skills и Strategic Professional.",
    seoOgTitle: "ACCA — Международный бухгалтерский сертификат | FBA Academy",
    seoOgDescription:
      "ACCA признаётся в 180+ странах. Путь в Big Four и международную карьеру. Подготовка с профессиональными менторами в FBA Academy.",
    seoKeywords:
      "ACCA Узбекистан, курс ACCA Ташкент, ACCA Applied Knowledge, ACCA Applied Skills, ACCA Strategic Professional, Big Four бухгалтерия, FBA Academy",
    breadcrumbHome: "Главная",
    breadcrumbCourses: "Курсы",
    heroBadge: "#1 бухгалтерский сертификат — 180+ стран",
    heroCta: "Узнать подробнее о курсе",
    formTitle: "Бесплатная консультация",
    formHint: "Оставьте контакты — специалисты свяжутся с вами",
    formFootnote: "За 10 минут ответим на вопросы о пути ACCA",
    statDuration: "Длительность",
    statSubjects: "Дисциплины",
    statSubjectsValue: "13 дисциплин",
    statFormat: "Формат",
    statFormatValue: "Онлайн · Офлайн",
    statStudents: "Студенты",
    sectionWhatIsTitle: "Что такое ACCA?",
    sectionWhatIsLead:
      "ACCA (Association of Chartered Certified Accountants) — один из самых авторитетных международных квалификаций в бухгалтерии и финансах. Три этапа: Applied Knowledge, Applied Skills и Strategic Professional — всего 13 дисциплин.",
    sectionLearnTitle: "Чему вы научитесь на ACCA?",
    sectionLearnLead: "Аудит, налоги, финансовый менеджмент и стратегия — глубокие знания международного уровня",
    sectionForWhomTitle: "Для кого ACCA?",
    sectionForWhomLead: "Для тех, кто хочет получить международно признанный сертификат в финансах и бухгалтерии",
    sectionWhyTitle: "Зачем ACCA?",
    sectionWhyLead: "Сертификат ACCA — одна из самых важных инвестиций в карьеру",
    sectionStagesTitle: "Этапы ACCA",
    sectionStagesLead: "Полная квалификация ACCA в три этапа — можно проходить каждый этап отдельно или всю программу целиком",
    sectionFormatTitle: "Формат занятий",
    sectionFormatLead: "Онлайн и офлайн, теория и практика вместе — удобно и эффективно",
    sectionOutcomesTitle: "Результат после программы",
    sectionOutcomesLead: "Профессиональные навыки, карьерные возможности и международное признание",
    finalCtaTitle: "Выведите карьеру на глобальный уровень с сертификатом ACCA",
    finalCtaLead:
      "Запишитесь на бесплатную консультацию — наши специалисты ответят на вопросы о пути ACCA и порекомендуют оптимальный этап.",
    finalFormTitle: "Бесплатная консультация",
    finalFormHint: "Заполните форму — специалист свяжется с вами",
    stageMore: "Подробнее",
    accaInfo: [
      "ACCA — один из самых престижных международных сертификатов в бухгалтерии и финансах",
      "Признаётся более чем в 180 странах",
      "13 дисциплин в 3 этапах — Applied Knowledge, Applied Skills, Strategic Professional",
      "Высоко ценится в Big Four (Deloitte, PwC, EY, KPMG)",
      "Важная квалификация для работодателей в Узбекистане",
      "Четыре сессии экзаменов в год: март, июнь, сентябрь, декабрь",
    ],
    whatLearn: [
      { title: "Финансовая отчётность", desc: "Подготовка и анализ отчётности по МСФО и международным стандартам." },
      { title: "Аудит и assurance", desc: "Внутренний и внешний аудит, доказательства и отчётность." },
      { title: "Налогообложение", desc: "Налоговые системы, планирование, корпоративные и персональные налоги." },
      { title: "Финансовый менеджмент", desc: "Инвестиционные решения, финансирование, структура капитала и риски." },
      { title: "Управленческий учёт", desc: "Управление эффективностью, бюджетирование, анализ затрат." },
      { title: "Стратегическое лидерство", desc: "Корпоративное управление, стратегическое планирование и этика." },
    ],
    forWhom: [
      { emoji: "📊", title: "Бухгалтеры и финансисты", desc: "Кто хочет повысить квалификацию с международным сертификатом." },
      { emoji: "🔍", title: "Специалисты по аудиту", desc: "Кто ориентируется на Big Four и международные аудиторские компании." },
      { emoji: "🎓", title: "Студенты и выпускники", desc: "По направлениям финансы, бухгалтерия, экономика." },
      { emoji: "🌍", title: "Кто строит международную карьеру", desc: "Сертификат, признанный в 180+ странах." },
    ],
    whyAcca: [
      "Требование Big Four — Deloitte, PwC, EY, KPMG",
      "Международный сертификат, признанный в 180+ странах",
      "Потенциал роста зарплаты в 2–3 раза",
      "Быстрый и устойчивый карьерный рост",
      "Часто обязателен в международных компаниях Узбекистана",
    ],
    stages: stagesWithDuration(["4 мес.", "6 мес.", "8 мес."]),
    formatItems: [
      "Занятия онлайн (Zoom) и офлайн в центре",
      "Теория и практика вместе",
      "Пробные экзамены для регулярной проверки прогресса",
      "Разбор заданий прошлых лет",
      "Постоянная связь с куратором в Telegram",
    ],
    outcomes: [
      "Применять международные стандарты финансовой отчётности на практике",
      "Самостоятельно вести аудит и assurance",
      "Глубокие знания по налоговому планированию и корпоративному управлению",
      "Больше шансов попасть в Big Four и международные компании",
      "ACCA — сильнейшее доказательство в резюме",
    ],
    finalBullets: [
      "Признание в 180+ странах",
      "Теория и практика",
      "Быстрый карьерный рост",
      "Профессиональные менторы",
    ],
    jsonLdCourseName: "ACCA — Association of Chartered Certified Accountants | FBA Academy",
    jsonLdCourseDescription:
      "Сертификат ACCA — ведущая международная квалификация в бухгалтерии. Три этапа: Applied Knowledge, Applied Skills, Strategic Professional.",
    jsonLdBreadcrumbHome: "Главная",
    jsonLdBreadcrumbCourses: "Курсы",
  },
};

export function accaJsonLdSchemas(lang: Language, baseUrl: string) {
  const tx = ACCA_PAGE[lang];
  return [
    {
      "@type": "Course",
      "@id": `${baseUrl}/course/acca#course`,
      name: tx.jsonLdCourseName,
      description: tx.jsonLdCourseDescription,
      url: `${baseUrl}/course/acca`,
      provider: { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "FBA Academy", url: baseUrl },
      educationalLevel: "Professional",
      inLanguage: ["uz", "ru", "en"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/course/acca#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: tx.jsonLdBreadcrumbHome, item: baseUrl },
        { "@type": "ListItem", position: 2, name: tx.jsonLdBreadcrumbCourses, item: `${baseUrl}/courses` },
        { "@type": "ListItem", position: 3, name: "ACCA", item: `${baseUrl}/course/acca` },
      ],
    },
  ];
}
