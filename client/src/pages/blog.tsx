import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import { blogPosts } from "@/lib/data";
import { Clock, ArrowRight, Calendar, User } from "lucide-react";

export default function Blog() {
  useSEO({
    title: "Blog - FBA Academy",
    description: "Kasbiy rivojlanish, texnologiyalar va ta'lim haqida foydali maqolalar.",
  });

  return (
    <Layout>
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-blog-title">Blog</h1>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            Kasbiy rivojlanish, texnologiyalar va ta'lim haqida foydali maqolalar
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="group cursor-pointer border-0 bg-slate-50 dark:bg-card transition-all duration-200 hover-elevate h-full overflow-visible" data-testid={`card-blog-${post.id}`}>
                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
                      <Badge variant="outline" className="rounded-full">{post.category}</Badge>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                    </div>
                    <h2 className="mb-2 text-xl font-semibold leading-snug text-foreground" data-testid={`text-blog-title-${post.id}`}>{post.title}</h2>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <User className="h-3 w-3" /> {post.author}
                      </span>
                      <span className="flex items-center gap-1 text-sm font-medium text-foreground">
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
