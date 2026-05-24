import { ACADEMY_INSTRUCTORS } from "@/lib/instructors";
import { PARTNER_COMPANY_DISPLAY_ORDER, partnerCompaniesWithLogos } from "@/lib/partner-logos";
import { getBootstrapArray, type Teacher, type Testimonial, type GraduateResult, type FAQItem } from "./data-types";

const UNSPLASH = "https://images.unsplash.com";

export const teachers: Teacher[] =
  getBootstrapArray<Teacher>("teachers") ??
  ACADEMY_INSTRUCTORS.map((i) => ({
    id: i.id,
    name: i.name,
    role: i.role,
    experience: i.experience,
    bio: i.bio,
    courses: i.courses,
    avatar: i.photo,
  }));

export const testimonials: Testimonial[] = getBootstrapArray<Testimonial>("testimonials") ?? [
  {
    id: "t-1",
    name: "Shokhrukh Yangiboev",
    role: "DipIFR sertifikat egasi",
    text: "FBA Academy'da DipIFR kursini o'qib, ACCA DipIFR sertifikatini muvaffaqiyatli qo'lga kiritdim. Darslar juda tushunarli va amaliy bo'ldi — har bir IFRS standartini real misollar orqali o'rgandim. Bu sertifikat menga xalqaro kompaniyalarda ishga kirish imkonini berdi.",
    rating: 5,
    courseName: "DipIFR",
  },
  {
    id: "t-2",
    name: "Irodakhon Talatkhon",
    role: "DipIFR sertifikat egasi",
    text: "Men DipIFR imtihonini birinchi urinishda topshirdim. Mentorlar har bir savolimga javob berishdi va imtihonga tayyorgarlik strategiyasini tuzishda juda katta yordam berishdi. Sertifikat olganimdan keyin ish joyimda lavozimim oshdi.",
    rating: 5,
    courseName: "DipIFR",
  },
  {
    id: "t-3",
    name: "Temur Uralov",
    role: "DipIFR sertifikat egasi",
    text: "Kursdan oldin IFRS standartlari juda murakkab tuyulardi. FBA Academy ustozlari murakkab mavzularni oddiy tilda tushuntirishdi. Sertifikat olganim uchun juda xursandman — bu mening kasbiy o'sishimda katta qadam bo'ldi.",
    rating: 5,
    courseName: "DipIFR",
  },
  {
    id: "t-4",
    name: "Nigora Muminova",
    role: "DipIFR sertifikat egasi",
    text: "FBA Academy meni DipIFR imtihoniga to'liq tayyorladi. Eng yoqqan tomoni — amaliy mashg'ulotlar va o'tgan yillar imtihon savollarini tahlil qilish edi. Sertifikatim bilan endi xalqaro moliya sohasida ishonch bilan qadam tashlayman.",
    rating: 5,
    courseName: "DipIFR",
  },
  {
    id: "t-5",
    name: "Jakhongir Matchanov",
    role: "DipIFR sertifikat egasi",
    text: "O'qish davomida har bir modul bo'yicha chuqur bilim oldim. Ustozlarning tajribasi va individual yondashuvi meni imtihonga tayyor qildi. Hozir sertifikatim bilan karyeramni yangi bosqichga olib chiqdim.",
    rating: 5,
    courseName: "DipIFR",
  },
  {
    id: "t-6",
    name: "Dilmurod Almatov",
    role: "DipIFR sertifikat egasi",
    text: "FBA Academy'ni tanlagan eng to'g'ri qarorim bo'ldi. Darslar onlayn va oflayn formatda bo'lib, juda qulay edi. Imtihondan muvaffaqiyatli o'tganimda ustozlarimga minnatdor bo'ldim — ular haqiqatan ham professional.",
    rating: 5,
    courseName: "DipIFR",
  },
  {
    id: "t-7",
    name: "Bakhromjon Musaev",
    role: "DipIFR sertifikat egasi",
    text: "Kurs davomida nafaqat nazariy bilim, balki amaliy ko'nikmalar ham oldim. Real biznes holatlari ustida ishlash imtihonga tayyorgarlikda juda yordam berdi. DipIFR sertifikati mening rezyumemni yanada kuchli qildi.",
    rating: 5,
    courseName: "DipIFR",
  },
  {
    id: "t-8",
    name: "Diyara Nazarova",
    role: "DipIFR sertifikat egasi",
    text: "Ayol sifatida moliya sohasida o'z o'rnimni topishda FBA Academy menga katta yordam berdi. DipIFR sertifikatini olganim — mening eng katta yutuqlarimdan biri. Ustozlarga rahmat, ular har doim qo'llab-quvvatlashdi.",
    rating: 5,
    courseName: "DipIFR",
  },
];

export const graduateResults: GraduateResult[] = getBootstrapArray<GraduateResult>("graduateResults") ?? [
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
    videoId: "eTriMFVGcYg",
  },
  {
    id: "g-2",
    name: "Madina Aliyeva",
    beforeRole: "Universitetni tugatgan",
    afterRole: "Financial Analyst",
    company: "Hamkorbank",
    salaryIncrease: "0 → 12 000 000 UZS",
    avatar: `${UNSPLASH}/photo-1494790108755-2616b612b8e4?w=400&h=400&fit=crop&crop=face`,
    story: "Financial Analyst kursidan so'ng bankda tahlilchi sifatida ish topdim. Kurs davomida DCF va moliyaviy modellashtirish bo'yicha kuchli bazani qo'lga kiriتdim.",
    courseName: "Financial Analyst",
    videoId: "PU8ZCSuHWXE",
  },
  {
    id: "g-3",
    name: "Akbar Rahmonov",
    beforeRole: "Junior buxgalter",
    afterRole: "Bosh buxgalter",
    company: "Artel",
    salaryIncrease: "3 000 000 → 12 000 000 UZS",
    avatar: `${UNSPLASH}/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face`,
    story: "МСФО kursini tugatgach, xalqaro standartlarga asoslangan hisobot tizimini joriy etdim va bosh buxgalter lavozimiga ko'tarildim.",
    courseName: "МСФО",
    videoId: "ZV1UKMREypM",
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
    videoId: "R0eCSc9Efqc",
  },
];

export const faqItems: FAQItem[] = getBootstrapArray<FAQItem>("faqItems") ?? [
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

export const stats = getBootstrapArray<{ value: string; label: string }>("stats") ?? [
  { value: "3 500+", label: "Individual o'quvchilar" },
  { value: "92%", label: "Ishga joylashish" },
  { value: "50+", label: "Hamkor kompaniyalar" },
  { value: "4.9", label: "O'rtacha baho" },
];

export const partnerCompanies = partnerCompaniesWithLogos(
  getBootstrapArray<string>("partnerCompanies") ?? [...PARTNER_COMPANY_DISPLAY_ORDER],
);

export const whyUsFeatures = getBootstrapArray<{ title: string; description: string; icon: string }>("whyUsFeatures") ?? [
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
