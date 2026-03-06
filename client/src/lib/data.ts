export interface SalaryLevel {
  level: string;
  salary: string;
  description: string;
}

export interface SupportPerson {
  role: string;
  description: string;
  avatar: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: string;
  duration: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  level: string;
  description: string;
  shortDescription: string;
  modules: { title: string; topics: string[] }[];
  forWhom: string[];
  skills: string[];
  tools: string[];
  salaryLevels: SalaryLevel[];
  supportTeam: SupportPerson[];
  mentorId: string;
  image: string;
  videoId?: string;
  practiceHours: string;
  theoryHours: string;
  projects: string;
  rating: string;
  studentsCount: string;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  courses: string[];
  avatar: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
  courseName: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

export interface GraduateResult {
  id: string;
  name: string;
  beforeRole: string;
  afterRole: string;
  company: string;
  salaryIncrease: string;
  avatar: string;
  story: string;
  courseName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const categories = [
  { name: "ACCA", slug: "acca", icon: "Award" },
  { name: "DipIFR", slug: "finance", icon: "TrendingUp" },
  { name: "Huquqshunoslik", slug: "law", icon: "Briefcase" },
  { name: "1C Buxgalteriya", slug: "accounting", icon: "Code" },
];

const UNSPLASH = "https://images.unsplash.com";

export const courses: Course[] = [
  {
    id: "acca",
    title: "ACCA (Association of Chartered Certified Accountants)",
    subtitle: "Xalqaro buxgalteriya sertifikati",
    category: "ACCA",
    categorySlug: "acca",
    duration: "12 oy",
    price: "8 000 000",
    oldPrice: "12 000 000",
    discount: "33%",
    level: "O'rta",
    description: "ACCA — bu dunyodagi eng nufuzli buxgalteriya va moliyaviy sertifikatlardan biri. Ushbu dastur orqali siz xalqaro buxgalteriya standartlari, audit, soliqqa tortish va moliyaviy boshqaruv bo'yicha chuqur bilim olasiz.",
    shortDescription: "Xalqaro buxgalteriya sertifikati — karyerangizni global darajaga olib chiqing",
    videoId: "ZV1UKMREypM",
    modules: [
      { title: "Business and Technology (BT)", topics: ["Biznes tashkiliy tuzilmalari", "IT tizimlari", "Boshqaruv va nazorat", "Professional etika"] },
      { title: "Management Accounting (MA)", topics: ["Xarajatlar hisobi", "Byudjetlashtirish", "Standart xarajatlar", "Boshqaruv qarorlar"] },
      { title: "Financial Accounting (FA)", topics: ["Moliyaviy hisobotlar", "Ikki yoqlama yozuv tizimi", "Buxgalteriya standartlari", "Yakuniy hisobotlar"] },
      { title: "Corporate and Business Law (LW)", topics: ["Shartnomaviy huquq", "Mehnat huquqi", "Korporativ boshqaruv", "Kompaniyalar huquqi"] },
      { title: "Performance Management (PM)", topics: ["Samaradorlik boshqaruvi", "Tahlil usullari", "Byudjet nazorati", "Transfer narxlash"] },
      { title: "Taxation (TX)", topics: ["Soliq tizimi", "Jismoniy shaxslar solig'i", "Korporativ soliq", "QQS va aksizlar"] },
    ],
    forWhom: ["Buxgalterlar va moliyachilar", "Audit xodimlar", "Moliyaviy menejerlar", "Xalqaro kompaniyalarda ishlashni xohlovchilar", "Karyerasini global darajaga olib chiqmoqchilar"],
    skills: ["Xalqaro moliyaviy hisobot", "Audit va tekshiruv", "Soliqqa tortish", "Moliyaviy tahlil", "Boshqaruv hisobi", "Korporativ boshqaruv", "Risk boshqaruvi", "Strategik rejalashtirish"],
    tools: ["Excel", "SAP", "QuickBooks", "Xero", "IFRS Toolkit", "Audit Software", "Power BI"],
    salaryLevels: [
      { level: "Junior", salary: "8 000 000", description: "Kursdan so'ng" },
      { level: "Middle", salary: "18 000 000", description: "1-3 yillik tajriba" },
      { level: "Senior", salary: "35 000 000", description: "3+ yillik tajriba" },
    ],
    supportTeam: [
      { role: "Kurator-ekspert", description: "Uy vazifalarini batafsil ko'rib chiqadi, yaxshilashga yordam beradi", avatar: `${UNSPLASH}/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face` },
      { role: "HR-konsultant", description: "Ish topishda yordam beradi: reja tuzishdan to suhbatgacha", avatar: `${UNSPLASH}/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face` },
      { role: "Qo'llab-quvvatlash", description: "Platforma va kursni o'tish bo'yicha savollarga javob beradi", avatar: `${UNSPLASH}/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face` },
    ],
    mentorId: "teacher-1",
    image: `${UNSPLASH}/photo-1554224155-6726b3ff858f?w=700&h=450&fit=crop`,
    practiceHours: "200+",
    theoryHours: "150",
    projects: "6",
    rating: "4.8",
    studentsCount: "1200+",
  },
  {
    id: "applied-knowledge",
    title: "ACCA Applied Knowledge",
    subtitle: "ACCA ning birinchi bosqichi",
    category: "ACCA",
    categorySlug: "acca",
    duration: "4 oy",
    price: "3 500 000",
    oldPrice: "5 000 000",
    discount: "30%",
    level: "Boshlang'ich",
    description: "ACCA Applied Knowledge — bu ACCA sertifikatsiyasining boshlang'ich bosqichi. Bu bosqichda siz buxgalteriya, biznes va texnologiya asoslarini o'rganasiz. 3 ta imtihonni muvaffaqiyatli topshirsangiz, keyingi bosqichga o'tishingiz mumkin.",
    shortDescription: "ACCA sertifikatsiyasining boshlang'ich bosqichi — asosiy bilimlar",
    videoId: "ZV1UKMREypM",
    modules: [
      { title: "Business and Technology (BT/FBT)", topics: ["Tashkiliy tuzilmalar", "Boshqaruv funksiyalari", "IT va biznes", "Ichki nazorat tizimlari", "Professional etika asoslari"] },
      { title: "Management Accounting (MA/FMA)", topics: ["Xarajatlarni tasniflash", "Byudjet tuzish", "Standart xarajatlar va farqlar", "Qaror qabul qilish uchun tahlil", "Samaradorlik ko'rsatkichlari"] },
      { title: "Financial Accounting (FA/FFA)", topics: ["Buxgalteriya yozuvlari", "Moliyaviy hisobotlar tayyorlash", "Aktivlar va majburiyatlar", "Kapital va daromadlar", "Hisobot standartlari"] },
    ],
    forWhom: ["Buxgalteriya sohasiga yangi kirganlar", "Universitet talabalari", "ACCA yo'lini boshlamoqchilar", "Karyerasini o'zgartirmoqchilar"],
    skills: ["Buxgalteriya asoslari", "Moliyaviy hisobot", "Boshqaruv hisobi", "Biznes texnologiyalari", "Professional etika"],
    tools: ["Excel", "Sage", "QuickBooks", "Buxgalteriya dasturlari"],
    salaryLevels: [
      { level: "Junior", salary: "5 000 000", description: "Kursdan so'ng" },
      { level: "Middle", salary: "10 000 000", description: "1-2 yillik tajriba" },
      { level: "Senior", salary: "18 000 000", description: "3+ yillik tajriba" },
    ],
    supportTeam: [
      { role: "Kurator-ekspert", description: "Har bir mavzu bo'yicha tushuntirishlar va amaliy mashqlar", avatar: `${UNSPLASH}/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face` },
      { role: "HR-konsultant", description: "Ish topishda yordam va rezyume tayyorlash", avatar: `${UNSPLASH}/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face` },
      { role: "Qo'llab-quvvatlash", description: "Platforma va kursni o'tish bo'yicha savollarga javob beradi", avatar: `${UNSPLASH}/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face` },
    ],
    mentorId: "teacher-1",
    image: `${UNSPLASH}/photo-1554224155-6726b3ff858f?w=700&h=450&fit=crop`,
    practiceHours: "80",
    theoryHours: "60",
    projects: "3",
    rating: "4.7",
    studentsCount: "800+",
  },
  {
    id: "applied-skills",
    title: "ACCA Applied Skills",
    subtitle: "ACCA ning ikkinchi bosqichi",
    category: "ACCA",
    categorySlug: "acca",
    duration: "6 oy",
    price: "5 000 000",
    oldPrice: "7 500 000",
    discount: "33%",
    level: "O'rta",
    description: "ACCA Applied Skills — bu ACCA sertifikatsiyasining ikkinchi bosqichi. Bu yerda siz korporativ huquq, samaradorlik boshqaruvi, soliqqa tortish, moliyaviy hisobot, audit va moliyaviy menejment bo'yicha chuqur bilim olasiz.",
    shortDescription: "ACCA sertifikatsiyasining o'rta bosqichi — amaliy ko'nikmalar",
    videoId: "ZV1UKMREypM",
    modules: [
      { title: "Corporate and Business Law (LW)", topics: ["Huquqiy tizim asoslari", "Shartnoma huquqi", "Mehnat huquqi", "Korporativ huquq", "Kompaniyalar qonunchiligi"] },
      { title: "Performance Management (PM)", topics: ["Xarajatlar tahlili", "Byudjet nazorati va farqlar", "Transfer narxlash", "Samaradorlik o'lchash", "Strategik tahlil"] },
      { title: "Taxation (TX)", topics: ["Soliq tizimi asoslari", "Daromad solig'i", "Korporativ soliq", "QQS", "Soliq rejalash"] },
      { title: "Financial Reporting (FR)", topics: ["IAS/IFRS standartlari", "Konsolidatsiya", "Moliyaviy tahlil", "Murakkab operatsiyalar", "Guruhlangan hisobotlar"] },
      { title: "Audit and Assurance (AA)", topics: ["Audit jarayoni", "Ichki nazorat", "Audit dalillari", "Audit hisoboti", "Professional etika"] },
      { title: "Financial Management (FM)", topics: ["Investitsiya qarorlari", "Moliyalashtirish manbalari", "Kapital tuzilmasi", "Risk boshqaruvi", "Kompaniya baholash"] },
    ],
    forWhom: ["ACCA Applied Knowledge tugatganlar", "Tajribali buxgalterlar", "Audit xodimlari", "Moliyaviy tahlilchilar", "Korporativ moliyachilar"],
    skills: ["Korporativ huquq", "Samaradorlik boshqaruvi", "Soliq rejalash", "IFRS bo'yicha hisobot", "Audit", "Moliyaviy menejment", "Investitsiya tahlili", "Risk boshqaruvi"],
    tools: ["Excel Advanced", "SAP", "IFRS Toolkit", "Audit Software", "Bloomberg", "Power BI"],
    salaryLevels: [
      { level: "Junior", salary: "8 000 000", description: "Kursdan so'ng" },
      { level: "Middle", salary: "15 000 000", description: "1-3 yillik tajriba" },
      { level: "Senior", salary: "28 000 000", description: "3+ yillik tajriba" },
    ],
    supportTeam: [
      { role: "Kurator-ekspert", description: "Murakkab mavzularni tushuntirish va amaliyot", avatar: `${UNSPLASH}/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face` },
      { role: "HR-konsultant", description: "Xalqaro kompaniyalarga ishga joylashish", avatar: `${UNSPLASH}/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face` },
      { role: "Qo'llab-quvvatlash", description: "Texnik va tashkiliy yordam", avatar: `${UNSPLASH}/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face` },
    ],
    mentorId: "teacher-2",
    image: `${UNSPLASH}/photo-1554224155-6726b3ff858f?w=700&h=450&fit=crop`,
    practiceHours: "150",
    theoryHours: "120",
    projects: "6",
    rating: "4.8",
    studentsCount: "600+",
  },
  {
    id: "strategic-professional",
    title: "ACCA Strategic Professional",
    subtitle: "ACCA ning yakuniy bosqichi",
    category: "ACCA",
    categorySlug: "acca",
    duration: "8 oy",
    price: "7 000 000",
    oldPrice: "10 000 000",
    discount: "30%",
    level: "Yuqori",
    description: "ACCA Strategic Professional — bu ACCA sertifikatsiyasining eng yuqori bosqichi. Strategik biznes yetakchiligi va strategik moliyaviy boshqaruv bo'yicha chuqur bilim va ko'nikmalar olasiz. Bu bosqichni tugatgach, siz to'liq ACCA malakasiga ega bo'lasiz.",
    shortDescription: "ACCA sertifikatsiyasining yakuniy bosqichi — strategik darajadagi bilimlar",
    videoId: "ZV1UKMREypM",
    modules: [
      { title: "Strategic Business Leader (SBL)", topics: ["Strategik yetakchilik", "Korporativ boshqaruv", "Risk boshqaruvi", "Texnologiya va innovatsiya", "Tashkiliy o'zgarishlar boshqaruvi", "Etika va professionallik"] },
      { title: "Strategic Business Reporting (SBR)", topics: ["Murakkab moliyaviy hisobot", "Xalqaro standartlar", "Konsolidatsiya", "Moliyaviy instrumentlar", "Ijtimoiy va ekologik hisobot"] },
      { title: "Advanced Financial Management (AFM)", topics: ["Murakkab investitsiya qarorlari", "Xalqaro moliyaviy boshqaruv", "Derivativlar va hedjirlash", "M&A va kompaniya baholash", "Treasury boshqaruvi"] },
      { title: "Advanced Audit and Assurance (AAA)", topics: ["Murakkab audit muammolari", "Professional etika", "Audit sifati nazorati", "Maxsus audit topshiriqlari", "IT audit"] },
    ],
    forWhom: ["ACCA Applied Skills tugatganlar", "CFO bo'lishni xohlovchilar", "Strategik moliyaviy boshqaruvchilar", "Xalqaro audit firmalari xodimlari"],
    skills: ["Strategik yetakchilik", "Murakkab moliyaviy hisobot", "Ilg'or moliyaviy boshqaruv", "Murakkab audit", "M&A", "Derivativlar", "Xalqaro moliya", "Korporativ boshqaruv"],
    tools: ["SAP S/4HANA", "Bloomberg Terminal", "Capital IQ", "Refinitiv", "Advanced Excel", "Power BI", "Python"],
    salaryLevels: [
      { level: "Qualified", salary: "15 000 000", description: "Sertifikat olgach" },
      { level: "Manager", salary: "25 000 000", description: "3-5 yillik tajriba" },
      { level: "Director/CFO", salary: "50 000 000+", description: "5+ yillik tajriba" },
    ],
    supportTeam: [
      { role: "Kurator-ekspert", description: "Strategik masalalar va case study'larni tahlil qiladi", avatar: `${UNSPLASH}/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face` },
      { role: "HR-konsultant", description: "Top lavozimlar va xalqaro imkoniyatlar", avatar: `${UNSPLASH}/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face` },
      { role: "Qo'llab-quvvatlash", description: "Imtihonga tayyorgarlik va texnik yordam", avatar: `${UNSPLASH}/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face` },
    ],
    mentorId: "teacher-2",
    image: `${UNSPLASH}/photo-1554224155-6726b3ff858f?w=700&h=450&fit=crop`,
    practiceHours: "180",
    theoryHours: "140",
    projects: "4",
    rating: "4.9",
    studentsCount: "350+",
  },
  {
    id: "dipifr",
    title: "DipIFR (Diploma in IFRS)",
    subtitle: "Xalqaro moliyaviy hisobot standartlari diplomi",
    category: "DipIFR",
    categorySlug: "finance",
    duration: "4 oy",
    price: "4 000 000",
    oldPrice: "6 000 000",
    discount: "33%",
    level: "O'rta",
    description: "DipIFR — bu ACCA tomonidan beriladigan Xalqaro Moliyaviy Hisobot Standartlari (IFRS) bo'yicha diplom. Bu sertifikat IFRS standartlarini amaliyotda qo'llash bo'yicha chuqur bilim va ko'nikmalarni beradi. Xalqaro kompaniyalarda ishlash uchun zarur malaka.",
    shortDescription: "IFRS bo'yicha xalqaro diplom — xalqaro standartlarni chuqur o'rganing",
    videoId: "R0eCSc9Efqc",
    modules: [
      { title: "IFRS tizimi asoslari", topics: ["IASB va standartlar ishlab chiqish", "Kontseptual asos", "Moliyaviy hisobotlar taqdim etish", "IAS 1, IAS 8, IFRS 15"] },
      { title: "Aktivlar va majburiyatlar", topics: ["IAS 16 — Asosiy vositalar", "IAS 38 — Nomoddiy aktivlar", "IFRS 16 — Ijara", "IAS 36 — Qiymat pasayishi", "IAS 37 — Zaxiralar"] },
      { title: "Moliyaviy instrumentlar", topics: ["IFRS 9 — Tasniflash va o'lchash", "Hedjirlash hisobi", "Kutilgan kredit yo'qotishlari", "IAS 32 — Taqdim etish"] },
      { title: "Konsolidatsiya", topics: ["IFRS 3 — Biznes birlashmalari", "IFRS 10 — Konsolidatsiya", "IAS 28 — Assotsiatsiyalar", "IFRS 11 — Qo'shma bitimlar"] },
      { title: "Maxsus mavzular", topics: ["IFRS 2 — Aksiyalar bo'yicha to'lovlar", "IAS 19 — Xodimlar uchun to'lovlar", "IFRS 5 — Sotishga mo'ljallangan aktivlar", "IAS 21 — Valyuta kurslari"] },
    ],
    forWhom: ["Buxgalterlar va hisobchilar", "Auditorlar", "Moliyaviy tahlilchilar", "Xalqaro kompaniya xodimlari", "CFO va moliyaviy direktorlar"],
    skills: ["IFRS standartlari", "Moliyaviy hisobot tayyorlash", "Konsolidatsiya", "Moliyaviy instrumentlar", "Soliq hisobi", "Audit jarayoni", "Tahlil va interpretatsiya"],
    tools: ["Excel", "IFRS Toolkit", "SAP", "Oracle Financials", "Power BI", "Caseware"],
    salaryLevels: [
      { level: "Junior", salary: "7 000 000", description: "Diplomdan so'ng" },
      { level: "Middle", salary: "14 000 000", description: "1-3 yillik tajriba" },
      { level: "Senior", salary: "25 000 000", description: "3+ yillik tajriba" },
    ],
    supportTeam: [
      { role: "Kurator-ekspert", description: "IFRS standartlarini amaliyotda qo'llashni o'rgatadi", avatar: `${UNSPLASH}/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face` },
      { role: "HR-konsultant", description: "Xalqaro kompaniyalarga ish topishda yordam beradi", avatar: `${UNSPLASH}/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face` },
      { role: "Qo'llab-quvvatlash", description: "Imtihon tayyorligi va texnik yordam", avatar: `${UNSPLASH}/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face` },
    ],
    mentorId: "teacher-3",
    image: `${UNSPLASH}/photo-1590283603385-17ffb3a7f29f?w=700&h=450&fit=crop`,
    practiceHours: "100",
    theoryHours: "80",
    projects: "5",
    rating: "4.8",
    studentsCount: "950+",
  },
  {
    id: "financial-modeling",
    title: "Financial Modeling",
    subtitle: "Moliyaviy modellashtirish kursi",
    category: "Financial Modeling",
    categorySlug: "finance",
    duration: "3 oy",
    price: "3 000 000",
    oldPrice: "4 500 000",
    discount: "33%",
    level: "O'rta",
    description: "Financial Modeling kursi orqali siz Excel va maxsus dasturlarda professional moliyaviy modellar yaratishni o'rganasiz. Investitsiya tahlili, kompaniya baholash, loyiha moliyalash va moliyaviy prognozlash bo'yicha amaliy ko'nikmalar egallaysiz.",
    shortDescription: "Professional moliyaviy modellar yaratishni o'rganing",
    videoId: "PU8ZCSuHWXE",
    modules: [
      { title: "Excel ilg'or darajada", topics: ["Murakkab formulalar", "INDEX-MATCH, OFFSET", "Pivot jadvallar", "Makroslar va VBA asoslari", "Dashboard yaratish"] },
      { title: "Moliyaviy modellashtirish asoslari", topics: ["3-statement model", "Prognozlash usullari", "Taxminlar va ssenarilar", "Sensitivity tahlil", "Model tuzilmasi"] },
      { title: "Kompaniya baholash", topics: ["DCF tahlili", "Comparable analysis", "Precedent transactions", "LBO modellashtirish", "WACC hisoblash"] },
      { title: "Investitsiya tahlili", topics: ["NPV va IRR", "Payback period", "Loyiha moliyalash", "Real estate modellashtirish", "Startup baholash"] },
    ],
    forWhom: ["Investitsiya bankirlari", "Moliyaviy tahlilchilar", "Korporativ moliyachilar", "Biznes egalari", "Moliya sohasiga o'tmoqchilar"],
    skills: ["Excel modellashtirish", "DCF tahlili", "Kompaniya baholash", "Moliyaviy prognozlash", "Investitsiya tahlili", "LBO modellashtirish", "Ssenarilar tahlili"],
    tools: ["Excel", "Google Sheets", "Power BI", "Bloomberg", "Capital IQ", "Python (Pandas)", "Tableau"],
    salaryLevels: [
      { level: "Junior Analyst", salary: "6 000 000", description: "Kursdan so'ng" },
      { level: "Senior Analyst", salary: "14 000 000", description: "1-3 yillik tajriba" },
      { level: "VP/Director", salary: "30 000 000+", description: "5+ yillik tajriba" },
    ],
    supportTeam: [
      { role: "Kurator-ekspert", description: "Real kompaniyalar ustida modellashtirish amaliyoti", avatar: `${UNSPLASH}/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face` },
      { role: "HR-konsultant", description: "Investitsiya banklari va konsalting firmalariga ish topish", avatar: `${UNSPLASH}/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face` },
      { role: "Qo'llab-quvvatlash", description: "Texnik va tashkiliy yordam", avatar: `${UNSPLASH}/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face` },
    ],
    mentorId: "teacher-4",
    image: `${UNSPLASH}/photo-1611974789855-9c2a0a7236a3?w=700&h=450&fit=crop`,
    practiceHours: "120",
    theoryHours: "50",
    projects: "8",
    rating: "4.9",
    studentsCount: "700+",
  },
  {
    id: "jurisprudence",
    title: "Huquqshunoslik (Jurisprudence)",
    subtitle: "Zamonaviy huquq asoslari kursi",
    category: "Huquqshunoslik",
    categorySlug: "law",
    duration: "5 oy",
    price: "3 500 000",
    oldPrice: "5 500 000",
    discount: "36%",
    level: "Boshlang'ich",
    description: "Huquqshunoslik kursi orqali siz O'zbekiston qonunchiligining asosiy sohalarini chuqur o'rganasiz. Fuqarolik huquqi, mehnat huquqi, soliq huquqi, tijorat huquqi va xalqaro xususiy huquq bo'yicha amaliy bilim va ko'nikmalar egallaysiz.",
    shortDescription: "O'zbekiston qonunchiligi va xalqaro huquq asoslarini o'rganing",
    videoId: "eTriMFVGcYg",
    modules: [
      { title: "Huquq nazariyasi", topics: ["Huquq tushunchasi va manbalari", "Huquqiy munosabatlar", "Huquqiy javobgarlik", "Konstitutsiyaviy huquq", "Qonun chiqarish jarayoni"] },
      { title: "Fuqarolik huquqi", topics: ["Shartnomalar huquqi", "Mulk huquqi", "Meros huquqi", "Intellektual mulk", "Fuqarolik javobgarlik"] },
      { title: "Mehnat huquqi", topics: ["Mehnat shartnomasi", "Ishga qabul qilish va bo'shatish", "Ish vaqti va dam olish", "Mehnat muhofazasi", "Mehnat nizolari"] },
      { title: "Soliq huquqi", topics: ["Soliq tizimi", "Daromad solig'i", "QQS", "Aksiz solig'i", "Soliq tekshiruvlari va nizolar"] },
      { title: "Tijorat huquqi", topics: ["Tadbirkorlik huquqi", "Kompaniya tashkil etish", "Bankrotlik huquqi", "Raqobat huquqi", "Xalqaro savdo huquqi"] },
    ],
    forWhom: ["Huquqshunoslik sohasiga qiziquvchilar", "Biznes egalari va tadbirkorlar", "HR mutaxassislari", "Buxgalterlar", "Davlat xizmatchilari", "Talabalar"],
    skills: ["Shartnomalar tuzish", "Huquqiy tahlil", "Soliq rejalash", "Mehnat munosabatlari", "Korporativ huquq", "Nizolarni hal etish", "Huquqiy hujjatlar tayyorlash"],
    tools: ["Lex.uz", "Norma.uz", "Consultant Plus", "MS Word", "Excel", "1C: Huquqiy ma'lumotlar"],
    salaryLevels: [
      { level: "Junior Yurist", salary: "5 000 000", description: "Kursdan so'ng" },
      { level: "Yurist", salary: "12 000 000", description: "1-3 yillik tajriba" },
      { level: "Senior/Bosh yurist", salary: "22 000 000", description: "5+ yillik tajriba" },
    ],
    supportTeam: [
      { role: "Kurator-ekspert", description: "Real sud ishlari va huquqiy holatlar tahlili", avatar: `${UNSPLASH}/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face` },
      { role: "HR-konsultant", description: "Yuridik firmalar va kompaniyalarga ish topish", avatar: `${UNSPLASH}/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face` },
      { role: "Qo'llab-quvvatlash", description: "O'quv jarayoni va texnik yordam", avatar: `${UNSPLASH}/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face` },
    ],
    mentorId: "teacher-2",
    image: `${UNSPLASH}/photo-1589829545856-d10d557cf95f?w=700&h=450&fit=crop`,
    practiceHours: "90",
    theoryHours: "110",
    projects: "5",
    rating: "4.7",
    studentsCount: "500+",
  },
  {
    id: "1c-course",
    title: "1C: Buxgalteriya",
    subtitle: "1C dasturida professional ishlash kursi",
    category: "1C Buxgalteriya",
    categorySlug: "accounting",
    duration: "3 oy",
    price: "2 500 000",
    oldPrice: "4 000 000",
    discount: "38%",
    level: "Boshlang'ich",
    description: "1C: Buxgalteriya kursi orqali siz O'zbekistonda eng ko'p qo'llaniladigan buxgalteriya dasturi — 1C: Buxgalteriyada professional darajada ishlashni o'rganasiz. Hujjat aylanishi, ish haqi hisoblash, soliq hisobotlari va moliyaviy tahlil bo'yicha to'liq bilim olasiz.",
    shortDescription: "1C: Buxgalteriya dasturida 0 dan professional darajagacha",
    videoId: "PU8ZCSuHWXE",
    modules: [
      { title: "1C asoslari va sozlash", topics: ["Dasturni o'rnatish va sozlash", "Interfeys bilan ishlash", "Ma'lumotnomalar tuzish", "Hisob rejasi", "Foydalanuvchi huquqlarini boshqarish"] },
      { title: "Birlamchi hujjatlar", topics: ["Kirim va chiqim orderlari", "Schyot-fakturalar", "Tovar-transport hujjatlari", "Shartnomalar ro'yxatdan o'tkazish", "Bank operatsiyalari"] },
      { title: "Ish haqi va kadrlar", topics: ["Xodimlarni ro'yxatdan o'tkazish", "Ish haqi hisoblash", "Soliq va ajratmalar", "Mehnat ta'tili hisoblash", "Kadrlar hisoboti"] },
      { title: "Soliq hisobotlari", topics: ["QQS hisoboti", "Daromad solig'i", "Yagona soliq to'lovi", "Statistik hisobotlar", "Elektron hisobot yuborish"] },
      { title: "Moliyaviy tahlil", topics: ["Balans tahlili", "Foyda va zarar hisoboti", "Pul oqimlari", "Debitorlik va kreditorlik", "Boshqaruv hisobotlari"] },
    ],
    forWhom: ["Buxgalterlar", "Moliya bo'limi xodimlari", "Biznes egalari", "Kadrlar bo'limi xodimlari", "1C dasturini o'rganmoqchilar", "Karyerasini boshlamoqchilar"],
    skills: ["1C: Buxgalteriya", "Birlamchi hujjatlar", "Ish haqi hisoblash", "Soliq hisobotlari", "Moliyaviy tahlil", "Kadrlar hisobi", "Bank operatsiyalari"],
    tools: ["1C: Buxgalteriya 8.3", "1C: Kadrlar", "Excel", "Soliq.uz", "My.soliq.uz", "Stat.uz"],
    salaryLevels: [
      { level: "Junior Buxgalter", salary: "4 000 000", description: "Kursdan so'ng" },
      { level: "Buxgalter", salary: "8 000 000", description: "1-2 yillik tajriba" },
      { level: "Bosh buxgalter", salary: "18 000 000", description: "3+ yillik tajriba" },
    ],
    supportTeam: [
      { role: "Kurator-ekspert", description: "Real kompaniya ma'lumotlari bilan amaliyot", avatar: `${UNSPLASH}/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face` },
      { role: "HR-konsultant", description: "Buxgalterlik vakansiyalariga ish topish", avatar: `${UNSPLASH}/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face` },
      { role: "Qo'llab-quvvatlash", description: "1C dasturi bo'yicha texnik yordam", avatar: `${UNSPLASH}/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face` },
    ],
    mentorId: "teacher-4",
    image: `${UNSPLASH}/photo-1460925895917-afdab827c52f?w=700&h=450&fit=crop`,
    practiceHours: "100",
    theoryHours: "40",
    projects: "4",
    rating: "4.8",
    studentsCount: "1500+",
  },
];

export const teachers: Teacher[] = [
  {
    id: "teacher-1",
    name: "Aziza Karimova",
    role: "ACCA sertifikatlangan buxgalter",
    experience: "10 yillik tajriba",
    bio: "Big Four audit firmalarida ishlagan. ACCA to'liq malakasiga ega. 500+ talabani ACCA imtihonlariga tayyorlagan.",
    courses: ["ACCA", "Applied Knowledge", "Applied Skills"],
    avatar: `${UNSPLASH}/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop&crop=face`,
  },
  {
    id: "teacher-2",
    name: "Jasur Alimov",
    role: "Moliyaviy boshqaruv eksperti",
    experience: "12 yillik tajriba",
    bio: "Xalqaro kompaniyalarda CFO lavozimida ishlagan. ACCA Fellow va CFA sertifikatiga ega. Strategik moliyaviy boshqaruv bo'yicha mutaxassis.",
    courses: ["Strategic Professional", "Applied Skills", "Jurisprudence"],
    avatar: `${UNSPLASH}/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face`,
  },
  {
    id: "teacher-3",
    name: "Nilufar Rahimova",
    role: "IFRS va audit eksperti",
    experience: "8 yillik tajriba",
    bio: "DipIFR diplomiga ega. Yirik audit firmalarida IFRS bo'yicha konsultant sifatida ishlagan. 300+ talabaga IFRS o'rgatgan.",
    courses: ["DipIFR", "Applied Skills"],
    avatar: `${UNSPLASH}/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face`,
  },
  {
    id: "teacher-4",
    name: "Bobur Toshmatov",
    role: "Moliyaviy tahlilchi va 1C ekspert",
    experience: "15 yillik tajriba",
    bio: "Investitsiya banklarida moliyaviy modellashtirish bo'yicha ishlagan. 1C: Buxgalteriya bo'yicha sertifikatlangan mutaxassis. CFA Level 3.",
    courses: ["Financial Modeling", "1C: Buxgalteriya"],
    avatar: `${UNSPLASH}/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face`,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Sardor Yusupov",
    role: "Audit Associate — Deloitte",
    text: "FBA Academy tufayli ACCA imtihonlariga tayyorgarlik jarayoni oson bo'ldi. Mentorlar juda tajribali va har doim yordam berishga tayyor. Hozir Big Four firmada ishlayman.",
    avatar: `${UNSPLASH}/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face`,
    rating: 5,
    courseName: "ACCA",
  },
  {
    id: "t-2",
    name: "Madina Aliyeva",
    role: "Investment Banking Analyst",
    text: "Financial Modeling kursidan so'ng investitsiya bankida ish topdim. Amaliy loyihalar va real case'lar bilan ishlash juda foydali bo'ldi.",
    avatar: `${UNSPLASH}/photo-1494790108755-2616b612b8e4?w=200&h=200&fit=crop&crop=face`,
    rating: 5,
    courseName: "Financial Modeling",
  },
  {
    id: "t-3",
    name: "Akbar Rahmonov",
    role: "Bosh buxgalter — Artel",
    text: "1C kursini tugatgach, ishda samaradorligim 3 barobar oshdi. Hozir katta kompaniyaning bosh buxgalteri sifatida ishlayman.",
    avatar: `${UNSPLASH}/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face`,
    rating: 5,
    courseName: "1C: Buxgalteriya",
  },
  {
    id: "t-4",
    name: "Gulnora Mirzayeva",
    role: "Yurist — O'rta korxona",
    text: "Huquqshunoslik kursi menga biznes yuritishda zarur huquqiy bilimlarni berdi. Shartnomalar tuzish va soliq rejalash bo'yicha ko'nikmalarim sezilarli oshdi.",
    avatar: `${UNSPLASH}/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face`,
    rating: 5,
    courseName: "Jurisprudence",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "ACCA sertifikati — karyerangiz uchun eng yaxshi investitsiya",
    excerpt: "ACCA sertifikati nima uchun muhim va u sizning karyerangizga qanday ta'sir qiladi?",
    content: "ACCA sertifikati dunyoning 180+ mamlakatida tan olinadi va moliyaviy soha mutaxassislari uchun eng nufuzli malakalardan biri hisoblanadi. Bu sertifikatga ega bo'lish sizning professional imkoniyatlaringizni sezilarli darajada kengaytiradi.",
    category: "ACCA",
    date: "2026-02-15",
    readTime: "5 daqiqa",
    author: "Aziza Karimova",
    image: `${UNSPLASH}/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop`,
  },
  {
    id: "blog-2",
    title: "IFRS standartlari — O'zbekistonda qo'llanishi",
    excerpt: "O'zbekistonda xalqaro moliyaviy hisobot standartlarining joriy etilishi va amaliyoti.",
    content: "O'zbekiston hukumati IFRS standartlarini bosqichma-bosqich joriy etmoqda. Bu jarayon buxgalterlar va moliyachilarga yangi bilim va ko'nikmalar talab qiladi. DipIFR diplomi bu o'tish davrida muhim rol o'ynaydi.",
    category: "DipIFR",
    date: "2026-02-10",
    readTime: "7 daqiqa",
    author: "Nilufar Rahimova",
    image: `${UNSPLASH}/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop`,
  },
  {
    id: "blog-3",
    title: "Financial Modeling — zamonaviy moliyachining zarur ko'nikmasi",
    excerpt: "Moliyaviy modellashtirish qanday kasblarda talab qilinadi va nima uchun muhim?",
    content: "Moliyaviy modellashtirish investitsiya banklari, konsalting firmalari va korporativ moliya bo'limlarida eng ko'p talab qilinadigan ko'nikmalardan biri. Excel va Python yordamida professional modellar yaratish har qanday moliyachining repertuariga kirishi kerak.",
    category: "Financial Modeling",
    date: "2026-01-28",
    readTime: "6 daqiqa",
    author: "Bobur Toshmatov",
    image: `${UNSPLASH}/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop`,
  },
  {
    id: "blog-4",
    title: "1C: Buxgalteriya — O'zbekiston bozorida eng zarur dastur",
    excerpt: "1C buxgalteriya dasturini bilish nima uchun har bir buxgalter uchun majburiy?",
    content: "O'zbekistondagi kompaniyalarning 90% dan ortig'i 1C dasturini qo'llaydi. Bu dasturni professional darajada bilish har qanday buxgalter uchun ish topishning kafolatidir. Zamonaviy versiyalar soliq hisobotlarini avtomatik shakllantirish imkonini beradi.",
    category: "1C Buxgalteriya",
    date: "2026-01-20",
    readTime: "8 daqiqa",
    author: "Bobur Toshmatov",
    image: `${UNSPLASH}/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop`,
  },
];

export const graduateResults: GraduateResult[] = [
  {
    id: "g-1",
    name: "Sardor Yusupov",
    beforeRole: "Oddiy buxgalter",
    afterRole: "ACCA Audit Associate",
    company: "Deloitte",
    salaryIncrease: "4 000 000 → 15 000 000 UZS",
    avatar: `${UNSPLASH}/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face`,
    story: "ACCA kursini tugatgach, Big Four firmalaridan biriga ishga kirdim. Hozir xalqaro audit loyihalarida ishtirok etaman.",
    courseName: "ACCA",
  },
  {
    id: "g-2",
    name: "Madina Aliyeva",
    beforeRole: "Universitetni tugatgan",
    afterRole: "Investment Banking Analyst",
    company: "Renaissance Capital",
    salaryIncrease: "0 → 12 000 000 UZS",
    avatar: `${UNSPLASH}/photo-1494790108755-2616b612b8e4?w=400&h=400&fit=crop&crop=face`,
    story: "Financial Modeling kursidan so'ng investitsiya bankida ish topdim. Kurs davomida real kompaniyalar ustida modellashtirish qilganim juda foydali bo'ldi.",
    courseName: "Financial Modeling",
  },
  {
    id: "g-3",
    name: "Akbar Rahmonov",
    beforeRole: "Junior buxgalter",
    afterRole: "Bosh buxgalter",
    company: "Artel Electronics",
    salaryIncrease: "3 000 000 → 12 000 000 UZS",
    avatar: `${UNSPLASH}/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face`,
    story: "1C kursini tugatgach, kompaniyada avtomatlashtirishni amalga oshirdim va bosh buxgalter lavozimiga ko'tarildim.",
    courseName: "1C: Buxgalteriya",
  },
  {
    id: "g-4",
    name: "Dilshod Karimov",
    beforeRole: "Buxgalter",
    afterRole: "Moliyaviy direktor",
    company: "UzCard",
    salaryIncrease: "5 000 000 → 25 000 000 UZS",
    avatar: `${UNSPLASH}/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face`,
    story: "ACCA Strategic Professional kursidan so'ng DipIFR diplomini ham oldim. 2 yil ichida moliyaviy direktor lavozimiga ko'tarildim.",
    courseName: "ACCA Strategic Professional",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "ACCA sertifikati qancha vaqtda olinadi?",
    answer: "ACCA sertifikati odatda 2-3 yil ichida olinadi. Applied Knowledge (3 imtihon), Applied Skills (6 imtihon) va Strategic Professional (2-4 imtihon) bosqichlaridan iborat. FBA Academy'da har bir bosqichni alohida o'qishingiz mumkin.",
    category: "ACCA",
  },
  {
    id: "faq-2",
    question: "DipIFR imtihoni qachon o'tkaziladi?",
    answer: "DipIFR imtihoni yiliga 2 marta — iyun va dekabr oylarida o'tkaziladi. Biz sizni imtihonga to'liq tayyorlaymiz va ro'yxatdan o'tishda yordam beramiz.",
    category: "DipIFR",
  },
  {
    id: "faq-3",
    question: "Kurslar online yoki offline?",
    answer: "Kurslarimiz ham online, ham offline formatda mavjud. Online formatda jonli darslar, yozib olingan materiallar va amaliy mashqlar taqdim etiladi. Offline darslar Toshkentda o'tkaziladi.",
    category: "Umumiy",
  },
  {
    id: "faq-4",
    question: "To'lov qanday amalga oshiriladi?",
    answer: "To'lov naqd, bank kartasi yoki bo'lib-bo'lib to'lash orqali amalga oshiriladi. 0% bo'lib to'lash imkoniyati mavjud — 3 yoki 6 oyga bo'lishingiz mumkin.",
    category: "To'lov",
  },
  {
    id: "faq-5",
    question: "Kurs tugagach sertifikat beriladimi?",
    answer: "Ha, kursni muvaffaqiyatli tugatgan har bir talabaga FBA Academy sertifikati beriladi. ACCA va DipIFR kurslari uchun xalqaro imtihonlarga ham tayyorlaymiz.",
    category: "Sertifikat",
  },
  {
    id: "faq-6",
    question: "Ishga joylashishda yordam beriladimi?",
    answer: "Ha, biz bitiruvchilarimizga ish topishda faol yordam beramiz. Big Four firmalar, banklar, investitsiya kompaniyalari va yirik korporatsiyalar bilan hamkorlik qilamiz.",
    category: "Ishga joylashish",
  },
  {
    id: "faq-7",
    question: "1C kursida qaysi versiya o'rgatiladi?",
    answer: "Biz 1C: Buxgalteriya 8.3 versiyasini o'rgatamiz — bu O'zbekistonda eng keng tarqalgan versiya. Kurs davomida real kompaniya ma'lumotlari bilan ishlaysiz.",
    category: "1C",
  },
  {
    id: "faq-8",
    question: "Financial Modeling kursida qaysi dasturlar ishlatiladi?",
    answer: "Asosan Excel'da ishlaymiz (ilg'or formulalar, VBA). Bundan tashqari Power BI va Python (Pandas) asoslarini ham o'rganasiz.",
    category: "Financial Modeling",
  },
];

export const stats = [
  { value: "5000+", label: "Bitiruvchilar" },
  { value: "92%", label: "Ishga joylashish" },
  { value: "50+", label: "Hamkor kompaniyalar" },
  { value: "4.9", label: "O'rtacha baho" },
];

export const partnerCompanies = [
  "Deloitte", "PwC", "KPMG", "EY", "BDO", "Grant Thornton", "UzCard", "NBU", "Kapitalbank", "Artel", "Payme", "Humans"
];

export const whyUsFeatures = [
  {
    title: "Ishga joylashish yordami",
    description: "Big Four firmalar, banklar va yirik kompaniyalar bilan hamkorlik qilamiz. 92% bitiruvchilarimiz 3 oy ichida ish topadi.",
    icon: "Briefcase",
  },
  {
    title: "Xalqaro sertifikatlar",
    description: "ACCA, DipIFR va boshqa xalqaro sertifikatlarga tayyorlaymiz. Dunyoning 180+ mamlakatida tan olinadi.",
    icon: "Award",
  },
  {
    title: "Tajribali mentorlar",
    description: "Barcha mentorlarimiz xalqaro sertifikatlarga ega va Big Four firmalarida ishlagan mutaxassislar.",
    icon: "Users",
  },
  {
    title: "Amaliy yondashuv",
    description: "Real kompaniyalar va case study'lar ustida ishlaysiz. Nazariyani amaliyot bilan birga o'rganasiz.",
    icon: "FolderOpen",
  },
];
