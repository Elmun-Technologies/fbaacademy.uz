import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, ArrowRight } from "lucide-react";

const navItems = [
  { label: "Kurslar katalogi", path: "/courses", highlight: true },
  { label: "Bepul o'qish", path: "/grants" },
  { label: "Blog", path: "/blog" },
];

const mobileNavItems = [
  { label: "Bosh sahifa", path: "/" },
  { label: "Kurslar", path: "/courses" },
  { label: "O'qituvchilar", path: "/teachers" },
  { label: "Biz haqimizda", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Natijalar", path: "/case-studies" },
  { label: "FAQ", path: "/faq" },
  { label: "Kontakt", path: "/contacts" },
  { label: "Aksiyalar", path: "/grants" },
  { label: "Korporativ", path: "/corporate" },
  { label: "Hamkorlik", path: "/partnership" },
];

export default function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md shadow-sm dark:bg-background/95 dark:border-border/40" data-testid="header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-1.5" data-testid="link-home-logo">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 shadow-md">
              <span className="text-sm font-extrabold text-white">F</span>
            </div>
            <span className="text-lg font-extrabold tracking-tight text-foreground">FBA Academy</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" data-testid="nav-desktop">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                {item.highlight ? (
                  <Button variant="outline" size="sm" className="gap-1.5 rounded-full border-2 text-sm font-semibold shadow-sm" data-testid={`link-nav-${item.path.replace("/", "") || "home"}`}>
                    <Search className="h-3.5 w-3.5" />
                    {item.label}
                  </Button>
                ) : (
                  <span
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      location === item.path
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    data-testid={`link-nav-${item.path.replace("/", "") || "home"}`}
                  >
                    {item.label}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contacts">
            <Button size="sm" className="gap-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-5 font-semibold text-white shadow-md hover:from-purple-700 hover:to-pink-700" data-testid="button-header-consultation">
              Konsultatsiya <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button size="icon" variant="ghost" data-testid="button-mobile-menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col gap-6 pt-6">
              <span className="text-lg font-extrabold">FBA Academy</span>
              <nav className="flex flex-col gap-1">
                {mobileNavItems.map((item) => (
                  <Link key={item.path} href={item.path} onClick={() => setOpen(false)}>
                    <span
                      className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        location === item.path
                          ? "bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300"
                          : "text-muted-foreground hover:bg-slate-50 dark:hover:bg-slate-800"
                      }`}
                      data-testid={`link-mobile-nav-${item.path.replace("/", "") || "home"}`}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
              </nav>
              <Link href="/contacts" onClick={() => setOpen(false)}>
                <Button className="w-full gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-white shadow-md" data-testid="button-mobile-consultation">
                  Konsultatsiya olish <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
