import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";

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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm" data-testid="header">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-1.5" data-testid="link-home-logo">
            <span className="text-lg font-bold tracking-tight text-foreground">FBA Academy</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" data-testid="nav-desktop">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                {item.highlight ? (
                  <Button variant="outline" size="sm" className="gap-1.5 rounded-full text-sm" data-testid={`link-nav-${item.path.replace("/", "") || "home"}`}>
                    <Search className="h-3.5 w-3.5" />
                    {item.label}
                  </Button>
                ) : (
                  <span
                    className={`rounded-md px-3 py-2 text-sm transition-colors ${
                      location === item.path
                        ? "font-medium text-foreground"
                        : "text-muted-foreground"
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
            <Button variant="outline" size="sm" className="rounded-full" data-testid="button-header-consultation">
              Kirish
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
              <span className="text-lg font-bold">FBA Academy</span>
              <nav className="flex flex-col gap-1">
                {mobileNavItems.map((item) => (
                  <Link key={item.path} href={item.path} onClick={() => setOpen(false)}>
                    <span
                      className={`block rounded-md px-3 py-2.5 text-sm transition-colors ${
                        location === item.path
                          ? "bg-accent font-medium text-foreground"
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
                <Button variant="outline" className="w-full rounded-full" data-testid="button-mobile-consultation">
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
