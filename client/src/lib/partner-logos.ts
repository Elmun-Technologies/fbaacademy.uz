import { resolveBundledPublicUrl } from "@/lib/public-media";

/** Normalized company label → filename in `public/partner-logos/`. */
const LOGO_FILE_BY_NORMALIZED_NAME = new Map<string, string>([
  ["artel", "ARTEL.jpg"],
  ["bdo", "BDO.jpg"],
  ["deloitte", "Deloitte.jpg"],
  ["ey", "EY.jpg"],
  ["grant thornton", "GRANT THORTON.jpg"],
  ["humans", "HUMANS.jpg"],
  ["kapitalbank", "KAPITALBANK.jpg"],
  ["kpmg", "KPMG.jpg"],
  ["nbu", "NBU.jpg"],
  ["payme", "PAYME.jpg"],
  ["pwc", "PWC.jpg"],
  ["uzcard", "UZCARD.jpg"],
]);

/** Partner companies that have a logo file — used across About, Partnership, Home, etc. */
export const PARTNER_COMPANY_DISPLAY_ORDER = [
  "Deloitte",
  "PwC",
  "KPMG",
  "EY",
  "BDO",
  "Grant Thornton",
  "Artel",
  "Kapitalbank",
  "NBU",
  "Payme",
  "UzCard",
  "Humans",
] as const;

function normalizeCompanyKey(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, " ");
}

/** Absolute or theme-prefixed URL for a partner logo, or `undefined` if unknown. */
export function partnerCompanyLogoSrc(companyName: string): string | undefined {
  const file = LOGO_FILE_BY_NORMALIZED_NAME.get(normalizeCompanyKey(companyName));
  if (!file) return undefined;
  return resolveBundledPublicUrl(`/partner-logos/${file}`);
}

export function hasPartnerCompanyLogo(companyName: string): boolean {
  return partnerCompanyLogoSrc(companyName) !== undefined;
}

/** Keep only companies that have a bundled logo asset. */
export function partnerCompaniesWithLogos(names: readonly string[]): string[] {
  return names.filter(hasPartnerCompanyLogo);
}
