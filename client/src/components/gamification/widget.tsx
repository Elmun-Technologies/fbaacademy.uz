import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useGamification } from "@/hooks/use-gamification";
import {
  BADGES,
  LEVELS,
  getCurrentLevel,
  getNextLevel,
  getLevelProgress,
} from "@/lib/gamification";
import { Trophy, X, ChevronRight, Star, Zap } from "lucide-react";

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
          className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-3 shadow-xl dark:border-amber-700 dark:from-amber-950/80 dark:to-yellow-950/80 animate-in slide-in-from-right-4"
          style={{ animationDelay: `${i * 150}ms` }}
        >
          <span className="text-2xl">{badge.emoji}</span>
          <div>
            <div className="text-xs font-bold text-amber-800 dark:text-amber-300">
              🎉 Yangi badge!
            </div>
            <div className="text-sm font-extrabold text-foreground">{badge.name}</div>
            <div className="text-xs text-amber-700 dark:text-amber-400">+{badge.points} ball</div>
          </div>
          <button onClick={onDismiss} className="ml-2 rounded-full p-1 text-amber-600 hover:bg-amber-100 dark:hover:bg-amber-900" data-testid="button-dismiss-badge">
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

export default function GamificationWidget() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { state, awardEvent, lastUnlockedBadges, clearLastUnlocked } = useGamification();
  const [prevPoints, setPrevPoints] = useState(state.totalPoints);
  const [pointsDelta, setPointsDelta] = useState<number | null>(null);

  useEffect(() => {
    const courseId = COURSE_ROUTE_MAP[location];
    if (courseId) {
      awardEvent("course_visit", courseId);
    }
  }, [location]);

  useEffect(() => {
    if (state.totalPoints > prevPoints) {
      const delta = state.totalPoints - prevPoints;
      setPointsDelta(delta);
      setPrevPoints(state.totalPoints);
      const t = setTimeout(() => setPointsDelta(null), 2000);
      return () => clearTimeout(t);
    }
    setPrevPoints(state.totalPoints);
  }, [state.totalPoints]);

  const level = getCurrentLevel(state.totalPoints);
  const nextLevel = getNextLevel(state.totalPoints);
  const progress = getLevelProgress(state.totalPoints);
  const earnedBadges = BADGES.filter((b) => state.earnedBadges.includes(b.id));
  const lockedBadges = BADGES.filter((b) => !state.earnedBadges.includes(b.id));

  return (
    <>
      {lastUnlockedBadges.length > 0 && (
        <BadgeUnlockToast badges={lastUnlockedBadges} onDismiss={clearLastUnlocked} />
      )}

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div
          className="fixed bottom-20 right-4 z-50 w-80 overflow-hidden rounded-3xl border bg-white shadow-2xl dark:bg-card sm:right-6 sm:w-96"
          data-testid="gamification-panel"
        >
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-5 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{level.emoji}</span>
                <div>
                  <div className="text-xs font-medium opacity-90">Darajangiz</div>
                  <div className="text-lg font-extrabold">{level.name}</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-full p-1.5 hover:bg-white/20" data-testid="button-close-widget">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="text-3xl font-extrabold" data-testid="text-total-points">{state.totalPoints}</div>
                <div className="text-xs opacity-80">umumiy ball</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold">{earnedBadges.length}/{BADGES.length}</div>
                <div className="text-xs opacity-80">badge</div>
              </div>
            </div>
            <div className="mt-3">
              <div className="mb-1 flex justify-between text-xs opacity-80">
                <span>{level.name}</span>
                {nextLevel && <span>{nextLevel.name}</span>}
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/30">
                <div
                  className="h-full rounded-full bg-white transition-all duration-700"
                  style={{ width: `${progress}%` }}
                  data-testid="progress-bar-level"
                />
              </div>
              {nextLevel && (
                <div className="mt-1 text-xs opacity-80">{nextLevel.minPoints - state.totalPoints} ball qoldi → {nextLevel.name}</div>
              )}
            </div>
          </div>

          <div className="max-h-72 overflow-y-auto p-4">
            {earnedBadges.length > 0 && (
              <div className="mb-4">
                <div className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">Olingan badge'lar ({earnedBadges.length})</div>
                <div className="flex flex-wrap gap-2">
                  {earnedBadges.map((badge) => (
                    <div
                      key={badge.id}
                      className="group relative flex flex-col items-center"
                      title={badge.name}
                      data-testid={`badge-earned-${badge.id}`}
                    >
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${badge.color} shadow-md transition-transform group-hover:scale-110`}>
                        <span className="text-xl">{badge.emoji}</span>
                      </div>
                      <div className="mt-1 max-w-12 truncate text-center text-xs font-medium leading-none">{badge.name.split(" ")[0]}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {lockedBadges.length > 0 && (
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">Qulfli ({lockedBadges.length})</div>
                <div className="flex flex-wrap gap-2">
                  {lockedBadges.map((badge) => (
                    <div
                      key={badge.id}
                      className="group relative flex flex-col items-center"
                      title={`${badge.name}: ${badge.description}`}
                      data-testid={`badge-locked-${badge.id}`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 shadow-sm transition-transform group-hover:scale-105 dark:bg-slate-700">
                        <span className="text-xl grayscale opacity-40">{badge.emoji}</span>
                      </div>
                      <div className="mt-1 max-w-12 truncate text-center text-xs text-muted-foreground leading-none">{badge.name.split(" ")[0]}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="border-t p-3">
            <Link href="/achievements" onClick={() => setOpen(false)}>
              <button className="flex w-full items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-bold transition-colors hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700" data-testid="button-view-achievements">
                <span className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" /> Barcha yutuqlar va test
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>
            </Link>
          </div>
        </div>
      )}

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
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce rounded-full bg-green-500 px-2 py-0.5 text-xs font-bold text-white shadow">
            +{pointsDelta}
          </span>
        )}
      </button>
    </>
  );
}
