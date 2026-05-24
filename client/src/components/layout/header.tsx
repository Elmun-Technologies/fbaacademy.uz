import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, ChevronDown, ChevronRight, Sparkles, Home, Info, GraduationCap, BookOpen, Trophy, Newspaper, Phone, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/lib/translations";
import { COMPANY_LOGO_URL } from "@/lib/branding";
import { resolveBundledPublicUrl } from "@/lib/public-media";
import { prefetchRoute } from "@/lib/route-prefetch";
import { STUDENT_DASHBOARD_URL } from "@/lib/constants";

const LANGS: { code: Language; flag: string; label: string }[] = [
  { code: "uz", flag: "🇺🇿", label: "O'z" },
  { code: "ru", flag: "🇷🇺", label: "Ру" },
  { code: "en", flag: "🇬🇧", label: "En" },
];

const ACCA_SUBS = [
  { uz: "F3 Financial Accounting", ru: "F3 Financial Accounting", en: "F3 Financial Accounting", path: "/course/f3-financial-accounting", descUz: "Boshlang'ich fan", descRu: "Начальный уровень", descEn: "Foundation" },
  { uz: "Applied Knowledge", ru: "Applied Knowledge", en: "Applied Knowledge", path: "/course/applied-knowledge", descUz: "1-bosqich", descRu: "1-й уровень", descEn: "Level 1" },
  { uz: "Applied Skills", ru: "Applied Skills", en: "Applied Skills", path: "/course/applied-skills", descUz: "2-bosqich", descRu: "2-й уровень", descEn: "Level 2" },
  { uz: "Strategic Professional", ru: "Strategic Professional", en: "Strategic Professional", path: "/course/strategic-professional", descUz: "3-bosqich", descRu: "3-й уровень", descEn: "Level 3" },
];

const OTHER_COURSES = [
  { uz: "DipIFR", ru: "DipIFR", en: "DipIFR", path: "/course/dipifr", descUz: "Xalqaro moliyaviy hisobot standartlari diplomi", descRu: "Диплом по международной финансовой отчётности", descEn: "Diploma in International Financial Reporting" },
  { uz: "МСФО", ru: "МСФО", en: "IFRS Course", path: "/course/msfo", descUz: "Xalqaro standartlar kursi", descRu: "Международные стандарты", descEn: "International standards" },
  { uz: "Financial Analyst", ru: "Financial Analyst", en: "Financial Analyst", path: "/courses", descUz: "Moliyaviy tahlilchi kursi", descRu: "Курс финансового аналитика", descEn: "Financial analyst course" },
];

export default function Header() {
  const [location] = useLocation();
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);
  const langDropRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (coursesRef.current && !coursesRef.current.contains(e.target as Node)) setCoursesOpen(false);
      if (langDropRef.current && !langDropRef.current.contains(e.target as Node)) setLangOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const root = headerRef.current;
    if (!root) return;

    const prefetchFromEvent = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!link || !root.contains(link)) return;
      const href = link.getAttribute("href");
      if (href?.startsWith("/")) prefetchRoute(href);
    };

    root.addEventListener("mouseover", prefetchFromEvent);
    root.addEventListener("focusin", prefetchFromEvent);
    return () => {
      root.removeEventListener("mouseover", prefetchFromEvent);
      root.removeEventListener("focusin", prefetchFromEvent);
    };
  }, []);

  useEffect(() => {
    if (!coursesOpen) return;
    prefetchRoute("/course/acca");
    prefetchRoute("/course/dipifr");
    prefetchRoute("/course/msfo");
    prefetchRoute("/courses");
  }, [coursesOpen]);

  const isCoursesActive = location.startsWith("/course/") || location === "/courses";
  const currentLangObj = LANGS.find((l) => l.code === lang) || LANGS[0];
  const ui = {
    programs: lang === "ru" ? "Программы" : lang === "en" ? "Programs" : "Dasturlar",
    otherCourses: lang === "ru" ? "Другие курсы" : lang === "en" ? "Other courses" : "Boshqa kurslar",
    allCourses: lang === "ru" ? "Все курсы" : lang === "en" ? "All courses" : "Barcha kurslar",
    fullCourse: lang === "ru" ? "Полный курс" : lang === "en" ? "Full course" : "To'liq kurs",
    selectLanguage: lang === "ru" ? "Выберите язык" : lang === "en" ? "Choose language" : "Tilni tanlang",
    menu: lang === "ru" ? "Меню" : lang === "en" ? "Menu" : "Menyu",
  };

  const gl = (item: { uz: string; ru: string; en: string }) =>
    lang === "ru" ? item.ru : lang === "en" ? item.en : item.uz;
  const gd = (item: { descUz: string; descRu: string; descEn: string }) =>
    lang === "ru" ? item.descRu : lang === "en" ? item.descEn : item.descUz;

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg shadow-black/20" : ""
      }`}
      data-testid="header"
    >
      {/* Desktop — full-width fixed bar */}
      <div
        className={`hidden border-b border-white/10 bg-zinc-950/95 backdrop-blur-md lg:block ${
          isScrolled ? "border-white/15 bg-zinc-950" : ""
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex shrink-0 items-center"
            data-testid="link-home-logo"
            onMouseEnter={() => setHoveredPath("/")}
            onMouseLeave={() => setHoveredPath(null)}
          >
            <img
              src={resolveBundledPublicUrl(COMPANY_LOGO_URL)}
              alt="FBA Academy"
              className="h-10 w-auto max-w-[220px] rounded-md object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
              width={220}
              height={48}
              loading="eager"
              decoding="async"
            />
          </Link>

          <nav className="hidden min-w-0 flex-1 justify-center lg:flex" aria-label={t.nav.mainNavigation}>
            <div className="flex items-center gap-0.5 xl:gap-1">
            {[
              { label: t.nav.about, path: "/about" },
              { label: t.nav.teachers, path: "/teachers" },
              { label: t.nav.courses, path: "/courses", type: "dropdown" },
              { label: t.nav.results, path: "/case-studies" },
              { label: t.nav.blog, path: "/blog" },
              { label: t.nav.contacts, path: "/contacts" },
            ].map((item) => (
              <div 
                key={item.path} 
                className="relative flex items-center h-full"
                onMouseEnter={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                {hoveredPath === item.path && (
                  <motion.div
                    layoutId="hover-pill"
                    className="absolute inset-0 bg-white/5 rounded-full z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                {item.type === "dropdown" ? (
                  <div 
                    className="relative group/course" 
                    ref={coursesRef}
                    onMouseEnter={() => setCoursesOpen(true)}
                    onMouseLeave={() => setCoursesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setCoursesOpen((v) => !v)}
                      aria-expanded={coursesOpen}
                      aria-haspopup="true"
                      className={`relative z-10 flex shrink-0 items-center gap-1 px-3 py-2 text-xs font-semibold transition-all duration-300 xl:text-sm ${
                        isCoursesActive ? "text-white" : "text-zinc-400 group-hover/course:text-white"
                      }`}
                      data-testid="button-nav-courses"
                    >
                      {item.label}
                      <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${coursesOpen ? "rotate-180" : ""}`} />
                      {isCoursesActive && !hoveredPath && (
                        <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-2 right-2 h-[1.5px] bg-brand xl:left-2.5 xl:right-2.5" />
                      )}
                    </button>

                    <AnimatePresence>
                      {coursesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full z-50 mt-3 w-[min(100vw-2rem,600px)] max-w-[calc(100vw-2rem)] rounded-3xl border border-white/5 bg-zinc-950/90 p-1 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']"
                          data-testid="dropdown-courses"
                        >
                          <div className="grid grid-cols-2 gap-1 p-2">
                            {/* ACCA Column */}
                            <div className="flex flex-col gap-1 p-2">
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-3 mb-2">{ui.programs}</span>
                              <Link
                                href="/course/acca"
                                onClick={() => setCoursesOpen(false)}
                                className="group/item flex items-center justify-between rounded-2xl p-3 transition-all hover:bg-white/5 active:scale-95"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/20 text-brand-accent group-hover/item:bg-brand group-hover/item:text-white transition-all">
                                    <Sparkles className="h-4 w-4" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-black text-white">ACCA</div>
                                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">{ui.fullCourse}</div>
                                  </div>
                                </div>
                                <ChevronRight className="h-4 w-4 text-zinc-500 group-hover/item:translate-x-1 group-hover/item:text-brand-accent transition-all" />
                              </Link>
                              <ul className="mt-1 space-y-0.5 border-t border-white/5 pt-2">
                                {ACCA_SUBS.map((course) => (
                                  <li key={course.path}>
                                    <Link
                                      href={course.path}
                                      onClick={() => setCoursesOpen(false)}
                                      className="flex items-center justify-between rounded-xl px-3 py-2 text-left text-xs font-semibold text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                                    >
                                      <span>{gl(course)}</span>
                                      <span className="text-[10px] font-bold uppercase tracking-wide text-zinc-600">{gd(course)}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Others Column */}
                            <div className="flex max-h-[min(70vh,340px)] flex-col gap-0.5 overflow-y-auto overscroll-contain rounded-2xl bg-white/5 p-2 [scrollbar-width:thin]">
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-3 mb-1 shrink-0">{ui.otherCourses}</span>
                              {OTHER_COURSES.map((course) => (
                                <Link
                                  key={course.path}
                                  href={course.path}
                                  onClick={() => setCoursesOpen(false)}
                                  className="group/sub flex items-center justify-between rounded-xl px-3 py-1.5 transition-all hover:bg-white/5"
                                >
                                  <span className="text-xs font-bold text-zinc-400 group-hover/sub:text-white">{gl(course)}</span>
                                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-zinc-500 transition-all group-hover/sub:translate-x-1 group-hover/sub:text-white" />
                                </Link>
                              ))}
                              <Link
                                href="/courses"
                                onClick={() => setCoursesOpen(false)}
                                className="mt-1 flex shrink-0 items-center justify-between rounded-xl bg-brand/10 p-3 transition-all hover:bg-brand/20 text-xs font-black uppercase tracking-widest text-brand-accent"
                              >
                                {ui.allCourses} <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`relative z-10 block shrink-0 whitespace-nowrap px-3 py-2 text-xs font-semibold transition-all duration-300 xl:text-sm ${
                      location === item.path || (item.path === "/blog" && location.startsWith("/blog/"))
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {(location === item.path || (item.path === "/blog" && location.startsWith("/blog/"))) && !hoveredPath && (
                      <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-2 right-2 h-[1.5px] bg-brand xl:left-2.5 xl:right-2.5" />
                    )}
                  </Link>
                )}
              </div>
            ))}
            </div>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
          <div className="relative hidden lg:block" ref={langDropRef}>
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              aria-label={ui.selectLanguage}
              className="flex h-8 sm:h-9 items-center gap-1.5 rounded-full bg-white/5 px-2.5 sm:px-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 transition-all hover:bg-white/10 active:scale-95"
            >
              <span className="text-sm">{currentLangObj.flag}</span>
              <span className="max-[430px]:hidden">{currentLangObj.code}</span>
              <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 top-full mt-3 w-28 rounded-2xl border border-white/5 bg-zinc-950/90 backdrop-blur-3xl p-1 shadow-2xl overflow-hidden"
                >
                  {LANGS.map((l) => (
                    <button
                      type="button"
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-[10px] font-black transition-all ${lang === l.code ? "bg-brand text-white" : "text-zinc-500 hover:bg-white/5"}`}
                    >
                      <span className="uppercase">{l.code}</span>
                      <span>{l.flag}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button asChild size="sm" className="group relative hidden h-9 overflow-hidden rounded-full bg-white px-3 text-[10px] font-black uppercase tracking-widest text-zinc-950 shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all hover:scale-105 active:scale-95 lg:inline-flex xl:px-5">
            <Link href="/contacts">
              <span className="relative z-10 flex items-center gap-2">
                {t.nav.consultation}
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>

          <Button asChild size="sm" variant="outline" className="relative hidden lg:inline-flex h-9 rounded-full border-white/20 bg-white/5 px-4 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10">
            <a href={STUDENT_DASHBOARD_URL}>{t.nav.cabinet}</a>
          </Button>
          </div>

        </div>
        </div>


      {/* ── MOBILE TOP BAR ── */}
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-zinc-950/95 px-3 py-2 backdrop-blur-md lg:hidden">
        <Link
          href="/"
          className="flex shrink-0 items-center py-0.5"
          data-testid="link-mobile-header-logo"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src={resolveBundledPublicUrl(COMPANY_LOGO_URL)}
            alt="FBA Academy"
            className="h-9 w-auto max-w-[180px] rounded-md object-contain object-left sm:h-10 sm:max-w-[220px]"
            width={220}
            height={44}
            loading="eager"
            decoding="async"
          />
        </Link>
        <button
          type="button"
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#0b1d36] text-white transition-colors hover:bg-[#102a4a]"
          data-testid="button-mobile-menu"
          aria-label={ui.menu}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ── MOBILE FULLSCREEN MENU ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-40 pointer-events-auto"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            
            {/* Menu Panel */}
            <motion.nav
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto bg-gradient-to-b from-[#0a1628] to-[#0d0d1a] pt-16 pb-6"
              role="navigation"
              aria-label={ui.menu}
            >
              {/* Language Switcher */}
              <div className="mx-4 mb-5 mt-2">
                <div className="flex items-center gap-1.5 rounded-2xl bg-white/5 p-1 border border-white/5">
                  {LANGS.map((l) => (
                    <button
                      type="button"
                      key={l.code}
                      onClick={() => { setLang(l.code); }}
                      className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition-all duration-200 ${
                        lang === l.code
                          ? "bg-brand text-white shadow-lg shadow-brand-dark/40"
                          : "text-zinc-500 active:bg-white/5"
                      }`}
                      data-testid={`button-mobile-lang-${l.code}`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span className="uppercase">{l.code}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Navigation */}
              <div className="mx-4 mb-4">
                <div className="grid gap-1">
                  {([
                    { label: t.nav.home, path: "/", icon: Home },
                    { label: t.nav.about, path: "/about", icon: Info },
                    { label: t.nav.teachers, path: "/teachers", icon: GraduationCap },
                    { label: t.nav.results, path: "/case-studies", icon: Trophy },
                    { label: t.nav.blog, path: "/blog", icon: Newspaper },
                    { label: t.nav.contacts, path: "/contacts", icon: Phone },
                    { label: t.nav.cabinet, path: STUDENT_DASHBOARD_URL, icon: User, external: true },
                  ] as const).map((item) => {
                    const isExternal = "external" in item && item.external;
                    const active = !isExternal && (location === item.path || (item.path === "/blog" && location.startsWith("/blog/")));
                    const className = `flex items-center gap-3.5 rounded-2xl px-4 py-3.5 transition-all active:scale-[0.98] ${
                      active
                        ? "bg-brand/15 text-brand-accent"
                        : "text-zinc-300 active:bg-white/5"
                    }`;
                    if (isExternal) {
                      return (
                        <a
                          key={item.path}
                          href={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={className}
                          data-testid="link-mobile-nav-cabinet"
                        >
                          <item.icon className="h-5 w-5 text-zinc-500" />
                          <span className="text-[15px] font-semibold">{item.label}</span>
                        </a>
                      );
                    }
                    return (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={className}
                        data-testid={`link-mobile-nav-${item.path.replace("/", "") || "home"}`}
                      >
                        <item.icon className={`h-5 w-5 ${active ? "text-brand-accent" : "text-zinc-500"}`} />
                        <span className="text-[15px] font-semibold">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Divider */}
              <div className="mx-6 mb-4 h-px bg-white/5" />

              {/* Courses Section */}
              <div className="mx-4 mb-4">
                <div className="mb-3 ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">{ui.programs}</div>

                {/* ACCA Card */}
                <Link
                  href="/course/acca"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mb-2 flex items-center gap-3.5 rounded-2xl p-4 transition-all active:scale-[0.98] ${
                    location === "/course/acca"
                      ? "bg-brand/20 ring-1 ring-brand/30"
                      : "bg-white/[0.03] border border-white/5"
                  }`}
                  data-testid="link-mobile-nav-acca"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20 text-brand-accent">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-bold text-white">ACCA</div>
                    <div className="text-xs text-zinc-500">{ui.fullCourse}</div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-zinc-500" />
                </Link>

                {/* ACCA sub-levels */}
                <div className="mb-3 ml-3 grid gap-0.5 border-l-2 border-brand/20 pl-3">
                  {ACCA_SUBS.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-medium transition-all active:scale-[0.98] ${
                        location === item.path ? "text-brand-accent" : "text-zinc-400 active:text-white"
                      }`}
                      data-testid={`link-mobile-nav-${item.path.split("/").pop()}`}
                    >
                      <span>{gl(item)}</span>
                      <span className="text-[10px] font-bold uppercase text-zinc-600">{gd(item)}</span>
                    </Link>
                  ))}
                </div>

                {/* Other Courses */}
                <div className="grid gap-1.5">
                  {OTHER_COURSES.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-semibold transition-all active:scale-[0.98] ${
                        location === item.path
                          ? "bg-brand/15 text-brand-accent"
                          : "text-zinc-300 bg-white/[0.03] border border-white/5 active:bg-white/5"
                      }`}
                      data-testid={`link-mobile-nav-${item.path.split("/").pop()}`}
                    >
                      <span>{gl(item)}</span>
                      <span className="text-xs text-zinc-600">{gd(item)}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mx-4 mt-2">
                <Button asChild size="lg" className="w-full gap-2.5 rounded-2xl bg-gradient-to-r from-brand to-brand-dark h-14 text-[15px] font-bold shadow-lg shadow-brand-dark/40" data-testid="button-mobile-consultation">
                  <Link href="/contacts" onClick={() => setMobileMenuOpen(false)}>
                    {t.nav.consultation}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
