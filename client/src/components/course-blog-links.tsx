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
  const iconColors: Record<string, string> = {
    purple: "text-purple-400",
    indigo: "text-indigo-400",
    green: "text-emerald-400",
    blue: "text-blue-400",
    amber: "text-amber-400",
  };
  const iconColor = iconColors[color] || iconColors.purple;

  return (
    <section className="bg-[#111] py-10 sm:py-14" data-testid="section-blog-links">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-2">
          <BookOpen className={`h-5 w-5 ${iconColor}`} />
          <h2 className="text-2xl font-extrabold text-white">Foydali maqolalar</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              <div className="group flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-white/10 bg-zinc-900 p-4 transition-all hover:border-purple-500/30 hover:bg-zinc-800" data-testid={`link-blog-${link.href}`}>
                <div className="min-w-0">
                  <p className={`text-sm font-semibold leading-snug text-zinc-200 group-hover:text-purple-300 transition-colors`}>{link.title}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{link.readTime} o'qish</p>
                </div>
                <ArrowRight className={`h-4 w-4 shrink-0 ${iconColor} transition-transform group-hover:translate-x-0.5`} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
