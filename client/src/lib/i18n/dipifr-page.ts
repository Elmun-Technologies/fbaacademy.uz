import type { Language } from "@/lib/translations";
import type { SpForWhom } from "@/lib/i18n/strategic-professional-page";
import { dipifrFaqFlat } from "@/lib/i18n/dipifr-faq";

export type DipifrFeatureText = { title: string; desc: string };

export type DipifrPageI18n = {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  ogTitle: string;
  ogDescription: string;
  breadcrumbHome: string;
  breadcrumbCourses: string;
  breadcrumbCourseName: string;
  heroBadge: string;
  heroTitleLine1: string;
  heroTitleHighlight: string;
  heroDesc: string;
  heroCta: string;
  heroStatDuration: string;
  heroStatAccess: string;
  heroStatFormat: string;
  heroStatDocument: string;
  heroStatAccessValue: string;
  heroStatFormatValue: string;
  heroStatDocumentValue: string;
  formTitle: string;
  formHint: string;
  formFootnote: string;
  sectionWhatTitle: string;
  sectionWhatLead: string;
  whatBullets: string[];
  sectionFeaturesTitle: string;
  sectionFeaturesLead: string;
  features: DipifrFeatureText[];
  sectionForWhomTitle: string;
  sectionForWhomLead: string;
  forWhom: SpForWhom[];
  sectionWhyTitle: string;
  sectionWhyLead: string;
  whyDipifr: string[];
  sectionFlowTitle: string;
  sectionFlowLead: string;
  courseFlow: { title: string; desc: string }[];
  sectionExpertsTitle: string;
  sectionExpertsLead: string;
  reviewsTitle: string;
  reviewsSubtitle: string;
  certificatesTitle: string;
  certificatesSubtitle: string;
  sectionOutcomesTitle: string;
  sectionOutcomesLead: string;
  outcomes: string[];
  faqSectionTitle: string;
  finalTitle: string;
  finalDesc: string;
  finalBullets: string[];
  finalFormTitle: string;
  finalFormHint: string;
  jsonLdName: string;
  jsonLdDesc: string;
};

const FEATURES_UZ: DipifrFeatureText[] = [
  {
    title: "IFRS asosida hisobotlar tayyorlash",
    desc: "IFRS asosida hisobotlarni tayyorlash, ularga qilinadigan korrektirovkalarni to'g'ri amalga oshirish.",
  },
  {
    title: "Konsolidatsiyalashgan hisobotlar",
    desc: "IFRS asosida Konsolidatsiyalashgan hisobotlarni tayyorlash va ularni to'g'ri tahlil qilish.",
  },
  {
    title: "Moliyaviy bayonotlar tahlili",
    desc: "IFRS asosida hisobotlarni tushunib tahlil qilish va audit asoslari.",
  },
  {
    title: "Amaliy mashg'ulotlar",
    desc: "Real kompaniyalar misolida amaliy keyslar — moliyaviy modeling asoslari, consolidation va revenue recognition.",
  },
  {
    title: "Mock-exams va sinov imtihonlari",
    desc: "Imtihon savollarini yechish ko'nikmasi, vaqt boshqarish va javoblarni professional rasmiylashtirish.",
  },
  {
    title: "ACCA DipIFR diplomi",
    desc: "Xalqaro kompaniyalar, Big4 va moliya institutlari qabul qiladigan ACCA DipIFR diplomi. Yiliga 2 marta imtihon.",
  },
];

const FOR_WHOM_UZ: SpForWhom[] = [
  { emoji: "📊", title: "Buxgalterlar", desc: "IFRS asosida hisobot yuritishni amaliy darajada o'zlashtirmoqchi bo'lgan buxgalterlar uchun." },
  { emoji: "💼", title: "Moliyachilar", desc: "Moliyaviy hisobotlarni tahlil qilish va xalqaro standartlarda ishlashni xohlovchilar uchun." },
  { emoji: "🔍", title: "Auditorlar", desc: "Hisobotlarni xalqaro talablar bo'yicha tekshirish va tahlil qilishni chuqurlashtirish uchun." },
  { emoji: "📋", title: "Soliq sohasidagi mutaxassislar", desc: "IFRS va soliq hisobi o'rtasidagi farqlarni tushunib, professional darajaga chiqmoqchi bo'lganlar." },
  { emoji: "🏆", title: "Bosh buxgalter bo'lishni rejalayotganlar", desc: "Karyerasini yuqori pog'onaga olib chiqmoqchi, MSFO bilimini tasdiqlashni xohlovchilar." },
  { emoji: "🌍", title: "МСФО bilan ishlaydigan mutaxassislar va xalqaro karyera maqsad qilganlar", desc: "Moliya, buxgalteriya va auditda 3 yillik tajribaga ega bo'lib, Big4 va xalqaro kompaniyalarda ishlashni rejalashtiradigan mutaxassislar." },
];

const WHY_UZ = [
  "МСФОni shunchaki bilish emas, tushunib ishlash",
  "Rahbariyat va auditorlar bilan bir tilda gaplashish",
  "Karyerada ustunlik va raqobatbardoshlik — xalqaro darajaga chiqish",
  "Xalqaro diplom orqali bilimni tasdiqlash",
  "Big4 (Deloitte, PwC, EY, KPMG) va yirik audit firmalarida ishlash",
  "МСФО asosida ishlovchi kompaniyalarda ishlash uchun zarur malaka",
];

const FLOW_UZ = [
  { title: "1-bosqich: O'qitish", desc: "IFRS nazariyasi, standartlarning mantiqi va hisobot tuzilmasi bo'yicha tizimli darslar. Haftasiga 3 marta, onlayn va oflayn formatda." },
  { title: "2-bosqich: Takrorlash", desc: "Asosiy mavzularni mustahkamlash, real kompaniyalar misolida amaliy mashg'ulotlar, savol-javob va muhokama sessiyalari." },
  { title: "3-bosqich: Mock-exams (Sinov imtihonlari)", desc: "Imtihon savollarini yechish ko'nikmasi, vaqtni boshqarish va javoblarni imtihon standartida yozish bo'yicha mashqlar." },
];

const OUT_UZ = [
  "MSFO asosida hisobotlarni tayyorlashni va korrektirovkalarni to'g'ri amalga oshirishni o'rganasiz",
  "MSFO asosida Konsolidatsiyalashgan hisobotlarni tayyorlashni va ularni to'g'ri tahlil qilishni o'rganasiz",
  "MSFO asosida hisobotlarni tushunib tahlil qila olasiz",
  "Imtihon savollarini yechish ko'nikmasiga ega bo'lasiz",
  "Ish jarayonida o'zingizga bo'lgan ishonchni oshirasiz",
  "DipIFR imtihoniga tayyor holatga kelasiz",
  "Hisobot tayyorlash va audit jarayonida mustaqil ishlay olasiz",
  "Lavozim o'sishi va yuqori maoshli ish imkoniyatlari: Big4, mahalliy va xalqaro auditorlik firmalari, yirik bank va ishlab chiqarish kompaniyalari",
];

const WHAT_BULLETS_UZ = [
  "Buxgalteriya, audit va moliya sohasida ishlovchi mutaxassislar uchun mo'ljallangan",
  "Xalqaro kompaniyalar va auditorlar tomonidan tan olinadi",
  "МСФОni (IFRS) tushunish va uni amaliy qo'llay olish darajasini ko'rsatadi",
  "IFRS asosida hisobotlarni to'g'ri tayyorlash va korrektirovka qilish",
  "Konsolidatsiyalashgan hisobotlarni tayyorlash va tahlil qilish",
  "Yiliga 2 marta imtihon: iyun va dekabr",
];

export const DIPIFR_PAGE: Record<Language, DipifrPageI18n> = {
  en: {
    seoTitle: "DipIFR Course Tashkent — ACCA Diploma in IFRS | FBA Academy",
    seoDescription:
      "DipIFR (ACCA) in Uzbekistan — IFRS standards, consolidation and financial reporting. Strong pass rates, 4-month programme, 2-year access, international diploma.",
    seoKeywords: "DipIFR course Tashkent, ACCA DipIFR Uzbekistan, IFRS diploma, international financial reporting, FBA Academy",
    ogTitle: "DipIFR — ACCA Diploma in IFRS | FBA Academy",
    ogDescription: "ACCA DipIFR: global IFRS diploma. Intensive exam prep, practice projects, hybrid delivery.",
    breadcrumbHome: "Home",
    breadcrumbCourses: "Courses",
    breadcrumbCourseName: "DipIFR",
    heroBadge: "ACCA-accredited programme",
    heroTitleLine1: "DipIFR — Diploma in",
    heroTitleHighlight: "International Financial Reporting",
    heroDesc:
      "The international ACCA diploma in IFRS. Learn to prepare and analyse financial statements to global standards.",
    heroCta: "Request course information",
    heroStatDuration: "Duration",
    heroStatAccess: "Access",
    heroStatFormat: "Format",
    heroStatDocument: "Credential",
    heroStatAccessValue: "2 years",
    heroStatFormatValue: "Online · Live",
    heroStatDocumentValue: "ACCA diploma",
    formTitle: "Book your free first lesson",
    formHint: "Leave your details — our team will contact you",
    formFootnote: "Register and join the first lesson free",
    sectionWhatTitle: "What is DipIFR?",
    sectionWhatLead:
      "DipIFR (Diploma in International Financial Reporting) is ACCA’s global qualification in IFRS. It proves deep practical competence and is valued by international employers.",
    whatBullets: [
      "ACCA-issued international IFRS diploma",
      "Recognised in 180+ countries",
      "Two exam sessions per year: June and December",
      "Expected by Big Four and multinationals",
      "Growing demand as IFRS adoption expands in Uzbekistan",
      "Structured path to exam readiness in months",
    ],
    sectionFeaturesTitle: "What you will master",
    sectionFeaturesLead: "DipIFR.Kafolat — a complete preparation pathway",
    features: [
      {
        title: "IFRS fundamentals",
        desc: "The full standards framework, IASB concepts and how to apply them in practice.",
      },
      {
        title: "Intensive exam preparation",
        desc: "DipIFR-Rus question practice, time management and professional answer technique.",
      },
      {
        title: "Five major practice projects",
        desc: "Consolidation, reporting and IFRS application on realistic company cases.",
      },
      {
        title: "ACCA-recognised diploma",
        desc: "The ACCA DipIFR credential trusted by Big Four, banks and global finance teams.",
      },
      {
        title: "Live classes and webinars",
        desc: "Twice-weekly live sessions plus recordings and rapid answers to your questions.",
      },
      {
        title: "Two exam windows per year",
        desc: "Plan for ACCA DipIFR-Rus in June and December each year.",
      },
    ],
    sectionForWhomTitle: "Who is DipIFR for?",
    sectionForWhomLead: "For professionals who want IFRS mastery, not just theory",
    forWhom: [
      { emoji: "📊", title: "Accountants and finance teams", desc: "Professionals who must produce or review IFRS reporting." },
      { emoji: "🔍", title: "Auditors and tax specialists", desc: "Deepen assurance and analysis under international requirements." },
      { emoji: "🏢", title: "IFRS practitioners", desc: "Typically 2–3+ years’ experience moving to a global standard." },
      { emoji: "🌍", title: "International career goals", desc: "Those targeting Big Four, banks or regional HQs." },
    ],
    sectionWhyTitle: "Why DipIFR?",
    sectionWhyLead: "The diploma formally validates the IFRS skills global employers require",
    whyDipifr: [
      "Globally recognised ACCA qualification",
      "A recognised stepping stone toward Big Four roles",
      "Demand from multinationals operating in Uzbekistan",
      "A bridge toward the full ACCA qualification",
      "Potential for significant compensation growth",
    ],
    sectionFlowTitle: "How the programme runs",
    sectionFlowLead: "Roughly three months of live classes, three sessions per week, blending theory and practice — online and offline options.",
    courseFlow: [
      { title: "Phase 1: Teaching", desc: "Structured lessons on IFRS logic, standards and reporting architecture." },
      { title: "Phase 2: Revision", desc: "Reinforce core topics with Q&A and discussion on complex areas." },
      { title: "Phase 3: Mock exams", desc: "Timed mocks, pacing drills and exam-style written answers." },
    ],
    sectionExpertsTitle: "Your instructors",
    sectionExpertsLead: "ACCA professionals with deep DipIFR / IFRS practice experience.",
    reviewsTitle: "Student voices",
    reviewsSubtitle: "Stories and reflections from recent graduates.",
    certificatesTitle: "DipIFR graduate certificates",
    certificatesSubtitle: "Public links to certificates from our DipIFR graduates are listed below.",
    sectionOutcomesTitle: "Outcomes after the course",
    sectionOutcomesLead: "You will be ready to sit DipIFR and apply IFRS confidently in real workflows.",
    outcomes: [
      "Prepare and adjust IFRS financial statements",
      "Build and analyse consolidated reports",
      "Solve exam questions with professional formatting",
      "Operate independently in reporting and audit cycles",
      "Demonstrate the IFRS competence multinationals expect",
    ],
    faqSectionTitle: "Frequently asked questions",
    finalTitle: "Earn the DipIFR diploma and internationalise your career",
    finalDesc: "Prepare for the ACCA DipIFR exam — book a free consultation and map your path.",
    finalBullets: ["ACCA international diploma", "Theory + practice", "Strong pass-rate track record", "Professional mentors"],
    finalFormTitle: "Free consultation",
    finalFormHint: "Submit the form — a specialist will contact you",
    jsonLdName: "DipIFR — ACCA Diploma in IFRS | FBA Academy Tashkent",
    jsonLdDesc: "ACCA DipIFR — IFRS diploma preparation course in Uzbekistan.",
  },
  uz: {
    seoTitle: "DipIFR Kursi Toshkent — ACCA IFRS Xalqaro Diplom | FBA Academy",
    seoDescription:
      "DipIFR (ACCA) kursi O'zbekistonda. IFRS standartlari, konsolidatsiya, moliyaviy hisobot. 87% o'tish darajasi. 4 oy, 2 yil kirish, xalqaro diplom. 950+ bitiruvchi.",
    seoKeywords: "DipIFR kurs Toshkent, ACCA DipIFR O'zbekiston, IFRS diplom kurs, MFHS standartlari, xalqaro moliyaviy hisobot, FBA Academy DipIFR",
    ogTitle: "DipIFR — ACCA IFRS Diplomi | O'zbekistonda Eng Yaxshi Kurs | FBA Academy",
    ogDescription: "ACCA DipIFR: xalqaro moliyaviy hisobot standartlari diplomi. 87% o'tish darajasi. 4 oy kurs, 2 yil materiallar kirishi.",
    breadcrumbHome: "Bosh sahifa",
    breadcrumbCourses: "Kurslar",
    breadcrumbCourseName: "DipIFR",
    heroBadge: "ACCA Akkreditatsiyalangan kurs",
    heroTitleLine1: "DipIFR — Diploma in",
    heroTitleHighlight: "International Financial Reporting",
    heroDesc: "ACCA tomonidan beriladigan IFRS bo'yicha xalqaro diplom. Moliyaviy hisobotlarni xalqaro standartlarda tayyorlash va tahlil qilishni o'rganing.",
    heroCta: "Kurs haqida ma'lumot olish",
    heroStatDuration: "Davomiyligi",
    heroStatAccess: "Kirish muddati",
    heroStatFormat: "Format",
    heroStatDocument: "Hujjat",
    heroStatAccessValue: "2 yil",
    heroStatFormatValue: "Onlayn · Jonli",
    heroStatDocumentValue: "ACCA Diplom",
    formTitle: "Bepul birinchi darsga yozing",
    formHint: "Ma'lumotlaringizni qoldiring — mutaxassislarimiz siz bilan bog'lanadi",
    formFootnote: "Ro'yxatdan o'tib, bepul birinchi darsni oling",
    sectionWhatTitle: "DipIFR nima?",
    sectionWhatLead:
      "DipIFR (Diploma in International Financial Reporting) — ACCA tashkiloti tomonidan beriladigan Xalqaro Moliyaviy Hisobot Standartlari bo'yicha xalqaro diplom. Bu sertifikat IFRS standartlarini amaliyotda qo'llash bo'yicha chuqur bilim va ko'nikmalarni beradi. Xalqaro kompaniyalarda ishlash uchun zarur malaka.",
    whatBullets: WHAT_BULLETS_UZ,
    sectionFeaturesTitle: "Kursda nimalarni o'rganasiz?",
    sectionFeaturesLead: "DipIFR.Kafolat — kompleks tayyorgarlik dasturi",
    features: FEATURES_UZ,
    sectionForWhomTitle: "DipIFR kimlar uchun?",
    sectionForWhomLead: "Xalqaro moliyaviy hisobot standartlarini o'rganmoqchi bo'lganlar uchun",
    forWhom: FOR_WHOM_UZ,
    sectionWhyTitle: "Nima uchun DipIFR?",
    sectionWhyLead: "DipIFR diplomi xalqaro kompaniyalarda ishlash uchun zarur bo'lgan IFRS bilimlarini rasman tasdiqlaydi",
    whyDipifr: WHY_UZ,
    sectionFlowTitle: "Kurs qanday o'tadi",
    sectionFlowLead:
      "Darslar 3 oy davomida, haftasiga 3 marta o'tiladi. Nazariya va amaliyot birga olib boriladi, darslar onlayn va oflayn formatda mavjud.",
    courseFlow: FLOW_UZ,
    sectionExpertsTitle: "Kurs ustozlari",
    sectionExpertsLead: "DipIFR va MSFO bo'yicha real amaliy tajribaga ega ACCA mutaxassislari dars beradi.",
    reviewsTitle: "O'quvchilar fikrlari",
    reviewsSubtitle: "Kursni tugatgan talabalar tajribasi va MSFO bo'yicha real fikrlar.",
    certificatesTitle: "DipIFR bitiruvchilari sertifikatlari",
    certificatesSubtitle: "Quyidagi havolalarda DipIFR yo'nalishidagi bitiruvchilar sertifikatlari ochiq formatda berilgan.",
    sectionOutcomesTitle: "Kurs yakunida natija",
    sectionOutcomesLead: "Kurs tugagach DipIFR imtihoniga tayyor holatga kelasiz va IFRS hisobotlarini amaliyotda qo'llay olasiz.",
    outcomes: OUT_UZ,
    faqSectionTitle: "Savollarga javob beramiz",
    finalTitle: "DipIFR diplomini oling va karyerangizni xalqaro darajaga olib chiqing",
    finalDesc: "ACCA DipIFR imtihoniga tayyorlaning — bepul konsultatsiya oling va o'z yo'lingizni aniqlang.",
    finalBullets: ["ACCA xalqaro diplomi", "Amaliy va nazariy bilimlar", "87% o'tish darajasi", "Professional mentorlar"],
    finalFormTitle: "Bepul konsultatsiya",
    finalFormHint: "Formani to'ldiring — mutaxassis siz bilan bog'lanadi",
    jsonLdName: "DipIFR — ACCA Diploma in IFRS | FBA Academy Toshkent",
    jsonLdDesc: "ACCA DipIFR — Xalqaro Moliyaviy Hisobot Standartlari (IFRS) bo'yicha xalqaro diplom. O'zbekistonda 4 oylik kurs.",
  },
  ru: {
    seoTitle: "Курс DipIFR Ташкент — диплом ACCA по МСФО | FBA Academy",
    seoDescription:
      "DipIFR (ACCA) в Узбекистане — стандарты IFRS, консолидация, отчётность. Высокий процент сдачи, 4 месяца, 2 года доступа, международный диплом.",
    seoKeywords: "DipIFR курс Ташкент, ACCA DipIFR Узбекистан, IFRS диплом, международная отчётность, FBA Academy",
    ogTitle: "DipIFR — диплом ACCA по IFRS | FBA Academy",
    ogDescription: "ACCA DipIFR: международный диплом по IFRS. Интенсивная подготовка к экзамену и практика.",
    breadcrumbHome: "Главная",
    breadcrumbCourses: "Курсы",
    breadcrumbCourseName: "DipIFR",
    heroBadge: "Аккредитованная программа ACCA",
    heroTitleLine1: "DipIFR — Diploma in",
    heroTitleHighlight: "International Financial Reporting",
    heroDesc:
      "Международный диплом ACCA по IFRS. Готовьте и анализируйте финансовую отчётность по глобальным стандартам.",
    heroCta: "Получить информацию о курсе",
    heroStatDuration: "Длительность",
    heroStatAccess: "Доступ",
    heroStatFormat: "Формат",
    heroStatDocument: "Документ",
    heroStatAccessValue: "2 года",
    heroStatFormatValue: "Онлайн · Живые занятия",
    heroStatDocumentValue: "Диплом ACCA",
    formTitle: "Запишитесь на бесплатный первый урок",
    formHint: "Оставьте контакты — мы свяжемся с вами",
    formFootnote: "Зарегистрируйтесь и пройдите первый урок бесплатно",
    sectionWhatTitle: "Что такое DipIFR?",
    sectionWhatLead:
      "DipIFR (Diploma in International Financial Reporting) — международная квалификация ACCA по стандартам IFRS. Подтверждает глубокие практические навыки и востребована у международных работодателей.",
    whatBullets: [
      "Международный диплом ACCA по IFRS",
      "Признание в 180+ странах",
      "Экзамен 2 раза в год: июнь и декабрь",
      "Ожидаемый профиль для Big Four и мультинационалов",
      "Растущий спрос с внедрением IFRS в Узбекистане",
      "Системная подготовка к экзамену за несколько месяцев",
    ],
    sectionFeaturesTitle: "Чему вы научитесь",
    sectionFeaturesLead: "DipIFR.Kafolat — комплексная программа подготовки",
    features: [
      { title: "Фундамент IFRS", desc: "Полная система стандартов, концепции IASB и практическое применение." },
      { title: "Интенсив к экзамену", desc: "Разбор заданий DipIFR-Rus, тайм-менеджмент и оформление ответов." },
      { title: "5 крупных проектов", desc: "Консолидация, отчётность и IFRS на реалистичных кейсах компаний." },
      { title: "Диплом ACCA", desc: "Квалификация, признаваемая Big Four, банками и международными институтами." },
      { title: "Живые занятия и вебинары", desc: "Дважды в неделю вживую + записи и быстрые ответы на вопросы." },
      { title: "Два экзаменационных окна", desc: "Планируйте сдачу DipIFR-Rus в июне и декабре каждого года." },
    ],
    sectionForWhomTitle: "Для кого DipIFR?",
    sectionForWhomLead: "Для тех, кто хочет глубокую практику IFRS, а не только теорию",
    forWhom: [
      { emoji: "📊", title: "Бухгалтеры и финансисты", desc: "Кто должен готовить или проверять отчётность по IFRS." },
      { emoji: "🔍", title: "Аудиторы и налоговые специалисты", desc: "Углубление проверки и анализа по международным требованиям." },
      { emoji: "🏢", title: "Специалисты по МСФО", desc: "Обычно 2–3+ года опыта при переходе на глобальный стандарт." },
      { emoji: "🌍", title: "Международная карьера", desc: "Цели в Big Four, банках или региональных штаб-квартирах." },
    ],
    sectionWhyTitle: "Зачем DipIFR?",
    sectionWhyLead: "Диплом официально подтверждает IFRS-компетенции, которые ждут международные работодатели",
    whyDipifr: [
      "Глобально признанная квалификация ACCA",
      "Сильный шаг к ролям в Big Four",
      "Спрос со стороны мультинационалов в Узбекистане",
      "Мост к полной квалификации ACCA",
      "Потенциал существенного роста дохода",
    ],
    sectionFlowTitle: "Как проходит программа",
    sectionFlowLead: "Около трёх месяцев живых занятий, 3 раза в неделю: теория и практика — онлайн и офлайн.",
    courseFlow: [
      { title: "Этап 1: Обучение", desc: "Системные занятия по логике IFRS, стандартам и структуре отчётности." },
      { title: "Этап 2: Повторение", desc: "Закрепление тем, Q&A и разбор сложных вопросов." },
      { title: "Этап 3: Пробные экзамены", desc: "Таймированные моки и ответы в экзаменационном формате." },
    ],
    sectionExpertsTitle: "Преподаватели",
    sectionExpertsLead: "Сертифицированные ACCA-специалисты с практикой DipIFR / МСФО.",
    reviewsTitle: "Отзывы студентов",
    reviewsSubtitle: "Опыт и впечатления недавних выпускников.",
    certificatesTitle: "Сертификаты выпускников DipIFR",
    certificatesSubtitle: "Ниже — открытые ссылки на сертификаты выпускников направления DipIFR.",
    sectionOutcomesTitle: "Результат после курса",
    sectionOutcomesLead: "Вы будете готовы к экзамену DipIFR и уверенно примените IFRS в работе.",
    outcomes: [
      "Готовить и корректировать отчётность по МСФО",
      "Строить и анализировать консолидированную отчётность",
      "Решать экзаменационные задачи с профессиональным оформлением",
      "Самостоятельно работать в циклах отчётности и аудита",
      "Демонстрировать IFRS-компетенции, ожидаемые мультинационалами",
    ],
    faqSectionTitle: "Ответы на вопросы",
    finalTitle: "Получите диплом DipIFR и выведите карьеру на международный уровень",
    finalDesc: "Готовьтесь к экзамену ACCA DipIFR — бесплатная консультация и персональный план.",
    finalBullets: ["Международный диплом ACCA", "Теория и практика", "Высокий процент сдачи", "Профессиональные менторы"],
    finalFormTitle: "Бесплатная консультация",
    finalFormHint: "Заполните форму — специалист свяжется с вами",
    jsonLdName: "DipIFR — диплом ACCA по IFRS | FBA Academy Ташкент",
    jsonLdDesc: "Курс подготовки к ACCA DipIFR в Узбекистане.",
  },
};

export function dipifrJsonLd(lang: Language, baseUrl: string) {
  const tx = DIPIFR_PAGE[lang];
  const faqItems = dipifrFaqFlat(lang);
  return [
    {
      "@type": "Course",
      "@id": `${baseUrl}/course/dipifr#course`,
      name: tx.jsonLdName,
      description: tx.jsonLdDesc,
      url: `${baseUrl}/course/dipifr`,
      provider: { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "FBA Academy", url: baseUrl },
      educationalLevel: "Professional",
      inLanguage: ["uz", "ru", "en"],
    },
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/course/dipifr#faq`,
      mainEntity: faqItems.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/course/dipifr#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: tx.breadcrumbHome, item: baseUrl },
        { "@type": "ListItem", position: 2, name: tx.breadcrumbCourses, item: `${baseUrl}/courses` },
        { "@type": "ListItem", position: 3, name: tx.breadcrumbCourseName, item: `${baseUrl}/course/dipifr` },
      ],
    },
  ];
}
