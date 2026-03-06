import { Link } from "wouter";
import { ArrowRight, BookOpen } from "lucide-react";

interface BlogLink {
  href: string;
  title: string;
  readTime: string;
}

interface CourseBlogLinksProps {
  links: BlogLink[];
  color?: string;
}

export default function CourseBlogLinks({ links, color = "purple" }: CourseBlogLinksProps) {
  const colorClasses: Record<string, { bg: string; text: string; hover: string; icon: string }> = {
    purple: { bg: "bg-purple-50 dark:bg-purple-950/20", text: "text-purple-700 dark:text-purple-300", hover: "hover:bg-purple-100 dark:hover:bg-purple-900/40", icon: "text-purple-500" },
    indigo: { bg: "bg-indigo-50 dark:bg-indigo-950/20", text: "text-indigo-700 dark:text-indigo-300", hover: "hover:bg-indigo-100 dark:hover:bg-indigo-900/40", icon: "text-indigo-500" },
    green: { bg: "bg-emerald-50 dark:bg-emerald-950/20", text: "text-emerald-700 dark:text-emerald-300", hover: "hover:bg-emerald-100 dark:hover:bg-emerald-900/40", icon: "text-emerald-500" },
    blue: { bg: "bg-blue-50 dark:bg-blue-950/20", text: "text-blue-700 dark:text-blue-300", hover: "hover:bg-blue-100 dark:hover:bg-blue-900/40", icon: "text-blue-500" },
    amber: { bg: "bg-amber-50 dark:bg-amber-950/20", text: "text-amber-700 dark:text-amber-300", hover: "hover:bg-amber-100 dark:hover:bg-amber-900/40", icon: "text-amber-500" },
  };
  const c = colorClasses[color] || colorClasses.purple;

  return (
    <section className={`${c.bg} py-10 sm:py-14`} data-testid="section-blog-links">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className={`h-5 w-5 ${c.icon}`} />
          <h2 className="text-xl font-extrabold">Foydali maqolalar</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div className={`flex items-center justify-between gap-3 rounded-xl border bg-white dark:bg-card p-4 shadow-sm transition-all ${c.hover} cursor-pointer group`} data-testid={`link-blog-${link.href}`}>
                <div className="min-w-0">
                  <p className={`text-sm font-semibold ${c.text} leading-snug`}>{link.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{link.readTime} o'qish</p>
                </div>
                <ArrowRight className={`h-4 w-4 shrink-0 ${c.icon} transition-transform group-hover:translate-x-0.5`} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
