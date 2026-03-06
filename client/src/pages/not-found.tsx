import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, BookOpen, Phone } from "lucide-react";

export default function NotFound() {
  useSEO({
    title: "404 — Sahifa topilmadi | FBA Academy",
    description: "Bu sahifa mavjud emas. FBA Academy bosh sahifasiga yoki kurslar sahifasiga o'ting.",
    noindex: true,
  });

  return (
    <Layout>
      <section className="flex min-h-[70vh] items-center justify-center py-20">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="mb-6 text-8xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" data-testid="text-404-number">
            404
          </div>
          <h1 className="mb-3 text-2xl font-extrabold text-slate-900 sm:text-3xl" data-testid="text-404-title">
            Sahifa topilmadi
          </h1>
          <p className="mb-8 text-slate-500">
            Siz qidirgan sahifa mavjud emas yoki ko'chirilgan. Bosh sahifaga qaytib, kerakli ma'lumotni topishingiz mumkin.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/">
              <Button className="gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 font-bold text-white shadow-md hover:from-purple-700 hover:to-pink-700" data-testid="button-404-home">
                <Home className="h-4 w-4" /> Bosh sahifa
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline" className="gap-2 rounded-full border-2 px-6 font-bold" data-testid="button-404-courses">
                <BookOpen className="h-4 w-4" /> Kurslar
              </Button>
            </Link>
            <Link href="/contacts">
              <Button variant="ghost" className="gap-2 rounded-full px-6 font-semibold text-slate-600" data-testid="button-404-contact">
                <Phone className="h-4 w-4" /> Bog'lanish
              </Button>
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { href: "/course/acca", label: "ACCA kursi", icon: "🎓" },
              { href: "/course/dipifr", label: "DipIFR kursi", icon: "📊" },
              { href: "/blog", label: "Blog", icon: "📝" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <div className="flex items-center gap-2 rounded-xl border bg-white p-3 text-sm font-semibold text-slate-700 shadow-sm hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700 transition-colors cursor-pointer" data-testid={`link-404-${item.label}`}>
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
