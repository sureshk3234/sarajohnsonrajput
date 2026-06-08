import { createFileRoute } from "@tanstack/react-router";
import { Blog } from "@/components/sections/Blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — Sara Johnson" },
      { name: "description", content: "Notes on UI/UX, freelancing, web design, brand, content writing, and creative productivity." },
      { property: "og:title", content: "Journal — Sara Johnson" },
      { property: "og:description", content: "Notes from the studio." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: () => (
    <div className="pt-32">
      <Blog />
    </div>
  ),
});
