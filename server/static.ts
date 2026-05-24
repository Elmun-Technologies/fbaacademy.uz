import express, { type Express } from "express";
import fs from "fs";
import path from "path";

const ASSET_EXT = /\.(avif|webp|jpe?g|png|gif|svg|ico|woff2?|ttf|eot|mp4|webm|pdf|xml|txt)$/i;

function isAssetRequest(url: string): boolean {
  const pathname = url.split("?")[0]?.split("#")[0] ?? "";
  return ASSET_EXT.test(pathname);
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // SPA fallback — never serve HTML for missing static assets (breaks `<picture>` / images).
  app.use("/{*path}", (req, res) => {
    if (isAssetRequest(req.originalUrl)) {
      res.status(404).end();
      return;
    }
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
