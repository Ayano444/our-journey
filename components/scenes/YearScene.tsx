"use client";

import { useState } from "react";
import { ContinueButton } from "@/components/ContinueButton";
import { YearSection } from "@/components/YearSection";

export function YearScene() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <YearSection onComplete={() => setReady(true)} />
      <ContinueButton href="/letter" visible={ready} />
    </>
  );
}
