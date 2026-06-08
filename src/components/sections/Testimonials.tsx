import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  { quote: "Sara doesn't just deliver — she elevates. Our launch felt like a moment, not a meeting.", name: "Ayaan Malik", role: "Founder, Reverie AI", initials: "AM" },
  { quote: "The fastest, most thoughtful designer I've worked with. The result spoke for itself.", name: "Hira Qureshi", role: "Creative Director, Nova", initials: "HQ" },
  { quote: "Mobile conversion nearly doubled in the first month. The site finally feels like our brand.", name: "Sana Iqbal", role: "Head of E-commerce, Luxe Beauty", initials: "SI" },
  { quote: "Sara turned a messy product into something our team genuinely loves opening.", name: "Daniyal Khan", role: "Co-founder, FitZone", initials: "DK" },
  { quote: "Hit Amazon page one in three weeks. The listing pack was the best money I've spent.", name: "Imran Yusuf", role: "Founder, Indie Skincare Co.", initials: "IY" },
  { quote: "My YouTube grew more in 3 months than the entire previous year. The thumbnails alone changed everything.", name: "Bilal Raza", role: "Tech Creator", initials: "BR" },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6">— Testimonials</p>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight mb-16 max-w-4xl">
          What founders say <em className="text-gradient">after the launch</em>.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-3xl p-8 flex flex-col"
            >
              <Quote className="w-6 h-6 text-blush mb-4" />
              <blockquote className="text-foreground/90 leading-relaxed flex-1">"{r.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-border/40">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blush to-lavender flex items-center justify-center text-xs font-medium text-background">
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
