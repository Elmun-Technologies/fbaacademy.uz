import { Link } from "wouter";
import { BookOpen, CheckCircle2, GraduationCap, Star, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import TeacherAvatar from "@/components/teacher-avatar";
import { instructorPortraitClass } from "@/components/instructor-photo";
import CourseCurriculum from "@/components/lms-course/course-curriculum";
import { CourseSidebar } from "@/components/lms-course/course-sidebar";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";
import { useLanguage } from "@/contexts/language-context";
import { LMS_COURSE_UI, pickLmsList, pickLmsText } from "@/lib/i18n/lms-course-ui";
import { localizeTeacher } from "@/lib/localize-content";
import { teachers } from "@/lib/data";
import type { LmsCourse } from "@/lib/lms-course-types";
import { Badge } from "@/components/ui/badge";

type LmsCoursePageProps = {
  course: LmsCourse;
};

export default function LmsCoursePage({ course }: LmsCoursePageProps) {
  const { lang } = useLanguage();
  const ui = LMS_COURSE_UI[lang];

  const instructorRaw = teachers.find((t) => t.id === course.instructorId);
  const instructor = instructorRaw ? localizeTeacher(instructorRaw, lang) : null;

  const learn = pickLmsList(lang, course.learn);
  const materials = pickLmsList(lang, course.materials);
  const requirements = pickLmsList(lang, course.requirements);
  const audience = pickLmsList(lang, course.audience);
  const totalLessons = course.curriculum.reduce((n, s) => n + s.lessons.length, 0);
  const totalSections = course.curriculum.length;

  const handleEnroll = () => {
    window.open(course.wpEnrollUrl, "_blank", "noopener,noreferrer");
  };

  useSEO({
    title: `${course.title} | FBA Academy`,
    description: pickLmsText(lang, course.about).slice(0, 160),
    breadcrumb: [
      { name: ui.breadcrumbHome, url: "https://fbaacademy.uz/" },
      { name: ui.breadcrumbCourse, url: "https://fbaacademy.uz/courses" },
      { name: course.title, url: `https://fbaacademy.uz/course/${course.slug}` },
    ],
    jsonLd: {
      "@type": "Course",
      name: course.title,
      description: pickLmsText(lang, course.about),
      provider: { "@type": "Organization", name: "FBA Academy" },
    },
  });

  return (
    <Layout>
      <div className="min-h-screen bg-zinc-50 pb-20 text-zinc-900 lg:pb-0">
        {/* Hero */}
        <section className="border-b border-zinc-200 bg-white pt-20 pb-8 sm:pt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: ui.breadcrumbCourse, href: "/courses" },
                { label: course.title },
              ]}
            />

            <div className="mt-6 flex flex-wrap gap-2">
              {course.badges.map((b) => (
                <Badge key={b} className="rounded-full bg-violet-100 text-violet-800 hover:bg-violet-100">
                  {b}
                </Badge>
              ))}
            </div>

            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
              {course.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-600">
              <span className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                {totalSections} {ui.sections} · {totalLessons} {ui.lectures}
              </span>
              <span className="flex items-center gap-1">
                <GraduationCap className="h-4 w-4" />
                {course.level}
              </span>
              {course.reviewCount > 0 ? (
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {course.rating.toFixed(1)}
                  <span className="text-zinc-400">
                    ({course.reviewCount} {ui.reviews})
                  </span>
                </span>
              ) : null}
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {course.enrolledCount} {ui.enrolled}
              </span>
              {instructor ? (
                <Link href="/teachers" className="flex items-center gap-2 hover:text-violet-700">
                  <TeacherAvatar name={instructor.name} src={instructor.avatar} className="h-7 w-7 rounded-full" />
                  <span className="font-medium">{instructor.name}</span>
                </Link>
              ) : null}
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:gap-10 xl:grid-cols-[1fr_380px]">
              <div className="min-w-0">
                <Tabs defaultValue="info" className="w-full">
                  <TabsList className="mb-6 h-auto w-full justify-start gap-0 rounded-none border-b border-zinc-200 bg-transparent p-0">
                    <TabsTrigger
                      value="info"
                      className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:text-violet-700 data-[state=active]:shadow-none"
                    >
                      {ui.tabCourseInfo}
                    </TabsTrigger>
                    <TabsTrigger
                      value="instructor"
                      className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:text-violet-700 data-[state=active]:shadow-none"
                    >
                      {ui.tabInstructor}
                    </TabsTrigger>
                    <TabsTrigger
                      value="reviews"
                      className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:text-violet-700 data-[state=active]:shadow-none"
                    >
                      {ui.tabReviews}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="info" className="mt-0 space-y-8">
                    <div className="rounded-xl border border-zinc-200 bg-white p-5 sm:p-6">
                      <h2 className="mb-3 text-xl font-bold">{ui.aboutCourse}</h2>
                      <p className="leading-relaxed text-zinc-600">{pickLmsText(lang, course.about)}</p>
                    </div>

                    <CourseCurriculum sections={course.curriculum} ui={ui} enrollUrl={course.wpEnrollUrl} />

                    <div className="rounded-xl border border-zinc-200 bg-white p-5 sm:p-6">
                      <h2 className="mb-4 text-xl font-bold">{ui.whatYouLearn}</h2>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {learn.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-zinc-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-zinc-200 bg-white p-5 sm:p-6">
                      <h2 className="mb-3 text-xl font-bold">{ui.materialIncludes}</h2>
                      <ul className="list-inside list-disc space-y-1.5 text-sm text-zinc-600">
                        {materials.map((m) => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="rounded-xl border border-zinc-200 bg-white p-5 sm:p-6">
                        <h2 className="mb-3 text-lg font-bold">{ui.requirements}</h2>
                        <ul className="list-inside list-disc space-y-1.5 text-sm text-zinc-600">
                          {requirements.map((r) => (
                            <li key={r}>{r}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl border border-zinc-200 bg-white p-5 sm:p-6">
                        <h2 className="mb-3 text-lg font-bold">{ui.audience}</h2>
                        <ul className="list-inside list-disc space-y-1.5 text-sm text-zinc-600">
                          {audience.map((a) => (
                            <li key={a}>{a}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {course.tags.length > 0 ? (
                      <div className="rounded-xl border border-zinc-200 bg-white p-5 sm:p-6">
                        <h2 className="mb-3 text-xl font-bold">{ui.tags}</h2>
                        <div className="flex flex-wrap gap-2">
                          {course.tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </TabsContent>

                  <TabsContent value="instructor" className="mt-0">
                    {instructor ? (
                      <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-zinc-100">
                            <TeacherAvatar
                              name={instructor.name}
                              src={instructor.avatar}
                              className={instructorPortraitClass()}
                            />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold">{instructor.name}</h2>
                            <p className="mt-1 text-sm font-medium text-violet-700">{instructor.role}</p>
                            <p className="mt-3 text-sm leading-relaxed text-zinc-600">{instructor.bio}</p>
                            {course.instructorBio ? (
                              <p className="mt-3 text-sm leading-relaxed text-zinc-500 whitespace-pre-line">
                                {course.instructorBio}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </TabsContent>

                  <TabsContent value="reviews" className="mt-0">
                    <div className="rounded-2xl border border-zinc-200 bg-white py-16 text-center">
                      <p className="text-zinc-500">{ui.noReviews}</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <CourseSidebar course={course} ui={ui} lang={lang} onEnroll={handleEnroll} />
            </div>

            {course.relatedCourses.length > 0 ? (
              <div className="mt-14 border-t border-zinc-200 pt-10">
                <h2 className="mb-6 text-2xl font-bold">{ui.relatedCourses}</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {course.relatedCourses.map((rel) => (
                    <a
                      key={rel.slug}
                      href={rel.href ?? "#"}
                      className="group rounded-xl border border-zinc-200 bg-white p-4 transition-shadow hover:shadow-md"
                    >
                      {rel.badge ? (
                        <span className="text-xs font-bold text-violet-600">{rel.badge}</span>
                      ) : null}
                      <h3 className="mt-1 font-semibold text-zinc-900 group-hover:text-violet-700">{rel.title}</h3>
                      <p className="mt-2 text-xs text-zinc-500">
                        {rel.lessonCount} {ui.lessons} · {rel.level}
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">{rel.instructorName}</p>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white p-3 shadow-lg lg:hidden">
          <Button
            className="h-11 w-full rounded-none bg-violet-600 font-semibold hover:bg-violet-700"
            onClick={handleEnroll}
          >
            {ui.enrollNow}
          </Button>
        </div>
      </div>
    </Layout>
  );
}
