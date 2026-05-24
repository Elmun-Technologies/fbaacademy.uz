import type { LocalizedText, LocalizedList } from "./pick";

export type CourseModuleI18n = { title: LocalizedText; topics: LocalizedList };
export type CourseI18n = {
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  shortDescription: LocalizedText;
  forWhom: LocalizedList;
  skills: LocalizedList;
  modules: CourseModuleI18n[];
  supportTeam: { role: LocalizedText; description: LocalizedText }[];
  salaryDescriptions: LocalizedText[];
};

export const COURSE_I18N: Record<string, CourseI18n> = {
  "acca": {
    title: {
      uz: "ACCA (Association of Chartered Certified Accountants)",
      ru: "ACCA (Association of Chartered Certified Accountants)",
      en: "ACCA (Association of Chartered Certified Accountants)",
    },
    subtitle: {
      uz: "Xalqaro buxgalteriya sertifikati",
      ru: "Международный сертификат бухгалтера",
      en: "International accounting certification",
    },
    description: {
      uz: "ACCA — bu dunyodagi eng nufuzli buxgalteriya va moliyaviy sertifikatlardan biri. Ushbu dastur orqali siz xalqaro buxgalteriya standartlari, audit, soliqqa tortish va moliyaviy boshqaruv bo'yicha chuqur bilim olasiz.",
      ru: "ACCA — одна из самых престижных бухгалтерских и финансовых сертификаций в мире. В рамках этой программы вы получите глубокие знания в области международных бухгалтерских стандартов, аудита, налогообложения и финансового менеджмента.",
      en: "ACCA is one of the world's most prestigious accounting and finance certifications. Through this program, you will gain in-depth knowledge of international accounting standards, audit, taxation, and financial management.",
    },
    shortDescription: {
      uz: "Xalqaro buxgalteriya sertifikati — karyerangizni global darajaga olib chiqing",
      ru: "Международный сертификат бухгалтера — выведите карьеру на глобальный уровень",
      en: "International accounting certification — take your career to a global level",
    },
    forWhom: {
      uz: [
        "Buxgalterlar va moliyachilar",
        "Audit xodimlar",
        "Moliyaviy menejerlar",
        "Xalqaro kompaniyalarda ishlashni xohlovchilar",
        "Karyerasini global darajaga olib chiqmoqchilar",
      ],
      ru: [
        "Бухгалтеры и финансисты",
        "Сотрудники аудиторских компаний",
        "Финансовые менеджеры",
        "Те, кто хочет работать в международных компаниях",
        "Те, кто стремится вывести карьеру на глобальный уровень",
      ],
      en: [
        "Accountants and finance professionals",
        "Audit staff",
        "Financial managers",
        "Those seeking roles in international companies",
        "Professionals aiming to take their career global",
      ],
    },
    skills: {
      uz: [
        "Xalqaro moliyaviy hisobot",
        "Audit va tekshiruv",
        "Soliqqa tortish",
        "Moliyaviy tahlil",
        "Boshqaruv hisobi",
        "Korporativ boshqaruv",
        "Risk boshqaruvi",
        "Strategik rejalashtirish",
      ],
      ru: [
        "Международная финансовая отчётность",
        "Аудит и проверка",
        "Налогообложение",
        "Финансовый анализ",
        "Управленческий учёт",
        "Корпоративное управление",
        "Управление рисками",
        "Стратегическое планирование",
      ],
      en: [
        "International financial reporting",
        "Audit and assurance",
        "Taxation",
        "Financial analysis",
        "Management accounting",
        "Corporate governance",
        "Risk management",
        "Strategic planning",
      ],
    },
    modules: [
      {
        title: {
          uz: "Business and Technology (BT)",
          ru: "Business and Technology (BT)",
          en: "Business and Technology (BT)",
        },
        topics: {
          uz: [
            "Biznes tashkiliy tuzilmalari",
            "IT tizimlari",
            "Boshqaruv va nazorat",
            "Professional etika",
          ],
          ru: [
            "Организационные структуры бизнеса",
            "IT-системы",
            "Управление и контроль",
            "Профессиональная этика",
          ],
          en: [
            "Business organizational structures",
            "IT systems",
            "Management and control",
            "Professional ethics",
          ],
        },
      },
      {
        title: {
          uz: "Management Accounting (MA)",
          ru: "Management Accounting (MA)",
          en: "Management Accounting (MA)",
        },
        topics: {
          uz: [
            "Xarajatlar hisobi",
            "Byudjetlashtirish",
            "Standart xarajatlar",
            "Boshqaruv qarorlar",
          ],
          ru: [
            "Учёт затрат",
            "Бюджетирование",
            "Нормативные затраты",
            "Управленческие решения",
          ],
          en: [
            "Cost accounting",
            "Budgeting",
            "Standard costing",
            "Management decisions",
          ],
        },
      },
      {
        title: {
          uz: "Financial Accounting (FA)",
          ru: "Financial Accounting (FA)",
          en: "Financial Accounting (FA)",
        },
        topics: {
          uz: [
            "Moliyaviy hisobotlar",
            "Ikki yoqlama yozuv tizimi",
            "Buxgalteriya standartlari",
            "Yakuniy hisobotlar",
          ],
          ru: [
            "Финансовая отчётность",
            "Система двойной записи",
            "Бухгалтерские стандарты",
            "Итоговая отчётность",
          ],
          en: [
            "Financial statements",
            "Double-entry bookkeeping",
            "Accounting standards",
            "Final accounts",
          ],
        },
      },
      {
        title: {
          uz: "Corporate and Business Law (LW)",
          ru: "Corporate and Business Law (LW)",
          en: "Corporate and Business Law (LW)",
        },
        topics: {
          uz: [
            "Shartnomaviy huquq",
            "Mehnat huquqi",
            "Korporativ boshqaruv",
            "Kompaniyalar huquqi",
          ],
          ru: [
            "Договорное право",
            "Трудовое право",
            "Корпоративное управление",
            "Корпоративное право",
          ],
          en: [
            "Contract law",
            "Employment law",
            "Corporate governance",
            "Company law",
          ],
        },
      },
      {
        title: {
          uz: "Performance Management (PM)",
          ru: "Performance Management (PM)",
          en: "Performance Management (PM)",
        },
        topics: {
          uz: [
            "Samaradorlik boshqaruvi",
            "Tahlil usullari",
            "Byudjet nazorati",
            "Transfer narxlash",
          ],
          ru: [
            "Управление эффективностью",
            "Методы анализа",
            "Бюджетный контроль",
            "Трансфертное ценообразование",
          ],
          en: [
            "Performance management",
            "Analytical techniques",
            "Budgetary control",
            "Transfer pricing",
          ],
        },
      },
      {
        title: {
          uz: "Taxation (TX)",
          ru: "Taxation (TX)",
          en: "Taxation (TX)",
        },
        topics: {
          uz: [
            "Soliq tizimi",
            "Jismoniy shaxslar solig'i",
            "Korporativ soliq",
            "QQS va aksizlar",
          ],
          ru: [
            "Налоговая система",
            "Налог на доходы физических лиц",
            "Корпоративный налог",
            "НДС и акцизы",
          ],
          en: [
            "Tax system",
            "Personal income tax",
            "Corporate tax",
            "VAT and excise duties",
          ],
        },
      }
    ],
    supportTeam: [
      {
        role: {
          uz: "Kurator-ekspert",
          ru: "Куратор-эксперт",
          en: "Expert curator",
        },
        description: {
          uz: "Uy vazifalarini batafsil ko'rib chiqadi, yaxshilashga yordam beradi",
          ru: "Подробно проверяет домашние задания и помогает улучшить результаты",
          en: "Reviews homework in detail and helps you improve your work",
        },
      },
      {
        role: {
          uz: "HR-konsultant",
          ru: "HR-консультант",
          en: "HR consultant",
        },
        description: {
          uz: "Ish topishda yordam beradi: reja tuzishdan to suhbatgacha",
          ru: "Помогает с трудоустройством: от составления плана до подготовки к собеседованию",
          en: "Supports your job search from planning to interview preparation",
        },
      },
      {
        role: {
          uz: "Qo'llab-quvvatlash",
          ru: "Поддержка",
          en: "Support",
        },
        description: {
          uz: "Platforma va kursni o'tish bo'yicha savollarga javob beradi",
          ru: "Отвечает на вопросы по платформе и прохождению курса",
          en: "Answers questions about the platform and course progress",
        },
      }
    ],
    salaryDescriptions: [
      {
        uz: "Kursdan so'ng",
        ru: "После курса",
        en: "After completing the course",
      },
      {
        uz: "1-3 yillik tajriba",
        ru: "1–3 года опыта",
        en: "1–3 years of experience",
      },
      {
        uz: "3+ yillik tajriba",
        ru: "3+ года опыта",
        en: "3+ years of experience",
      }
    ],
  },
  "applied-knowledge": {
    title: {
      uz: "ACCA Applied Knowledge",
      ru: "ACCA Applied Knowledge",
      en: "ACCA Applied Knowledge",
    },
    subtitle: {
      uz: "ACCA ning birinchi bosqichi",
      ru: "Первый этап ACCA",
      en: "The first stage of ACCA",
    },
    description: {
      uz: "ACCA Applied Knowledge — bu ACCA sertifikatsiyasining boshlang'ich bosqichi. Bu bosqichda siz buxgalteriya, biznes va texnologiya asoslarini o'rganasiz. 3 ta imtihonni muvaffaqiyatli topshirsangiz, keyingi bosqichga o'tishingiz mumkin.",
      ru: "ACCA Applied Knowledge — начальный этап сертификации ACCA. На этом этапе вы изучите основы бухгалтерии, бизнеса и технологий. Успешно сдав 3 экзамена, вы сможете перейти на следующий этап.",
      en: "ACCA Applied Knowledge is the introductory stage of ACCA certification. At this stage, you will learn the fundamentals of accounting, business, and technology. Successfully passing 3 exams allows you to progress to the next stage.",
    },
    shortDescription: {
      uz: "ACCA sertifikatsiyasining boshlang'ich bosqichi — asosiy bilimlar",
      ru: "Начальный этап сертификации ACCA — базовые знания",
      en: "The introductory stage of ACCA certification — core knowledge",
    },
    forWhom: {
      uz: [
        "Buxgalteriya sohasiga yangi kirganlar",
        "Universitet talabalari",
        "ACCA yo'lini boshlamoqchilar",
        "Karyerasini o'zgartirmoqchilar",
      ],
      ru: [
        "Новички в сфере бухгалтерии",
        "Студенты университетов",
        "Те, кто хочет начать путь ACCA",
        "Те, кто планирует сменить карьеру",
      ],
      en: [
        "Newcomers to accounting",
        "University students",
        "Those starting the ACCA pathway",
        "Career changers",
      ],
    },
    skills: {
      uz: [
        "Buxgalteriya asoslari",
        "Moliyaviy hisobot",
        "Boshqaruv hisobi",
        "Biznes texnologiyalari",
        "Professional etika",
      ],
      ru: [
        "Основы бухгалтерии",
        "Финансовая отчётность",
        "Управленческий учёт",
        "Бизнес-технологии",
        "Профессиональная этика",
      ],
      en: [
        "Accounting fundamentals",
        "Financial reporting",
        "Management accounting",
        "Business technology",
        "Professional ethics",
      ],
    },
    modules: [
      {
        title: {
          uz: "Business and Technology (BT/FBT)",
          ru: "Business and Technology (BT/FBT)",
          en: "Business and Technology (BT/FBT)",
        },
        topics: {
          uz: [
            "Tashkiliy tuzilmalar",
            "Boshqaruv funksiyalari",
            "IT va biznes",
            "Ichki nazorat tizimlari",
            "Professional etika asoslari",
          ],
          ru: [
            "Организационные структуры",
            "Функции управления",
            "IT и бизнес",
            "Системы внутреннего контроля",
            "Основы профессиональной этики",
          ],
          en: [
            "Organizational structures",
            "Management functions",
            "IT and business",
            "Internal control systems",
            "Fundamentals of professional ethics",
          ],
        },
      },
      {
        title: {
          uz: "Management Accounting (MA/FMA)",
          ru: "Management Accounting (MA/FMA)",
          en: "Management Accounting (MA/FMA)",
        },
        topics: {
          uz: [
            "Xarajatlarni tasniflash",
            "Byudjet tuzish",
            "Standart xarajatlar va farqlar",
            "Qaror qabul qilish uchun tahlil",
            "Samaradorlik ko'rsatkichlari",
          ],
          ru: [
            "Классификация затрат",
            "Составление бюджета",
            "Нормативные затраты и отклонения",
            "Анализ для принятия решений",
            "Показатели эффективности",
          ],
          en: [
            "Cost classification",
            "Budget preparation",
            "Standard costs and variances",
            "Decision-making analysis",
            "Performance indicators",
          ],
        },
      },
      {
        title: {
          uz: "Financial Accounting (FA/FFA)",
          ru: "Financial Accounting (FA/FFA)",
          en: "Financial Accounting (FA/FFA)",
        },
        topics: {
          uz: [
            "Buxgalteriya yozuvlari",
            "Moliyaviy hisobotlar tayyorlash",
            "Aktivlar va majburiyatlar",
            "Kapital va daromadlar",
            "Hisobot standartlari",
          ],
          ru: [
            "Бухгалтерские записи",
            "Подготовка финансовой отчётности",
            "Активы и обязательства",
            "Капитал и доходы",
            "Стандарты отчётности",
          ],
          en: [
            "Accounting entries",
            "Preparing financial statements",
            "Assets and liabilities",
            "Equity and income",
            "Reporting standards",
          ],
        },
      }
    ],
    supportTeam: [
      {
        role: {
          uz: "Kurator-ekspert",
          ru: "Куратор-эксперт",
          en: "Expert curator",
        },
        description: {
          uz: "Har bir mavzu bo'yicha tushuntirishlar va amaliy mashqlar",
          ru: "Разъяснения по каждой теме и практические упражнения",
          en: "Explanations for each topic and practical exercises",
        },
      },
      {
        role: {
          uz: "HR-konsultant",
          ru: "HR-консультант",
          en: "HR consultant",
        },
        description: {
          uz: "Ish topishda yordam va rezyume tayyorlash",
          ru: "Помощь в трудоустройстве и подготовка резюме",
          en: "Job search support and resume preparation",
        },
      },
      {
        role: {
          uz: "Qo'llab-quvvatlash",
          ru: "Поддержка",
          en: "Support",
        },
        description: {
          uz: "Platforma va kursni o'tish bo'yicha savollarga javob beradi",
          ru: "Отвечает на вопросы по платформе и прохождению курса",
          en: "Answers questions about the platform and course progress",
        },
      }
    ],
    salaryDescriptions: [
      {
        uz: "Kursdan so'ng",
        ru: "После курса",
        en: "After completing the course",
      },
      {
        uz: "1-2 yillik tajriba",
        ru: "1–2 года опыта",
        en: "1–2 years of experience",
      },
      {
        uz: "3+ yillik tajriba",
        ru: "3+ года опыта",
        en: "3+ years of experience",
      }
    ],
  },
  "applied-skills": {
    title: {
      uz: "ACCA Applied Skills",
      ru: "ACCA Applied Skills",
      en: "ACCA Applied Skills",
    },
    subtitle: {
      uz: "ACCA ning ikkinchi bosqichi",
      ru: "Второй этап ACCA",
      en: "The second stage of ACCA",
    },
    description: {
      uz: "ACCA Applied Skills — bu ACCA sertifikatsiyasining ikkinchi bosqichi. Bu yerda siz korporativ huquq, samaradorlik boshqaruvi, soliqqa tortish, moliyaviy hisobot, audit va moliyaviy menejment bo'yicha chuqur bilim olasiz.",
      ru: "ACCA Applied Skills — второй этап сертификации ACCA. Здесь вы получите глубокие знания в области корпоративного права, управления эффективностью, налогообложения, финансовой отчётности, аудита и финансового менеджмента.",
      en: "ACCA Applied Skills is the second stage of ACCA certification. Here you will gain in-depth knowledge of corporate law, performance management, taxation, financial reporting, audit, and financial management.",
    },
    shortDescription: {
      uz: "ACCA sertifikatsiyasining o'rta bosqichi — amaliy ko'nikmalar",
      ru: "Средний этап сертификации ACCA — практические навыки",
      en: "The intermediate stage of ACCA certification — practical skills",
    },
    forWhom: {
      uz: [
        "ACCA Applied Knowledge tugatganlar",
        "Tajribali buxgalterlar",
        "Audit xodimlari",
        "Moliyaviy tahlilchilar",
        "Korporativ moliyachilar",
      ],
      ru: [
        "Завершившие ACCA Applied Knowledge",
        "Опытные бухгалтеры",
        "Сотрудники аудиторских компаний",
        "Финансовые аналитики",
        "Корпоративные финансисты",
      ],
      en: [
        "Those who completed ACCA Applied Knowledge",
        "Experienced accountants",
        "Audit staff",
        "Financial analysts",
        "Corporate finance professionals",
      ],
    },
    skills: {
      uz: [
        "Korporativ huquq",
        "Samaradorlik boshqaruvi",
        "Soliq rejalash",
        "IFRS bo'yicha hisobot",
        "Audit",
        "Moliyaviy menejment",
        "Investitsiya tahlili",
        "Risk boshqaruvi",
      ],
      ru: [
        "Корпоративное право",
        "Управление эффективностью",
        "Налоговое планирование",
        "Отчётность по IFRS",
        "Аудит",
        "Финансовый менеджмент",
        "Инвестиционный анализ",
        "Управление рисками",
      ],
      en: [
        "Corporate law",
        "Performance management",
        "Tax planning",
        "IFRS reporting",
        "Audit",
        "Financial management",
        "Investment analysis",
        "Risk management",
      ],
    },
    modules: [
      {
        title: {
          uz: "Corporate and Business Law (LW)",
          ru: "Corporate and Business Law (LW)",
          en: "Corporate and Business Law (LW)",
        },
        topics: {
          uz: [
            "Huquqiy tizim asoslari",
            "Shartnoma huquqi",
            "Mehnat huquqi",
            "Korporativ huquq",
            "Kompaniyalar qonunchiligi",
          ],
          ru: [
            "Основы правовой системы",
            "Договорное право",
            "Трудовое право",
            "Корпоративное право",
            "Законодательство о компаниях",
          ],
          en: [
            "Legal system fundamentals",
            "Contract law",
            "Employment law",
            "Corporate law",
            "Company legislation",
          ],
        },
      },
      {
        title: {
          uz: "Performance Management (PM)",
          ru: "Performance Management (PM)",
          en: "Performance Management (PM)",
        },
        topics: {
          uz: [
            "Xarajatlar tahlili",
            "Byudjet nazorati va farqlar",
            "Transfer narxlash",
            "Samaradorlik o'lchash",
            "Strategik tahlil",
          ],
          ru: [
            "Анализ затрат",
            "Бюджетный контроль и отклонения",
            "Трансфертное ценообразование",
            "Измерение эффективности",
            "Стратегический анализ",
          ],
          en: [
            "Cost analysis",
            "Budgetary control and variances",
            "Transfer pricing",
            "Performance measurement",
            "Strategic analysis",
          ],
        },
      },
      {
        title: {
          uz: "Taxation (TX)",
          ru: "Taxation (TX)",
          en: "Taxation (TX)",
        },
        topics: {
          uz: [
            "Soliq tizimi asoslari",
            "Daromad solig'i",
            "Korporativ soliq",
            "QQS",
            "Soliq rejalash",
          ],
          ru: [
            "Основы налоговой системы",
            "Налог на доходы",
            "Корпоративный налог",
            "НДС",
            "Налоговое планирование",
          ],
          en: [
            "Tax system fundamentals",
            "Income tax",
            "Corporate tax",
            "VAT",
            "Tax planning",
          ],
        },
      },
      {
        title: {
          uz: "Financial Reporting (FR)",
          ru: "Financial Reporting (FR)",
          en: "Financial Reporting (FR)",
        },
        topics: {
          uz: [
            "IAS/IFRS standartlari",
            "Konsolidatsiya",
            "Moliyaviy tahlil",
            "Murakkab operatsiyalar",
            "Guruhlangan hisobotlar",
          ],
          ru: [
            "Стандарты IAS/IFRS",
            "Консолидация",
            "Финансовый анализ",
            "Сложные операции",
            "Групповая отчётность",
          ],
          en: [
            "IAS/IFRS standards",
            "Consolidation",
            "Financial analysis",
            "Complex transactions",
            "Group reporting",
          ],
        },
      },
      {
        title: {
          uz: "Audit and Assurance (AA)",
          ru: "Audit and Assurance (AA)",
          en: "Audit and Assurance (AA)",
        },
        topics: {
          uz: [
            "Audit jarayoni",
            "Ichki nazorat",
            "Audit dalillari",
            "Audit hisoboti",
            "Professional etika",
          ],
          ru: [
            "Процесс аудита",
            "Внутренний контроль",
            "Аудиторские доказательства",
            "Аудиторское заключение",
            "Профессиональная этика",
          ],
          en: [
            "Audit process",
            "Internal control",
            "Audit evidence",
            "Audit report",
            "Professional ethics",
          ],
        },
      },
      {
        title: {
          uz: "Financial Management (FM)",
          ru: "Financial Management (FM)",
          en: "Financial Management (FM)",
        },
        topics: {
          uz: [
            "Investitsiya qarorlari",
            "Moliyalashtirish manbalari",
            "Kapital tuzilmasi",
            "Risk boshqaruvi",
            "Kompaniya baholash",
          ],
          ru: [
            "Инвестиционные решения",
            "Источники финансирования",
            "Структура капитала",
            "Управление рисками",
            "Оценка компании",
          ],
          en: [
            "Investment decisions",
            "Sources of finance",
            "Capital structure",
            "Risk management",
            "Company valuation",
          ],
        },
      }
    ],
    supportTeam: [
      {
        role: {
          uz: "Kurator-ekspert",
          ru: "Куратор-эксперт",
          en: "Expert curator",
        },
        description: {
          uz: "Murakkab mavzularni tushuntirish va amaliyot",
          ru: "Разъяснение сложных тем и практика",
          en: "Explaining complex topics and hands-on practice",
        },
      },
      {
        role: {
          uz: "HR-konsultant",
          ru: "HR-консультант",
          en: "HR consultant",
        },
        description: {
          uz: "Xalqaro kompaniyalarga ishga joylashish",
          ru: "Трудоустройство в международные компании",
          en: "Placement in international companies",
        },
      },
      {
        role: {
          uz: "Qo'llab-quvvatlash",
          ru: "Поддержка",
          en: "Support",
        },
        description: {
          uz: "Texnik va tashkiliy yordam",
          ru: "Техническая и организационная поддержка",
          en: "Technical and organizational support",
        },
      }
    ],
    salaryDescriptions: [
      {
        uz: "Kursdan so'ng",
        ru: "После курса",
        en: "After completing the course",
      },
      {
        uz: "1-3 yillik tajriba",
        ru: "1–3 года опыта",
        en: "1–3 years of experience",
      },
      {
        uz: "3+ yillik tajriba",
        ru: "3+ года опыта",
        en: "3+ years of experience",
      }
    ],
  },
  "strategic-professional": {
    title: {
      uz: "ACCA Strategic Professional",
      ru: "ACCA Strategic Professional",
      en: "ACCA Strategic Professional",
    },
    subtitle: {
      uz: "ACCA ning yakuniy bosqichi",
      ru: "Финальный этап ACCA",
      en: "The final stage of ACCA",
    },
    description: {
      uz: "ACCA Strategic Professional — bu ACCA sertifikatsiyasining eng yuqori bosqichi. Strategik biznes yetakchiligi va strategik moliyaviy boshqaruv bo'yicha chuqur bilim va ko'nikmalar olasiz. Bu bosqichni tugatgach, siz to'liq ACCA malakasiga ega bo'lasiz.",
      ru: "ACCA Strategic Professional — высший этап сертификации ACCA. Вы получите глубокие знания и навыки в области стратегического бизнес-лидерства и стратегического финансового управления. Завершив этот этап, вы получите полную квалификацию ACCA.",
      en: "ACCA Strategic Professional is the highest stage of ACCA certification. You will gain in-depth knowledge and skills in strategic business leadership and strategic financial management. Completing this stage earns you the full ACCA qualification.",
    },
    shortDescription: {
      uz: "ACCA sertifikatsiyasining yakuniy bosqichi — strategik darajadagi bilimlar",
      ru: "Финальный этап сертификации ACCA — знания стратегического уровня",
      en: "The final stage of ACCA certification — strategic-level knowledge",
    },
    forWhom: {
      uz: [
        "ACCA Applied Skills tugatganlar",
        "CFO bo'lishni xohlovchilar",
        "Strategik moliyaviy boshqaruvchilar",
        "Xalqaro audit firmalari xodimlari",
      ],
      ru: [
        "Завершившие ACCA Applied Skills",
        "Те, кто стремится стать CFO",
        "Стратегические финансовые руководители",
        "Сотрудники международных аудиторских фирм",
      ],
      en: [
        "Those who completed ACCA Applied Skills",
        "Aspiring CFOs",
        "Strategic finance leaders",
        "Staff at international audit firms",
      ],
    },
    skills: {
      uz: [
        "Strategik yetakchilik",
        "Murakkab moliyaviy hisobot",
        "Ilg'or moliyaviy boshqaruv",
        "Murakkab audit",
        "M&A",
        "Derivativlar",
        "Xalqaro moliya",
        "Korporativ boshqaruv",
      ],
      ru: [
        "Стратегическое лидерство",
        "Сложная финансовая отчётность",
        "Продвинутый финансовый менеджмент",
        "Сложный аудит",
        "M&A",
        "Деривативы",
        "Международные финансы",
        "Корпоративное управление",
      ],
      en: [
        "Strategic leadership",
        "Complex financial reporting",
        "Advanced financial management",
        "Complex audit",
        "M&A",
        "Derivatives",
        "International finance",
        "Corporate governance",
      ],
    },
    modules: [
      {
        title: {
          uz: "Strategic Business Leader (SBL)",
          ru: "Strategic Business Leader (SBL)",
          en: "Strategic Business Leader (SBL)",
        },
        topics: {
          uz: [
            "Strategik yetakchilik",
            "Korporativ boshqaruv",
            "Risk boshqaruvi",
            "Texnologiya va innovatsiya",
            "Tashkiliy o'zgarishlar boshqaruvi",
            "Etika va professionallik",
          ],
          ru: [
            "Стратегическое лидерство",
            "Корпоративное управление",
            "Управление рисками",
            "Технологии и инновации",
            "Управление организационными изменениями",
            "Этика и профессионализм",
          ],
          en: [
            "Strategic leadership",
            "Corporate governance",
            "Risk management",
            "Technology and innovation",
            "Managing organizational change",
            "Ethics and professionalism",
          ],
        },
      },
      {
        title: {
          uz: "Strategic Business Reporting (SBR)",
          ru: "Strategic Business Reporting (SBR)",
          en: "Strategic Business Reporting (SBR)",
        },
        topics: {
          uz: [
            "Murakkab moliyaviy hisobot",
            "Xalqaro standartlar",
            "Konsolidatsiya",
            "Moliyaviy instrumentlar",
            "Ijtimoiy va ekologik hisobot",
          ],
          ru: [
            "Сложная финансовая отчётность",
            "Международные стандарты",
            "Консолидация",
            "Финансовые инструменты",
            "Социальная и экологическая отчётность",
          ],
          en: [
            "Complex financial reporting",
            "International standards",
            "Consolidation",
            "Financial instruments",
            "Social and environmental reporting",
          ],
        },
      },
      {
        title: {
          uz: "Advanced Financial Management (AFM)",
          ru: "Advanced Financial Management (AFM)",
          en: "Advanced Financial Management (AFM)",
        },
        topics: {
          uz: [
            "Murakkab investitsiya qarorlari",
            "Xalqaro moliyaviy boshqaruv",
            "Derivativlar va hedjirlash",
            "M&A va kompaniya baholash",
            "Treasury boshqaruvi",
          ],
          ru: [
            "Сложные инвестиционные решения",
            "Международный финансовый менеджмент",
            "Деривативы и хеджирование",
            "M&A и оценка компании",
            "Управление казначейством",
          ],
          en: [
            "Complex investment decisions",
            "International financial management",
            "Derivatives and hedging",
            "M&A and company valuation",
            "Treasury management",
          ],
        },
      },
      {
        title: {
          uz: "Advanced Audit and Assurance (AAA)",
          ru: "Advanced Audit and Assurance (AAA)",
          en: "Advanced Audit and Assurance (AAA)",
        },
        topics: {
          uz: [
            "Murakkab audit muammolari",
            "Professional etika",
            "Audit sifati nazorati",
            "Maxsus audit topshiriqlari",
            "IT audit",
          ],
          ru: [
            "Сложные аудиторские задачи",
            "Профессиональная этика",
            "Контроль качества аудита",
            "Специальные аудиторские задания",
            "IT-аудит",
          ],
          en: [
            "Complex audit issues",
            "Professional ethics",
            "Audit quality control",
            "Special audit engagements",
            "IT audit",
          ],
        },
      }
    ],
    supportTeam: [
      {
        role: {
          uz: "Kurator-ekspert",
          ru: "Куратор-эксперт",
          en: "Expert curator",
        },
        description: {
          uz: "Strategik masalalar va case study'larni tahlil qiladi",
          ru: "Анализирует стратегические вопросы и case study",
          en: "Analyzes strategic issues and case studies",
        },
      },
      {
        role: {
          uz: "HR-konsultant",
          ru: "HR-консультант",
          en: "HR consultant",
        },
        description: {
          uz: "Top lavozimlar va xalqaro imkoniyatlar",
          ru: "Топ-позиции и международные возможности",
          en: "Senior roles and international opportunities",
        },
      },
      {
        role: {
          uz: "Qo'llab-quvvatlash",
          ru: "Поддержка",
          en: "Support",
        },
        description: {
          uz: "Imtihonga tayyorgarlik va texnik yordam",
          ru: "Подготовка к экзаменам и техническая поддержка",
          en: "Exam preparation and technical support",
        },
      }
    ],
    salaryDescriptions: [
      {
        uz: "Sertifikat olgach",
        ru: "После получения сертификата",
        en: "After certification",
      },
      {
        uz: "3-5 yillik tajriba",
        ru: "3–5 лет опыта",
        en: "3–5 years of experience",
      },
      {
        uz: "5+ yillik tajriba",
        ru: "5+ лет опыта",
        en: "5+ years of experience",
      }
    ],
  },
  "dipifr": {
    title: {
      uz: "DipIFR",
      ru: "DipIFR",
      en: "DipIFR",
    },
    subtitle: {
      uz: "ACCA tomonidan beriladigan xalqaro moliyaviy hisobot standartlari diplomi",
      ru: "Диплом по международным стандартам финансовой отчётности от ACCA",
      en: "ACCA diploma in international financial reporting standards",
    },
    description: {
      uz: "DipIFR (Diploma in International Financial Reporting) kursi ACCA tomonidan beriladigan diplomga tayyorlov kursi bo'lib, xalqaro moliyaviy hisobot standartlari (IFRS) asosida buxgalteriya va moliyaviy hisobot yuritishni o'rgatadi. Buxgalteriya, audit va moliya sohasida ishlovchi mutaxassislar uchun mo'ljallangan bo'lib, xalqaro kompaniyalar va auditorlar tomonidan tan olinadi.",
      ru: "Курс DipIFR (Diploma in International Financial Reporting) — подготовка к диплому ACCA, который обучает бухгалтерскому учёту и финансовой отчётности на основе международных стандартов (IFRS). Предназначен для специалистов в области бухгалтерии, аудита и финансов, признан международными компаниями и аудиторами.",
      en: "The DipIFR (Diploma in International Financial Reporting) course prepares you for the ACCA diploma, teaching accounting and financial reporting based on International Financial Reporting Standards (IFRS). Designed for accounting, audit, and finance professionals, it is recognized by international companies and auditors.",
    },
    shortDescription: {
      uz: "ACCA DipIFR diplomiga tayyorlov — IFRS standartlarini amaliyotda qo'llay olish",
      ru: "Подготовка к диплому ACCA DipIFR — применение стандартов IFRS на практике",
      en: "Preparation for the ACCA DipIFR diploma — applying IFRS standards in practice",
    },
    forWhom: {
      uz: [
        "Buxgalterlar",
        "Moliyachilar",
        "Auditorlar",
        "Soliq sohasidagi mutaxassislar",
        "Bosh buxgalter bo'lishni rejalayotganlar",
        "МСФО bilan ishlayotgan mutaxassislar",
        "Moliya, buxgalteriya va audit sohasida 3 yillik tajribaga ega bo'lganlar",
        "Rus yoki ingliz tilini biladigan mutaxassislar",
      ],
      ru: [
        "Бухгалтеры",
        "Финансисты",
        "Аудиторы",
        "Специалисты в области налогообложения",
        "Те, кто планирует стать главным бухгалтером",
        "Специалисты, работающие с МСФО",
        "Имеющие 3 года опыта в финансах, бухгалтерии и аудите",
        "Специалисты, владеющие русским или английским языком",
      ],
      en: [
        "Accountants",
        "Finance professionals",
        "Auditors",
        "Tax specialists",
        "Those planning to become chief accountants",
        "Professionals working with IFRS",
        "Those with 3 years of experience in finance, accounting, and audit",
        "Professionals fluent in Russian or English",
      ],
    },
    skills: {
      uz: [
        "IFRS asosida hisobot tayyorlash",
        "Konsolidatsiyalashgan hisobotlar",
        "Moliyaviy bayonotlar tahlili",
        "Audit asoslari",
        "IFRS standartlari (IAS, IFRS)",
        "Financial modeling asoslari",
        "Consolidation va Revenue Recognition",
      ],
      ru: [
        "Подготовка отчётности по IFRS",
        "Консолидированная отчётность",
        "Анализ финансовой отчётности",
        "Основы аудита",
        "Стандарты IFRS (IAS, IFRS)",
        "Основы финансового моделирования",
        "Консолидация и признание выручки",
      ],
      en: [
        "IFRS-based reporting",
        "Consolidated financial statements",
        "Financial statement analysis",
        "Audit fundamentals",
        "IFRS standards (IAS, IFRS)",
        "Financial modeling fundamentals",
        "Consolidation and revenue recognition",
      ],
    },
    modules: [
      {
        title: {
          uz: "Module 1: IFRS asoslari va accounting fundamentals",
          ru: "Module 1: Основы IFRS и фундаментальные принципы учёта",
          en: "Module 1: IFRS fundamentals and accounting foundations",
        },
        topics: {
          uz: [
            "IFRS tizimi va IASB",
            "Kontseptual asos",
            "Moliyaviy hisobotlar taqdim etish (IAS 1)",
            "IAS 8, IFRS 15 — Daromad tan olish",
          ],
          ru: [
            "Система IFRS и IASB",
            "Концептуальные основы",
            "Представление финансовой отчётности (IAS 1)",
            "IAS 8, IFRS 15 — Признание выручки",
          ],
          en: [
            "IFRS framework and IASB",
            "Conceptual framework",
            "Presentation of financial statements (IAS 1)",
            "IAS 8, IFRS 15 — Revenue recognition",
          ],
        },
      },
      {
        title: {
          uz: "Module 2: Moliyaviy bayonotlar tuzilishi",
          ru: "Module 2: Структура финансовой отчётности",
          en: "Module 2: Financial statement structure",
        },
        topics: {
          uz: [
            "IFRS asosida hisobotlarni tayyorlash",
            "Korrektirovkalar to'g'ri amalga oshirish",
            "IAS 16, IAS 38, IFRS 16 — Aktivlar",
            "IAS 36, IAS 37 — Qiymat pasayishi va zaxiralar",
            "IFRS 9, IAS 32 — Moliyaviy instrumentlar",
          ],
          ru: [
            "Подготовка отчётности по IFRS",
            "Корректное проведение корректировок",
            "IAS 16, IAS 38, IFRS 16 — Активы",
            "IAS 36, IAS 37 — Обесценение и резервы",
            "IFRS 9, IAS 32 — Финансовые инструменты",
          ],
          en: [
            "Preparing IFRS-based reports",
            "Making adjustments correctly",
            "IAS 16, IAS 38, IFRS 16 — Assets",
            "IAS 36, IAS 37 — Impairment and provisions",
            "IFRS 9, IAS 32 — Financial instruments",
          ],
        },
      },
      {
        title: {
          uz: "Module 3: Konsolidatsiya va murakkab mavzular",
          ru: "Module 3: Консолидация и сложные темы",
          en: "Module 3: Consolidation and advanced topics",
        },
        topics: {
          uz: [
            "IFRS 10 — Konsolidatsiyalashgan hisobotlar",
            "IFRS 3 — Biznes birlashmalari",
            "IAS 28 — Assotsiatsiyalar",
            "IFRS 11 — Qo'shma bitimlar",
            "Konsolidatsiyalashgan hisobotlarni tahlil qilish",
          ],
          ru: [
            "IFRS 10 — Консолидированная отчётность",
            "IFRS 3 — Объединение бизнеса",
            "IAS 28 — Ассоциированные компании",
            "IFRS 11 — Совместные операции",
            "Анализ консолидированной отчётности",
          ],
          en: [
            "IFRS 10 — Consolidated financial statements",
            "IFRS 3 — Business combinations",
            "IAS 28 — Associates",
            "IFRS 11 — Joint arrangements",
            "Analyzing consolidated financial statements",
          ],
        },
      },
      {
        title: {
          uz: "Module 4: Mock-examlar va sinov imtihonlari",
          ru: "Module 4: Пробные экзамены и тестовые сессии",
          en: "Module 4: Mock exams and practice tests",
        },
        topics: {
          uz: [
            "Imtihon savollari va keyslar tahlili",
            "Exam strategies",
            "Real kompaniyalar misolida amaliy mashg'ulotlar",
            "Savol-javob va muhokama sessiyalari",
          ],
          ru: [
            "Разбор экзаменационных вопросов и кейсов",
            "Стратегии сдачи экзамена",
            "Практические занятия на примерах реальных компаний",
            "Сессии вопросов и обсуждений",
          ],
          en: [
            "Exam questions and case analysis",
            "Exam strategies",
            "Practical exercises using real company examples",
            "Q&A and discussion sessions",
          ],
        },
      }
    ],
    supportTeam: [
      {
        role: {
          uz: "Kurator-ekspert",
          ru: "Куратор-эксперт",
          en: "Expert curator",
        },
        description: {
          uz: "IFRS standartlarini amaliyotda qo'llashni o'rgatadi",
          ru: "Обучает применению стандартов IFRS на практике",
          en: "Teaches practical application of IFRS standards",
        },
      },
      {
        role: {
          uz: "HR-konsultant",
          ru: "HR-консультант",
          en: "HR consultant",
        },
        description: {
          uz: "Big4 va yirik kompaniyalarga ish topishda yordam beradi",
          ru: "Помогает с трудоустройством в Big4 и крупные компании",
          en: "Helps with placement at Big4 and major companies",
        },
      },
      {
        role: {
          uz: "Qo'llab-quvvatlash",
          ru: "Поддержка",
          en: "Support",
        },
        description: {
          uz: "Imtihon tayyorligi va texnik yordam",
          ru: "Подготовка к экзаменам и техническая поддержка",
          en: "Exam preparation and technical support",
        },
      }
    ],
    salaryDescriptions: [
      {
        uz: "Diplomdan so'ng",
        ru: "После получения диплома",
        en: "After receiving the diploma",
      },
      {
        uz: "1-3 yillik tajriba",
        ru: "1–3 года опыта",
        en: "1–3 years of experience",
      },
      {
        uz: "3+ yillik tajriba",
        ru: "3+ года опыта",
        en: "3+ years of experience",
      }
    ],
  },
  "financial-modeling": {
    title: {
      uz: "Financial Modeling",
      ru: "Financial Modeling",
      en: "Financial Modeling",
    },
    subtitle: {
      uz: "Moliyaviy modellashtirish kursi",
      ru: "Курс финансового моделирования",
      en: "Financial modeling course",
    },
    description: {
      uz: "Financial Modeling kursi orqali siz Excel va maxsus dasturlarda professional moliyaviy modellar yaratishni o'rganasiz. Investitsiya tahlili, kompaniya baholash, loyiha moliyalash va moliyaviy prognozlash bo'yicha amaliy ko'nikmalar egallaysiz.",
      ru: "На курсе Financial Modeling вы научитесь создавать профессиональные финансовые модели в Excel и специализированных программах. Вы освоите практические навыки инвестиционного анализа, оценки компаний, проектного финансирования и финансового прогнозирования.",
      en: "Through the Financial Modeling course, you will learn to build professional financial models in Excel and specialized software. You will gain practical skills in investment analysis, company valuation, project finance, and financial forecasting.",
    },
    shortDescription: {
      uz: "Professional moliyaviy modellar yaratishni o'rganing",
      ru: "Научитесь создавать профессиональные финансовые модели",
      en: "Learn to build professional financial models",
    },
    forWhom: {
      uz: [
        "Investitsiya bankirlari",
        "Moliyaviy tahlilchilar",
        "Korporativ moliyachilar",
        "Biznes egalari",
        "Moliya sohasiga o'tmoqchilar",
      ],
      ru: [
        "Инвестиционные банкиры",
        "Финансовые аналитики",
        "Корпоративные финансисты",
        "Владельцы бизнеса",
        "Те, кто переходит в сферу финансов",
      ],
      en: [
        "Investment bankers",
        "Financial analysts",
        "Corporate finance professionals",
        "Business owners",
        "Those transitioning into finance",
      ],
    },
    skills: {
      uz: [
        "Excel modellashtirish",
        "DCF tahlili",
        "Kompaniya baholash",
        "Moliyaviy prognozlash",
        "Investitsiya tahlili",
        "LBO modellashtirish",
        "Ssenarilar tahlili",
      ],
      ru: [
        "Моделирование в Excel",
        "DCF-анализ",
        "Оценка компании",
        "Финансовое прогнозирование",
        "Инвестиционный анализ",
        "LBO-моделирование",
        "Сценарный анализ",
      ],
      en: [
        "Excel modeling",
        "DCF analysis",
        "Company valuation",
        "Financial forecasting",
        "Investment analysis",
        "LBO modeling",
        "Scenario analysis",
      ],
    },
    modules: [
      {
        title: {
          uz: "Excel ilg'or darajada",
          ru: "Excel продвинутый уровень",
          en: "Advanced Excel",
        },
        topics: {
          uz: [
            "Murakkab formulalar",
            "INDEX-MATCH, OFFSET",
            "Pivot jadvallar",
            "Makroslar va VBA asoslari",
            "Dashboard yaratish",
          ],
          ru: [
            "Сложные формулы",
            "INDEX-MATCH, OFFSET",
            "Сводные таблицы",
            "Основы макросов и VBA",
            "Создание дашбордов",
          ],
          en: [
            "Advanced formulas",
            "INDEX-MATCH, OFFSET",
            "Pivot tables",
            "Macros and VBA basics",
            "Building dashboards",
          ],
        },
      },
      {
        title: {
          uz: "Moliyaviy modellashtirish asoslari",
          ru: "Основы финансового моделирования",
          en: "Financial modeling fundamentals",
        },
        topics: {
          uz: [
            "3-statement model",
            "Prognozlash usullari",
            "Taxminlar va ssenarilar",
            "Sensitivity tahlil",
            "Model tuzilmasi",
          ],
          ru: [
            "3-statement model",
            "Методы прогнозирования",
            "Допущения и сценарии",
            "Анализ чувствительности",
            "Структура модели",
          ],
          en: [
            "3-statement model",
            "Forecasting methods",
            "Assumptions and scenarios",
            "Sensitivity analysis",
            "Model structure",
          ],
        },
      },
      {
        title: {
          uz: "Kompaniya baholash",
          ru: "Оценка компании",
          en: "Company valuation",
        },
        topics: {
          uz: [
            "DCF tahlili",
            "Comparable analysis",
            "Precedent transactions",
            "LBO modellashtirish",
            "WACC hisoblash",
          ],
          ru: [
            "DCF-анализ",
            "Comparable analysis",
            "Precedent transactions",
            "LBO-моделирование",
            "Расчёт WACC",
          ],
          en: [
            "DCF analysis",
            "Comparable analysis",
            "Precedent transactions",
            "LBO modeling",
            "WACC calculation",
          ],
        },
      },
      {
        title: {
          uz: "Investitsiya tahlili",
          ru: "Инвестиционный анализ",
          en: "Investment analysis",
        },
        topics: {
          uz: [
            "NPV va IRR",
            "Payback period",
            "Loyiha moliyalash",
            "Real estate modellashtirish",
            "Startup baholash",
          ],
          ru: [
            "NPV и IRR",
            "Payback period",
            "Проектное финансирование",
            "Моделирование недвижимости",
            "Оценка стартапов",
          ],
          en: [
            "NPV and IRR",
            "Payback period",
            "Project finance",
            "Real estate modeling",
            "Startup valuation",
          ],
        },
      }
    ],
    supportTeam: [
      {
        role: {
          uz: "Kurator-ekspert",
          ru: "Куратор-эксперт",
          en: "Expert curator",
        },
        description: {
          uz: "Real kompaniyalar ustida modellashtirish amaliyoti",
          ru: "Практика моделирования на реальных компаниях",
          en: "Hands-on modeling with real companies",
        },
      },
      {
        role: {
          uz: "HR-konsultant",
          ru: "HR-консультант",
          en: "HR consultant",
        },
        description: {
          uz: "Investitsiya banklari va konsalting firmalariga ish topish",
          ru: "Трудоустройство в инвестиционные банки и консалтинговые компании",
          en: "Placement at investment banks and consulting firms",
        },
      },
      {
        role: {
          uz: "Qo'llab-quvvatlash",
          ru: "Поддержка",
          en: "Support",
        },
        description: {
          uz: "Texnik va tashkiliy yordam",
          ru: "Техническая и организационная поддержка",
          en: "Technical and organizational support",
        },
      }
    ],
    salaryDescriptions: [
      {
        uz: "Kursdan so'ng",
        ru: "После курса",
        en: "After completing the course",
      },
      {
        uz: "1-3 yillik tajriba",
        ru: "1–3 года опыта",
        en: "1–3 years of experience",
      },
      {
        uz: "5+ yillik tajriba",
        ru: "5+ лет опыта",
        en: "5+ years of experience",
      }
    ],
  },
  "jurisprudence": {
    title: {
      uz: "Huquqshunoslik (Jurisprudence)",
      ru: "Юриспруденция (Jurisprudence)",
      en: "Law (Jurisprudence)",
    },
    subtitle: {
      uz: "Zamonaviy huquq asoslari kursi",
      ru: "Курс основ современного права",
      en: "Foundations of modern law course",
    },
    description: {
      uz: "Huquqshunoslik kursi orqali siz O'zbekiston qonunchiligining asosiy sohalarini chuqur o'rganasiz. Fuqarolik huquqi, mehnat huquqi, soliq huquqi, tijorat huquqi va xalqaro xususiy huquq bo'yicha amaliy bilim va ko'nikmalar egallaysiz.",
      ru: "На курсе юриспруденции вы глубоко изучите основные области законодательства Узбекистана. Вы освоите практические знания и навыки в области гражданского, трудового, налогового, коммерческого и международного частного права.",
      en: "Through the Jurisprudence course, you will gain an in-depth understanding of the main areas of Uzbekistan's legislation. You will acquire practical knowledge and skills in civil law, employment law, tax law, commercial law, and private international law.",
    },
    shortDescription: {
      uz: "O'zbekiston qonunchiligi va xalqaro huquq asoslarini o'rganing",
      ru: "Изучите законодательство Узбекистана и основы международного права",
      en: "Learn Uzbekistan's legislation and the foundations of international law",
    },
    forWhom: {
      uz: [
        "Huquqshunoslik sohasiga qiziquvchilar",
        "Biznes egalari va tadbirkorlar",
        "HR mutaxassislari",
        "Buxgalterlar",
        "Davlat xizmatchilari",
        "Talabalar",
      ],
      ru: [
        "Интересующиеся юриспруденцией",
        "Владельцы бизнеса и предприниматели",
        "HR-специалисты",
        "Бухгалтеры",
        "Государственные служащие",
        "Студенты",
      ],
      en: [
        "Those interested in law",
        "Business owners and entrepreneurs",
        "HR specialists",
        "Accountants",
        "Civil servants",
        "Students",
      ],
    },
    skills: {
      uz: [
        "Shartnomalar tuzish",
        "Huquqiy tahlil",
        "Soliq rejalash",
        "Mehnat munosabatlari",
        "Korporativ huquq",
        "Nizolarni hal etish",
        "Huquqiy hujjatlar tayyorlash",
      ],
      ru: [
        "Составление договоров",
        "Правовой анализ",
        "Налоговое планирование",
        "Трудовые отношения",
        "Корпоративное право",
        "Разрешение споров",
        "Подготовка правовых документов",
      ],
      en: [
        "Contract drafting",
        "Legal analysis",
        "Tax planning",
        "Employment relations",
        "Corporate law",
        "Dispute resolution",
        "Preparing legal documents",
      ],
    },
    modules: [
      {
        title: {
          uz: "Huquq nazariyasi",
          ru: "Теория права",
          en: "Legal theory",
        },
        topics: {
          uz: [
            "Huquq tushunchasi va manbalari",
            "Huquqiy munosabatlar",
            "Huquqiy javobgarlik",
            "Konstitutsiyaviy huquq",
            "Qonun chiqarish jarayoni",
          ],
          ru: [
            "Понятие и источники права",
            "Правоотношения",
            "Правовая ответственность",
            "Конституционное право",
            "Процесс законотворчества",
          ],
          en: [
            "Concept and sources of law",
            "Legal relations",
            "Legal liability",
            "Constitutional law",
            "Legislative process",
          ],
        },
      },
      {
        title: {
          uz: "Fuqarolik huquqi",
          ru: "Гражданское право",
          en: "Civil law",
        },
        topics: {
          uz: [
            "Shartnomalar huquqi",
            "Mulk huquqi",
            "Meros huquqi",
            "Intellektual mulk",
            "Fuqarolik javobgarlik",
          ],
          ru: [
            "Договорное право",
            "Право собственности",
            "Наследственное право",
            "Интеллектуальная собственность",
            "Гражданская ответственность",
          ],
          en: [
            "Contract law",
            "Property law",
            "Inheritance law",
            "Intellectual property",
            "Civil liability",
          ],
        },
      },
      {
        title: {
          uz: "Mehnat huquqi",
          ru: "Трудовое право",
          en: "Labor law",
        },
        topics: {
          uz: [
            "Mehnat shartnomasi",
            "Ishga qabul qilish va bo'shatish",
            "Ish vaqti va dam olish",
            "Mehnat muhofazasi",
            "Mehnat nizolari",
          ],
          ru: [
            "Трудовой договор",
            "Приём и увольнение",
            "Рабочее время и отдых",
            "Охрана труда",
            "Трудовые споры",
          ],
          en: [
            "Employment contract",
            "Hiring and termination",
            "Working hours and rest",
            "Occupational safety",
            "Labor disputes",
          ],
        },
      },
      {
        title: {
          uz: "Soliq huquqi",
          ru: "Налоговое право",
          en: "Tax law",
        },
        topics: {
          uz: [
            "Soliq tizimi",
            "Daromad solig'i",
            "QQS",
            "Aksiz solig'i",
            "Soliq tekshiruvlari va nizolar",
          ],
          ru: [
            "Налоговая система",
            "Налог на доходы",
            "НДС",
            "Акцизный налог",
            "Налоговые проверки и споры",
          ],
          en: [
            "Tax system",
            "Income tax",
            "VAT",
            "Excise tax",
            "Tax audits and disputes",
          ],
        },
      },
      {
        title: {
          uz: "Tijorat huquqi",
          ru: "Коммерческое право",
          en: "Commercial law",
        },
        topics: {
          uz: [
            "Tadbirkorlik huquqi",
            "Kompaniya tashkil etish",
            "Bankrotlik huquqi",
            "Raqobat huquqi",
            "Xalqaro savdo huquqi",
          ],
          ru: [
            "Предпринимательское право",
            "Создание компании",
            "Банкротное право",
            "Антимонопольное право",
            "Международное торговое право",
          ],
          en: [
            "Entrepreneurship law",
            "Company formation",
            "Bankruptcy law",
            "Competition law",
            "International trade law",
          ],
        },
      }
    ],
    supportTeam: [
      {
        role: {
          uz: "Kurator-ekspert",
          ru: "Куратор-эксперт",
          en: "Expert curator",
        },
        description: {
          uz: "Real sud ishlari va huquqiy holatlar tahlili",
          ru: "Разбор реальных судебных дел и правовых ситуаций",
          en: "Analysis of real court cases and legal situations",
        },
      },
      {
        role: {
          uz: "HR-konsultant",
          ru: "HR-консультант",
          en: "HR consultant",
        },
        description: {
          uz: "Yuridik firmalar va kompaniyalarga ish topish",
          ru: "Трудоустройство в юридические фирмы и компании",
          en: "Placement at law firms and companies",
        },
      },
      {
        role: {
          uz: "Qo'llab-quvvatlash",
          ru: "Поддержка",
          en: "Support",
        },
        description: {
          uz: "O'quv jarayoni va texnik yordam",
          ru: "Учебный процесс и техническая поддержка",
          en: "Learning process and technical support",
        },
      }
    ],
    salaryDescriptions: [
      {
        uz: "Kursdan so'ng",
        ru: "После курса",
        en: "After completing the course",
      },
      {
        uz: "1-3 yillik tajriba",
        ru: "1–3 года опыта",
        en: "1–3 years of experience",
      },
      {
        uz: "5+ yillik tajriba",
        ru: "5+ лет опыта",
        en: "5+ years of experience",
      }
    ],
  },
  "1c-course": {
    title: {
      uz: "1C: Buxgalteriya",
      ru: "1C: Бухгалтерия",
      en: "1C: Accounting",
    },
    subtitle: {
      uz: "1C dasturida professional ishlash kursi",
      ru: "Курс профессиональной работы в 1C",
      en: "Professional 1C software course",
    },
    description: {
      uz: "1C: Buxgalteriya kursi orqali siz O'zbekistonda eng ko'p qo'llaniladigan buxgalteriya dasturi — 1C: Buxgalteriyada professional darajada ishlashni o'rganasiz. Hujjat aylanishi, ish haqi hisoblash, soliq hisobotlari va moliyaviy tahlil bo'yicha to'liq bilim olasiz.",
      ru: "На курсе 1C: Бухгалтерия вы научитесь профессионально работать в самой распространённой в Узбекистане бухгалтерской программе — 1C: Бухгалтерия. Вы получите полные знания по документообороту, расчёту заработной платы, налоговой отчётности и финансовому анализу.",
      en: "Through the 1C: Accounting course, you will learn to work professionally in 1C: Accounting — the most widely used accounting software in Uzbekistan. You will gain comprehensive knowledge of document flow, payroll, tax reporting, and financial analysis.",
    },
    shortDescription: {
      uz: "1C: Buxgalteriya dasturida 0 dan professional darajagacha",
      ru: "От нуля до профессионального уровня в 1C: Бухгалтерия",
      en: "From zero to professional level in 1C: Accounting",
    },
    forWhom: {
      uz: [
        "Buxgalterlar",
        "Moliya bo'limi xodimlari",
        "Biznes egalari",
        "Kadrlar bo'limi xodimlari",
        "1C dasturini o'rganmoqchilar",
        "Karyerasini boshlamoqchilar",
      ],
      ru: [
        "Бухгалтеры",
        "Сотрудники финансового отдела",
        "Владельцы бизнеса",
        "Сотрудники HR-отдела",
        "Те, кто хочет освоить 1C",
        "Те, кто начинает карьеру",
      ],
      en: [
        "Accountants",
        "Finance department staff",
        "Business owners",
        "HR department staff",
        "Those learning 1C software",
        "Career starters",
      ],
    },
    skills: {
      uz: [
        "1C: Buxgalteriya",
        "Birlamchi hujjatlar",
        "Ish haqi hisoblash",
        "Soliq hisobotlari",
        "Moliyaviy tahlil",
        "Kadrlar hisobi",
        "Bank operatsiyalari",
      ],
      ru: [
        "1C: Бухгалтерия",
        "Первичные документы",
        "Расчёт заработной платы",
        "Налоговая отчётность",
        "Финансовый анализ",
        "Кадровый учёт",
        "Банковские операции",
      ],
      en: [
        "1C: Accounting",
        "Primary documents",
        "Payroll calculation",
        "Tax reporting",
        "Financial analysis",
        "HR accounting",
        "Bank operations",
      ],
    },
    modules: [
      {
        title: {
          uz: "1C asoslari va sozlash",
          ru: "Основы и настройка 1C",
          en: "1C fundamentals and setup",
        },
        topics: {
          uz: [
            "Dasturni o'rnatish va sozlash",
            "Interfeys bilan ishlash",
            "Ma'lumotnomalar tuzish",
            "Hisob rejasi",
            "Foydalanuvchi huquqlarini boshqarish",
          ],
          ru: [
            "Установка и настройка программы",
            "Работа с интерфейсом",
            "Создание справочников",
            "План счетов",
            "Управление правами пользователей",
          ],
          en: [
            "Software installation and setup",
            "Working with the interface",
            "Creating reference data",
            "Chart of accounts",
            "Managing user permissions",
          ],
        },
      },
      {
        title: {
          uz: "Birlamchi hujjatlar",
          ru: "Первичные документы",
          en: "Primary documents",
        },
        topics: {
          uz: [
            "Kirim va chiqim orderlari",
            "Schyot-fakturalar",
            "Tovar-transport hujjatlari",
            "Shartnomalar ro'yxatdan o'tkazish",
            "Bank operatsiyalari",
          ],
          ru: [
            "Приходные и расходные ордера",
            "Счета-фактуры",
            "Товарно-транспортные документы",
            "Регистрация договоров",
            "Банковские операции",
          ],
          en: [
            "Receipt and payment orders",
            "Invoices",
            "Goods transport documents",
            "Contract registration",
            "Bank operations",
          ],
        },
      },
      {
        title: {
          uz: "Ish haqi va kadrlar",
          ru: "Заработная плата и кадры",
          en: "Payroll and HR",
        },
        topics: {
          uz: [
            "Xodimlarni ro'yxatdan o'tkazish",
            "Ish haqi hisoblash",
            "Soliq va ajratmalar",
            "Mehnat ta'tili hisoblash",
            "Kadrlar hisoboti",
          ],
          ru: [
            "Регистрация сотрудников",
            "Расчёт заработной платы",
            "Налоги и отчисления",
            "Расчёт отпусков",
            "Кадровая отчётность",
          ],
          en: [
            "Employee registration",
            "Payroll calculation",
            "Taxes and deductions",
            "Leave calculation",
            "HR reporting",
          ],
        },
      },
      {
        title: {
          uz: "Soliq hisobotlari",
          ru: "Налоговая отчётность",
          en: "Tax reporting",
        },
        topics: {
          uz: [
            "QQS hisoboti",
            "Daromad solig'i",
            "Yagona soliq to'lovi",
            "Statistik hisobotlar",
            "Elektron hisobot yuborish",
          ],
          ru: [
            "Отчёт по НДС",
            "Налог на доходы",
            "Единый социальный платёж",
            "Статистическая отчётность",
            "Электронная отправка отчётов",
          ],
          en: [
            "VAT reporting",
            "Income tax",
            "Unified social payment",
            "Statistical reports",
            "Electronic report submission",
          ],
        },
      },
      {
        title: {
          uz: "Moliyaviy tahlil",
          ru: "Финансовый анализ",
          en: "Financial analysis",
        },
        topics: {
          uz: [
            "Balans tahlili",
            "Foyda va zarar hisoboti",
            "Pul oqimlari",
            "Debitorlik va kreditorlik",
            "Boshqaruv hisobotlari",
          ],
          ru: [
            "Анализ баланса",
            "Отчёт о прибылях и убытках",
            "Денежные потоки",
            "Дебиторская и кредиторская задолженность",
            "Управленческая отчётность",
          ],
          en: [
            "Balance sheet analysis",
            "Profit and loss statement",
            "Cash flows",
            "Accounts receivable and payable",
            "Management reports",
          ],
        },
      }
    ],
    supportTeam: [
      {
        role: {
          uz: "Kurator-ekspert",
          ru: "Куратор-эксперт",
          en: "Expert curator",
        },
        description: {
          uz: "Real kompaniya ma'lumotlari bilan amaliyot",
          ru: "Практика с данными реальных компаний",
          en: "Practice with real company data",
        },
      },
      {
        role: {
          uz: "HR-konsultant",
          ru: "HR-консультант",
          en: "HR consultant",
        },
        description: {
          uz: "Buxgalterlik vakansiyalariga ish topish",
          ru: "Трудоустройство на бухгалтерские вакансии",
          en: "Finding accounting job vacancies",
        },
      },
      {
        role: {
          uz: "Qo'llab-quvvatlash",
          ru: "Поддержка",
          en: "Support",
        },
        description: {
          uz: "1C dasturi bo'yicha texnik yordam",
          ru: "Техническая поддержка по программе 1C",
          en: "Technical support for 1C software",
        },
      }
    ],
    salaryDescriptions: [
      {
        uz: "Kursdan so'ng",
        ru: "После курса",
        en: "After completing the course",
      },
      {
        uz: "1-2 yillik tajriba",
        ru: "1–2 года опыта",
        en: "1–2 years of experience",
      },
      {
        uz: "3+ yillik tajriba",
        ru: "3+ года опыта",
        en: "3+ years of experience",
      }
    ],
  },
};
