import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6">— Get in touch</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Let's build something <em className="text-gradient">amazing</em> together.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md text-lg">
            Project briefs, partnership ideas, or just hello — I read everything and reply within a day.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:saraahjohnson0345@gmail.com" className="flex items-center gap-4 group">
              <span className="w-12 h-12 rounded-2xl glass flex items-center justify-center"><Mail className="w-5 h-5 text-blush" /></span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="group-hover:text-blush">saraahjohnson0345@gmail.com</div>
              </div>
            </a>
            <a href="tel:+923188272667" className="flex items-center gap-4 group">
              <span className="w-12 h-12 rounded-2xl glass flex items-center justify-center"><Phone className="w-5 h-5 text-blush" /></span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                <div className="group-hover:text-blush">+92 318 8272667</div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl glass flex items-center justify-center"><MapPin className="w-5 h-5 text-blush" /></span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                <div>Karachi, Pakistan · Remote worldwide</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="glass-strong rounded-3xl p-8 md:p-10 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Your name" name="name" placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" placeholder="jane@studio.com" />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Select label="Project type" name="type" options={["Web Design", "UI/UX", "Branding", "Video", "Writing", "Other"]} />
            <Select label="Budget" name="budget" options={["< $1k", "$1k – $5k", "$5k – $15k", "$15k +"]} />
          </div>
          <Field label="Project details" name="message" textarea placeholder="Tell me about your project, timeline, and what success looks like…" />

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-blush text-background font-medium hover:bg-rose transition-colors"
          >
            {sent ? "Thanks — I'll reply within 24h" : (<>Send message <Send className="w-4 h-4" /></>)}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, textarea }: { label: string; name: string; type?: string; placeholder?: string; textarea?: boolean }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      {textarea ? (
        <textarea required name={name} placeholder={placeholder} rows={5} className="w-full bg-background/40 border border-border rounded-2xl px-4 py-3 focus:outline-none focus:border-blush transition-colors resize-none" />
      ) : (
        <input required name={name} type={type} placeholder={placeholder} className="w-full bg-background/40 border border-border rounded-2xl px-4 py-3 focus:outline-none focus:border-blush transition-colors" />
      )}
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      <select required name={name} className="w-full bg-background/40 border border-border rounded-2xl px-4 py-3 focus:outline-none focus:border-blush transition-colors">
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
