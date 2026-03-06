import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { useGamification } from "@/hooks/use-gamification";
import {
  BADGES,
  LEVELS,
  getCurrentLevel,
  getNextLevel,
  getLevelProgress,
} from "@/lib/gamification";
import { graduateResults } from "@/lib/data";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, CheckCircle2, Lock, ArrowRight, Star, Zap, RotateCcw, Sparkles, Building2 } from "lucide-react";

const QUIZ_QUESTIONS = [
  {
    question: "ACCA DipIFR imtihoni yiliga necha marta bo'ladi?",
    options: ["1 marta", "2 marta", "4 marta", "6 marta"],
    correct: 1,
  },
  {
    question: "IFRS 16 qaysi standart?",
    options: ["Asosiy vositalar", "Ijaralar", "Zaxiralar", "Nomoddiy aktivlar"],
    correct: 1,
  },
  {
    question: "1C: Buxgalteriya qaysi versiyasi hozir eng ko'p ishlatiladi?",
    options: ["7.7", "8.1", "8.3", "9.0"],
    correct: 2,
  },
  {
    question: "DCF nima?",
    options: [
      "Diskontlangan pul oqimlari tahlili",
      "Daromad hisobi usuli",
      "Kredit tashkilotlari uchun standart",
      "Buxgalteriya dasturi",
    ],
    correct: 0,
  },
  {
    question: "ACCA to'liq malakasi qancha darajadan iborat?",
    options: ["2 daraja", "3 daraja", "4 daraja", "5 daraja"],
    correct: 1,
  },
];

type QuizState = "idle" | "active" | "done";

export default function AchievementsPage() {
  useSEO({
    title: "Mening Yutuqlarim — Ballar va Badge'lar | FBA Academy",
    description: "FBA Academy gamification tizimi: ballar, badge'lar, darajalar va bilim testi. Moliya va buxgalteriya sohasidagi bilimingizni sinab ko'ring.",
    noindex: true,
  });

  const { state, awardEvent, resetState } = useGamification();
  const [quizState, setQuizState] = useState<QuizState>("idle");
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showReset, setShowReset] = useState(false);

  useEffect(() => {
    if (state.quizCompleted) setQuizState("done");
  }, []);

  const level = getCurrentLevel(state.totalPoints);
  const nextLevel = getNextLevel(state.totalPoints);
  const progress = getLevelProgress(state.totalPoints);
  const earnedBadges = BADGES.filter((b) => state.earnedBadges.includes(b.id));
  const lockedBadges = BADGES.filter((b) => !state.earnedBadges.includes(b.id));

  const handleStartQuiz = () => {
    setQuizState("active");
    setCurrentQ(0);
    setSelectedAnswer(null);
    setAnswers([]);
  };

  const handleAnswer = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    const isCorrect = idx === QUIZ_QUESTIONS[currentQ].correct;
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQ + 1 < QUIZ_QUESTIONS.length) {
        setCurrentQ((q) => q + 1);
        setSelectedAnswer(null);
      } else {
        setQuizState("done");
        if (!state.quizCompleted) {
          awardEvent("quiz_complete");
        }
      }
    }, 1000);
  };

  const correctCount = answers.filter(Boolean).length;

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14"
        data-testid="section-achievements-hero"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <Breadcrumb items={[{ label: "Natijalar" }]} light />
          </div>
          <Badge className="mb-5 inline-flex rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" /> Bitiruvchilar natijalari
          </Badge>
          <h1
            className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            data-testid="text-achievements-title"
          >
            Bizning{" "}
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              natijalarimiz
            </span>
          </h1>
          <p className="mb-10 max-w-xl text-lg text-slate-300 leading-relaxed">
            Har bir bitiruvchimiz — bizning g'ururimiz. Haqiqiy odamlar, haqiqiy o'zgarishlar.
          </p>
          <div className="flex flex-wrap gap-5">
            {[
              { value: "92%", label: "Ishga joylashish" },
              { value: "1000+", label: "Bitiruvchilar" },
              { value: "3x", label: "Maosh o'sishi" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm" data-testid={`stat-natija-${i}`}>
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRADUATE RESULTS ──────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-14 sm:py-20" data-testid="section-graduate-results">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-results-title">
            Bitiruvchilarimiz tarixlari
          </h2>
          <p className="mb-10 max-w-xl text-zinc-400">
            Ular o'qishdi, imtihon topshirdi va hayotlarini o'zgartirdi.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {graduateResults.map((g) => (
              <div key={g.id} className="group overflow-hidden rounded-2xl bg-zinc-900 transition-transform duration-300 hover:-translate-y-2" data-testid={`card-graduate-${g.id}`}>
                <div className="relative h-48">
                  <img src={g.avatar} alt={g.name} width={400} height={192} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-bold text-white">
                      {g.courseName}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-extrabold text-white">{g.name}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-zinc-400">
                    <span className="line-through">{g.beforeRole}</span>
                    <ArrowRight className="h-3 w-3 shrink-0" />
                    <span className="font-bold text-purple-400">{g.afterRole}</span>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-emerald-400">{g.salaryIncrease}</p>
                  <p className="mt-3 text-xs text-zinc-400 leading-relaxed">{g.story}</p>
                  <div className="mt-3 flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 text-zinc-500" />
                    <span className="text-xs font-semibold text-zinc-300">{g.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GAMIFICATION HERO ─────────────────────────────────── */}
      <section className="bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 py-12 sm:py-16" data-testid="section-gamification-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl" data-testid="text-gamification-title">
                Mening Yutuqlarim
              </h2>
              <p className="mt-3 text-white/80">FBA Academy bilan o'rganing, ball to'plang, badge'lar oching</p>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-sm">
              <div className="text-4xl">{level.emoji}</div>
              <div>
                <div className="text-xs font-medium text-white/70">Darajangiz</div>
                <div className="text-xl font-extrabold text-white" data-testid="text-level-name">{level.name}</div>
                <div className="text-2xl font-extrabold text-white" data-testid="text-points">{state.totalPoints} <span className="text-sm font-normal opacity-80">ball</span></div>
              </div>
            </div>
          </div>

          {/* Level Progress */}
          <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm" data-testid="section-level-progress">
            <div className="mb-2 flex justify-between text-sm font-bold text-white">
              <span>{level.name}</span>
              {nextLevel && <span>{nextLevel.name} → {nextLevel.minPoints} ball</span>}
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-white transition-all duration-1000"
                style={{ width: `${progress}%` }}
                data-testid="progress-bar-main"
              />
            </div>
            {nextLevel ? (
              <div className="mt-2 text-xs text-white/70">Keyingi darajaga {nextLevel.minPoints - state.totalPoints} ball qoldi</div>
            ) : (
              <div className="mt-2 text-xs text-white/70">🏆 Eng yuqori darajaga yetdingiz!</div>
            )}
          </div>

          {/* All Levels */}
          <div className="mt-6 flex flex-wrap gap-2">
            {LEVELS.map((lvl, i) => (
              <div
                key={i}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${state.totalPoints >= lvl.minPoints ? "bg-white text-orange-700 shadow" : "border border-white/30 bg-white/10 text-white/60"}`}
                data-testid={`level-${i}`}
              >
                <span>{lvl.emoji}</span> {lvl.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats grid */}
      <section className="bg-[#111] py-10" data-testid="section-stats">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Jami ball", value: state.totalPoints, emoji: "⭐", color: "from-amber-400 to-orange-500" },
              { label: "Badge'lar", value: `${earnedBadges.length}/${BADGES.length}`, emoji: "🏅", color: "from-purple-400 to-indigo-500" },
              { label: "Ko'rilgan kurslar", value: state.visitedCourses.length, emoji: "📚", color: "from-blue-400 to-cyan-500" },
              { label: "To'ldirilgan harakatlar", value: [state.videoWatched, state.formSubmitted, state.quizCompleted].filter(Boolean).length + state.visitedCourses.length, emoji: "⚡", color: "from-green-400 to-emerald-500" },
            ].map((stat, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-zinc-900" data-testid={`stat-card-${i}`}>
                <div className={`h-1.5 w-full bg-gradient-to-r ${stat.color}`} />
                <div className="p-5">
                  <div className="text-2xl">{stat.emoji}</div>
                  <div className="mt-2 text-2xl font-extrabold text-white" data-testid={`stat-value-${i}`}>{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to earn points */}
      <section className="bg-[#0d0d0d] py-12" data-testid="section-how-to-earn">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">Qanday ball to'plash mumkin?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: "📖", action: "Kurs sahifasiga tashrif", points: "+10 ball", done: state.visitedCourses.length > 0, href: "/courses", btnText: "Kurslarga o'tish" },
              { emoji: "🎬", action: "Video darsni ko'rish", points: "+20 ball", done: state.videoWatched, href: "/course/1c-course", btnText: "Videoni ko'rish" },
              { emoji: "📝", action: "Konsultatsiyaga yozilish", points: "+50 ball", done: state.formSubmitted, href: "/contacts", btnText: "Yozilish" },
              { emoji: "🧪", action: "Bilim testini topshirish", points: "+40 ball", done: state.quizCompleted, href: null, btnText: "Testni boshlash" },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl border p-5 transition-all hover:-translate-y-1 ${item.done ? "border-green-700 bg-green-900/20" : "border-white/10 bg-zinc-900"}`} data-testid={`earn-card-${i}`}>
                <div className="mb-3 text-3xl">{item.emoji}</div>
                <div className="mb-1 text-sm font-bold text-white">{item.action}</div>
                <div className="mb-3 text-lg font-extrabold text-emerald-400">{item.points}</div>
                {item.done ? (
                  <div className="flex items-center gap-1.5 text-sm font-bold text-emerald-400" data-testid={`earn-done-${i}`}>
                    <CheckCircle2 className="h-4 w-4" /> Bajarildi
                  </div>
                ) : item.href ? (
                  <a href={item.href}>
                    <Button size="sm" variant="outline" className="rounded-full border-white/20 text-xs text-white hover:bg-white/10" data-testid={`earn-btn-${i}`}>
                      {item.btnText} <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </a>
                ) : (
                  <Button size="sm" variant="outline" className="rounded-full border-white/20 text-xs text-white hover:bg-white/10" onClick={() => document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth" })} data-testid={`earn-btn-${i}`}>
                    {item.btnText} <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Badges grid */}
      <section className="bg-[#111] py-12" data-testid="section-badges">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">Barcha Badge'lar</h2>
          <p className="mb-8 text-zinc-400">{earnedBadges.length} ta olinggan, {lockedBadges.length} ta qulfli</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {BADGES.map((badge) => {
              const earned = state.earnedBadges.includes(badge.id);
              return (
                <div
                  key={badge.id}
                  className={`overflow-hidden rounded-2xl border transition-all ${earned ? "border-white/10 bg-zinc-900 shadow-lg" : "border-white/5 bg-zinc-900/50 opacity-60"}`}
                  data-testid={`badge-card-${badge.id}`}
                >
                  <div className={`h-1.5 ${earned ? `bg-gradient-to-r ${badge.color}` : "bg-zinc-700"}`} />
                  <div className="p-4">
                    <div className="mb-2 flex items-start justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${earned ? `bg-gradient-to-br ${badge.color} shadow-md` : "bg-zinc-800"}`}>
                        <span className={earned ? "" : "grayscale"}>{badge.emoji}</span>
                      </div>
                      {earned ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      ) : (
                        <Lock className="h-4 w-4 text-zinc-500" />
                      )}
                    </div>
                    <h3 className="text-sm font-extrabold text-white">{badge.name}</h3>
                    <p className="mt-0.5 text-xs text-zinc-400">{badge.description}</p>
                    <div className={`mt-2 text-xs font-bold ${earned ? "text-emerald-400" : "text-zinc-500"}`}>
                      {earned ? `✅ +${badge.points} ball olingdi` : `🔒 +${badge.points} ball`}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quiz section */}
      <section id="quiz-section" className="bg-[#0d0d0d] py-12" data-testid="section-quiz">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                  <span className="text-xl">🧪</span>
                </div>
                <div>
                  <h2 className="text-lg font-extrabold">Bilim Testi</h2>
                  <p className="text-sm text-white/80">Moliya va buxgalteriya bo'yicha bilimingizni sinang — +40 ball</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {quizState === "idle" && (
                <div className="text-center" data-testid="quiz-idle">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-xl font-extrabold mb-2">5 ta savol</h3>
                  <p className="text-zinc-400 mb-6 text-sm">ACCA, DipIFR, 1C va Financial Modeling bo'yicha test. Muvaffaqiyatli tugatganingizda 40 ball va badge olasiz.</p>
                  <Button onClick={handleStartQuiz} className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 px-8 font-bold text-white" data-testid="button-start-quiz">
                    Testni Boshlash <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}

              {quizState === "active" && (
                <div data-testid="quiz-active">
                  <div className="mb-6">
                    <div className="mb-2 flex justify-between text-sm text-zinc-400">
                      <span>Savol {currentQ + 1} / {QUIZ_QUESTIONS.length}</span>
                      <span>{answers.filter(Boolean).length} to'g'ri</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500"
                        style={{ width: `${((currentQ) / QUIZ_QUESTIONS.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <h3 className="mb-5 text-base font-extrabold sm:text-lg" data-testid={`quiz-question-${currentQ}`}>
                    {QUIZ_QUESTIONS[currentQ].question}
                  </h3>

                  <div className="space-y-2.5">
                    {QUIZ_QUESTIONS[currentQ].options.map((opt, i) => {
                      const isCorrect = i === QUIZ_QUESTIONS[currentQ].correct;
                      const isSelected = selectedAnswer === i;
                      const showResult = selectedAnswer !== null;

                      let cls = "w-full rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all ";
                      if (!showResult) cls += "border-slate-200 bg-slate-50 hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-700 dark:bg-slate-800";
                      else if (isCorrect) cls += "border-green-500 bg-green-50 text-green-800 dark:bg-green-950/30 dark:text-green-400";
                      else if (isSelected) cls += "border-rose-500 bg-rose-50 text-rose-800 dark:bg-rose-950/30 dark:text-rose-400";
                      else cls += "border-slate-200 bg-slate-50 opacity-60 dark:border-slate-700 dark:bg-slate-800";

                      return (
                        <button
                          key={i}
                          onClick={() => handleAnswer(i)}
                          disabled={selectedAnswer !== null}
                          className={cls}
                          data-testid={`quiz-option-${i}`}
                        >
                          <span className="mr-2 font-bold">{["A", "B", "C", "D"][i]}.</span> {opt}
                          {showResult && isCorrect && <span className="ml-2">✓</span>}
                          {showResult && isSelected && !isCorrect && <span className="ml-2">✗</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {quizState === "done" && (
                <div className="text-center" data-testid="quiz-done">
                  <div className="text-5xl mb-4">{correctCount >= 4 ? "🏆" : correctCount >= 3 ? "🎉" : "📚"}</div>
                  <h3 className="text-2xl font-extrabold mb-2">
                    {correctCount >= 4 ? "Ajoyib natija!" : correctCount >= 3 ? "Yaxshi!" : "Davom eting!"}
                  </h3>
                  <p className="text-zinc-400 mb-2">
                    {state.quizCompleted && !answers.length
                      ? "Siz allaqachon testni tugatgansiz!"
                      : `${QUIZ_QUESTIONS.length} ta savoldan ${correctCount} tasiga to'g'ri javob berdingiz`}
                  </p>
                  {!state.quizCompleted || answers.length > 0 ? (
                    <p className="text-lg font-bold text-green-600 mb-4">+40 ball va 🧪 badge oldinggiz!</p>
                  ) : (
                    <p className="text-sm text-zinc-400 mb-4">Badge va ballar avval berilgan edi.</p>
                  )}
                  <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/courses">
                      <Button className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 font-bold text-white" data-testid="button-quiz-courses">
                        Kurslarga o'tish <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    {answers.length > 0 && (
                      <Button variant="outline" className="rounded-full" onClick={handleStartQuiz} data-testid="button-retry-quiz">
                        Qaytadan urinish
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Course shortcuts */}
      <section className="bg-slate-50 py-10 dark:bg-slate-900/30" data-testid="section-course-shortcuts">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-lg font-extrabold">Ball to'plash uchun kurslarga tashrif buyuring</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/course/acca", label: "ACCA", emoji: "🏅", badge: "acca_seeker" },
              { href: "/course/dipifr", label: "DipIFR", emoji: "⭐", badge: "dipifr_star" },
              { href: "/course/financial-modeling", label: "Financial Modeling", emoji: "📊", badge: "fm_analyst" },
              { href: "/course/1c-course", label: "1C: Buxgalteriya", emoji: "🔴", badge: "onec_pro" },
              { href: "/course/applied-knowledge", label: "Applied Knowledge", emoji: "📖", badge: "acca_seeker" },
              { href: "/course/applied-skills", label: "Applied Skills", emoji: "💡", badge: "acca_seeker" },
              { href: "/course/strategic-professional", label: "Strategic Professional", emoji: "👔", badge: "acca_seeker" },
              { href: "/course/jurisprudence", label: "Huquqshunoslik", emoji: "⚖️", badge: "law_scholar" },
            ].map((item, i) => {
              const visited = state.visitedCourses.some((c) => item.href.includes(c));
              const badgeEarned = state.earnedBadges.includes(item.badge as any);
              return (
                <Link key={i} href={item.href} data-testid={`shortcut-${i}`}>
                  <div className={`flex items-center gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${visited ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20" : "border-slate-200 bg-white dark:bg-card"}`}>
                    <span className="text-xl">{item.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="truncate text-sm font-bold">{item.label}</div>
                      <div className="text-xs text-zinc-400">{visited ? "✅ Tashrif" : "+10 ball"}</div>
                    </div>
                    {badgeEarned && <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reset */}
      <section className="py-8 text-center" data-testid="section-reset">
        {!showReset ? (
          <button onClick={() => setShowReset(true)} className="text-xs text-zinc-400 underline hover:text-foreground" data-testid="button-show-reset">
            Progressni tozalash
          </button>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-zinc-400">Barcha ball va badge'lar o'chiriladi. Ishonchingiz komilmi?</p>
            <div className="flex gap-3">
              <Button variant="destructive" size="sm" onClick={() => { resetState(); setShowReset(false); setQuizState("idle"); setAnswers([]); setCurrentQ(0); }} data-testid="button-confirm-reset">
                <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Tasdiqlash
              </Button>
              <Button variant="outline" size="sm" onClick={() => setShowReset(false)} data-testid="button-cancel-reset">
                Bekor qilish
              </Button>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
