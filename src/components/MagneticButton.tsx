import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  onClick?: () => void;
  className?: string;
};

export function MagneticButton({ children, to, href, variant = "primary", onClick, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 15, stiffness: 200 });
  const sy = useSpring(y, { damping: 15, stiffness: 200 });

  const handleMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  const base =
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-colors";
  const styles = {
    primary: "bg-blush text-background hover:bg-rose",
    ghost: "text-foreground/80 hover:text-foreground",
    outline: "border border-foreground/20 text-foreground hover:bg-foreground/5 backdrop-blur",
  }[variant];

  const inner = (
    <motion.div
      ref={ref}
      data-magnetic
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={`${base} ${styles} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (to) return <Link to={to}>{inner}</Link>;
  if (href) return <a href={href} target="_blank" rel="noreferrer">{inner}</a>;
  return inner;
}
