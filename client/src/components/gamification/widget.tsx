import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useGamification } from "@/hooks/use-gamification";
import {
  BADGES,
  LEVELS,
  getCurrentLevel,
  getNextLevel,
  getLevelProgress,
} from "@/lib/gamification";
import { Trophy, X, ChevronRight, Star, Zap, Play, FileText, Brain, Lock } from "lucide-react";

export function BadgeUnlockToast({ badges, onDismiss }: { badges: { emoji: string; name: string; points: number }[]; onDismiss: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 4000);
    return () => clearTimeout(t);
  }, [onDismiss]);

  if (badges.length === 0) return null;

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-2 sm:right-6" data-testid="badge-unlock-toast">
      {badges.map((badge, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-900/30 to-yellow-900/30 px-4 py-3 shadow-xl animate-in slide-in-from-right-4"
          style={{ animationDelay: `${i * 150}ms` }}
        >
          <span className="text-2xl">{badge.emoji}</span>
          <div>
            <div className="text-xs font-bold text-amber-400">🎉 Yangi badge!</div>
            <div className="text-sm font-extrabold text-white">{badge.name}</div>
            <div className="text-xs text-amber-500">+{badge.points} ball</div>
          </div>
          <button onClick={onDismiss} className="ml-2 rounded-full p-1 text-amber-500 hover:bg-amber-900/30" data-testid="button-dismiss-badge">
            <X className="h-3 w-3" />
          </button>
        </div>
      ))}
    </div>
  );
}

const COURSE_ROUTE_MAP: Record<string, string> = {
  "/course/acca": "acca",
  "/course/applied-knowledge": "applied-knowledge",
  "/course/applied-skills": "applied-skills",
  "/course/strategic-professional": "strategic-professional",
  "/course/dipifr": "dipifr",
  "/course/financial-modeling": "financial-modeling",
  "/course/jurisprudence": "jurisprudence",
  "/course/1c-course": "1c-course",
};

const QUICK_ACTIONS = [
  { icon: Play, label: "Video ko'rish", labelRu: "Посмотреть видео", pts: "+20", event: "video_watch" as const, done_key: "videoWatched", color: "from-rose-500 to-pink-500" },
  { icon: FileText, label: "Ariza topshirish", labelRu: "Оставить заявку", pts: "+50", event: "form_submit" as const, done_key: "formSubmitted", color: "from-violet-500 to-purple-600" },
  { icon: Brain, label: "Test ishlash", labelRu: "Пройти тест", pts: "+40", event: "quiz_complete" as const, done_key: "quizCompleted", color: "from-teal-500 to-emerald-600" },
];

export default function GamificationWidget() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"actions" | "badges">("actions");
  const [location] = useLocation();
  const { state, awardEvent, lastUnlockedBadges, clearLastUnlocked } = useGamification();
  const [prevPoints, setPrevPoints] = useState(state.totalPoints);
  const [pointsDelta, setPointsDelta] = useState<number | null>(null);

  useEffect(() => {
    const courseId = COURSE_ROUTE_MAP[location];
    if (courseId) awardEvent("course_visit", courseId);
  }, [location]);

  useEffect(() => {
    if (state.totalPoints > prevPoints) {
      const delta = state.totalPoints - prevPoints;
      setPointsDelta(delta);
      setPrevPoints(state.totalPoints);
      const t = setTimeout(() => setPointsDelta(null), 2500);
      return () => clearTimeout(t);
    }
    setPrevPoints(state.totalPoints);
  }, [state.totalPoints]);

  const level = getCurrentLevel(state.totalPoints);
  const nextLevel = getNextLevel(state.totalPoints);
  const progress = getLevelProgress(state.totalPoints);
  const earnedBadges = BADGES.filter((b) => state.earnedBadges.includes(b.id));
  const lockedBadges = BADGES.filter((b) => !state.earnedBadges.includes(b.id));

  const coursesVisited = state.visitedCourses?.length ?? 0;
  const totalCourses = 8;

  return (
    <>
      {lastUnlockedBadges.length > 0 && (
        <BadgeUnlockToast badges={lastUnlockedBadges} onDismiss={clearLastUnlocked} />
      )}

      {open && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)} />
      )}

      {open && (
        <div
          className="fixed bottom-20 right-4 z-50 w-80 overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl sm:right-6 sm:w-[340px]"
          data-testid="gamification-panel"
        >
          {/* ── Header ── */}
          <div className="relative bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-purple-900 px-5 py-5 text-white overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/5" />
            <div className="absolute -right-2 top-8 h-12 w-12 rounded-full bg-amber-400/10" />

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
                  <span className="text-lg">{level.emoji}</span>
                </div>
                <div>
                  <div className="text-xs font-medium text-white/60">Darajangiz</div>
                  <div className="text-base font-extrabold">{level.name}</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-full p-1.5 hover:bg-white/10 transition-colors" data-testid="button-close-widget">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Points row */}
            <div className="flex items-end justify-between mb-3">
              <div>
                <div className="text-4xl font-extrabold leading-none" data-testid="text-total-points">{state.totalPoints}</div>
                <div className="text-xs text-white/50 mt-0.5">umumiy ball</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-extrabold text-amber-400">{earnedBadges.length}/{BADGES.length}</div>
                <div className="text-xs text-white/50">badge</div>
              </div>
            </div>

            {/* Progress bar */}
            <div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-700"
                  style={{ width: `${progress}%` }}
                  data-testid="progress-bar-level"
                />
              </div>
              {nextLevel && (
                <div className="mt-1.5 flex items-center justify-between text-xs text-white/50">
                  <span>{level.name}</span>
                  <span className="text-amber-400 font-medium">{nextLevel.minPoints - state.totalPoints} ball qoldi → {nextLevel.name}</span>
                </div>
              )}
            </div>

            {/* Courses progress */}
            <div className="mt-3 rounded-xl bg-white/5 border border-white/10 px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-xs text-white/70">Kurslar ko'rildi</span>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalCourses }).map((_, i) => (
                  <div key={i} className={`h-1.5 w-4 rounded-full ${i < coursesVisited ? "bg-amber-400" : "bg-white/15"}`} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Tabs ── */}
          <div className="flex border-b">
            {(["actions", "badges"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-2.5 text-xs font-bold transition-colors ${tab === t ? "border-b-2 border-purple-500 text-purple-400" : "text-zinc-500 hover:text-zinc-300"}`}
                data-testid={`tab-${t}`}
              >
                {t === "actions" ? (
                  <span className="flex items-center justify-center gap-1"><Zap className="h-3.5 w-3.5" /> Topshiriqlar</span>
                ) : (
                  <span className="flex items-center justify-center gap-1"><Trophy className="h-3.5 w-3.5" /> Badge'lar</span>
                )}
              </button>
            ))}
          </div>

          {/* ── Actions tab ── */}
          {tab === "actions" && (
            <div className="p-4 space-y-2.5" data-testid="tab-panel-actions">
              <p className="text-xs text-zinc-500 mb-1">Quyidagi harakatlarni bajaring va ball yig'ing:</p>
              {QUICK_ACTIONS.map((action) => {
                const done = action.done_key === "videoWatched"
                  ? state.videoWatched
                  : action.done_key === "formSubmitted"
                  ? state.formSubmitted
                  : state.quizCompleted;
                const Icon = action.icon;
                return (
                  <div
                    key={action.event}
                    className={`flex items-center justify-between rounded-xl px-3 py-3 border transition-all ${done ? "border-emerald-500/30 bg-emerald-900/20" : "border-white/10 bg-zinc-800 hover:border-purple-500/30 hover:bg-purple-900/20"}`}
                    data-testid={`action-card-${action.event}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${done ? "bg-emerald-800/40" : `bg-gradient-to-br ${action.color}`} shadow-sm`}>
                        {done ? <span className="text-sm">✓</span> : <Icon className="h-4 w-4 text-white" />}
                      </div>
                      <div>
                        <div className={`text-sm font-semibold ${done ? "text-emerald-400 line-through" : "text-zinc-200"}`}>{action.label}</div>
                        {done && <div className="text-xs text-emerald-600 font-medium">Bajarildi!</div>}
                      </div>
                    </div>
                    {done ? (
                      <span className="text-xs font-bold text-emerald-300 bg-emerald-700/40 rounded-full px-2 py-0.5">+{action.pts.slice(1)}</span>
                    ) : (
                      <span className="text-sm font-extrabold text-purple-700">{action.pts}</span>
                    )}
                  </div>
                );
              })}

              {/* Kurs explorers progress */}
              <div className="rounded-xl border border-white/10 bg-zinc-800 px-3 py-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-sm">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-zinc-200">Kurslarni o'rganish</div>
                  </div>
                  <span className="text-sm font-extrabold text-purple-700">+100</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-700">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500" style={{ width: `${(coursesVisited / totalCourses) * 100}%` }} />
                </div>
                <div className="mt-1 text-xs text-zinc-500">{coursesVisited}/{totalCourses} kurs ko'rildi</div>
              </div>
            </div>
          )}

          {/* ── Badges tab ── */}
          {tab === "badges" && (
            <div className="max-h-64 overflow-y-auto p-4" data-testid="tab-panel-badges">
              {earnedBadges.length > 0 && (
                <div className="mb-4">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wide text-zinc-500">Olingan ({earnedBadges.length})</div>
                  <div className="flex flex-wrap gap-2">
                    {earnedBadges.map((badge) => (
                      <div key={badge.id} className="group relative flex flex-col items-center" title={badge.description} data-testid={`badge-earned-${badge.id}`}>
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${badge.color} shadow-md transition-transform group-hover:scale-110`}>
                          <span className="text-xl">{badge.emoji}</span>
                        </div>
                        <div className="mt-1 max-w-12 truncate text-center text-xs font-medium text-zinc-400 leading-none">{badge.name.split(" ")[0]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {lockedBadges.length > 0 && (
                <div>
                  <div className="mb-2 text-xs font-bold uppercase tracking-wide text-zinc-500">Qulfli ({lockedBadges.length})</div>
                  <div className="flex flex-wrap gap-2">
                    {lockedBadges.map((badge) => (
                      <div key={badge.id} className="group relative flex flex-col items-center" title={`${badge.name}: ${badge.description}`} data-testid={`badge-locked-${badge.id}`}>
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-700 transition-transform group-hover:scale-105">
                          <span className="text-xl grayscale opacity-30">{badge.emoji}</span>
                          <Lock className="absolute bottom-0.5 right-0.5 h-3 w-3 text-zinc-500" />
                        </div>
                        <div className="mt-1 max-w-12 truncate text-center text-xs text-zinc-500 leading-none">{badge.name.split(" ")[0]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Footer ── */}
          <div className="border-t p-3">
            <a href="/achievements" onClick={() => setOpen(false)} className="flex w-full items-center justify-between rounded-xl bg-zinc-800 px-4 py-2.5 text-sm font-bold transition-colors hover:bg-purple-600/20 hover:text-purple-400" data-testid="button-view-achievements">
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500" /> Barcha yutuqlar
              </span>
              <ChevronRight className="h-4 w-4 text-zinc-500" />
            </a>
          </div>
        </div>
      )}

      {/* ── Floating button ── */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 shadow-2xl transition-all hover:scale-110 active:scale-95 sm:right-6"
        data-testid="button-open-gamification"
        aria-label="Yutuqlar va ballar"
      >
        <Trophy className="h-6 w-6 text-white" />
        <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1 text-xs font-extrabold text-amber-700 shadow-md" data-testid="badge-points-count">
          {state.totalPoints}
        </span>
        {pointsDelta !== null && (
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-2.5 py-0.5 text-xs font-bold text-white shadow-lg whitespace-nowrap">
            +{pointsDelta} ball
          </span>
        )}
      </button>
    </>
  );
}
