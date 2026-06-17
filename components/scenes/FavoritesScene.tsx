"use client";

import { useState } from "react";
import { ContinueButton } from "@/components/ContinueButton";
import { FavoritesSection } from "@/components/FavoritesSection";

export function FavoritesScene() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <FavoritesSection onComplete={() => setReady(true)} />
      <ContinueButton href="/final" visible={ready} />
    </>
  );
}
