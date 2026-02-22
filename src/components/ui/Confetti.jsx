import { useEffect, useState } from "react";

const COLORS = ["#166534", "#D97706", "#C2410C", "#CA8A04", "#166534"];
const PARTICLE_COUNT = 20;

function generateParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    delay: `${(Math.random() * 0.5).toFixed(2)}s`,
    size: Math.round(6 + Math.random() * 6),
    color: COLORS[i % COLORS.length],
  }));
}

export default function Confetti() {
  const [particles] = useState(() => generateParticles());
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <>
      {particles.map((p) => (
        <span
          key={p.id}
          className="confetti-particle absolute rounded-full"
          style={{
            left: p.left,
            top: 0,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            animationDelay: p.delay,
          }}
        />
      ))}
    </>
  );
}
