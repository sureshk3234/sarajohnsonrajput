#!/usr/bin/env node
/**
 * Prerender script for Vercel static deployment.
 * Imports the built SSR server and generates static HTML for all routes.
 */

import { access, mkdir, writeFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const distClientDir = join(rootDir, "dist", "client");

const serverCandidates = [
  join(rootDir, "dist", "server", "index.mjs"),
  join(rootDir, "dist", "server", "_ssr", "index.mjs"),
  join(rootDir, ".output", "server", "index.mjs"),
  join(rootDir, ".vercel", "output", "functions", "__nitro.func", "index.mjs"),
  join(rootDir, "node_modules", ".nitro", "vite", "services", "ssr", "index.js"),
];

const routes = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/projects",
  "/blog",
  "/projects/luxe",
  "/projects/nova",
  "/projects/bloom",
  "/projects/fitzone",
  "/projects/skytravel",
  "/projects/reverie",
  "/projects/youtube",
  "/projects/amazon",
  "/blog/design-systems",
  "/blog/typography",
  "/blog/accessibility",
  "/blog/micro-interactions",
  "/blog/performance",
  "/blog/collaboration",
];

async function findServerPath() {
  for (const candidate of serverCandidates) {
    try {
      await access(candidate);
      return candidate;
    } catch {
      // try next candidate
    }
  }

  throw new Error(
    `Could not find a built SSR entry. Checked:\n${serverCandidates
      .map((candidate) => `- ${relative(rootDir, candidate)}`)
      .join("\n")}`,
  );
}

async function prerender() {
  const serverPath = await findServerPath();
  console.log(`Loading server module from ${relative(rootDir, serverPath)}...`);
  const serverModule = await import(pathToFileURL(serverPath).href);
  const server = serverModule.default ?? serverModule;

  if (typeof server.fetch !== "function") {
    throw new Error(`SSR entry at ${relative(rootDir, serverPath)} does not export a fetch handler.`);
  }

  const mockEnv = {};
  const mockContext = { waitUntil: () => {} };

  for (const route of routes) {
    const url = `http://localhost:3000${route}`;
    const request = new Request(url);

    try {
      const response = await server.fetch(request, mockEnv, mockContext);
      const html = await response.text();

      // Route " / "  →  dist/client/index.html
      // Route "/about" → dist/client/about/index.html
      const filePath =
        route === "/"
          ? join(distClientDir, "index.html")
          : join(distClientDir, route, "index.html");

      await mkdir(dirname(filePath), { recursive: true });
      await writeFile(filePath, html);

      console.log(`✓ ${route}  →  ${filePath.replace(rootDir + "/", "")}`);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`✗ ${route}:`, message);
      process.exitCode = 1;
    }
  }

  console.log("\nPrerender complete!");
}

prerender();
