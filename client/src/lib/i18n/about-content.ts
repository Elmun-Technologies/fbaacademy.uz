import type { Language } from "@/lib/translations";
import type { LocalizedText } from "./pick";

export type AboutDirection = { title: string; desc: LocalizedText };
export type AboutStep = { num: string; title: LocalizedText; desc: LocalizedText };
export type AboutFaq = { q: LocalizedText; a: LocalizedText };

export const ABOUT_DIRECTIONS: AboutDirection[] = [
  {
    title: "ACCA",
    desc: {
      uz: "O'zbekistondagi ACCA kurslarimiz Applied Knowledge, Applied Skills va Strategic Professional bosqichlarini o'z ichiga oladi.",
      ru: "Наши курсы ACCA в Узбекистане охватывают этапы Applied Knowledge, Applied Skills и Strategic Professional.",
      en: "Our ACCA courses in Uzbekistan cover Applied Knowledge, Applied Skills and Strategic Professional stages.",
    },
  },
  {
    title: "DipIFR",
    desc: {
      uz: "Xalqaro moliyaviy hisobot standartlari bo'yicha ACCA diplomiga tayyorlash. Yiliga 2 marta imtihon.",
      ru: "Подготовка к диплому ACCA по международным стандартам финансовой отчётности. Экзамен дважды в год.",
      en: "Preparation for the ACCA Diploma in International Financial Reporting. Exams twice a year.",
    },
  },
  {
    title: "IFRS",
    desc: {
      uz: "Xalqaro moliyaviy hisobot standartlarini amaliyotda qo'llash. Professional buxgalterlar uchun.",
      ru: "Практическое применение международных стандартов финансовой отчётности для профессиональных бухгалтеров.",
      en: "Practical application of international financial reporting standards for professional accountants.",
    },
  },
  {
    title: "Financial Analyst",
    desc: {
      uz: "DCF, kompaniya baholash va investitsiya tahlili. Real loyihalar bilan amaliy ko'nikmalar.",
      ru: "DCF, оценка компаний и инвестиционный анализ. Практические навыки на реальных проектах.",
      en: "DCF, company valuation and investment analysis. Practical skills through real projects.",
    },
  },
];

export const ABOUT_STEPS: AboutStep[] = [
  {
    num: "01",
    title: { uz: "Kursni tanlang", ru: "Выберите курс", en: "Choose a course" },
    desc: {
      uz: "Ekspert o'qituvchilarimiz tayyorlagan kurslar bilan tanishing va o'zingizga mos yo'nalishni tanlang.",
      ru: "Ознакомьтесь с программами наших экспертов и выберите подходящее направление.",
      en: "Explore courses designed by our expert instructors and choose the path that fits you.",
    },
  },
  {
    num: "02",
    title: { uz: "Ro'yxatdan o'ting", ru: "Запишитесь", en: "Enroll" },
    desc: {
      uz: "Bepul konsultatsiya oling, to'lov formatini tanlang va o'quv jarayonini boshlang.",
      ru: "Получите бесплатную консультацию, выберите формат оплаты и начните обучение.",
      en: "Get a free consultation, choose a payment plan and start learning.",
    },
  },
  {
    num: "03",
    title: { uz: "O'qib, amaliyot qiling", ru: "Учитесь и практикуйтесь", en: "Learn and practice" },
    desc: {
      uz: "Tajribali mentorlar nazoratida o'rganing. Mock imtihonlar va real loyihalar bilan mustahkamlang.",
      ru: "Учитесь под руководством опытных менторов. Закрепляйте знания на mock-экзаменах и реальных проектах.",
      en: "Learn under experienced mentors. Reinforce skills with mock exams and real projects.",
    },
  },
  {
    num: "04",
    title: { uz: "Ish toping", ru: "Найдите работу", en: "Find a job" },
    desc: {
      uz: "Bitiruvchilarimizning 92% o'qishni tugatgandan so'ng 3 oy ichida ish topadi.",
      ru: "92% наших выпускников находят работу в течение 3 месяцев после окончания курса.",
      en: "92% of our graduates find a job within 3 months of completing their course.",
    },
  },
];

export const ABOUT_FAQ: AboutFaq[] = [
  {
    q: {
      uz: "Nima uchun odamlar ACCAni tanlashadi?",
      ru: "Почему люди выбирают ACCA?",
      en: "Why do people choose ACCA?",
    },
    a: {
      uz: "ACCA bilan global buxgalteriya va audit standartlarini o'rganishingiz mumkin. ACCA a'zosi sifatida malaka olasiz va xorijda ish izlash oson bo'ladi. Ushbu buxgalteriya standartlarini qabul qilgan istalgan mamlakatda ishlashingiz mumkin.",
      ru: "ACCA позволяет изучить глобальные стандарты бухгалтерии и аудита. Как член ACCA вы получаете признанную квалификацию и больше возможностей для работы за рубежом. Вы можете работать в любой стране, принявшей эти стандарты.",
      en: "ACCA lets you master global accounting and audit standards. As an ACCA member you gain a recognized qualification and easier access to international careers. You can work in any country that adopts these standards.",
    },
  },
  {
    q: {
      uz: "ACCA'ni o'qish uchun ingliz tilini bilish kerakmi?",
      ru: "Нужен ли английский для обучения ACCA?",
      en: "Do I need English to study ACCA?",
    },
    a: {
      uz: "Imtihonlar ingliz tilida bo'ladi, shuning uchun B2 darajasida ingliz tili bilimi tavsiya etiladi. Biroq bizning o'qituvchilarimiz o'zbek va rus tillarida tushuntiradi, shuning uchun dastlabki bosqichda ingliz tilini parallel ravishda o'rganish mumkin.",
      ru: "Экзамены проводятся на английском, поэтому рекомендуется уровень B2. Однако наши преподаватели объясняют на узбекском и русском, поэтому на начальном этапе можно параллельно улучшать английский.",
      en: "Exams are in English, so B2 level is recommended. However, our instructors explain in Uzbek and Russian, so you can improve your English in parallel at the early stages.",
    },
  },
  {
    q: {
      uz: "Kimlar chegirma oladi?",
      ru: "Кто получает скидку?",
      en: "Who gets a discount?",
    },
    a: {
      uz: "Talabalar, ko'p farzandli oilalar, nogironligi bo'lgan shaxslar va referral dasturi orqali do'stini tavsiya qilganlar chegirma oladi. Batafsil ma'lumot uchun administrator bilan bog'laning.",
      ru: "Скидки доступны студентам, многодетным семьям, людям с инвалидностью и участникам реферальной программы. Свяжитесь с администратором для подробностей.",
      en: "Discounts are available for students, large families, people with disabilities and referral program participants. Contact our administrator for details.",
    },
  },
  {
    q: {
      uz: "Katta jamoalar uchun maxsus narx bormi?",
      ru: "Есть ли специальные цены для больших команд?",
      en: "Are there special prices for large teams?",
    },
    a: {
      uz: "Ha, 5 va undan ortiq ishchi yuboradigan korporativ mijozlar uchun maxsus narxlar va individual ta'lim dasturlari mavjud. Korporativ treninglar bo'yicha bog'laning.",
      ru: "Да, для корпоративных клиентов, отправляющих 5 и более сотрудников, действуют специальные цены и индивидуальные программы. Свяжитесь с нами по корпоративному обучению.",
      en: "Yes, corporate clients sending 5 or more employees receive special pricing and tailored training programs. Contact us about corporate training.",
    },
  },
  {
    q: {
      uz: "ACCA o'qisam qayerda va qanday lavozimda ishlay olaman?",
      ru: "Где и на каких должностях можно работать после ACCA?",
      en: "Where and in what roles can I work after ACCA?",
    },
    a: {
      uz: "ACCA bilan Big Four (Deloitte, PwC, KPMG, EY), banklar, auditorlik firmalari, yirik korporatsiyalar va davlat tashkilotlarida moliyaviy menejer, bosh buxgalter, audit mutaxassisi va moliyaviy direktor lavozimlarida ishlashingiz mumkin.",
      ru: "С ACCA вы можете работать в Big Four (Deloitte, PwC, KPMG, EY), банках, аудиторских фирмах, крупных корпорациях и госсекторе на позициях финансового менеджера, главного бухгалтера, аудитора и финансового директора.",
      en: "With ACCA you can work at Big Four firms (Deloitte, PwC, KPMG, EY), banks, audit firms, large corporations and public sector roles as financial manager, chief accountant, audit specialist or finance director.",
    },
  },
];

export function aboutFaqForLang(lang: Language) {
  return ABOUT_FAQ.map((f) => ({ question: f.q[lang], answer: f.a[lang] }));
}
