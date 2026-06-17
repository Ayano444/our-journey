"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

type YearSectionProps = {
  onComplete?: () => void;
};

export function YearSection({ onComplete }: YearSectionProps) {
  useEffect(() => {
    if (!onComplete) return;

    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="text-center">
      <motion.h1
        className="text-5xl md:text-7xl font-light tracking-[0.3em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        One Year.
      </motion.h1>

      <motion.div
        className="mt-8 text-neutral-500 tracking-[0.5em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
      >
        18 June — 18 June
      </motion.div>
    </div>
  );
}
