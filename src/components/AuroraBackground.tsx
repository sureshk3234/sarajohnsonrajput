import { useEffect, useState } from "react";

export function AuroraBackground() {
  const [mounted, setMounted] = useState(false);
  const [Scene, setScene] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    setMounted(true);
    // Dynamic import keeps R3F off the SSR path
    import("./AuroraScene").then((mod) => setScene(() => mod.AuroraScene));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 aurora-bg animate-aurora">
      {mounted && Scene ? <Scene /> : null}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60 pointer-events-none" />
    </div>
  );
}
