"use client";

import { useState } from "react";
import { BeginningSection } from "@/components/BeginningSection";
import { ContinueButton } from "@/components/ContinueButton";
import { sceneRoutes } from "@/lib/scenes";

export function BeginningScene() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <BeginningSection onComplete={() => setReady(true)} />
      <ContinueButton href={sceneRoutes.confession} visible={ready} />
    </>
  );
}
