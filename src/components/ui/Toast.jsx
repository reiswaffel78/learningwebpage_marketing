import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ toasts = [] }) {
  const visible = toasts.slice(-2);

  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2">
      <AnimatePresence mode="popLayout">
        {visible.map((toast) => (
          <motion.div
            key={toast.id}
            layout
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="rounded-full bg-forest px-5 py-2 text-sm font-semibold text-white shadow-lg"
          >
            +{toast.amount} XP {toast.message ?? "🎯"}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

let toastCounter = 0;

export function useToast() {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef(new Map());

  const showToast = useCallback((amount, message) => {
    const id = ++toastCounter;

    setToasts((prev) => [...prev, { id, amount, message: message ?? "🎯" }]);

    const timer = setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
      timersRef.current.delete(id);
    }, 1500);

    timersRef.current.set(id, timer);
  }, []);

  return { toasts, showToast };
}
