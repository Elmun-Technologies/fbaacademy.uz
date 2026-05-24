import { getCertificateCoverSrc as getCertificateCoverSrcFromMap, publicMediaUrl } from "@/lib/public-media";

/** Lazy wrapper: expert images are resolved at render time so `FBA_ASSET_BASE` is ready. */
function expertImage(filename: string): string {
  return `@@expert:${filename}`;
}

export function resolveExpertImage(src: string): string {
  if (src.startsWith("@@expert:")) {
    return publicMediaUrl("teachers", src.slice("@@expert:".length));
  }
  return src;
}

export interface ExternalProofItem {
  title: string;
  href: string;
  label?: string;
  previewImage?: string;
  previewPdfUrl?: string;
}

export function getCertificateCoverSrc(href: string): string {
  return getCertificateCoverSrcFromMap(href);
}

/**
 * pdflink.to PDFs send X-Frame-Options: DENY. We load them via same-origin `/api/certificate-pdf`
 * (see server/routes.ts) so the iframe is allowed under our X-Frame-Options: SAMEORIGIN.
 */
export function getCertificatePdfEmbedUrl(pdfUrl: string): string {
  const base = pdfUrl.trim().split("#")[0];
  const params = new URLSearchParams({ url: base });
  return `/api/certificate-pdf?${params.toString()}#page=1&view=Fit`;
}

export interface ExpertProfile {
  name: string;
  role: string;
  credentials: string;
  experience: string;
  details: string[];
  image: string;
}

export const DIPIFR_REVIEW_REELS: ExternalProofItem[] = [
  {
    title: "O'quvchi fikri #1",
    href: "https://www.instagram.com/reel/DVNjOcPjCoY/?igsh=ODM1cGdnNmI1OTJx",
    label: "Instagram Reel",
  },
  {
    title: "O'quvchi fikri #2",
    href: "https://www.instagram.com/reel/DGlF14IsSRb/?igsh=MTRoN3dpZGlkbGRhdQ==",
    label: "Instagram Reel",
  },
  {
    title: "O'quvchi fikri #3",
    href: "https://www.instagram.com/reel/C_N3a-NKWNZ/?igsh=eHM0NXgyNW4waG4w",
    label: "Instagram Reel",
  },
  {
    title: "MSFO bo'yicha fikr",
    href: "https://www.instagram.com/reel/DGvN5Sgso4A/?igsh=MWMxOWg2bjBtNGFqaA==",
    label: "Instagram Reel",
  },
];

export const DIPIFR_CERTIFICATES: ExternalProofItem[] = [
  { title: "Shokhrukh Yangiboev", href: "https://pdflink.to/shokhrukh-yangiboev/", label: "DipIFR", previewPdfUrl: "https://pdflink.to/_/pdf/0e8ec413-cb9e-4f7d-bac5-f4bd43b304e8/" },
  { title: "Temur Uralov", href: "https://pdflink.to/temur-uralov/", label: "DipIFR", previewPdfUrl: "https://pdflink.to/_/pdf/4d5e2bde-694d-40e0-9447-1370d7eef17c/" },
  { title: "Jakhongir Matchanov", href: "https://pdflink.to/jakhongir-matchanov/", label: "DipIFR", previewPdfUrl: "https://pdflink.to/_/pdf/d3061d06-c1cf-44be-bda5-d1d3ee207450/" },
  { title: "Irodakhon Talatkhon", href: "https://pdflink.to/irodakhon/", label: "DipIFR", previewPdfUrl: "https://pdflink.to/_/pdf/76558d34-7a89-4cd7-8442-bebbefcb4f7a/" },
  { title: "Diyara Nazarova", href: "https://pdflink.to/diyara/", label: "DipIFR", previewPdfUrl: "https://pdflink.to/_/pdf/dc736a45-d2c4-4040-98fc-9781d176c655/" },
  { title: "Bakhromjon Musaev", href: "https://pdflink.to/bahrom/", label: "DipIFR", previewPdfUrl: "https://pdflink.to/_/pdf/4ba9bf56-bc86-49bb-acca-b211c69ab637/" },
  { title: "Atxamjon Yusupov", href: "https://pdflink.to/atxamjon/", label: "DipIFR", previewPdfUrl: "https://pdflink.to/_/pdf/bfa6373e-0109-47c8-8d9e-23d6bf519230/" },
  { title: "Mirjamol Sidikov", href: "https://pdflink.to/mirjamol/", label: "DipIFR", previewPdfUrl: "https://pdflink.to/_/pdf/f5bb4fd9-c8ce-40f6-8c2c-7b5cc3bdc3a1/" },
];

export const ACCA_MSFO_CERTIFICATES: ExternalProofItem[] = [
  { title: "Nigora Muminova", href: "https://pdflink.to/nigora-muminova/", label: "ACCA / MSFO", previewPdfUrl: "https://pdflink.to/_/pdf/247e592e-969b-4abf-9694-0128b53cd509/" },
  { title: "Shokhista Suvonova", href: "https://pdflink.to/shokhista/", label: "ACCA / MSFO", previewPdfUrl: "https://pdflink.to/_/pdf/d2e30667-68bd-4ae7-84da-b3127b2ef38c/" },
  { title: "Dilmurod Almatov", href: "https://pdflink.to/dilmurod/", label: "ACCA / MSFO", previewPdfUrl: "https://pdflink.to/_/pdf/2cc0ed69-6442-4224-a1ad-8a4633001c26/" },
  { title: "Dilshod Akhmedov", href: "https://pdflink.to/nigora/", label: "ACCA / MSFO", previewPdfUrl: "https://pdflink.to/_/pdf/93a9406c-0a2c-4337-91fc-21470f92f608/" },
];

export const DIPIFR_EXPERTS: ExpertProfile[] = [
  {
    name: "Firdavs Mukhammadkulov",
    role: "Bosh investitsion menejer, Murad Buildings",
    credentials: "ACCA Member",
    experience: "Moliya, loyiha, bizneslarni baholash va investitsiya sohasida 5 yillik tajriba",
    details: [
      "Real investitsiya loyihalarida moliyaviy tahlil va baholash tajribasi",
      "IFRS asosidagi hisobotlarni boshqaruv qarorlariga ulash amaliyoti",
    ],
    image: expertImage("Firdavs Mukhammadkulov.jpg"),
  },
  {
    name: "Dilnoza Zaripova",
    role: "Konsultant, Baker Tilly",
    credentials: "ACCA Fellow",
    experience: "Moliya sohasida 12+ yillik tajriba",
    details: [
      "Audit, buxgalteriya hisobi va MSFO (IFRS) bo'yicha xalqaro amaliy tajriba",
      "Big 4 (Deloitte) va yirik xalqaro kompaniyalarda ish tajribasi",
    ],
    image: expertImage("Dilnoza Zaripova.jpg"),
  },
  {
    name: "Javohirbek Mo'minov",
    role: "Reporting Director, Havas Food",
    credentials: "ACCA Member",
    experience: "Moliya, buxgalteriya hisobi, MSFO (IFRS) va audit yo'nalishida 5 yillik dars berish tajribasi",
    details: [
      "DipIFR imtihoniga yo'naltirilgan amaliy keyslar bilan ishlaydi",
      "Konsolidatsiya va reporting jarayonlarini ishlab turgan kompaniyalarda yuritgan",
    ],
    image: expertImage("Javohirbek Mo'minov.jpg"),
  },
];

const DEFAULT_CERTIFICATES: ExternalProofItem[] = [
  DIPIFR_CERTIFICATES[0],
  DIPIFR_CERTIFICATES[1],
  ACCA_MSFO_CERTIFICATES[0],
  ACCA_MSFO_CERTIFICATES[1],
];

export function getCourseCertificates(courseId: string): ExternalProofItem[] {
  if (courseId === "dipifr") {
    return DIPIFR_CERTIFICATES;
  }

  if (
    courseId === "acca" ||
    courseId === "applied-knowledge" ||
    courseId === "applied-skills" ||
    courseId === "strategic-professional"
  ) {
    return ACCA_MSFO_CERTIFICATES;
  }

  return DEFAULT_CERTIFICATES;
}

export function toInstagramEmbedUrl(url: string): string {
  const clean = url.split("?")[0].replace(/\/$/, "");
  return `${clean}/embed/captioned/`;
}
