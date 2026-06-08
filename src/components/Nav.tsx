import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial = stored ?? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    localStorage.setItem("theme", next);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "py-3" : "py-6"}`}
    >
      <div className={`mx-auto max-w-7xl px-6 transition-all ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${scrolled ? "glass-strong" : ""}`}>
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blush via-rose to-lavender flex items-center justify-center font-display text-lg text-background">S</div>
            <span className="font-display text-lg hidden sm:block">Sara Johnson</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors rounded-full"
                activeProps={{ className: "px-4 py-2 text-sm text-foreground rounded-full bg-foreground/5" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={toggle} aria-label="Toggle theme" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-foreground/5 transition-colors">
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => setOpen(!open)} className="md:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-foreground/5" aria-label="Menu">
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
            <Link to="/contact" className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-blush text-background text-sm font-medium hover:bg-rose transition-colors">
              Hire Me
            </Link>
          </div>
        </div>

        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="px-4 py-3 text-foreground/80 hover:text-foreground">
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
