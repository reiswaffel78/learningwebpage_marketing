import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const MILESTONES = new Set([7, 14, 30]);

export default function StreakBadge({ streak = 0, broken = false }) {
  if (broken) {
    return (
      <div className="inline-flex items-center gap-1.5 text-sm text-stone">
        <Flame className="h-4 w-4 text-stone opacity-40" />
        <span>Start fresh today</span>
      </div>
    );
  }

  if (streak === 0) {
    return (
      <div className="inline-flex items-center gap-1.5 text-sm text-stone">
        <Flame className="h-4 w-4 text-stone opacity-40" />
        <span>No streak</span>
      </div>
    );
  }

  const isMilestone = MILESTONES.has(streak);

  return (
    <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
      <motion.span
        key={streak}
        initial={isMilestone ? { scale: 1 } : false}
        animate={isMilestone ? { scale: [1, 1.5, 1.15] } : { scale: 1 }}
        transition={
          isMilestone
            ? { duration: 0.6, times: [0, 0.4, 1], ease: "easeOut" }
            : { duration: 0.2 }
        }
        className="inline-flex"
      >
        <Flame className="h-5 w-5 text-honey" />
      </motion.span>
      <span>
        Day {streak}
      </span>
    </div>
  );
}
