import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, newsletterSubscribeSchema } from "@shared/schema";

const BASE_URL = "https://fbaacademy.uz";

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/courses", priority: "0.9", changefreq: "weekly" },
  { path: "/course/acca", priority: "0.9", changefreq: "weekly" },
  { path: "/course/applied-knowledge", priority: "0.8", changefreq: "weekly" },
  { path: "/course/applied-skills", priority: "0.8", changefreq: "weekly" },
  { path: "/course/strategic-professional", priority: "0.8", changefreq: "weekly" },
  { path: "/course/dipifr", priority: "0.9", changefreq: "weekly" },
  { path: "/course/f3-financial-accounting", priority: "0.9", changefreq: "weekly" },
  { path: "/course/msfo", priority: "0.9", changefreq: "weekly" },
  { path: "/course/financial-modeling", priority: "0.9", changefreq: "weekly" },
  { path: "/course/jurisprudence", priority: "0.8", changefreq: "weekly" },
  { path: "/course/1c-course", priority: "0.8", changefreq: "weekly" },
  { path: "/teachers", priority: "0.7", changefreq: "monthly" },
  { path: "/about", priority: "0.6", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "daily" },
  { path: "/contacts", priority: "0.7", changefreq: "monthly" },
  { path: "/career", priority: "0.6", changefreq: "monthly" },
  { path: "/case-studies", priority: "0.7", changefreq: "monthly" },
  { path: "/faq", priority: "0.6", changefreq: "monthly" },
  { path: "/corporate", priority: "0.7", changefreq: "monthly" },
  { path: "/partnership", priority: "0.6", changefreq: "monthly" },
  { path: "/grants", priority: "0.6", changefreq: "weekly" },
  { path: "/privacy", priority: "0.4", changefreq: "yearly" },
];

const BLOG_POSTS = [
  "acca-imtihoniga-tayyorlanish",
  "dipifr-nima-va-nima-uchun",
  "financial-modeling-excel-dan-kariyeragacha",
  "1c-buxgalteriya-boshlangich-qollanma",
  "buxgalter-maoshi-ozbekiston-2026",
  "acca-vs-dipifr-vs-cfa-qaysi-yaxshi",
  "ozbekistonda-yurist-maoshi-va-karyera",
  "moliyaviy-tahlilchi-bolish-yol-xaritasi",
  "xalqaro-sertifikatlar-ozbekistonda",
];

const TODAY = new Date().toISOString().split("T")[0];

/** Matches SPA: English = clean URL; uz/ru = ?lang= (root uses `/?lang=`). */
function alternateHref(path: string, lang: "en" | "uz" | "ru"): string {
  const loc = `${BASE_URL}${path}`;
  if (lang === "en") {
    return loc;
  }
  const joiner = loc.includes("?") ? "&" : "?";
  return `${loc}${joiner}lang=${lang}`;
}

const CERT_PDF_MAX_BYTES = 18 * 1024 * 1024;

function isAllowedPdflinkCertificateUrl(raw: string): boolean {
  try {
    const u = new URL(raw.trim());
    if (u.protocol !== "https:" || u.hostname !== "pdflink.to") return false;
    return /^\/_\/pdf\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/?$/i.test(
      u.pathname,
    );
  } catch {
    return false;
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.use((_req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    next();
  });

  app.use("/assets", (_req, res, next) => {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    next();
  });

  app.post("/api/leads", async (req, res) => {
    try {
      const parsed = insertLeadSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid data", details: parsed.error.errors });
      }
      const lead = await storage.createLead(parsed.data);
      res.status(201).json(lead);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const parsed = newsletterSubscribeSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid email" });
      }
      await storage.subscribeNewsletter(parsed.data.email);
      res.status(201).json({ ok: true });
    } catch {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  /** Same-origin PDF stream for certificate iframe previews (pdflink.to uses X-Frame-Options: DENY). */
  app.get("/api/certificate-pdf", async (req, res) => {
    const q = req.query.url;
    const target = typeof q === "string" ? q.trim() : "";
    if (!target || !isAllowedPdflinkCertificateUrl(target)) {
      return res.status(400).type("text/plain").send("Invalid URL");
    }
    try {
      const upstream = await fetch(target, {
        headers: { Accept: "application/pdf,*/*" },
        redirect: "follow",
      });
      if (!upstream.ok) {
        return res.status(502).type("text/plain").send("Upstream error");
      }
      const len = upstream.headers.get("content-length");
      if (len && Number.parseInt(len, 10) > CERT_PDF_MAX_BYTES) {
        return res.status(413).type("text/plain").send("Too large");
      }
      const buf = Buffer.from(await upstream.arrayBuffer());
      if (buf.length > CERT_PDF_MAX_BYTES) {
        return res.status(413).type("text/plain").send("Too large");
      }
      const ct = upstream.headers.get("content-type") || "application/pdf";
      res.setHeader("Content-Type", ct.split(";")[0].trim());
      res.setHeader("Content-Disposition", "inline");
      res.setHeader("Cache-Control", "public, max-age=3600");
      res.send(buf);
    } catch {
      res.status(502).type("text/plain").send("Fetch failed");
    }
  });

  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain").send(
`User-agent: GPTBot
Allow: /
Disallow: /api/
Disallow: /cabinet

User-agent: ChatGPT-User
Allow: /
Disallow: /api/
Disallow: /cabinet

User-agent: OAI-SearchBot
Allow: /
Disallow: /api/
Disallow: /cabinet

User-agent: PerplexityBot
Allow: /
Disallow: /api/
Disallow: /cabinet

User-agent: ClaudeBot
Allow: /
Disallow: /api/
Disallow: /cabinet

User-agent: Amazonbot
Allow: /
Disallow: /api/
Disallow: /cabinet

User-agent: Bytespider
Allow: /
Disallow: /api/
Disallow: /cabinet

User-agent: *
Allow: /
Disallow: /api/
Disallow: /cabinet

Sitemap: ${BASE_URL}/sitemap.xml
`);
  });

  app.get("/sitemap.xml", (_req, res) => {
    const staticUrls = STATIC_ROUTES.map(
      (r) => `
  <url>
    <loc>${alternateHref(r.path, "en")}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${alternateHref(r.path, "en")}"/>
    <xhtml:link rel="alternate" hreflang="uz" href="${alternateHref(r.path, "uz")}"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${alternateHref(r.path, "ru")}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${alternateHref(r.path, "en")}"/>
  </url>`
    ).join("");

    const blogUrls = BLOG_POSTS.map(
      (id) => `
  <url>
    <loc>${alternateHref(`/blog/${id}`, "en")}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${alternateHref(`/blog/${id}`, "en")}"/>
    <xhtml:link rel="alternate" hreflang="uz" href="${alternateHref(`/blog/${id}`, "uz")}"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${alternateHref(`/blog/${id}`, "ru")}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${alternateHref(`/blog/${id}`, "en")}"/>
  </url>`
    ).join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticUrls}
${blogUrls}
</urlset>`;

    res.type("application/xml").send(xml);
  });

  app.get("/achievements", (_req, res) => {
    res.redirect(301, "/case-studies");
  });

  return httpServer;
}
