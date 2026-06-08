import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Case Study · Sara Johnson` },
          { name: "description", content: loaderData.project.tagline },
          { property: "og:title", content: `${loaderData.project.title} — Case Study` },
          { property: "og:description", content: loaderData.project.tagline },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/projects/${params.slug}` },
          { property: "og:image", content: loaderData.project.image },
        ]
      : [],
    links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
  }),
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="pt-32 pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-blush mb-12">
          <ArrowLeft className="w-4 h-4" /> All projects
        </Link>

        <motion.header initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-xs uppercase tracking-[0.3em] text-blush mb-4">{project.category} · {project.year}</p>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.95] tracking-tight">{project.title}</h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl">{project.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.deliverables.map((d: string) => (
              <span key={d} className="glass rounded-full px-4 py-1.5 text-sm">{d}</span>
            ))}
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-16 rounded-3xl overflow-hidden glass"
        >
          <img src={project.image} alt={`${project.title} hero`} className="w-full aspect-[16/10] object-cover" width={1280} height={896} />
        </motion.div>

        <div className="mt-24 grid md:grid-cols-3 gap-12">
          <Block title="Overview" body={project.overview} />
          <Block title="The Challenge" body={project.challenge} />
          <Block title="Research" body={project.research} />
        </div>

        <Block className="mt-16" title="Process & Design" body={project.process} />

        <div className="mt-24">
          <h2 className="font-display text-3xl mb-8">UI showcase</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative aspect-square rounded-2xl overflow-hidden glass bg-gradient-to-br ${project.accent}`}
              >
                <div className="absolute inset-0 aurora-bg opacity-60 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center font-display text-2xl text-background/90">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="font-display text-3xl mb-8">Results</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {project.results.map((r: { label: string; value: string }) => (
              <div key={r.label} className="glass rounded-3xl p-8">
                <div className="font-display text-5xl text-gradient">{r.value}</div>
                <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{r.label}</div>
              </div>
            ))}
          </div>
        </div>

        <figure className="mt-24 glass-strong rounded-3xl p-10 md:p-14">
          <blockquote className="font-display text-3xl md:text-4xl leading-tight">
            "{project.testimonial.quote}"
          </blockquote>
          <figcaption className="mt-6 text-sm">
            <span className="text-foreground">{project.testimonial.name}</span>
            <span className="text-muted-foreground"> · {project.testimonial.role}</span>
          </figcaption>
        </figure>

        <Link to="/projects/$slug" params={{ slug: next.slug }} className="mt-24 group flex items-center justify-between gap-6 py-10 border-t border-border/40 hover:border-blush/30">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Next project</p>
            <h3 className="font-display text-4xl md:text-5xl group-hover:text-gradient transition-colors">{next.title}</h3>
          </div>
          <ArrowUpRight className="w-8 h-8 text-blush group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}

function Block({ title, body, className = "" }: { title: string; body: string; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <h2 className="text-xs uppercase tracking-[0.3em] text-blush mb-4">{title}</h2>
      <p className="text-lg text-foreground/90 leading-relaxed">{body}</p>
    </motion.div>
  );
}
