import { useEffect, useState, useCallback, useRef } from "react";
import { X, ArrowRight, Clock, Flame, Gift, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useLocation } from "wouter";

type PopupType = "time" | "scroll" | "exit" | null;

const POPUP_COOLDOWN_KEY = "fba_popup_shown_at";
const COOLDOWN_MS = 60 * 60 * 1000; // 1 hour

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

interface PopupProps {
  type: PopupType;
  onClose: () => void;
}

function TimePopup({ onClose }: { onClose: () => void }) {
  const { lang } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const text = {
    uz: { title: "Bepul konsultatsiya oling", sub: "10 daqiqada barcha savollarga javob", cta: "Konsultatsiya olish", success: "So'rov yuborildi!", namePh: "Ismingiz", phonePh: "Telefon raqamingiz" },
    ru: { title: "Получите бесплатную консультацию", sub: "Ответим на все вопросы за 10 минут", cta: "Получить консультацию", success: "Заявка отправлена!", namePh: "Ваше имя", phonePh: "Номер телефона" },
    en: { title: "Get a Free Consultation", sub: "We'll answer all your questions in 10 minutes", cta: "Get Consultation", success: "Request sent!", namePh: "Your name", phonePh: "Phone number" },
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(onClose, 2000);
  };

  return (
    <div className="relative w-full max-w-lg mx-4">
      <button onClick={onClose} className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 shadow-lg text-zinc-400 hover:text-white transition-colors" data-testid="button-popup-close-time">
        <X className="h-4 w-4" />
      </button>
      <div className="rounded-2xl overflow-hidden shadow-2xl">
        {/* Top accent */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6 text-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider opacity-80">FBA Academy</div>
              <div className="text-xl font-extrabold leading-tight">{text.title}</div>
            </div>
          </div>
          <p className="text-sm opacity-90">{text.sub}</p>
        </div>
        {/* Form */}
        <div className="bg-zinc-900 px-8 py-6">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-6 gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-800/40">
                <ArrowRight className="h-7 w-7 text-green-600" />
              </div>
              <p className="text-lg font-bold text-white">{text.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={text.namePh}
                className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm font-medium focus:border-purple-500 focus:outline-none"
                data-testid="input-popup-time-name"
              />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={text.phonePh}
                className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm font-medium focus:border-purple-500 focus:outline-none"
                data-testid="input-popup-time-phone"
              />
              <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-3.5 text-sm font-bold text-white hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg" data-testid="button-popup-time-submit">
                {text.cta} <ArrowRight className="inline h-4 w-4 ml-1" />
              </button>
              <p className="text-center text-xs text-slate-400">+998 78 113 80 90 · fbaacademyuz1@gmail.com</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function ScrollPopup({ onClose }: { onClose: () => void }) {
  const { lang } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [spots] = useState(() => Math.floor(Math.random() * 5) + 3);

  const text = {
    uz: {
      badge: "Maxsus taklif",
      title: "-25%\nCHEGIRMA",
      titleEnd: "faqat bugun",
      sub: "Joylar cheklangan — bugungi kunga qadar chegirma amal qiladi",
      spots: "Qolgan joy",
      cta: "Chegirma bilan yozilish",
      success: "Tabriklaymiz!",
      namePh: "Ismingiz", phonePh: "Telefon raqamingiz",
    },
    ru: {
      badge: "Специальное предложение",
      title: "-25%\nСКИДКА",
      titleEnd: "только сегодня",
      sub: "Места ограничены — скидка действует до конца дня",
      spots: "Осталось мест",
      cta: "Записаться со скидкой",
      success: "Поздравляем!",
      namePh: "Ваше имя", phonePh: "Номер телефона",
    },
    en: {
      badge: "Special offer",
      title: "-25%\nDISCOUNT",
      titleEnd: "today only",
      sub: "Limited spots — discount valid today only",
      spots: "Spots left",
      cta: "Enroll with discount",
      success: "Congratulations!",
      namePh: "Your name", phonePh: "Phone number",
    },
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(onClose, 2000);
  };

  return (
    <div className="relative w-full max-w-md mx-4">
      <button onClick={onClose} className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 shadow-lg text-zinc-400 hover:text-white" data-testid="button-popup-close-scroll">
        <X className="h-4 w-4" />
      </button>
      <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#0f0a2e]">
        <div className="px-8 pt-8 pb-4 text-center">
          <span className="inline-block rounded-full bg-amber-400/20 border border-amber-400/40 px-3 py-1 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">{text.badge}</span>
          <div className="text-5xl font-extrabold text-white leading-none mb-1 whitespace-pre-line">{text.title}</div>
          <div className="text-lg font-semibold text-amber-400 mb-3">{text.titleEnd}</div>
          <p className="text-sm text-slate-400 mb-4">{text.sub}</p>
          <div className="inline-flex items-center gap-2 rounded-lg bg-red-500/20 border border-red-500/30 px-4 py-2">
            <Flame className="h-4 w-4 text-red-400" />
            <span className="text-sm font-bold text-red-400">{text.spots}: {spots}</span>
          </div>
        </div>
        <div className="px-8 pb-8">
          {sent ? (
            <div className="flex flex-col items-center py-6 gap-2">
              <div className="text-3xl">🎉</div>
              <p className="text-white font-bold text-lg">{text.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder={text.namePh}
                className="w-full rounded-xl border-2 border-slate-700 bg-white/10 px-4 py-3 text-sm font-medium text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none" data-testid="input-popup-scroll-name" />
              <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={text.phonePh}
                className="w-full rounded-xl border-2 border-slate-700 bg-white/10 px-4 py-3 text-sm font-medium text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none" data-testid="input-popup-scroll-phone" />
              <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 py-4 text-sm font-extrabold text-black hover:from-amber-500 hover:to-orange-600 transition-all shadow-lg" data-testid="button-popup-scroll-submit">
                {text.cta}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function ExitPopup({ onClose }: { onClose: () => void }) {
  const { lang } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const text = {
    uz: {
      tag: "Uchib ketayapsizmi?",
      title: "Kursga yoziling\nva karyerangizni\no'zgartiring!",
      sub: "7 kun ichida muvofiq kelmasa — to'liq pulni qaytaramiz",
      cta: "Yozilish",
      success: "So'rov yuborildi!",
      namePh: "Ismingiz", phonePh: "Telefon raqamingiz",
      guarantee: "7 kunlik kafolat",
    },
    ru: {
      tag: "Уходите?",
      title: "Запишитесь на курс\nи измените\nсвою карьеру!",
      sub: "Если не понравится в течение 7 дней — вернём деньги",
      cta: "Записаться",
      success: "Заявка отправлена!",
      namePh: "Ваше имя", phonePh: "Номер телефона",
      guarantee: "Гарантия 7 дней",
    },
    en: {
      tag: "Leaving already?",
      title: "Enroll in a course\nand transform\nyour career!",
      sub: "Not satisfied in 7 days? Full money-back guarantee",
      cta: "Enroll Now",
      success: "Request sent!",
      namePh: "Your name", phonePh: "Phone number",
      guarantee: "7-day guarantee",
    },
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(onClose, 2000);
  };

  return (
    <div className="relative w-full max-w-lg mx-4">
      <button onClick={onClose} className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 shadow-lg text-zinc-400 hover:text-white" data-testid="button-popup-close-exit">
        <X className="h-4 w-4" />
      </button>
      <div className="rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2">
          {/* Left — visual */}
          <div className="bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-purple-900 p-8 flex flex-col justify-center">
            <span className="inline-block rounded-full bg-amber-400/20 border border-amber-400/40 px-3 py-1 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">{text.tag}</span>
            <div className="text-3xl font-extrabold text-white leading-tight whitespace-pre-line mb-4">{text.title}</div>
            <div className="flex items-center gap-2 mt-2">
              <Gift className="h-5 w-5 text-amber-400" />
              <span className="text-sm font-bold text-amber-400">{text.guarantee}</span>
            </div>
            <p className="text-xs text-slate-400 mt-3">{text.sub}</p>
          </div>
          {/* Right — form */}
          <div className="bg-zinc-900 p-8 flex flex-col justify-center">
            {sent ? (
              <div className="flex flex-col items-center py-4 gap-3">
                <div className="text-4xl">🎉</div>
                <p className="font-bold text-white text-center">{text.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder={text.namePh}
                  className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm font-medium focus:border-purple-500 focus:outline-none" data-testid="input-popup-exit-name" />
                <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={text.phonePh}
                  className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm font-medium focus:border-purple-500 focus:outline-none" data-testid="input-popup-exit-phone" />
                <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-4 text-sm font-extrabold text-white hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg" data-testid="button-popup-exit-submit">
                  {text.cta} <ArrowRight className="inline h-4 w-4 ml-1" />
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

  const showPopup = useCallback((type: PopupType) => {
    if (triggeredRef.current) return;
    if (!shouldShowPopup()) return;
    triggeredRef.current = true;
    markPopupShown();
    setActivePopup(type);
  }, []);

  const closePopup = useCallback(() => {
    setActivePopup(null);
  }, []);

  useEffect(() => {
    triggeredRef.current = false;
  }, [location]);

  useEffect(() => {
    // Time-based trigger: 25 seconds
    timerRef.current = setTimeout(() => {
      showPopup("time");
    }, 25000);

    // Scroll-based trigger: 60% of page
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      if (total > 0 && scrolled / total > 0.6) {
        showPopup("scroll");
      }
    };

    // Exit intent trigger: mouse leaves viewport top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        showPopup("exit");
      }
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === e.currentTarget) closePopup(); }}
      data-testid="popup-overlay"
      role="dialog"
      aria-modal="true"
    >
      {activePopup === "time" && <TimePopup onClose={closePopup} />}
      {activePopup === "scroll" && <ScrollPopup onClose={closePopup} />}
      {activePopup === "exit" && <ExitPopup onClose={closePopup} />}
    </div>
  );
}
