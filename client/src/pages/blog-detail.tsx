import { useParams, Link } from "wouter";
import { useState, useEffect } from "react";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { blogPosts } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";
import {
  Calendar, Clock, User, ArrowLeft, ArrowRight,
  BookOpen, Eye, ThumbsUp, Share2, Check, Copy,
} from "lucide-react";
import { SiTelegram, SiFacebook } from "react-icons/si";
import { SiX } from "react-icons/si";

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

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 right-0 top-0 z-[60] h-1 bg-zinc-900">
      <div
        className="h-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
        data-testid="reading-progress"
      />
    </div>
  );
}

function TableOfContents({ content }: { content: string }) {
  const headings: { id: string; text: string }[] = [];
  const regex = /<h2[^>]*>([^<]+)<\/h2>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const text = match[1];
    const id = text.toLowerCase().replace(/[^a-zа-яёA-ZА-ЯЁ0-9\s'-]/g, "").replace(/\s+/g, "-").slice(0, 40);
    headings.push({ id, text });
  }
  if (headings.length < 2) return null;
  return (
    <div className="mb-8 rounded-2xl border border-white/10 bg-zinc-900 p-5" data-testid="table-of-contents">
      <div className="mb-3 flex items-center gap-2 text-sm font-extrabold text-purple-300">
        <BookOpen className="h-4 w-4" /> Maqola tarkibi
      </div>
      <ol className="space-y-1.5">
        {headings.map((h, i) => (
          <li key={i}>
            <a href={`#${h.id}`} className="text-sm text-purple-400 hover:text-purple-200 hover:underline transition-colors">
              {i + 1}. {h.text}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

function processContent(html: string): string {
  return html.replace(/<h2([^>]*)>([^<]+)<\/h2>/g, (_: string, attrs: string, text: string) => {
    const id = text.toLowerCase().replace(/[^a-zа-яёA-ZА-ЯЁ0-9\s'-]/g, "").replace(/\s+/g, "-").slice(0, 40);
    return `<h2${attrs} id="${id}">${text}</h2>`;
  });
}

function ShareRow({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-2" data-testid="share-buttons">
      <button
        onClick={() => setLiked((p) => !p)}
        className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
          liked
            ? "border-purple-500 bg-purple-600/20 text-purple-300"
            : "border-white/20 bg-zinc-900 text-zinc-300 hover:border-purple-400 hover:text-purple-300"
        }`}
        data-testid="share-like"
      >
        <ThumbsUp className="h-4 w-4" />
        Foydali maqola
      </button>
      <a
        href={`https://t.me/share/url?url=${encoded}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 rounded-full border border-white/20 bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-[#0088cc] hover:text-[#0088cc] transition-colors"
        data-testid="share-telegram"
      >
        <SiTelegram className="h-4 w-4 text-[#0088cc]" />
        Ulashish
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 rounded-full border border-white/20 bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-[#1877f2] hover:text-[#1877f2] transition-colors"
        data-testid="share-facebook"
      >
        <SiFacebook className="h-4 w-4 text-[#1877f2]" />
        Ulashish
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 rounded-full border border-white/20 bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-slate-900 hover:text-white transition-colors"
        data-testid="share-twitter"
      >
        <SiX className="h-4 w-4" />
        Tvitlash
      </a>
      <button
        onClick={copy}
        className="flex items-center gap-1.5 rounded-full border border-white/20 bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-slate-400 transition-colors"
        data-testid="share-copy"
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        {copied ? "Nusxalandi!" : "Nusxalash"}
      </button>
    </div>
  );
}

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  const post = blogPosts.find((p) => p.id === id);
  const relatedPosts = blogPosts.filter((p) => p.id !== id).slice(0, 3);

  const currentUrl = typeof window !== "undefined" ? window.location.href : `https://fbaacademy.uz/blog/${id}`;

  useSEO({
    title: post ? `${post.title} | FBA Academy Blog` : "Maqola topilmadi | FBA Academy",
    description: post?.excerpt || "Bu maqola mavjud emas.",
    ogType: "article",
    publishedTime: post?.date,
    breadcrumb: post
      ? [
          { name: "Blog", url: "https://fbaacademy.uz/blog" },
          { name: post.title, url: `https://fbaacademy.uz/blog/${post.id}` },
        ]
      : undefined,
    jsonLd: post
      ? [
          {
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "author": { "@type": "Person", "name": post.author },
            "publisher": { "@type": "Organization", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
            "datePublished": post.date,
            "image": post.image,
            "articleSection": post.category,
            "inLanguage": "uz",
          },
        ]
      : undefined,
  });

  if (!post) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold" data-testid="text-blog-not-found">Maqola topilmadi</h2>
            <Link href="/blog">
              <Button variant="outline" className="mt-4 rounded-full" data-testid="button-back-to-blog">
                {t.common.backToBlog}
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const processedContent = processContent(post.content);
  const catColor = CATEGORY_COLORS[post.category] || "bg-[#0d0d0d] text-zinc-400";

  return (
    <Layout>
      <ReadingProgress />

      {/* Breadcrumb nav */}
      <div className="border-b border-white/10 bg-[#0d0d0d] py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500" aria-label="Breadcrumb">
            <Link href="/">
              <span className="cursor-pointer hover:text-purple-700 transition-colors">Bosh sahifa</span>
            </Link>
            <span>/</span>
            <Link href="/blog">
              <span className="cursor-pointer hover:text-purple-700 transition-colors">Blog</span>
            </Link>
            <span>/</span>
            <span className="line-clamp-1 text-white font-medium">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Main two-column layout */}
      <section className="bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">

          {/* LEFT — Article content */}
          <article className="lg:col-span-2" data-testid="article-content">
            {/* Meta row */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Link href="/blog">
                <span className="inline-flex cursor-pointer items-center gap-1 text-sm text-zinc-500 hover:text-purple-700 transition-colors" data-testid="link-back-blog">
                  <ArrowLeft className="h-4 w-4" /> Blog
                </span>
              </Link>
              <span className={`rounded-md px-2.5 py-0.5 text-xs font-bold ${catColor}`}>{post.category}</span>
              <span className="flex items-center gap-1 text-xs text-zinc-500"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
              <span className="flex items-center gap-1 text-xs text-zinc-500"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
              <span className="flex items-center gap-1 text-xs text-zinc-500"><Eye className="h-3.5 w-3.5" /> {fakeViews(post.id).toLocaleString()}</span>
              <span className="flex items-center gap-1 text-xs text-zinc-500"><User className="h-3.5 w-3.5" /> {post.author}</span>
            </div>

            {/* Title */}
            <h1 className="mb-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl" data-testid="text-blog-detail-title">
              {post.title}
            </h1>

            {/* Lead paragraph */}
            <p className="mb-6 text-base text-zinc-400 leading-relaxed border-l-4 border-purple-400 pl-4 italic">
              {post.excerpt}
            </p>

            {/* Cover image */}
            {post.image && (
              <div className="mb-8 overflow-hidden rounded-2xl shadow-md">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full object-cover h-56 sm:h-72"
                  loading="eager"
                  fetchPriority="high"
                  width={800}
                  height={400}
                />
              </div>
            )}

            {/* Table of contents */}
            <TableOfContents content={post.content} />

            {/* Article body */}
            <div
              className="prose prose-slate prose-base max-w-none
                prose-headings:font-extrabold prose-headings:text-white
                prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-h2:scroll-mt-24
                prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-4
                prose-strong:text-white
                prose-ul:space-y-2 prose-li:text-zinc-300
                prose-ol:space-y-2
                prose-table:text-sm prose-th:bg-zinc-800 prose-th:font-bold prose-td:text-zinc-400"
              dangerouslySetInnerHTML={{ __html: processedContent }}
              data-testid="text-blog-content"
            />

            {/* Author card */}
            <div className="mt-10 flex items-start gap-4 rounded-2xl border border-white/10 bg-zinc-800 p-5" data-testid="author-card">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-sm font-extrabold text-white">
                {post.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="text-sm font-extrabold text-white">{post.author}</div>
                <div className="text-xs text-zinc-500">FBA Academy mutaxassisi</div>
                <p className="mt-1.5 text-sm text-zinc-400">
                  ACCA va xalqaro moliya sertifikatlari bo'yicha mutaxassis. FBA Academy da mentor va o'qituvchi.
                </p>
              </div>
            </div>

            {/* Share row at bottom */}
            <div className="mt-8 border-t pt-6">
              <ShareRow title={post.title} url={currentUrl} />
            </div>
          </article>

          {/* RIGHT — Sticky sidebar */}
          <aside className="hidden lg:block" data-testid="blog-sidebar">
            <div className="sticky top-24 space-y-5">
              {/* CTA card */}
              <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-6 text-white shadow-lg">
                <div className="mb-1 text-xs font-bold uppercase tracking-wide text-purple-200">Bepul maslahat</div>
                <h3 className="mb-2 text-lg font-extrabold leading-snug">
                  Karyerangizni hozir boshlang
                </h3>
                <p className="mb-4 text-sm text-purple-100">
                  30 daqiqada o'zingizga to'g'ri kursni tanlang. Mutaxassis bilan bepul.
                </p>
                <LeadForm source={`blog-sidebar-${post.id}`} buttonText="Bepul konsultatsiya" />
              </div>

              {/* Related in sidebar */}
              <div className="rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden">
                <div className="border-b px-4 py-3">
                  <span className="text-sm font-extrabold text-white">O'qing ham</span>
                </div>
                <div className="divide-y">
                  {blogPosts.filter((p) => p.id !== post.id).slice(0, 3).map((p) => (
                    <Link key={p.id} href={`/blog/${p.id}`}>
                      <div className="group flex items-start gap-3 p-3 hover:bg-zinc-800 transition-colors cursor-pointer">
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
                          <span className={`mb-0.5 inline-block rounded px-1.5 py-0.5 text-[10px] font-bold ${CATEGORY_COLORS[p.category] || "bg-[#0d0d0d] text-zinc-400"}`}>
                            {p.category}
                          </span>
                          <p className="text-xs font-bold leading-snug text-zinc-200 line-clamp-2 group-hover:text-purple-700 transition-colors">
                            {p.title}
                          </p>
                          <span className="mt-1 flex items-center gap-1 text-[10px] text-zinc-500">
                            <Clock className="h-3 w-3" /> {p.readTime}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* "O'qing ham" — full width 3-card section */}
      {relatedPosts.length > 0 && (
        <section className="border-t bg-zinc-900 py-12" data-testid="section-related-articles">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-xl font-extrabold text-white sm:text-2xl" data-testid="text-related-title">
              O'qing ham
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p) => (
                <Link key={p.id} href={`/blog/${p.id}`}>
                  <div className="group cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 transition-all duration-300 hover:-translate-y-0.5 hover:ring-1 hover:ring-purple-500/30" data-testid={`link-related-blog-${p.id}`}>
                    {p.image && (
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          width={400}
                          height={176}
                        />
                        <div className="absolute left-3 bottom-3">
                          <span className={`rounded-md px-2 py-0.5 text-xs font-bold ${CATEGORY_COLORS[p.category] || "bg-[#0d0d0d] text-zinc-400"}`}>
                            {p.category}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="mb-2 text-sm font-extrabold leading-snug text-white line-clamp-2 group-hover:text-purple-700 transition-colors">
                        {p.title}
                      </h3>
                      <p className="mb-3 text-xs text-zinc-500 line-clamp-2">{p.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-zinc-500">
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                          <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {fakeViews(p.id).toLocaleString()}</span>
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
            <div className="mt-8 text-center">
              <Link href="/blog">
                <Button variant="outline" className="rounded-full gap-2" data-testid="button-all-posts">
                  Barcha maqolalar <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Mobile CTA (shown only on small screens, sidebar is hidden) */}
      <section className="bg-gradient-to-r from-purple-700 to-pink-600 py-10 lg:hidden" data-testid="section-blog-mobile-cta">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h3 className="mb-2 text-lg font-extrabold text-white">Bepul konsultatsiya oling</h3>
          <p className="mb-4 text-sm text-purple-100">O'zingizga to'g'ri kursni mutaxassis bilan tanlang</p>
          <LeadForm source={`blog-mobile-${post.id}`} buttonText="Bepul konsultatsiya" />
        </div>
      </section>
      </section>
    </Layout>
  );
}
