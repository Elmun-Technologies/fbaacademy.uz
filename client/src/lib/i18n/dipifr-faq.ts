import type { Language } from "@/lib/translations";

export type DipifrFaqItem = { q: string; a: string };
export type DipifrFaqCategory = { id: string; label: string; items: DipifrFaqItem[] };

const FAQ_STUDY_UZ: DipifrFaqItem[] = [
  {
    q: "Bu kurs menga mos ekanligini qanday bilaman?",
    a: "Ro'yxatdan o'ting va birinchi darsni bepul o'ting — format va mazmunga mos kelishini bilib olasiz. Keyin to'liq kursga yozilasiz. Mos kelmasa, menejerimiz boshqa dastur tavsiya qiladi.",
  },
  {
    q: "Kurs qanday formatda o'tiladi?",
    a: "Onlayn jonli darslar + yozuvlar. 2 yil davomida materiallariga kirish. Telegram guruhida kurator bilan doimiy aloqa.",
  },
  {
    q: "O'quv materiallarini yuklab olish mumkinmi?",
    a: "Ha, ma'ruza konspektlari, amaliy misollar va test materiallari yuklab olinadi. Vebinar yozuvlari platformada saqlanadiganlar.",
  },
  {
    q: "Qanday qilib men siz talabangizligimni isbotlashim mumkin?",
    a: "O'qishdan oldin barcha talabalarga shartnoma tuziladi. Kurs yakunida yuridik shaxslar uchun bajarish dalolatnomasi, jismoniy shaxslar uchun — diplom va sertifikat beriladi.",
  },
];

const FAQ_EXAM_UZ: DipifrFaqItem[] = [
  {
    q: "DipIFR imtihoni yiliga necha marta bo'ladi?",
    a: "Yiliga 2 marta: iyun va dekabr oylarida. Ro'yxatdan o'tish ACCA rasmiy sayti orqali amalga oshiriladi.",
  },
  {
    q: "DipIFR imtihonini topshira olmasam nima qilaman?",
    a: "Imtihon muvaffaqiyatsiz yakunlanganida, keyingi sessiyaga tayyorgarlik uchun qo'shimcha materiallar va individual konsultatsiya beriladi. Siz qayta tayyorgarlik ko'rib imtihonni topshirasiz.",
  },
  {
    q: "Imtihon qaysi tilda o'tkaziladi?",
    a: "DipIFR-rus — rus tilida. FBA Academy da kurs o'zbek tilida o'tkaziladi, rus tilidagi terminologiya ham parallel o'rgatiladi.",
  },
  {
    q: "Imtihon yakunida qanday hujjat beriladi?",
    a: "ACCA DipIFR diplomini ACCA rasmiy beradi — bu dunyo bo'yicha tan olingan xalqaro diplom. Bundan tashqari FBA Academy o'z sertifikatini ham beradi.",
  },
];

const FAQ_PAY_UZ: DipifrFaqItem[] = [
  {
    q: "Bo'lib to'lash imkoniyati bormi?",
    a: "Ha, bir necha variantda: to'lovni bo'lish, bank-hamkor orqali kreditga olish. Tafsilot va shartlar uchun menejerimizga murojaat qiling.",
  },
  {
    q: "Kurs mos kelmasa, pulni qaytarib berasizlarmi?",
    a: "Ha, birinchi 7 kun ichida kurs mos kelmasa, to'liq qaytarib beramiz — hech qanday savol-javovsiz.",
  },
  {
    q: "O'qish jarayonida to'lovni to'xtatish mumkinmi?",
    a: "Ha, sababli holatlarda o'qishni vaqtincha to'xtatish mumkin. Menejerimiz individual yechim taklif qiladi.",
  },
];

const FAQ_STUDY_EN: DipifrFaqItem[] = [
  {
    q: "How do I know if this course fits me?",
    a: "Register and attend the first lesson free — you will see if the format and depth match your goals. You can then enrol for the full program; if it is not a fit, our manager can suggest alternatives.",
  },
  {
    q: "How is the course delivered?",
    a: "Live online sessions plus recordings. Two years of access to materials. Ongoing curator support in a Telegram group.",
  },
  {
    q: "Can I download study materials?",
    a: "Yes — lecture notes, practice examples and test packs can be downloaded. Webinar replays remain on the platform.",
  },
  {
    q: "How is completion documented?",
    a: "A contract is signed before you start. After completion, legal entities receive an acceptance certificate; individuals receive diplomas and certificates as applicable.",
  },
];

const FAQ_EXAM_EN: DipifrFaqItem[] = [
  {
    q: "How often is the DipIFR exam held?",
    a: "Twice a year — June and December. Registration is handled through the official ACCA website.",
  },
  {
    q: "What if I do not pass the exam?",
    a: "We provide extra materials and individual consultation for the next session. You prepare again and re-sit the exam.",
  },
  {
    q: "In which language is the exam?",
    a: "DipIFR-Rus is examined in Russian. Classes at FBA Academy are in Uzbek, with Russian terminology covered in parallel.",
  },
  {
    q: "Which credential do I receive?",
    a: "ACCA awards the official DipIFR diploma — a globally recognised qualification. FBA Academy also issues its own certificate.",
  },
];

const FAQ_PAY_EN: DipifrFaqItem[] = [
  {
    q: "Can I pay in instalments?",
    a: "Yes — several instalment options and partner bank financing are available. Ask our manager for current terms.",
  },
  {
    q: "Do you refund if the course is not a fit?",
    a: "Yes — a full refund within the first 7 days if the programme does not suit you, no questions asked.",
  },
  {
    q: "Can I pause payments while studying?",
    a: "For justified cases you can pause your studies; our manager will propose an individual arrangement.",
  },
];

const FAQ_STUDY_RU: DipifrFaqItem[] = [
  {
    q: "Как понять, подходит ли мне курс?",
    a: "Запишитесь и пройдите первое занятие бесплатно — оцените формат и уровень. Затем можно оформить полный курс; если не подойдёт, менеджер предложит альтернативу.",
  },
  {
    q: "В каком формате проходит обучение?",
    a: "Живые онлайн-занятия и записи. Доступ к материалам 2 года. Поддержка куратора в Telegram.",
  },
  {
    q: "Можно ли скачивать материалы?",
    a: "Да — конспекты, практические задания и тесты. Записи вебинаров хранятся на платформе.",
  },
  {
    q: "Как подтверждается обучение?",
    a: "Перед стартом заключается договор. По завершении для юрлиц — акт, для физлиц — дипломы и сертификаты.",
  },
];

const FAQ_EXAM_RU: DipifrFaqItem[] = [
  {
    q: "Сколько раз в год экзамен DipIFR?",
    a: "Дважды в год — июнь и декабрь. Регистрация на официальном сайте ACCA.",
  },
  {
    q: "Что если не сдать экзамен?",
    a: "Даём дополнительные материалы и индивидуальную консультацию к следующей сессии. Готовитесь и пересдаёте.",
  },
  {
    q: "На каком языке экзамен?",
    a: "DipIFR-Rus — экзамен на русском. Занятия в академии на узбекском, русская терминология параллельно.",
  },
  {
    q: "Какой документ выдаётся?",
    a: "Официальный диплом ACCA DipIFR — международно признанная квалификация. Плюс сертификат FBA Academy.",
  },
];

const FAQ_PAY_RU: DipifrFaqItem[] = [
  {
    q: "Есть ли рассрочка?",
    a: "Да — несколько вариантов рассрочки и кредит через банки-партнёры. Уточняйте условия у менеджера.",
  },
  {
    q: "Возврат, если курс не подошёл?",
    a: "Да — полный возврат в течение первых 7 дней без вопросов.",
  },
  {
    q: "Можно ли приостановить обучение?",
    a: "В обоснованных случаях возможна пауза; менеджер предложит индивидуальное решение.",
  },
];

export function dipifrFaqCategories(lang: Language): DipifrFaqCategory[] {
  if (lang === "en") {
    return [
      { id: "study", label: "Program", items: FAQ_STUDY_EN },
      { id: "exam", label: "Exam", items: FAQ_EXAM_EN },
      { id: "payment", label: "Payment", items: FAQ_PAY_EN },
    ];
  }
  if (lang === "ru") {
    return [
      { id: "study", label: "Обучение", items: FAQ_STUDY_RU },
      { id: "exam", label: "Экзамен", items: FAQ_EXAM_RU },
      { id: "payment", label: "Оплата", items: FAQ_PAY_RU },
    ];
  }
  return [
    { id: "study", label: "O'qish", items: FAQ_STUDY_UZ },
    { id: "exam", label: "Imtihon", items: FAQ_EXAM_UZ },
    { id: "payment", label: "To'lov", items: FAQ_PAY_UZ },
  ];
}

export function dipifrFaqFlat(lang: Language): DipifrFaqItem[] {
  return dipifrFaqCategories(lang).flatMap((c) => c.items);
}
