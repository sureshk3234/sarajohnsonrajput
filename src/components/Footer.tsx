import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Dribbble, Figma, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Let's make something <span className="text-gradient italic">unforgettable</span>.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Available for freelance projects worldwide. Replies within 24 hours.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Navigate</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/projects" className="hover:text-blush transition-colors">Work</Link></li>
              <li><Link to="/services" className="hover:text-blush transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-blush transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-blush transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-blush transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Reach out</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-blush" /><a href="mailto:saraahjohnson0345@gmail.com" className="hover:text-blush">saraahjohnson0345@gmail.com</a></li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-blush" /><a href="tel:+923188272667" className="hover:text-blush">+92 318 8272667</a></li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blush" /><span>Karachi, Pakistan</span></li>
            </ul>
            <div className="mt-6 flex gap-2">
              {[{ Icon: Linkedin, href: "#" }, { Icon: Dribbble, href: "#" }, { Icon: Figma, href: "#" }, { Icon: Instagram, href: "#" }].map(({ Icon, href }, i) => (
                <a key={i} href={href} aria-label="social" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blush hover:text-background transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-border/40">
          <p className="text-xs text-muted-foreground">© 2026 Sara Johnson. All work shown is the property of its respective owners.</p>
          <p className="text-xs text-muted-foreground">Designed & built with care in Karachi.</p>
        </div>
      </div>
    </footer>
  );
}
