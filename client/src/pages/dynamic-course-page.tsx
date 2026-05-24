import { useParams } from "wouter";
import { getLmsCourse } from "@/lib/lms-courses";
import LmsCoursePage from "@/components/lms-course/lms-course-page";
import CourseDetail from "@/pages/course-detail";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/language-context";

/** Routes /course/:id to LMS template when slug is registered, else legacy catalog page */
export default function DynamicCoursePage() {
  const { id } = useParams<{ id: string }>();
  const lms = id ? getLmsCourse(id) : undefined;

  if (lms) {
    return <LmsCoursePage course={lms} />;
  }

  return <CourseDetail />;
}

export function LmsCourseNotFound() {
  const { lang } = useLanguage();
  const title = lang === "ru" ? "Курс не найден" : lang === "en" ? "Course not found" : "Kurs topilmadi";

  return (
    <Layout>
      <div className="flex min-h-[50vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <Button asChild className="mt-4 rounded-full">
            <Link href="/courses">←</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
