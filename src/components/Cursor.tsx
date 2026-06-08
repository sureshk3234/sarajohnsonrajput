import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const sy = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });
  const [hovering, setHovering] = useState(false);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setTouch(true);
      return;
    }
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a,button,[data-magnetic]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (touch) return null;
  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="rounded-full bg-blush"
        animate={{
          width: hovering ? 48 : 12,
          height: hovering ? 48 : 12,
          x: hovering ? -24 : -6,
          y: hovering ? -24 : -6,
          opacity: hovering ? 0.5 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />
    </motion.div>
  );
}
