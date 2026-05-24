/**
 * Quick local preview of the last WordPress build (no Vite).
 * Run: npm run preview:local
 */
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../wordpress-theme/fbaacademy-spa/assets");
const port = Number(process.env.PORT || 5050);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const rel = decoded.replace(/^\/+/, "") || "index.html";
  const resolved = path.resolve(root, rel);
  if (!resolved.startsWith(root)) return null;
  return resolved;
}

const server = http.createServer((req, res) => {
  const filePath = safePath(req.url || "/");
  if (!filePath) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  const serve = (target) => {
    fs.readFile(target, (err, data) => {
      if (err) {
        fs.readFile(path.join(root, "index.html"), (err2, html) => {
          if (err2) {
            res.writeHead(500);
            res.end("Server error");
            return;
          }
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          res.end(html);
        });
        return;
      }
      const ext = path.extname(target).toLowerCase();
      res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
      res.end(data);
    });
  };

  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isFile()) {
      serve(filePath);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    if (ext && ext !== ".html") {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    serve(path.join(root, "index.html"));
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Preview: http://127.0.0.1:${port}/`);
  console.log("(Static build — run npm run build:wp after code changes)");
});
