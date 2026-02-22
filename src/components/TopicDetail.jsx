import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "../store/store";
import { domainMap, domainIcons } from "../data/index";
import FlashcardEngine from "./engines/FlashcardEngine";
import ScenarioEngine from "./engines/ScenarioEngine";
import Toast, { useToast } from "./ui/Toast";
import {
  Search,
  TrendingUp,
  FileText,
  Share2,
  Mail,
  BarChart3,
  Award,
  Target,
  Lock,
  X,
} from "lucide-react";

/* ─── icon mapping ────────────────────────────────────────────────── */

const ICON_MAP = {
  Search,
  TrendingUp,
  FileText,
  Share2,
  Mail,
  BarChart3,
  Award,
  Target,
};

/* ─── spring transition ───────────────────────────────────────────── */

const springTransition = { type: "spring", stiffness: 300, damping: 30 };

/* ─── mastery helpers ─────────────────────────────────────────────── */

function getMasteryBadge(masteryLevel) {
  if (masteryLevel >= 2) return { symbol: "\u2605", color: "text-gold", label: "Mastered" };
  if (masteryLevel >= 1) return { symbol: "\u25D1", color: "text-forest", label: "Learning" };
  return { symbol: "\u25CF", color: "text-stone", label: "New" };
}

function calculateDomainMastery(concepts, progress) {
  if (!concepts || concepts.length === 0) return 0;
  let totalMastery = 0;
  const maxPerConcept = 2;
  for (const concept of concepts) {
    const p = progress[concept.id];
    if (p) {
      totalMastery += Math.min(p.masteryLevel, maxPerConcept);
    }
  }
  return Math.round((totalMastery / (concepts.length * maxPerConcept)) * 100);
}

/* ─── component ───────────────────────────────────────────────────── */

export default function TopicDetail() {
  const activeDomain = useStore((s) => s.activeDomain);
  const progress = useStore((s) => s.progress);
  const setView = useStore((s) => s.setView);
  const addXP = useStore((s) => s.addXP);
  const addCorrect = useStore((s) => s.addCorrect);
  const addWrong = useStore((s) => s.addWrong);
  const recordActivity = useStore((s) => s.recordActivity);

  const [activeEngine, setActiveEngine] = useState("flashcards");
  const [engineRunning, setEngineRunning] = useState(false);

  const { toasts, showToast } = useToast();

  /* ── derived data ─────────────────────────────────────────────── */

  const concepts = useMemo(
    () => domainMap[activeDomain] || [],
    [activeDomain]
  );

  const flashcardConcepts = useMemo(
    () => concepts.filter((c) => c.type === "flashcard"),
    [concepts]
  );

  const scenarioConcepts = useMemo(
    () => concepts.filter((c) => c.type === "scenario"),
    [concepts]
  );

  const domainMastery = useMemo(
    () => calculateDomainMastery(concepts, progress),
    [concepts, progress]
  );

  /* ── icon resolution ──────────────────────────────────────────── */

  const iconName = domainIcons[activeDomain] || "Search";
  const DomainIcon = ICON_MAP[iconName] || Search;

  /* ── engine callbacks ─────────────────────────────────────────── */

  const handleXPGain = useCallback(
    (amount) => {
      const result = addXP(amount);
      recordActivity();
      showToast(amount);
      return result;
    },
    [addXP, recordActivity, showToast]
  );

  const handleFlashcardComplete = useCallback(
    (results) => {
      // results: { totalCards, correctCount, wrongCount, xpEarned, results? }
      // The FlashcardEngine tracks correct/wrong internally.
      // If results array is provided, update store per concept.
      if (results && results.results) {
        for (const r of results.results) {
          if (r.correct) {
            addCorrect(r.conceptId);
          } else {
            addWrong(r.conceptId);
          }
        }
      }
      setEngineRunning(false);
    },
    [addCorrect, addWrong]
  );

  const handleScenarioComplete = useCallback(
    (results) => {
      // results: { totalScenarios, correctFirst, correctSecond, failed, xpEarned }
      // The ScenarioEngine doesn't provide per-concept results in its current
      // interface, so we handle it at the aggregate level.
      // Mark all scenario concepts that were practiced.
      if (results) {
        // For scenarios, we mark activity as complete
        // The engines call onXPGain per interaction which already records activity
      }
      setEngineRunning(false);
    },
    []
  );

  const handleStartEngine = useCallback(() => {
    setEngineRunning(true);
  }, []);

  const handleExitEngine = useCallback(() => {
    setEngineRunning(false);
  }, []);

  /* ── guard ────────────────────────────────────────────────────── */

  if (!activeDomain) return null;

  /* ── pills config ─────────────────────────────────────────────── */

  const enginePills = [
    { key: "flashcards", label: "Flashcards", disabled: false },
    { key: "scenarios", label: "Scenarios", disabled: false },
    { key: "quiz", label: "Quiz", disabled: true, comingSoon: true },
  ];

  /* ── render ───────────────────────────────────────────────────── */

  return (
    <motion.div
      className="fixed inset-0 z-30 overflow-y-auto bg-linen"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={springTransition}
    >
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        {/* ── Back button ──────────────────────────────────────── */}
        <button
          onClick={() => setView("dashboard")}
          className="mb-6 cursor-pointer text-sm font-bold text-forest transition-opacity hover:opacity-70"
        >
          &larr; Back
        </button>

        {/* ── Header ───────────────────────────────────────────── */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-ink">{activeDomain}</h1>
              <span className="inline-flex items-center rounded-full bg-forest/10 px-3 py-1 font-mono text-xs font-bold text-forest">
                {domainMastery}% mastery
              </span>
            </div>
            <p className="mt-1 font-mono text-sm text-stone">
              {concepts.length} concepts
            </p>
          </div>
          <DomainIcon size={32} className="text-forest" strokeWidth={1.5} />
        </div>

        {/* ── Engine running state ─────────────────────────────── */}
        <AnimatePresence mode="wait">
          {engineRunning ? (
            <motion.div
              key="engine-active"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Exit button */}
              <button
                onClick={handleExitEngine}
                className="mb-4 flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink shadow-sm transition-colors hover:bg-stone/5"
              >
                <X size={16} />
                Exit
              </button>

              {/* Engine mount */}
              <AnimatePresence mode="wait">
                {activeEngine === "flashcards" && (
                  <motion.div
                    key="flashcard-engine"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FlashcardEngine
                      concepts={flashcardConcepts}
                      onXPGain={handleXPGain}
                      onComplete={handleFlashcardComplete}
                    />
                  </motion.div>
                )}
                {activeEngine === "scenarios" && (
                  <motion.div
                    key="scenario-engine"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ScenarioEngine
                      scenarios={scenarioConcepts}
                      onXPGain={handleXPGain}
                      onComplete={handleScenarioComplete}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="engine-selector"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* ── Engine selector pills ──────────────────────── */}
              <div className="mb-6 flex flex-wrap gap-2">
                {enginePills.map((pill) => {
                  const isActive = activeEngine === pill.key;
                  const isDisabled = pill.disabled;

                  return (
                    <div key={pill.key} className="relative">
                      <button
                        onClick={() => {
                          if (!isDisabled) setActiveEngine(pill.key);
                        }}
                        disabled={isDisabled}
                        className={`flex items-center gap-2 rounded-full px-6 py-2 text-sm transition-all ${
                          isDisabled
                            ? "cursor-not-allowed border border-stone/20 bg-white text-stone/40"
                            : isActive
                              ? "bg-forest font-bold text-white"
                              : "cursor-pointer border border-stone/20 bg-white text-ink hover:border-forest/30"
                        }`}
                        title={pill.comingSoon ? "Coming Soon" : ""}
                      >
                        {pill.comingSoon && (
                          <Lock size={14} className="text-stone/40" />
                        )}
                        {pill.label}
                        {pill.comingSoon && (
                          <span className="font-mono text-xs text-stone/40">
                            Coming Soon
                          </span>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* ── Start engine button ────────────────────────── */}
              <div className="mb-8">
                {activeEngine === "flashcards" && flashcardConcepts.length > 0 && (
                  <button
                    onClick={handleStartEngine}
                    className="rounded-2xl bg-forest px-8 py-4 text-lg font-bold text-white transition-all hover:brightness-110 active:scale-95"
                  >
                    Start Flashcards ({flashcardConcepts.length} cards)
                  </button>
                )}
                {activeEngine === "scenarios" && scenarioConcepts.length > 0 && (
                  <button
                    onClick={handleStartEngine}
                    className="rounded-2xl bg-forest px-8 py-4 text-lg font-bold text-white transition-all hover:brightness-110 active:scale-95"
                  >
                    Start Scenarios ({scenarioConcepts.length} scenarios)
                  </button>
                )}
                {activeEngine === "flashcards" && flashcardConcepts.length === 0 && (
                  <p className="font-mono text-sm text-stone">
                    No flashcard concepts available for this domain yet.
                  </p>
                )}
                {activeEngine === "scenarios" && scenarioConcepts.length === 0 && (
                  <p className="font-mono text-sm text-stone">
                    No scenario concepts available for this domain yet.
                  </p>
                )}
              </div>

              {/* ── Concept list ────────────────────────────────── */}
              <div>
                <h2 className="mb-4 text-lg font-bold text-ink">
                  All Concepts
                </h2>
                <div className="space-y-2">
                  {concepts.map((concept, index) => {
                    const conceptProgress = progress[concept.id] || {
                      masteryLevel: 0,
                      correctCount: 0,
                      wrongCount: 0,
                    };
                    const mastery = getMasteryBadge(conceptProgress.masteryLevel);
                    const hasWrong = conceptProgress.wrongCount > 0;

                    return (
                      <motion.div
                        key={concept.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.06,
                          ...springTransition,
                        }}
                        className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-lg ${mastery.color}`}
                            title={mastery.label}
                          >
                            {mastery.symbol}
                          </span>
                          <div>
                            <span className="font-bold text-ink">
                              {concept.term}
                            </span>
                            <span
                              className={`ml-2 inline-flex rounded-full px-2 py-0.5 text-xs ${
                                concept.type === "scenario"
                                  ? "bg-honey/10 text-honey"
                                  : "bg-forest/10 text-forest"
                              }`}
                            >
                              {concept.type}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {hasWrong && (
                            <span title="Has incorrect answers" className="text-sm">
                              &#9888;&#65039;
                            </span>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Toast notifications */}
      <Toast toasts={toasts} />
    </motion.div>
  );
}
