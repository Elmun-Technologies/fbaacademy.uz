import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/lib/translations";

const LANGS: { code: Language; flag: string; label: string }[] = [
  { code: "uz", flag: "🇺🇿", label: "O'z" },
  { code: "ru", flag: "🇷🇺", label: "Ру" },
  { code: "en", flag: "🇬🇧", label: "En" },
];

const accaSubItems = [
  { labelUz: "Applied Knowledge", labelRu: "Applied Knowledge", labelEn: "Applied Knowledge", path: "/course/applied-knowledge", descUz: "ACCA 1-bosqich", descRu: "ACCA 1-й уровень", descEn: "ACCA Level 1" },
  { labelUz: "Applied Skills", labelRu: "Applied Skills", labelEn: "Applied Skills", path: "/course/applied-skills", descUz: "ACCA 2-bosqich", descRu: "ACCA 2-й уровень", descEn: "ACCA Level 2" },
  { labelUz: "Strategic Professional", labelRu: "Strategic Professional", labelEn: "Strategic Professional", path: "/course/strategic-professional", descUz: "ACCA 3-bosqich", descRu: "ACCA 3-й уровень", descEn: "ACCA Level 3" },
];

export default function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [accaOpen, setAccaOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langDropRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setAccaOpen(false);
      if (langDropRef.current && !langDropRef.current.contains(e.target as Node)) setLangOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isAccaActive =
    location.startsWith("/course/acca") ||
    location === "/course/applied-knowledge" ||
    location === "/course/applied-skills" ||
    location === "/course/strategic-professional";

  const currentLangObj = LANGS.find((l) => l.code === lang) || LANGS[0];

  const mainNavItems = [
    { label: "DipIFR", path: "/course/dipifr" },
    { label: lang === "uz" ? "Financial Modeling" : lang === "ru" ? "Financial Modeling" : "Financial Modeling", path: "/course/financial-modeling" },
    { label: lang === "uz" ? "Huquqshunoslik" : lang === "ru" ? "Юриспруденция" : "Law", path: "/course/jurisprudence" },
    { label: lang === "uz" ? "1C: Buxgalteriya" : lang === "ru" ? "1С: Бухгалтерия" : "1C: Accounting", path: "/course/1c-course" },
  ];

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
          <nav className="hidden items-center gap-0.5 xl:flex" data-testid="nav-desktop">
            {/* ACCA dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setAccaOpen((v) => !v)}
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  isAccaActive ? "text-purple-700 bg-purple-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
                data-testid="button-nav-acca"
                aria-expanded={accaOpen}
              >
                ACCA
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${accaOpen ? "rotate-180" : ""}`} />
              </button>

              {accaOpen && (
                <div className="absolute left-0 top-full mt-1 w-64 rounded-xl border bg-white shadow-xl z-50 overflow-hidden" data-testid="dropdown-acca">
                  <div className="border-b px-4 py-2.5">
                    <Link href="/course/acca" onClick={() => setAccaOpen(false)}>
                      <span className="text-sm font-bold text-purple-700 hover:text-purple-900" data-testid="link-acca-full">
                        {t.nav.accaFull}
                      </span>
                    </Link>
                  </div>
                  {accaSubItems.map((item) => (
                    <Link key={item.path} href={item.path} onClick={() => setAccaOpen(false)}>
                      <div className="flex items-center justify-between px-4 py-3 hover:bg-purple-50 cursor-pointer transition-colors" data-testid={`link-acca-${item.labelUz.toLowerCase().replace(/\s/g, "-")}`}>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{item.labelUz}</div>
                          <div className="text-xs text-slate-500">{lang === "uz" ? item.descUz : lang === "ru" ? item.descRu : item.descEn}</div>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mainNavItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`block rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                    location === item.path
                      ? "text-purple-700 bg-purple-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                  data-testid={`link-nav-${item.path.split("/").pop()}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
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
            >
              <span>{currentLangObj.flag}</span>
              <span>{currentLangObj.label}</span>
              <ChevronDown className={`h-3 w-3 text-slate-400 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 w-28 rounded-xl border bg-white shadow-xl z-50 overflow-hidden" data-testid="dropdown-lang">
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

          <div className="hidden items-center gap-2 xl:flex">
            <Link href="/teachers">
              <span className="rounded-md px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors" data-testid="link-nav-teachers">
                {t.nav.teachers}
              </span>
            </Link>
            <Link href="/contacts">
              <Button size="sm" className="gap-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-5 font-semibold text-white shadow-md hover:from-purple-700 hover:to-pink-700" data-testid="button-header-consultation">
                {t.nav.consultation} <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button size="icon" variant="ghost" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <div className="flex flex-col gap-4 pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
                      <span className="text-xs font-extrabold text-white">F</span>
                    </div>
                    <span className="text-base font-extrabold">FBA Academy</span>
                  </div>
                  {/* Mobile lang switcher */}
                  <div className="flex items-center gap-1">
                    {LANGS.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => setLang(l.code)}
                        className={`rounded px-1.5 py-0.5 text-xs font-bold transition-colors ${lang === l.code ? "bg-purple-100 text-purple-700" : "text-slate-500 hover:bg-slate-100"}`}
                        data-testid={`button-mobile-lang-${l.code}`}
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

                  <div className="mt-1">
                    <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">ACCA</div>
                    <Link href="/course/acca" onClick={() => setOpen(false)}>
                      <span className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${location === "/course/acca" ? "bg-purple-50 text-purple-700" : "text-slate-700 hover:bg-slate-50"}`} data-testid="link-mobile-nav-acca">
                        {t.nav.accaFull}
                      </span>
                    </Link>
                    {accaSubItems.map((item) => (
                      <Link key={item.path} href={item.path} onClick={() => setOpen(false)}>
                        <span className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ml-2 ${location === item.path ? "bg-purple-50 text-purple-700" : "text-slate-600 hover:bg-slate-50"}`} data-testid={`link-mobile-nav-${item.labelUz.toLowerCase().replace(/\s/g, "-")}`}>
                          {item.labelUz}
                          <span className="text-xs text-slate-400">{lang === "uz" ? item.descUz : lang === "ru" ? item.descRu : item.descEn}</span>
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-1">
                    <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">{t.nav.otherCourses}</div>
                    {mainNavItems.map((item) => (
                      <Link key={item.path} href={item.path} onClick={() => setOpen(false)}>
                        <span className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${location === item.path ? "bg-purple-50 text-purple-700" : "text-slate-700 hover:bg-slate-50"}`} data-testid={`link-mobile-nav-${item.path.split("/").pop()}`}>
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-1 border-t pt-2">
                    {[
                      { label: t.nav.teachers, path: "/teachers" },
                      { label: t.nav.about, path: "/about" },
                      { label: t.nav.blog, path: "/blog" },
                      { label: t.nav.results, path: "/case-studies" },
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
