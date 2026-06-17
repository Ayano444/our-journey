"use client";

import { useEffect, useState } from "react";
import { ContinueButton } from "@/components/ContinueButton";
import { MonthChapterSection } from "@/components/MonthChapterSection";
import type { MonthChapter } from "@/data/story";

type MonthSceneProps = {
  month: MonthChapter;
  index: number;
  nextHref: string;
};

export function MonthScene({ month, index, nextHref }: MonthSceneProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1400);
    return () => clearTimeout(timer);
  }, [month.id]);

  return (
    <>
      <MonthChapterSection month={month} index={index} />
      <ContinueButton href={nextHref} visible={ready} />
    </>
  );
}
