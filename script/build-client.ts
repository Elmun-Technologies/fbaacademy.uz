import { build } from "esbuild";

build({
  entryPoints: ["client/src/main.tsx"],
  bundle: true,
  outfile: "wordpress-theme/fbaacademy-spa/assets/main.js",
  format: "iife",
  define: {
    "process.env.NODE_ENV": '"production"'
  },
  loader: {
    ".tsx": "tsx",
    ".ts": "ts",
    ".js": "js",
    ".jsx": "jsx",
    ".png": "file",
    ".svg": "file"
  },
  minify: true,
}).then(() => console.log("Built successfully")).catch(() => process.exit(1));
