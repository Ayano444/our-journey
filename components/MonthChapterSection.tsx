"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { MonthChapter } from "@/data/story";

type MonthChapterProps = {
  month: MonthChapter;
  index: number;
};

export function MonthChapterSection({ month, index }: MonthChapterProps) {
  const [visible, setVisible] = useState(false);
  const isImageFirst = index % 2 === 0;

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      id={month.id}
      className={`story-section overflow-hidden ${isImageFirst ? "p-0" : ""}`}
    >
      {isImageFirst ? (
        <motion.div
          className="relative h-full w-full"
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-neutral-950">
            <span className="absolute inset-0 flex items-center justify-center text-xs tracking-[0.35em] text-neutral-800 uppercase">
              Image
            </span>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50" />

          <div className="relative z-10 flex h-full flex-col justify-between px-8 py-14 md:px-14 md:py-20">
            <span className="text-xs tracking-[0.4em] text-neutral-500 uppercase">
              {month.label}
            </span>

            <p className="max-w-sm text-sm font-light italic leading-relaxed text-neutral-400 md:max-w-md md:text-base">
              {month.quote}
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="flex h-full w-full max-w-5xl flex-col justify-center gap-14 px-8 md:gap-20 md:px-14"
          initial={{ opacity: 0, y: 32 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs tracking-[0.4em] text-neutral-500 uppercase">
            {month.label}
          </span>

          <p className="max-w-lg text-xl font-light leading-relaxed text-neutral-400 md:text-2xl">
            {month.quote}
          </p>

          <div className="relative aspect-[16/10] w-full bg-neutral-950">
            <span className="absolute inset-0 flex items-center justify-center text-xs tracking-[0.35em] text-neutral-800 uppercase">
              Image
            </span>
          </div>
        </motion.div>
      )}
    </section>
  );
}
