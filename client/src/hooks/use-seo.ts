import { useEffect } from "react";
import { useLocation } from "wouter";

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
}

const BASE_URL = "https://fbaacademy.uz";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = "FBA Academy";

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
}: SEOProps) {
  const [location] = useLocation();

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

    const canonicalUrl = `${BASE_URL}${location}`;
    const resolvedOgImage = ogImage || DEFAULT_OG_IMAGE;
    const resolvedOgTitle = ogTitle || fullTitle;
    const resolvedOgDesc = ogDescription || description;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1");
    if (keywords) setMeta('meta[name="keywords"]', "content", keywords);

    setMeta('meta[property="og:title"]', "content", resolvedOgTitle);
    setMeta('meta[property="og:description"]', "content", resolvedOgDesc);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", resolvedOgImage);
    setMeta('meta[property="og:image:width"]', "content", "1200");
    setMeta('meta[property="og:image:height"]', "content", "630");
    setMeta('meta[property="og:image:alt"]', "content", resolvedOgTitle);
    setMeta('meta[property="og:type"]', "content", ogType);
    setMeta('meta[property="og:site_name"]', "content", SITE_NAME);
    setMeta('meta[property="og:locale"]', "content", "uz_UZ");
    setMeta('meta[property="og:locale:alternate"]', "content", "ru_UZ");

    if (publishedTime) setMeta('meta[property="article:published_time"]', "content", publishedTime);
    if (modifiedTime) setMeta('meta[property="article:modified_time"]', "content", modifiedTime);

    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", resolvedOgTitle);
    setMeta('meta[name="twitter:description"]', "content", resolvedOgDesc);
    setMeta('meta[name="twitter:image"]', "content", resolvedOgImage);
    setMeta('meta[name="twitter:image:alt"]', "content", resolvedOgTitle);
    setMeta('meta[name="twitter:site"]', "content", "@fbaacademy_uz");

    setLink("canonical", canonicalUrl);

    if (hreflang) {
      hreflang.forEach(({ lang, url }) => {
        let el = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${lang}"]`);
        if (!el) {
          el = document.createElement("link");
          el.setAttribute("rel", "alternate");
          el.setAttribute("hreflang", lang);
          document.head.appendChild(el);
        }
        el.setAttribute("href", url);
      });
    }

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      const graph = {
        "@context": "https://schema.org",
        "@graph": schemas,
      };

      const scriptId = "json-ld-schema";
      let script = document.getElementById(scriptId);
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(graph);
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogType, keywords, jsonLd, noindex, publishedTime, modifiedTime, location]);
}
