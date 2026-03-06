import { useParams, Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { blogPosts } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, ArrowRight, Copy, Check } from "lucide-react";
import { SiTelegram, SiFacebook } from "react-icons/si";

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
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-slate-200">
      <div
        className="h-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
        data-testid="reading-progress"
      />
    </div>
  );
}

function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-2 flex-wrap" data-testid="share-buttons">
      <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
        <Share2 className="h-3.5 w-3.5" /> Ulashish:
      </span>
      <a
        href={`https://t.me/share/url?url=${encoded}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 rounded-full bg-[#0088cc] px-3 py-1.5 text-xs font-bold text-white hover:opacity-90 transition-opacity"
        data-testid="share-telegram"
      >
        <SiTelegram className="h-3.5 w-3.5" /> Telegram
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 rounded-full bg-[#1877f2] px-3 py-1.5 text-xs font-bold text-white hover:opacity-90 transition-opacity"
        data-testid="share-facebook"
      >
        <SiFacebook className="h-3.5 w-3.5" /> Facebook
      </a>
      <button
        onClick={copy}
        className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
        data-testid="share-copy"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Nusxalandi!" : "Link nusxalash"}
      </button>
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
    <div className="mb-8 rounded-2xl border border-purple-100 bg-purple-50 p-5" data-testid="table-of-contents">
      <div className="mb-3 flex items-center gap-2 text-sm font-extrabold text-purple-800">
        <BookOpen className="h-4 w-4" /> Maqola tarkibi
      </div>
      <ol className="space-y-2">
        {headings.map((h, i) => (
          <li key={i}>
            <a href={`#${h.id}`} className="text-sm text-purple-700 hover:text-purple-900 hover:underline transition-colors">
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

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const articleRef = useRef<HTMLElement>(null);

  const post = blogPosts.find((p) => p.id === id);
  const otherPosts = blogPosts.filter((p) => p.id !== id).slice(0, 3);
  const sameCategory = blogPosts.filter((p) => p.id !== id && p.category === post?.category).slice(0, 2);
  const related = sameCategory.length > 0 ? sameCategory : otherPosts.slice(0, 2);

  const currentUrl = typeof window !== "undefined" ? window.location.href : `https://fbaacademy.uz/blog/${id}`;

  useSEO({
    title: post ? `${post.title} | FBA Academy Blog` : "Maqola topilmadi | FBA Academy",
    description: post?.excerpt || "Bu maqola mavjud emas.",
    ogType: "article",
    publishedTime: post?.date,
    jsonLd: post ? [
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
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Bosh sahifa", "item": "https://fbaacademy.uz" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fbaacademy.uz/blog" },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": currentUrl },
        ],
      },
    ] : undefined,
  });

  if (!post) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold" data-testid="text-blog-not-found">Maqola topilmadi</h2>
            <Link href="/blog">
              <Button variant="outline" className="mt-4 rounded-full" data-testid="button-back-to-blog">{t.common.backToBlog}</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const processedContent = processContent(post.content);

  return (
    <Layout>
      <ReadingProgress />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-12 sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <span className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 cursor-pointer hover:text-white transition-colors" data-testid="link-back-blog">
              <ArrowLeft className="h-4 w-4" /> {t.common.backToBlog}
            </span>
          </Link>
          <div className="mb-4 flex items-center gap-3 text-sm text-slate-400 flex-wrap">
            <Badge className="rounded-full bg-purple-500/20 text-purple-200 border-purple-400/30">{post.category}</Badge>
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
            <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> {post.author}</span>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl" data-testid="text-blog-detail-title">{post.title}</h1>
          <p className="mt-4 text-lg text-slate-300">{post.excerpt}</p>

          {/* Share buttons in hero */}
          <div className="mt-6">
            <ShareButtons title={post.title} url={currentUrl} />
          </div>
        </div>
      </section>

      {/* Cover image */}
      {post.image && (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-2xl shadow-2xl object-cover h-56 sm:h-72"
            loading="eager"
          />
        </div>
      )}

      {/* Content */}
      <article className="py-10 sm:py-14" ref={articleRef}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <TableOfContents content={post.content} />

          <div
            className="prose prose-slate prose-lg max-w-none
              prose-headings:font-extrabold prose-headings:text-slate-900
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:scroll-mt-24
              prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
              prose-strong:text-slate-900 prose-strong:font-bold
              prose-ul:space-y-2 prose-li:text-slate-700
              prose-ol:space-y-2
              prose-table:text-sm prose-th:bg-slate-50 prose-th:font-bold prose-td:text-slate-600"
            dangerouslySetInnerHTML={{ __html: processedContent }}
            data-testid="text-blog-content"
          />

          {/* Bottom share */}
          <div className="mt-10 border-t pt-6">
            <ShareButtons title={post.title} url={currentUrl} />
          </div>

          {/* Author card */}
          <div className="mt-8 rounded-2xl border bg-slate-50 p-5 flex items-start gap-4" data-testid="author-card">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-sm font-extrabold text-white">
              {post.author.split(" ").map(n => n[0]).join("")}
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900">{post.author}</div>
              <div className="text-xs text-slate-500 mt-0.5">FBA Academy mutaxassisi</div>
              <p className="mt-2 text-sm text-slate-600">ACCA va xalqaro moliya sertifikatlari bo'yicha mutaxassis. FBA Academy da mentor va o'qituvchi.</p>
            </div>
          </div>
        </div>
      </article>

      {/* Newsletter subscription */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-10" data-testid="section-blog-subscribe">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-extrabold text-white sm:text-2xl">{t.common.subscribe}</h2>
          <p className="mt-2 text-purple-100 text-sm">{t.common.subscribeDesc}</p>
          {subscribed ? (
            <div className="mt-5 rounded-full bg-white/20 px-6 py-3 text-sm font-bold text-white inline-flex items-center gap-2" data-testid="subscribe-success">
              <Check className="h-4 w-4" /> Obuna bo'ldingiz! Rahmat.
            </div>
          ) : (
            <form
              className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center"
              onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
              data-testid="subscribe-form"
            >
              <input
                type="email"
                required
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                placeholder={t.common.emailPlaceholder}
                className="rounded-full border-0 px-5 py-3 text-sm text-slate-900 shadow-md focus:ring-2 focus:ring-white sm:w-72"
                data-testid="input-subscribe-email"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-purple-700 shadow-md hover:bg-purple-50 transition-colors"
                data-testid="button-subscribe-submit"
              >
                {t.common.subscribeBtn}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CTA — lead form */}
      <section className="py-10" data-testid="section-blog-cta">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-slate-900 p-6 sm:p-8">
            <h3 className="text-lg font-extrabold text-white sm:text-xl">FBA Academy kurslariga qiziqyapsizmi?</h3>
            <p className="mt-2 text-slate-400 text-sm">Bepul konsultatsiya oling — 30 daqiqada o'zingiz uchun to'g'ri kursni tanlang</p>
            <div className="mt-5 max-w-sm">
              <LeadForm source={`blog-${post.id}`} buttonText="Bepul konsultatsiya" />
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-slate-50 py-12" data-testid="section-related-articles">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-xl font-extrabold" data-testid="text-related-title">{t.common.relatedArticles}</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {related.map((p) => (
                <Link key={p.id} href={`/blog/${p.id}`}>
                  <Card className="group cursor-pointer border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden" data-testid={`link-related-blog-${p.id}`}>
                    {p.image && (
                      <div className="h-36 overflow-hidden">
                        <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="mb-2 flex items-center gap-2">
                        <Badge className="rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">{p.category}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime}</span>
                      </div>
                      <h3 className="font-bold leading-snug text-foreground text-sm line-clamp-2">{p.title}</h3>
                      <div className="mt-3 flex items-center gap-1 text-xs font-bold text-purple-600">
                        {t.common.readMore} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/blog">
                <Button variant="outline" className="rounded-full gap-2" data-testid="button-all-posts">
                  Barcha maqolalar <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
