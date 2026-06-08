import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6">— Selected Work</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Recent projects, <em className="text-gradient">in detail</em>.
            </h2>
          </div>
          <Link to="/projects" className="group inline-flex items-center gap-2 text-sm hover:text-blush transition-colors">
            All projects <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 6).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              className={i % 3 === 0 ? "md:col-span-2" : ""}
            >
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block relative overflow-hidden rounded-3xl glass"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.category}`}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    loading="lazy"
                    width={1280}
                    height={896}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${p.accent} opacity-0 group-hover:opacity-25 mix-blend-overlay transition-opacity duration-500`} />
                  <div className="absolute top-5 right-5 w-12 h-12 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-blush mb-2">{p.category} · {p.year}</p>
                    <h3 className="font-display text-3xl md:text-4xl group-hover:text-gradient transition-colors">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-md">{p.tagline}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
