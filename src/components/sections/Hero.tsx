import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Counter } from "@/components/Counter";
import { MagneticButton } from "@/components/MagneticButton";

const titles = ["Manuscript Writer", "Graphic Designer", "UI/UX Designer", "Web Designer", "Video Editor"];

const cards = [
  { label: "UI/UX Design", x: "8%", y: "20%", delay: 0 },
  { label: "Web Design", x: "78%", y: "18%", delay: 0.2 },
  { label: "Graphic Design", x: "4%", y: "72%", delay: 0.4 },
  { label: "Video Editing", x: "82%", y: "70%", delay: 0.6 },
  { label: "Content Writing", x: "88%", y: "44%", delay: 0.8 },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % titles.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* floating service cards */}
      {cards.map((c) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + c.delay, duration: 0.8 }}
          className="hidden lg:block absolute glass rounded-2xl px-5 py-3 text-sm font-medium animate-float"
          style={{ left: c.x, top: c.y, animationDelay: `${c.delay}s` }}
        >
          <span className="text-gradient">{c.label}</span>
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-widest mb-8"
        >
          <Sparkles className="w-3 h-3 text-blush" /> Available for new projects · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-display text-[clamp(3rem,9vw,9.5rem)] leading-[0.92] tracking-tight max-w-5xl"
        >
          Sara <em className="text-gradient not-italic">Johnson</em>
          <br />
          <span className="text-foreground/80">Creative Freelancer</span>
        </motion.h1>

        <div className="mt-8 flex items-baseline gap-3 text-2xl md:text-3xl font-display text-muted-foreground">
          <span>I'm a</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={titles[i]}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="text-gradient italic"
            >
              {titles[i]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          Designing creative digital experiences that connect, convert & inspire. I help brands grow through design,
          storytelling, content, web, UI/UX, and digital craft — out of Karachi, for clients worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <MagneticButton to="/projects" variant="primary">
            View Portfolio <ArrowRight className="w-4 h-4" />
          </MagneticButton>
          <MagneticButton to="/contact" variant="outline">Hire Me</MagneticButton>
          <MagneticButton href="#" variant="ghost">
            <Download className="w-4 h-4" /> Resume
          </MagneticButton>
        </motion.div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-3xl overflow-hidden glass"
        >
          {[
            { n: 20, s: "+", l: "Projects shipped" },
            { n: 10, s: "+", l: "Happy clients" },
            { n: 3, s: "+", l: "Years freelancing" },
            { n: 5, s: "", l: "Creative services" },
          ].map((c) => (
            <div key={c.l} className="bg-background/60 p-8">
              <div className="font-display text-5xl md:text-6xl text-gradient">
                <Counter to={c.n} suffix={c.s} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-widest">{c.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
