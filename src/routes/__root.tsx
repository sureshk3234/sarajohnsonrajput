import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Cursor } from "@/components/Cursor";
import { AuroraBackground } from "@/components/AuroraBackground";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-9xl text-gradient">404</h1>
        <p className="mt-4 text-muted-foreground">This page wandered off the map.</p>
        <a href="/" className="mt-6 inline-flex px-6 py-3 rounded-full bg-blush text-background text-sm">Go home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl">Something broke.</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try refreshing or head home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="px-5 py-2.5 rounded-full bg-blush text-background text-sm">Try again</button>
          <a href="/" className="px-5 py-2.5 rounded-full border border-border text-sm">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sara Johnson — Creative Freelancer · UI/UX, Web & Brand Design" },
      { name: "description", content: "Sara Johnson is a creative freelancer in Karachi designing web, UI/UX, brand, and content experiences that connect, convert and inspire." },
      { name: "author", content: "Sara Johnson" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sara Johnson" },
      { property: "og:title", content: "Sara Johnson — Creative Freelancer" },
      { property: "og:description", content: "Designing creative digital experiences that connect, convert & inspire." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0a0a0f" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Sara Johnson",
        jobTitle: "Creative Freelancer",
        url: "https://saraahjohnson.vercel.app",
        email: "saraahjohnson0345@gmail.com",
        telephone: "+92-318-8272667",
        address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
        knowsAbout: ["UI/UX Design", "Web Design", "Graphic Design", "Video Editing", "Manuscript Writing"],
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative noise">
        <AuroraBackground />
        <Cursor />
        <ScrollProgress />
        <Nav />
        <main className="relative z-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
