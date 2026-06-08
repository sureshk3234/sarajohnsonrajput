import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export const posts = [
  { slug: "ux-tips-for-founders", title: "10 UX patterns every founder should steal", category: "UI/UX Tips", read: "6 min", date: "Mar 2026", excerpt: "Small interface decisions that quietly add up to a polished, premium product." },
  { slug: "freelancing-from-karachi", title: "Freelancing from Karachi for clients abroad", category: "Freelancing", read: "8 min", date: "Feb 2026", excerpt: "The systems, tools, and time-zone math that make remote creative work actually sustainable." },
  { slug: "anatomy-of-a-landing-page", title: "Anatomy of a landing page that converts", category: "Web Design", read: "7 min", date: "Jan 2026", excerpt: "A teardown of three landing pages I shipped this year and what each one got right." },
  { slug: "typography-for-non-designers", title: "Typography for non-designers", category: "Graphic Design", read: "5 min", date: "Dec 2025", excerpt: "Three rules that fix 80% of the type problems I see in founder-built decks." },
  { slug: "writing-product-copy", title: "Writing product copy that doesn't sound written", category: "Content Writing", read: "6 min", date: "Nov 2025", excerpt: "How to edit until the voice disappears and the message lands." },
  { slug: "creative-deep-work", title: "A field guide to creative deep work", category: "Productivity", read: "5 min", date: "Oct 2025", excerpt: "The rituals I lean on when I have to ship something I'd put on the wall." },
];

export function Blog() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6">— Journal</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-3xl">
              Notes from the <em className="text-gradient">studio</em>.
            </h2>
          </div>
          <Link to="/blog" className="text-sm hover:text-blush">All posts →</Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group glass rounded-3xl overflow-hidden hover:bg-card/70 transition-colors"
            >
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="block">
                <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-blush/40 via-rose/30 to-lavender/40">
                  <div className="absolute inset-0 aurora-bg animate-aurora opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <span className="font-display text-3xl text-background/90 text-center drop-shadow">{p.category}</span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{p.date}</span> · <span>{p.read} read</span>
                  </div>
                  <h3 className="font-display text-2xl leading-tight group-hover:text-gradient transition-colors">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
