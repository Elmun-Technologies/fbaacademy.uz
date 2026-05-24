import type { UserConfig } from "vite";

/** Shared production build tuning for dev + WordPress bundles. */
export function getPerformanceBuildOptions(): Pick<UserConfig, "build"> {
  return {
    build: {
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) {
              return;
            }

            if (
              id.includes("react-dom") ||
              id.includes("/react/") ||
              id.includes("scheduler")
            ) {
              return "vendor-react";
            }

            if (id.includes("wouter") || id.includes("@tanstack/react-query")) {
              return "vendor-router";
            }

            if (id.includes("@radix-ui")) {
              return "vendor-radix";
            }

            if (id.includes("framer-motion")) {
              return "vendor-motion";
            }

            if (id.includes("lucide-react")) {
              return "vendor-icons";
            }

            if (id.includes("recharts")) {
              return "vendor-charts";
            }

            if (
              id.includes("react-hook-form") ||
              id.includes("@hookform/resolvers") ||
              id.includes("/zod/")
            ) {
              return "vendor-forms";
            }
          },
        },
      },
    },
  };
}
