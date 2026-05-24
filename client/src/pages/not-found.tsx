import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, BookOpen, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/lib/translations";

const CONTENT: Record<
  Language,
  {
    seoTitle: string;
    seoDescription: string;
    title: string;
    description: string;
    home: string;
    courses: string;
    contact: string;
    quickLinks: Array<{ id: string; href: string; label: string; icon: string }>;
  }
> = {
  uz: {
    seoTitle: "404 — Sahifa topilmadi | FBA Academy",
    seoDescription: "Bu sahifa mavjud emas. FBA Academy bosh sahifasiga yoki kurslar sahifasiga o'ting.",
    title: "Sahifa topilmadi",
    description: "Siz qidirgan sahifa mavjud emas yoki ko'chirilgan. Bosh sahifaga qaytib, kerakli ma'lumotni topishingiz mumkin.",
    home: "Bosh sahifa",
    courses: "Kurslar",
    contact: "Bog'lanish",
    quickLinks: [
      { id: "acca", href: "/course/acca", label: "ACCA kursi", icon: "🎓" },
      { id: "dipifr", href: "/course/dipifr", label: "DipIFR kursi", icon: "📊" },
      { id: "blog", href: "/blog", label: "Blog", icon: "📝" },
    ],
  },
  ru: {
    seoTitle: "404 — Страница не найдена | FBA Academy",
    seoDescription: "Эта страница не существует. Перейдите на главную страницу FBA Academy или в раздел курсов.",
    title: "Страница не найдена",
    description: "Страница, которую вы ищете, не существует или была перемещена. Вернитесь на главную и найдите нужную информацию.",
    home: "Главная",
    courses: "Курсы",
    contact: "Контакты",
    quickLinks: [
      { id: "acca", href: "/course/acca", label: "Курс ACCA", icon: "🎓" },
      { id: "dipifr", href: "/course/dipifr", label: "Курс DipIFR", icon: "📊" },
      { id: "blog", href: "/blog", label: "Блог", icon: "📝" },
    ],
  },
  en: {
    seoTitle: "404 — Page Not Found | FBA Academy",
    seoDescription: "This page does not exist. Go back to the FBA Academy homepage or open the courses page.",
    title: "Page not found",
    description: "The page you are looking for does not exist or has been moved. Return to the homepage and find the needed information.",
    home: "Home",
    courses: "Courses",
    contact: "Contact",
    quickLinks: [
      { id: "acca", href: "/course/acca", label: "ACCA course", icon: "🎓" },
      { id: "dipifr", href: "/course/dipifr", label: "DipIFR course", icon: "📊" },
      { id: "blog", href: "/blog", label: "Blog", icon: "📝" },
    ],
  },
};

export default function NotFound() {
  const { lang } = useLanguage();
  const tx = CONTENT[lang];

  useSEO({
    title: tx.seoTitle,
    description: tx.seoDescription,
    noindex: true,
  });

  return (
    <Layout>
      <section className="flex min-h-[70vh] items-center justify-center py-20">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="mb-6 text-8xl font-extrabold bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent" data-testid="text-404-number">
            404
          </div>
          <h1 className="mb-3 text-2xl font-extrabold text-white sm:text-3xl" data-testid="text-404-title">
            {tx.title}
          </h1>
          <p className="mb-8 text-zinc-500">
            {tx.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/">
              <Button className="gap-2 rounded-full bg-gradient-to-r from-brand to-brand-dark px-6 font-bold text-white shadow-md hover:from-brand-dark hover:to-brand-dark" data-testid="button-404-home">
                <Home className="h-4 w-4" /> {tx.home}
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline" className="gap-2 rounded-full border-2 px-6 font-bold" data-testid="button-404-courses">
                <BookOpen className="h-4 w-4" /> {tx.courses}
              </Button>
            </Link>
            <Link href="/contacts">
              <Button variant="ghost" className="gap-2 rounded-full px-6 font-semibold text-zinc-400" data-testid="button-404-contact">
                <Phone className="h-4 w-4" /> {tx.contact}
              </Button>
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {tx.quickLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 p-3 text-sm font-semibold text-zinc-300 shadow-sm hover:border-brand-accent-light hover:bg-zinc-800 hover:text-brand-dark transition-colors cursor-pointer" data-testid={`link-404-${item.id}`}>
                  <span>{item.icon}</span>
                  {item.label}
                  <ArrowRight className="ml-auto h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
