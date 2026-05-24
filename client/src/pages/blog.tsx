import { useState, useMemo } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import { blogPosts } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";
import { localizeBlogPosts } from "@/lib/localize-content";
import { BLOG_CATEGORY_COLORS, BLOG_CATEGORY_OPTIONS, blogCategoryLabel } from "@/lib/blog-categories";
import { Clock, ArrowRight, Search, Eye } from "lucide-react";

function fakeViews(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) & 0xffffffff;
  return 350 + Math.abs(h % 1200);
}

export default function Blog() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const b = t.blog;
  const posts = useMemo(() => localizeBlogPosts(blogPosts, lang), [lang]);

  const seoTitle = lang === "ru"
    ? "Блог — ACCA, DipIFR, Финансы и Бухгалтерия | FBA Academy"
    : lang === "en"
      ? "Blog — ACCA, DipIFR, Finance & Accounting Articles | FBA Academy"
      : "Blog — ACCA, DipIFR, Moliya va Buxgalteriya maqolalari | FBA Academy";
  const seoDescription = lang === "ru"
    ? "Подготовка к ACCA, DipIFR, МСФО и Financial Analyst. Полезные статьи о карьере в финансах в Узбекистане."
    : lang === "en"
      ? "ACCA exam preparation, DipIFR, МСФО and Financial Analyst articles. Career advice in finance in Uzbekistan."
      : "ACCA imtihoniga tayyorlanish, DipIFR, МСФО va Financial Analyst bo'yicha to'liq maqolalar. O'zbekistonda moliya sohasida karyera maslahatlari.";
  const seoKeywords = lang === "ru"
    ? "ACCA блог, DipIFR статьи, МСФО, Financial Analyst, финансовое обучение Узбекистан"
    : lang === "en"
      ? "ACCA blog, DipIFR articles, IFRS, Financial Analyst, finance education Uzbekistan"
      : "ACCA blog, DipIFR maqolalar, МСФО, Financial Analyst, moliya ta'limi O'zbekiston";

  useSEO({
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    hreflang: [
      { lang: "en", url: "https://fbaacademy.uz/blog" },
      { lang: "uz", url: "https://fbaacademy.uz/blog?lang=uz" },
      { lang: "ru", url: "https://fbaacademy.uz/blog?lang=ru" },
      { lang: "x-default", url: "https://fbaacademy.uz/blog" },
    ],
    breadcrumb: [{ name: b.title, url: "https://fbaacademy.uz/blog" }],
    dateModified: "2026-04-16",
    speakable: ["[data-speakable='blog-list-title']", "[data-speakable='blog-list-desc']"],
    jsonLd: [
      {
        "@type": "Blog",
        "name": `${b.title} — FBA Academy`,
        "description": seoDescription,
        "url": "https://fbaacademy.uz/blog",
        "publisher": { "@type": "Organization", "name": "FBA Academy" },
        "inLanguage": lang,
      },
      {
        "@type": "ItemList",
        "itemListElement": posts.slice(0, 5).map((p, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "url": `https://fbaacademy.uz/blog/${p.id}`,
          "name": p.title,
        })),
      },
    ],
  });

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered[0];
  const sidebarPosts = posts.filter((p) => p.id !== featured?.id).slice(0, 4);
  const gridPosts = filtered.filter((p) => p.id !== featured?.id);
  const isOnlyFeaturedVisible = Boolean(featured) && gridPosts.length === 0;

  const catColor = (cat: string) => BLOG_CATEGORY_COLORS[cat] || "bg-zinc-700 text-zinc-300";

  return (
    <Layout>
      <section className="border-b border-white/5 bg-[#0d0d0d] pb-5 pt-4 sm:pb-6 sm:pt-6" aria-labelledby="blog-page-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1
            id="blog-page-title"
            className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
            data-speakable="blog-list-title"
          >
            {b.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base" data-speakable="blog-list-desc">
            {b.subtitle}
          </p>
        </div>
      </section>

      <div className="sticky top-14 z-30 border-b border-white/10 bg-[#0d0d0d]/95 backdrop-blur-md lg:top-20" data-testid="section-blog-filters">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {BLOG_CATEGORY_OPTIONS.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`shrink-0 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeCategory === cat.value
                    ? "bg-brand text-white"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
                data-testid={`filter-category-${cat.value}`}
              >
                {lang === "ru" ? cat.ru : lang === "en" ? cat.en : cat.uz}
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
                <div className="group cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 ix-card hover:ring-1 hover:ring-brand/30" data-testid="card-blog-featured">
                  {featured.image && (
                    <div className="relative h-64 overflow-hidden sm:h-80">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="h-full w-full object-cover ix-media"
                        loading="eager"
                        fetchPriority="high"
                        width={800}
                        height={400}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                      <div className="absolute left-3 top-3">
                        <span className={`rounded-md px-2 py-0.5 text-xs font-bold ${catColor(featured.category)}`}>
                          {blogCategoryLabel(featured.category, lang)}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-5 sm:p-6">
                    <h2 className="text-xl font-extrabold leading-snug text-white transition-colors group-hover:text-brand-accent-light sm:text-2xl" data-testid="text-blog-featured-title">
                      {featured.title}
                    </h2>
                    <p className="mt-1.5 text-xs text-zinc-500">
                      {b.byAuthor}: <span className="font-semibold text-zinc-400">{featured.author}</span>
                    </p>
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
                    placeholder={b.searchPlaceholder}
                    className="w-full rounded-xl border border-white/10 bg-zinc-800 py-2.5 pl-9 pr-4 text-sm text-white placeholder-zinc-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    data-testid="input-blog-search"
                  />
                </div>

                {/* Recent posts list */}
                <div className="rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden" data-testid="blog-sidebar-recent">
                  <div className="border-b border-white/10 px-4 py-3">
                    <span className="text-sm font-extrabold text-white">{b.latestPosts}</span>
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
                                className="h-full w-full object-cover ix-media"
                                loading="lazy"
                                width={80}
                                height={56}
                              />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <span className={`mb-0.5 inline-block rounded px-1.5 py-0.5 text-[10px] font-bold ${catColor(p.category)}`}>
                              {blogCategoryLabel(p.category, lang)}
                            </span>
                            <p className="text-xs font-bold leading-snug text-zinc-300 line-clamp-2 group-hover:text-brand-accent-light transition-colors">
                              {p.title}
                            </p>
                            <p className="mt-0.5 truncate text-[10px] text-zinc-600">
                              {b.byAuthor}: {p.author}
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
      {!isOnlyFeaturedVisible && (
      <section className="bg-[#111] py-8 sm:py-12" data-testid="section-blog-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {gridPosts.length === 0 && !featured ? (
            <div className="py-20 text-center">
              <div className="text-4xl">🔍</div>
              <p className="mt-3 text-zinc-400">{b.nothingFound}</p>
              <Button
                variant="outline"
                className="mt-4 rounded-full border-white/20 text-white hover:bg-white/10"
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                data-testid="button-reset-search"
              >
                {b.allPosts}
              </Button>
            </div>
          ) : (
            <>
              {gridPosts.length > 0 && (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {gridPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`}>
                      <div className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-zinc-900 ix-card hover:ring-1 hover:ring-brand/30" data-testid={`card-blog-${post.id}`}>
                        {post.image && (
                          <div className="relative h-44 overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="h-full w-full object-cover ix-media"
                              loading="lazy"
                              width={400}
                              height={176}
                            />
                            <div className="absolute left-3 top-3">
                              <span className={`rounded-md px-2 py-0.5 text-xs font-bold ${catColor(post.category)}`}>
                                {blogCategoryLabel(post.category, lang)}
                              </span>
                            </div>
                          </div>
                        )}
                        <div className="flex flex-1 flex-col p-4">
                          <h2 className="mb-1 text-sm font-extrabold leading-snug text-white line-clamp-2 group-hover:text-brand-accent-light transition-colors" data-testid={`text-blog-title-${post.id}`}>
                            {post.title}
                          </h2>
                          <p className="mb-2 truncate text-[10px] text-zinc-600">
                            {b.byAuthor}: {post.author}
                          </p>
                          <p className="mb-3 flex-1 text-xs text-zinc-400 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-xs text-zinc-500">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                              <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {fakeViews(post.id).toLocaleString()}</span>
                            </div>
                            <Badge className="shrink-0 rounded-full bg-brand/30 px-2 py-0 text-[10px] font-bold text-brand-accent-light">
                              {b.newBadge}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {gridPosts.length === 0 && filtered.length > 0 && null}
            </>
          )}
        </div>
      </section>
      )}

      {/* CTA banner */}
      <section className="bg-gradient-to-br from-brand-dark via-[#1a2a4a] to-slate-900 py-12" data-testid="section-blog-cta">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">{b.ctaEyebrow}</div>
          <h2 className="text-4xl font-extrabold uppercase text-white sm:text-5xl">{b.ctaTitle}</h2>
          <p className="mt-3 text-sm text-slate-300">{b.ctaDesc}</p>
          <Button asChild className="mt-6 gap-2 rounded-full bg-amber-400 px-8 font-bold text-black hover:bg-amber-300" data-testid="button-blog-cta">
            <Link href="/contacts">
              {b.ctaButton} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
