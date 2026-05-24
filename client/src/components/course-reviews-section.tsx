import { ExternalLink, Instagram } from "lucide-react";
import { toInstagramEmbedUrl, type ExternalProofItem } from "@/lib/course-proof-data";
import { useLanguage } from "@/contexts/language-context";

interface CourseReviewsSectionProps {
  title: string;
  subtitle?: string;
  reviews: ExternalProofItem[];
  testId?: string;
}

export default function CourseReviewsSection({
  title,
  subtitle,
  reviews,
  testId = "section-course-reviews",
}: CourseReviewsSectionProps) {
  const { lang } = useLanguage();
  if (!reviews.length) {
    return null;
  }
  const openLabel = lang === "ru" ? "Открыть отзыв" : lang === "en" ? "Open Review" : "Fikrni ko'rish";
  const socialLabel = lang === "ru" ? "Социальная сеть" : lang === "en" ? "Social link" : "Ijtimoiy tarmoq";
  const onInstagramLabel = lang === "ru" ? "Instagram ichida ko'rish" : lang === "en" ? "Open on Instagram" : "Instagramda ochish";

  return (
    <section className="py-14 sm:py-16" data-testid={testId}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-3xl text-sm text-zinc-400 sm:text-base">{subtitle}</p>}

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, idx) => (
            <article
              key={`${review.href}-${idx}`}
              className="rounded-2xl border border-white/10 bg-zinc-900 p-4 transition hover:border-brand-accent/40 hover:bg-zinc-800"
              data-testid={`review-item-${idx}`}
            >
              <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-black">
                <iframe
                  src={`${toInstagramEmbedUrl(review.href)}?utm_source=ig_embed&utm_campaign=loading`}
                  title={`${review.title} preview`}
                  loading="lazy"
                  className="h-[360px] w-full"
                  allow="autoplay; encrypted-media; clipboard-write; fullscreen; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-dark/30 text-brand-accent">
                <Instagram className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-extrabold text-white sm:text-base">{review.title}</h3>
              <p className="mt-1 text-xs text-zinc-500">{review.label ?? socialLabel}</p>
              <a
                href={review.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent-light"
              >
                {openLabel}
                <ExternalLink className="h-4 w-4" />
              </a>
              <p className="mt-1 text-xs text-zinc-500">{onInstagramLabel}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
