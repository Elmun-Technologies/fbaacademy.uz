import type { Language } from "@/lib/translations";

export type LocalizedText = Record<Language, string>;

export type LocalizedList = Record<Language, string[]>;

export function pick(lang: Language, text: LocalizedText): string {
  return text[lang] ?? text.en ?? text.uz;
}

export function pickList(lang: Language, list: LocalizedList): string[] {
  return list[lang] ?? list.en ?? list.uz;
}

/** en, uz, ru — matches most page-level tt() helpers */
export function tt(en: string, uz: string, ru: string, lang: Language): string {
  return lang === "uz" ? uz : lang === "ru" ? ru : en;
}

export const FAQ_CATEGORY_I18N: Record<string, LocalizedText> = {
  Umumiy: { uz: "Umumiy", ru: "Общие", en: "General" },
  "To'lov": { uz: "To'lov", ru: "Оплата", en: "Payment" },
  Sertifikat: { uz: "Sertifikat", ru: "Сертификат", en: "Certificate" },
  "Ishga joylashish": { uz: "Ishga joylashish", ru: "Трудоустройство", en: "Career" },
  ACCA: { uz: "ACCA", ru: "ACCA", en: "ACCA" },
  DipIFR: { uz: "DipIFR", ru: "DipIFR", en: "DipIFR" },
  "1C": { uz: "1C", ru: "1C", en: "1C" },
  "Financial Modeling": { uz: "Financial Modeling", ru: "Financial Modeling", en: "Financial Modeling" },
};

export const CATEGORY_I18N: Record<string, LocalizedText> = {
  ACCA: { uz: "ACCA", ru: "ACCA", en: "ACCA" },
  DipIFR: { uz: "DipIFR", ru: "DipIFR", en: "DipIFR" },
  Huquqshunoslik: { uz: "Huquqshunoslik", ru: "Юриспруденция", en: "Law" },
  "1C Buxgalteriya": { uz: "1C Buxgalteriya", ru: "1C Бухгалтерия", en: "1C Accounting" },
  МСФО: { uz: "МСФО", ru: "МСФО", en: "IFRS" },
  "Financial Analyst": { uz: "Financial Analyst", ru: "Financial Analyst", en: "Financial Analyst" },
};
