/** Shared instructor profiles (F3 + teachers page). */
export type InstructorProfile = {
  id: string;
  name: string;
  role: string;
  photo: string;
  papers: string;
  teachingExp: string;
  workExp?: string;
  topResults?: string[];
  extra?: string;
  experience: string;
  bio: string;
  courses: string[];
};

export const ACADEMY_INSTRUCTORS: InstructorProfile[] = [
  {
    id: "dilnoza-zaripova",
    name: "Dilnoza Zaripova",
    role: "Konsultant | Baker Tilly",
    photo: "/images/dilnoza-zaripova.jpg",
    papers: "ACCA Fellow",
    teachingExp: "12+ yil",
    workExp: "12+ yil",
    topResults: [],
    extra: "Deloitte (Big 4) va yirik xalqaro kompaniyalarda ish tajribasi",
    experience: "12 yillik tajriba",
    bio: "ACCA Fellow. Audit, buxgalteriya hisobi va MSFO (IFRS) bo'yicha xalqaro amaliy tajriba. Big 4 va yirik xalqaro kompaniyalarda ishlagan.",
    courses: ["ACCA", "F3", "Strategic Professional"],
  },
  {
    id: "firdavs-mukhammadkulov",
    name: "Firdavs Mukhammadkulov",
    role: "Bosh investitsion menejer | Murad Buildings",
    photo: "/images/firdavs-mukhammadkulov.jpg",
    papers: "ACCA Member",
    teachingExp: "5 yil",
    workExp: "5 yil",
    topResults: [],
    experience: "10 yillik tajriba",
    bio: "ACCA Member. Moliya, loyiha, bizneslarni baholash va investitsiya sohasida 5 yillik tajriba.",
    courses: ["ACCA", "F3", "Applied Skills"],
  },
  {
    id: "javohirbek-mominov",
    name: "Javohirbek Mo'minov",
    role: "Reporting Director | Havas Food LLC",
    photo: "/images/javohirbek-mominov.jpg",
    papers: "ACCA Member",
    teachingExp: "5 yil",
    workExp: "5 yil",
    topResults: ["97 ball", "94 ball", "92 ball", "91 ball", "90 ball"],
    experience: "8 yillik tajriba",
    bio: "ACCA Member. F3 bo'yicha yuqori natijali o'quvchilar. Excel, Power BI va financial modelling bo'yicha tajriba.",
    courses: ["F3", "ACCA", "DipIFR"],
  },
  {
    id: "asilbek-shoymardonov",
    name: "Asilbek Shoymardonov",
    role: "IFRS Manager | AIN Property Management",
    photo: "/images/asilbek-shoymardonov.jpg",
    papers: "5 ACCA paper",
    teachingExp: "5 yil",
    workExp: "4.5 yil",
    topResults: ["98 ball", "97 ball", "95 ball"],
    experience: "5 yillik tajriba",
    bio: "IFRS mutaxassisi. Venkon Group, Havas Holding va AIN Property Management tajribasi.",
    courses: ["F3", "DipIFR", "МСФО"],
  },
  {
    id: "botirjon-baratov",
    name: "Botirjon Baratov",
    role: "Auditor | Aloqabank (Bosh ofis)",
    photo: "/images/botirjon-baratov.jpg",
    papers: "10 ACCA paper",
    teachingExp: "2+ yil",
    workExp: "3 yil",
    topResults: ["85 ball", "83 ball", "82 ball"],
    experience: "3 yillik tajriba",
    bio: "Aloqabank bosh ofisida auditor. 10 ta ACCA paper va amaliy audit tajribasi.",
    courses: ["F3", "ACCA"],
  },
  {
    id: "umarbek-rahmatov",
    name: "Umarbek Rahmatov",
    role: "Associate A3 | PKF Antares",
    photo: "/images/umarbek-rahmatov.jpg",
    papers: "9 ACCA F paper + Oxford Brookes",
    teachingExp: "3+ yil",
    workExp: "",
    topResults: ["87 ball", "85 ball", "83 ball"],
    experience: "3+ yil tajriba",
    bio: "Oxford Brookes University diplomi. PKF Antares va FBA Academy'da F3 o'qitish tajribasi.",
    courses: ["F3", "ACCA"],
  },
  {
    id: "valijon-axmedov",
    name: "Valijon Axmedov",
    role: "Moliyaviy menejer | Nura Group",
    photo: "/images/valijon-axmedov.jpg",
    papers: "6 ACCA paper",
    teachingExp: "3+ yil",
    workExp: "3+ yil",
    topResults: ["90 ball", "85 ball", "81 ball"],
    experience: "3+ yil tajriba",
    bio: "EY (Big 4) auditor, Havas Holding analitik. FBA Academy'da F3 guruhlarini o'qitadi.",
    courses: ["F3", "ACCA"],
  },
  {
    id: "shoiraxon-boliyeva",
    name: "Shoiraxon Boliyeva",
    role: "ACCA & Ingliz tili | FBA Academy, MDIST",
    photo: "",
    papers: "9/13 ACCA paper",
    teachingExp: "1 yil",
    workExp: "",
    topResults: ["88 ball", "86 ball", "82 ball"],
    experience: "1 yillik tajriba",
    bio: "ACCA va ingliz tili o'qituvchisi. F3 va MDIST talabalari bilan ishlaydi.",
    courses: ["F3", "ACCA"],
  },
];
