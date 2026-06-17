"use client";

import { motion } from "framer-motion";

type ScrollHintProps = {
  delay?: number;
};

export function ScrollHint({ delay = 3.5 }: ScrollHintProps) {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 md:bottom-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 1.2 }}
    >
      <motion.div
        className="flex h-10 w-5 items-start justify-center rounded-full border border-white/20 pt-1.5"
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="block h-1.5 w-0.5 rounded-full bg-white/40" />
      </motion.div>
    </motion.div>
  );
}
