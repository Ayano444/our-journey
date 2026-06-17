"use client";

import { useState } from "react";
import { ContinueButton } from "@/components/ContinueButton";
import { SmallMomentsSection } from "@/components/SmallMomentsSection";

export function SmallMomentsScene() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <SmallMomentsSection onComplete={() => setReady(true)} />
      <ContinueButton href="/favorites" visible={ready} />
    </>
  );
}
