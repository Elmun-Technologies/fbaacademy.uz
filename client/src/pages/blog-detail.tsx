import { useParams, Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/layout";
import { blogPosts } from "@/lib/data";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  useSEO({
    title: post ? `${post.title} - FBA Academy Blog` : "Maqola topilmadi - FBA Academy",
    description: post?.excerpt || "Bu maqola mavjud emas.",
  });

  if (!post) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold" data-testid="text-blog-not-found">Maqola topilmadi</h2>
            <Link href="/blog">
              <Button variant="outline" className="mt-4 rounded-full" data-testid="button-back-to-blog">Blogga qaytish</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const otherPosts = blogPosts.filter((p) => p.id !== id).slice(0, 2);

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-12 sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <span className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 cursor-pointer hover:text-white transition-colors" data-testid="link-back-blog">
              <ArrowLeft className="h-4 w-4" /> Blogga qaytish
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
        </div>
      </section>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none dark:prose-invert" data-testid="text-blog-content">
            <p>{post.content}</p>
            <p>Zamonaviy ta'lim platformalari orqali har qanday insonning professional ko'nikmalari oshirilishi mumkin. FBA Academy aynan shu maqsadda faoliyat yuritadi — har bir talabaga individual yondashuv, amaliy loyihalar va tajribali mentorlar bilan ishlash imkoniyatini taqdim etadi.</p>
            <p>Bu sohadagi mutaxassislar kelajakda yanada ko'proq talab qilinadi va daromadlar ham shunga mos ravishda o'sib boradi. Shuning uchun hozirdanoq o'rganishni boshlash eng to'g'ri qaror bo'ladi.</p>
          </div>
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="bg-slate-50 py-14 dark:bg-slate-900/50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-extrabold">Boshqa maqolalar</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {otherPosts.map((p) => (
                <Link key={p.id} href={`/blog/${p.id}`}>
                  <Card className="group cursor-pointer border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-5" data-testid={`link-related-blog-${p.id}`}>
                    <Badge className="mb-2 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-xs font-semibold">{p.category}</Badge>
                    <h3 className="font-bold leading-snug text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
