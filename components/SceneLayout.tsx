"use client";

import { ReactNode } from "react";

type SceneLayoutProps = {
  children: ReactNode;
  className?: string;
};

export function SceneLayout({ children, className = "" }: SceneLayoutProps) {
  return (
    <section className={`story-section bg-black ${className}`}>
      {children}
    </section>
  );
}
