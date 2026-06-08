import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Selected Work — Sara Johnson" },
      { name: "description", content: "A selection of recent work across web design, UI/UX, branding, e-commerce, and content creation." },
      { property: "og:title", content: "Selected Work — Sara Johnson" },
      { property: "og:description", content: "Recent projects across web, UI/UX, brand, and content." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <section className="pt-40 pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6">— Work</p>
        <h1 className="font-display text-6xl md:text-8xl leading-[0.95] tracking-tight mb-16 max-w-5xl">
          Every project is a <em className="text-gradient">small obsession</em>.
        </h1>

        <div className="space-y-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group grid md:grid-cols-12 gap-6 items-center py-6 border-b border-border/40 hover:border-blush/30 transition-colors"
              >
                <div className="md:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" width={1280} height={896} />
                </div>
                <div className="md:col-span-5">
                  <p className="text-xs uppercase tracking-widest text-blush mb-2">{p.category}</p>
                  <h2 className="font-display text-4xl md:text-5xl group-hover:text-gradient transition-colors">{p.title}</h2>
                  <p className="mt-2 text-muted-foreground">{p.tagline}</p>
                </div>
                <div className="md:col-span-2 flex md:justify-end items-center gap-2">
                  <span className="text-muted-foreground">{p.year}</span>
                  <ArrowUpRight className="w-5 h-5 text-blush transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
