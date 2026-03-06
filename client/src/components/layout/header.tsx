import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, GraduationCap } from "lucide-react";

const navItems = [
  { label: "Bosh sahifa", path: "/" },
  { label: "Kurslar", path: "/courses" },
  { label: "O'qituvchilar", path: "/teachers" },
  { label: "Biz haqimizda", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "FAQ", path: "/faq" },
  { label: "Kontakt", path: "/contacts" },
];

export default function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl" data-testid="header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-indigo-600">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">FBA Academy</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" data-testid="nav-desktop">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <span
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  location === item.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${item.path.replace("/", "") || "home"}`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contacts">
            <Button data-testid="button-header-consultation">
              Konsultatsiya olish
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
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-indigo-600">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">FBA Academy</span>
              </div>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path} onClick={() => setOpen(false)}>
                    <span
                      className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                        location === item.path
                          ? "bg-accent text-foreground"
                          : "text-muted-foreground"
                      }`}
                      data-testid={`link-mobile-nav-${item.path.replace("/", "") || "home"}`}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
              </nav>
              <Link href="/contacts" onClick={() => setOpen(false)}>
                <Button className="w-full" data-testid="button-mobile-consultation">
                  Konsultatsiya olish
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
