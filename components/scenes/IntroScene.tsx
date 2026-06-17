"use client";

import { useState } from "react";
import { ContinueButton } from "@/components/ContinueButton";
import { IntroSection } from "@/components/IntroSection";
import { sceneRoutes } from "@/lib/scenes";

export function IntroScene() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <IntroSection onComplete={() => setReady(true)} />
      <ContinueButton href={sceneRoutes.beginning} visible={ready} />
    </>
  );
}
