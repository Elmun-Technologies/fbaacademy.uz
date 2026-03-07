import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/lib/translations";

const LANGS: { code: Language; flag: string; label: string }[] = [
  { code: "uz", flag: "🇺🇿", label: "O'z" },
  { code: "ru", flag: "🇷🇺", label: "Ру" },
  { code: "en", flag: "🇬🇧", label: "En" },
];

const ACCA_SUBS = [
  { uz: "Applied Knowledge", ru: "Applied Knowledge", en: "Applied Knowledge", path: "/course/applied-knowledge", descUz: "1-bosqich", descRu: "1-й уровень", descEn: "Level 1" },
  { uz: "Applied Skills", ru: "Applied Skills", en: "Applied Skills", path: "/course/applied-skills", descUz: "2-bosqich", descRu: "2-й уровень", descEn: "Level 2" },
  { uz: "Strategic Professional", ru: "Strategic Professional", en: "Strategic Professional", path: "/course/strategic-professional", descUz: "3-bosqich", descRu: "3-й уровень", descEn: "Level 3" },
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

  const gl = (item: { uz: string; ru: string; en: string }) =>
    lang === "ru" ? item.ru : lang === "en" ? item.en : item.uz;
  const gd = (item: { descUz: string; descRu: string; descEn: string }) =>
    lang === "ru" ? item.descRu : lang === "en" ? item.descEn : item.descUz;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0d0d0d]/95 backdrop-blur-md" data-testid="header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2 shrink-0" data-testid="link-home-logo">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 shadow-md">
              <span className="text-sm font-extrabold text-white">F</span>
            </div>
            <span className="text-lg font-extrabold tracking-tight text-white">FBA Academy</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex" data-testid="nav-desktop">
            {/* About Us */}
            <a
              href="/about"
              className={`block rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                location === "/about" ? "text-purple-400 bg-purple-600/20" : "text-zinc-300 hover:text-white hover:bg-zinc-800"
              }`}
              data-testid="link-nav-about"
            >
              {t.nav.about}
            </a>

            {/* Kurslar dropdown */}
            <div className="relative" ref={coursesRef}>
              <button
                onClick={() => setCoursesOpen((v) => !v)}
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  isCoursesActive ? "text-purple-400 bg-purple-600/20" : "text-zinc-300 hover:text-white hover:bg-zinc-800"
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
                  className="absolute left-0 top-full mt-1 w-[480px] rounded-xl border border-white/10 bg-zinc-900 shadow-2xl z-50 overflow-hidden"
                  data-testid="dropdown-courses"
                  role="menu"
                >
                  <div className="grid grid-cols-2 divide-x divide-white/10">
                    {/* ACCA column */}
                    <div>
                      <div className="px-4 py-2 border-b border-white/10 bg-zinc-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">ACCA</span>
                      </div>
                      <a
                        href="/course/acca"
                        className={`flex items-center justify-between px-4 py-2.5 transition-colors hover:bg-purple-600/20 ${location === "/course/acca" ? "bg-purple-600/20" : ""}`}
                        data-testid="link-nav-acca"
                        role="menuitem"
                      >
                        <div>
                          <div className="text-sm font-bold text-purple-400">ACCA</div>
                          <div className="text-xs text-zinc-500">
                            {lang === "ru" ? "Полная программа" : lang === "en" ? "Full program" : "To'liq dastur"}
                          </div>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 text-purple-500 shrink-0" />
                      </a>
                      <div className="border-l-2 border-purple-500/30 ml-4 mb-1">
                        {ACCA_SUBS.map((item) => (
                          <a
                            key={item.path}
                            href={item.path}
                            className={`flex items-center justify-between px-3 py-2 transition-colors hover:bg-purple-600/20 ${location === item.path ? "bg-purple-600/20" : ""}`}
                            data-testid={`link-nav-${item.path.split("/").pop()}`}
                            role="menuitem"
                          >
                            <div>
                              <div className="text-sm font-medium text-zinc-300">{gl(item)}</div>
                              <div className="text-xs text-zinc-500">{gd(item)}</div>
                            </div>
                            <ChevronRight className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Other courses column */}
                    <div>
                      <div className="px-4 py-2 border-b border-white/10 bg-zinc-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                          {t.nav.otherCourses}
                        </span>
                      </div>
                      {OTHER_COURSES.map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          className={`flex items-center justify-between px-4 py-2.5 transition-colors hover:bg-purple-600/20 ${location === item.path ? "bg-purple-600/20" : ""}`}
                          data-testid={`link-nav-${item.path.split("/").pop()}`}
                          role="menuitem"
                        >
                          <div>
                            <div className="text-sm font-semibold text-zinc-200">{gl(item)}</div>
                            <div className="text-xs text-zinc-500">{gd(item)}</div>
                          </div>
                          <ArrowRight className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
                        </a>
                      ))}
                      <a
                        href="/courses"
                        className="border-t border-white/10 flex items-center gap-2 px-4 py-2.5 hover:bg-zinc-800 transition-colors"
                        data-testid="link-nav-all-courses"
                        role="menuitem"
                      >
                        <span className="text-sm font-bold text-purple-400">{t.footer.allCourses}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-purple-500" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Result */}
            <a
              href="/achievements"
              className={`block rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                location === "/achievements" ? "text-purple-400 bg-purple-600/20" : "text-zinc-300 hover:text-white hover:bg-zinc-800"
              }`}
              data-testid="link-nav-results"
            >
              {t.nav.results}
            </a>

            {/* Blog */}
            <a
              href="/blog"
              className={`block rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                location === "/blog" || location.startsWith("/blog/") ? "text-purple-400 bg-purple-600/20" : "text-zinc-300 hover:text-white hover:bg-zinc-800"
              }`}
              data-testid="link-nav-blog"
            >
              {t.nav.blog}
            </a>

            {/* Contacts */}
            <a
              href="/contacts"
              className={`block rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                location === "/contacts" ? "text-purple-400 bg-purple-600/20" : "text-zinc-300 hover:text-white hover:bg-zinc-800"
              }`}
              data-testid="link-nav-contacts"
            >
              {t.nav.contacts}
            </a>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="relative" ref={langDropRef}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-zinc-800 px-2.5 py-1.5 text-xs font-bold text-zinc-300 hover:border-purple-500/50 hover:text-white transition-colors"
              data-testid="button-lang-switcher"
              aria-label="Tilni o'zgartirish"
            >
              <span>{currentLangObj.flag}</span>
              <span>{currentLangObj.label}</span>
              <ChevronDown className={`h-3 w-3 text-zinc-500 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 w-32 rounded-xl border border-white/10 bg-zinc-900 shadow-2xl z-50 overflow-hidden" data-testid="dropdown-lang">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                    className={`flex w-full items-center gap-2 px-3 py-2.5 text-xs font-semibold transition-colors hover:bg-purple-600/20 ${lang === l.code ? "bg-purple-600/20 text-purple-400" : "text-zinc-300"}`}
                    data-testid={`button-lang-${l.code}`}
                  >
                    <span>{l.flag}</span> {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="/contacts" className="hidden lg:block">
            <Button size="sm" className="gap-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 font-semibold text-white shadow-md hover:from-purple-700 hover:to-pink-700" data-testid="button-header-consultation">
              {t.nav.consultation}
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </a>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button size="icon" variant="ghost" className="text-zinc-300 hover:text-white hover:bg-zinc-800" data-testid="button-mobile-menu" aria-label="Menyuni ochish">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto border-white/10 bg-[#0d0d0d]">
              <SheetTitle className="sr-only">Navigatsiya menyusi</SheetTitle>
              <SheetDescription className="sr-only">Sayt bo'limlari va kurslar ro'yxati</SheetDescription>
              <div className="flex flex-col gap-4 pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
                      <span className="text-xs font-extrabold text-white">F</span>
                    </div>
                    <span className="text-base font-extrabold text-white">FBA Academy</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {LANGS.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => setLang(l.code)}
                        className={`rounded px-1.5 py-0.5 text-xs font-bold transition-colors ${lang === l.code ? "bg-purple-600/30 text-purple-400" : "text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300"}`}
                        data-testid={`button-mobile-lang-${l.code}`}
                        aria-label={l.label}
                      >
                        {l.flag}
                      </button>
                    ))}
                  </div>
                </div>

                <nav className="flex flex-col gap-1">
                  <a href="/" className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${location === "/" ? "bg-purple-600/20 text-purple-400" : "text-zinc-300 hover:bg-zinc-800"}`} data-testid="link-mobile-nav-home">
                    {t.nav.home}
                  </a>

                  <div className="mt-1">
                    <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-zinc-600">ACCA</div>
                    <a
                      href="/course/acca"
                      className={`block rounded-lg px-3 py-2.5 text-sm font-bold transition-colors ${location === "/course/acca" ? "bg-purple-600/20 text-purple-400" : "text-purple-400 hover:bg-zinc-800"}`}
                      data-testid="link-mobile-nav-acca"
                    >
                      ACCA — {lang === "ru" ? "Полная программа" : lang === "en" ? "Full Program" : "To'liq dastur"}
                    </a>
                    <div className="ml-3 border-l-2 border-purple-500/30 pl-1">
                      {ACCA_SUBS.map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${location === item.path ? "bg-purple-600/20 text-purple-400" : "text-zinc-300 hover:bg-zinc-800"}`}
                          data-testid={`link-mobile-nav-${item.path.split("/").pop()}`}
                        >
                          {gl(item)}
                          <span className="text-xs text-zinc-600">{gd(item)}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="mt-1">
                    <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-zinc-600">{t.nav.otherCourses}</div>
                    {OTHER_COURSES.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${location === item.path ? "bg-purple-600/20 text-purple-400" : "text-zinc-300 hover:bg-zinc-800"}`}
                        data-testid={`link-mobile-nav-${item.path.split("/").pop()}`}
                      >
                        {gl(item)}
                      </a>
                    ))}
                    <a href="/courses" className="block rounded-lg px-3 py-2.5 text-sm font-bold text-purple-400 hover:bg-zinc-800 transition-colors" data-testid="link-mobile-nav-all-courses">
                      {t.footer.allCourses} →
                    </a>
                  </div>

                  <div className="mt-1 border-t border-white/10 pt-2">
                    {[
                      { label: t.nav.about, path: "/about" },
                      { label: t.nav.results, path: "/achievements" },
                      { label: t.nav.teachers, path: "/teachers" },
                      { label: t.nav.blog, path: "/blog" },
                      { label: t.nav.faq, path: "/faq" },
                      { label: t.nav.contacts, path: "/contacts" },
                    ].map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${location === item.path ? "bg-purple-600/20 text-purple-400" : "text-zinc-300 hover:bg-zinc-800"}`}
                        data-testid={`link-mobile-nav-${item.path.replace("/", "")}`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </nav>

                <a href="/contacts">
                  <Button className="w-full gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-white shadow-md" data-testid="button-mobile-consultation">
                    {t.nav.consultation} <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
