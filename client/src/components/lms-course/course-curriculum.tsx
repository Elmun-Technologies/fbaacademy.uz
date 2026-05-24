import { useMemo, useState } from "react";
import { ChevronDown, Lock, PlayCircle, FileText, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LmsLesson, LmsSection } from "@/lib/lms-course-types";
import type { LmsCourseUi } from "@/lib/i18n/lms-course-ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type CourseCurriculumProps = {
  sections: LmsSection[];
  ui: LmsCourseUi;
  enrollUrl: string;
};

function lessonIcon(lesson: LmsLesson) {
  if (lesson.type === "article") return FileText;
  if (lesson.type === "quiz") return HelpCircle;
  return PlayCircle;
}

/** Parse "m:ss", "h:mm", or plain minutes into total seconds */
function parseDurationToSeconds(d: string): number {
  const trimmed = d.trim().toLowerCase();
  if (!trimmed) return 0;
  if (trimmed.includes(":")) {
    const parts = trimmed.split(":").map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
  }
  const minMatch = trimmed.match(/^(\d+)\s*min/);
  if (minMatch) return Number(minMatch[1]) * 60;
  const hMatch = trimmed.match(/^(\d+)\s*h/);
  if (hMatch) return Number(hMatch[1]) * 3600;
  return 0;
}

function formatLessonDuration(duration?: string): string | null {
  if (!duration || duration === "00:00" || duration === "0:00") return null;
  return duration;
}

function formatSeconds(total: number): string {
  if (total <= 0) return "";
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  if (h > 0 && m > 0) return `${h}h ${m}m`;
  if (h > 0) return `${h}h`;
  return `${m}min`;
}

function sectionDuration(lessons: LmsLesson[]): string {
  const sec = lessons.reduce((sum, l) => sum + (l.duration ? parseDurationToSeconds(l.duration) : 0), 0);
  return formatSeconds(sec);
}

export default function CourseCurriculum({ sections, ui, enrollUrl }: CourseCurriculumProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const first = sections[0]?.id;
    return first ? { [first]: true } : {};
  });
  const [previewLesson, setPreviewLesson] = useState<LmsLesson | null>(null);
  const [lockedLesson, setLockedLesson] = useState<LmsLesson | null>(null);

  const totalLessons = useMemo(() => sections.reduce((n, s) => n + s.lessons.length, 0), [sections]);
  const totalDuration = useMemo(() => {
    const sec = sections.flatMap((s) => s.lessons).reduce((sum, l) => {
      return sum + (l.duration ? parseDurationToSeconds(l.duration) : 0);
    }, 0);
    return formatSeconds(sec);
  }, [sections]);

  const allExpanded = sections.length > 0 && sections.every((s) => openSections[s.id]);

  const toggle = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const next: Record<string, boolean> = {};
    sections.forEach((s) => {
      next[s.id] = true;
    });
    setOpenSections(next);
  };

  const collapseAll = () => setOpenSections({});

  const onLessonClick = (lesson: LmsLesson) => {
    if (lesson.isPreview) {
      setPreviewLesson(lesson);
      return;
    }
    setLockedLesson(lesson);
  };

  const summaryParts = [
    `${sections.length} ${ui.sections}`,
    `${totalLessons} ${ui.lectures}`,
    totalDuration ? `${totalDuration} ${ui.totalLength}` : null,
  ].filter(Boolean);

  return (
    <>
      <div className="rounded-xl border border-zinc-200 bg-white">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-zinc-100 px-4 py-4 sm:px-5">
          <div>
            <h2 className="text-xl font-bold text-zinc-900">{ui.courseContent}</h2>
            <p className="mt-1 text-sm text-zinc-500">{summaryParts.join(" • ")}</p>
          </div>
          <button
            type="button"
            onClick={allExpanded ? collapseAll : expandAll}
            className="shrink-0 text-sm font-semibold text-violet-600 hover:text-violet-800"
          >
            {allExpanded ? ui.collapseAll : ui.expandAll}
          </button>
        </div>

        <div className="divide-y divide-zinc-100">
          {sections.map((section) => {
            const isOpen = openSections[section.id];
            const sectionLessons = section.lessons.length;
            const dur = sectionDuration(section.lessons);
            const sectionMeta = dur
              ? `${sectionLessons} ${ui.lectures} • ${dur}`
              : `${sectionLessons} ${ui.lectures}`;

            return (
              <div key={section.id}>
                <button
                  type="button"
                  onClick={() => toggle(section.id)}
                  className="flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-zinc-50 sm:px-5"
                >
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-zinc-700 transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                  <span className="min-w-0 flex-1 font-semibold text-zinc-900">{section.title}</span>
                  <span className="shrink-0 text-sm text-zinc-500">{sectionMeta}</span>
                </button>

                {isOpen && sectionLessons > 0 ? (
                  <ul className="border-t border-zinc-100 bg-zinc-50/50">
                    {section.description ? (
                      <li className="border-b border-zinc-100 px-4 py-2 text-sm text-zinc-500 sm:pl-12 sm:pr-5">
                        {section.description}
                      </li>
                    ) : null}
                    {section.lessons.map((lesson) => {
                      const Icon = lessonIcon(lesson);
                      const locked = !lesson.isPreview;
                      return (
                        <li key={lesson.id} className="border-b border-zinc-100 last:border-b-0">
                          <button
                            type="button"
                            onClick={() => onLessonClick(lesson)}
                            className="flex w-full items-center gap-3 py-3 pl-10 pr-4 text-left text-sm transition-colors hover:bg-violet-50/60 sm:pl-14 sm:pr-5"
                          >
                            <Icon
                              className={cn(
                                "h-4 w-4 shrink-0",
                                lesson.isPreview ? "text-violet-600" : "text-zinc-400",
                              )}
                            />
                            <span className="min-w-0 flex-1 text-zinc-800">{lesson.title}</span>
                            {lesson.isPreview ? (
                              <span className="shrink-0 text-sm font-semibold text-violet-600 hover:underline">
                                {ui.preview}
                              </span>
                            ) : null}
                            {formatLessonDuration(lesson.duration) ? (
                              <span className="shrink-0 text-sm text-zinc-400">{formatLessonDuration(lesson.duration)}</span>
                            ) : null}
                            {locked ? <Lock className="h-4 w-4 shrink-0 text-zinc-300" /> : null}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <Dialog open={Boolean(previewLesson)} onOpenChange={() => setPreviewLesson(null)}>
        <DialogContent className="max-w-md border-zinc-200 bg-white text-zinc-900">
          <DialogHeader>
            <DialogTitle>{ui.previewTitle}</DialogTitle>
            <DialogDescription className="text-zinc-600">{previewLesson?.title}</DialogDescription>
          </DialogHeader>
          <p className="text-sm text-zinc-600">{ui.previewDesc}</p>
          <Button asChild className="w-full rounded-none bg-violet-600 hover:bg-violet-700">
            <a href={enrollUrl}>{ui.previewEnroll}</a>
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={Boolean(lockedLesson)} onOpenChange={() => setLockedLesson(null)}>
        <DialogContent className="max-w-md border-zinc-200 bg-white text-zinc-900">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-zinc-400" />
              {ui.lockedLesson}
            </DialogTitle>
            <DialogDescription className="text-zinc-600">{lockedLesson?.title}</DialogDescription>
          </DialogHeader>
          <p className="text-sm text-zinc-600">{ui.lockedDesc}</p>
          <Button asChild className="w-full rounded-none bg-violet-600 hover:bg-violet-700">
            <a href={enrollUrl}>{ui.enrollNow}</a>
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
