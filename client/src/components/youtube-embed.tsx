import { useState } from "react";
import { Play } from "lucide-react";
import { loadState, saveState, processEvent } from "@/lib/gamification";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  thumbnailQuality?: "default" | "hqdefault" | "mqdefault" | "sddefault" | "maxresdefault";
}

export default function YouTubeEmbed({
  videoId,
  title = "Video",
  className = "",
  thumbnailQuality = "hqdefault",
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;

  if (isLoaded) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${className}`} style={{ paddingBottom: "56.25%" }}>
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
      className={`group relative cursor-pointer overflow-hidden rounded-2xl ${className}`}
      style={{ paddingBottom: "56.25%" }}
      onClick={() => {
        setIsLoaded(true);
        const result = processEvent(loadState(), "video_watch");
        if (result.pointsGained > 0) saveState(result.newState);
      }}
      role="button"
      aria-label={`${title} videosini ko'rish`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setIsLoaded(true);
          const result = processEvent(loadState(), "video_watch");
          if (result.pointsGained > 0) saveState(result.newState);
        }
      }}
    >
      <img
        src={thumbnail}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-2xl transition-all duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
          <Play className="ml-1 h-7 w-7 fill-red-600 text-red-600 sm:h-9 sm:w-9" />
        </div>
      </div>
    </div>
  );
}
