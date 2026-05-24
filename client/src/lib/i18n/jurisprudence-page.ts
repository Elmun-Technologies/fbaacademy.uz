import type { Language } from "@/lib/translations";
import type { AkLearn } from "@/lib/i18n/applied-knowledge-page";
import type { SpForWhom } from "@/lib/i18n/strategic-professional-page";

export type JurisprudencePageI18n = {
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
  sectionWhyTitle: string;
  sectionWhyLead: string;
  whyNeeded: string[];
  sectionLearnTitle: string;
  sectionLearnLead: string;
  learn: AkLearn[];
  sectionForWhomTitle: string;
  forWhom: SpForWhom[];
  sectionAdvantagesTitle: string;
  advantages: string[];
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

const LEARN_EN: AkLearn[] = [
  { title: "Civil law", desc: "Contracts, property, obligations and civil liability." },
  { title: "Employment law", desc: "Employer–employee relations, contracts, working time and rest." },
  { title: "Tax law", desc: "Tax types, taxpayer rights, benefits and tax control." },
  { title: "Commercial law", desc: "Legal foundations of business, company forms and entrepreneurship." },
  { title: "Legal theory", desc: "State and law, legal system and regulatory framework." },
];

const LEARN_UZ: AkLearn[] = [
  { title: "Fuqarolik huquqi", desc: "Shartnomalar, mulk huquqi, majburiyatlar va fuqarolik javobgarligi asoslari" },
  { title: "Mehnat huquqi", desc: "Ish beruvchi va xodim munosabatlari, mehnat shartnomasi, ish vaqti va dam olish" },
  { title: "Soliq huquqi", desc: "Soliq turlari, soliq to'lovchilar huquqlari, imtiyozlar va soliq nazorati" },
  { title: "Tijorat huquqi", desc: "Biznes yuritish huquqiy asoslari, kompaniya shakllari va tadbirkorlik" },
  { title: "Huquq nazariyasi", desc: "Davlat va huquq tushunchasi, qonunchilik tizimi, huquqiy me'yorlar" },
];

const LEARN_RU: AkLearn[] = [
  { title: "Гражданское право", desc: "Договоры, имущество, обязательства и гражданская ответственность." },
  { title: "Трудовое право", desc: "Отношения работодателя и сотрудника, договор, режим труда и отдыха." },
  { title: "Налоговое право", desc: "Виды налогов, права налогоплательщиков, льготы и контроль." },
  { title: "Хозяйственное право", desc: "Правовые основы бизнеса, формы компаний и предпринимательство." },
  { title: "Теория права", desc: "Государство и право, система законодательства." },
];

const WHY_NEEDED_UZ = [
  "Biznes egalari — shartnomalar tuzish va huquqiy xavfsizlikni ta'minlash",
  "Tadbirkorlar — soliq va mehnat qonunchiligini tushunish",
  "HR mutaxassislari — mehnat huquqi va kadrlar hujjatlarini bilish",
  "Buxgalterlar — soliq huquqi va hisobot talablarini egallash",
  "Barcha fuqarolar — o'z huquqlarini bilish va himoya qilish",
];

const FOR_WHOM_UZ: SpForWhom[] = [
  { emoji: "⚖️", title: "Huquqshunoslar", desc: "Bilimlarini yangilash va amaliy ko'nikmalarni oshirmoqchi bo'lgan yuristlar" },
  { emoji: "💼", title: "Biznes egalari", desc: "Kompaniyasini huquqiy jihatdan mustahkam boshqarmoqchi bo'lgan tadbirkorlar" },
  { emoji: "👥", title: "HR mutaxassislari", desc: "Mehnat qonunchiligi va kadrlar hujjatlari bilan professional ishlash" },
  { emoji: "📊", title: "Buxgalterlar", desc: "Soliq huquqi va moliyaviy javobgarlikni chuqur tushunish" },
  { emoji: "🎓", title: "Talabalar", desc: "Huquq sohasida karyera qurishni rejalashtirayotgan yoshlar" },
];

const ADV_UZ = [
  "Amaliy bilimlar — nazariya bilan birga real ishlar tahlili",
  "Real sud ishlari tahlili — haqiqiy huquqiy vaziyatlarni ko'rib chiqish",
  "Shartnomalar tuzish — turli xil shartnomalarni mustaqil yozish",
  "O'zbekiston qonunchiligi — milliy huquq tizimiga moslashtirilgan",
  "Xalqaro huquq elementlari — global standartlar bilan tanishish",
  "Professional sertifikat — karyeraga qo'shimcha qiymat",
];

const FORMAT_UZ = [
  "Nazariya + amaliyot — har bir mavzuda real misollar va mashqlar",
  "Onlayn va oflayn darslar — qulay formatda o'qish imkoniyati",
  "Savol-javob sessiyalari — murakkab mavzularni muhokama qilish",
  "Amaliy topshiriqlar — shartnomalar tuzish va huquqiy tahlil",
  "Qo'llab-quvvatlash — o'qituvchi va mentordan yordam",
];

const OUT_UZ = [
  "Shartnomalar tuzish va tahlil qilish ko'nikmasiga ega bo'lasiz",
  "Huquqiy tahlil o'tkazish va xulosalar tayyorlashni bilasiz",
  "O'zbekiston qonunchiligida erkin ishlash ko'nikmasini olasiz",
  "Professional sertifikat bilan karyerangizni mustahkamlaysiz",
];

export const JURISPRUDENCE_PAGE: Record<Language, JurisprudencePageI18n> = {
  en: {
    seoTitle: "Law (Jurisprudence) Course — Modern Legal Foundations | FBA Academy",
    seoDescription:
      "Law course: civil, employment, tax and commercial law. Uzbek legislation and international context. FBA Academy.",
    seoKeywords: "law course Uzbekistan, jurisprudence, civil law, employment law, tax law, FBA Academy",
    breadcrumbHome: "Home",
    breadcrumbCourses: "Courses",
    breadcrumbCourseName: "Law",
    badge: "Uzbekistan law",
    heroTitleLine1: "Law (Jurisprudence)",
    heroTitleHighlight: "Modern legal foundations",
    heroDesc:
      "Deep dive into Uzbek legislation and international law basics. Practical skills in civil, employment, tax and commercial law.",
    heroCta: "Enroll",
    formTitle: "Get a free consultation",
    formHint: "Leave your details — our team will contact you",
    formFootnote: "Your personal data is protected",
    sectionWhyTitle: "Why study law?",
    sectionWhyLead: "Legal literacy is essential for business owners, HR professionals and anyone building a career.",
    whyNeeded: [
      "Business owners — contracts and legal safety",
      "Entrepreneurs — tax and employment rules",
      "HR specialists — employment law and HR documents",
      "Accountants — tax law and reporting obligations",
      "Everyone — know and protect your rights",
    ],
    sectionLearnTitle: "What will you learn?",
    sectionLearnLead: "The most important areas of Uzbek law and international law during the course.",
    learn: LEARN_EN,
    sectionForWhomTitle: "Who is it for?",
    forWhom: [
      { emoji: "⚖️", title: "Lawyers", desc: "Update knowledge and practical skills." },
      { emoji: "💼", title: "Business owners", desc: "Strengthen legal management of the company." },
      { emoji: "👥", title: "HR specialists", desc: "Work professionally with employment law and documents." },
      { emoji: "📊", title: "Accountants", desc: "Deep understanding of tax law and liability." },
      { emoji: "🎓", title: "Students", desc: "Young people planning a legal career." },
    ],
    sectionAdvantagesTitle: "Course advantages",
    advantages: [
      "Practical learning — real cases alongside theory",
      "Analysis of real court practice",
      "Drafting different types of contracts",
      "Aligned with Uzbek legislation",
      "Elements of international law",
      "Professional certificate",
    ],
    sectionFormatTitle: "Class format",
    sectionFormatLead: "Theory + practice — online and offline options.",
    format: [
      "Theory + practice with real examples",
      "Online and offline classes",
      "Q&A sessions on complex topics",
      "Practical tasks — drafting and legal analysis",
      "Support from instructors and mentors",
    ],
    sectionOutcomesTitle: "After the course",
    sectionOutcomesLead: "You will be able to:",
    outcomes: [
      "Draft and analyze contracts",
      "Conduct legal analysis and prepare conclusions",
      "Navigate Uzbek legislation confidently",
      "Strengthen your career with a certificate",
    ],
    finalTitle: "Take your legal knowledge to a professional level",
    finalDesc: "Apply now for in-depth knowledge of Uzbek law. Leave your details for a free consultation.",
    finalBullet1: "Practical skills",
    finalBullet2: "Real court cases",
    finalBullet3: "Professional certificate",
    finalFormTitle: "Apply now",
    finalFormHint: "Our team will contact you",
    jsonLdName: "Law (Jurisprudence) — Modern Legal Foundations | FBA Academy",
    jsonLdDesc: "Course on Uzbek legislation and international law basics.",
  },
  uz: {
    seoTitle: "Huquqshunoslik (Jurisprudence) Kursi — Zamonaviy Huquq Asoslari | FBA Academy",
    seoDescription:
      "Huquqshunoslik kursi: Fuqarolik, Mehnat, Soliq, Tijorat huquqi va Huquq nazariyasi. O'zbekiston qonunchiligi va xalqaro huquq. FBA Academy.",
    seoKeywords: "huquqshunoslik kursi, jurisprudence, huquq kursi O'zbekiston, fuqarolik huquqi, mehnat huquqi, soliq huquqi, FBA Academy",
    breadcrumbHome: "Bosh sahifa",
    breadcrumbCourses: "Kurslar",
    breadcrumbCourseName: "Huquqshunoslik",
    badge: "O'zbekiston Huquqi",
    heroTitleLine1: "Huquqshunoslik (Jurisprudence)",
    heroTitleHighlight: "Zamonaviy Huquq Asoslari",
    heroDesc:
      "O'zbekiston qonunchiligi va xalqaro huquq asoslarini chuqur o'rganing. Fuqarolik, mehnat, soliq va tijorat huquqi bo'yicha amaliy bilimlar oling.",
    heroCta: "Kursga yozilish",
    formTitle: "Bepul konsultatsiya olish",
    formHint: "Ma'lumotlaringizni qoldiring — mutaxassislarimiz siz bilan bog'lanadi",
    formFootnote: "Shaxsiy ma'lumotlaringiz himoyalangan",
    sectionWhyTitle: "Huquqshunoslik nima uchun kerak?",
    sectionWhyLead:
      "Biznes egalari, tadbirkorlar, HR mutaxassislari va barcha soha vakillari uchun huquqiy savodxonlik — muvaffaqiyatning asosi.",
    whyNeeded: WHY_NEEDED_UZ,
    sectionLearnTitle: "Nimalarni o'rganasiz?",
    sectionLearnLead: "Kurs davomida O'zbekiston qonunchiligi va xalqaro huquqning eng muhim sohalarini chuqur o'rganasiz.",
    learn: LEARN_UZ,
    sectionForWhomTitle: "Kimlar uchun?",
    forWhom: FOR_WHOM_UZ,
    sectionAdvantagesTitle: "Kurs afzalliklari",
    advantages: ADV_UZ,
    sectionFormatTitle: "Dars formati",
    sectionFormatLead:
      "Nazariya + amaliyot — har bir mavzuda real huquqiy vaziyatlar tahlili. Onlayn va oflayn formatda o'qish imkoniyati.",
    format: FORMAT_UZ,
    sectionOutcomesTitle: "Kurs yakunida",
    sectionOutcomesLead: "Kursni muvaffaqiyatli tugatganingizdan so'ng quyidagi natijalarga erishasiz:",
    outcomes: OUT_UZ,
    finalTitle: "Huquqiy bilimlaringizni professional darajaga olib chiqing",
    finalDesc:
      "Hoziroq ariza topshiring va O'zbekiston qonunchiligi bo'yicha chuqur bilim oling. Bepul konsultatsiya olish uchun ma'lumotlaringizni qoldiring.",
    finalBullet1: "Amaliy bilimlar",
    finalBullet2: "Real sud ishlari",
    finalBullet3: "Professional sertifikat",
    finalFormTitle: "Hoziroq ariza topshiring",
    finalFormHint: "Mutaxassislarimiz siz bilan bog'lanadi",
    jsonLdName: "Huquqshunoslik (Jurisprudence) — Zamonaviy Huquq Asoslari | FBA Academy",
    jsonLdDesc: "O'zbekiston qonunchiligi va xalqaro huquq asoslarini o'rganish kursi.",
  },
  ru: {
    seoTitle: "Курс Юриспруденция — Основы современного права | FBA Academy",
    seoDescription:
      "Курс права: гражданское, трудовое, налоговое и хозяйственное право. Законодательство Узбекистана и международный контекст.",
    seoKeywords: "курс юриспруденция Узбекистан, право, гражданское право, трудовое право, налоговое право, FBA Academy",
    breadcrumbHome: "Главная",
    breadcrumbCourses: "Курсы",
    breadcrumbCourseName: "Юриспруденция",
    badge: "Право Узбекистана",
    heroTitleLine1: "Юриспруденция",
    heroTitleHighlight: "Основы современного права",
    heroDesc:
      "Углублённое изучение законодательства Узбекистана и основ международного права. Практические навыки в гражданском, трудовом, налоговом и хозяйственном праве.",
    heroCta: "Записаться",
    formTitle: "Бесплатная консультация",
    formHint: "Оставьте контакты — мы свяжемся с вами",
    formFootnote: "Ваши данные защищены",
    sectionWhyTitle: "Зачем изучать право?",
    sectionWhyLead: "Правовая грамотность важна для бизнеса, HR и карьерного роста.",
    whyNeeded: [
      "Владельцы бизнеса — договоры и безопасность",
      "Предприниматели — налоги и трудовое законодательство",
      "HR-специалисты — кадровые документы",
      "Бухгалтеры — налоговое право",
      "Все граждане — знайте свои права",
    ],
    sectionLearnTitle: "Чему вы научитесь?",
    sectionLearnLead: "Ключевые области права Узбекистана и международного права.",
    learn: LEARN_RU,
    sectionForWhomTitle: "Для кого курс?",
    forWhom: [
      { emoji: "⚖️", title: "Юристы", desc: "Обновление знаний и практики." },
      { emoji: "💼", title: "Владельцы бизнеса", desc: "Юридически устойчивое управление компанией." },
      { emoji: "👥", title: "HR-специалисты", desc: "Трудовое право и кадровые документы." },
      { emoji: "📊", title: "Бухгалтеры", desc: "Налоговое право и ответственность." },
      { emoji: "🎓", title: "Студенты", desc: "Планирующие юридическую карьеру." },
    ],
    sectionAdvantagesTitle: "Преимущества курса",
    advantages: [
      "Практика на реальных делах",
      "Разбор судебной практики",
      "Составление договоров",
      "Соответствие законодательству Узбекистана",
      "Элементы международного права",
      "Профессиональный сертификат",
    ],
    sectionFormatTitle: "Формат занятий",
    sectionFormatLead: "Теория + практика — онлайн и офлайн.",
    format: [
      "Теория и практика на примерах",
      "Онлайн и офлайн",
      "Сессии вопросов и ответов",
      "Практические задания",
      "Поддержка преподавателей",
    ],
    sectionOutcomesTitle: "После курса",
    sectionOutcomesLead: "Вы сможете:",
    outcomes: [
      "Составлять и анализировать договоры",
      "Проводить правовой анализ",
      "Уверенно ориентироваться в законодательстве",
      "Укрепить карьеру сертификатом",
    ],
    finalTitle: "Выведите правовые знания на профессиональный уровень",
    finalDesc: "Подайте заявку и получите глубокие знания по праву Узбекистана.",
    finalBullet1: "Практические навыки",
    finalBullet2: "Реальные судебные дела",
    finalBullet3: "Профессиональный сертификат",
    finalFormTitle: "Подайте заявку",
    finalFormHint: "Мы свяжемся с вами",
    jsonLdName: "Юриспруденция — Основы современного права | FBA Academy",
    jsonLdDesc: "Курс по законодательству Узбекистана и основам международного права.",
  },
};

export function jurisprudenceJsonLd(lang: Language, baseUrl: string) {
  const tx = JURISPRUDENCE_PAGE[lang];
  return [
    {
      "@type": "Course",
      "@id": `${baseUrl}/course/jurisprudence#course`,
      name: tx.jsonLdName,
      description: tx.jsonLdDesc,
      url: `${baseUrl}/course/jurisprudence`,
      provider: { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "FBA Academy", url: baseUrl },
      educationalLevel: "Beginner",
      inLanguage: ["uz", "ru", "en"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/course/jurisprudence#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: tx.breadcrumbHome, item: baseUrl },
        { "@type": "ListItem", position: 2, name: tx.breadcrumbCourses, item: `${baseUrl}/courses` },
        { "@type": "ListItem", position: 3, name: tx.breadcrumbCourseName, item: `${baseUrl}/course/jurisprudence` },
      ],
    },
  ];
}
