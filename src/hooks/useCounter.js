import { useState, useEffect, useRef } from "react";

/**
 * Animates a number from 0 to the given target value over the specified
 * duration (in milliseconds). Uses requestAnimationFrame for smooth updates.
 *
 * Restarts the animation whenever `target` changes.
 *
 * @param {number} target  - The value to animate towards.
 * @param {number} duration - Animation duration in ms (default 1000).
 * @returns {number} The current animated integer value.
 */
export function useCounter(target, duration = 1000) {
  const [current, setCurrent] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    // Reset to 0 at the start of each animation cycle
    setCurrent(0);

    if (target === 0) {
      return;
    }

    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out quad for a smooth deceleration
      const eased = 1 - (1 - progress) * (1 - progress);

      setCurrent(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [target, duration]);

  return current;
}
