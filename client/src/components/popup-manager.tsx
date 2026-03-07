import { useEffect, useState, useCallback, useRef } from "react";
import { X, ArrowRight, Flame, Gift, CheckCircle, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useLocation } from "wouter";

type PopupType = "consult" | "discount" | "exit" | null;

const POPUP_COOLDOWN_KEY = "fba_popup_shown_at";
const COOLDOWN_MS = 60 * 60 * 1000;

function shouldShowPopup(): boolean {
  try {
    const last = localStorage.getItem(POPUP_COOLDOWN_KEY);
    if (!last) return true;
    return Date.now() - parseInt(last) > COOLDOWN_MS;
  } catch {
    return true;
  }
}

function markPopupShown() {
  try {
    localStorage.setItem(POPUP_COOLDOWN_KEY, String(Date.now()));
  } catch {}
}

const COURSE_OPTIONS = [
  { id: "applied-knowledge", uz: "Applied Knowledge (F1–F3)", ru: "Applied Knowledge (F1–F3)", en: "Applied Knowledge (F1–F3)" },
  { id: "applied-skills",    uz: "Applied Skills (F4–F9)",   ru: "Applied Skills (F4–F9)",   en: "Applied Skills (F4–F9)" },
  { id: "strategic-professional", uz: "Strategic Professional", ru: "Strategic Professional", en: "Strategic Professional" },
  { id: "dipifr",            uz: "DipIFR (Rus tili)",        ru: "DipIFR (на русском)",      en: "DipIFR" },
  { id: "financial-modeling", uz: "Financial Modeling",      ru: "Финансовое моделирование", en: "Financial Modeling" },
  { id: "jurisprudence",     uz: "Yuridik Savodxonlik",      ru: "Юридическая грамотность",  en: "Business Jurisprudence" },
  { id: "one-c",             uz: "1C: Buxgalteriya",         ru: "1С: Бухгалтерия",          en: "1C: Accounting" },
];

const COURSE_STYLES: Record<string, { gradient: string; accent: string; border: string }> = {
  "applied-knowledge":   { gradient: "from-sky-700 to-blue-800",      accent: "text-sky-300",    border: "border-sky-500/40" },
  "applied-skills":      { gradient: "from-teal-700 to-emerald-800",  accent: "text-emerald-300", border: "border-emerald-500/40" },
  "strategic-professional": { gradient: "from-purple-700 to-violet-800", accent: "text-purple-300", border: "border-purple-500/40" },
  "dipifr":              { gradient: "from-indigo-700 to-violet-800", accent: "text-indigo-300",  border: "border-indigo-500/40" },
  "financial-modeling":  { gradient: "from-amber-700 to-orange-800",  accent: "text-amber-300",   border: "border-amber-500/40" },
  "jurisprudence":       { gradient: "from-rose-700 to-pink-800",     accent: "text-rose-300",    border: "border-rose-500/40" },
  "one-c":               { gradient: "from-green-700 to-teal-800",    accent: "text-green-300",   border: "border-green-500/40" },
  "default":             { gradient: "from-purple-700 to-pink-800",   accent: "text-purple-300",  border: "border-purple-500/40" },
};

function detectCourse(location: string): string {
  if (location.includes("applied-knowledge")) return "applied-knowledge";
  if (location.includes("applied-skills"))    return "applied-skills";
  if (location.includes("strategic-professional")) return "strategic-professional";
  if (location.includes("dipifr"))            return "dipifr";
  if (location.includes("financial-modeling")) return "financial-modeling";
  if (location.includes("jurisprudence"))     return "jurisprudence";
  if (location.includes("one-c"))             return "one-c";
  return "";
}

const INPUT_CLASS = "w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm font-medium text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none transition-colors";
const SELECT_CLASS = "w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 pr-9 text-sm font-medium text-white focus:border-amber-400 focus:outline-none appearance-none transition-colors cursor-pointer";

interface CourseSelectProps {
  lang: string;
  value: string;
  onChange: (v: string) => void;
  detectedCourse: string;
  testId: string;
}

function CourseField({ lang, value, onChange, detectedCourse, testId }: CourseSelectProps) {
  const labels = {
    uz: "Qaysi kursga qiziqasiz?",
    ru: "Какой курс вас интересует?",
    en: "Which course interests you?",
  }[lang as "uz" | "ru" | "en"] ?? "Qaysi kursga qiziqasiz?";

  const placeholder = {
    uz: "Kursni tanlang",
    ru: "Выберите курс",
    en: "Select a course",
  }[lang as "uz" | "ru" | "en"] ?? "Kursni tanlang";

  if (detectedCourse) {
    const option = COURSE_OPTIONS.find((c) => c.id === detectedCourse);
    const name = option ? (option as Record<string, string>)[lang] || option.uz : detectedCourse;
    const style = COURSE_STYLES[detectedCourse] ?? COURSE_STYLES["default"];
    return (
      <div className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/60 px-4 py-3" data-testid={testId}>
        <CheckCircle className={`h-4 w-4 shrink-0 ${style.accent}`} />
        <span className="text-sm font-semibold text-white">{name}</span>
      </div>
    );
  }

  return (
    <div className="relative" data-testid={testId}>
      <select
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={SELECT_CLASS}
        aria-label={labels}
      >
        <option value="" disabled>{placeholder}</option>
        {COURSE_OPTIONS.map((c) => (
          <option key={c.id} value={c.id}>{(c as Record<string, string>)[lang] || c.uz}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
    </div>
  );
}

interface PopupInnerProps {
  onClose: () => void;
  detectedCourse: string;
}

function ConsultPopup({ onClose, detectedCourse }: PopupInnerProps) {
  const { lang } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(detectedCourse);
  const [sent, setSent] = useState(false);

  const style = COURSE_STYLES[detectedCourse] ?? COURSE_STYLES["default"];

  const t = {
    uz: { title: "Bepul konsultatsiya oling", sub: "10 daqiqada barcha savollarga javob beramiz", cta: "Konsultatsiya olish", success: "So'rov yuborildi!", namePh: "Ismingiz", phonePh: "Telefon raqamingiz (+998 90 ...)" },
    ru: { title: "Получите бесплатную консультацию", sub: "Ответим на все вопросы за 10 минут", cta: "Получить консультацию", success: "Заявка отправлена!", namePh: "Ваше имя", phonePh: "Номер телефона (+998 90 ...)" },
    en: { title: "Get a Free Consultation", sub: "We'll answer all your questions in 10 minutes", cta: "Get Consultation", success: "Request sent!", namePh: "Your name", phonePh: "Phone number (+998 90 ...)" },
  }[lang as "uz" | "ru" | "en"] ?? { title: "Bepul konsultatsiya oling", sub: "", cta: "Konsultatsiya olish", success: "Yuborildi!", namePh: "Ismingiz", phonePh: "Telefon" };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!detectedCourse && !course) return;
    setSent(true);
    setTimeout(onClose, 2500);
  };

  return (
    <div className="relative w-full max-w-md mx-4">
      <button onClick={onClose} className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 shadow-lg text-zinc-400 hover:text-white transition-colors" data-testid="button-popup-close-consult">
        <X className="h-4 w-4" />
      </button>
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        <div className={`bg-gradient-to-br ${style.gradient} px-7 py-6 text-white`}>
          <div className="text-xs font-bold uppercase tracking-widest opacity-75 mb-1">FBA Academy</div>
          <div className="text-xl font-extrabold leading-tight">{t.title}</div>
          <p className="text-sm opacity-80 mt-1">{t.sub}</p>
        </div>
        <div className="bg-zinc-900 px-7 py-6">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-6 gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-900/40 border border-emerald-500/30">
                <CheckCircle className="h-7 w-7 text-emerald-400" />
              </div>
              <p className="text-lg font-bold text-white">{t.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <CourseField lang={lang} value={course} onChange={setCourse} detectedCourse={detectedCourse} testId="field-popup-consult-course" />
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder={t.namePh} className={INPUT_CLASS} data-testid="input-popup-consult-name" />
              <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.phonePh} className={INPUT_CLASS} data-testid="input-popup-consult-phone" />
              <button type="submit" className={`w-full rounded-xl bg-gradient-to-r ${style.gradient} py-3.5 text-sm font-bold text-white hover:opacity-90 transition-all shadow-lg mt-1`} data-testid="button-popup-consult-submit">
                {t.cta} <ArrowRight className="inline h-4 w-4 ml-1" />
              </button>
              <p className="text-center text-xs text-zinc-600">+998 78 113 80 90 · fbaacademy@gmail.com</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function DiscountPopup({ onClose, detectedCourse }: PopupInnerProps) {
  const { lang } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(detectedCourse);
  const [sent, setSent] = useState(false);
  const [spots] = useState(() => Math.floor(Math.random() * 5) + 3);

  const t = {
    uz: { badge: "Maxsus taklif", title: "-25%", titleSub: "chegirma — faqat bugun", sub: "Joylar cheklangan, bugunga qadar amal qiladi", spots: "Qolgan joy", cta: "Chegirma bilan yozilish", success: "Tabriklaymiz!", namePh: "Ismingiz", phonePh: "Telefon raqamingiz" },
    ru: { badge: "Спецпредложение", title: "-25%", titleSub: "скидка — только сегодня", sub: "Мест ограничено, акция до конца дня", spots: "Осталось мест", cta: "Записаться со скидкой", success: "Поздравляем!", namePh: "Ваше имя", phonePh: "Номер телефона" },
    en: { badge: "Special offer", title: "-25%", titleSub: "discount — today only", sub: "Limited spots, offer valid today only", spots: "Spots left", cta: "Enroll with discount", success: "Congratulations!", namePh: "Your name", phonePh: "Phone number" },
  }[lang as "uz" | "ru" | "en"] ?? { badge: "Maxsus taklif", title: "-25%", titleSub: "chegirma", sub: "", spots: "Joy", cta: "Yozilish", success: "Tabriklaymiz!", namePh: "Ism", phonePh: "Telefon" };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!detectedCourse && !course) return;
    setSent(true);
    setTimeout(onClose, 2500);
  };

  return (
    <div className="relative w-full max-w-sm mx-4">
      <button onClick={onClose} className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 shadow-lg text-zinc-400 hover:text-white transition-colors" data-testid="button-popup-close-discount">
        <X className="h-4 w-4" />
      </button>
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-950">
        <div className="px-7 pt-7 pb-4 text-center">
          <span className="inline-block rounded-full bg-amber-400/15 border border-amber-400/30 px-3 py-1 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">{t.badge}</span>
          <div className="text-6xl font-extrabold text-white leading-none mb-0.5">{t.title}</div>
          <div className="text-base font-semibold text-amber-400 mb-3">{t.titleSub}</div>
          <p className="text-xs text-zinc-500 mb-4">{t.sub}</p>
          <div className="inline-flex items-center gap-2 rounded-lg bg-red-500/15 border border-red-500/25 px-4 py-2">
            <Flame className="h-4 w-4 text-red-400" />
            <span className="text-sm font-bold text-red-400">{t.spots}: {spots}</span>
          </div>
        </div>
        <div className="px-7 pb-7">
          {sent ? (
            <div className="flex flex-col items-center py-6 gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-900/40 border border-emerald-500/30">
                <CheckCircle className="h-7 w-7 text-emerald-400" />
              </div>
              <p className="text-white font-bold text-lg text-center">{t.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
              <CourseField lang={lang} value={course} onChange={setCourse} detectedCourse={detectedCourse} testId="field-popup-discount-course" />
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder={t.namePh} className={INPUT_CLASS} data-testid="input-popup-discount-name" />
              <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.phonePh} className={INPUT_CLASS} data-testid="input-popup-discount-phone" />
              <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 py-4 text-sm font-extrabold text-black hover:from-amber-500 hover:to-orange-600 transition-all shadow-lg" data-testid="button-popup-discount-submit">
                {t.cta}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function ExitPopup({ onClose, detectedCourse }: PopupInnerProps) {
  const { lang } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(detectedCourse);
  const [sent, setSent] = useState(false);

  const style = COURSE_STYLES[detectedCourse] ?? COURSE_STYLES["default"];

  const t = {
    uz: { tag: "Uchib ketayapsizmi?", title: "Kursga yoziling va karyerangizni o'zgartiring!", sub: "7 kun ichida muvofiq kelmasa — to'liq pulni qaytaramiz", cta: "Yozilish", success: "So'rov yuborildi!", namePh: "Ismingiz", phonePh: "Telefon raqamingiz", guarantee: "7 kunlik kafolat" },
    ru: { tag: "Уходите?", title: "Запишитесь на курс и измените свою карьеру!", sub: "Если не подойдёт за 7 дней — вернём деньги", cta: "Записаться", success: "Заявка отправлена!", namePh: "Ваше имя", phonePh: "Номер телефона", guarantee: "Гарантия 7 дней" },
    en: { tag: "Leaving already?", title: "Enroll and transform your career!", sub: "Not satisfied in 7 days? Full money-back guarantee", cta: "Enroll Now", success: "Request sent!", namePh: "Your name", phonePh: "Phone number", guarantee: "7-day guarantee" },
  }[lang as "uz" | "ru" | "en"] ?? { tag: "Uchib ketayapsizmi?", title: "", sub: "", cta: "Yozilish", success: "Yuborildi!", namePh: "Ism", phonePh: "Telefon", guarantee: "7 kun kafolat" };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!detectedCourse && !course) return;
    setSent(true);
    setTimeout(onClose, 2500);
  };

  return (
    <div className="relative w-full max-w-lg mx-4">
      <button onClick={onClose} className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 shadow-lg text-zinc-400 hover:text-white transition-colors" data-testid="button-popup-close-exit">
        <X className="h-4 w-4" />
      </button>
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        <div className="grid md:grid-cols-2">
          <div className={`bg-gradient-to-br ${style.gradient} p-7 flex flex-col justify-center gap-3`}>
            <span className="inline-block w-fit rounded-full bg-white/15 border border-white/20 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">{t.tag}</span>
            <div className="text-2xl font-extrabold text-white leading-tight">{t.title}</div>
            <div className="flex items-center gap-2 mt-1">
              <Gift className="h-4 w-4 text-amber-300 shrink-0" />
              <span className="text-sm font-bold text-amber-300">{t.guarantee}</span>
            </div>
            <p className="text-xs text-white/60">{t.sub}</p>
          </div>
          <div className="bg-zinc-900 p-7 flex flex-col justify-center">
            {sent ? (
              <div className="flex flex-col items-center py-4 gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-900/40 border border-emerald-500/30">
                  <CheckCircle className="h-7 w-7 text-emerald-400" />
                </div>
                <p className="font-bold text-white text-center">{t.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <CourseField lang={lang} value={course} onChange={setCourse} detectedCourse={detectedCourse} testId="field-popup-exit-course" />
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder={t.namePh} className={INPUT_CLASS} data-testid="input-popup-exit-name" />
                <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.phonePh} className={INPUT_CLASS} data-testid="input-popup-exit-phone" />
                <button type="submit" className={`w-full rounded-xl bg-gradient-to-r ${style.gradient} py-4 text-sm font-extrabold text-white hover:opacity-90 transition-all shadow-lg`} data-testid="button-popup-exit-submit">
                  {t.cta} <ArrowRight className="inline h-4 w-4 ml-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PopupManager() {
  const [activePopup, setActivePopup] = useState<PopupType>(null);
  const [location] = useLocation();
  const triggeredRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const detectedCourse = detectCourse(location);

  const showPopup = useCallback((type: PopupType) => {
    if (triggeredRef.current) return;
    if (!shouldShowPopup()) return;
    triggeredRef.current = true;
    markPopupShown();
    setActivePopup(type);
  }, []);

  const closePopup = useCallback(() => setActivePopup(null), []);

  useEffect(() => {
    triggeredRef.current = false;
  }, [location]);

  useEffect(() => {
    timerRef.current = setTimeout(() => showPopup("consult"), 25000);

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      if (total > 0 && scrolled / total > 0.6) showPopup("discount");
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) showPopup("exit");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [showPopup]);

  if (!activePopup) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === e.currentTarget) closePopup(); }}
      data-testid="popup-overlay"
      role="dialog"
      aria-modal="true"
    >
      {activePopup === "consult"  && <ConsultPopup  onClose={closePopup} detectedCourse={detectedCourse} />}
      {activePopup === "discount" && <DiscountPopup onClose={closePopup} detectedCourse={detectedCourse} />}
      {activePopup === "exit"     && <ExitPopup     onClose={closePopup} detectedCourse={detectedCourse} />}
    </div>
  );
}
