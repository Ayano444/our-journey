"use client";

import { useState } from "react";
import { ContinueButton } from "@/components/ContinueButton";
import { MemoriesSection } from "@/components/MemoriesSection";
import { sceneRoutes } from "@/lib/scenes";

export function MemoriesScene() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <MemoriesSection onComplete={() => setReady(true)} />
      <ContinueButton href="/first-movie" visible={ready} />
    </>
  );
}
