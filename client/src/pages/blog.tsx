import { useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import { blogPosts } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";
import { Clock, ArrowRight, Calendar, User, Search } from "lucide-react";

const ALL_CATEGORIES = ["Barchasi", "ACCA", "DipIFR", "Financial Modeling", "1C Buxgalteriya", "Huquqshunoslik", "Karyera"];

export default function Blog() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("Barchasi");
  const [searchQuery, setSearchQuery] = useState("");

  useSEO({
    title: "Blog — ACCA, DipIFR, Moliya va Buxgalteriya maqolalari | FBA Academy",
    description: "ACCA imtihoniga tayyorlanish, DipIFR, Financial Modeling, 1C Buxgalteriya va Huquqshunoslik bo'yicha to'liq maqolalar. O'zbekistonda moliya sohasida karyera maslahatlar.",
    keywords: "ACCA blog, DipIFR maqolalar, moliya ta'limi, buxgalteriya maslahat, financial modeling O'zbekiston, 1C kurs",
    jsonLd: [
      {
        "@type": "Blog",
        "name": "FBA Academy Blog",
        "description": "ACCA, DipIFR, Financial Modeling va buxgalteriya bo'yicha foydali maqolalar",
        "url": "https://fbaacademy.uz/blog",
        "publisher": { "@type": "Organization", "name": "FBA Academy" },
        "inLanguage": "uz",
      },
      {
        "@type": "ItemList",
        "itemListElement": blogPosts.slice(0, 5).map((p, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "url": `https://fbaacademy.uz/blog/${p.id}`,
          "name": p.title,
        })),
      },
    ],
  });

  const filtered = blogPosts.filter((p) => {
    const matchCat = activeCategory === "Barchasi" || p.category === activeCategory;
    const matchSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = blogPosts[0];
  const rest = filtered.filter((p) => p.id !== featured.id);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">
            {t.blog.title}
          </Badge>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl" data-testid="text-blog-title">
            {t.blog.title}
          </h1>
          <p className="max-w-2xl text-slate-300">{t.blog.subtitle}</p>

          {/* Search */}
          <div className="mt-6 relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Maqola qidirish..."
              className="w-full rounded-full border-0 bg-white/10 py-3 pl-11 pr-5 text-sm text-white placeholder-slate-400 backdrop-blur-sm focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-purple-400"
              data-testid="input-blog-search"
            />
          </div>
        </div>
      </section>

      {/* Featured post */}
      {activeCategory === "Barchasi" && !searchQuery && (
        <section className="py-8 sm:py-12" data-testid="section-blog-featured">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featured.id}`}>
              <div className="group cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 lg:grid lg:grid-cols-5" data-testid="card-blog-featured">
                <div className="h-56 overflow-hidden lg:col-span-2 lg:h-auto">
                  <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="eager" />
                </div>
                <div className="p-6 lg:col-span-3 lg:flex lg:flex-col lg:justify-center lg:p-8">
                  <div className="mb-3 flex items-center gap-3 flex-wrap">
                    <Badge className="rounded-full bg-purple-100 text-purple-700 font-semibold">{featured.category}</Badge>
                    <Badge className="rounded-full bg-yellow-100 text-yellow-700 font-semibold">⭐ Tavsiya etiladi</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" /> {featured.readTime}</span>
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl leading-snug group-hover:text-purple-700 transition-colors">{featured.title}</h2>
                  <p className="mt-3 text-sm text-slate-500 line-clamp-3">{featured.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="h-3.5 w-3.5" /> {featured.author}</span>
                    <span className="flex items-center gap-1 text-sm font-bold text-purple-600">
                      {t.common.readMore} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Category filter */}
      <section className="bg-slate-50 py-4 sm:py-6" data-testid="section-blog-filters">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-purple-600 text-white shadow-md"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-purple-300 hover:text-purple-700"
                }`}
                data-testid={`filter-category-${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-10 sm:py-14" data-testid="section-blog-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <div className="text-4xl">🔍</div>
              <p className="mt-3 text-muted-foreground">Hech narsa topilmadi. Boshqa so'z bilan qidiring.</p>
              <Button variant="outline" className="mt-4 rounded-full" onClick={() => { setSearchQuery(""); setActiveCategory("Barchasi"); }} data-testid="button-reset-search">
                Barcha maqolalar
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(activeCategory === "Barchasi" && !searchQuery ? rest : filtered).map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="group cursor-pointer border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full overflow-hidden" data-testid={`card-blog-${post.id}`}>
                    {post.image && (
                      <div className="h-44 overflow-hidden">
                        <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="mb-3 flex items-center gap-2 flex-wrap text-xs text-muted-foreground">
                        <Badge className="rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">{post.category}</Badge>
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                      </div>
                      <h2 className="mb-2 text-base font-extrabold leading-snug text-foreground line-clamp-2 group-hover:text-purple-700 transition-colors" data-testid={`text-blog-title-${post.id}`}>{post.title}</h2>
                      <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between gap-2">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <User className="h-3 w-3" /> {post.author}
                        </span>
                        <span className="flex items-center gap-1 text-sm font-semibold text-purple-600">
                          {t.common.readMore} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 py-12" data-testid="section-blog-bottom-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-extrabold text-white sm:text-2xl">Maqolalar sizga foydali bo'ldimi?</h2>
          <p className="mt-2 text-slate-400 text-sm">Bepul konsultatsiya oling va o'zingizga mos kursni tanlang</p>
          <Link href="/contacts">
            <Button className="mt-6 gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 font-bold text-white shadow-lg hover:from-purple-700 hover:to-pink-700" data-testid="button-blog-cta">
              Bepul konsultatsiya <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
