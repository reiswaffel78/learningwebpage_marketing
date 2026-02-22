import { useEffect, useRef, useState } from "react";

export default function XPCounter({ xp = 0 }) {
  const [displayed, setDisplayed] = useState(xp);
  const prevRef = useRef(xp);
  const rafRef = useRef(null);

  useEffect(() => {
    const from = prevRef.current;
    const to = xp;
    prevRef.current = xp;

    if (from === to) {
      setDisplayed(to);
      return;
    }

    const duration = 600;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      // spring-like ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(from + (to - from) * eased);

      setDisplayed(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [xp]);

  return (
    <div className="inline-flex items-baseline gap-2 rounded-2xl bg-card px-5 py-3 shadow-sm">
      <span className="text-2xl font-bold text-ink">{displayed.toLocaleString()}</span>
      <span className="font-mono text-sm text-stone">XP</span>
    </div>
  );
}
