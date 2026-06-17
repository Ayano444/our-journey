"use client";

import { useState } from "react";
import { ContinueButton } from "@/components/ContinueButton";
import { BirthdaySection } from "@/components/BirthdaysSection";

export function BirthdaysScene() {
  const [ready, setReady] = useState(false);

  // BirthdaySection may not have proper prop typings; cast to any to allow onComplete prop
  const BirthdaySectionAny = BirthdaySection as any;

  return (
    <>
      <BirthdaySectionAny onComplete={() => setReady(true)} />
      <ContinueButton href="/small-moments" visible={ready} />
    </>
  );
}
