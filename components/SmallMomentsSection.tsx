"use client";

import { SceneLayout } from "@/components/SceneLayout";
import { MemoryBlock } from "@/components/MemoryBlock";
import { useEffect } from "react";

type SmallMomentsSectionProps = {
  onComplete?: () => void;
};

export function SmallMomentsSection({ onComplete }: SmallMomentsSectionProps) {
  useEffect(() => {
    if (!onComplete) return;

    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <SceneLayout className="story-section--tall">
      <div className="max-w-6xl mx-auto px-6 space-y-32">
        <MemoryBlock delay={0} className="text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-4">Small Moments</h2>
        </MemoryBlock>

        <MemoryBlock delay={0.3} className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square bg-neutral-900/50 rounded-lg flex items-center justify-center">
            <span className="text-neutral-600">Image placeholder</span>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xl text-neutral-400 leading-relaxed italic">
              "Quote placeholder"
            </p>
          </div>
        </MemoryBlock>

        <MemoryBlock delay={0.6} className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-right order-2 md:order-1">
            <p className="text-xl text-neutral-400 leading-relaxed italic">
              "Quote placeholder"
            </p>
          </div>
          <div className="aspect-square bg-neutral-900/50 rounded-lg flex items-center justify-center order-1 md:order-2">
            <span className="text-neutral-600">Image placeholder</span>
          </div>
        </MemoryBlock>

        <MemoryBlock delay={0.9} className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square bg-neutral-900/50 rounded-lg flex items-center justify-center">
            <span className="text-neutral-600">Image placeholder</span>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xl text-neutral-400 leading-relaxed italic">
              "Quote placeholder"
            </p>
          </div>
        </MemoryBlock>
      </div>
    </SceneLayout>
  );
}
