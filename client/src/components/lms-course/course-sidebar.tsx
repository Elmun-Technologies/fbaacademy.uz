import { Link } from "wouter";
import { Award, Calendar, Clock, GraduationCap, MessageCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Language } from "@/lib/translations";
import type { LmsCourse } from "@/lib/lms-course-types";
import type { LmsCourseUi } from "@/lib/i18n/lms-course-ui";
import { pickLmsText } from "@/lib/i18n/lms-course-ui";

type CourseSidebarProps = {
  course: LmsCourse;
  ui: LmsCourseUi;
  lang: Language;
  onEnroll: () => void;
};

export function CourseSidebar({ course, ui, lang, onEnroll }: CourseSidebarProps) {
  const meta = [
    { icon: Clock, label: ui.enrollmentValidity, value: pickLmsText(lang, course.enrollmentValidity) },
    { icon: GraduationCap, label: ui.level, value: course.level },
    { icon: Calendar, label: ui.lastUpdated, value: course.lastUpdated },
    { icon: Award, label: ui.certificate, value: pickLmsText(lang, course.certificate) },
  ];

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg">
        <div className="relative aspect-video bg-zinc-100">
          {course.thumbnail ? (
            <img src={course.thumbnail} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-violet-100 to-violet-50">
              <Play className="h-14 w-14 text-violet-300" />
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-md">
              <Play className="ml-1 h-6 w-6 text-violet-600" fill="currentColor" />
            </div>
          </div>
        </div>

        <div className="space-y-4 p-5">
          <div>
            <Button
              className="h-12 w-full rounded-none bg-violet-600 text-base font-semibold hover:bg-violet-700"
              size="lg"
              onClick={onEnroll}
            >
              {ui.enrollNow}
            </Button>
            <p className="mt-2 text-center text-xs leading-relaxed text-zinc-500">{ui.enrollNote}</p>
          </div>

          <Button variant="outline" className="h-11 w-full rounded-none border-zinc-300" asChild>
            <Link href="/contacts">
              <MessageCircle className="mr-2 h-4 w-4" />
              {ui.freeConsultation}
            </Link>
          </Button>

          <div className="space-y-3 border-t border-zinc-100 pt-4">
            <p className="text-sm font-semibold text-zinc-900">{ui.courseIncludes}</p>
            {meta.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 text-sm">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" />
                <div className="min-w-0">
                  <span className="text-zinc-500">{label}: </span>
                  <span className="font-medium text-zinc-800">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
