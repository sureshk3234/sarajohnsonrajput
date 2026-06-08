import { motion } from "framer-motion";

const items = [
  {
    year: "2023",
    title: "Started freelancing",
    body: "Launched as a freelance manuscript writer & graphic designer. First clients across content writing and brand work.",
  },
  {
    year: "2024",
    title: "Expanded into UI/UX",
    body: "Trained deeply in Figma, design systems, and modern web. Shipped landing pages and SaaS interfaces for early-stage founders.",
  },
  {
    year: "2025",
    title: "Premium client work",
    body: "Led full website redesigns for agencies, e-commerce, and travel platforms. Picked up POS consultant internship in parallel.",
  },
  {
    year: "2026",
    title: "Now",
    body: "Working as an end-to-end creative partner for ambitious founders — from manuscript to motion.",
  },
];

export function Timeline() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6 text-center">— Journey</p>
        <h2 className="font-display text-5xl md:text-7xl text-center leading-[0.95] tracking-tight mb-20">
          A short history of <em className="text-gradient">making things</em>.
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blush/40 to-transparent" />
          {items.map((it, idx) => (
            <motion.div
              key={it.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative grid md:grid-cols-2 gap-6 mb-16 ${idx % 2 ? "md:text-left" : "md:text-right"}`}
            >
              <div className={`pl-12 md:pl-0 ${idx % 2 ? "md:col-start-2 md:pl-16" : "md:pr-16"}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2 w-3 h-3 rounded-full bg-blush ring-4 ring-background" />
                <p className="font-display text-blush text-2xl">{it.year}</p>
                <h3 className="font-display text-3xl mt-1">{it.title}</h3>
                <p className="mt-3 text-muted-foreground">{it.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
