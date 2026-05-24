import { useParams, Link } from "wouter";
import { useState, useEffect, useMemo } from "react";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import { LazyLeadForm, DeferredLeadForm } from "@/components/lazy-lead-form";
import { blogPosts } from "@/lib/data";
import { BLOG_CATEGORY_COLORS, blogCategoryLabel } from "@/lib/blog-categories";
import { useLanguage } from "@/contexts/language-context";
import { localizeBlogPost, localizeBlogPosts } from "@/lib/localize-content";
import {
  Calendar, Clock, User, ArrowLeft, ArrowRight,
  BookOpen, Eye, ThumbsUp, Check, Copy,
} from "lucide-react";
import { SiTelegram, SiFacebook } from "react-icons/si";
import { SiX } from "react-icons/si";

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
        className="h-full bg-gradient-to-r from-brand to-brand-accent transition-all duration-150"
        style={{ width: `${progress}%` }}
        data-testid="reading-progress"
      />
    </div>
  );
}

function TableOfContents({ content, lang }: { content: string; lang: string }) {
  const headings: { id: string; text: string }[] = [];
  const regex = /<h2[^>]*>([^<]+)<\/h2>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const text = match[1];
    const id = text.toLowerCase().replace(/[^a-zа-яёA-ZА-ЯЁ0-9\s'-]/g, "").replace(/\s+/g, "-").slice(0, 40);
    headings.push({ id, text });
  }
  if (headings.length < 2) return null;
  const tocLabel = lang === "ru" ? "Содержание статьи" : lang === "en" ? "Table of contents" : "Maqola tarkibi";
  return (
    <div
      className="mb-10 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 p-5 shadow-lg sm:p-6"
      data-testid="table-of-contents"
    >
      <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3 text-sm font-extrabold tracking-wide text-brand-accent-light">
        <BookOpen className="h-4 w-4 shrink-0" /> {tocLabel}
      </div>
      <ol className="space-y-2.5 border-l-2 border-brand/40 pl-4">
        {headings.map((h, i) => (
          <li key={i}>
            <a
              href={`#${h.id}`}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-brand-accent-light hover:underline"
            >
              <span className="mr-2 font-mono text-xs text-zinc-600">{String(i + 1).padStart(2, "0")}</span>
              {h.text}
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

function ShareRow({ title, url, lang }: { title: string; url: string; lang: string }) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const lblUseful = lang === "ru" ? "Полезная статья" : lang === "en" ? "Useful article" : "Foydali maqola";
  const lblShare = lang === "ru" ? "Поделиться" : lang === "en" ? "Share" : "Ulashish";
  const lblTweet = lang === "ru" ? "Твитнуть" : lang === "en" ? "Tweet" : "Tvitlash";
  const lblCopy = lang === "ru" ? "Копировать" : lang === "en" ? "Copy link" : "Nusxalash";
  const lblCopied = lang === "ru" ? "Скопировано!" : lang === "en" ? "Copied!" : "Nusxalandi!";

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
            ? "border-brand bg-brand/20 text-brand-accent-light"
            : "border-white/20 bg-zinc-900 text-zinc-300 hover:border-brand-accent hover:text-brand-accent-light"
        }`}
        data-testid="share-like"
      >
        <ThumbsUp className="h-4 w-4" />
        {lblUseful}
      </button>
      <a
        href={`https://t.me/share/url?url=${encoded}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 rounded-full border border-white/20 bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-[#0088cc] hover:text-[#0088cc] transition-colors"
        data-testid="share-telegram"
      >
        <SiTelegram className="h-4 w-4 text-[#0088cc]" />
        {lblShare}
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 rounded-full border border-white/20 bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-[#1877f2] hover:text-[#1877f2] transition-colors"
        data-testid="share-facebook"
      >
        <SiFacebook className="h-4 w-4 text-[#1877f2]" />
        {lblShare}
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 rounded-full border border-white/20 bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-slate-900 hover:text-white transition-colors"
        data-testid="share-twitter"
      >
        <SiX className="h-4 w-4" />
        {lblTweet}
      </a>
      <button
        onClick={copy}
        className="flex items-center gap-1.5 rounded-full border border-white/20 bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-slate-400 transition-colors"
        data-testid="share-copy"
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        {copied ? lblCopied : lblCopy}
      </button>
    </div>
  );
}

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useLanguage();
  const b = t.blog;

  const rawPost = blogPosts.find((p) => p.id === id);
  const post = useMemo(() => (rawPost ? localizeBlogPost(rawPost, lang) : undefined), [rawPost, lang]);
  const relatedPosts = useMemo(() => localizeBlogPosts(blogPosts.filter((p) => p.id !== id).slice(0, 3), lang), [id, lang]);

  const currentUrl = typeof window !== "undefined" ? window.location.href : `https://fbaacademy.uz/blog/${id}`;

  const wordCount = post ? post.content.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length : 0;

  const tx = {
    notFoundTitle: lang === "ru" ? "Статья не найдена" : lang === "en" ? "Article not found" : "Maqola topilmadi",
    notFoundSeo: lang === "ru" ? "Статья не найдена | FBA Academy" : lang === "en" ? "Article not found | FBA Academy" : "Maqola topilmadi | FBA Academy",
    notFoundDesc: lang === "ru" ? "Эта статья не существует." : lang === "en" ? "This article does not exist." : "Bu maqola mavjud emas.",
    home: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa",
    specialist: lang === "ru" ? "Специалист FBA Academy" : lang === "en" ? "FBA Academy specialist" : "FBA Academy mutaxassisi",
    authorBio: lang === "ru"
      ? "Специалист по ACCA и международным финансовым сертификатам. Ментор и преподаватель в FBA Academy."
      : lang === "en"
        ? "ACCA and international finance certification specialist. Mentor and instructor at FBA Academy."
        : "ACCA va xalqaro moliya sertifikatlari bo'yicha mutaxassis. FBA Academy da mentor va o'qituvchi.",
    freeAdvice: lang === "ru" ? "Бесплатная консультация" : lang === "en" ? "Free consultation" : "Bepul maslahat",
    sidebarCta: lang === "ru" ? "Начните карьеру прямо сейчас" : lang === "en" ? "Start your career now" : "Karyerangizni hozir boshlang",
    sidebarCtaDesc: lang === "ru"
      ? "За 30 минут подберите подходящий курс. Бесплатно со специалистом."
      : lang === "en"
        ? "Find the right course for you in 30 minutes. Free with a specialist."
        : "30 daqiqada o'zingizga to'g'ri kursni tanlang. Mutaxassis bilan bepul.",
    freeConsultation: lang === "ru" ? "Бесплатная консультация" : lang === "en" ? "Free consultation" : "Bepul konsultatsiya",
    alsoRead: lang === "ru" ? "Читайте также" : lang === "en" ? "Also read" : "O'qing ham",
    allPosts: lang === "ru" ? "Все статьи" : lang === "en" ? "All posts" : "Barcha maqolalar",
    newBadge: lang === "ru" ? "Новое" : lang === "en" ? "New" : "Yangi",
    mobileCta: lang === "ru" ? "Получите бесплатную консультацию" : lang === "en" ? "Get a free consultation" : "Bepul konsultatsiya oling",
    mobileCtaDesc: lang === "ru"
      ? "Подберите подходящий курс со специалистом"
      : lang === "en"
        ? "Find the right course with a specialist"
        : "O'zingizga to'g'ri kursni mutaxassis bilan tanlang",
  };

  useSEO({
    title: post ? `${post.title} | FBA Academy Blog` : tx.notFoundSeo,
    description: post?.excerpt || tx.notFoundDesc,
    keywords: post
      ? lang === "ru"
        ? `${post.category}, ${post.title}, блог FBA Academy, Узбекистан, финансы, карьера`
        : lang === "en"
          ? `${post.category}, ${post.title}, FBA Academy blog, Uzbekistan, finance careers, Tashkent`
          : `${post.category}, ${post.title}, FBA Academy blog, Toshkent, moliya, karyera`
      : undefined,
    hreflang: post
      ? [
          { lang: "en", url: `https://fbaacademy.uz/blog/${post.id}` },
          { lang: "uz", url: `https://fbaacademy.uz/blog/${post.id}?lang=uz` },
          { lang: "ru", url: `https://fbaacademy.uz/blog/${post.id}?lang=ru` },
          { lang: "x-default", url: `https://fbaacademy.uz/blog/${post.id}` },
        ]
      : undefined,
    ogType: "article",
    publishedTime: post?.date,
    modifiedTime: post?.modifiedDate || post?.date,
    dateModified: post?.modifiedDate || post?.date,
    articleSection: post?.category,
    speakable: post
      ? ["[data-speakable='blog-title']", "[data-speakable='blog-excerpt']"]
      : undefined,
    breadcrumb: post
      ? [
          { name: b.title, url: "https://fbaacademy.uz/blog" },
          { name: post.title, url: `https://fbaacademy.uz/blog/${post.id}` },
        ]
      : undefined,
    jsonLd: post
      ? [
          {
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": post.author,
              "url": "https://fbaacademy.uz/teachers",
              "worksFor": { "@type": "Organization", "name": "FBA Academy" },
            },
            "publisher": {
              "@type": "Organization",
              "name": "FBA Academy",
              "url": "https://fbaacademy.uz",
              "logo": { "@type": "ImageObject", "url": "https://fbaacademy.uz/branding/fba-academy-logo.jpg" },
            },
            "datePublished": post.date,
            "dateModified": post.modifiedDate || post.date,
            "image": post.image,
            "articleSection": post.category,
            "wordCount": wordCount,
            "inLanguage": lang,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://fbaacademy.uz/blog/${post.id}`,
            },
          },
        ]
      : undefined,
  });

  if (!post) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold" data-testid="text-blog-not-found">{tx.notFoundTitle}</h2>
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
  const catColor = BLOG_CATEGORY_COLORS[post.category] || "bg-zinc-800 text-zinc-300";
  const categoryShown = blogCategoryLabel(post.category, lang);

  return (
    <Layout>
      <ReadingProgress />

      {/* Breadcrumb */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#0a0f1a] via-[#0d0d0d] to-[#0a0f1a] py-3.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500" aria-label="Breadcrumb">
            <Link href="/">
              <span className="cursor-pointer transition-colors hover:text-brand-accent-light">{tx.home}</span>
            </Link>
            <span className="text-zinc-700">/</span>
            <Link href="/blog">
              <span className="cursor-pointer transition-colors hover:text-brand-accent-light">{b.title}</span>
            </Link>
            <span className="text-zinc-700">/</span>
            <span className="line-clamp-2 max-w-[min(100%,42rem)] font-medium text-zinc-300">{post.title}</span>
          </nav>
        </div>
      </div>

      <section className="relative overflow-hidden bg-[#06060a] pb-12 pt-6 sm:pb-16 sm:pt-8 lg:pb-20 lg:pt-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(43,73,113,0.35), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(90,138,181,0.12), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,300px)] lg:gap-12 xl:gap-14">
            {/* ——— Main article ——— */}
            <article className="min-w-0" data-testid="article-content">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/70 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.04] backdrop-blur-md">
                {/* Hero visual */}
                <div className="relative aspect-[21/9] min-h-[200px] w-full overflow-hidden bg-zinc-900 sm:min-h-[240px] sm:aspect-[2.2/1] lg:min-h-[280px]">
                  {post.image ? (
                    <>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                        width={1200}
                        height={514}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                    </>
                  ) : (
                    <div className="flex h-full min-h-[inherit] flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand/25 via-zinc-900 to-brand-dark/40 px-6 text-center">
                      <BookOpen className="h-14 w-14 text-brand-accent/50 sm:h-16 sm:w-16" aria-hidden />
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">FBA Academy · {categoryShown}</p>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-3 p-4 sm:p-6">
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:border-brand/50 hover:bg-black/55"
                      data-testid="link-back-blog"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" /> {b.title}
                    </Link>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold shadow-lg ${catColor}`}>{categoryShown}</span>
                  </div>
                </div>

                {/* Meta strip */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-white/5 bg-zinc-900/40 px-5 py-3.5 sm:px-8">
                  <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Calendar className="h-3.5 w-3.5 shrink-0 text-zinc-500" /> {post.date}
                  </span>
                  <span className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden />
                  <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Clock className="h-3.5 w-3.5 shrink-0 text-zinc-500" /> {post.readTime}
                  </span>
                  <span className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden />
                  <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Eye className="h-3.5 w-3.5 shrink-0 text-zinc-500" /> {fakeViews(post.id).toLocaleString()}
                  </span>
                  <span className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden />
                  <span className="flex min-w-0 items-center gap-1.5 text-xs text-zinc-300">
                    <User className="h-3.5 w-3.5 shrink-0 text-brand-accent" /> <span className="truncate font-medium">{post.author}</span>
                  </span>
                </div>

                {/* Body */}
                <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
                  <h1
                    className="text-balance text-2xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-3xl lg:text-[2.35rem] lg:leading-[1.15]"
                    data-testid="text-blog-detail-title"
                    data-speakable="blog-title"
                  >
                    {post.title}
                  </h1>

                  <p
                    className="mt-5 max-w-3xl border-l-4 border-brand-accent/80 bg-brand/[0.06] py-3 pl-5 pr-4 text-base leading-relaxed text-zinc-300 sm:text-lg"
                    data-speakable="blog-excerpt"
                  >
                    {post.excerpt}
                  </p>

                  <div className="mx-auto mt-10 max-w-[42rem]">
                    <TableOfContents content={post.content} lang={lang} />
                  </div>

                  <div
                    className="prose prose-lg prose-invert mx-auto mt-2 max-w-[42rem] prose-headings:scroll-mt-28 prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-white prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-3 prose-h2:text-xl prose-h2:sm:text-2xl prose-h3:mt-9 prose-h3:mb-3 prose-h3:text-lg prose-h3:text-white prose-p:text-[1.0625rem] prose-p:leading-[1.75] prose-p:text-zinc-300 prose-strong:font-bold prose-strong:text-white prose-a:font-medium prose-a:text-brand-accent-light prose-a:no-underline hover:prose-a:underline prose-ul:my-5 prose-ol:my-5 prose-li:my-1.5 prose-li:text-zinc-300 prose-li:marker:text-brand-accent prose-blockquote:my-6 prose-blockquote:border-l-brand prose-blockquote:bg-white/[0.04] prose-blockquote:py-2 prose-blockquote:pl-4 prose-blockquote:pr-3 prose-blockquote:not-italic prose-blockquote:text-zinc-300 prose-code:rounded prose-code:bg-white/10 prose-code:px-1 prose-code:text-brand-accent-light prose-pre:rounded-xl prose-pre:border prose-pre:border-white/10 prose-pre:bg-zinc-900 prose-th:bg-zinc-800/80 prose-th:text-zinc-200 prose-td:text-zinc-400"
                    dangerouslySetInnerHTML={{ __html: processedContent }}
                    data-testid="text-blog-content"
                  />

                  <div
                    className="mx-auto mt-12 max-w-[42rem] rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-5 sm:p-6"
                    data-testid="author-card"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-base font-extrabold text-white shadow-lg ring-2 ring-white/10">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="min-w-0">
                        <div className="text-base font-extrabold text-white">{post.author}</div>
                        <div className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-brand-accent-light/90">{tx.specialist}</div>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{tx.authorBio}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto mt-10 max-w-[42rem] border-t border-white/10 pt-8">
                    <ShareRow title={post.title} url={currentUrl} lang={lang} />
                  </div>
                </div>
              </div>
            </article>

            {/* ——— Sidebar ——— */}
            <aside className="hidden lg:block" data-testid="blog-sidebar">
              <div className="sticky top-14 space-y-6 lg:top-28">
                <div className="rounded-3xl bg-gradient-to-br from-brand via-brand to-brand-dark p-6 text-white shadow-[0_20px_50px_-12px_rgba(43,73,113,0.5)] ring-1 ring-white/10">
                  <div className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-brand-accent-light/95">{tx.freeAdvice}</div>
                  <h3 className="mb-2 text-lg font-extrabold leading-snug">{tx.sidebarCta}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-brand-accent-light/95">{tx.sidebarCtaDesc}</p>
                  <LazyLeadForm source={`blog-sidebar-${post.id}`} buttonText={tx.freeConsultation} />
                </div>

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 shadow-xl ring-1 ring-white/[0.03] backdrop-blur-sm">
                  <div className="border-b border-white/10 bg-zinc-900/50 px-4 py-3.5">
                    <span className="text-sm font-extrabold text-white">{tx.alsoRead}</span>
                  </div>
                  <div className="divide-y divide-white/5">
                    {blogPosts
                      .filter((p) => p.id !== post.id)
                      .slice(0, 3)
                      .map((p) => (
                        <Link key={p.id} href={`/blog/${p.id}`}>
                          <div className="group flex cursor-pointer items-start gap-3 p-3.5 transition-colors hover:bg-zinc-800/80">
                            {p.image ? (
                              <div className="h-16 w-[5.25rem] shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
                                <img
                                  src={p.image}
                                  alt={p.title}
                                  className="h-full w-full object-cover ix-media"
                                  loading="lazy"
                                  width={84}
                                  height={64}
                                />
                              </div>
                            ) : (
                              <div className="flex h-16 w-[5.25rem] shrink-0 items-center justify-center rounded-xl bg-zinc-800/80 ring-1 ring-white/10">
                                <BookOpen className="h-6 w-6 text-zinc-600" aria-hidden />
                              </div>
                            )}
                            <div className="min-w-0 flex-1">
                              <span
                                className={`mb-1 inline-block rounded-md px-2 py-0.5 text-[10px] font-bold ${BLOG_CATEGORY_COLORS[p.category] || "bg-zinc-800 text-zinc-400"}`}
                              >
                                {blogCategoryLabel(p.category, lang)}
                              </span>
                              <p className="text-xs font-bold leading-snug text-zinc-200 line-clamp-2 transition-colors group-hover:text-brand-accent-light">
                                {p.title}
                              </p>
                              <span className="mt-1.5 flex items-center gap-1 text-[10px] text-zinc-500">
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
      </section>

      {relatedPosts.length > 0 && (
        <section
          className="border-t border-white/5 bg-gradient-to-b from-zinc-950 to-[#050508] py-14 sm:py-16"
          data-testid="section-related-articles"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl" data-testid="text-related-title">
                {tx.alsoRead}
              </h2>
              <p className="max-w-md text-sm text-zinc-500">{b.subtitle}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p) => (
                <Link key={p.id} href={`/blog/${p.id}`}>
                  <div
                    className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 shadow-lg ix-card-border hover:border-brand/30 hover:shadow-brand/10"
                    data-testid={`link-related-blog-${p.id}`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover ix-media"
                          loading="lazy"
                          width={400}
                          height={250}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-brand/20 to-zinc-900">
                          <BookOpen className="h-12 w-12 text-zinc-600" aria-hidden />
                        </div>
                      )}
                      <div className="absolute left-3 top-3">
                        <span
                          className={`rounded-lg px-2.5 py-1 text-xs font-bold shadow-md ${BLOG_CATEGORY_COLORS[p.category] || "bg-zinc-900/90 text-zinc-300"}`}
                        >
                          {blogCategoryLabel(p.category, lang)}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="mb-2 text-sm font-extrabold leading-snug text-white line-clamp-2 transition-colors group-hover:text-brand-accent-light">
                        {p.title}
                      </h3>
                      <p className="mb-4 line-clamp-2 flex-1 text-xs leading-relaxed text-zinc-500">{p.excerpt}</p>
                      <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-3 text-xs text-zinc-500">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {p.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" /> {fakeViews(p.id).toLocaleString()}
                          </span>
                        </div>
                        <Badge className="shrink-0 rounded-full bg-brand/25 px-2.5 py-0.5 text-[10px] font-bold text-brand-accent-light">
                          {tx.newBadge}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/blog">
                <Button variant="outline" className="rounded-full gap-2 border-white/20 bg-white/5 text-white hover:bg-white/10" data-testid="button-all-posts">
                  {tx.allPosts} <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-white/10 bg-gradient-to-r from-brand-dark to-[#152a45] py-10 lg:hidden" data-testid="section-blog-mobile-cta">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h3 className="mb-2 text-lg font-extrabold text-white">{tx.mobileCta}</h3>
          <p className="mb-4 text-sm text-brand-accent-light">{tx.mobileCtaDesc}</p>
          <DeferredLeadForm source={`blog-mobile-${post.id}`} buttonText={tx.freeConsultation} />
        </div>
      </section>
    </Layout>
  );
}
