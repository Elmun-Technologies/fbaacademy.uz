import { getLocalImageWebpVariant, isSpaBundledMediaUrl, prefersWebpSource } from "@/lib/public-media";

type PublicMediaPictureProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "auto" | "sync";
  fetchPriority?: "high" | "low" | "auto";
  onError?: () => void;
};

/** Bundled media: WebP first when `npm run optimize:media` has produced `.webp` siblings. */
export function PublicMediaPicture({
  src,
  alt,
  className,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  onError,
}: PublicMediaPictureProps) {
  if (!isSpaBundledMediaUrl(src)) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onError={onError}
      />
    );
  }

  const webp = prefersWebpSource(src) ? getLocalImageWebpVariant(src) : null;

  return (
    <picture className="contents">
      {webp ? <source type="image/webp" srcSet={webp} /> : null}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onError={onError}
      />
    </picture>
  );
}
