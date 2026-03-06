import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      aria-label="Sahifa boshiga qaytish"
      data-testid="button-scroll-to-top"
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-xl transition-all duration-200 hover:bg-indigo-500 hover:scale-110 hover:shadow-indigo-500/30 hover:shadow-2xl"
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
    </button>
  );
}
