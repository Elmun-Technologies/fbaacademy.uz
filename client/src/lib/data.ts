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
    id: "acca-imtihoniga-tayyorlanish",
    title: "ACCA imtihoniga qanday tayyorlanish kerak: to'liq qo'llanma",
    excerpt: "ACCA imtihonlariga muvaffaqiyatli tayyorlanish strategiyasi: qaysi resurslardan foydalanish, vaqtni qanday rejalashtirish va eng ko'p uchraydigan xatolardan qochish.",
    content: `<h2>ACCA imtihoni nima?</h2>
<p>ACCA (Association of Chartered Certified Accountants) — dunyoning 180 dan ortiq mamlakatida tan olinadigan eng nufuzli moliya sertifikati. O'zbekistonda ham Big Four firmalar (Deloitte, PwC, KPMG, EY), yirik banklar va xalqaro kompaniyalar ACCA sertifikatiga ega mutaxassislarni faol qidirmoqda.</p>
<p>ACCA dasturi 3 bosqichdan iborat: <strong>Applied Knowledge</strong> (3 ta imtihon), <strong>Applied Skills</strong> (6 ta imtihon) va <strong>Strategic Professional</strong> (4 ta imtihon). Jami 13 ta imtihon bo'lib, ularni o'z tezligingizda topshirishingiz mumkin — yiliga 4 marta imtihon sessiyasi o'tkaziladi (mart, iyun, sentyabr, dekabr).</p>

<h2>Tayyorlanishni qayerdan boshlash kerak?</h2>
<p>Ko'pchilik talabalar eng birinchi xato sifatida materiallarni o'qishga tashlanishadi, ammo avval <strong>o'quv rejasi tuzish</strong> zarur. Mana amaliy tavsiyalar:</p>
<ul>
<li><strong>Rasmiy ACCA study text va practice kits</strong> — BPP yoki Kaplan nashriyotlari tayyorlagan materiallar. Bular imtihon tuzuvchilari bilan birgalikda ishlab chiqilgan.</li>
<li><strong>Past papers (o'tgan imtihon savollari)</strong> — acca.global saytida bepul mavjud. Oxirgi 5-6 yillik savollarga amaliyot qilish juda muhim.</li>
<li><strong>Examiner's reports</strong> — har imtihondan keyin chiqadigan hisobot. Talabalar qayerda xato qilganini ko'rasiz va shunga yo'naltirasiz.</li>
</ul>

<h2>Vaqt rejalashtirish: haftalik jadval</h2>
<p>Applied Knowledge imtihonlari uchun odatda <strong>100-150 soat</strong> tayyorlanish tavsiya etiladi. Applied Skills uchun <strong>150-200 soat</strong>, Strategic Professional uchun esa <strong>200-250 soat</strong> zarur. Bu degani, agar kuniga 2 soat o'qisangiz, Applied Knowledge uchun taxminan 2-3 oy kifoya.</p>
<p>Haftalik rejani quyidagicha tuzish samarali:</p>
<ul>
<li>Dushanbadan jumagacha: yangi mavzuni o'rganing (har kuni 1.5-2 soat)</li>
<li>Shanba: o'tilgan mavzular bo'yicha practice questions ishlang</li>
<li>Yakshanba: haftaning eng qiyin mavzusini takrorlang</li>
</ul>

<h2>Eng ko'p uchraydigan xatolar va ulardan qochish yo'llari</h2>
<p><strong>1. Faqat o'qish, yozmaslik.</strong> ACCA imtihonlari, ayniqsa Applied Skills va Strategic Professional darajasida, yozuv va tahlil ko'nikmalarini sinaydi. Har kuni kamida 1 ta savol yozma javob bering.</p>
<p><strong>2. Vaqt boshqaruvi.</strong> Imtihonda har savolga ajratilgan vaqtni hisoblang. 25 ballik savolga 45 daqiqadan ko'p ketmasin. Soat bog'lab mashq qiling.</p>
<p><strong>3. Faqat nazariyaga tayanish.</strong> ACCA amaliy vaziyatlarni sinovdan o'tkazadi. Case study'larni o'qing, real holatlarga bog'lang.</p>
<p><strong>4. Ingliz tilini e'tiborsiz qoldirish.</strong> ACCA imtihonlari ingliz tilida. Agar ingliz tilingiz zaif bo'lsa, parallelda ingliz tilini ham mustahkamlang.</p>

<h2>O'zbekistonda ACCA imtihonini topshirish</h2>
<p>Toshkentda ACCA imtihonlarini <strong>British Council</strong> markazi orqali topshirish mumkin. Ro'yxatdan o'tish ACCA rasmiy saytida amalga oshiriladi. Imtihon narxi bosqichga qarab $100–$200 atrofida.</p>
<p>FBA Academy ACCA tayyorlash kurslarida tajribali mentorlar bilan birgalikda past papers ishlaysiz, mock exams topshirasiz va shaxsiy feedback olasiz. Bizning bitiruvchilarimizning <strong>87%i birinchi urinishda o'tadi</strong>.</p>

<h2>Xulosa</h2>
<p>ACCA — bu sprint emas, maraton. Muntazamlik, to'g'ri materiallar va professional nazorat ostida tayyorlanish muvaffaqiyatning asosi. Agar siz ACCA yo'lini boshlashni rejalashtirmoqchi bo'lsangiz, FBA Academy mutaxassislari bilan bepul konsultatsiya oling va o'z yo'l xaritangizni tuzing.</p>`,
    category: "ACCA",
    date: "2026-02-28",
    readTime: "8 daqiqa",
    author: "Aziza Karimova",
    image: `${UNSPLASH}/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop`,
  },
  {
    id: "dipifr-nima-va-nima-uchun",
    title: "DipIFR nima va O'zbekistonda nima uchun kerak?",
    excerpt: "ACCA DipIFR diplomi O'zbekiston moliya bozorida tobora muhim bo'lib bormoqda. Bu sertifikat nima beradi, kim uchun kerak va qanday tayyorlanish kerak?",
    content: `<h2>DipIFR — xalqaro buxgalteriyaning oltin standarti</h2>
<p>DipIFR (Diploma in International Financial Reporting) — ACCA tashkiloti tomonidan beriladigan xalqaro malaka bo'lib, IFRS (Xalqaro Moliyaviy Hisobot Standartlari) bo'yicha mutaxassislikni tasdiqlaydi. Bu diplom yiliga ikki marta — <strong>iyun va dekabr</strong> oylarida o'tkaziladigan yagona imtihon orqali olinadi.</p>
<p>DipIFR to'liq ACCA dasturidan farqli o'laroq, <strong>1 yil ichida</strong> olinishi mumkin — bu uni tajribali buxgalterlar va moliyachilar uchun juda qulay qiladi.</p>

<h2>O'zbekistonda IFRS nima uchun muhim?</h2>
<p>O'zbekiston hukumati 2021-yilda IFRS standartlarini bosqichma-bosqich joriy etish dasturini e'lon qildi. Bunga ko'ra:</p>
<ul>
<li><strong>Yirik davlat korxonalari</strong> 2024-yildan IFRS bo'yicha hisobot berishga majbur</li>
<li><strong>Xalqaro investitsiyalar</strong> jalb etayotgan kompaniyalar IFRS hisobotlarini taqdim etishi kerak</li>
<li><strong>Banklar va moliya muassasalari</strong> xalqaro standartlarga o'tmoqda</li>
</ul>
<p>Bu degani, DipIFR diplomiga ega buxgalterlar va moliyachilar O'zbekiston bozorida <strong>tobora ko'proq talab qilinmoqda</strong>.</p>

<h2>DipIFR imtihoni qanday tuzilgan?</h2>
<p>Imtihon davomiyligi <strong>3.5 soat</strong>. Tuzilishi:</p>
<ul>
<li><strong>Qism A</strong> (40 ball): 20 ta ko'p tanlovli savol — IFRS standartlari bo'yicha bilim</li>
<li><strong>Qism B</strong> (60 ball): 3 ta ochiq savol — moliyaviy hisobotlar tahlili, konsolidatsiya, IFRS qo'llanishi</li>
</ul>
<p>O'tish bali — <strong>50%</strong>. Imtihon ingliz tilida o'tkaziladi.</p>

<h2>Kim uchun DipIFR ideal?</h2>
<p>DipIFR eng avvalo quyidagilar uchun mos:</p>
<ul>
<li>Bosh buxgalterlar va moliya direktorlari</li>
<li>Audit va konsalting firmalari xodimlari</li>
<li>Xalqaro kompaniyalarda ishlashni xohlaydigan mutaxassislar</li>
<li>ACCA yo'lini boshlashdan oldin tezkor xalqaro sertifikat olmoqchi bo'lganlar</li>
</ul>

<h2>DipIFR bilan qancha pul ishlash mumkin?</h2>
<p>O'zbekistonda DipIFR diplomiga ega mutaxassislar o'rtacha maoshi:</p>
<ul>
<li>Junior IFRS Accountant: 8–12 million so'm/oy</li>
<li>IFRS Specialist: 15–25 million so'm/oy</li>
<li>CFO (DipIFR + tajriba): 40–80 million so'm/oy</li>
</ul>
<p>Xalqaro kompaniyalarda esa bu raqamlar ikki barobar yuqori bo'lishi mumkin.</p>

<h2>Tayyorlanish uchun zarur vaqt va resurslar</h2>
<p>Tajribali buxgalter uchun DipIFR imtihoniga tayyorlanish <strong>4–6 oy</strong> talab etadi. Asosiy materiallar:</p>
<ul>
<li>ACCA rasmiy study materials (BPP yoki Kaplan)</li>
<li>IASB veb-sayti — barcha standartlar bepul</li>
<li>O'tgan yillar imtihon savollari va javoblari</li>
</ul>
<p>FBA Academy DipIFR kursida <strong>tajribali mentorlar</strong>, live sessiyalar va mock exam bilan to'liq tayyorlanasiz. O'rta hisobda bizning DipIFR talabalarimiz birinchi urinishda 78% o'tadi.</p>`,
    category: "DipIFR",
    date: "2026-02-20",
    readTime: "7 daqiqa",
    author: "Nilufar Rahimova",
    image: `${UNSPLASH}/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop`,
  },
  {
    id: "financial-modeling-excel-dan-kariyeragacha",
    title: "Financial Modeling: Excel'dan investitsiya bankigacha — yo'l xaritasi",
    excerpt: "Moliyaviy modellashtirish O'zbekistondagi eng ko'p maosh to'lanadigan ko'nikmalardan biri. Kim o'rganishi kerak, qanday boshlash va qaysi sohalarda qo'llash mumkin?",
    content: `<h2>Financial Modeling nima?</h2>
<p>Moliyaviy modellashtirish — kompaniyaning moliyaviy holatini, kelajakdagi daromadlarini va risklarini Excel yoki boshqa dasturlarda raqamli model ko'rinishida ifodalash jarayoni. Bu ko'nikma investitsiya banklari, konsalting firmalar, startaplar va korporatsiyalarda qo'llaniladi.</p>
<p>Oddiy qilib aytganda: kompaniya yangi loyiha uchun kredit olmoqchi — moliyaviy model kerak. Startup investitsiya jalb qilmoqchi — moliyaviy model kerak. Kompaniya sotib olish yoki birlashtirish rejalashtirilmoqda — moliyaviy model kerak.</p>

<h2>O'zbekistonda moliyaviy modellashtirish talab qilinadi</h2>
<p>So'nggi 3-5 yilda O'zbekistonda:</p>
<ul>
<li>Xalqaro investitsiya fondlari soni 3 barobarga oshdi</li>
<li>IPO va M&A bitimlar ko'paydi</li>
<li>Yirik korporatsiyalar (Artel, Payme, Humans) moliya bo'limlarini kengaytirdi</li>
<li>Davlat korxonalari xususiylashtirish uchun valuation talab qilmoqda</li>
</ul>
<p>Natijada Financial Modeling mutaxassislariga talab <strong>yil sayin 30-40%ga oshmoqda</strong>.</p>

<h2>Asosiy financial modeling turlari</h2>
<p><strong>1. DCF (Discounted Cash Flow)</strong> — kompaniya qiymatini kelajakdagi pul oqimlari asosida hisoblash. Eng ko'p ishlatiladigan model.</p>
<p><strong>2. LBO (Leveraged Buyout)</strong> — kompaniyani qarz puli bilan sotib olish modeli. Private equity sohasida asosiy vosita.</p>
<p><strong>3. M&A (Mergers & Acquisitions)</strong> — qo'shilish va egallab olish modeli. Ikkita kompaniyaning birlashgandan keyingi moliyaviy holati simulyatsiyasi.</p>
<p><strong>4. Komparativ tahlil (Comparable Company Analysis)</strong> — o'xshash kompaniyalar asosida baho hisoblash.</p>

<h2>Excel ko'nikmalari: qaysi darajadan boshlash kerak?</h2>
<p>Ko'pchilik "Excel'ni bilaman" deydi, lekin financial modeling uchun zarur bo'lgan Excel darajasi boshqacha:</p>
<ul>
<li>Lookup funksiyalar (VLOOKUP, INDEX-MATCH, XLOOKUP)</li>
<li>Shart formulalari (IF, IFS, nested IF)</li>
<li>Moliyaviy funksiyalar (NPV, IRR, PMT, FV)</li>
<li>Pivot tables va Power Query</li>
<li>FAST metodologiya (Flexible, Appropriate, Structured, Transparent)</li>
<li>Keyboard shortcuts (sichqon ishlatmasdan ishlash)</li>
</ul>
<p>Bu ko'nikmalarni FBA Academy kursida amaliy loyihalar orqali o'rganasiz.</p>

<h2>Karyera yo'nalishlari va maoshlar</h2>
<p>Financial Modeling bilishi sizga quyidagi sohalarga kirish imkonini beradi:</p>
<ul>
<li><strong>Investitsiya banki</strong> (IB Analyst): 15–30 million so'm/oy + bonus</li>
<li><strong>Moliyaviy tahlilchi</strong> (Financial Analyst): 10–20 million so'm/oy</li>
<li><strong>Konsalting</strong> (Big 4 / Consulting): 12–25 million so'm/oy</li>
<li><strong>CFO yordamchisi</strong>: 8–15 million so'm/oy</li>
</ul>

<h2>FBA Academy Financial Modeling kursi nimani beradi?</h2>
<p>Kursda siz quyidagilarni o'rganasiz va real loyihalarda qo'llaysiz:</p>
<ul>
<li>3-statement model (P&L, Balance Sheet, Cash Flow) yaratish</li>
<li>DCF modeli va company valuation</li>
<li>O'zbekiston kompaniyalari ustida real case studies</li>
<li>Investor presentation tayyorlash</li>
<li>Power BI dashboards</li>
</ul>
<p>Kurs yakunida sizda portfolio bo'ladi — real loyihalar, haqiqiy kompaniyalar. Bu rezyumeda eng kuchli dalil.</p>`,
    category: "Financial Modeling",
    date: "2026-02-12",
    readTime: "9 daqiqa",
    author: "Bobur Toshmatov",
    image: `${UNSPLASH}/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop`,
  },
  {
    id: "1c-buxgalteriya-boshlangich-qollanma",
    title: "1C: Buxgalteriya 8.3 — yangi boshlovchilar uchun to'liq qo'llanma",
    excerpt: "O'zbekistondagi korxonalarning 90%i 1C dasturini ishlatadi. Bu qo'llanmada 1C nima ekanligi, qanday ishlashi va qanday o'rganish kerakligi haqida batafsil ma'lumot.",
    content: `<h2>1C: Buxgalteriya nima?</h2>
<p>1C: Buxgalteriya — Rossiyaning 1C kompaniyasi tomonidan ishlab chiqilgan buxgalteriya va moliya boshqaruvi dasturi. O'zbekistonda bu dasturning maxsus lokalizatsiya qilingan versiyasi mavjud bo'lib, O'zbekiston soliq qonunchiligi, hisobot shakllari va valyuta talablariga to'liq mos keladi.</p>
<p>Statistikaga ko'ra, O'zbekistondagi korxonalarning <strong>85-90%i 1C dasturini</strong> qo'llaydi. Bu degani, agar siz buxgalter bo'lishni xohlasangiz yoki allaqachon buxgalter bo'lsangiz, 1C bilish majburiy ko'nikma hisoblanadi.</p>

<h2>1C: Buxgalteriya 8.3 — qaysi versiyani o'rganish kerak?</h2>
<p>Hozirda O'zbekistonda asosan <strong>1C: Buxgalteriya 8.3</strong> versiyasi qo'llaniladi. Bu versiyaning asosiy afzalliklari:</p>
<ul>
<li>Bulut (cloud) va mahalliy server versiyalarida ishlaydi</li>
<li>O'zbekiston Soliq qo'mitasining elektron tizimi bilan integratsiya</li>
<li>Avtomatik soliq deklaratsiyalari (QQS, Foyda solig'i, NDFL)</li>
<li>Kassa va bank operatsiyalari avtomatlashtirilgan</li>
<li>Omborxona va inventarizatsiya modullari mavjud</li>
</ul>

<h2>Dasturning asosiy modullari</h2>
<p><strong>Kassaning yuritilishi:</strong> Naqd va bank o'tkazmalari, kassa orderlari, bank ko'chirmalari.</p>
<p><strong>Sotib olish va sotish:</strong> Yetkazib beruvchilar bilan hisob-kitoblar, mijozlarga fakturalar, tovarlar harakati.</p>
<p><strong>Ish haqi va xodimlar:</strong> Maosh hisoblash, NDFL va ijtimoiy sug'urta, mehnat shartnomalarini yuritish.</p>
<p><strong>Asosiy vositalar:</strong> Amortizatsiya hisoblash, inventarizatsiya, ta'mirlash xarajatlari.</p>
<p><strong>Hisobotlar:</strong> Moliyaviy hisobotlar, soliq deklaratsiyalari, ichki boshqaruv hisobotlari.</p>

<h2>Yangi boshlovchilar uchun o'rganish yo'li</h2>
<p>1C ni o'rganish quyidagi bosqichlardan iborat:</p>
<ol>
<li><strong>Interfeys bilan tanishish</strong> (1-2 hafta): menyu, kataloglar, jurналlar, hisobotlar</li>
<li><strong>Asosiy operatsiyalar</strong> (2-4 hafta): kassa operatsiyalari, sotib olish-sotish, ish haqi</li>
<li><strong>Soliq hisoboti</strong> (2-3 hafta): QQS deklaratsiyasi, foyda solig'i, statistik hisobotlar</li>
<li><strong>Murakkab operatsiyalar</strong> (1-2 oy): konsolidatsiya, valyuta operatsiyalari, inventarizatsiya</li>
</ol>

<h2>1C ning afzalliklari va kamchiliklari</h2>
<p><strong>Afzalliklari:</strong></p>
<ul>
<li>O'zbekiston soliq tizimiga to'liq mos</li>
<li>Barcha turdagi korxonalar uchun mos (kichik biznesdan korporatsiyagacha)</li>
<li>O'zbekistonda keng texnik qo'llab-quvvatlash mavjud</li>
<li>Kengaytirilish imkoni — CRM, omborxona, ERP modullarini qo'shish</li>
</ul>
<p><strong>Kamchiliklari:</strong></p>
<ul>
<li>Interfeysi boshlovchilar uchun murakkab ko'rinishi mumkin</li>
<li>Litsenziya narxi nisbatan yuqori</li>
<li>Xalqaro IFRS standartlari bilan to'liq integratsiya yo'q</li>
</ul>

<h2>1C bilgan buxgalterning maoshi O'zbekistonda</h2>
<p>1C dasturini professional darajada bilish maoshingizga bevosita ta'sir qiladi:</p>
<ul>
<li>Boshlovchi buxgalter (1C asoslari): 3–5 million so'm/oy</li>
<li>O'rta darajali buxgalter (1C + soliq): 5–10 million so'm/oy</li>
<li>Bosh buxgalter (1C + IFRS): 12–20 million so'm/oy</li>
<li>1C administrator / konsultant: 10–25 million so'm/oy</li>
</ul>
<p>FBA Academy 1C kursida siz dasturni noldan professional darajaga real kompaniya ma'lumotlari bilan o'rganasiz. Kurs yakunida sertifikat beriladi va ish topishda yordam ko'rsatiladi.</p>`,
    category: "1C Buxgalteriya",
    date: "2026-02-05",
    readTime: "10 daqiqa",
    author: "Bobur Toshmatov",
    image: `${UNSPLASH}/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop`,
  },
  {
    id: "buxgalter-maoshi-ozbekiston-2026",
    title: "O'zbekistonda buxgalter maoshi 2026: to'liq statistika va karyera yo'nalishlari",
    excerpt: "O'zbekistonda buxgalter kasbining haqiqiy maosh darajasi qanday? Turli tajriba va sertifikat darajalarida qancha pul ishlash mumkin?",
    content: `<h2>O'zbekistonda buxgalterlik bozori 2026</h2>
<p>O'zbekiston iqtisodiyotining tez o'sishi bilan birga moliya va buxgalteriya mutaxassislariga talabham keskin oshdi. 2024-2026 yillarda IFRS joriy etilishi, xorijiy investitsiyalar va startap ekotizimining rivojlanishi buxgalterlar uchun yangi imkoniyatlar yaratmoqda.</p>
<p>Dolzarb ma'lumotlarga ko'ra, O'zbekistonda buxgalter va moliyachilarning <strong>80 000 dan ortiq</strong> ish o'rni mavjud, ularning 15 000 dan ortig'i har yili yangilanadi.</p>

<h2>Maosh darajasi: tajribaga ko'ra</h2>
<p><strong>Boshlang'ich buxgalter (0–2 yil tajriba):</strong><br/>
O'rtacha maosh: 3–5 million so'm/oy<br/>
Toshkentda: 4–7 million so'm/oy<br/>
Viloyatlarda: 2–4 million so'm/oy</p>

<p><strong>O'rta darajali buxgalter (2–5 yil tajriba):</strong><br/>
O'rtacha maosh: 6–12 million so'm/oy<br/>
Xalqaro kompaniyalarda: 10–18 million so'm/oy</p>

<p><strong>Bosh buxgalter (5+ yil tajriba):</strong><br/>
O'rtacha maosh: 12–25 million so'm/oy<br/>
Yirik korporatsiyalarda: 25–50 million so'm/oy<br/>
Xalqaro kompaniyalarda: 30–80 million so'm/oy</p>

<h2>Sertifikat maoshga qanday ta'sir qiladi?</h2>
<p>Xalqaro sertifikatlar maoshingizni sezilarli darajada oshiradi:</p>
<ul>
<li><strong>DipIFR</strong> — mavjud maoshni 40–80%ga oshiradi</li>
<li><strong>ACCA Applied Knowledge</strong> — 20–40%ga oshiradi</li>
<li><strong>ACCA Applied Skills</strong> — 50–100%ga oshiradi</li>
<li><strong>ACCA Fellow (FCCA)</strong> — maoshni 2–3 barobarga oshiradi</li>
<li><strong>CPA (USA)</strong> — xalqaro kompaniyalarda 3–5 barobarga oshiradi</li>
</ul>

<h2>Soha bo'yicha maosh farqlari</h2>
<p>Buxgalter bir xil tajriba va malaka bilan turli sohalarda ishlasa, maoshi keskin farqlanadi:</p>
<ul>
<li><strong>Big 4 firmalar</strong> (Deloitte, PwC, KPMG, EY): 15–40 million so'm/oy</li>
<li><strong>Xalqaro kompaniyalar</strong>: 12–35 million so'm/oy</li>
<li><strong>Banklar va moliya muassasalari</strong>: 10–30 million so'm/oy</li>
<li><strong>Davlat korxonalari</strong>: 5–15 million so'm/oy</li>
<li><strong>Kichik va o'rta biznes</strong>: 3–10 million so'm/oy</li>
</ul>

<h2>Kelajakdagi istiqbol: 2026–2030</h2>
<p>Quyidagi yo'nalishlarda buxgalterlar talabi yanada oshadi:</p>
<ul>
<li><strong>IFRS mutaxassislari</strong> — O'zbekiston IFRS'ga to'liq o'tishi bilan bog'liq</li>
<li><strong>Soliq tahlilchilari</strong> — raqamli soliq tizimi rivojlanishi</li>
<li><strong>ESG hisobotlari</strong> — ekologik va ijtimoiy hisobot yangi talabga aylandi</li>
<li><strong>Kriptovalyuta va DeFi buxgalteriya</strong> — yangi soha, mutaxassislar kam</li>
</ul>
<p>Agar siz buxgalteriya sohasida yuqori maosh olishni xohlasangiz, birinchi qadam — o'z bilimlaringizni xalqaro standartlarga olib chiqish. FBA Academy dan boshlang: ACCA, DipIFR yoki 1C kurslaridan birini tanlang.</p>`,
    category: "Karyera",
    date: "2026-01-30",
    readTime: "8 daqiqa",
    author: "Aziza Karimova",
    image: `${UNSPLASH}/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop`,
  },
  {
    id: "acca-vs-dipifr-vs-cfa-qaysi-yaxshi",
    title: "ACCA vs DipIFR vs CFA: O'zbekistonda qaysi sertifikat foydaliroq?",
    excerpt: "Uch xalqaro moliya sertifikatini solishtirish: narx, vaqt, talablar va O'zbekiston bozorida qiymati. Qaysi birini tanlash kerak?",
    content: `<h2>Kirish: Nima uchun sertifikat muhim?</h2>
<p>O'zbekistonda moliya va buxgalteriya sohasida raqobat kuchayib bormoqda. Mahalliy diplom allaqachon etarli bo'lmay qoldi — ish beruvchilar xalqaro standartlarni tushunadigan mutaxassislarni qidirmoqda. Ammo qaysi sertifikatni tanlash kerak?</p>
<p>Bu maqolada uchta eng mashhur xalqaro moliya sertifikatini — ACCA, DipIFR va CFA ni solishtirамiz.</p>

<h2>ACCA — keng qamrovli moliya bilimi</h2>
<p><strong>Nima beradi:</strong> Buxgalteriya, audit, soliq, moliyaviy boshqaruv va etika bo'yicha keng qamrovli bilim. 180+ mamlakatda tan olinadi.</p>
<p><strong>Davomiyligi:</strong> 2–5 yil (13 ta imtihon + 3 yil tajriba)</p>
<p><strong>Narxi:</strong> $2,500–$6,000 (jami imtihonlar + ro'yxatdan o'tish)</p>
<p><strong>Kim uchun:</strong> Audit, buxgalteriya, moliya boshqaruvi, konsalting sohasida karyera qilmoqchi bo'lganlar</p>
<p><strong>O'zbekistonda maosh:</strong> ACCA finalist: 15–30 million so'm/oy; FCCA: 30–60 million so'm/oy</p>

<h2>DipIFR — IFRS bo'yicha tezkor sertifikat</h2>
<p><strong>Nima beradi:</strong> Xalqaro Moliyaviy Hisobot Standartlari (IFRS) bo'yicha maxsus malaka. ACCA tomonidan beriladi.</p>
<p><strong>Davomiyligi:</strong> 4–6 oy (1 ta imtihon)</p>
<p><strong>Narxi:</strong> $200–$400 (1 imtihon)</p>
<p><strong>Kim uchun:</strong> Allaqachon tajribali buxgalterlar va moliyachilar; tezkor xalqaro sertifikat olmoqchi bo'lganlar</p>
<p><strong>O'zbekistonda maosh:</strong> DipIFR diplomiga ega buxgalterlar 40–80% ko'proq ishlaydi</p>

<h2>CFA — investitsiya tahlili uchun oltin standart</h2>
<p><strong>Nima beradi:</strong> Portfolio management, equity research, investitsiya tahlili bo'yicha eng nufuzli sertifikat.</p>
<p><strong>Davomiyligi:</strong> 2–4 yil (3 daraja imtihon)</p>
<p><strong>Narxi:</strong> $2,500–$4,000 (jami)</p>
<p><strong>Kim uchun:</strong> Investitsiya banki, hedge fund, asset management sohasida ishlashni xohlaydigan mutaxassislar</p>
<p><strong>O'zbekistonda maosh:</strong> CFA mutaxassislari hali nisbatan kam, shuning uchun taklif kuchli — 25–60 million so'm/oy</p>

<h2>Solishtirma jadvali</h2>
<table>
<tr><th>Ko'rsatkich</th><th>ACCA</th><th>DipIFR</th><th>CFA</th></tr>
<tr><td>Davomiyligi</td><td>2–5 yil</td><td>4–6 oy</td><td>2–4 yil</td></tr>
<tr><td>Imtihon soni</td><td>13</td><td>1</td><td>3</td></tr>
<tr><td>O'tish darajasi</td><td>48–55%</td><td>40–50%</td><td>40–45%</td></tr>
<tr><td>Narxi</td><td>$2,500–6,000</td><td>$200–400</td><td>$2,500–4,000</td></tr>
<tr><td>Yo'nalish</td><td>Buxgalteriya/Audit</td><td>IFRS/Hisobot</td><td>Investitsiya</td></tr>
</table>

<h2>Qaysi birini tanlash kerak?</h2>
<p><strong>Agar siz buxgalter yoki auditor bo'lsangiz</strong> → ACCA (yoki tezkor DipIFR)</p>
<p><strong>Agar allaqachon tajribali buxgalter bo'lsangiz va tez sertifikat kerak bo'lsa</strong> → DipIFR</p>
<p><strong>Agar investitsiya tahlili yoki portfolio management sizni qiziqtirsa</strong> → CFA</p>
<p><strong>Agar ikki tomonni ham qoplamoqchi bo'lsangiz</strong> → DipIFR + ACCA kombinatsiyasi</p>
<p>FBA Academy da bepul konsultatsiya oling — mutaxassislar sizning maqsad va vaziyatingizga qarab eng to'g'ri yo'lni tavsiya qiladi.</p>`,
    category: "ACCA",
    date: "2026-01-22",
    readTime: "11 daqiqa",
    author: "Nilufar Rahimova",
    image: `${UNSPLASH}/photo-1434626881859-194d67b2b86f?w=800&h=400&fit=crop`,
  },
  {
    id: "ozbekistonda-yurist-maoshi-va-karyera",
    title: "O'zbekistonda yurist bo'lish: maosh, talablar va karyera istiqboli 2026",
    excerpt: "O'zbekistonda yurist kasbining haqiqiy holati: qancha pul ishlash mumkin, qaysi sohalarda ko'proq talab qilinadi va huquqshunoslik bilimi biznes uchun nima beradi?",
    content: `<h2>O'zbekistonda huquqshunoslik bozori</h2>
<p>O'zbekiston iqtisodiyoti rivojlanib, investitsiyalar kuchaygan sari huquqiy xizmatlar talabi ham sezilarli darajada oshmoqda. 2023–2026 yillarda xalqaro bitimlar, PPP loyihalar va xususiylashtirish jarayonlari huquqshunoslarga bo'lgan talabni ikki barobarga oshirdi.</p>
<p>Bundan tashqari, O'zbekistonda raqamli iqtisodiyot va startap sektori rivojlanishi yangi huquqiy yo'nalishlarni yaratmoqda: IT huquqi, ma'lumotlar muhofazasi, kripto-vosita tartibga solish.</p>

<h2>Maosh darajasi: soha va tajribaga ko'ra</h2>
<p><strong>Davlat tuzilmalarida:</strong><br/>
Boshlovchi yurist: 3–5 million so'm/oy<br/>
O'rta darajali: 5–10 million so'm/oy<br/>
Departament boshlig'i: 10–20 million so'm/oy</p>

<p><strong>Xususiy kompaniyalarda:</strong><br/>
Korporativ yurist (Junior): 5–10 million so'm/oy<br/>
Korporativ yurist (Senior): 15–30 million so'm/oy<br/>
Bosh yurist (CLO): 25–60 million so'm/oy</p>

<p><strong>Xalqaro huquq firmalari:</strong><br/>
Associate: 20–40 million so'm/oy<br/>
Partner: 60–150 million so'm/oy</p>

<h2>Eng ko'p talab qilinadigan yo'nalishlar</h2>
<p><strong>1. Korporativ huquq va M&A:</strong> Kompaniyalar xaridi, qo'shilishi, ustav hujjatlari. Toshkentdagi yirik firmalar bu yo'nalishda doim mutaxassis izlamoqda.</p>
<p><strong>2. Soliq huquqi:</strong> Soliq optimizatsiyasi, soliq bahslari, xalqaro soliqqa tortish. DipIFR + huquqshunoslik kombinatsiyasi bu sohada juda qimmat.</p>
<p><strong>3. Investitsiya va PPP huquqi:</strong> Davlat-xususiy sheriklik loyihalari, xorijiy investitsiyalarni tartibga solish.</p>
<p><strong>4. IT va intellektual mulk huquqi:</strong> Dasturiy ta'minot litsenziyalash, ma'lumotlar muhofazasi, brendlash.</p>
<p><strong>5. Mehnat huquqi:</strong> Mehnat kelishmovchiliklari, xodimlar huquqlari, korporativ siyosat.</p>

<h2>Huquqshunoslik bilimi biznes uchun</h2>
<p>Ko'plab tadbirkorlar huquqiy savodsizlik sababli zarar ko'radi:</p>
<ul>
<li>Noto'g'ri tuzilgan shartnomalar — moliyaviy zarar</li>
<li>Mehnat qonunchiligini bilmaslik — jarimalari</li>
<li>Intellektual mulk huquqini e'tiborsiz qoldirish — raqobatchilar foydalanadi</li>
<li>Soliq huquqini bilmaslik — keraksiz to'lovlar</li>
</ul>
<p>FBA Academy Huquqshunoslik kursida siz O'zbekiston qonunchiligining amaliy tomonlarini o'rganasiz: shartnomalar tuzish, mehnat munosabatlari, korporativ boshqaruv va soliq rejalash.</p>

<h2>Xulosa: yurist kasbiga kirishning eng qisqa yo'li</h2>
<p>Agar siz:</p>
<ul>
<li>Noldan yurist bo'lishni xohlasangiz — huquqshunoslik kursidan boshlang</li>
<li>Biznesingizni huquqiy himoya qilishni istasangiz — amaliy huquq kursini tanlang</li>
<li>HR yoki buxgalter sifatida mehnat va soliq huquqini o'rganmoqchi bo'lsangiz — maxsus modul kerak</li>
</ul>
<p>FBA Academy Huquqshunoslik kursi 1600 soatlik masofaviy dastur bo'lib, amaliy ko'nikmalar bilan rasmiy diplom beradi.</p>`,
    category: "Huquqshunoslik",
    date: "2026-01-15",
    readTime: "9 daqiqa",
    author: "Dilshod Umarov",
    image: `${UNSPLASH}/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop`,
  },
  {
    id: "moliyaviy-tahlilchi-bolish-yol-xaritasi",
    title: "Moliyaviy tahlilchi bo'lish: 2026 yil uchun to'liq yo'l xaritasi",
    excerpt: "O'zbekistonda moliyaviy tahlilchi (Financial Analyst) kabi yuqori maoshli kasbga qanday kirish mumkin? Qanday ko'nikmalar, sertifikatlar va tajriba kerak?",
    content: `<h2>Moliyaviy tahlilchi kim?</h2>
<p>Moliyaviy tahlilchi — kompaniya, sanoat yoki investitsiya imkoniyatlarini raqamlar asosida baholaydi, kompaniyalarga strategik qarorlar qabul qilishda moliyaviy ma'lumotlar taqdim etadi. Bu kasbning asosiy vazifasi: <strong>raqamlarni ma'noga aylantirish</strong>.</p>
<p>Odatdagi ish kunida moliyaviy tahlilchi:</p>
<ul>
<li>Kompaniyalarning moliyaviy hisobotlarini o'rganadi</li>
<li>Excel'da moliyaviy modellar yaratadi</li>
<li>Investitsiya taklifnomalari tayyorlaydi</li>
<li>Bozor tendentsiyalarini kuzatadi</li>
<li>Menejment uchun hisobotlar taqdim etadi</li>
</ul>

<h2>O'zbekistonda moliyaviy tahlilchilarga talab</h2>
<p>So'nggi yillarda O'zbekistonda:</p>
<ul>
<li>Kapital bozori rivojlanishi (fond birjasi)</li>
<li>Private equity va venture capital aktivlashdi</li>
<li>Yirik korporatsiyalar moliya bo'limlarini kengaytirdi</li>
<li>IPO jarayonlari boshlandi (Ipak Yo'li Banki, Uzauto va boshqalar)</li>
</ul>
<p>Natijada <strong>sifatli moliyaviy tahlilchilarga talab o'sib bormoqda</strong>, ammo taklif hali etarli emas — bu siz uchun imkoniyat.</p>

<h2>Kerakli ko'nikmalar: majburiy va qo'shimcha</h2>
<p><strong>Majburiy ko'nikmalar:</strong></p>
<ul>
<li>Excel (ilg'or daraja): vlookup, pivot, financial functions</li>
<li>Moliyaviy hisobotlarni o'qish (P&L, Balance Sheet, Cash Flow)</li>
<li>Financial Modeling: DCF, comparable analysis</li>
<li>Ingliz tili: professional darajada o'qish va yozish</li>
<li>Prezentatsiya ko'nikmalari: PowerPoint, data visualization</li>
</ul>
<p><strong>Qo'shimcha, lekin muhim:</strong></p>
<ul>
<li>Python (Pandas, NumPy) — ma'lumot tahlili uchun</li>
<li>Power BI yoki Tableau — dashboard yaratish</li>
<li>SQL — ma'lumotlar bazasi bilan ishlash</li>
<li>Bloomberg Terminal — bozor ma'lumotlari</li>
</ul>

<h2>Bosqichma-bosqich yo'l xaritasi</h2>
<p><strong>1-bosqich (0–6 oy): Asoslarni o'rganish</strong><br/>
Excel (ilg'or daraja) + moliyaviy hisobotlarni o'qish + iqtisodiyot asoslari</p>

<p><strong>2-bosqich (6–18 oy): Ko'nikmalar qurish</strong><br/>
Financial Modeling kursi + DipIFR yoki ACCA Applied Knowledge + real loyihalar portfolio</p>

<p><strong>3-bosqich (18–36 oy): Tajriba to'plash</strong><br/>
Junior analyst sifatida ishlash + CFA Level 1 boshlash + mentorlik olish</p>

<p><strong>4-bosqich (3+ yil): Senior va ixtisoslashuv</strong><br/>
Senior Analyst yoki Portfolio Manager + CFA charterholder + maxsus soha ixtisoslashuvi</p>

<h2>Maosh darajalari</h2>
<ul>
<li><strong>Junior Financial Analyst:</strong> 6–12 million so'm/oy</li>
<li><strong>Financial Analyst:</strong> 12–22 million so'm/oy</li>
<li><strong>Senior Financial Analyst:</strong> 20–40 million so'm/oy</li>
<li><strong>Finance Manager / FP&A:</strong> 30–60 million so'm/oy</li>
<li><strong>CFO / Investment Director:</strong> 50–150 million so'm/oy</li>
</ul>

<h2>Qayerdan boshlash kerak?</h2>
<p>FBA Academy ning Financial Modeling kursi bu yo'lning eng samarali boshlang'ich nuqtasi. Kursda siz:</p>
<ul>
<li>Excel dan professional darajada foydalanishni o'rganasiz</li>
<li>Real O'zbekiston kompaniyalari ustida modellar yaratasiz</li>
<li>DCF, LBO, M&A modellarini bilib olasiz</li>
<li>Portfolio yaratib, ish izlashda kuchli dalil sifatida ishlatасiz</li>
</ul>
<p>Kursni tugatgandan so'ng, FBA Academy ish topishda yordam beradi — hamkor kompaniyalarga CV yuborish, mock interview o'tkazish va karyera maslahat berish xizmati bepul.</p>`,
    category: "Karyera",
    date: "2026-01-08",
    readTime: "10 daqiqa",
    author: "Bobur Toshmatov",
    image: `${UNSPLASH}/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop`,
  },
  {
    id: "xalqaro-sertifikatlar-ozbekistonda",
    title: "Xalqaro moliya sertifikatlari O'zbekistonda: nega hozir eng to'g'ri vaqt?",
    excerpt: "ACCA, DipIFR va CFA sertifikatlari O'zbekiston iqtisodiyotining o'sishi bilan ahamiyati oshib bormoqda. Nima uchun endi investitsiya qilish kerak?",
    content: `<h2>O'zbekiston iqtisodiyotidagi o'zgarishlar</h2>
<p>2017-yildan beri O'zbekiston iqtisodiyotida fundamental o'zgarishlar ro'y berdi: bozor islohotlari, valyuta liberalizatsiyasi, xorijiy investitsiyalar uchun eshiklarni ochish. Bu o'zgarishlar moliya va buxgalteriya sohasiga to'g'ridan-to'g'ri ta'sir qildi.</p>
<p>Bugungi kunda O'zbekistonda faoliyat yuritayotgan <strong>200 dan ortiq xalqaro kompaniya</strong> moliya departamentlarida xalqaro standartlarni biladigan mutaxassislarni talab qilmoqda.</p>

<h2>Nima uchun hozir eng qulay vaqt?</h2>
<p><strong>1. Taklif hali kam, talab esa o'syapti.</strong> Hozirda O'zbekistonda ACCA sertifikatiga ega mutaxassislar soni 2 000 dan kam. Ammo talabning o'sish sur'atiga qarab, 2028-yilga kelib bu raqam 10 000 ga etishi kutilmoqda. Hozir boshlasangiz — pioneers qatoriga kirasiz.</p>
<p><strong>2. IFRS joriy etilishi davom etmoqda.</strong> Hukumat 2026-2028 yillarga mo'ljallangan IFRS joriy etish dasturini kengaytirdi. Bu DipIFR va ACCA diplomlarining qiymatini yanada oshiradi.</p>
<p><strong>3. Xalqaro mehnat bozori.</strong> ACCA sertifikati Buyuk Britaniya, Avstraliya, Kanada, Singapur va Yakin Sharqda ish topish imkonini beradi. Bu to'g'ridan-to'g'ri emigratsiya yo'li emas, lekin kuchli option.</p>

<h2>To'siqlar va ularni yengish yo'llari</h2>
<p><strong>To'siq 1: Ingliz tili.</strong> ACCA va CFA imtihonlari ingliz tilida. Ammo bu o'rganish davomida ham muvoziy rivojlantirilishi mumkin. FBA Academy kurslari o'zbek tilida o'tkaziladi, terminologiya esa inglizcha o'rgatiladi.</p>
<p><strong>To'siq 2: Narx.</strong> ACCA imtihonlari narxi $2,500–6,000. Ammo bu investitsiyani maosh o'sishi bilan qoplash odatda 6–12 oyda amalga oshadi. Bundan tashqari, bo'lib to'lash imkoni mavjud.</p>
<p><strong>To'siq 3: Vaqt.</strong> Ishlab, o'qish qiyin. Ammo hozirgi online formatlar buni osonlashtirdi. FBA Academy kurslari kechki payt va dam olish kunlari uchun moslashtirilgan.</p>

<h2>Qayerdan boshlash kerak?</h2>
<p>Eng to'g'ri boshlang'ich nuqta sizning hozirgi darajangizga bog'liq:</p>
<ul>
<li><strong>Tajribali buxgalter (5+ yil)</strong> → DipIFR dan boshlang, keyin ACCA Applied Skills</li>
<li><strong>O'rta darajali buxgalter (2–5 yil)</strong> → ACCA Applied Knowledge</li>
<li><strong>Yangi boshlovchi</strong> → ACCA Applied Knowledge yoki 1C kursi</li>
<li><strong>Moliya/investitsiya</strong> → Financial Modeling + CFA Level 1</li>
</ul>
<p>Bepul konsultatsiya uchun FBA Academy ga murojaat qiling — mutaxassislarimiz sizga shaxsiy yo'l xaritasini tuzib beradi.</p>`,
    category: "Karyera",
    date: "2026-01-02",
    readTime: "7 daqiqa",
    author: "Aziza Karimova",
    image: `${UNSPLASH}/photo-1507679799987-c73779587ccf?w=800&h=400&fit=crop`,
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
