import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: string;
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
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
  keywords,
  jsonLd,
  noindex = false,
}: SEOProps) {
  const [location] = useLocation();

  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        if (selector.includes("property")) {
          el.setAttribute("property", selector.match(/property="([^"]+)"/)?.[1] || "");
        } else if (selector.includes("name")) {
          el.setAttribute("name", selector.match(/name="([^"]+)"/)?.[1] || "");
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    const canonicalUrl = `${BASE_URL}${location}`;
    const resolvedOgImage = ogImage || DEFAULT_OG_IMAGE;
    const resolvedOgTitle = ogTitle || fullTitle;
    const resolvedOgDesc = ogDescription || description;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", noindex ? "noindex,nofollow" : "index,follow");
    if (keywords) setMeta('meta[name="keywords"]', "content", keywords);

    setMeta('meta[property="og:title"]', "content", resolvedOgTitle);
    setMeta('meta[property="og:description"]', "content", resolvedOgDesc);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", resolvedOgImage);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:site_name"]', "content", SITE_NAME);
    setMeta('meta[property="og:locale"]', "content", "uz_UZ");

    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", resolvedOgTitle);
    setMeta('meta[name="twitter:description"]', "content", resolvedOgDesc);
    setMeta('meta[name="twitter:image"]', "content", resolvedOgImage);

    setLink("canonical", canonicalUrl);

    if (jsonLd) {
      const scriptId = "json-ld-schema";
      let script = document.getElementById(scriptId);
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, ogTitle, ogDescription, ogImage, keywords, jsonLd, noindex, location]);
}
