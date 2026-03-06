import { useParams, Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      <article className="py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <span className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground cursor-pointer" data-testid="link-back-blog">
              <ArrowLeft className="h-4 w-4" /> Blogga qaytish
            </span>
          </Link>
          <div className="mb-4 flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
            <Badge variant="outline" className="rounded-full">{post.category}</Badge>
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
            <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> {post.author}</span>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl" data-testid="text-blog-detail-title">{post.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>

          <div className="prose prose-lg mt-8 max-w-none dark:prose-invert" data-testid="text-blog-content">
            <p>{post.content}</p>
            <p>Zamonaviy ta'lim platformalari orqali har qanday insonning professional ko'nikmalari oshirilishi mumkin. FBA Academy aynan shu maqsadda faoliyat yuritadi — har bir talabaga individual yondashuv, amaliy loyihalar va tajribali mentorlar bilan ishlash imkoniyatini taqdim etadi.</p>
            <p>Bu sohadagi mutaxassislar kelajakda yanada ko'proq talab qilinadi va daromadlar ham shunga mos ravishda o'sib boradi. Shuning uchun hozirdanoq o'rganishni boshlash eng to'g'ri qaror bo'ladi.</p>
          </div>
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="border-t py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-extrabold">Boshqa maqolalar</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {otherPosts.map((p) => (
                <Link key={p.id} href={`/blog/${p.id}`}>
                  <div className="group cursor-pointer rounded-2xl bg-slate-50 p-5 transition-all dark:bg-card" data-testid={`link-related-blog-${p.id}`}>
                    <Badge variant="outline" className="mb-2 rounded-full">{p.category}</Badge>
                    <h3 className="font-semibold leading-snug text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
