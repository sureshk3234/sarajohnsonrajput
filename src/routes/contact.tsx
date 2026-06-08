import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sara Johnson" },
      { name: "description", content: "Get in touch with Sara Johnson for freelance web design, UI/UX, branding, video, and content projects." },
      { property: "og:title", content: "Contact — Sara Johnson" },
      { property: "og:description", content: "Let's build something amazing together." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <div className="pt-32">
      <Contact />
    </div>
  ),
});
