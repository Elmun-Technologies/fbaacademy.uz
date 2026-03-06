import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/lib/translations";

const LANGS: { code: Language; flag: string; label: string }[] = [
  { code: "uz", flag: "🇺🇿", label: "O'z" },
  { code: "ru", flag: "🇷🇺", label: "Ру" },
  { code: "en", flag: "🇬🇧", label: "En" },
];

const ACCA_ITEMS = [
  { uz: "ACCA — To'liq dastur", ru: "ACCA — Полная программа", en: "ACCA — Full Program", path: "/course/acca", descUz: "Barcha bosqichlar", descRu: "Все уровни", descEn: "All levels", bold: true },
  { uz: "Applied Knowledge", ru: "Applied Knowledge", en: "Applied Knowledge", path: "/course/applied-knowledge", descUz: "1-bosqich", descRu: "1-й уровень", descEn: "Level 1", bold: false },
  { uz: "Applied Skills", ru: "Applied Skills", en: "Applied Skills", path: "/course/applied-skills", descUz: "2-bosqich", descRu: "2-й уровень", descEn: "Level 2", bold: false },
  { uz: "Strategic Professional", ru: "Strategic Professional", en: "Strategic Professional", path: "/course/strategic-professional", descUz: "3-bosqich", descRu: "3-й уровень", descEn: "Level 3", bold: false },
];

const OTHER_COURSES = [
  { uz: "DipIFR", ru: "DipIFR", en: "DipIFR", path: "/course/dipifr", descUz: "Xalqaro moliyaviy hisobot", descRu: "Международная отчётность", descEn: "International reporting" },
  { uz: "Financial Modeling", ru: "Financial Modeling", en: "Financial Modeling", path: "/course/financial-modeling", descUz: "Excel, DCF, baholash", descRu: "Excel, DCF, оценка", descEn: "Excel, DCF, valuation" },
  { uz: "1C: Buxgalteriya", ru: "1С: Бухгалтерия", en: "1C: Accounting", path: "/course/1c-course", descUz: "Versiya 8.3", descRu: "Версия 8.3", descEn: "Version 8.3" },
  { uz: "Huquqshunoslik", ru: "Юриспруденция", en: "Law", path: "/course/jurisprudence", descUz: "Biznes va soliq huquqi", descRu: "Бизнес и налоговое право", descEn: "Business & Tax Law" },
];

export default function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);
  const langDropRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (coursesRef.current && !coursesRef.current.contains(e.target as Node)) setCoursesOpen(false);
      if (langDropRef.current && !langDropRef.current.contains(e.target as Node)) setLangOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isCoursesActive = location.startsWith("/course/") || location === "/courses";
  const currentLangObj = LANGS.find((l) => l.code === lang) || LANGS[0];

  const getLabel = (item: { uz: string; ru: string; en: string }) =>
    lang === "ru" ? item.ru : lang === "en" ? item.en : item.uz;
  const getDesc = (item: { descUz: string; descRu: string; descEn: string }) =>
    lang === "ru" ? item.descRu : lang === "en" ? item.descEn : item.descUz;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md shadow-sm" data-testid="header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0" data-testid="link-home-logo">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 shadow-md">
              <span className="text-sm font-extrabold text-white">F</span>
            </div>
            <span className="text-lg font-extrabold tracking-tight text-slate-900">FBA Academy</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex" data-testid="nav-desktop">
            {/* Kurslar dropdown */}
            <div className="relative" ref={coursesRef}>
              <button
                onClick={() => setCoursesOpen((v) => !v)}
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  isCoursesActive ? "text-purple-700 bg-purple-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
                data-testid="button-nav-courses"
                aria-expanded={coursesOpen}
                aria-haspopup="true"
              >
                {t.nav.courses}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${coursesOpen ? "rotate-180" : ""}`} />
              </button>

              {coursesOpen && (
                <div
                  className="absolute left-0 top-full mt-1 w-[520px] rounded-xl border bg-white shadow-xl z-50 overflow-hidden"
                  data-testid="dropdown-courses"
                  role="menu"
                >
                  <div className="grid grid-cols-2 divide-x">
                    {/* ACCA column */}
                    <div>
                      <div className="px-4 py-2 border-b bg-slate-50">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">ACCA</span>
                      </div>
                      {ACCA_ITEMS.map((item) => (
                        <Link key={item.path} href={item.path} onClick={() => setCoursesOpen(false)}>
                          <div
                            className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors hover:bg-purple-50 ${
                              location === item.path ? "bg-purple-50" : ""
                            }`}
                            data-testid={`link-nav-${item.path.split("/").pop()}`}
                            role="menuitem"
                          >
                            <div>
                              <div className={`text-sm ${item.bold ? "font-bold text-purple-700" : "font-semibold text-slate-800"}`}>
                                {getLabel(item)}
                              </div>
                              <div className="text-xs text-slate-400">{getDesc(item)}</div>
                            </div>
                            <ArrowRight className="h-3.5 w-3.5 text-slate-300 shrink-0" />
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Other courses column */}
                    <div>
                      <div className="px-4 py-2 border-b bg-slate-50">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          {t.nav.otherCourses}
                        </span>
                      </div>
                      {OTHER_COURSES.map((item) => (
                        <Link key={item.path} href={item.path} onClick={() => setCoursesOpen(false)}>
                          <div
                            className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors hover:bg-purple-50 ${
                              location === item.path ? "bg-purple-50" : ""
                            }`}
                            data-testid={`link-nav-${item.path.split("/").pop()}`}
                            role="menuitem"
                          >
                            <div>
                              <div className="text-sm font-semibold text-slate-800">{getLabel(item)}</div>
                              <div className="text-xs text-slate-400">{getDesc(item)}</div>
                            </div>
                            <ArrowRight className="h-3.5 w-3.5 text-slate-300 shrink-0" />
                          </div>
                        </Link>
                      ))}
                      {/* All courses link */}
                      <Link href="/courses" onClick={() => setCoursesOpen(false)}>
                        <div className="border-t mt-1 px-4 py-2.5 flex items-center gap-2 cursor-pointer hover:bg-slate-50 transition-colors" data-testid="link-nav-all-courses" role="menuitem">
                          <span className="text-sm font-bold text-purple-600">{t.footer.allCourses}</span>
                          <ArrowRight className="h-3.5 w-3.5 text-purple-400" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Teachers link */}
            <Link href="/teachers">
              <span
                className={`block rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  location === "/teachers" ? "text-purple-700 bg-purple-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
                data-testid="link-nav-teachers"
              >
                {t.nav.teachers}
              </span>
            </Link>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="relative" ref={langDropRef}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:border-purple-300 hover:bg-purple-50 transition-colors"
              data-testid="button-lang-switcher"
              aria-label="Tilni o'zgartirish"
            >
              <span>{currentLangObj.flag}</span>
              <span>{currentLangObj.label}</span>
              <ChevronDown className={`h-3 w-3 text-slate-400 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 w-32 rounded-xl border bg-white shadow-xl z-50 overflow-hidden" data-testid="dropdown-lang">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                    className={`flex w-full items-center gap-2 px-3 py-2.5 text-xs font-semibold transition-colors hover:bg-purple-50 ${lang === l.code ? "bg-purple-50 text-purple-700" : "text-slate-700"}`}
                    data-testid={`button-lang-${l.code}`}
                  >
                    <span>{l.flag}</span> {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link href="/contacts" className="hidden lg:block">
            <Button size="sm" className="gap-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 font-semibold text-white shadow-md hover:from-purple-700 hover:to-pink-700" data-testid="button-header-consultation">
              {t.nav.consultation}
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button size="icon" variant="ghost" data-testid="button-mobile-menu" aria-label="Menyuni ochish">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <SheetTitle className="sr-only">Navigatsiya menyusi</SheetTitle>
              <SheetDescription className="sr-only">Sayt bo'limlari va kurslar ro'yxati</SheetDescription>
              <div className="flex flex-col gap-4 pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
                      <span className="text-xs font-extrabold text-white">F</span>
                    </div>
                    <span className="text-base font-extrabold">FBA Academy</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {LANGS.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => setLang(l.code)}
                        className={`rounded px-1.5 py-0.5 text-xs font-bold transition-colors ${lang === l.code ? "bg-purple-100 text-purple-700" : "text-slate-500 hover:bg-slate-100"}`}
                        data-testid={`button-mobile-lang-${l.code}`}
                        aria-label={l.label}
                      >
                        {l.flag}
                      </button>
                    ))}
                  </div>
                </div>

                <nav className="flex flex-col gap-1">
                  <Link href="/" onClick={() => setOpen(false)}>
                    <span className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${location === "/" ? "bg-purple-50 text-purple-700" : "text-slate-600 hover:bg-slate-50"}`} data-testid="link-mobile-nav-home">
                      {t.nav.home}
                    </span>
                  </Link>

                  {/* ACCA section */}
                  <div className="mt-1">
                    <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">ACCA</div>
                    {ACCA_ITEMS.map((item) => (
                      <Link key={item.path} href={item.path} onClick={() => setOpen(false)}>
                        <span className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${item.bold ? "font-bold" : "ml-2"} ${location === item.path ? "bg-purple-50 text-purple-700" : "text-slate-700 hover:bg-slate-50"}`} data-testid={`link-mobile-nav-${item.path.split("/").pop()}`}>
                          {getLabel(item)}
                          <span className="text-xs text-slate-400">{getDesc(item)}</span>
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* Other courses */}
                  <div className="mt-1">
                    <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">{t.nav.otherCourses}</div>
                    {OTHER_COURSES.map((item) => (
                      <Link key={item.path} href={item.path} onClick={() => setOpen(false)}>
                        <span className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${location === item.path ? "bg-purple-50 text-purple-700" : "text-slate-700 hover:bg-slate-50"}`} data-testid={`link-mobile-nav-${item.path.split("/").pop()}`}>
                          {getLabel(item)}
                        </span>
                      </Link>
                    ))}
                    <Link href="/courses" onClick={() => setOpen(false)}>
                      <span className="block rounded-lg px-3 py-2.5 text-sm font-bold text-purple-600 hover:bg-purple-50 transition-colors" data-testid="link-mobile-nav-all-courses">
                        {t.footer.allCourses} →
                      </span>
                    </Link>
                  </div>

                  {/* Other pages */}
                  <div className="mt-1 border-t pt-2">
                    {[
                      { label: t.nav.teachers, path: "/teachers" },
                      { label: t.nav.about, path: "/about" },
                      { label: t.nav.blog, path: "/blog" },
                      { label: t.nav.faq, path: "/faq" },
                      { label: t.nav.contacts, path: "/contacts" },
                    ].map((item) => (
                      <Link key={item.path} href={item.path} onClick={() => setOpen(false)}>
                        <span className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${location === item.path ? "bg-purple-50 text-purple-700" : "text-slate-600 hover:bg-slate-50"}`} data-testid={`link-mobile-nav-${item.path.replace("/", "")}`}>
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </nav>

                <Link href="/contacts" onClick={() => setOpen(false)}>
                  <Button className="w-full gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-white shadow-md" data-testid="button-mobile-consultation">
                    {t.nav.consultation} <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
