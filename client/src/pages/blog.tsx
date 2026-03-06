import { useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import { blogPosts } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";
import { Clock, ArrowRight, Search, Eye } from "lucide-react";

const ALL_CATEGORIES = ["Barchasi", "ACCA", "DipIFR", "Financial Modeling", "1C Buxgalteriya", "Huquqshunoslik", "Karyera"];

const CATEGORY_COLORS: Record<string, string> = {
  "ACCA": "bg-purple-600/30 text-purple-300",
  "DipIFR": "bg-indigo-600/30 text-indigo-300",
  "Financial Modeling": "bg-emerald-600/30 text-emerald-300",
  "1C Buxgalteriya": "bg-blue-600/30 text-blue-300",
  "Huquqshunoslik": "bg-amber-600/30 text-amber-300",
  "Karyera": "bg-pink-600/30 text-pink-300",
};

function fakeViews(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) & 0xffffffff;
  return 350 + Math.abs(h % 1200);
}

export default function Blog() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("Barchasi");
  const [searchQuery, setSearchQuery] = useState("");

  useSEO({
    title: "Blog — ACCA, DipIFR, Moliya va Buxgalteriya maqolalari | FBA Academy",
    description: "ACCA imtihoniga tayyorlanish, DipIFR, Financial Modeling, 1C Buxgalteriya va Huquqshunoslik bo'yicha to'liq maqolalar. O'zbekistonda moliya sohasida karyera maslahatlar.",
    keywords: "ACCA blog, DipIFR maqolalar, moliya ta'limi, buxgalteriya maslahat, financial modeling O'zbekiston, 1C kurs",
    breadcrumb: [{ name: "Blog", url: "https://fbaacademy.uz/blog" }],
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

  const featured = filtered[0];
  const sidebarPosts = blogPosts.filter((p) => p.id !== featured?.id).slice(0, 4);
  const gridPosts = filtered.filter((p) => p.id !== featured?.id);

  const catColor = (cat: string) => CATEGORY_COLORS[cat] || "bg-zinc-700 text-zinc-300";

  return (
    <Layout>
      {/* Category tab strip */}
      <div className="sticky top-16 z-30 border-b border-white/10 bg-[#0d0d0d]" data-testid="section-blog-filters">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-purple-600 text-white"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
                data-testid={`filter-category-${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main layout: featured + sidebar */}
      {featured && (
        <section className="bg-[#0d0d0d] py-8 sm:py-10" data-testid="section-blog-hero">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Featured post — left 2/3 */}
              <Link href={`/blog/${featured.id}`} className="lg:col-span-2">
                <div className="group cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-purple-500/30" data-testid="card-blog-featured">
                  {featured.image && (
                    <div className="relative h-64 overflow-hidden sm:h-80">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="eager"
                        fetchPriority="high"
                        width={800}
                        height={400}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                      <div className="absolute left-3 top-3">
                        <span className={`rounded-md px-2 py-0.5 text-xs font-bold ${catColor(featured.category)}`}>
                          {featured.category}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-5 sm:p-6">
                    <h2 className="text-xl font-extrabold leading-snug text-white transition-colors group-hover:text-purple-300 sm:text-2xl" data-testid="text-blog-featured-title">
                      {featured.title}
                    </h2>
                    <p className="mt-2 text-sm text-zinc-400 line-clamp-2">{featured.excerpt}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-zinc-500">
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featured.readTime}</span>
                      <span className="flex items-center gap-1"><Eye className="h-3.5 w-3.5" /> {fakeViews(featured.id).toLocaleString()}</span>
                      <span className="ml-auto flex items-center gap-1 text-xs font-bold text-amber-400">
                        {t.common.readMore} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Sidebar — right 1/3 */}
              <div className="flex flex-col gap-5">
                {/* Search */}
                <div className="relative" data-testid="blog-sidebar-search">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Maqola qidirish..."
                    className="w-full rounded-xl border border-white/10 bg-zinc-800 py-2.5 pl-9 pr-4 text-sm text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    data-testid="input-blog-search"
                  />
                </div>

                {/* Recent posts list */}
                <div className="rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden" data-testid="blog-sidebar-recent">
                  <div className="border-b border-white/10 px-4 py-3">
                    <span className="text-sm font-extrabold text-white">So'nggi maqolalar</span>
                  </div>
                  <div className="divide-y divide-white/5">
                    {sidebarPosts.map((p) => (
                      <Link key={p.id} href={`/blog/${p.id}`}>
                        <div className="group flex items-start gap-3 p-3 hover:bg-zinc-800 transition-colors cursor-pointer" data-testid={`sidebar-post-${p.id}`}>
                          {p.image && (
                            <div className="h-14 w-20 shrink-0 overflow-hidden rounded-lg">
                              <img
                                src={p.image}
                                alt={p.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                                width={80}
                                height={56}
                              />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <span className={`mb-0.5 inline-block rounded px-1.5 py-0.5 text-[10px] font-bold ${catColor(p.category)}`}>
                              {p.category}
                            </span>
                            <p className="text-xs font-bold leading-snug text-zinc-300 line-clamp-2 group-hover:text-purple-300 transition-colors">
                              {p.title}
                            </p>
                            <div className="mt-1 flex items-center gap-2 text-[10px] text-zinc-500">
                              <span className="flex items-center gap-0.5"><Clock className="h-3 w-3" /> {p.readTime}</span>
                              <span className="flex items-center gap-0.5"><Eye className="h-3 w-3" /> {fakeViews(p.id).toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles grid */}
      <section className="bg-[#111] py-8 sm:py-12" data-testid="section-blog-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {gridPosts.length === 0 && !featured ? (
            <div className="py-20 text-center">
              <div className="text-4xl">🔍</div>
              <p className="mt-3 text-zinc-400">Hech narsa topilmadi. Boshqa so'z bilan qidiring.</p>
              <Button
                variant="outline"
                className="mt-4 rounded-full border-white/20 text-white hover:bg-white/10"
                onClick={() => { setSearchQuery(""); setActiveCategory("Barchasi"); }}
                data-testid="button-reset-search"
              >
                Barcha maqolalar
              </Button>
            </div>
          ) : (
            <>
              {gridPosts.length > 0 && (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {gridPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`}>
                      <div className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-purple-500/30" data-testid={`card-blog-${post.id}`}>
                        {post.image && (
                          <div className="relative h-44 overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                              width={400}
                              height={176}
                            />
                            <div className="absolute left-3 top-3">
                              <span className={`rounded-md px-2 py-0.5 text-xs font-bold ${catColor(post.category)}`}>
                                {post.category}
                              </span>
                            </div>
                          </div>
                        )}
                        <div className="flex flex-1 flex-col p-4">
                          <h2 className="mb-2 text-sm font-extrabold leading-snug text-white line-clamp-2 group-hover:text-purple-300 transition-colors" data-testid={`text-blog-title-${post.id}`}>
                            {post.title}
                          </h2>
                          <p className="mb-3 flex-1 text-xs text-zinc-400 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-xs text-zinc-500">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                              <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {fakeViews(post.id).toLocaleString()}</span>
                            </div>
                            <Badge className="shrink-0 rounded-full bg-purple-600/30 px-2 py-0 text-[10px] font-bold text-purple-300">
                              Yangi
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {gridPosts.length === 0 && filtered.length > 0 && (
                <p className="py-10 text-center text-sm text-zinc-500">Barcha maqolalar yuqorida ko'rsatildi.</p>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-gradient-to-br from-purple-900 via-[#1e1060] to-slate-900 py-12" data-testid="section-blog-cta">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-purple-400">Karyera</div>
          <h2 className="text-4xl font-extrabold uppercase text-white sm:text-5xl">Moliya sohasida karyerangizni boshlang</h2>
          <p className="mt-3 text-sm text-slate-300">ACCA, DipIFR, Financial Modeling — bepul konsultatsiyada to'g'ri kursni tanlang</p>
          <a href="/contacts">
            <Button className="mt-6 gap-2 rounded-full bg-amber-400 px-8 font-bold text-black hover:bg-amber-300" data-testid="button-blog-cta">
              Bepul konsultatsiya <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
