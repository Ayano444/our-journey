"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { ScrollHint } from "./ScrollHint";

type IntroSectionProps = {
  onComplete?: () => void;
};

export function IntroSection({ onComplete }: IntroSectionProps) {
  useEffect(() => {
    if (!onComplete) return;

    const timer = setTimeout(onComplete, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <section id="intro" className="story-section bg-black">
      <div className="text-center">
        <motion.h1
          className="text-6xl font-thin tracking-[0.7em] md:text-8xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          JOURNEY
        </motion.h1>

        <motion.div
          className="mt-10 text-neutral-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
        >
          18 JUNE — 18 JUNE
        </motion.div>
      </div>

      <ScrollHint delay={4.5} />
    </section>
  );
}
