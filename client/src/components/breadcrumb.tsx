import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export default function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  const all = [{ label: "Bosh sahifa", href: "/" }, ...items];
  const textColor = light ? "text-zinc-400 hover:text-white" : "text-zinc-500 hover:text-zinc-300";
  const sepColor = light ? "text-zinc-600" : "text-zinc-600";
  const currentColor = light ? "text-slate-200" : "text-foreground";

  return (
    <nav aria-label="breadcrumb" data-testid="breadcrumb-nav">
      <ol className="flex items-center gap-1.5 flex-wrap text-xs sm:text-sm">
        {all.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className={`h-3 w-3 ${sepColor}`} />}
            {item.href && i < all.length - 1 ? (
              <Link href={item.href}>
                <span className={`flex items-center gap-1 font-medium transition-colors cursor-pointer ${textColor}`} data-testid={`breadcrumb-item-${i}`}>
                  {i === 0 && <Home className="h-3 w-3" />}
                  {item.label}
                </span>
              </Link>
            ) : (
              <span className={`font-semibold ${currentColor}`} data-testid={`breadcrumb-current`}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
