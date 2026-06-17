"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type MemoryBlockProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MemoryBlock({ children, className = "", delay = 0 }: MemoryBlockProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
