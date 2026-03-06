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
      <section className="bg-gradient-to-b from-purple-50/50 to-background dark:from-purple-950/10 dark:to-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-blog-title">Blog</h1>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Kasbiy rivojlanish, texnologiyalar va ta'lim haqida foydali maqolalar
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="group border-card-border bg-card transition-all duration-300 hover-elevate cursor-pointer h-full" data-testid={`card-blog-${post.id}`}>
                  <div className="h-48 rounded-t-md bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-purple-300 dark:text-purple-700">{post.category}</span>
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                    </div>
                    <h2 className="mb-2 text-xl font-semibold leading-snug" data-testid={`text-blog-title-${post.id}`}>{post.title}</h2>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <User className="h-3 w-3" /> {post.author}
                      </span>
                      <span className="flex items-center gap-1 text-sm font-medium text-foreground group-hover:text-foreground transition-colors">
                        O'qish <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
