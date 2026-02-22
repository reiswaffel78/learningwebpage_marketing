import { motion } from "framer-motion";

const MASTERY_LEVELS = [
  { symbol: "●", colorClass: "text-stone", label: "New", scale: 1 },
  { symbol: "◑", colorClass: "text-forest", label: "Learning", scale: 1 },
  { symbol: "★", colorClass: "text-gold", label: "Mastered", scale: 1.15 },
];

export default function Badge({ level = 0 }) {
  const { symbol, colorClass, label, scale } = MASTERY_LEVELS[level] ?? MASTERY_LEVELS[0];

  return (
    <motion.span
      className={`inline-flex items-center justify-center text-lg leading-none ${colorClass}`}
      title={label}
      initial={false}
      animate={{ scale }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      aria-label={label}
    >
      {symbol}
    </motion.span>
  );
}

export function DomainBadge({ domain }) {
  if (!domain) return null;

  return (
    <span className="inline-flex items-center rounded-full bg-forest-light px-2.5 py-0.5 text-xs font-medium text-forest">
      {domain}
    </span>
  );
}

const DIFFICULTY_CONFIG = {
  Beginner: {
    bgClass: "bg-success-light",
    textClass: "text-forest",
  },
  Intermediate: {
    bgClass: "bg-honey-light",
    textClass: "text-honey",
  },
  Advanced: {
    bgClass: "bg-terracotta-light",
    textClass: "text-terracotta",
  },
};

export function DifficultyBadge({ difficulty }) {
  const config = DIFFICULTY_CONFIG[difficulty];
  if (!config) return null;

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${config.bgClass} ${config.textClass}`}
    >
      {difficulty}
    </span>
  );
}
