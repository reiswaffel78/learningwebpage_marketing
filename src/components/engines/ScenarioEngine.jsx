import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "../ui/Confetti";

const spring = { type: "spring", stiffness: 400, damping: 30 };

const DIFFICULTY_COLORS = {
  Beginner: {
    bg: "bg-forest/15",
    text: "text-forest",
    border: "border-forest",
  },
  Intermediate: {
    bg: "bg-honey/15",
    text: "text-honey",
    border: "border-honey",
  },
  Advanced: {
    bg: "bg-terracotta/15",
    text: "text-terracotta",
    border: "border-terracotta",
  },
};

function highlightNumbers(text) {
  if (!text) return text;
  // Split on numbers (including decimals, commas, percentages, dollar signs)
  const parts = text.split(/(\$?[\d,]+\.?\d*%?)/g);
  return parts.map((part, i) => {
    if (/^\$?[\d,]+\.?\d*%?$/.test(part) && part.length > 0) {
      return (
        <span key={i} className="font-mono font-bold text-honey">
          {part}
        </span>
      );
    }
    return part;
  });
}

function validateAnswer(userAnswer, correctAnswer) {
  const parsed = parseFloat(userAnswer);
  if (isNaN(parsed)) return false;
  return Math.abs(parsed - correctAnswer) <= 0.1;
}

export default function ScenarioEngine({ scenarios = [], onComplete, onXPGain }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [results, setResults] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);
  const [bounceKey, setBounceKey] = useState(0);

  const inputRef = useRef(null);
  const totalXPRef = useRef(0);

  const scenario = scenarios[currentIndex];
  const progress = scenarios.length > 0 ? ((currentIndex) / scenarios.length) * 100 : 0;

  const handleSubmit = useCallback(() => {
    if (!userAnswer.trim() || isCorrect !== null) return;

    const correct = validateAnswer(userAnswer, scenario.correctAnswer);
    const currentAttempt = attempts + 1;

    if (correct) {
      setIsCorrect(true);
      setShowSolution(true);
      setShowHint(false);

      const xp = currentAttempt === 1 ? 25 : 10;
      totalXPRef.current += xp;
      onXPGain?.(xp);

      setBounceKey((k) => k + 1);

      setResults((prev) => [
        ...prev,
        {
          id: scenario.id,
          outcome: currentAttempt === 1 ? "first" : "second",
          xp,
        },
      ]);
      setAttempts(currentAttempt);
    } else {
      if (currentAttempt >= 2) {
        // Second wrong attempt
        setIsCorrect(false);
        setShowSolution(true);
        setShowHint(false);
        setResults((prev) => [
          ...prev,
          { id: scenario.id, outcome: "failed", xp: 0 },
        ]);
        setAttempts(currentAttempt);
      } else {
        // First wrong attempt
        setAttempts(currentAttempt);
        setShowHint(true);
        setUserAnswer("");
        setShakeKey((k) => k + 1);
        // Re-focus the input after clearing
        setTimeout(() => inputRef.current?.focus(), 50);
      }
    }
  }, [userAnswer, isCorrect, attempts, scenario, onXPGain]);

  const handleNext = useCallback(() => {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= scenarios.length) {
      setIsComplete(true);

      const correctFirst = results.filter((r) => r.outcome === "first").length +
        (isCorrect === true && attempts === 1 ? 0 : 0); // Already counted in results
      const correctSecond = results.filter((r) => r.outcome === "second").length;
      const failed = results.filter((r) => r.outcome === "failed").length;

      onComplete?.({
        totalScenarios: scenarios.length,
        correctFirst,
        correctSecond,
        failed,
        xpEarned: totalXPRef.current,
      });
    } else {
      setCurrentIndex(nextIndex);
      setUserAnswer("");
      setAttempts(0);
      setShowHint(false);
      setShowSolution(false);
      setIsCorrect(null);
    }
  }, [currentIndex, scenarios.length, results, isCorrect, attempts, onComplete]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        if (showSolution || isCorrect !== null) {
          handleNext();
        } else {
          handleSubmit();
        }
      }
    },
    [handleSubmit, handleNext, showSolution, isCorrect]
  );

  // Completion Screen
  if (isComplete) {
    const correctFirst = results.filter((r) => r.outcome === "first").length;
    const correctSecond = results.filter((r) => r.outcome === "second").length;
    const failed = results.filter((r) => r.outcome === "failed").length;

    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <Confetti active />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={spring}
          className="rounded-3xl bg-white p-10 text-center shadow-sm"
        >
          <h2 className="font-drama text-3xl italic text-ink">
            Scenarios Complete!
          </h2>

          <p className="mt-4 text-lg font-bold text-forest font-mono">
            +{totalXPRef.current} XP earned
          </p>

          <div className="mx-auto mt-8 grid max-w-sm grid-cols-3 gap-4">
            <div className="rounded-2xl bg-forest/5 p-4">
              <div className="text-2xl font-bold font-mono text-forest">
                {correctFirst}
              </div>
              <div className="mt-1 text-xs text-stone font-mono">
                First try
              </div>
            </div>
            <div className="rounded-2xl bg-honey/5 p-4">
              <div className="text-2xl font-bold font-mono text-honey">
                {correctSecond}
              </div>
              <div className="mt-1 text-xs text-stone font-mono">
                Second try
              </div>
            </div>
            <div className="rounded-2xl bg-terracotta/5 p-4">
              <div className="text-2xl font-bold font-mono text-terracotta">
                {failed}
              </div>
              <div className="mt-1 text-xs text-stone font-mono">
                Missed
              </div>
            </div>
          </div>

          <button
            onClick={() => onComplete?.({
              totalScenarios: scenarios.length,
              correctFirst,
              correctSecond,
              failed,
              xpEarned: totalXPRef.current,
            })}
            className="mt-8 rounded-2xl bg-forest px-8 py-4 text-lg font-bold text-white transition-all hover:brightness-110"
          >
            Back to Topic
          </button>
        </motion.div>
      </div>
    );
  }

  if (!scenario) return null;

  const diffColors = DIFFICULTY_COLORS[scenario.difficulty] ?? DIFFICULTY_COLORS.Beginner;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-sm text-stone">
            Scenario {currentIndex + 1} of {scenarios.length}
          </span>
          <span className="font-mono text-sm text-stone">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-stone/10">
          <motion.div
            className="h-full rounded-full bg-forest"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Two-panel layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Panel - Scenario Card */}
        <motion.div
          key={scenario.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={spring}
          className="rounded-3xl bg-ink p-8 text-white"
        >
          {/* Badges */}
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {scenario.domain && (
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-mono text-white/70">
                {scenario.domain}
              </span>
            )}
            {scenario.difficulty && (
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-mono font-medium ${diffColors.bg} ${diffColors.text}`}
              >
                {scenario.difficulty}
              </span>
            )}
          </div>

          {/* Term heading */}
          <h3 className="mb-4 font-drama text-2xl italic text-white/90">
            {scenario.term}
          </h3>

          {/* Narrative */}
          <p className="leading-relaxed text-white/80">
            {highlightNumbers(scenario.narrative)}
          </p>

          {/* Variables display */}
          {scenario.variables && Object.keys(scenario.variables).length > 0 && (
            <div className="mt-6 space-y-2 rounded-2xl bg-white/5 p-4">
              <span className="text-xs font-mono uppercase tracking-wider text-white/40">
                Given Data
              </span>
              {Object.entries(scenario.variables).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center justify-between font-mono text-sm"
                >
                  <span className="text-white/60">{key}</span>
                  <span className="font-bold text-honey">{value}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Right Panel - Answer Interface */}
        <motion.div
          key={`answer-${scenario.id}-${bounceKey}`}
          initial={bounceKey > 0 ? { scale: 1 } : { opacity: 0, x: 20 }}
          animate={
            bounceKey > 0
              ? {
                  scale: [1, 1.04, 1],
                  opacity: 1,
                  x: 0,
                }
              : { opacity: 1, x: 0 }
          }
          transition={
            bounceKey > 0
              ? { duration: 0.2, times: [0, 0.5, 1] }
              : spring
          }
          className="flex flex-col rounded-3xl bg-white p-8 shadow-sm"
        >
          {/* Attempt counter */}
          <div className="mb-4 text-right">
            <span className="font-mono text-sm text-stone">
              Attempt {Math.min(attempts + 1, 2)} of 2
            </span>
          </div>

          {/* Input area */}
          <div className="flex items-center gap-3">
            <motion.div
              key={`shake-${shakeKey}`}
              animate={
                shakeKey > 0
                  ? {
                      x: [0, -6, 6, -4, 4, 0],
                    }
                  : {}
              }
              transition={
                shakeKey > 0
                  ? { duration: 0.3, ease: "easeOut" }
                  : {}
              }
              className="flex-1"
            >
              <input
                ref={inputRef}
                type="text"
                inputMode="decimal"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Your answer"
                disabled={isCorrect !== null || (attempts >= 2 && !showSolution)}
                className={`w-full rounded-2xl border-2 p-4 text-center font-mono text-3xl outline-none transition-all ${
                  isCorrect === true
                    ? "border-forest bg-forest/5 text-forest"
                    : isCorrect === false
                      ? "border-terracotta bg-terracotta/5 text-terracotta"
                      : "border-stone/20 text-ink focus:border-forest focus:ring-2 focus:ring-forest/20"
                }`}
              />
            </motion.div>
            {scenario.unit && (
              <span className="font-mono text-xl text-stone">
                {scenario.unit}
              </span>
            )}
          </div>

          {/* Calculate button */}
          {isCorrect === null && attempts < 2 && (
            <button
              onClick={handleSubmit}
              disabled={!userAnswer.trim()}
              className="mt-4 w-full rounded-2xl bg-forest px-8 py-4 text-lg font-bold text-white transition-all hover:brightness-110 disabled:opacity-40 disabled:hover:brightness-100"
            >
              Calculate
            </button>
          )}

          {/* Hint (first wrong attempt) */}
          <AnimatePresence>
            {showHint && isCorrect === null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ ...spring, opacity: { duration: 0.2 } }}
                className="overflow-hidden"
              >
                <div className="mt-4 rounded-2xl border-l-4 border-honey bg-honey/10 p-4">
                  <p className="mb-1 text-sm font-bold text-honey">
                    Formula Hint
                  </p>
                  <p className="font-mono text-sm text-ink/80">
                    {scenario.formula}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Solution - Correct */}
          <AnimatePresence>
            {showSolution && isCorrect === true && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ ...spring, opacity: { duration: 0.2 } }}
                className="overflow-hidden"
              >
                <div className="mt-4 rounded-2xl border-l-4 border-forest bg-forest/5 p-6">
                  <p className="mb-2 text-lg font-bold text-forest">
                    Correct!
                  </p>
                  <p className="font-mono text-sm leading-relaxed text-ink/80">
                    {scenario.workedSolution}
                  </p>
                  <p className="mt-3 font-mono text-sm font-bold text-forest">
                    +{attempts === 1 ? 25 : 10} XP
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Solution - Failed */}
          <AnimatePresence>
            {showSolution && isCorrect === false && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ ...spring, opacity: { duration: 0.2 } }}
                className="overflow-hidden"
              >
                <div className="mt-4 rounded-2xl border-l-4 border-terracotta bg-terracotta/5 p-6">
                  <p className="mb-2 text-lg font-bold text-terracotta">
                    Not quite — here's the solution
                  </p>
                  <p className="font-mono text-sm leading-relaxed text-ink/80">
                    {scenario.workedSolution}
                  </p>
                  <p className="mt-2 font-mono text-sm text-ink/60">
                    Correct answer:{" "}
                    <span className="font-bold text-forest">
                      {scenario.correctAnswer}
                      {scenario.unit ? ` ${scenario.unit}` : ""}
                    </span>
                  </p>
                  {scenario.commonPitfall && (
                    <div className="mt-3 rounded-xl bg-terracotta/5 p-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-terracotta/70">
                        Common Pitfall
                      </p>
                      <p className="mt-1 text-sm text-ink/70">
                        {scenario.commonPitfall}
                      </p>
                    </div>
                  )}
                  <button
                    onClick={() => alert(`Study this formula:\n\n${scenario.formula}\n\n${scenario.workedSolution}`)}
                    className="mt-4 rounded-2xl border-2 border-forest px-6 py-2 text-sm font-bold text-forest transition-all hover:bg-forest/5"
                  >
                    Study this formula
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next Scenario button */}
          <AnimatePresence>
            {(isCorrect !== null || (attempts >= 2 && showSolution)) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, ...spring }}
              >
                <button
                  onClick={handleNext}
                  className="mt-6 w-full rounded-2xl bg-forest px-8 py-4 text-lg font-bold text-white transition-all hover:brightness-110"
                >
                  {currentIndex + 1 >= scenarios.length
                    ? "View Results"
                    : "Next Scenario \u2192"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
