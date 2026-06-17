"use client";

import { useState } from "react";
import { ContinueButton } from "@/components/ContinueButton";
import { FirstMeetSection } from "@/components/FirstMeetSection";

export function FirstMeetScene() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <FirstMeetSection onComplete={() => setReady(true)} />
      <ContinueButton href="/december" visible={ready} />
    </>
  );
}
