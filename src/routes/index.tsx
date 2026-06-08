import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sara Johnson — Creative Freelancer · UI/UX, Web & Brand Design" },
      { name: "description", content: "Designing creative digital experiences that connect, convert & inspire. Freelance web, UI/UX, brand and content design from Karachi." },
      { property: "og:title", content: "Sara Johnson — Creative Freelancer" },
      { property: "og:description", content: "Designing creative digital experiences that connect, convert & inspire." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
