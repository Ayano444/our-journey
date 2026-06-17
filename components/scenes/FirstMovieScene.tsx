"use client";

import { useState } from "react";
import { ContinueButton } from "@/components/ContinueButton";
import { FirstMovieSection } from "@/components/FirstMovieSection";

export function FirstMovieScene() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <FirstMovieSection onComplete={() => setReady(true)} />
      <ContinueButton href="/first-meet" visible={ready} />
    </>
  );
}
