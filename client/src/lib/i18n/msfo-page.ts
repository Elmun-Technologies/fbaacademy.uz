import type { Language } from "@/lib/translations";

export type MsfoForWhom = { emoji: string; title: string };

export type MsfoPageI18n = {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  ogTitle: string;
  ogDescription: string;
  breadcrumbHome: string;
  breadcrumbCourses: string;
  breadcrumbCourseName: string;
  heroTitleLine1: string;
  heroTitleHighlight: string;
  heroDesc: string;
  heroCta: string;
  formTitle: string;
  formHint: string;
  formFootnote: string;
  sectionWhatTitle: string;
  sectionWhatBody: string;
  sectionSkillsTitle: string;
  skills: string[];
  sectionModulesTitle: string;
  modules: { title: string; desc: string }[];
  sectionForWhomTitle: string;
  forWhom: MsfoForWhom[];
  sectionWhyTitle: string;
  whyLearn: string[];
  sectionOutcomesTitle: string;
  sectionOutcomesLead: string;
  outcomes: string[];
  sectionWhyFbaTitle: string;
  sectionWhyFbaLead: string;
  whyFba: string[];
  sectionInstructorTitle: string;
  instructorPlaceholderTitle: string;
  instructorPlaceholderHint: string;
  sectionFormatTitle: string;
  courseFormat: string[];
  partnersTitle: string;
  finalTitle: string;
  finalLine1: string;
  finalLine2: string;
  finalFormTitle: string;
  finalFormHint: string;
  jsonLdName: string;
  jsonLdDesc: string;
};

const FOR_WHOM_UZ: MsfoForWhom[] = [
  { emoji: "📊", title: "Buxgalterlar" },
  { emoji: "💰", title: "Moliyachilar" },
  { emoji: "🔍", title: "Auditorlar" },
  { emoji: "🏢", title: "Yirik kompaniyalarda ishlovchilar" },
  { emoji: "🌍", title: "Xalqaro kompaniyalarda ishlashni istovchilar" },
  { emoji: "📋", title: "МСФО asosida hisobot berish talab qilinganlar" },
  { emoji: "🇷🇺", title: "Rus tilini biladigan mutaxassislar" },
  { emoji: "🎓", title: "Buxgalteriya sohasida kamida 2 yillik ish tajribasiga ega bo'lganlar" },
];

const WHY_LEARN_UZ = [
  "Ish joyida malaka va oylik oshishi uchun",
  "Kompaniyada MSFO hisoboti yuritilishi talab etilishi mumkin",
  "Yangi ish imkoniyatlari yoki lavozim ko'tarilishi",
  "Xalqaro sertifikat (masalan, DipIFR) ga yo'l ochish uchun",
];

const OUT_UZ = [
  "MSFO asosida hisobot tayyorlashni bilib olasiz",
  "Real ish jarayonida qo'llash ko'nikmasiga ega bo'lasiz",
  "Ish joyingizda ishonch va nufuz oshadi",
  "DipIFR va boshqa xalqaro kurslarga tayyorgarlik darajasi oshadi",
];

const WHY_FBA_UZ = [
  "ACCA Member maqomiga ega ustozlar",
  "Yillar davomida sinovdan o'tgan metodika",
  "Ishlaydigan mutaxassislar uchun mos jadval",
  "Amaliy mashg'ulotlarga asoslangan yondashuv",
  "Bir vaqtning o'zida onlayn va oflayn darslar",
];

const FORMAT_UZ = [
  "Darslar uch qismga bo'linadi: O'qitish, Takrorlash, Sinov imtihonlari (Mock-exams)",
  "Darslar rus tilida olib boriladi",
  "Nazariya va amaliy mashg'ulotlar",
  "Imtihon savollari va keyslar tahlili",
  "Onlayn va Oflayn",
  "Savol-javob va muhokama sessiyalari",
];

export const MSFO_PAGE: Record<Language, MsfoPageI18n> = {
  en: {
    seoTitle: "IFRS Course — International Financial Reporting | FBA Academy Tashkent",
    seoDescription:
      "IFRS course in Uzbekistan — learn reporting under international standards. Grow your role, income and career. FBA Academy.",
    seoKeywords: "IFRS course Tashkent, IFRS Uzbekistan, international financial reporting, MSFO, DipIFR prep, FBA Academy",
    ogTitle: "IFRS — International Financial Reporting | FBA Academy",
    ogDescription: "Learn international-standard reporting. ACCA Member instructors, hands-on practice, online and offline.",
    breadcrumbHome: "Home",
    breadcrumbCourses: "Courses",
    breadcrumbCourseName: "IFRS",
    heroTitleLine1: "IFRS — international financial reporting",
    heroTitleHighlight: "hands-on course",
    heroDesc: "Learn to prepare reports under global standards. Advance your position, income and career.",
    heroCta: "Get a free consultation",
    formTitle: "Get a free consultation about the course",
    formHint: "Leave your details — our team will contact you",
    formFootnote: "Your information is kept confidential",
    sectionWhatTitle: "What is IFRS?",
    sectionWhatBody:
      "IFRS are international financial reporting standards used by many companies and governments worldwide. They help present financial position transparently. In Uzbekistan, more large employers now expect IFRS competence.",
    sectionSkillsTitle: "What will you learn?",
    skills: [
      "Core IFRS principles",
      "Building financial statement structures",
      "Applying standards through practical cases",
      "Foundations of financial analysis",
    ],
    sectionModulesTitle: "Course modules",
    modules: [
      { title: "Module 1: Introduction to IFRS", desc: "IFRS framework, core principles, scope and adoption in Uzbekistan." },
      { title: "Module 2: Types of financial statements", desc: "Balance sheet, P&L, cash flow statement and equity changes." },
      { title: "Module 3: Key IFRS standards", desc: "Applying key IAS and IFRS standards in practice, adjustments." },
      { title: "Module 4: Cases and practice", desc: "Practical cases based on real companies, past exam questions and discussion sessions." },
    ],
    sectionForWhomTitle: "Who needs IFRS?",
    forWhom: [
      { emoji: "📊", title: "Accountants" },
      { emoji: "💰", title: "Finance professionals" },
      { emoji: "🔍", title: "Auditors" },
      { emoji: "🏢", title: "Anyone building a finance career in large or international companies" },
      { emoji: "📋", title: "Those required to report under IFRS" },
      { emoji: "🇷🇺", title: "Professionals comfortable studying in Russian" },
    ],
    sectionWhyTitle: "Why learn IFRS?",
    whyLearn: [
      "Grow skills and compensation at work",
      "Your employer may require IFRS reporting",
      "New roles or promotions",
      "A pathway toward international certifications such as DipIFR",
    ],
    sectionOutcomesTitle: "What changes after the course?",
    sectionOutcomesLead: "By the end you will:",
    outcomes: [
      "Know how to prepare IFRS-based reports",
      "Be able to apply knowledge in real workflows",
      "Gain credibility with colleagues and leadership",
      "Be better prepared for DipIFR and other advanced programs",
    ],
    sectionWhyFbaTitle: "Why FBA Academy?",
    sectionWhyFbaLead: "Our DipIFR track is built on these strengths:",
    whyFba: [
      "Instructors with ACCA Member status",
      "A methodology refined over years",
      "Schedules suited to working professionals",
      "Practice-first approach",
      "Online and offline in parallel",
    ],
    sectionInstructorTitle: "Who teaches the classes?",
    instructorPlaceholderTitle: "Instructor profile coming soon",
    instructorPlaceholderHint: "Full bios will be published shortly.",
    sectionFormatTitle: "Course format and flow",
    courseFormat: [
      "Three pillars: teaching, revision, mock exams",
      "Classes conducted in Russian",
      "Theory and practical exercises",
      "Past exam questions and case analysis",
      "Online and offline",
      "Q&A and discussion sessions",
    ],
    partnersTitle: "Our graduates work at these organizations",
    finalTitle: "You can join our successful graduates too!",
    finalLine1: "New cohorts start soon.",
    finalLine2: "Fill out the form below for details on the DipIFR track — our team will reach out.",
    finalFormTitle: "Free consultation",
    finalFormHint: "Submit the form — a specialist will contact you",
    jsonLdName: "IFRS — practical international financial reporting | FBA Academy",
    jsonLdDesc: "IFRS course — international-standard reporting in Uzbekistan.",
  },
  uz: {
    seoTitle: "MSFO Kurs — Xalqaro Moliyaviy Hisobot | FBA Academy Toshkent",
    seoDescription:
      "MSFO (IFRS) kursi — xalqaro standartlarda hisobot yuritishni o'rganing. Lavozim, daromad va karyerada o'sish. FBA Academy.",
    seoKeywords: "MSFO kurs Toshkent, IFRS O'zbekiston, xalqaro moliyaviy hisobot, MSFO standartlari, DipIFR tayyorgarlik, FBA Academy",
    ogTitle: "MSFO — Xalqaro Moliyaviy Hisobot Kursi | FBA Academy",
    ogDescription: "Xalqaro standartlarda hisobot yuritishni o'rganing. ACCA Member ustozlar, amaliy mashg'ulotlar, onlayn va oflayn.",
    breadcrumbHome: "Bosh sahifa",
    breadcrumbCourses: "Kurslar",
    breadcrumbCourseName: "MSFO",
    heroTitleLine1: "MSFO — xalqaro moliyaviy hisobot",
    heroTitleHighlight: "bo'yicha amaliy kurs",
    heroDesc: "Xalqaro standartlarda hisobot yuritishni o'rganing. Lavozim, daromad, karyerada katta o'sishga erishing.",
    heroCta: "Kurs haqida bepul maslahat olish",
    formTitle: "Kurs haqida bepul maslahat olish",
    formHint: "Ma'lumotlaringizni qoldiring — mutaxassislarimiz siz bilan bog'lanadi",
    formFootnote: "Ma'lumotlaringiz maxfiy saqlanadi",
    sectionWhatTitle: "MSFO nima?",
    sectionWhatBody:
      "МСФО (IFRS) — xalqaro moliyaviy hisobot standartlari bo'lib, dunyodagi ko'plab kompaniyalar va davlatlar aynan shu standartlar asosida hisobot yuritadi. Ushbu standartlar orqali biznes moliyaviy holatini to'g'ri va shaffof ifoda qiladi. Prezident qaroriga muvofiq, O'zbekistonda ham ko'plab yirik kompaniyalardan ushbu sertifikat talab etilmoqda.",
    sectionSkillsTitle: "Nimalarni o'rganasiz?",
    skills: [
      "МСФО asosiy tamoyillari",
      "Moliyaviy hisobotlar strukturasini tuzish",
      "Amaliy case'lar asosida standartlar qo'llanilishi",
      "Moliyaviy tahlil asoslari",
    ],
    sectionModulesTitle: "Dars modullari",
    modules: [
      { title: "Modul 1: МСФОga kirish", desc: "МСФО tizimi, asosiy tamoyillari, qo'llanish sohalari va O'zbekistonda joriy etilishi." },
      { title: "Modul 2: Moliyaviy hisobotlar turlari", desc: "Balans, foyda-zarar hisoboti, pul oqimlari va kapital o'zgarishlari hisoboti." },
      { title: "Modul 3: Muhim МСФО standartlari", desc: "Asosiy IAS va IFRS standartlarini amaliyotda qo'llash, korrektirovkalar." },
      { title: "Modul 4: Case va amaliyotlar", desc: "Real kompaniyalar misolida amaliy keyslar, imtihon savollari va muhokama sessiyalari." },
    ],
    sectionForWhomTitle: "MSFO kimlar uchun kerak?",
    forWhom: FOR_WHOM_UZ,
    sectionWhyTitle: "Nega MSFOni o'rganish kerak?",
    whyLearn: WHY_LEARN_UZ,
    sectionOutcomesTitle: "Kursni o'qisangiz nima o'zgaradi?",
    sectionOutcomesLead: "Kurs yakunida siz:",
    outcomes: OUT_UZ,
    sectionWhyFbaTitle: "Nega aynan FBA Academy?",
    sectionWhyFbaLead: "FBA Academyning DipIFR kurslari quyidagi ustunliklarga ega:",
    whyFba: WHY_FBA_UZ,
    sectionFormatTitle: "Kurs formati va jarayoni",
    courseFormat: FORMAT_UZ,
    sectionInstructorTitle: "Darslarni kim o'tkazadi?",
    instructorPlaceholderTitle: "Ustoz haqida ma'lumot tez orada",
    instructorPlaceholderHint: "Tez orada ustoz haqida to'liq ma'lumot qo'shiladi",
    partnersTitle: "Bitiruvchilarimiz shu tashkilotlarda ishlaydi",
    finalTitle: "Sizda ham muvaffaqiyatli o'quvchilarimiz qatorida bo'lish imkoniyati bor!",
    finalLine1: "Darslar yaqin kunlarda start oladi.",
    finalLine2: "DipIFR kursi haqida batafsil ma'lumot olish uchun quyidagi formani to'ldiring — mutaxassislarimiz siz bilan bog'lanadi.",
    finalFormTitle: "Bepul konsultatsiya olish",
    finalFormHint: "Formani to'ldiring — mutaxassis siz bilan bog'lanadi",
    jsonLdName: "MSFO — xalqaro moliyaviy hisobot bo'yicha amaliy kurs | FBA Academy",
    jsonLdDesc: "MSFO (IFRS) kursi O'zbekistonda — xalqaro standartlarda hisobot yuritish.",
  },
  ru: {
    seoTitle: "Курс МСФО — Международная финансовая отчётность | FBA Academy Ташкент",
    seoDescription:
      "Курс МСФО (IFRS) — отчётность по международным стандартам. Рост должности, дохода и карьеры. FBA Academy.",
    seoKeywords: "МСФО курс Ташкент, IFRS Узбекистан, международная отчётность, подготовка DipIFR, FBA Academy",
    ogTitle: "МСФО — Международная финансовая отчётность | FBA Academy",
    ogDescription: "Международные стандарты отчётности. Преподаватели ACCA Member, практика, онлайн и офлайн.",
    breadcrumbHome: "Главная",
    breadcrumbCourses: "Курсы",
    breadcrumbCourseName: "МСФО",
    heroTitleLine1: "МСФО — международная финансовая отчётность",
    heroTitleHighlight: "практический курс",
    heroDesc: "Освойте отчётность по международным стандартам. Рост должности, дохода и карьеры.",
    heroCta: "Бесплатная консультация по курсу",
    formTitle: "Бесплатная консультация по курсу",
    formHint: "Оставьте контакты — мы свяжемся с вами",
    formFootnote: "Данные конфиденциальны",
    sectionWhatTitle: "Что такое МСФО?",
    sectionWhatBody:
      "МСФО (IFRS) — международные стандарты финансовой отчётности, используемые многими компаниями и государствами. Они помогают прозрачно отражать финансовое положение бизнеса. По указу Президента, в Узбекистане у крупных компаний всё чаще требуют знание МСФО.",
    sectionSkillsTitle: "Что вы изучите?",
    skills: [
      "Основные принципы МСФО",
      "Составление структуры финансовой отчётности",
      "Применение стандартов через практические кейсы",
      "Основы финансового анализа",
    ],
    sectionModulesTitle: "Модули курса",
    modules: [
      { title: "Модуль 1: Введение в МСФО", desc: "Система МСФО, основные принципы, область применения и внедрение в Узбекистане." },
      { title: "Модуль 2: Виды финансовой отчётности", desc: "Баланс, отчёт о прибылях и убытках, отчёт о движении денежных средств." },
      { title: "Модуль 3: Ключевые стандарты МСФО", desc: "Применение ключевых IAS и IFRS на практике, корректировки." },
      { title: "Модуль 4: Кейсы и практика", desc: "Практические кейсы на реальных компаниях, экзаменационные вопросы и сессии обсуждений." },
    ],
    sectionForWhomTitle: "Кому нужен МСФО?",
    forWhom: [
      { emoji: "📊", title: "Бухгалтеры" },
      { emoji: "💰", title: "Финансовые специалисты" },
      { emoji: "🔍", title: "Аудиторы" },
      { emoji: "🏢", title: "Те, кто строит карьеру в крупных или международных компаниях" },
      { emoji: "📋", title: "Тем, кому нужна отчётность по МСФО" },
      { emoji: "🇷🇺", title: "Специалисты, готовые учиться на русском" },
    ],
    sectionWhyTitle: "Зачем учить МСФО?",
    whyLearn: [
      "Рост квалификации и дохода",
      "Требования работодателя к отчётности по МСФО",
      "Новые вакансии и повышение",
      "Подготовка к DipIFR и другим международным программам",
    ],
    sectionOutcomesTitle: "Что изменится после курса?",
    sectionOutcomesLead: "По итогам вы:",
    outcomes: [
      "Сможете готовить отчётность по МСФО",
      "Примените знания в реальных процессах",
      "Укрепите доверие на работе",
      "Повысите готовность к DipIFR",
    ],
    sectionWhyFbaTitle: "Почему FBA Academy?",
    sectionWhyFbaLead: "Наши программы по DipIFR опираются на:",
    whyFba: [
      "Преподавателей со статусом ACCA Member",
      "Проверенную методику",
      "График для работающих",
      "Практико-ориентированный подход",
      "Онлайн и офлайн параллельно",
    ],
    sectionInstructorTitle: "Кто ведёт занятия?",
    instructorPlaceholderTitle: "Информация о преподавателе скоро",
    instructorPlaceholderHint: "Скоро добавим полные биографии.",
    sectionFormatTitle: "Формат и процесс курса",
    courseFormat: [
      "Три блока: обучение, повторение, пробные экзамены",
      "Занятия на русском языке",
      "Теория и практика",
      "Разбор вопросов и кейсов",
      "Онлайн и офлайн",
      "Сессии вопросов и ответов",
    ],
    partnersTitle: "Наши выпускники работают в этих организациях",
    finalTitle: "И вы можете присоединиться к нашим успешным выпускникам!",
    finalLine1: "Старт новых групп уже скоро.",
    finalLine2: "Заполните форму для подробностей по курсу DipIFR — мы свяжемся с вами.",
    finalFormTitle: "Бесплатная консультация",
    finalFormHint: "Заполните форму — специалист свяжется с вами",
    jsonLdName: "МСФО — практический курс международной отчётности | FBA Academy",
    jsonLdDesc: "Курс МСФО (IFRS) в Узбекистане.",
  },
};

export function msfoJsonLd(lang: Language, baseUrl: string) {
  const tx = MSFO_PAGE[lang];
  return [
    {
      "@type": "Course",
      "@id": `${baseUrl}/course/msfo#course`,
      name: tx.jsonLdName,
      description: tx.jsonLdDesc,
      url: `${baseUrl}/course/msfo`,
      provider: { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "FBA Academy", url: baseUrl },
      educationalLevel: "Professional",
      inLanguage: ["uz", "ru", "en"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/course/msfo#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: tx.breadcrumbHome, item: baseUrl },
        { "@type": "ListItem", position: 2, name: tx.breadcrumbCourses, item: `${baseUrl}/courses` },
        { "@type": "ListItem", position: 3, name: tx.breadcrumbCourseName, item: `${baseUrl}/course/msfo` },
      ],
    },
  ];
}
