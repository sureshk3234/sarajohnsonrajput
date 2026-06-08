import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/sections/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sara Johnson" },
      { name: "description", content: "UI/UX, Web Design, Graphic Design, Video Editing, Manuscript Writing, and Amazon Listing Design." },
      { property: "og:title", content: "Services — Sara Johnson" },
      { property: "og:description", content: "Six disciplines, one creative partner." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <div className="pt-32">
      <Services />
    </div>
  ),
});
