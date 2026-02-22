import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Returns today's date as an ISO date string (YYYY-MM-DD).
 */
function getTodayDateString() {
  return new Date().toISOString().split("T")[0];
}

/**
 * Returns the number of calendar days between two ISO date strings.
 * A positive result means `dateA` is that many days after `dateB`.
 */
function daysBetween(dateA, dateB) {
  const a = new Date(dateA + "T00:00:00");
  const b = new Date(dateB + "T00:00:00");
  const diffMs = a.getTime() - b.getTime();
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

export const useStore = create(
  persist(
    (set, get) => ({
      // ── User slice ──────────────────────────────────────────────────
      userName: "Marketer",
      level: 1,
      xp: 0,
      streak: 0,
      lastActivityDate: null,
      greeting: "Ready to level up?",

      // ── Progress slice ──────────────────────────────────────────────
      progress: {},

      addCorrect: (conceptId) =>
        set((state) => {
          const existing = state.progress[conceptId] || {
            masteryLevel: 0,
            correctCount: 0,
            wrongCount: 0,
          };

          const newCorrectCount = existing.correctCount + 1;

          let newMasteryLevel = existing.masteryLevel;
          if (newMasteryLevel === 0 && newCorrectCount >= 1) {
            newMasteryLevel = 1;
          }
          if (newMasteryLevel === 1 && newCorrectCount >= 3) {
            newMasteryLevel = 2;
          }

          return {
            progress: {
              ...state.progress,
              [conceptId]: {
                masteryLevel: newMasteryLevel,
                correctCount: newCorrectCount,
                wrongCount: existing.wrongCount,
              },
            },
          };
        }),

      addWrong: (conceptId) =>
        set((state) => {
          const existing = state.progress[conceptId] || {
            masteryLevel: 0,
            correctCount: 0,
            wrongCount: 0,
          };

          return {
            progress: {
              ...state.progress,
              [conceptId]: {
                ...existing,
                wrongCount: existing.wrongCount + 1,
              },
            },
          };
        }),

      // ── Session slice ───────────────────────────────────────────────
      currentView: "dashboard",
      activeDomain: null,
      activeConcept: null,

      setView: (view) => set({ currentView: view }),
      setActiveDomain: (domain) => set({ activeDomain: domain }),
      setActiveConcept: (conceptId) => set({ activeConcept: conceptId }),

      // ── Actions ─────────────────────────────────────────────────────

      /**
       * Adds XP and checks for level-ups (every 500 XP = 1 level).
       * Returns { newXP, leveledUp, newLevel }.
       */
      addXP: (amount) => {
        const state = get();
        const newXP = state.xp + amount;
        const newLevel = Math.floor(newXP / 500) + 1;
        const leveledUp = newLevel > state.level;

        set({ xp: newXP, level: newLevel });

        return { newXP, leveledUp, newLevel };
      },

      /**
       * Checks lastActivityDate to manage the streak counter.
       * - If last activity was yesterday → increment streak.
       * - If last activity was today → no change.
       * - If last activity was 2+ days ago (or null) → reset streak to 0.
       * Updates lastActivityDate to today.
       */
      checkStreak: () => {
        const state = get();
        const today = getTodayDateString();

        if (state.lastActivityDate === null) {
          set({ streak: 0, lastActivityDate: today });
          return;
        }

        const diff = daysBetween(today, state.lastActivityDate);

        if (diff === 0) {
          // Same day — no change
          return;
        } else if (diff === 1) {
          // Yesterday — increment streak
          set({ streak: state.streak + 1, lastActivityDate: today });
        } else {
          // 2+ days gap — reset
          set({ streak: 0, lastActivityDate: today });
        }
      },

      /**
       * Records today as the last activity date.
       */
      recordActivity: () => {
        set({ lastActivityDate: getTodayDateString() });
      },
    }),
    {
      name: "all-about-marketing",
    }
  )
);
