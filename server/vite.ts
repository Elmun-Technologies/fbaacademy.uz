import express, { type Express } from "express";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";

const ASSET_EXT = /\.(avif|webp|jpe?g|png|gif|svg|ico|woff2?|ttf|eot|mp4|webm|pdf|xml|txt)$/i;

function isAssetRequest(url: string): boolean {
  const path = url.split("?")[0]?.split("#")[0] ?? "";
  return ASSET_EXT.test(path);
}

const viteLogger = createLogger();

export async function setupVite(server: Server, app: Express) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  // Serve `client/public` (e.g. `/media/...`) before Vite + SPA fallback.
  // Otherwise the catch-all below returns HTML for image URLs and previews break.
  const clientPublic = path.resolve(import.meta.dirname, "..", "client", "public");
  app.use(express.static(clientPublic));

  app.use(vite.middlewares);

  app.use("/{*path}", async (req, res, next) => {
    const url = req.originalUrl;

    if (isAssetRequest(url)) {
      res.status(404).end();
      return;
    }

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${randomUUID()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
