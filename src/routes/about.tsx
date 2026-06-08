import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Skills } from "@/components/sections/Skills";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sara Johnson" },
      { name: "description", content: "Sara Johnson is a creative freelancer in Karachi working across web, UI/UX, brand, video and editorial." },
      { property: "og:title", content: "About — Sara Johnson" },
      { property: "og:description", content: "A creative freelancer working across web, UI/UX, brand, video and editorial." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <div className="pt-24">
      <div className="pt-16">
        <About />
      </div>
      <Timeline />
      <Skills />
    </div>
  ),
});
