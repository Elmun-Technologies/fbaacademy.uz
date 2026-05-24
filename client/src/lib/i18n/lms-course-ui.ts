import type { Language } from "@/lib/translations";

export type LmsCourseUi = {
  breadcrumbHome: string;
  breadcrumbCourse: string;
  tabCourseInfo: string;
  tabInstructor: string;
  tabReviews: string;
  aboutCourse: string;
  whatYouLearn: string;
  materialIncludes: string;
  requirements: string;
  audience: string;
  courseContent: string;
  tags: string;
  enrolled: string;
  reviews: string;
  lessons: string;
  free: string;
  enrollNow: string;
  addToCart: string;
  wishlist: string;
  enrollmentValidity: string;
  level: string;
  lastUpdated: string;
  certificate: string;
  noReviews: string;
  relatedCourses: string;
  preview: string;
  previewTitle: string;
  previewDesc: string;
  previewEnroll: string;
  lockedLesson: string;
  lockedDesc: string;
  students: string;
  courses: string;
  instructorTab: string;
  sections: string;
  expandAll: string;
  collapseAll: string;
  totalLength: string;
  freeConsultation: string;
  enrollNote: string;
  lectures: string;
  courseIncludes: string;
};

export const LMS_COURSE_UI: Record<Language, LmsCourseUi> = {
  uz: {
    breadcrumbHome: "Bosh sahifa",
    breadcrumbCourse: "Kurs",
    tabCourseInfo: "Kurs haqida",
    tabInstructor: "O'qituvchi",
    tabReviews: "Sharhlar",
    aboutCourse: "Kurs haqida",
    whatYouLearn: "Nimalarni o'rganasiz?",
    materialIncludes: "Kurs tarkibi",
    requirements: "Talablar",
    audience: "Kimlar uchun",
    courseContent: "Dastur",
    tags: "Teglar",
    enrolled: "Yozilgan",
    reviews: "sharh",
    lessons: "dars",
    free: "Bepul",
    enrollNow: "Yozilish",
    addToCart: "Savatchaga",
    wishlist: "Sevimlilar",
    enrollmentValidity: "Kirish muddati",
    level: "Daraja",
    lastUpdated: "Yangilangan",
    certificate: "Sertifikat",
    noReviews: "Hozircha sharh yo'q",
    relatedCourses: "O'xshash kurslar",
    preview: "Ko'rish",
    previewTitle: "Bepul preview dars",
    previewDesc: "To'liq dastur va barcha darslar uchun platformada ro'yxatdan o'ting.",
    previewEnroll: "Platformada yozilish",
    lockedLesson: "Dars qulflangan",
    lockedDesc: "Bu darsni ko'rish uchun kursga yoziling.",
    students: "O'quvchi",
    courses: "Kurs",
    instructorTab: "O'qituvchi haqida",
    sections: "bo'lim",
    expandAll: "Hammasini ochish",
    collapseAll: "Hammasini yopish",
    totalLength: "jami davomiylik",
    freeConsultation: "Bepul konsultatsiya",
    enrollNote: "To'liq dastur va barcha darslar platformada ochiladi",
    lectures: "dars",
    courseIncludes: "Kurs tarkibi",
  },
  ru: {
    breadcrumbHome: "Главная",
    breadcrumbCourse: "Курс",
    tabCourseInfo: "О курсе",
    tabInstructor: "Преподаватель",
    tabReviews: "Отзывы",
    aboutCourse: "О курсе",
    whatYouLearn: "Чему вы научитесь",
    materialIncludes: "Материалы курса",
    requirements: "Требования",
    audience: "Для кого",
    courseContent: "Программа",
    tags: "Теги",
    enrolled: "Записано",
    reviews: "отзывов",
    lessons: "уроков",
    free: "Бесплатно",
    enrollNow: "Записаться",
    addToCart: "В корзину",
    wishlist: "Избранное",
    enrollmentValidity: "Доступ",
    level: "Уровень",
    lastUpdated: "Обновлено",
    certificate: "Сертификат",
    noReviews: "Отзывов пока нет",
    relatedCourses: "Похожие курсы",
    preview: "Просмотр",
    previewTitle: "Бесплатный урок",
    previewDesc: "Запишитесь на платформе, чтобы открыть полную программу и все уроки.",
    previewEnroll: "Записаться на платформе",
    lockedLesson: "Урок заблокирован",
    lockedDesc: "Запишитесь на курс, чтобы получить доступ к этому уроку.",
    students: "Студентов",
    courses: "Курсов",
    instructorTab: "О преподавателе",
    sections: "разделов",
    expandAll: "Развернуть все",
    collapseAll: "Свернуть все",
    totalLength: "общая длительность",
    freeConsultation: "Бесплатная консультация",
    enrollNote: "Полная программа и все уроки открываются на платформе",
    lectures: "уроков",
    courseIncludes: "Курс включает",
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbCourse: "Course",
    tabCourseInfo: "Course Info",
    tabInstructor: "Instructor",
    tabReviews: "Reviews",
    aboutCourse: "About Course",
    whatYouLearn: "What Will You Learn?",
    materialIncludes: "Material Includes",
    requirements: "Requirements",
    audience: "Audience",
    courseContent: "Course Content",
    tags: "Tags",
    enrolled: "Enrolled",
    reviews: "reviews",
    lessons: "lessons",
    free: "Free",
    enrollNow: "Enroll now",
    addToCart: "Add To Cart",
    wishlist: "Wishlist",
    enrollmentValidity: "Enrollment validity",
    level: "Level",
    lastUpdated: "Last Updated",
    certificate: "Certificate",
    noReviews: "No Review Yet",
    relatedCourses: "Related Courses",
    preview: "Preview",
    previewTitle: "Free preview lesson",
    previewDesc: "Enroll on the platform to unlock the full curriculum and all lessons.",
    previewEnroll: "Enroll on platform",
    lockedLesson: "Lesson locked",
    lockedDesc: "Enroll in this course to access this lesson.",
    students: "Students",
    courses: "Courses",
    instructorTab: "About the instructor",
    sections: "sections",
    expandAll: "Expand all sections",
    collapseAll: "Collapse all sections",
    totalLength: "total length",
    freeConsultation: "Free consultation",
    enrollNote: "Full curriculum and all lessons unlock on the platform",
    lectures: "lectures",
    courseIncludes: "This course includes",
  },
};

export function pickLmsList(lang: Language, list: Record<Language, string[]>): string[] {
  return list[lang] ?? list.en;
}

export function pickLmsText(lang: Language, text: Record<Language, string>): string {
  return text[lang] ?? text.en;
}
