export interface Course {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  duration: string;
  price: string;
  oldPrice?: string;
  level: string;
  description: string;
  shortDescription: string;
  modules: { title: string; topics: string[] }[];
  forWhom: string[];
  skills: string[];
  mentorId: string;
  image: string;
  gradient: string;
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
  { name: "Dasturlash", slug: "programming", gradient: "from-purple-500 to-indigo-600", icon: "Code" },
  { name: "Marketing", slug: "marketing", gradient: "from-emerald-500 to-teal-600", icon: "TrendingUp" },
  { name: "Dizayn", slug: "design", gradient: "from-amber-400 to-orange-500", icon: "Palette" },
  { name: "Biznes", slug: "business", gradient: "from-blue-500 to-cyan-600", icon: "Briefcase" },
];

export const courses: Course[] = [
  {
    id: "smm-mutaxassis",
    title: "SMM Mutaxassis Kursi",
    category: "Marketing",
    categorySlug: "marketing",
    duration: "4 oy",
    price: "2 500 000",
    oldPrice: "4 000 000",
    level: "Boshlang'ich",
    description: "SMM sohasida professional bo'ling. Instagram, Telegram, Facebook va boshqa ijtimoiy tarmoqlarda marketing strategiyalarini o'rganing.",
    shortDescription: "Ijtimoiy tarmoqlarda marketing strategiyalarini o'rganing",
    modules: [
      { title: "SMM asoslari", topics: ["Ijtimoiy tarmoqlar strategiyasi", "Kontent rejalashtirish", "Maqsadli auditoriya"] },
      { title: "Instagram marketing", topics: ["Reels yaratish", "Stories strategiyasi", "Hashtag strategiyasi"] },
      { title: "Telegram marketing", topics: ["Kanal yaratish", "Bot yaratish asoslari", "Reklama strategiyasi"] },
      { title: "Reklama va analitika", topics: ["Facebook Ads", "Instagram Ads", "Analitika va hisobotlar"] },
    ],
    forWhom: ["Marketing sohasiga qiziquvchilar", "Biznes egalari", "Frilanserlar", "Karyerasini o'zgartirmoqchilar"],
    skills: ["Kontent yaratish", "Reklama sozlash", "Analitika", "Strategiya yaratish"],
    mentorId: "teacher-1",
    image: "",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "web-dasturlash",
    title: "Web Dasturlash (Full-Stack)",
    category: "Dasturlash",
    categorySlug: "programming",
    duration: "6 oy",
    price: "3 500 000",
    oldPrice: "5 500 000",
    level: "Boshlang'ich",
    description: "HTML, CSS, JavaScript, React va Node.js texnologiyalarini o'rganib, to'liq web ilovalar yarating.",
    shortDescription: "Zamonaviy web texnologiyalarini o'rganing",
    modules: [
      { title: "HTML & CSS", topics: ["HTML5 asoslari", "CSS3 va Flexbox", "Responsive dizayn"] },
      { title: "JavaScript", topics: ["JS asoslari", "DOM manipulyatsiya", "Async programming"] },
      { title: "React", topics: ["Component asoslari", "State management", "React Router"] },
      { title: "Backend", topics: ["Node.js", "Express.js", "MongoDB va PostgreSQL"] },
    ],
    forWhom: ["Dasturlashni o'rganmoqchilar", "Karyerasini o'zgartirmoqchilar", "Talabalar", "Frilanserlar"],
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Database"],
    mentorId: "teacher-2",
    image: "",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: "grafik-dizayn",
    title: "Grafik Dizayn Pro",
    category: "Dizayn",
    categorySlug: "design",
    duration: "5 oy",
    price: "2 800 000",
    oldPrice: "4 200 000",
    level: "Boshlang'ich",
    description: "Adobe Photoshop, Illustrator va Figma dasturlarini o'rganib, professional dizayner bo'ling.",
    shortDescription: "Professional grafik dizayn ko'nikmalarini egallang",
    modules: [
      { title: "Dizayn asoslari", topics: ["Rang nazariyasi", "Tipografiya", "Kompozitsiya"] },
      { title: "Adobe Photoshop", topics: ["Rasm tahrirlash", "Poster dizayn", "Photo manipulation"] },
      { title: "Adobe Illustrator", topics: ["Vektor grafika", "Logo dizayn", "Brending"] },
      { title: "Figma", topics: ["UI dizayn", "Prototyping", "Design system"] },
    ],
    forWhom: ["Dizayn sohasiga qiziquvchilar", "Marketologlar", "Frilanserlar", "Kontent yaratuvchilar"],
    skills: ["Photoshop", "Illustrator", "Figma", "Brending", "UI/UX"],
    mentorId: "teacher-3",
    image: "",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    id: "biznes-boshqaruv",
    title: "Biznes Boshqaruv",
    category: "Biznes",
    categorySlug: "business",
    duration: "3 oy",
    price: "3 000 000",
    oldPrice: "4 500 000",
    level: "O'rta",
    description: "Biznes rejalashtirish, moliyaviy boshqaruv va jamoani boshqarish ko'nikmalarini o'rganing.",
    shortDescription: "Biznesingizni keyingi bosqichga olib chiqing",
    modules: [
      { title: "Biznes strategiya", topics: ["Bozor tahlili", "Biznes model canvas", "Raqobat tahlili"] },
      { title: "Moliyaviy boshqaruv", topics: ["Moliyaviy rejalashtirish", "Budjetlashtirish", "Investitsiyalar"] },
      { title: "Jamoani boshqarish", topics: ["HR asoslari", "Motivatsiya", "KPI tizimi"] },
    ],
    forWhom: ["Biznes egalari", "Menejerlar", "Startap asoschilari", "Tadbirkorlar"],
    skills: ["Strategik rejalashtirish", "Moliyaviy tahlil", "Jamoani boshqarish", "Marketing"],
    mentorId: "teacher-4",
    image: "",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "python-dasturlash",
    title: "Python Dasturlash",
    category: "Dasturlash",
    categorySlug: "programming",
    duration: "5 oy",
    price: "3 200 000",
    oldPrice: "5 000 000",
    level: "Boshlang'ich",
    description: "Python dasturlash tilini o'rganing va data science, automation va web development sohasida ishlang.",
    shortDescription: "Python bilan kelajakdagi kasbingizni boshlang",
    modules: [
      { title: "Python asoslari", topics: ["Sintaksis va ma'lumot turlari", "Funksiyalar", "OOP"] },
      { title: "Ma'lumotlar bilan ishlash", topics: ["Pandas", "NumPy", "Data visualization"] },
      { title: "Web Development", topics: ["Django asoslari", "REST API", "Database"] },
      { title: "Amaliy loyihalar", topics: ["Telegram bot", "Web scraping", "Automation"] },
    ],
    forWhom: ["Yangi boshlovchilar", "Talabalar", "Ma'lumotlar bilan ishlovchilar", "Karyerasini o'zgartirmoqchilar"],
    skills: ["Python", "Django", "Data Analysis", "Automation"],
    mentorId: "teacher-2",
    image: "",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: "target-reklama",
    title: "Targetli Reklama Kursi",
    category: "Marketing",
    categorySlug: "marketing",
    duration: "3 oy",
    price: "2 200 000",
    oldPrice: "3 500 000",
    level: "O'rta",
    description: "Facebook, Instagram va Google platformalarida samarali reklama kampaniyalarini yaratishni o'rganing.",
    shortDescription: "Reklama kampaniyalarini professional darajada boshqaring",
    modules: [
      { title: "Reklama asoslari", topics: ["Marketing funnel", "Auditoriya segmentatsiyasi", "A/B testing"] },
      { title: "Facebook & Instagram Ads", topics: ["Ads Manager", "Kreativ yaratish", "Retargeting"] },
      { title: "Google Ads", topics: ["Search reklama", "Display reklama", "YouTube reklama"] },
    ],
    forWhom: ["Marketologlar", "Biznes egalari", "Frilanserlar", "Reklama mutaxassislari"],
    skills: ["Facebook Ads", "Google Ads", "Analitika", "Kreativ yaratish"],
    mentorId: "teacher-1",
    image: "",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export const teachers: Teacher[] = [
  {
    id: "teacher-1",
    name: "Aziza Karimova",
    role: "Marketing bo'yicha ekspert",
    experience: "8 yillik tajriba",
    bio: "Yirik kompaniyalarda marketing strategiyalarini ishlab chiqqan. 500+ talaba o'qitgan.",
    courses: ["SMM Mutaxassis Kursi", "Targetli Reklama Kursi"],
    avatar: "",
  },
  {
    id: "teacher-2",
    name: "Jasur Alimov",
    role: "Senior Full-Stack Developer",
    experience: "10 yillik tajriba",
    bio: "Google va Epam kompaniyalarida ishlagan. Open-source loyihalarda faol ishtirokchi.",
    courses: ["Web Dasturlash (Full-Stack)", "Python Dasturlash"],
    avatar: "",
  },
  {
    id: "teacher-3",
    name: "Nilufar Rahimova",
    role: "UI/UX Dizayner",
    experience: "7 yillik tajriba",
    bio: "Xalqaro kompaniyalar uchun dizayn loyihalarini amalga oshirgan. Adobe Certified Expert.",
    courses: ["Grafik Dizayn Pro"],
    avatar: "",
  },
  {
    id: "teacher-4",
    name: "Bobur Toshmatov",
    role: "Biznes konsultant",
    experience: "12 yillik tajriba",
    bio: "100+ startaplarga konsalting xizmatlarini ko'rsatgan. MBA darajasi mavjud.",
    courses: ["Biznes Boshqaruv"],
    avatar: "",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Sardor Yusupov",
    role: "SMM mutaxassisi",
    text: "FBA Academy tufayli men SMM sohasida professional bo'ldim. Hozir oyiga 5 mln so'm daromad qilaman. Mentorlar juda tajribali va har doim yordam berishga tayyor.",
    avatar: "",
    rating: 5,
    courseName: "SMM Mutaxassis Kursi",
  },
  {
    id: "t-2",
    name: "Madina Aliyeva",
    role: "Frontend Developer",
    text: "Oldin umuman dasturlash bilmasdim. 6 oyda Web Dasturlash kursini tugatib, hozir IT kompaniyada ishlayman. Eng yaxshi investitsiyam!",
    avatar: "",
    rating: 5,
    courseName: "Web Dasturlash (Full-Stack)",
  },
  {
    id: "t-3",
    name: "Akbar Rahmonov",
    role: "Grafik dizayner",
    text: "Dizayn kursidan so'ng freelance ishlarni boshladim. Xorijiy mijozlar bilan ishlayman va daromadim 3 barobar oshdi.",
    avatar: "",
    rating: 5,
    courseName: "Grafik Dizayn Pro",
  },
  {
    id: "t-4",
    name: "Gulnora Mirzayeva",
    role: "Tadbirkor",
    text: "Biznes boshqaruv kursi menga o'z ishimni tizimlashtirish va jamoamni samarali boshqarishni o'rgatdi. Juda tavsiya qilaman!",
    avatar: "",
    rating: 5,
    courseName: "Biznes Boshqaruv",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "2026-yilda eng ko'p talab qilinadigan IT kasblar",
    excerpt: "Texnologiya sohasida qaysi kasblar eng yuqori maosh taklif qiladi va qanday ko'nikmalar talab qilinadi?",
    content: "Zamonaviy dunyo tezlik bilan raqamlashib bormoqda. 2026-yilda eng ko'p talab qilinadigan IT kasblar orasida Full-Stack Developer, Data Scientist, AI/ML Engineer va Cybersecurity mutaxassislari alohida o'rin tutadi. Bu kasblarni egallash uchun mustaqil o'rganish yoki professional kurslardan foydalanish mumkin.",
    category: "IT",
    date: "2026-02-15",
    readTime: "5 daqiqa",
    author: "Jasur Alimov",
    image: "",
  },
  {
    id: "blog-2",
    title: "SMM strategiya qanday tuziladi?",
    excerpt: "Muvaffaqiyatli SMM strategiyani 0 dan qanday yaratish mumkin? Amaliy maslahatlar.",
    content: "SMM strategiya yaratish uchun avvalo maqsadli auditoriyani aniqlash, raqobatchilarni tahlil qilish va kontent rejasini tuzish kerak. Har bir ijtimoiy tarmoq o'ziga xos xususiyatlarga ega va kontent shunga mos bo'lishi zarur.",
    category: "Marketing",
    date: "2026-02-10",
    readTime: "7 daqiqa",
    author: "Aziza Karimova",
    image: "",
  },
  {
    id: "blog-3",
    title: "UI/UX dizayn trendlari 2026",
    excerpt: "Yangi yildagi eng dolzarb dizayn trendlari va ularni loyihalaringizda qanday qo'llash mumkin.",
    content: "2026-yilda minimalizm, 3D elementlar, dark mode va micro-animatsiyalar dizayn sohasining asosiy trendlari hisoblanadi. Foydalanuvchi tajribasini yaxshilash uchun accessibility va responsive dizaynga alohida e'tibor qaratish kerak.",
    category: "Dizayn",
    date: "2026-01-28",
    readTime: "6 daqiqa",
    author: "Nilufar Rahimova",
    image: "",
  },
  {
    id: "blog-4",
    title: "O'zbekistonda startap ekotizimi",
    excerpt: "Mamlakatimizda texnologik startaplar qanday rivojlanmoqda va qanday imkoniyatlar mavjud?",
    content: "O'zbekistonda startap ekotizimi jadal rivojlanmoqda. IT Park, inkubatorlar va akseleratorlar yosh tadbirkorlarga qo'llab-quvvatlash ko'rsatmoqda. Investitsiya hajmi yildan-yilga oshib bormoqda.",
    category: "Biznes",
    date: "2026-01-20",
    readTime: "8 daqiqa",
    author: "Bobur Toshmatov",
    image: "",
  },
];

export const graduateResults: GraduateResult[] = [
  {
    id: "g-1",
    name: "Sardor Yusupov",
    beforeRole: "Ishsiz",
    afterRole: "SMM mutaxassisi",
    company: "Artel Electronics",
    salaryIncrease: "0 dan 5 000 000 UZS",
    avatar: "",
    story: "FBA Academy SMM kursini tugatgach, 2 hafta ichida ish topdim. Hozir yirik kompaniyada SMM bo'limini boshqaraman.",
    courseName: "SMM Mutaxassis Kursi",
  },
  {
    id: "g-2",
    name: "Madina Aliyeva",
    beforeRole: "Sotuvchi",
    afterRole: "Frontend Developer",
    company: "EPAM Systems",
    salaryIncrease: "2 000 000 dan 8 000 000 UZS",
    avatar: "",
    story: "Oldin do'konda ishlar edim. Web dasturlash kursidan so'ng hayotim butunlay o'zgardi. Hozir xalqaro kompaniyada ishlayman.",
    courseName: "Web Dasturlash (Full-Stack)",
  },
  {
    id: "g-3",
    name: "Akbar Rahmonov",
    beforeRole: "Talaba",
    afterRole: "Freelance dizayner",
    company: "Mustaqil",
    salaryIncrease: "0 dan 7 000 000 UZS",
    avatar: "",
    story: "Universitetda o'qib, dizayn kursini parallel tugatdim. Hozir xorijiy mijozlar bilan ishlab, oyiga $800+ daromad qilaman.",
    courseName: "Grafik Dizayn Pro",
  },
  {
    id: "g-4",
    name: "Dilshod Karimov",
    beforeRole: "Menejer",
    afterRole: "IT kompaniya asoschisi",
    company: "TechUz Solutions",
    salaryIncrease: "4 000 000 dan 15 000 000 UZS",
    avatar: "",
    story: "Biznes kursi menga o'z kompaniyamni ochishga ilhom va bilim berdi. 1 yil ichida 10 kishilik jamoa tuzdim.",
    courseName: "Biznes Boshqaruv",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Kurslar qancha davom etadi?",
    answer: "Kurslarimiz 3 oydan 6 oygacha davom etadi. Har bir kursning aniq muddati kurs sahifasida ko'rsatilgan.",
    category: "Umumiy",
  },
  {
    id: "faq-2",
    question: "Oldindan bilim talab qilinadimi?",
    answer: "Ko'pchilik kurslarimiz boshlang'ich darajadan boshlanadi. Siz hech qanday oldingi bilim yoki tajribasiz ham qo'shilishingiz mumkin.",
    category: "Umumiy",
  },
  {
    id: "faq-3",
    question: "Kurslar online yoki offline?",
    answer: "Kurslarimiz ham online, ham offline formatda mavjud. Siz o'zingizga qulay formatni tanlashingiz mumkin.",
    category: "O'quv jarayoni",
  },
  {
    id: "faq-4",
    question: "To'lov qanday amalga oshiriladi?",
    answer: "To'lov naqd, bank kartasi yoki bo'lib-bo'lib to'lash orqali amalga oshiriladi. 0% bo'lib to'lash imkoniyati mavjud.",
    category: "To'lov",
  },
  {
    id: "faq-5",
    question: "Kurs tugagach sertifikat beriladimi?",
    answer: "Ha, kursni muvaffaqiyatli tugatgan har bir talabaga FBA Academy sertifikati beriladi.",
    category: "Sertifikat",
  },
  {
    id: "faq-6",
    question: "Ishga joylashishda yordam beriladimi?",
    answer: "Ha, biz o'z bitiruvchilarimizga ish topishda faol yordam beramiz. Bizning hamkor kompaniyalarimiz bitiruvchilarimizni ish bilan ta'minlaydi.",
    category: "Ishga joylashish",
  },
  {
    id: "faq-7",
    question: "Mentorlar bilan shaxsiy muloqot qilish mumkinmi?",
    answer: "Ha, har bir talaba o'z mentoriga bevosita murojaat qilishi va shaxsiy maslahat olishi mumkin.",
    category: "O'quv jarayoni",
  },
  {
    id: "faq-8",
    question: "Pulni qaytarish mumkinmi?",
    answer: "Kursning birinchi 7 kuni ichida, agar kurs sizga mos kelmasa, to'liq pulni qaytarib berish kafolatlanadi.",
    category: "To'lov",
  },
];

export const stats = [
  { value: "5000+", label: "Bitiruvchilar" },
  { value: "92%", label: "Ishga joylashish" },
  { value: "50+", label: "Hamkor kompaniyalar" },
  { value: "4.9", label: "O'rtacha baho" },
];

export const partnerCompanies = [
  "Artel", "EPAM", "UzCard", "IT Park", "Payme", "Click", "Humans", "Oson", "MyTaxi", "Korzinka"
];

export const whyUsFeatures = [
  {
    title: "Ishga joylashish yordami",
    description: "Kursni tugatgach, biz sizga ish topishda faol yordam beramiz. 50+ hamkor kompaniyamiz bor.",
    icon: "Briefcase",
  },
  {
    title: "Real loyihalar",
    description: "O'quv jarayonida haqiqiy loyihalar ustida ishlaysiz va portfolioingizni shakllantirasiz.",
    icon: "FolderOpen",
  },
  {
    title: "Tajribali mentorlar",
    description: "Barcha mentorlarimiz sohasida 5+ yillik amaliy tajribaga ega mutaxassislar.",
    icon: "Users",
  },
  {
    title: "Sertifikat",
    description: "Kursni muvaffaqiyatli tugatgach, tanilgan FBA Academy sertifikatini olasiz.",
    icon: "Award",
  },
];
