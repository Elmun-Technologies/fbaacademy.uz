/**
 * Static files: `client/public/media/` in dev/Node; WordPress theme build puts them under
 * `wp-content/themes/fbaacademy-spa/assets/media/` — theme sets `window.FBA_ASSET_BASE`.
 */
function readWpAssetBase(): string | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { FBA_ASSET_BASE?: string }).FBA_ASSET_BASE;
}

function mediaBasePrefix(): string {
  const b = readWpAssetBase();
  if (typeof b !== "string" || !b.trim()) return "";
  return b.replace(/\/?$/, "/");
}

export function publicMediaUrl(folder: "certificates" | "teachers", filename: string): string {
  const safe = filename.replace(/\\/g, "").replace(/^\/+/, "");
  const encoded = encodeURIComponent(safe);
  const prefix = mediaBasePrefix();
  const tail = `media/${folder}/${encoded}`;
  if (prefix) {
    return `${prefix}${tail}`;
  }
  return `/${tail}`;
}

/** Turn `/media/...` from bundled data into full theme URL on WordPress. */
export function resolvePublicMediaSrc(src: string | undefined): string {
  if (!src || typeof src !== "string") return "";
  const t = src.trim();
  if (!t.startsWith("/media/")) return t;
  const prefix = mediaBasePrefix();
  if (!prefix) return t;
  return `${prefix}${t.replace(/^\/+/, "")}`;
}

/** Certificate / teacher assets shipped with the SPA (dev path or WP theme assets path). */
export function isSpaBundledMediaUrl(src: string): boolean {
  const s = src.trim();
  if (s.startsWith("/media/") || s.startsWith("/images/")) return true;
  return /\/assets\/(media\/(certificates|teachers)|images)\//.test(s);
}

/** Logo, favicon, `public/` root files — same WordPress base as `/media/`. */
export function resolveBundledPublicUrl(path: string): string {
  const t = path.trim();
  if (!t || t.startsWith("http://") || t.startsWith("https://")) return t;
  if (!t.startsWith("/")) return t;
  const prefix = mediaBasePrefix();
  if (!prefix) return t;
  return `${prefix}${t.slice(1)}`;
}

/**
 * WebP `<source>` is only used under `/media/` where `npm run optimize:media` creates siblings.
 * For `/images/` etc., a missing `.webp` must not be requested — dev/static servers may return HTML SPA fallback.
 */
export function prefersWebpSource(src: string): boolean {
  const path = src.split("?")[0]?.split("#")[0] ?? "";
  return path.includes("/media/");
}

/** Default mentor cards: map `teacher-*` ids to real files under `public/media/teachers/`. */
const TEACHER_AVATAR_FILE: Record<string, string> = {
  "teacher-1": "Firdavs Mukhammadkulov.jpg",
  "teacher-2": "Dilnoza Zaripova.jpg",
  "teacher-3": "Javohirbek Mo'minov.jpg",
};

export function teacherAvatarUrl(teacherId: string): string {
  const file = TEACHER_AVATAR_FILE[teacherId];
  if (file) {
    return publicMediaUrl("teachers", file);
  }
  return publicMediaUrl("teachers", `${teacherId}.jpg`);
}

/** pdflink.to path segment → actual certificate image filename on disk */
const CERTIFICATE_COVER_BY_SLUG: Record<string, string> = {
  "shokhrukh-yangiboev": "Shokhrukh Yangiboev.jpg",
  "temur-uralov": "Temur Uralov.jpg",
  "jakhongir-matchanov": "Jakhongir Matchanov.jpg",
  irodakhon: "Irodakhon Talatkhon.jpg",
  diyara: "Diyara Nazarova.jpg",
  bahrom: "Bakhromjon Musaev.jpg",
  atxamjon: "Atxamjon Yusupov.jpg",
  mirjamol: "Mirjamol Sidikov.jpg",
  shokhista: "Shokhista Suvonova.jpg",
  dilmurod: "Dilmurod Almatov.jpg",
  nigora: "Dilshod Akhmedov.jpg",
  "nigora-muminova": "Nigora Muminova.jpg",
  "javohir-xalilov": "Javohir Xalilov.jpg",
  "lazizbek-barakayev": "Lazizbek Barakayev.jpg",
  "surojbek-mukhiddinov": "Surojbek Mukhiddinov.jpg",
  "ulugbek-normurodov": "Ulugbek Normurodov.jpg",
  "dilshod-akhmedov": "Dilshod Akhmedov.jpg",
};

function pdflinkSlugFromHref(href: string): string {
  try {
    return new URL(href.trim()).pathname.replace(/^\/+|\/+$/g, "") || "certificate";
  } catch {
    return "certificate";
  }
}

export function getCertificateCoverSrc(href: string): string {
  const slug = pdflinkSlugFromHref(href);
  const mapped = CERTIFICATE_COVER_BY_SLUG[slug];
  if (mapped) {
    return publicMediaUrl("certificates", mapped);
  }
  return publicMediaUrl("certificates", `${slug}.jpg`);
}

/** Same path with .webp for build-time optimized output (`npm run optimize:media`). */
export function getLocalImageWebpVariant(jpgOrEncodedUrl: string): string {
  const base = jpgOrEncodedUrl.split("?")[0];
  return base.replace(/\.(jpe?g)$/i, ".webp");
}
