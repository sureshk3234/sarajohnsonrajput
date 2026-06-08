import { motion } from "framer-motion";
import { MousePointer2, Code2, Palette, Film, PenLine, ShoppingBag } from "lucide-react";

const services = [
  { Icon: MousePointer2, title: "UI/UX Design", body: "Modern interfaces with user-focused experiences. Wireframes to polished prototypes.", price: "From $600" },
  { Icon: Code2, title: "Web Design", body: "Premium responsive sites for businesses, startups, and personal brands.", price: "From $900" },
  { Icon: Palette, title: "Graphic Design", body: "Branding, social media, marketing creatives that hold a single voice.", price: "From $250" },
  { Icon: Film, title: "Video Editing", body: "Professional short-form, reels, promos, and motion graphics.", price: "From $200" },
  { Icon: PenLine, title: "Manuscript Writing", body: "Content creation, copy, ghostwriting, and professional editorial.", price: "From $150" },
  { Icon: ShoppingBag, title: "Amazon Listing Design", body: "Conversion-focused A+ content, main images, and storefront graphics.", price: "From $300" },
];

export function Services() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6">— Services</p>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight mb-16 max-w-4xl">
          Six disciplines, <em className="text-gradient">one creative partner</em>.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative glass rounded-3xl p-8 overflow-hidden hover:bg-card/70 transition-colors"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blush/10 group-hover:bg-blush/20 blur-3xl transition-colors" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl glass-strong flex items-center justify-center mb-6">
                  <s.Icon className="w-5 h-5 text-blush" />
                </div>
                <h3 className="font-display text-3xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
                <div className="mt-6 flex items-center justify-between pt-6 border-t border-border/40">
                  <span className="text-sm text-foreground/80">{s.price}</span>
                  <span className="text-xs uppercase tracking-widest text-blush">→ Inquire</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
