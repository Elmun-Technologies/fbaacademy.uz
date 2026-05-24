import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  base: "./",
  build: {
    outDir: path.resolve(import.meta.dirname, "wordpress-theme", "fbaacademy-spa", "assets"),
    emptyOutDir: true,
    manifest: true,
    chunkSizeWarningLimit: 2000,
  },
  server: {
    watch: {
      ignored: ["**/wordpress-theme/**", "**/dist/**"],
    },
  },
});
