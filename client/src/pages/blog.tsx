import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import { blogPosts } from "@/lib/data";
import { Clock, ArrowRight, Calendar, User } from "lucide-react";

export default function Blog() {
  useSEO({
    title: "Blog — ACCA, DipIFR, Moliya va Buxgalteriya maqolalari | FBA Academy",
    description: "ACCA, DipIFR, Financial Modeling, Huquqshunoslik va 1C: Buxgalteriya bo'yicha foydali maqolalar va kasbiy maslahatlar.",
    keywords: "ACCA blog, DipIFR maqolalar, moliya ta'limi, buxgalteriya maslahat",
  });

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-14 sm:py-18">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">Blog</Badge>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl" data-testid="text-blog-title">Blog</h1>
          <p className="max-w-2xl text-slate-300">
            Kasbiy rivojlanish, texnologiyalar va ta'lim haqida foydali maqolalar
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="group cursor-pointer border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full overflow-hidden" data-testid={`card-blog-${post.id}`}>
                  {post.image && (
                    <div className="h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
                      <Badge className="rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">{post.category}</Badge>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                    </div>
                    <h2 className="mb-2 text-xl font-bold leading-snug text-foreground" data-testid={`text-blog-title-${post.id}`}>{post.title}</h2>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <User className="h-3 w-3" /> {post.author}
                      </span>
                      <span className="flex items-center gap-1 text-sm font-semibold text-purple-600">
                        O'qish <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
