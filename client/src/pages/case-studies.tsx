import { useSEO } from "@/hooks/use-seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import CourseReviewsSection from "@/components/course-reviews-section";
import { graduateResults } from "@/lib/data";
import { useState, useMemo } from "react";
import { ArrowRight, TrendingUp, Quote, ExternalLink, X } from "lucide-react";
import { CertificatePreviewMedia } from "@/components/certificate-preview-media";
import { ACCA_MSFO_CERTIFICATES, DIPIFR_CERTIFICATES, DIPIFR_REVIEW_REELS, type ExternalProofItem } from "@/lib/course-proof-data";
import { getCertificateCoverSrc, getCertificatePdfEmbedUrl } from "@/lib/course-proof-data";
import { useLanguage } from "@/contexts/language-context";
import { localizeGraduates } from "@/lib/localize-content";

export default function CaseStudies() {
  const { lang } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<ExternalProofItem | null>(null);
  const localizedGraduates = useMemo(() => localizeGraduates(graduateResults, lang), [lang]);
  const tx = {
    seoTitle:
      lang === "ru"
        ? "Истории успеха — выпускники ACCA и DipIFR | FBA Academy"
        : lang === "en"
          ? "Success Stories — ACCA & DipIFR Graduates | FBA Academy"
          : "Muvaffaqiyat Tarixi — ACCA, DipIFR Bitiruvchilar | FBA Academy",
    seoDesc:
      lang === "ru"
        ? "Реальные истории и результаты выпускников FBA Academy: ACCA, DipIFR, карьерный рост и сертификаты."
        : lang === "en"
          ? "Real graduate outcomes from FBA Academy: ACCA, DipIFR, career growth and certificates."
          : "FBA Academy ACCA, DipIFR va Financial Modeling bitiruvchilarining real muvaffaqiyat tarixi. Big Four firmalarga kirishdan to karyera o'sishiga.",
    breadcrumb: lang === "ru" ? "Истории успеха" : lang === "en" ? "Success Stories" : "Muvaffaqiyat tarixi",
    heroBadge: lang === "ru" ? "Результаты" : lang === "en" ? "Results" : "Natijalar",
    heroTitle: lang === "ru" ? "Результаты выпускников" : lang === "en" ? "Graduate Results" : "Bitiruvchilar natijalari",
    heroDesc:
      lang === "ru"
        ? "Наши выпускники показывают реальные результаты. Ознакомьтесь с их историями успеха."
        : lang === "en"
          ? "Our graduates deliver real outcomes. Explore their success stories."
          : "Bizning bitiruvchilarimiz haqiqiy natijalarni ko'rsatmoqda. Ularning muvaffaqiyat tarixi bilan tanishing.",
    statEmployment: lang === "ru" ? "Трудоустройство" : lang === "en" ? "Employment Rate" : "Ishga joylashish",
    statSalary: lang === "ru" ? "Рост зарплаты" : lang === "en" ? "Average Salary Growth" : "O'rtacha maosh o'sishi",
    statGraduates: lang === "ru" ? "Выпускников" : lang === "en" ? "Graduates" : "Bitiruvchilar",
    statTime: lang === "ru" ? "Среднее время найма" : lang === "en" ? "Average Hiring Time" : "O'rtacha ish topish",
    storiesTitle: lang === "ru" ? "Истории успеха" : lang === "en" ? "Success Stories" : "Muvaffaqiyat tarixi",
    before: lang === "ru" ? "До" : lang === "en" ? "Before" : "Oldin",
    after: lang === "ru" ? "После" : lang === "en" ? "After" : "Hozir",
    company: lang === "ru" ? "Текущая компания" : lang === "en" ? "Current company" : "Hozirgi ish joyi",
    certTitle: lang === "ru" ? "Все сертификаты" : lang === "en" ? "All Certificates" : "Barcha sertifikatlar",
    certDesc:
      lang === "ru"
        ? "Открытые ссылки на сертификаты DipIFR и ACCA/MSFO."
        : lang === "en"
          ? "Public links to DipIFR and ACCA/MSFO certificates."
          : "Ochiq manbadagi DipIFR va ACCA/MSFO sertifikatlari. Har bir link alohida hujjat sahifasiga olib boradi.",
    open: lang === "ru" ? "Открыть" : lang === "en" ? "Open" : "Ochish",
    certPreview: lang === "ru" ? "Предпросмотр сертификата" : lang === "en" ? "Certificate Preview" : "Sertifikat preview",
    reviewTitle: lang === "ru" ? "Отзывы студентов" : lang === "en" ? "Student Reviews" : "O'quvchilar otzivlari",
    reviewDesc:
      lang === "ru"
        ? "Реальные видео-отзывы в Instagram."
        : lang === "en"
          ? "Real Instagram video reviews."
          : "Instagram'dagi real video fikrlar. Natijalar sahifasida hammasi bir joyga jamlandi.",
    watch: lang === "ru" ? "Смотреть" : lang === "en" ? "Watch" : "Ko'rish",
    nextStep: lang === "ru" ? "Следующий шаг" : lang === "en" ? "Next Step" : "Keyingi qadam",
    ctaTitle:
      lang === "ru"
        ? "Ваша история успеха может быть следующей"
        : lang === "en"
          ? "Your Success Story Can Be Next"
          : "Muvaffaqiyat tarixi sizniki bo'lsin",
    ctaBtn:
      lang === "ru"
        ? "Бесплатная консультация"
        : lang === "en"
          ? "Free Consultation"
          : "Bepul konsultatsiya",
  };

  useSEO({
    title: tx.seoTitle,
    description: tx.seoDesc,
    keywords: lang === "ru"
      ? "успех ACCA, выпускник DipIFR, история успеха FBA Academy, карьера в финансах Узбекистан"
      : lang === "en"
        ? "ACCA success, DipIFR graduate, FBA Academy success story, finance career Uzbekistan"
        : "ACCA muvaffaqiyat, DipIFR bitiruvchi, FBA Academy success story, moliya karyera O'zbekiston",
    breadcrumb: [{ name: tx.breadcrumb, url: "https://fbaacademy.uz/case-studies" }],
    dateModified: "2026-04-16",
    speakable: ["[data-speakable='cases-title']", "[data-speakable='cases-desc']"],
    jsonLd: {
      "@type": "CollectionPage",
      "name": lang === "ru"
        ? "FBA Academy — Успехи наших выпускников"
        : lang === "en"
          ? "FBA Academy — Graduate Success Stories"
          : "FBA Academy — Bitiruvchilarimiz muvaffaqiyati",
      "description": lang === "ru"
        ? "Реальные истории успеха выпускников ACCA, DipIFR и Financial Modeling. Работа в Big Four и ведущих компаниях."
        : lang === "en"
          ? "Real success stories from ACCA, DipIFR and Financial Modeling graduates. Careers at Big Four and leading companies."
          : "ACCA, DipIFR va Financial Modeling bitiruvchilarining haqiqiy muvaffaqiyat tarixi. Big Four va yetakchi kompaniyalarda ish.",
      "url": "https://fbaacademy.uz/case-studies",
      "isPartOf": { "@type": "WebSite", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
    },
  });

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#11133c] via-[#1a2a4a] to-slate-900 pb-16 pt-6 sm:pb-20 lg:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: tx.breadcrumb }]} light />
          </div>
          <div className="mb-4 inline-block rounded-full border border-brand-accent/30 bg-brand/20 px-4 py-1.5 text-sm font-semibold text-brand-accent-light backdrop-blur-sm">{tx.heroBadge}</div>
          <h1 className="mb-4 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl" data-testid="text-case-studies-title" data-speakable="cases-title">{tx.heroTitle}</h1>
          <p className="mb-10 max-w-2xl text-slate-300" data-speakable="cases-desc">
            {tx.heroDesc}
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
              { value: "92%", label: tx.statEmployment },
              { value: "3x", label: tx.statSalary },
              { value: "5000+", label: tx.statGraduates },
              { value: lang === "ru" ? "3 мес" : lang === "en" ? "3 months" : "3 oy", label: tx.statTime },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm" data-testid={`stat-case-${i}`}>
                <div className="text-3xl font-extrabold text-white">{item.value}</div>
                <div className="mt-1 text-sm text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0d] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.storiesTitle}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {localizedGraduates.map((grad) => (
              <div key={grad.id} className="ix-card-border rounded-2xl border border-white/10 bg-zinc-900 p-6 sm:p-8" data-testid={`card-case-${grad.id}`}>
                <div>
                  <h3 className="text-lg font-extrabold text-white" data-testid={`text-case-name-${grad.id}`}>{grad.name}</h3>
                  <span className="mt-1 inline-block rounded-full bg-brand/30 px-3 py-0.5 text-xs font-semibold text-brand-accent-light">{grad.courseName}</span>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-800 p-3">
                  <div className="flex-1 text-center">
                    <div className="text-xs text-zinc-500">{tx.before}</div>
                    <div className="text-sm font-semibold text-zinc-300">{grad.beforeRole}</div>
                  </div>
                  <TrendingUp className="h-5 w-5 shrink-0 text-emerald-500" />
                  <div className="flex-1 text-center">
                    <div className="text-xs text-zinc-500">{tx.after}</div>
                    <div className="text-sm font-semibold text-brand-accent">{grad.afterRole}</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm font-bold text-emerald-400">{grad.salaryIncrease}</span>
                </div>

                <div className="mt-3 flex items-start gap-2">
                  <Quote className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                  <p className="text-sm italic leading-relaxed text-zinc-400">"{grad.story}"</p>
                </div>

                {grad.company !== "Mustaqil" && (
                  <div className="mt-3 text-xs text-zinc-500">
                    {tx.company}: <span className="font-bold text-zinc-300">{grad.company}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-14 sm:py-16" data-testid="section-all-certificates">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">{tx.certTitle}</h2>
          <p className="mb-10 max-w-3xl text-sm text-zinc-400 sm:text-base">{tx.certDesc}</p>

          {/* Certificate groups — add new groups here for other courses */}
          {[
            { groupLabel: "DipIFR", color: "text-indigo-400", items: DIPIFR_CERTIFICATES },
            { groupLabel: "ACCA / МСФО", color: "text-amber-400", items: ACCA_MSFO_CERTIFICATES },
          ].map(({ groupLabel, color, items }) => (
            <div key={groupLabel} className="mb-12">
              <h3 className={`mb-5 text-lg font-bold uppercase tracking-widest ${color}`}>{groupLabel}</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item, idx) => (
                  <article
                    key={`${item.href}-${idx}`}
                    className="group ix-card-border cursor-pointer rounded-2xl border border-white/10 bg-zinc-900 p-3 hover:border-indigo-500/40"
                    data-testid={`case-certificate-${groupLabel}-${idx}`}
                    onClick={() => setSelectedCert(item)}
                  >
                    <div className="mb-3 rounded-xl border border-white/10 bg-zinc-950/50 p-2 sm:p-3">
                      <CertificatePreviewMedia
                        href={item.href}
                        title={item.title}
                        label={item.label}
                        previewImage={item.previewImage}
                        previewPdfUrl={item.previewPdfUrl}
                        heightClass="h-56 sm:h-64"
                        previewCaption={tx.certPreview}
                      />
                    </div>
                    <h3 className="mb-2 text-sm font-extrabold text-white">{item.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-indigo-300">{item.label}</span>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white"
                      >
                        {tx.open} <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate lightbox modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="font-bold text-white">{selectedCert.title}</p>
                {selectedCert.label && <p className="text-xs text-indigo-300">{selectedCert.label}</p>}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={selectedCert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-indigo-500"
                >
                  {tx.open} <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex min-h-[50vh] max-h-[80vh] w-full items-center justify-center bg-white p-4 sm:p-6">
              {selectedCert.previewPdfUrl ? (
                <iframe
                  src={getCertificatePdfEmbedUrl(selectedCert.previewPdfUrl)}
                  title={selectedCert.title}
                  className="h-full min-h-[50vh] w-full max-h-[75vh]"
                />
              ) : (
                <img
                  src={selectedCert.previewImage ?? getCertificateCoverSrc(selectedCert.href)}
                  alt={selectedCert.title}
                  className="max-h-[75vh] w-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}

      <CourseReviewsSection
        title={tx.reviewTitle}
        subtitle={tx.reviewDesc}
        reviews={DIPIFR_REVIEW_REELS}
        testId="section-all-reviews-links"
      />

      <section className="bg-gradient-to-br from-brand-dark via-[#1a2a4a] to-slate-900 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">{tx.nextStep}</div>
              <h2 className="text-4xl font-extrabold uppercase text-white sm:text-5xl">{tx.ctaTitle}</h2>
            </div>
            <Button asChild size="lg" className="gap-2 rounded-full bg-amber-400 px-8 font-bold text-black hover:bg-amber-300" data-testid="button-case-cta">
              <Link href="/contacts">
                {tx.ctaBtn} <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
