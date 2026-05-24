import type { LocalizedText } from "./pick";

export type TestimonialI18n = { role: LocalizedText; text: LocalizedText };
export type GraduateI18n = {
  beforeRole: LocalizedText;
  afterRole: LocalizedText;
  story: LocalizedText;
  courseName: LocalizedText;
};
export type FaqI18n = { question: LocalizedText; answer: LocalizedText; category: LocalizedText };

export const TESTIMONIALS_I18N: Record<string, TestimonialI18n> = {
  "t-1": {
    role: {
      uz: "DipIFR sertifikat egasi",
      ru: "Обладатель сертификата DipIFR",
      en: "DipIFR certificate holder",
    },
    text: {
      uz: "FBA Academy'da DipIFR kursini o'qib, ACCA DipIFR sertifikatini muvaffaqiyatli qo'lga kiritdim. Darslar juda tushunarli va amaliy bo'ldi — har bir IFRS standartini real misollar orqali o'rgandim. Bu sertifikat menga xalqaro kompaniyalarda ishga kirish imkonini berdi.",
      ru: "Прошёл курс DipIFR в FBA Academy и успешно получил сертификат ACCA DipIFR. Занятия были очень понятными и практичными — каждый стандарт МСФО изучал на реальных примерах. Этот сертификат открыл мне возможность работать в международных компаниях.",
      en: "I completed the DipIFR course at FBA Academy and successfully earned the ACCA DipIFR certificate. The classes were very clear and practical — I learned every IFRS standard through real examples. This certificate gave me the opportunity to join international companies.",
    },
  },
  "t-2": {
    role: {
      uz: "DipIFR sertifikat egasi",
      ru: "Обладатель сертификата DipIFR",
      en: "DipIFR certificate holder",
    },
    text: {
      uz: "Men DipIFR imtihonini birinchi urinishda topshirdim. Mentorlar har bir savolimga javob berishdi va imtihonga tayyorgarlik strategiyasini tuzishda juda katta yordam berishdi. Sertifikat olganimdan keyin ish joyimda lavozimim oshdi.",
      ru: "Сдал экзамен DipIFR с первой попытки. Менторы отвечали на каждый мой вопрос и оказали огромную помощь в выработке стратегии подготовки к экзамену. После получения сертификата я получил повышение на работе.",
      en: "I passed the DipIFR exam on my first attempt. The mentors answered every question I had and were a great help in building my exam preparation strategy. After earning the certificate, I was promoted at work.",
    },
  },
  "t-3": {
    role: {
      uz: "DipIFR sertifikat egasi",
      ru: "Обладатель сертификата DipIFR",
      en: "DipIFR certificate holder",
    },
    text: {
      uz: "Kursdan oldin IFRS standartlari juda murakkab tuyulardi. FBA Academy ustozlari murakkab mavzularni oddiy tilda tushuntirishdi. Sertifikat olganim uchun juda xursandman — bu mening kasbiy o'sishimda katta qadam bo'ldi.",
      ru: "До курса стандарты МСФО казались мне очень сложными. Преподаватели FBA Academy объясняли сложные темы простым языком. Я очень рад, что получил сертификат — это большой шаг в моём профессиональном росте.",
      en: "Before the course, IFRS standards seemed very complex to me. FBA Academy instructors explained difficult topics in plain language. I'm very happy I earned the certificate — it was a major step in my professional growth.",
    },
  },
  "t-4": {
    role: {
      uz: "DipIFR sertifikat egasi",
      ru: "Обладатель сертификата DipIFR",
      en: "DipIFR certificate holder",
    },
    text: {
      uz: "FBA Academy meni DipIFR imtihoniga to'liq tayyorladi. Eng yoqqan tomoni — amaliy mashg'ulotlar va o'tgan yillar imtihon savollarini tahlil qilish edi. Sertifikatim bilan endi xalqaro moliya sohasida ishonch bilan qadam tashlayman.",
      ru: "FBA Academy полностью подготовила меня к экзамену DipIFR. Больше всего понравились практические занятия и разбор вопросов прошлых экзаменов. С сертификатом я уверенно делаю шаги в международной сфере финансов.",
      en: "FBA Academy fully prepared me for the DipIFR exam. What I liked most were the practical exercises and analysis of past exam questions. With my certificate, I now move forward confidently in international finance.",
    },
  },
  "t-5": {
    role: {
      uz: "DipIFR sertifikat egasi",
      ru: "Обладатель сертификата DipIFR",
      en: "DipIFR certificate holder",
    },
    text: {
      uz: "O'qish davomida har bir modul bo'yicha chuqur bilim oldim. Ustozlarning tajribasi va individual yondashuvi meni imtihonga tayyor qildi. Hozir sertifikatim bilan karyeramni yangi bosqichga olib chiqdim.",
      ru: "В процессе обучения я получил глубокие знания по каждому модулю. Опыт преподавателей и индивидуальный подход подготовили меня к экзамену. Сейчас с сертификатом я вывел карьеру на новый уровень.",
      en: "During my studies I gained in-depth knowledge in every module. The instructors' experience and individual approach prepared me for the exam. Now, with my certificate, I've taken my career to a new level.",
    },
  },
  "t-6": {
    role: {
      uz: "DipIFR sertifikat egasi",
      ru: "Обладатель сертификата DipIFR",
      en: "DipIFR certificate holder",
    },
    text: {
      uz: "FBA Academy'ni tanlagan eng to'g'ri qarorim bo'ldi. Darslar onlayn va oflayn formatda bo'lib, juda qulay edi. Imtihondan muvaffaqiyatli o'tganimda ustozlarimga minnatdor bo'ldim — ular haqiqatan ham professional.",
      ru: "Выбор FBA Academy стал моим лучшим решением. Занятия проходили онлайн и офлайн — это было очень удобно. Когда я успешно сдал экзамен, был благодарен преподавателям — они действительно профессионалы.",
      en: "Choosing FBA Academy was the best decision I made. Classes were available online and offline, which was very convenient. When I passed the exam successfully, I was grateful to my instructors — they are truly professional.",
    },
  },
  "t-7": {
    role: {
      uz: "DipIFR sertifikat egasi",
      ru: "Обладатель сертификата DipIFR",
      en: "DipIFR certificate holder",
    },
    text: {
      uz: "Kurs davomida nafaqat nazariy bilim, balki amaliy ko'nikmalar ham oldim. Real biznes holatlari ustida ishlash imtihonga tayyorgarlikda juda yordam berdi. DipIFR sertifikati mening rezyumemni yanada kuchli qildi.",
      ru: "На курсе я получил не только теоретические знания, но и практические навыки. Работа над реальными бизнес-кейсами очень помогла в подготовке к экзамену. Сертификат DipIFR сделал моё резюме ещё сильнее.",
      en: "During the course I gained not only theoretical knowledge but also practical skills. Working on real business cases was a great help in exam preparation. The DipIFR certificate made my résumé even stronger.",
    },
  },
  "t-8": {
    role: {
      uz: "DipIFR sertifikat egasi",
      ru: "Обладатель сертификата DipIFR",
      en: "DipIFR certificate holder",
    },
    text: {
      uz: "Ayol sifatida moliya sohasida o'z o'rnimni topishda FBA Academy menga katta yordam berdi. DipIFR sertifikatini olganim — mening eng katta yutuqlarimdan biri. Ustozlarga rahmat, ular har doim qo'llab-quvvatlashdi.",
      ru: "Как женщине, FBA Academy очень помогла мне найти своё место в сфере финансов. Получение сертификата DipIFR — одно из моих главных достижений. Спасибо преподавателям — они всегда поддерживали.",
      en: "As a woman in finance, FBA Academy helped me greatly in finding my place in the field. Earning the DipIFR certificate is one of my greatest achievements. Thank you to the instructors — they always supported me.",
    },
  },
};

export const GRADUATES_I18N: Record<string, GraduateI18n> = {
  "g-1": {
    beforeRole: {
      uz: "Oddiy buxgalter",
      ru: "Рядовой бухгалтер",
      en: "Junior accountant",
    },
    afterRole: {
      uz: "ACCA Audit Associate",
      ru: "ACCA Audit Associate",
      en: "ACCA Audit Associate",
    },
    story: {
      uz: "ACCA kursini tugatgach, Big Four firmalaridan biriga ishga kirdim. Hozir xalqaro audit loyihalarida ishtirok etaman.",
      ru: "После окончания курса ACCA устроился в одну из компаний Big Four. Сейчас участвую в международных аудиторских проектах.",
      en: "After completing the ACCA course, I joined one of the Big Four firms. I now take part in international audit projects.",
    },
    courseName: {
      uz: "ACCA",
      ru: "ACCA",
      en: "ACCA",
    },
  },
  "g-2": {
    beforeRole: {
      uz: "Universitetni tugatgan",
      ru: "Выпускник университета",
      en: "University graduate",
    },
    afterRole: {
      uz: "Financial Analyst",
      ru: "Financial Analyst",
      en: "Financial Analyst",
    },
    story: {
      uz: "Financial Analyst kursidan so'ng bankda tahlilchi sifatida ish topdim. Kurs davomida DCF va moliyaviy modellashtirish bo'yicha kuchli bazani qo'lga kiriتdim.",
      ru: "После курса Financial Analyst нашёл работу аналитиком в банке. На курсе получил прочную базу по DCF и финансовому моделированию.",
      en: "After the Financial Analyst course, I found a job as an analyst at a bank. During the course I built a strong foundation in DCF and financial modeling.",
    },
    courseName: {
      uz: "Financial Analyst",
      ru: "Financial Analyst",
      en: "Financial Analyst",
    },
  },
  "g-3": {
    beforeRole: {
      uz: "Junior buxgalter",
      ru: "Младший бухгалтер",
      en: "Junior accountant",
    },
    afterRole: {
      uz: "Bosh buxgalter",
      ru: "Главный бухгалтер",
      en: "Chief accountant",
    },
    story: {
      uz: "МСФО kursini tugatgach, xalqaro standartlarga asoslangan hisobot tizimini joriy etdim va bosh buxgalter lavozimiga ko'tarildim.",
      ru: "После курса МСФО внедрил систему отчётности на основе международных стандартов и получил повышение до главного бухгалтера.",
      en: "After completing the IFRS course, I implemented a reporting system based on international standards and was promoted to chief accountant.",
    },
    courseName: {
      uz: "МСФО",
      ru: "МСФО",
      en: "IFRS",
    },
  },
  "g-4": {
    beforeRole: {
      uz: "Buxgalter",
      ru: "Бухгалтер",
      en: "Accountant",
    },
    afterRole: {
      uz: "Moliyaviy direktor",
      ru: "Финансовый директор",
      en: "Chief financial officer",
    },
    story: {
      uz: "ACCA Strategic Professional kursidan so'ng DipIFR diplomini ham oldim. 2 yil ichida moliyaviy direktor lavozimiga ko'tarildim.",
      ru: "После курса ACCA Strategic Professional также получил диплом DipIFR. За 2 года вырос до должности финансового директора.",
      en: "After the ACCA Strategic Professional course, I also earned the DipIFR diploma. Within two years I was promoted to CFO.",
    },
    courseName: {
      uz: "ACCA Strategic Professional",
      ru: "ACCA Strategic Professional",
      en: "ACCA Strategic Professional",
    },
  },
};

export const FAQ_ITEMS_I18N: Record<string, FaqI18n> = {
  "faq-1": {
    question: {
      uz: "ACCA sertifikati qancha vaqtda olinadi?",
      ru: "За какой срок можно получить сертификат ACCA?",
      en: "How long does it take to earn the ACCA qualification?",
    },
    answer: {
      uz: "ACCA sertifikati odatda 2-3 yil ichida olinadi. Applied Knowledge (3 imtihon), Applied Skills (6 imtihon) va Strategic Professional (2-4 imtihon) bosqichlaridan iborat. FBA Academy'da har bir bosqichni alohida o'qishingiz mumkin.",
      ru: "Сертификат ACCA обычно получают за 2–3 года. Программа включает этапы Applied Knowledge (3 экзамена), Applied Skills (6 экзаменов) и Strategic Professional (2–4 экзамена). В FBA Academy каждый этап можно проходить отдельно.",
      en: "The ACCA qualification is typically completed in 2–3 years. It consists of Applied Knowledge (3 exams), Applied Skills (6 exams) and Strategic Professional (2–4 exams). At FBA Academy you can study each stage separately.",
    },
    category: {
      uz: "ACCA",
      ru: "ACCA",
      en: "ACCA",
    },
  },
  "faq-2": {
    question: {
      uz: "DipIFR imtihoni qachon o'tkaziladi?",
      ru: "Когда проводится экзамен DipIFR?",
      en: "When is the DipIFR exam held?",
    },
    answer: {
      uz: "DipIFR imtihoni yiliga 2 marta — iyun va dekabr oylarida o'tkaziladi. Biz sizni imtihonga to'liq tayyorlaymiz va ro'yxatdan o'tishda yordam beramiz.",
      ru: "Экзамен DipIFR проводится дважды в год — в июне и декабре. Мы полностью подготовим вас к экзамену и поможем с регистрацией.",
      en: "The DipIFR exam is held twice a year — in June and December. We fully prepare you for the exam and assist with registration.",
    },
    category: {
      uz: "DipIFR",
      ru: "DipIFR",
      en: "DipIFR",
    },
  },
  "faq-3": {
    question: {
      uz: "Kurslar online yoki offline?",
      ru: "Курсы проходят онлайн или офлайн?",
      en: "Are courses online or offline?",
    },
    answer: {
      uz: "Kurslarimiz ham online, ham offline formatda mavjud. Online formatda jonli darslar, yozib olingan materiallar va amaliy mashqlar taqdim etiladi. Offline darslar Toshkentda o'tkaziladi.",
      ru: "Наши курсы доступны как онлайн, так и офлайн. В онлайн-формате — живые занятия, записи материалов и практические задания. Офлайн-занятия проходят в Ташкенте.",
      en: "Our courses are available both online and offline. Online includes live classes, recorded materials and practical exercises. Offline classes are held in Tashkent.",
    },
    category: {
      uz: "Umumiy",
      ru: "Общие",
      en: "General",
    },
  },
  "faq-4": {
    question: {
      uz: "To'lov qanday amalga oshiriladi?",
      ru: "Как производится оплата?",
      en: "How is payment made?",
    },
    answer: {
      uz: "To'lov naqd, bank kartasi yoki bo'lib-bo'lib to'lash orqali amalga oshiriladi. 0% bo'lib to'lash imkoniyati mavjud — 3 yoki 6 oyga bo'lishingiz mumkin.",
      ru: "Оплата возможна наличными, банковской картой или в рассрочку. Доступна рассрочка 0% — на 3 или 6 месяцев.",
      en: "Payment can be made in cash, by bank card or in installments. 0% installment plans are available — split over 3 or 6 months.",
    },
    category: {
      uz: "To'lov",
      ru: "Оплата",
      en: "Payment",
    },
  },
  "faq-5": {
    question: {
      uz: "Kurs tugagach sertifikat beriladimi?",
      ru: "Выдаётся ли сертификат после окончания курса?",
      en: "Do you issue a certificate after completing a course?",
    },
    answer: {
      uz: "Ha, kursni muvaffaqiyatli tugatgan har bir talabaga FBA Academy sertifikati beriladi. ACCA va DipIFR kurslari uchun xalqaro imtihonlarga ham tayyorlaymiz.",
      ru: "Да, каждый студент, успешно завершивший курс, получает сертификат FBA Academy. По курсам ACCA и DipIFR мы также готовим к международным экзаменам.",
      en: "Yes, every student who successfully completes a course receives an FBA Academy certificate. For ACCA and DipIFR courses we also prepare you for international exams.",
    },
    category: {
      uz: "Sertifikat",
      ru: "Сертификат",
      en: "Certificate",
    },
  },
  "faq-6": {
    question: {
      uz: "Ishga joylashishda yordam beriladimi?",
      ru: "Помогаете ли с трудоустройством?",
      en: "Do you provide employment support?",
    },
    answer: {
      uz: "Ha, biz bitiruvchilarimizga ish topishda faol yordam beramiz. Big Four firmalar, banklar, investitsiya kompaniyalari va yirik korporatsiyalar bilan hamkorlik qilamiz.",
      ru: "Да, мы активно помогаем выпускникам найти работу. Сотрудничаем с компаниями Big Four, банками, инвестиционными компаниями и крупными корпорациями.",
      en: "Yes, we actively help our graduates find jobs. We partner with Big Four firms, banks, investment companies and major corporations.",
    },
    category: {
      uz: "Ishga joylashish",
      ru: "Трудоустройство",
      en: "Career",
    },
  },
  "faq-7": {
    question: {
      uz: "1C kursida qaysi versiya o'rgatiladi?",
      ru: "Какая версия 1С изучается на курсе?",
      en: "Which version of 1C is taught on the course?",
    },
    answer: {
      uz: "Biz 1C: Buxgalteriya 8.3 versiyasini o'rgatamiz — bu O'zbekistonda eng keng tarqalgan versiya. Kurs davomida real kompaniya ma'lumotlari bilan ishlaysiz.",
      ru: "Мы обучаем 1С: Бухгалтерия 8.3 — самой распространённой версии в Узбекистане. На курсе вы работаете с данными реальных компаний.",
      en: "We teach 1C: Accounting 8.3 — the most widely used version in Uzbekistan. During the course you work with real company data.",
    },
    category: {
      uz: "1C",
      ru: "1C",
      en: "1C",
    },
  },
  "faq-8": {
    question: {
      uz: "Financial Modeling kursida qaysi dasturlar ishlatiladi?",
      ru: "Какие программы используются на курсе Financial Modeling?",
      en: "Which tools are used on the Financial Modeling course?",
    },
    answer: {
      uz: "Asosan Excel'da ishlaymiz (ilg'or formulalar, VBA). Bundan tashqari Power BI va Python (Pandas) asoslarini ham o'rganasiz.",
      ru: "В основном работаем в Excel (продвинутые формулы, VBA). Также изучаете основы Power BI и Python (Pandas).",
      en: "We mainly work in Excel (advanced formulas, VBA). You also learn the basics of Power BI and Python (Pandas).",
    },
    category: {
      uz: "Financial Modeling",
      ru: "Financial Modeling",
      en: "Financial Modeling",
    },
  },
};

export const STATS_I18N: Record<string, LocalizedText> = {
  "O'qitilgan talabalar": {
    uz: "O'qitilgan talabalar",
    ru: "Обученных студентов",
    en: "Students trained",
  },
  "Ishga joylashish darajasi": {
    uz: "Ishga joylashish darajasi",
    ru: "Уровень трудоустройства",
    en: "Employment rate",
  },
  "Hamkor kompaniyalar": {
    uz: "Hamkor kompaniyalar",
    ru: "Компании-партнёры",
    en: "Partner companies",
  },
  "Tashkil etilgan yil": {
    uz: "Tashkil etilgan yil",
    ru: "Год основания",
    en: "Year founded",
  },
  "Individual o'quvchilar": {
    uz: "Individual o'quvchilar",
    ru: "Индивидуальных учеников",
    en: "Individual learners",
  },
  "Ishga joylashish": {
    uz: "Ishga joylashish",
    ru: "Трудоустройство",
    en: "Employment",
  },
  "O'rtacha baho": {
    uz: "O'rtacha baho",
    ru: "Средняя оценка",
    en: "Average rating",
  },
};
