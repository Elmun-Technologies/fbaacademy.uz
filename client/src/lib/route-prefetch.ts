const prefetched = new Set<string>();

const ROUTE_LOADERS: Record<string, () => Promise<unknown>> = {
  "/": () => import("@/pages/home"),
  "/courses": () => import("@/pages/catalog"),
  "/course/acca": () => import("@/pages/courses/acca"),
  "/course/applied-knowledge": () => import("@/pages/courses/applied-knowledge"),
  "/course/applied-skills": () => import("@/pages/courses/applied-skills"),
  "/course/strategic-professional": () => import("@/pages/courses/strategic-professional"),
  "/course/dipifr": () => import("@/pages/courses/dipifr"),
  "/course/financial-modeling": () => import("@/pages/courses/financial-modeling"),
  "/course/jurisprudence": () => import("@/pages/courses/jurisprudence"),
  "/course/1c-course": () => import("@/pages/courses/one-c"),
  "/course/msfo": () => import("@/pages/courses/msfo"),
  "/course/f3-financial-accounting": () => import("@/pages/courses/f3-financial-accounting"),
  "/teachers": () => import("@/pages/teachers"),
  "/about": () => import("@/pages/about"),
  "/blog": () => import("@/pages/blog"),
  "/contacts": () => import("@/pages/contacts"),
  "/career": () => import("@/pages/career-center"),
  "/case-studies": () => import("@/pages/case-studies"),
  "/faq": () => import("@/pages/faq"),
  "/corporate": () => import("@/pages/corporate-training"),
  "/partnership": () => import("@/pages/partnership"),
};

function normalizePath(href: string): string {
  const path = href.split("?")[0]?.split("#")[0] ?? href;
  if (!path || path === "/") return "/";
  return path.endsWith("/") ? path.slice(0, -1) : path;
}

/** Prefetch a route chunk when the user hovers a nav link. */
export function prefetchRoute(href: string): void {
  const path = normalizePath(href);
  const loader = ROUTE_LOADERS[path];
  if (!loader || prefetched.has(path)) return;

  prefetched.add(path);
  void loader();
}

export function prefetchRouteProps(href: string) {
  return {
    onMouseEnter: () => prefetchRoute(href),
    onFocus: () => prefetchRoute(href),
  };
}
