import { useEffect } from "react";
import { useStore } from "../store/store";

/**
 * Wraps the store's streak logic into a convenient hook.
 *
 * On mount, automatically calls `checkStreak()` from the store so the
 * streak counter is kept up-to-date each time a component using this
 * hook is rendered for the first time.
 *
 * @returns {{ streak: number, isActive: boolean, checkStreak: () => void }}
 */
export function useStreak() {
  const streak = useStore((state) => state.streak);
  const checkStreak = useStore((state) => state.checkStreak);

  useEffect(() => {
    checkStreak();
  }, [checkStreak]);

  return {
    streak,
    isActive: streak > 0,
    checkStreak,
  };
}
