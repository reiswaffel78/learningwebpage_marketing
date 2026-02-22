import { motion, AnimatePresence } from "framer-motion";
import Confetti from "./Confetti";

export default function LevelUpModal({ level, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Card */}
          <motion.div
            className="relative z-10 mx-4 w-full max-w-sm overflow-hidden rounded-3xl bg-card px-8 py-12 text-center shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            {/* Confetti burst */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <Confetti />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="mb-2 text-sm font-medium tracking-wide text-stone uppercase">
                Congratulations
              </p>
              <h2 className="mb-6 font-drama text-5xl italic text-ink">
                Level {level}!
              </h2>
              <button
                onClick={onClose}
                className="rounded-full bg-forest px-8 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-forest/90 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
              >
                Continue
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
