import { useCallback } from "react";
import { useStore } from "../store/store";

/**
 * Provides XP and level data along with a wrapped `addXP` action.
 *
 * The returned `addXP(amount)` function calls the store action and
 * returns its result: `{ newXP, leveledUp, newLevel }`.
 *
 * @returns {{ xp: number, level: number, addXP: (amount: number) => { newXP: number, leveledUp: boolean, newLevel: number } }}
 */
export function useXP() {
  const xp = useStore((state) => state.xp);
  const level = useStore((state) => state.level);
  const storeAddXP = useStore((state) => state.addXP);

  const addXP = useCallback(
    (amount) => {
      return storeAddXP(amount);
    },
    [storeAddXP]
  );

  return { xp, level, addXP };
}
