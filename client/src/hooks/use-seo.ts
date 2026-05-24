import { useEffect } from "react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/language-context";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  hreflang?: { lang: string; url: string }[];
  breadcrumb?: { name: string; url: string }[];
  faqItems?: { question: string; answer: string }[];
  speakable?: string[];
  dateModified?: string;
  articleSection?: string;
}

const FALLBACK_BASE_URL = "https://fbaacademy.uz";
const SITE_NAME = "FBA Academy";
const TWITTER_HANDLE = "@fbaacademy_uz";
const LEGACY_ORIGINS = new Set([
  "https://fbaacademy.uz",
  "http://fbaacademy.uz",
  "https://www.fbaacademy.uz",
  "http://www.fbaacademy.uz",
]);

declare global {
  interface Window {
    FBA_SITE_URL?: string;
    FBA_SEO_DEFAULT_OG_IMAGE?: string;
  }
}

function normalizeBaseUrl(value: string): string {
  if (!value) {
    return FALLBACK_BASE_URL;
  }
  return value.replace(/\/+$/, "") || FALLBACK_BASE_URL;
}

function resolveBaseUrl(): string {
  if (typeof window === "undefined") {
    return FALLBACK_BASE_URL;
  }

  const fromWp = window.FBA_SITE_URL;
  if (typeof fromWp === "string" && fromWp.trim() !== "") {
    return normalizeBaseUrl(fromWp);
  }

  return normalizeBaseUrl(window.location.origin || FALLBACK_BASE_URL);
}

/** Path (+ optional hash path) only — no query string, so canonical matches "en" default URLs. */
function canonicalPathFromLocation(location: string): string {
  const withSlash = location.startsWith("/") ? location : `/${location}`;
  const noQuery = withSlash.split("?")[0] ?? withSlash;
  const noHash = noQuery.split("#")[0] ?? noQuery;
  return noHash || "/";
}

function resolveCanonical(baseUrl: string, location: string): string {
  return `${baseUrl}${canonicalPathFromLocation(location)}`;
}

function resolveDefaultOgImage(baseUrl: string): string {
  if (typeof window !== "undefined") {
    const fromWp = window.FBA_SEO_DEFAULT_OG_IMAGE;
    if (typeof fromWp === "string" && fromWp.trim() !== "") {
      return fromWp;
    }
  }

  return `${baseUrl}/og-image.svg`;
}

function looksLikeAbsoluteHttpUrl(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

function rewriteUrlToBase(value: string, baseUrl: string): string {
  if (!value) {
    return value;
  }

  if (!looksLikeAbsoluteHttpUrl(value)) {
    if (value.startsWith("/")) {
      return `${baseUrl}${value}`;
    }
    return value;
  }

  try {
    const parsed = new URL(value);
    if (!LEGACY_ORIGINS.has(parsed.origin.toLowerCase())) {
      return value;
    }
    return `${baseUrl}${parsed.pathname}${parsed.search}${parsed.hash}`;
  } catch {
    return value;
  }
}

function rewriteUnknownUrlsToBase<T>(value: T, baseUrl: string): T {
  if (typeof value === "string") {
    return rewriteUrlToBase(value, baseUrl) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => rewriteUnknownUrlsToBase(item, baseUrl)) as T;
  }

  if (value && typeof value === "object") {
    const mapped = Object.entries(value as Record<string, unknown>).reduce<Record<string, unknown>>(
      (acc, [key, nested]) => {
        acc[key] = rewriteUnknownUrlsToBase(nested, baseUrl);
        return acc;
      },
      {},
    );
    return mapped as T;
  }

  return value;
}

export function useSEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  keywords,
  jsonLd,
  noindex = false,
  publishedTime,
  modifiedTime,
  hreflang,
  breadcrumb,
  faqItems,
  speakable,
  dateModified,
  articleSection,
}: SEOProps) {
  const [location] = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        if (selector.includes("property=")) {
          el.setAttribute("property", selector.match(/property="([^"]+)"/)?.[1] || "");
        } else if (selector.includes("name=")) {
          el.setAttribute("name", selector.match(/name="([^"]+)"/)?.[1] || "");
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setLink = (rel: string, href: string, extraAttrs?: Record<string, string>) => {
      const attrStr = extraAttrs
        ? Object.entries(extraAttrs).map(([k, v]) => `[${k}="${v}"]`).join("")
        : "";
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]${attrStr}`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        if (extraAttrs) {
          Object.entries(extraAttrs).forEach(([k, v]) => el!.setAttribute(k, v));
        }
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    const baseUrl = resolveBaseUrl();
    const canonicalUrl = resolveCanonical(baseUrl, location);
    const resolvedOgImage = ogImage || resolveDefaultOgImage(baseUrl);
    const resolvedOgTitle = ogTitle || fullTitle;
    const resolvedOgDesc = ogDescription || description;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1");
    if (keywords) {
      setMeta('meta[name="keywords"]', "content", keywords);
    } else {
      document.querySelector('meta[name="keywords"]')?.remove();
    }

    setMeta('meta[property="og:title"]', "content", resolvedOgTitle);
    setMeta('meta[property="og:description"]', "content", resolvedOgDesc);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", resolvedOgImage);
    setMeta('meta[property="og:image:width"]', "content", "1200");
    setMeta('meta[property="og:image:height"]', "content", "630");
    setMeta('meta[property="og:image:alt"]', "content", resolvedOgTitle);
    setMeta('meta[property="og:type"]', "content", ogType);
    setMeta('meta[property="og:site_name"]', "content", SITE_NAME);
    const localeMap: Record<string, string> = { en: "en_US", uz: "uz_UZ", ru: "ru_RU" };
    const currentLocale = localeMap[lang] || "en_US";
    const altLocales = Object.values(localeMap).filter((l) => l !== currentLocale);
    setMeta('meta[property="og:locale"]', "content", currentLocale);

    const localeAlts = document.querySelectorAll<HTMLMetaElement>('meta[property="og:locale:alternate"]');
    localeAlts.forEach((el, i) => {
      if (i < altLocales.length) {
        el.setAttribute("content", altLocales[i]);
      }
    });
    for (let i = localeAlts.length; i < altLocales.length; i++) {
      const el = document.createElement("meta");
      el.setAttribute("property", "og:locale:alternate");
      el.setAttribute("content", altLocales[i]);
      document.head.appendChild(el);
    }

    const effectiveModified = modifiedTime || dateModified;
    if (publishedTime) setMeta('meta[property="article:published_time"]', "content", publishedTime);
    if (effectiveModified) setMeta('meta[property="article:modified_time"]', "content", effectiveModified);
    if (articleSection) setMeta('meta[property="article:section"]', "content", articleSection);

    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", resolvedOgTitle);
    setMeta('meta[name="twitter:description"]', "content", resolvedOgDesc);
    setMeta('meta[name="twitter:image"]', "content", resolvedOgImage);
    setMeta('meta[name="twitter:image:alt"]', "content", resolvedOgTitle);
    setMeta('meta[name="twitter:site"]', "content", TWITTER_HANDLE);

    setLink("canonical", canonicalUrl);

    const hreflangEntries = hreflang || [
      { lang: "en", url: canonicalUrl },
      { lang: "uz", url: `${canonicalUrl}?lang=uz` },
      { lang: "ru", url: `${canonicalUrl}?lang=ru` },
      { lang: "x-default", url: canonicalUrl },
    ];
    hreflangEntries.forEach(({ lang, url }) => {
      const normalizedHref = rewriteUrlToBase(url, baseUrl);
      let el = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "alternate");
        el.setAttribute("hreflang", lang);
        document.head.appendChild(el);
      }
      el.setAttribute("href", normalizedHref);
    });

    const schemas: Record<string, unknown>[] = [];

    if (breadcrumb && breadcrumb.length > 0) {
      const homeLabel = lang === "ru" ? "Главная" : lang === "uz" ? "Bosh sahifa" : "Home";
      schemas.push({
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": homeLabel, "item": baseUrl },
          ...breadcrumb.map((b, i) => ({
            "@type": "ListItem",
            "position": i + 2,
            "name": b.name,
            "item": rewriteUrlToBase(b.url, baseUrl),
          })),
        ],
      });
    }

    if (faqItems && faqItems.length > 0) {
      schemas.push({
        "@type": "FAQPage",
        "mainEntity": faqItems.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer,
          },
        })),
      });
    }

    // SpeakableSpecification for AI voice assistants and GEO
    if (speakable && speakable.length > 0) {
      schemas.push({
        "@type": "WebPage",
        "@id": canonicalUrl,
        "url": canonicalUrl,
        "name": fullTitle,
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": speakable,
        },
      });
    }

    if (jsonLd) {
      const arr = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.push(...arr.map((schema) => rewriteUnknownUrlsToBase(schema, baseUrl)));
    }

    const scriptId = "json-ld-schema";
    if (schemas.length > 0) {
      const graph = {
        "@context": "https://schema.org",
        "@graph": schemas,
      };
      let script = document.getElementById(scriptId);
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(graph);
    } else {
      document.getElementById(scriptId)?.remove();
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogType, keywords, noindex, publishedTime, modifiedTime, location, hreflang, breadcrumb, faqItems, jsonLd, speakable, dateModified, articleSection, lang]);
}
