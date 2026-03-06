import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

export function useSEO({ title, description, ogTitle, ogDescription }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) ogTitleMeta.setAttribute("content", ogTitle || title);

    const ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescMeta) ogDescMeta.setAttribute("content", ogDescription || description);
  }, [title, description, ogTitle, ogDescription]);
}
