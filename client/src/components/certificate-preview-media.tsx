import { useState } from "react";
import { FileBadge2 } from "lucide-react";
import { PublicMediaPicture } from "@/components/public-media-picture";
import { getCertificateCoverSrc, getCertificatePdfEmbedUrl } from "@/lib/course-proof-data";
import { useLanguage } from "@/contexts/language-context";

type CertificatePreviewMediaProps = {
  href: string;
  title: string;
  label?: string;
  previewImage?: string;
  previewPdfUrl?: string;
  /** Outer preview block height (Tailwind), e.g. h-40 or h-36 */
  heightClass: string;
  previewCaption?: string;
};

export function CertificatePreviewMedia({
  href,
  title,
  label,
  previewImage,
  previewPdfUrl,
  heightClass,
  previewCaption = "Preview",
}: CertificatePreviewMediaProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const { lang } = useLanguage();
  const coverSrc = previewImage ?? getCertificateCoverSrc(href);
  const certWord = lang === "ru" ? "сертификат" : lang === "en" ? "certificate" : "sertifikat";
  const alt = `${title}${label ? ` — ${label}` : ""} ${certWord}`;

  if (!imgFailed) {
    return (
      <div
        className={`flex items-center justify-center ${heightClass} w-full rounded-lg border border-white/10 bg-white p-2 sm:p-3`}
      >
        <PublicMediaPicture
          src={coverSrc}
          alt={alt}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
          decoding="async"
          onError={() => setImgFailed(true)}
        />
      </div>
    );
  }

  if (previewPdfUrl) {
    return (
      <div
        className={`relative ${heightClass} w-full overflow-hidden rounded-lg border border-white/10 bg-white`}
      >
        <iframe
          src={getCertificatePdfEmbedUrl(previewPdfUrl)}
          title={`${title} ${certWord} PDF preview`}
          loading="lazy"
          className="h-full w-full pointer-events-none"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex ${heightClass} w-full flex-col justify-between rounded-lg border border-white/10 bg-indigo-900/20 p-4`}
    >
      <div className="inline-flex w-fit items-center gap-1 rounded-full border border-indigo-400/30 bg-indigo-500/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-indigo-200">
        <FileBadge2 className="h-3.5 w-3.5" />
        {label ?? certWord}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{previewCaption}</p>
        <p className="mt-1 line-clamp-2 text-base font-extrabold text-white">{title}</p>
      </div>
    </div>
  );
}
