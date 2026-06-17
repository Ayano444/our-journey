"use client";

import { useState } from "react";
import { ContinueButton } from "@/components/ContinueButton";
import { DecemberSection } from "@/components/DecemberSection";

export function DecemberScene() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <DecemberSection onComplete={() => setReady(true)} />
      <ContinueButton href="/birthdays" visible={ready} />
    </>
  );
}
