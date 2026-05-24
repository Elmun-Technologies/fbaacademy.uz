#!/usr/bin/env node
/**
 * esbuild-based WordPress theme build
 * Bypasses Vite/Rollup entirely to avoid the macOS ARM deadlock bug in Rollup 4.x
 */
import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, join, relative, extname } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const CLIENT_SRC = resolve(ROOT, 'client', 'src');
const OUT_DIR = resolve(ROOT, 'wordpress-theme', 'fbaacademy-spa', 'assets');
const PUBLIC_DIR = resolve(ROOT, 'client', 'public');

console.log('🔨 FBA Academy esbuild WordPress theme build');
console.log('   Root:', ROOT);
console.log('   Output:', OUT_DIR);

// Clean output dir (keep branding/)
function cleanDir(dir) {
  if (!existsSync(dir)) return;
  for (const f of readdirSync(dir)) {
    if (f === 'branding') continue; // keep branding assets
    const full = join(dir, f);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      cleanDir(full);
      try { require('fs').rmdirSync(full); } catch(e) {}
    } else {
      import('fs').then(fs => fs.unlinkSync(full));
    }
  }
}

// Use dynamic import for fs operations
import('fs').then(async (fs) => {
  // Clean assets dir
  if (existsSync(OUT_DIR)) {
    for (const f of readdirSync(OUT_DIR)) {
      if (f === 'branding') continue;
      const full = join(OUT_DIR, f);
      try {
        if (statSync(full).isDirectory()) {
          fs.rmSync(full, { recursive: true, force: true });
        } else {
          fs.unlinkSync(full);
        }
      } catch(e) {}
    }
  }
  mkdirSync(OUT_DIR, { recursive: true });

  // Path aliases
  const alias = {
    '@/': CLIENT_SRC + '/',
    '@shared/': resolve(ROOT, 'shared') + '/',
  };

  // Plugin for path aliases - resolves @/ and @shared/ with extension fallback
  const aliasPlugin = {
    name: 'alias',
    setup(build) {
      const extensions = ['.tsx', '.ts', '.jsx', '.js', '/index.tsx', '/index.ts', '/index.jsx', '/index.js'];

      function resolveWithExtensions(base) {
        // If exact path exists and is a file, use it
        if (existsSync(base)) {
          const stat = statSync(base);
          if (stat.isFile()) return base;
          // It's a directory - look for index files inside
          for (const ext of ['.tsx', '.ts', '.jsx', '.js']) {
            const candidate = join(base, 'index' + ext);
            if (existsSync(candidate)) return candidate;
          }
        }
        // Try adding extensions
        for (const ext of ['.tsx', '.ts', '.jsx', '.js']) {
          const candidate = base + ext;
          if (existsSync(candidate)) return candidate;
        }
        // Try as directory with index
        for (const ext of ['.tsx', '.ts', '.jsx', '.js']) {
          const candidate = join(base, 'index' + ext);
          if (existsSync(candidate)) return candidate;
        }
        return base; // let esbuild report the error
      }

      build.onResolve({ filter: /^@\// }, args => ({
        path: resolveWithExtensions(resolve(CLIENT_SRC, args.path.slice(2))),
      }));
      build.onResolve({ filter: /^@shared\// }, args => ({
        path: resolveWithExtensions(resolve(ROOT, 'shared', args.path.slice(8))),
      }));
    },
  };

  // CSS modules / Tailwind handled via postcss - we use esbuild css
  const result = await esbuild.build({
    entryPoints: [resolve(CLIENT_SRC, 'main.tsx')],
    bundle: true,
    format: 'esm',
    splitting: true,
    outdir: OUT_DIR,
    entryNames: 'main',
    chunkNames: 'chunks/[name]-[hash]',
    assetNames: 'assets/[name]-[hash]',
    minify: true,
    sourcemap: false,
    target: ['es2020', 'chrome80', 'firefox78', 'safari14'],
    jsx: 'automatic',
    define: {
      'process.env.NODE_ENV': '"production"',
      'import.meta.env.MODE': '"production"',
      'import.meta.env.DEV': 'false',
      'import.meta.env.PROD': 'true',
      'import.meta.env.SSR': 'false',
      'import.meta.env.BASE_URL': '"./"',
      'import.meta.env.VITE_API_URL': '""',
    },
    loader: {
      '.tsx': 'tsx',
      '.ts': 'ts',
      '.jsx': 'jsx',
      '.js': 'js',
      '.css': 'css',
      '.svg': 'dataurl',
      '.png': 'file',
      '.jpg': 'file',
      '.jpeg': 'file',
      '.gif': 'file',
      '.webp': 'file',
      '.woff': 'file',
      '.woff2': 'file',
      '.ttf': 'file',
    },
    plugins: [aliasPlugin],
    metafile: true,
  });

  console.log('✅ Build complete!');

  // Generate manifest.json (Vite-compatible format)
  // functions.php uses fba_find_entry_chunk_key() which returns the FIRST isEntry:true key
  // So we ONLY mark main.tsx as isEntry, others are chunk entries (not the SPA entry)
  const manifest = {};
  const outputs = result.metafile.outputs;
  const MAIN_ENTRY = 'client/src/main.tsx';

  for (const [outPath, info] of Object.entries(outputs)) {
    const relOut = relative(OUT_DIR, resolve(ROOT, outPath));
    if (info.entryPoint) {
      const relEntry = relative(ROOT, resolve(ROOT, info.entryPoint));
      const isMainEntry = relEntry === MAIN_ENTRY;
      manifest[relEntry] = {
        file: relOut,
        isEntry: isMainEntry,  // Only main.tsx is the SPA entry point
        src: relEntry,
      };
      // Add CSS files (only if cssBundle exists)
      if (info.cssBundle) {
        const relCss = relative(OUT_DIR, resolve(ROOT, info.cssBundle));
        manifest[relEntry].css = [relCss];
      }
    }
  }

  // Ensure main entry is first in manifest (important for fba_find_entry_chunk_key)
  if (manifest[MAIN_ENTRY]) {
    const mainEntry = manifest[MAIN_ENTRY];
    delete manifest[MAIN_ENTRY];
    const reordered = { [MAIN_ENTRY]: mainEntry, ...manifest };
    Object.assign(manifest, reordered);
  }

  // Write manifest to .vite/manifest.json (where functions.php expects it)
  const viteDir = join(OUT_DIR, '.vite');
  mkdirSync(viteDir, { recursive: true });
  writeFileSync(join(viteDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('📋 Manifest written to: .vite/manifest.json');
  console.log('   Main entry file:', manifest[MAIN_ENTRY]?.file);
  console.log('   Main entry CSS:', manifest[MAIN_ENTRY]?.css);

  // Print output summary
  const text = await esbuild.analyzeMetafile(result.metafile, { verbose: false });
  console.log('\n📦 Bundle sizes:');
  console.log(text);

}).catch(err => {
  console.error('❌ Build failed:', err.message);
  process.exit(1);
});
