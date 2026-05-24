import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  thumbnailQuality?: "default" | "hqdefault" | "mqdefault" | "sddefault" | "maxresdefault";
  aspectRatio?: "video" | "short";
}

const ASPECT_PADDING: Record<"video" | "short", string> = {
  video: "56.25%",
  short: "177.78%",
};

export default function YouTubeEmbed({
  videoId,
  title = "Video",
  className = "",
  thumbnailQuality = "hqdefault",
  aspectRatio = "video",
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;
  const paddingBottom = ASPECT_PADDING[aspectRatio];
  const frameClass =
    aspectRatio === "short"
      ? `relative mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl sm:max-w-[320px] ${className}`
      : `relative overflow-hidden rounded-2xl ${className}`;

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (isLoaded) {
    return (
      <div className={frameClass} style={{ paddingBottom }}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className={`group relative cursor-pointer ${frameClass}`}
      style={{ paddingBottom }}
      onClick={() => setIsLoaded(true)}
      role="button"
      aria-label={`${title} videosini ko'rish`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") setIsLoaded(true);
      }}
    >
      {isVisible ? (
        <img
          src={thumbnail}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover ix-media"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="absolute inset-0 bg-zinc-900" aria-hidden />
      )}
      <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-2xl transition-all duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
          <Play className="ml-1 h-7 w-7 fill-red-600 text-red-600 sm:h-9 sm:w-9" />
        </div>
      </div>
    </div>
  );
}
