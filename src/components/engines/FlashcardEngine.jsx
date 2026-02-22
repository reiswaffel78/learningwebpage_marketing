import { useState, useCallback, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "../ui/Confetti";

/* ─── helpers ─────────────────────────────────────────────────────── */

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* ─── animation variants ──────────────────────────────────────────── */

const springBouncy = { type: "spring", stiffness: 400, damping: 30 };

const cardSlideVariants = {
  enter: { x: 300, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 },
};

const cardSlideRightExit = {
  exit: { x: 300, opacity: 0 },
};

const shakeKeyframes = {
  x: [-6, 6, -4, 4, 0],
};

const buttonFadeIn = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15, duration: 0.25 },
};

const correctFlashVariants = {
  initial: { opacity: 0 },
  animate: { opacity: [0, 0.25, 0] },
  transition: { duration: 0.3 },
};

/* ─── sub-components ──────────────────────────────────────────────── */

function ProgressBar({ current, total }) {
  return (
    <div className="mb-6">
      <div className="flex gap-1">
        {Array.from({ length: total }, (_, i) => {
          const isCompleted = i < current;
          const isCurrent = i === current;
          return (
            <div
              key={i}
              className={`h-2 flex-1 rounded-sm transition-colors duration-300 ${
                isCompleted
                  ? "bg-forest"
                  : isCurrent
                    ? "bg-forest/50 animate-pulse"
                    : "bg-stone/20"
              }`}
            />
          );
        })}
      </div>
      <p className="mt-2 text-center font-mono text-sm text-stone">
        Card {Math.min(current + 1, total)} of {total}
      </p>
    </div>
  );
}

function MasteryBadge({ masteryLevel }) {
  if (masteryLevel === "mastered") {
    return (
      <span className="text-gold text-lg" title="Mastered">
        ★
      </span>
    );
  }
  if (masteryLevel === "learning") {
    return (
      <span className="text-forest text-lg" title="Learning">
        ◑
      </span>
    );
  }
  return (
    <span className="text-stone text-lg" title="New">
      ●
    </span>
  );
}

function CardFront({ concept, masteryLevel }) {
  return (
    <div className="backface-hidden absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-card p-8 shadow-lg">
      <div className="mb-4 flex items-center gap-2">
        {concept.domain && (
          <span className="inline-flex items-center rounded-full bg-forest-light px-3 py-1 font-mono text-xs text-forest">
            {concept.domain}
          </span>
        )}
        <MasteryBadge masteryLevel={masteryLevel} />
      </div>

      <h2 className="mb-6 text-center text-2xl font-bold text-ink">
        {concept.term}
      </h2>

      <p className="font-mono text-xs text-stone">Tap to flip</p>
    </div>
  );
}

function CardBack({ concept, showPitfall }) {
  return (
    <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-center overflow-y-auto rounded-3xl bg-card p-8 shadow-lg">
      <p className="mb-6 text-base leading-relaxed text-ink">
        {concept.definition}
      </p>

      {concept.keyApplication && (
        <div className="mb-4 rounded-lg border-l-4 border-forest bg-forest/5 p-4">
          <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wide text-forest">
            Key Application
          </p>
          <p className="italic text-ink/80">{concept.keyApplication}</p>
        </div>
      )}

      {showPitfall && concept.commonPitfall && (
        <div className="rounded-lg border-l-4 border-terracotta bg-terracotta-light p-4">
          <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wide text-terracotta">
            ⚠️ Common Pitfall
          </p>
          <p className="text-ink/80">{concept.commonPitfall}</p>
        </div>
      )}
    </div>
  );
}

function CompletionScreen({
  correctCount,
  wrongCount,
  xpEarned,
  failedConcepts,
  onReviewMistakes,
  onBack,
}) {
  return (
    <motion.div
      className="flex flex-col items-center py-12"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={springBouncy}
    >
      <Confetti />

      <h1 className="mb-2 font-drama text-3xl italic text-ink">
        Deck Complete!
      </h1>

      <p className="mb-6 text-lg font-bold text-forest">
        +{xpEarned} XP earned
      </p>

      <p className="mb-8 font-mono text-sm text-stone">
        <span className="text-forest">✓ {correctCount} correct</span>
        {" · "}
        <span className="text-terracotta">✗ {wrongCount} to review</span>
      </p>

      <div className="flex flex-col gap-3">
        {failedConcepts.length > 0 && (
          <button
            onClick={onReviewMistakes}
            className="rounded-2xl bg-forest px-6 py-3 font-semibold text-white transition-transform hover:scale-105 active:scale-95"
          >
            Review Mistakes
          </button>
        )}

        <button
          onClick={onBack}
          className="rounded-2xl border-2 border-forest px-6 py-3 font-semibold text-forest transition-transform hover:scale-105 active:scale-95"
        >
          Back to Topic
        </button>
      </div>
    </motion.div>
  );
}

/* ─── main component ──────────────────────────────────────────────── */

export default function FlashcardEngine({ concepts, onComplete, onXPGain }) {
  /* — deck state — */
  const [queue, setQueue] = useState(() =>
    shuffleArray(concepts.map((_, i) => i)),
  );
  const [currentPointer, setCurrentPointer] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [failedIds, setFailedIds] = useState(new Set());
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  /* — animation triggers — */
  const [showCorrectFlash, setShowCorrectFlash] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");
  const [cardKey, setCardKey] = useState(0);

  /* — derived — */
  const totalCards = queue.length;
  const currentConceptIndex = queue[currentPointer];
  const currentConcept = concepts[currentConceptIndex];
  const wasPreviouslyFailed =
    currentConcept && failedIds.has(currentConcept.id);

  /* Mastery level heuristic: if answered wrong before → "learning",
     if never seen wrong → "new" (could be extended with external state). */
  const masteryLevel = useMemo(() => {
    if (!currentConcept) return "new";
    if (failedIds.has(currentConcept.id)) return "learning";
    return "new";
  }, [currentConcept, failedIds]);

  /* — helpers — */
  const advanceCard = useCallback(() => {
    const nextPointer = currentPointer + 1;
    if (nextPointer >= queue.length) {
      setIsComplete(true);
    } else {
      setIsFlipped(false);
      setSlideDirection("right");
      setCardKey((k) => k + 1);
      setCurrentPointer(nextPointer);
    }
  }, [currentPointer, queue.length]);

  /* — handlers — */
  const handleFlip = useCallback(() => {
    if (!isFlipped) {
      setIsFlipped(true);
    }
  }, [isFlipped]);

  const handleGotIt = useCallback(() => {
    const xp = 10;
    setCorrectCount((c) => c + 1);
    setXpEarned((x) => x + xp);
    onXPGain?.(xp);

    /* correct answer flash */
    setShowCorrectFlash(true);
    setTimeout(() => setShowCorrectFlash(false), 300);

    /* brief delay to show flash, then slide out */
    setTimeout(() => {
      advanceCard();
    }, 350);
  }, [advanceCard, onXPGain]);

  const handleNotYet = useCallback(() => {
    setWrongCount((c) => c + 1);
    setFailedIds((prev) => new Set(prev).add(currentConcept.id));

    /* shake animation */
    setShakeKey((k) => k + 1);

    /* re-queue 2 positions later */
    setTimeout(() => {
      setQueue((prev) => {
        const copy = [...prev];
        const insertAt = Math.min(currentPointer + 3, copy.length);
        copy.splice(insertAt, 0, currentConceptIndex);
        return copy;
      });
      advanceCard();
    }, 400);
  }, [advanceCard, currentConcept, currentConceptIndex, currentPointer]);

  /* — fire onComplete when deck finishes — */
  useEffect(() => {
    if (isComplete) {
      onComplete?.({
        totalCards,
        correctCount,
        wrongCount,
        xpEarned,
      });
    }
    // Only fire when isComplete transitions to true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComplete]);

  /* — review mistakes — */
  const failedConcepts = useMemo(
    () => concepts.filter((c) => failedIds.has(c.id)),
    [concepts, failedIds],
  );

  const handleReviewMistakes = useCallback(() => {
    const failedIndices = concepts
      .map((c, i) => (failedIds.has(c.id) ? i : -1))
      .filter((i) => i !== -1);
    setQueue(shuffleArray(failedIndices));
    setCurrentPointer(0);
    setIsFlipped(false);
    setCorrectCount(0);
    setWrongCount(0);
    setXpEarned(0);
    setIsComplete(false);
    setCardKey((k) => k + 1);
  }, [concepts, failedIds]);

  const handleBack = useCallback(() => {
    onComplete?.({
      totalCards,
      correctCount,
      wrongCount,
      xpEarned,
    });
  }, [onComplete, totalCards, correctCount, wrongCount, xpEarned]);

  /* ─── completion screen ─────────────────────────────────────────── */

  if (isComplete) {
    return (
      <div className="mx-auto max-w-md">
        <CompletionScreen
          correctCount={correctCount}
          wrongCount={wrongCount}
          xpEarned={xpEarned}
          failedConcepts={failedConcepts}
          onReviewMistakes={handleReviewMistakes}
          onBack={handleBack}
        />
      </div>
    );
  }

  /* ─── main card view ────────────────────────────────────────────── */

  if (!currentConcept) return null;

  return (
    <div className="mx-auto max-w-md">
      {/* Progress bar */}
      <ProgressBar current={currentPointer} total={queue.length} />

      {/* 3D flip card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={cardKey}
          className="perspective-1000"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={springBouncy}
        >
          <motion.div
            className="relative cursor-pointer"
            onClick={handleFlip}
            /* shake animation on wrong answer */
            animate={
              shakeKey > 0
                ? { x: shakeKeyframes.x }
                : { x: 0 }
            }
            transition={
              shakeKey > 0
                ? { duration: 0.3, ease: "easeInOut" }
                : { duration: 0 }
            }
            key={`shake-${shakeKey}`}
          >
            {/* Correct flash overlay */}
            <AnimatePresence>
              {showCorrectFlash && (
                <motion.div
                  className="pointer-events-none absolute inset-0 z-10 rounded-3xl bg-forest"
                  {...correctFlashVariants}
                />
              )}
            </AnimatePresence>

            {/* Scale bounce on correct */}
            <motion.div
              animate={
                showCorrectFlash
                  ? { scale: [1.0, 1.04, 1.0] }
                  : { scale: 1 }
              }
              transition={{ duration: 0.1 }}
            >
              <div
                className={`preserve-3d relative h-80 w-full transition-transform duration-500 ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <CardFront
                  concept={currentConcept}
                  masteryLevel={masteryLevel}
                />

                {/* Back */}
                <CardBack
                  concept={currentConcept}
                  showPitfall={wasPreviouslyFailed}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Action buttons — only after flip */}
      <AnimatePresence>
        {isFlipped && (
          <motion.div
            className="mt-6 flex justify-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ delay: 0.15, duration: 0.25 }}
          >
            <motion.button
              onClick={handleGotIt}
              className="rounded-2xl bg-forest px-6 py-3 font-semibold text-white transition-transform hover:scale-105 active:scale-95"
              whileTap={{ scale: 0.95 }}
            >
              Got it ✓
            </motion.button>

            <motion.button
              onClick={handleNotYet}
              className="rounded-2xl bg-terracotta px-6 py-3 font-semibold text-white transition-transform hover:scale-105 active:scale-95"
              whileTap={{ scale: 0.95 }}
            >
              Not yet ✗
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
