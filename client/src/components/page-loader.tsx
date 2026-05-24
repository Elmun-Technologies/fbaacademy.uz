/** Lightweight route fallback — CSS only, no extra dependencies. */
export default function PageLoader() {
  return (
    <div
      className="flex min-h-[50vh] flex-col items-center justify-center gap-3 bg-[#0d0d0d]"
      role="status"
      aria-label="Loading page"
    >
      <div className="h-9 w-9 animate-spin rounded-full border-2 border-brand/30 border-t-brand" />
      <span className="text-xs font-medium text-zinc-500">Yuklanmoqda…</span>
    </div>
  );
}
