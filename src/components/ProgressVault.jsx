import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "../store/store";
import { domainMap } from "../data/index";

/* ── Animated counter hook ─────────────────────────────────────────── */
function useAnimatedCounter(target, duration = 800) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (target === 0) {
      setValue(0);
      return;
    }

    startRef.current = null;

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return value;
}

/* ── Stat Card ─────────────────────────────────────────────────────── */
function StatCard({ value, label, colorClass, isSuffix, suffix }) {
  const animatedValue = useAnimatedCounter(
    typeof value === "number" ? value : 0,
    800
  );
  const isPlaceholder = value === "—";

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center">
      <span className={`font-mono text-3xl font-bold ${colorClass}`}>
        {isPlaceholder ? "—" : animatedValue}
        {!isPlaceholder && suffix ? suffix : ""}
      </span>
      <span className="text-stone text-sm mt-1">{label}</span>
    </div>
  );
}

/* ── Filter Pill ───────────────────────────────────────────────────── */
function FilterPill({ label, isActive, onClick, layoutGroup }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
        isActive
          ? "text-white"
          : "bg-white text-ink border border-stone/20 hover:border-stone/40"
      }`}
    >
      {isActive && (
        <motion.span
          layoutId={layoutGroup}
          className="absolute inset-0 bg-forest rounded-full"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
}

/* ── Concept Tile ──────────────────────────────────────────────────── */
function ConceptTile({ concept, masteryLevel }) {
  const initial = concept.term.charAt(0).toUpperCase();

  let tileClasses;
  let content = initial;

  if (masteryLevel === 2) {
    tileClasses = "bg-forest text-white";
    content = "★";
  } else if (masteryLevel === 1) {
    tileClasses = "bg-forest/20 text-forest";
  } else {
    tileClasses = "bg-stone/10 text-stone";
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      title={concept.term}
      className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold cursor-pointer select-none ${tileClasses}`}
    >
      {content}
    </motion.div>
  );
}

/* ── Weak Spot Item ────────────────────────────────────────────────── */
function WeakSpotItem({ concept, wrongCount, onPractice }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 min-w-0">
        <div className="min-w-0">
          <span className="font-bold text-ink block truncate">
            {concept.term}
          </span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-mono text-forest bg-forest/10 rounded-full px-2 py-0.5">
              {concept.domain}
            </span>
            <span className="text-terracotta text-sm font-mono">
              {wrongCount} mistake{wrongCount !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={onPractice}
        className="text-sm bg-forest text-white rounded-full px-4 py-2 font-semibold hover:opacity-90 transition cursor-pointer shrink-0"
      >
        Practice →
      </button>
    </div>
  );
}

/* ── Mastery state filter labels ───────────────────────────────────── */
const MASTERY_FILTERS = [
  { label: "All States", value: null },
  { label: "New", value: 0 },
  { label: "Learning", value: 1 },
  { label: "Mastered", value: 2 },
];

/* ── Main ProgressVault ────────────────────────────────────────────── */
export default function ProgressVault() {
  const xp = useStore((s) => s.xp);
  const streak = useStore((s) => s.streak);
  const progress = useStore((s) => s.progress);
  const setView = useStore((s) => s.setView);
  const setActiveDomain = useStore((s) => s.setActiveDomain);

  const [domainFilter, setDomainFilter] = useState(null); // null = All
  const [masteryFilter, setMasteryFilter] = useState(null); // null = All States

  const domains = Object.keys(domainMap);

  /* ── Computed stats ──────────────────────────────────────────────── */
  const conceptsMastered = useMemo(() => {
    let count = 0;
    Object.values(progress).forEach((p) => {
      if (p.masteryLevel === 2) count++;
    });
    return count;
  }, [progress]);

  const accuracyRate = useMemo(() => {
    let totalCorrect = 0;
    let totalWrong = 0;
    Object.values(progress).forEach((p) => {
      totalCorrect += p.correctCount || 0;
      totalWrong += p.wrongCount || 0;
    });
    const total = totalCorrect + totalWrong;
    if (total === 0) return "—";
    return Math.round((totalCorrect / total) * 100);
  }, [progress]);

  /* ── Filtered concepts ───────────────────────────────────────────── */
  const filteredConcepts = useMemo(() => {
    const selectedDomains = domainFilter ? [domainFilter] : domains;
    const concepts = [];

    selectedDomains.forEach((d) => {
      const domainConcepts = domainMap[d] || [];
      domainConcepts.forEach((c) => {
        const ml = progress[c.id]?.masteryLevel ?? 0;
        if (masteryFilter === null || ml === masteryFilter) {
          concepts.push({ ...c, masteryLevel: ml });
        }
      });
    });

    return concepts;
  }, [domainFilter, masteryFilter, progress, domains]);

  /* ── Weak spots (top 5 by wrongCount) ────────────────────────────── */
  const weakSpots = useMemo(() => {
    // Build a flat list of all concepts with their progress
    const allConcepts = domains.flatMap((d) => domainMap[d]);
    const withErrors = allConcepts
      .map((c) => {
        const p = progress[c.id];
        const wrongCount = p?.wrongCount || 0;
        return { concept: c, wrongCount };
      })
      .filter((item) => item.wrongCount > 0)
      .sort((a, b) => b.wrongCount - a.wrongCount)
      .slice(0, 5);

    return withErrors;
  }, [progress, domains]);

  const handlePractice = useCallback(
    (concept) => {
      setActiveDomain(concept.domain);
      setView("topic");
    },
    [setActiveDomain, setView]
  );

  return (
    <div className="min-h-screen bg-linen px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* ── 1. Header ─────────────────────────────────────────────── */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-drama italic text-3xl text-ink mb-8"
      >
        Mastery Map
      </motion.h1>

      {/* ── 2. Stats panel ────────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard value={xp} label="Total XP" colorClass="text-forest" />
        <StatCard value={streak} label="Day Streak" colorClass="text-honey" />
        <StatCard
          value={conceptsMastered}
          label="Concepts Mastered"
          colorClass="text-ink"
        />
        <StatCard
          value={accuracyRate}
          label="Accuracy Rate"
          colorClass="text-ink"
          suffix={accuracyRate !== "—" ? "%" : ""}
        />
      </div>

      {/* ── 3. Filter controls ────────────────────────────────────── */}
      <div className="space-y-3">
        {/* Domain filters */}
        <div className="flex flex-wrap gap-2">
          <FilterPill
            label="All"
            isActive={domainFilter === null}
            onClick={() => setDomainFilter(null)}
            layoutGroup="domain-filter"
          />
          {domains.map((d) => (
            <FilterPill
              key={d}
              label={d}
              isActive={domainFilter === d}
              onClick={() => setDomainFilter(d)}
              layoutGroup="domain-filter"
            />
          ))}
        </div>

        {/* Mastery state filters */}
        <div className="flex flex-wrap gap-2">
          {MASTERY_FILTERS.map((mf) => (
            <FilterPill
              key={mf.label}
              label={mf.label}
              isActive={masteryFilter === mf.value}
              onClick={() => setMasteryFilter(mf.value)}
              layoutGroup="mastery-filter"
            />
          ))}
        </div>
      </div>

      {/* ── 4. Concept grid ───────────────────────────────────────── */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
        <AnimatePresence mode="popLayout">
          {filteredConcepts.map((c) => (
            <ConceptTile
              key={c.id}
              concept={c}
              masteryLevel={c.masteryLevel}
            />
          ))}
        </AnimatePresence>
      </div>

      {filteredConcepts.length === 0 && (
        <p className="text-stone text-sm text-center py-8">
          No concepts match the current filters.
        </p>
      )}

      {/* ── 5. Weak spots feed ────────────────────────────────────── */}
      <div>
        <h2 className="font-bold text-lg text-ink mb-4">Areas to Improve</h2>
        {weakSpots.length > 0 ? (
          <div className="space-y-3">
            {weakSpots.map(({ concept, wrongCount }) => (
              <WeakSpotItem
                key={concept.id}
                concept={concept}
                wrongCount={wrongCount}
                onPractice={() => handlePractice(concept)}
              />
            ))}
          </div>
        ) : (
          <p className="text-stone text-sm">
            No weak spots yet — keep learning!
          </p>
        )}
      </div>
    </div>
  );
}
