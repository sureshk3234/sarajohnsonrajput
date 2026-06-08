import { motion } from "framer-motion";
import { Code2, Palette, MousePointer2, Film, PenLine, Users } from "lucide-react";

const groups = [
  {
    Icon: Code2,
    title: "Web Design & Development",
    items: ["Responsive Design", "Landing Pages", "SaaS Websites", "Figma", "Framer", "Webflow", "HTML", "CSS", "Tailwind", "React", "UX Research", "Wireframing", "Prototyping"],
  },
  {
    Icon: Palette,
    title: "Graphic Design",
    items: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Social Media", "Branding", "Typography", "Marketing Creatives"],
  },
  {
    Icon: MousePointer2,
    title: "UI/UX Design",
    items: ["Figma", "User Research", "Design Systems", "Prototyping", "User Flows", "Wireframes"],
  },
  {
    Icon: Film,
    title: "Video Editing",
    items: ["CapCut", "Adobe Premiere Pro", "Motion Graphics", "Short-Form Edits"],
  },
  {
    Icon: PenLine,
    title: "Content Writing",
    items: ["Manuscript Writing", "Copywriting", "Blogs", "Product Descriptions", "Content Planning"],
  },
  {
    Icon: Users,
    title: "Remote Collaboration",
    items: ["Google Docs", "Zoom", "Microsoft Office", "Project Coordination"],
  },
];

export function Skills() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6">— Capabilities</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-3xl">
              A toolkit built for <em className="text-gradient">end-to-end</em> craft.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-3xl p-7 group hover:bg-card/60 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blush to-rose flex items-center justify-center text-background mb-5">
                <g.Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="text-xs px-3 py-1 rounded-full bg-foreground/5 text-foreground/80">{it}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
