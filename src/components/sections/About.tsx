import { motion } from "framer-motion";
import portrait from "@/assets/sara-portrait.jpg";

const chips = [
  "Manuscript Writing", "Graphic Design", "UI/UX Design", "Web Design",
  "Amazon Listings", "Video Editing", "Brand Identity", "Landing Pages",
  "SaaS Interfaces", "Marketing Creatives", "Social Media",
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5"
        >
          <div className="relative rounded-3xl overflow-hidden glass">
            <img src={portrait} alt="Sara Johnson, creative freelancer" className="w-full aspect-[4/5] object-cover" width={896} height={1152} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <p className="text-xs uppercase tracking-widest text-blush">Based in</p>
                <p className="font-display text-xl">Karachi, Pakistan</p>
              </div>
              <div className="glass rounded-full px-3 py-1.5 text-xs">EST 2023</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:col-span-7 flex flex-col justify-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6">— About</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Design that feels like <em className="text-gradient">an answer</em>, not a guess.
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed max-w-2xl">
            <p>
              I'm a creative freelancer working across manuscript writing, graphic design, UI/UX, web, and video editing.
              I treat every brief as a chance to do something quietly extraordinary — and ship it on time.
            </p>
            <p>
              I've spent the last three years building social media systems, brand identities, landing pages, SaaS interfaces,
              and digital experiences for founders who care about the details. Remote collaboration is my default; clear
              communication is non-negotiable.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="glass rounded-full px-4 py-1.5 text-sm">{c}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
