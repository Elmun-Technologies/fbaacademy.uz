export type BadgeId =
  | "first_step"
  | "course_explorer"
  | "deep_diver"
  | "all_courses"
  | "video_watcher"
  | "form_submitted"
  | "quiz_master"
  | "acca_seeker"
  | "dipifr_star"
  | "fm_analyst"
  | "onec_pro"
  | "law_scholar"
  | "night_owl"
  | "speed_reader"
  | "elite";

export interface Badge {
  id: BadgeId;
  name: string;
  description: string;
  emoji: string;
  points: number;
  color: string;
}

export interface GamificationState {
  totalPoints: number;
  earnedBadges: BadgeId[];
  visitedCourses: string[];
  videoWatched: boolean;
  formSubmitted: boolean;
  quizCompleted: boolean;
  events: string[];
}

export interface Level {
  name: string;
  minPoints: number;
  maxPoints: number;
  emoji: string;
  color: string;
}

export const BADGES: Badge[] = [
  {
    id: "first_step",
    name: "Birinchi Qadam",
    description: "Birinchi kurs sahifasiga tashrif buyurdingiz",
    emoji: "🎯",
    points: 10,
    color: "from-green-400 to-emerald-500",
  },
  {
    id: "course_explorer",
    name: "Kurs Kashfiyotchisi",
    description: "3 ta kurs sahifasini ko'rdingiz",
    emoji: "🗺️",
    points: 25,
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: "deep_diver",
    name: "Chuqur Sho'ng'uvchi",
    description: "5 ta kurs sahifasini o'rgandinggiz",
    emoji: "🤿",
    points: 50,
    color: "from-indigo-400 to-purple-500",
  },
  {
    id: "all_courses",
    name: "To'liq Tadqiqotchi",
    description: "Barcha 8 ta kurs sahifasida bo'ldingiz",
    emoji: "🌟",
    points: 100,
    color: "from-amber-400 to-orange-500",
  },
  {
    id: "video_watcher",
    name: "Video Tomashobin",
    description: "FBA Academy video darsini ko'rdingiz",
    emoji: "🎬",
    points: 20,
    color: "from-rose-400 to-pink-500",
  },
  {
    id: "form_submitted",
    name: "Qadamli Talabgor",
    description: "Konsultatsiyaga ro'yxatdan o'tdingiz",
    emoji: "📝",
    points: 50,
    color: "from-violet-400 to-purple-600",
  },
  {
    id: "quiz_master",
    name: "Bilim Tekshiruvchi",
    description: "Bilim testini muvaffaqiyatli tugatdingiz",
    emoji: "🧪",
    points: 40,
    color: "from-teal-400 to-green-500",
  },
  {
    id: "acca_seeker",
    name: "ACCA Izlovchi",
    description: "ACCA kurslariga tashrif buyurdingiz",
    emoji: "🏅",
    points: 35,
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "dipifr_star",
    name: "DipIFR Yulduzi",
    description: "DipIFR kursini o'rgandinggiz",
    emoji: "⭐",
    points: 35,
    color: "from-indigo-500 to-slate-600",
  },
  {
    id: "fm_analyst",
    name: "Moliya Tahlilchisi",
    description: "Financial Modeling kursini ko'rdingiz",
    emoji: "📊",
    points: 35,
    color: "from-emerald-500 to-green-700",
  },
  {
    id: "onec_pro",
    name: "1C Professional",
    description: "1C: Buxgalteriya kursiga tashrif buyurdingiz",
    emoji: "🔴",
    points: 35,
    color: "from-red-500 to-rose-600",
  },
  {
    id: "law_scholar",
    name: "Huquq Olimlari",
    description: "Huquqshunoslik kursiga tashrif buyurdingiz",
    emoji: "⚖️",
    points: 35,
    color: "from-amber-500 to-yellow-600",
  },
  {
    id: "night_owl",
    name: "Kechki O'quvchi",
    description: "Kechki soatlarda (20:00–00:00) tashrif buyurdingiz",
    emoji: "🦉",
    points: 15,
    color: "from-slate-500 to-slate-700",
  },
  {
    id: "speed_reader",
    name: "Tez O'quvchi",
    description: "Bir sessiyada 3+ kurs sahifasini ko'rdingiz",
    emoji: "⚡",
    points: 30,
    color: "from-yellow-400 to-amber-500",
  },
  {
    id: "elite",
    name: "FBA Elite",
    description: "300+ ball to'plab Elite darajaga yetdingiz!",
    emoji: "🏆",
    points: 100,
    color: "from-amber-400 via-yellow-500 to-orange-500",
  },
];

export const LEVELS: Level[] = [
  { name: "Yangi Talaba", minPoints: 0, maxPoints: 49, emoji: "🌱", color: "text-green-600" },
  { name: "Talaba", minPoints: 50, maxPoints: 149, emoji: "📚", color: "text-blue-600" },
  { name: "Izlanuvchi", minPoints: 150, maxPoints: 299, emoji: "🔍", color: "text-indigo-600" },
  { name: "Mutaxassis", minPoints: 300, maxPoints: 499, emoji: "💼", color: "text-purple-600" },
  { name: "FBA Elite", minPoints: 500, maxPoints: Infinity, emoji: "🏆", color: "text-amber-600" },
];

const STORAGE_KEY = "fba_gamification";

export const DEFAULT_STATE: GamificationState = {
  totalPoints: 0,
  earnedBadges: [],
  visitedCourses: [],
  videoWatched: false,
  formSubmitted: false,
  quizCompleted: false,
  events: [],
};

export function loadState(): GamificationState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATE };
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

export function saveState(state: GamificationState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new Event("gamification_update"));
  } catch {}
}

export function getCurrentLevel(points: number): Level {
  return LEVELS.slice().reverse().find((l) => points >= l.minPoints) || LEVELS[0];
}

export function getNextLevel(points: number): Level | null {
  const idx = LEVELS.findIndex((l) => points >= l.minPoints && points <= l.maxPoints);
  return idx >= 0 && idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null;
}

export function getLevelProgress(points: number): number {
  const current = getCurrentLevel(points);
  if (current.maxPoints === Infinity) return 100;
  const range = current.maxPoints - current.minPoints;
  const progress = points - current.minPoints;
  return Math.min(100, Math.round((progress / range) * 100));
}

export function getBadge(id: BadgeId): Badge {
  return BADGES.find((b) => b.id === id)!;
}

export type EventType =
  | "course_visit"
  | "video_watch"
  | "form_submit"
  | "quiz_complete";

export interface AwardResult {
  pointsGained: number;
  newBadges: Badge[];
  newState: GamificationState;
}

export function processEvent(
  state: GamificationState,
  event: EventType,
  payload?: string
): AwardResult {
  const newState = { ...state, events: [...state.events] };
  let pointsGained = 0;
  const newBadges: Badge[] = [];

  const award = (pts: number, badgeId?: BadgeId) => {
    pointsGained += pts;
    newState.totalPoints += pts;
    if (badgeId && !newState.earnedBadges.includes(badgeId)) {
      newState.earnedBadges = [...newState.earnedBadges, badgeId];
      newBadges.push(getBadge(badgeId));
    }
  };

  if (event === "course_visit" && payload) {
    if (!newState.visitedCourses.includes(payload)) {
      newState.visitedCourses = [...newState.visitedCourses, payload];
      award(10);

      if (newState.visitedCourses.length === 1) award(0, "first_step");
      if (newState.visitedCourses.length === 3) award(25, "course_explorer");
      if (newState.visitedCourses.length === 5) award(50, "deep_diver");
      if (newState.visitedCourses.length >= 8) award(100, "all_courses");

      const courseMap: Record<string, BadgeId> = {
        "acca": "acca_seeker",
        "applied-knowledge": "acca_seeker",
        "applied-skills": "acca_seeker",
        "strategic-professional": "acca_seeker",
        "dipifr": "dipifr_star",
        "financial-modeling": "fm_analyst",
        "1c-course": "onec_pro",
        "jurisprudence": "law_scholar",
      };
      const specificBadge = courseMap[payload];
      if (specificBadge && !newState.earnedBadges.includes(specificBadge)) {
        award(35, specificBadge);
      }

      const sessionKey = `fba_session_visits`;
      try {
        const sv = parseInt(sessionStorage.getItem(sessionKey) || "0") + 1;
        sessionStorage.setItem(sessionKey, String(sv));
        if (sv >= 3 && !newState.earnedBadges.includes("speed_reader")) {
          award(30, "speed_reader");
        }
      } catch {}
    }
  }

  if (event === "video_watch" && !newState.videoWatched) {
    newState.videoWatched = true;
    award(20, "video_watcher");
  }

  if (event === "form_submit" && !newState.formSubmitted) {
    newState.formSubmitted = true;
    award(50, "form_submitted");
  }

  if (event === "quiz_complete" && !newState.quizCompleted) {
    newState.quizCompleted = true;
    award(40, "quiz_master");
  }

  const hour = new Date().getHours();
  if ((hour >= 20 || hour < 1) && !newState.earnedBadges.includes("night_owl")) {
    award(15, "night_owl");
  }

  if (newState.totalPoints >= 300 && !newState.earnedBadges.includes("elite")) {
    award(100, "elite");
  }

  return { pointsGained, newBadges, newState };
}
