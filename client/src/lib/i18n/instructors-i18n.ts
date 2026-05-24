import type { LocalizedText } from "./pick";

export type InstructorI18n = {
  role: LocalizedText;
  experience: LocalizedText;
  bio: LocalizedText;
  extra?: LocalizedText;
  teachingExp?: LocalizedText;
};

export const INSTRUCTORS_I18N: Record<string, InstructorI18n> = {
  "dilnoza-zaripova": {
    role: {
      uz: "Konsultant | Baker Tilly",
      ru: "Консультант | Baker Tilly",
      en: "Consultant | Baker Tilly",
    },
    experience: {
      uz: "12 yillik tajriba",
      ru: "12 лет опыта",
      en: "12 years of experience",
    },
    bio: {
      uz: "ACCA Fellow. Audit, buxgalteriya hisobi va MSFO (IFRS) bo'yicha xalqaro amaliy tajriba. Big 4 va yirik xalqaro kompaniyalarda ishlagan.",
      ru: "ACCA Fellow. Международный практический опыт в аудите, бухгалтерском учёте и МСФО (IFRS). Работала в Big 4 и крупных международных компаниях.",
      en: "ACCA Fellow. International practical experience in audit, financial accounting, and IFRS. Worked at Big 4 firms and major international companies.",
    },
    extra: {
      uz: "Deloitte (Big 4) va yirik xalqaro kompaniyalarda ish tajribasi",
      ru: "Опыт работы в Deloitte (Big 4) и крупных международных компаниях",
      en: "Work experience at Deloitte (Big 4) and major international companies",
    },
    teachingExp: {
      uz: "12+ yil",
      ru: "12+ лет",
      en: "12+ years",
    },
  },
  "firdavs-mukhammadkulov": {
    role: {
      uz: "Bosh investitsion menejer | Murad Buildings",
      ru: "Главный инвестиционный менеджер | Murad Buildings",
      en: "Chief Investment Manager | Murad Buildings",
    },
    experience: {
      uz: "10 yillik tajriba",
      ru: "10 лет опыта",
      en: "10 years of experience",
    },
    bio: {
      uz: "ACCA Member. Moliya, loyiha, bizneslarni baholash va investitsiya sohasida 5 yillik tajriba.",
      ru: "ACCA Member. 5 лет опыта в финансах, проектах, оценке бизнеса и инвестициях.",
      en: "ACCA Member. 5 years of experience in finance, projects, business valuation, and investments.",
    },
    teachingExp: {
      uz: "5 yil",
      ru: "5 лет",
      en: "5 years",
    },
  },
  "javohirbek-mominov": {
    role: {
      uz: "Reporting Director | Havas Food LLC",
      ru: "Reporting Director | Havas Food LLC",
      en: "Reporting Director | Havas Food LLC",
    },
    experience: {
      uz: "8 yillik tajriba",
      ru: "8 лет опыта",
      en: "8 years of experience",
    },
    bio: {
      uz: "ACCA Member. F3 bo'yicha yuqori natijali o'quvchilar. Excel, Power BI va financial modelling bo'yicha tajriba.",
      ru: "ACCA Member. Студенты с высокими результатами по F3. Опыт работы с Excel, Power BI и финансовым моделированием.",
      en: "ACCA Member. High-scoring F3 students. Experience in Excel, Power BI, and financial modelling.",
    },
    teachingExp: {
      uz: "5 yil",
      ru: "5 лет",
      en: "5 years",
    },
  },
  "asilbek-shoymardonov": {
    role: {
      uz: "IFRS Manager | AIN Property Management",
      ru: "IFRS Manager | AIN Property Management",
      en: "IFRS Manager | AIN Property Management",
    },
    experience: {
      uz: "5 yillik tajriba",
      ru: "5 лет опыта",
      en: "5 years of experience",
    },
    bio: {
      uz: "IFRS mutaxassisi. Venkon Group, Havas Holding va AIN Property Management tajribasi.",
      ru: "Специалист по IFRS. Опыт работы в Venkon Group, Havas Holding и AIN Property Management.",
      en: "IFRS specialist. Experience at Venkon Group, Havas Holding, and AIN Property Management.",
    },
    teachingExp: {
      uz: "5 yil",
      ru: "5 лет",
      en: "5 years",
    },
  },
  "botirjon-baratov": {
    role: {
      uz: "Auditor | Aloqabank (Bosh ofis)",
      ru: "Аудитор | Aloqabank (Головной офис)",
      en: "Auditor | Aloqabank (Head Office)",
    },
    experience: {
      uz: "3 yillik tajriba",
      ru: "3 года опыта",
      en: "3 years of experience",
    },
    bio: {
      uz: "Aloqabank bosh ofisida auditor. 10 ta ACCA paper va amaliy audit tajribasi.",
      ru: "Аудитор в головном офисе Aloqabank. 10 экзаменов ACCA и практический опыт аудита.",
      en: "Auditor at Aloqabank head office. 10 ACCA papers passed and practical audit experience.",
    },
    teachingExp: {
      uz: "2+ yil",
      ru: "2+ года",
      en: "2+ years",
    },
  },
  "umarbek-rahmatov": {
    role: {
      uz: "Associate A3 | PKF Antares",
      ru: "Associate A3 | PKF Antares",
      en: "Associate A3 | PKF Antares",
    },
    experience: {
      uz: "3+ yil tajriba",
      ru: "3+ года опыта",
      en: "3+ years of experience",
    },
    bio: {
      uz: "Oxford Brookes University diplomi. PKF Antares va FBA Academy'da F3 o'qitish tajribasi.",
      ru: "Диплом Oxford Brookes University. Опыт преподавания F3 в PKF Antares и FBA Academy.",
      en: "Oxford Brookes University diploma. F3 teaching experience at PKF Antares and FBA Academy.",
    },
    teachingExp: {
      uz: "3+ yil",
      ru: "3+ года",
      en: "3+ years",
    },
  },
  "valijon-axmedov": {
    role: {
      uz: "Moliyaviy menejer | Nura Group",
      ru: "Финансовый менеджер | Nura Group",
      en: "Financial Manager | Nura Group",
    },
    experience: {
      uz: "3+ yil tajriba",
      ru: "3+ года опыта",
      en: "3+ years of experience",
    },
    bio: {
      uz: "EY (Big 4) auditor, Havas Holding analitik. FBA Academy'da F3 guruhlarini o'qitadi.",
      ru: "Аудитор EY (Big 4), аналитик Havas Holding. Преподаёт группы F3 в FBA Academy.",
      en: "EY (Big 4) auditor, Havas Holding analyst. Teaches F3 groups at FBA Academy.",
    },
    teachingExp: {
      uz: "3+ yil",
      ru: "3+ года",
      en: "3+ years",
    },
  },
  "shoiraxon-boliyeva": {
    role: {
      uz: "ACCA & Ingliz tili | FBA Academy, MDIST",
      ru: "ACCA и английский язык | FBA Academy, MDIST",
      en: "ACCA & English | FBA Academy, MDIST",
    },
    experience: {
      uz: "1 yillik tajriba",
      ru: "1 год опыта",
      en: "1 year of experience",
    },
    bio: {
      uz: "ACCA va ingliz tili o'qituvchisi. F3 va MDIST talabalari bilan ishlaydi.",
      ru: "Преподаватель ACCA и английского языка. Работает со студентами F3 и MDIST.",
      en: "ACCA and English language instructor. Works with F3 and MDIST students.",
    },
    teachingExp: {
      uz: "1 yil",
      ru: "1 год",
      en: "1 year",
    },
  },
};
