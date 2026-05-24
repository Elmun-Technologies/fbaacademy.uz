import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CertificatePreviewMedia } from "@/components/certificate-preview-media";
import { getCourseCertificates } from "@/lib/course-proof-data";
import { useLanguage } from "@/contexts/language-context";

interface CourseCertificatesSectionProps {
  courseId: string;
  title?: string;
  subtitle?: string;
}

export default function CourseCertificatesSection({
  courseId,
  title,
  subtitle,
}: CourseCertificatesSectionProps) {
  const { lang } = useLanguage();
  const certificates = getCourseCertificates(courseId);
  const resolvedTitle =
    title ??
    (lang === "ru"
      ? "Сертификаты выпускников"
      : lang === "en"
        ? "Graduate Certificates"
        : "Bitiruvchilar sertifikatlari");
  const resolvedSubtitle =
    subtitle ??
    (lang === "ru"
      ? "Ниже размещены открытые ссылки на сертификаты выпускников."
      : lang === "en"
        ? "Open links to graduate certificates are listed below."
        : "Quyidagi hujjatlar ochiq formatda joylangan. Har bir sertifikat alohida sahifada ko'riladi.");
  const openLabel = lang === "ru" ? "Открыть сертификат" : lang === "en" ? "Open Certificate" : "Sertifikatni ko'rish";

  if (!certificates.length) {
    return null;
  }

  return (
    <section className="bg-[#111] py-14" data-testid={`section-certificates-${courseId}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">{resolvedTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm text-zinc-400 sm:text-base">{resolvedSubtitle}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((item, idx) => (
            <article
              key={`${item.href}-${idx}`}
              className="rounded-2xl border border-white/10 bg-zinc-900 p-4 transition hover:border-indigo-500/40 hover:bg-zinc-800"
              data-testid={`certificate-item-${courseId}-${idx}`}
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="mb-4 rounded-xl border border-white/10 bg-zinc-950/50 p-2 sm:p-3">
                  <CertificatePreviewMedia
                    href={item.href}
                    title={item.title}
                    label={item.label}
                    previewImage={item.previewImage}
                    previewPdfUrl={item.previewPdfUrl}
                    heightClass="h-48 sm:h-56"
                    previewCaption={lang === "ru" ? "Выпускник" : lang === "en" ? "Graduate" : "Bitiruvchi"}
                  />
                </div>
              </a>

              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="line-clamp-2 text-sm font-extrabold text-white sm:text-base">{item.title}</h3>
                {item.label && (
                  <Badge className="rounded-full border border-indigo-500/30 bg-indigo-900/20 text-indigo-300">
                    {item.label}
                  </Badge>
                )}
              </div>

              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-indigo-200"
              >
                {openLabel}
                <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
