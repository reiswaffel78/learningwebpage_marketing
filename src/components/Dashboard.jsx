import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Search,
  TrendingUp,
  FileText,
  Share2,
  Mail,
  BarChart3,
  Award,
  Target,
} from "lucide-react";
import { useStore } from "../store/store";
import { domainMap, domainIcons } from "../data/index";

/* ── Icon resolver ─────────────────────────────────────────────────── */
const ICON_COMPONENTS = {
  Search,
  TrendingUp,
  FileText,
  Share2,
  Mail,
  BarChart3,
  Award,
  Target,
};

function resolveIcon(domainName) {
  const iconName = domainIcons[domainName];
  return ICON_COMPONENTS[iconName] || Search;
}

/* ── Mastery helpers ───────────────────────────────────────────────── */
function getMasteryStats(domain, progress) {
  const concepts = domainMap[domain] || [];
  const total = concepts.length;
  let mastered = 0;
  concepts.forEach((c) => {
    if (progress[c.id]?.masteryLevel === 2) mastered++;
  });
  return { mastered, total };
}

function getOverallMastery(progress) {
  let mastered = 0;
  let highest = 0;
  Object.values(progress).forEach((p) => {
    if (p.masteryLevel === 2) mastered++;
    highest = Math.max(highest, p.masteryLevel);
  });
  return { mastered, highest };
}

/* ── Determine last-touched domain ─────────────────────────────────── */
function getLastTouchedDomain(progress) {
  const domains = Object.keys(domainMap);
  if (domains.length === 0) return null;

  // Find domains that have any progress entries
  let bestDomain = null;
  let bestCount = -1;

  for (const domain of domains) {
    const concepts = domainMap[domain] || [];
    let touchedCount = 0;
    concepts.forEach((c) => {
      const p = progress[c.id];
      if (p && (p.correctCount > 0 || p.wrongCount > 0)) {
        touchedCount++;
      }
    });
    if (touchedCount > bestCount) {
      bestCount = touchedCount;
      bestDomain = domain;
    }
  }

  return bestDomain || domains[0];
}

/* ── Mastery Ring SVG ──────────────────────────────────────────────── */
function MasteryRing({ mastered, total, size = 48, strokeWidth = 4 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const fraction = total > 0 ? mastered / total : 0;
  const offset = circumference * (1 - fraction);

  return (
    <svg width={size} height={size} className="shrink-0">
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(120,113,108,0.2)"
        strokeWidth={strokeWidth}
      />
      {/* Filled arc */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#166534"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1, ease: "easeOut" }}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

/* ── XP Bar Chart (mock 7-day) ─────────────────────────────────────── */
const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MOCK_HEIGHTS = [35, 60, 45, 80, 55, 90, 70]; // percentages of max

function XPBarChart() {
  const maxBarHeight = 100;
  const barWidth = 24;
  const gap = 12;
  const chartWidth = DAY_LABELS.length * (barWidth + gap) - gap + 20;
  const chartHeight = 140;
  const labelOffset = 20;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="font-bold text-ink mb-4">This Week</h3>
      <svg
        width="100%"
        viewBox={`0 0 ${chartWidth} ${chartHeight + labelOffset}`}
        className="overflow-visible"
      >
        {DAY_LABELS.map((label, i) => {
          const x = 10 + i * (barWidth + gap);
          const barHeight = (MOCK_HEIGHTS[i] / 100) * maxBarHeight;
          const y = chartHeight - barHeight;

          return (
            <g key={label}>
              <motion.rect
                x={x}
                y={y}
                width={barWidth}
                rx={4}
                fill="#166534"
                initial={{ height: 0, y: chartHeight }}
                animate={{ height: barHeight, y }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: "easeOut" }}
              />
              <text
                x={x + barWidth / 2}
                y={chartHeight + 16}
                textAnchor="middle"
                fontSize="10"
                fill="#78716C"
                fontFamily="IBM Plex Mono, monospace"
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ── Main Dashboard ────────────────────────────────────────────────── */
export default function Dashboard() {
  const greeting = useStore((s) => s.greeting);
  const streak = useStore((s) => s.streak);
  const progress = useStore((s) => s.progress);
  const setView = useStore((s) => s.setView);
  const setActiveDomain = useStore((s) => s.setActiveDomain);
  const setActiveConcept = useStore((s) => s.setActiveConcept);
  const checkStreak = useStore((s) => s.checkStreak);

  // Check streak on mount
  useEffect(() => {
    checkStreak();
  }, [checkStreak]);

  const domains = Object.keys(domainMap);
  const lastTouched = useMemo(
    () => getLastTouchedDomain(progress),
    [progress]
  );

  const lastTouchedStats = useMemo(
    () => (lastTouched ? getMasteryStats(lastTouched, progress) : null),
    [lastTouched, progress]
  );

  // Determine highest mastery badge level for last-touched domain
  const lastTouchedBadgeLevel = useMemo(() => {
    if (!lastTouched) return 0;
    const concepts = domainMap[lastTouched] || [];
    let maxLevel = 0;
    concepts.forEach((c) => {
      const ml = progress[c.id]?.masteryLevel || 0;
      if (ml > maxLevel) maxLevel = ml;
    });
    return maxLevel;
  }, [lastTouched, progress]);

  // Resume action
  const handleResume = () => {
    if (lastTouched) {
      setActiveDomain(lastTouched);
      setView("topic");
    }
  };

  // Domain tile click
  const handleDomainClick = (domain) => {
    setActiveDomain(domain);
    setView("topic");
  };

  // Daily challenge — pick random concept
  const handleDailyChallenge = () => {
    const allConcepts = domains.flatMap((d) => domainMap[d]);
    if (allConcepts.length === 0) return;
    const randomConcept =
      allConcepts[Math.floor(Math.random() * allConcepts.length)];
    setActiveDomain(randomConcept.domain);
    setActiveConcept(randomConcept.id);
    setView("flashcard");
  };

  return (
    <div className="min-h-screen bg-linen px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* ── 1. Hero slot ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-2"
      >
        <h1 className="font-drama italic text-3xl text-ink">{greeting}</h1>
        {streak > 0 ? (
          <div className="flex items-center gap-2">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <Flame className="h-5 w-5 text-honey" />
            </motion.span>
            <span className="text-sm font-semibold text-ink">
              Day {streak} 🔥
            </span>
          </div>
        ) : (
          <p className="text-stone text-sm">Start fresh today</p>
        )}
      </motion.div>

      {/* ── 2. Continue Learning card ─────────────────────────────── */}
      {lastTouched && lastTouchedStats && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-ink">{lastTouched}</h2>
              <p className="text-stone text-sm font-mono mt-1">
                {lastTouchedStats.mastered} of {lastTouchedStats.total} mastered
              </p>
            </div>
            <span className="text-lg">
              {lastTouchedBadgeLevel === 2
                ? "★"
                : lastTouchedBadgeLevel === 1
                  ? "◑"
                  : "●"}
            </span>
          </div>

          {/* Progress bar */}
          <div className="bg-stone/10 rounded-full h-2 mb-4">
            <motion.div
              className="bg-forest rounded-full h-2"
              initial={{ width: 0 }}
              animate={{
                width: `${
                  lastTouchedStats.total > 0
                    ? (lastTouchedStats.mastered / lastTouchedStats.total) * 100
                    : 0
                }%`,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>

          <button
            onClick={handleResume}
            className="bg-forest text-white rounded-2xl px-6 py-3 font-semibold text-sm hover:opacity-90 transition cursor-pointer"
          >
            Resume →
          </button>
        </motion.div>
      )}

      {/* ── 3. Domain Grid ────────────────────────────────────────── */}
      <div>
        <h2 className="font-bold text-lg text-ink mb-4">All Domains</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {domains.map((domain, i) => {
            const Icon = resolveIcon(domain);
            const { mastered, total } = getMasteryStats(domain, progress);

            return (
              <motion.div
                key={domain}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.06 * i,
                  ease: "easeOut",
                }}
                onClick={() => handleDomainClick(domain)}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-forest" />
                    <span className="font-bold text-ink">{domain}</span>
                  </div>
                  <MasteryRing mastered={mastered} total={total} />
                </div>
                <p className="text-stone text-sm font-mono">
                  {mastered} of {total} mastered
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── 4. Daily Challenge ────────────────────────────────────── */}
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="bg-white rounded-2xl p-6 border-2 border-dashed border-forest/30"
      >
        <h3 className="font-bold text-lg text-ink mb-1">🎯 Daily Challenge</h3>
        <p className="text-stone text-sm mb-4">
          Complete today's challenge for +50 XP Bonus
        </p>
        <button
          onClick={handleDailyChallenge}
          className="bg-forest text-white rounded-2xl px-6 py-3 font-semibold text-sm hover:opacity-90 transition cursor-pointer"
        >
          Start Challenge →
        </button>
      </motion.div>

      {/* ── 5. XP History micro-chart ─────────────────────────────── */}
      <XPBarChart />
    </div>
  );
}
