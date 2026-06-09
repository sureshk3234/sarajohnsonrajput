#!/usr/bin/env node
/**
 * Prerender script for Vercel static deployment.
 * Imports the built Nitro server and generates static HTML for all routes.
 */

import { mkdir, writeFile, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const distClientDir = join(rootDir, "dist", "client");
const serverPath = join(rootDir, "dist", "server", "index.mjs");

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

async function prerender() {
  console.log("Loading server module...");
  const server = await import(serverPath);

  const mockEnv = {};
  const mockContext = { waitUntil: () => {} };

  for (const route of routes) {
    const url = `http://localhost:3000${route}`;
    const request = new Request(url);

    try {
      const response = await server.default.fetch(request, mockEnv, mockContext);
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
      console.error(`✗ ${route}:`, err.message);
      process.exitCode = 1;
    }
  }

  console.log("\nPrerender complete!");
}

prerender();
