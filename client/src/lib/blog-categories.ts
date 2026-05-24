import type { Language } from "@/lib/translations";

export const BLOG_CATEGORY_OPTIONS = [
  { value: "all", uz: "Barchasi", ru: "Все", en: "All" },
  { value: "ACCA", uz: "ACCA", ru: "ACCA", en: "ACCA" },
  { value: "DipIFR", uz: "DipIFR", ru: "DipIFR", en: "DipIFR" },
  { value: "МСФО", uz: "МСФО", ru: "МСФО", en: "IFRS" },
  { value: "Financial Analyst", uz: "Financial Analyst", ru: "Financial Analyst", en: "Financial Analyst" },
  { value: "Karyera", uz: "Karyera", ru: "Карьера", en: "Career" },
] as const;

export const BLOG_CATEGORY_COLORS: Record<string, string> = {
  ACCA: "bg-brand/30 text-brand-accent-light",
  DipIFR: "bg-indigo-600/30 text-indigo-300",
  "МСФО": "bg-emerald-600/30 text-emerald-300",
  "Financial Analyst": "bg-blue-600/30 text-blue-300",
  Karyera: "bg-brand-dark/30 text-brand-accent",
};

export function blogCategoryLabel(category: string, lang: Language): string {
  const row = BLOG_CATEGORY_OPTIONS.find((o) => o.value === category);
  if (!row) return category;
  return lang === "ru" ? row.ru : lang === "en" ? row.en : row.uz;
}
