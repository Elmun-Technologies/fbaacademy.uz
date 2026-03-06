import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";

const BASE_URL = "https://fbaacademy.uz";

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/courses", priority: "0.9", changefreq: "weekly" },
  { path: "/course/acca", priority: "0.9", changefreq: "weekly" },
  { path: "/course/applied-knowledge", priority: "0.8", changefreq: "weekly" },
  { path: "/course/applied-skills", priority: "0.8", changefreq: "weekly" },
  { path: "/course/strategic-professional", priority: "0.8", changefreq: "weekly" },
  { path: "/course/dipifr", priority: "0.9", changefreq: "weekly" },
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
  { path: "/achievements", priority: "0.5", changefreq: "monthly" },
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

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
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

  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain").send(`User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${BASE_URL}/sitemap.xml
`);
  });

  app.get("/sitemap.xml", (_req, res) => {
    const staticUrls = STATIC_ROUTES.map(
      (r) => `
  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
    <xhtml:link rel="alternate" hreflang="uz" href="${BASE_URL}${r.path}"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${BASE_URL}${r.path}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${r.path}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${r.path}"/>
  </url>`
    ).join("");

    const blogUrls = BLOG_POSTS.map(
      (id) => `
  <url>
    <loc>${BASE_URL}/blog/${id}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="uz" href="${BASE_URL}/blog/${id}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/blog/${id}"/>
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

  return httpServer;
}
