"use client";

import { useEffect, useRef, useState } from "react";
import { letter } from "@/data/letter";

type LetterSectionProps = {
  onComplete?: () => void;
};

export function LetterSection({ onComplete }: LetterSectionProps) {
  const [visibleParagraphs, setVisibleParagraphs] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const paragraphs = letter.split("\n\n").filter((p) => p.trim());

  useEffect(() => {
    let currentIndex = 0;

    const showNext = () => {
      if (currentIndex < paragraphs.length) {
        setVisibleParagraphs((prev) => [...prev, currentIndex]);
        currentIndex++;

        // Scroll to the new paragraph
        setTimeout(() => {
          if (containerRef.current) {
            const paragraphElement = containerRef.current.children[currentIndex];
            if (paragraphElement) {
              paragraphElement.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }
        }, 100);

        // Show next paragraph after a delay
        const delay = currentIndex === 0 ? 1500 : 2500;
        const timer = setTimeout(showNext, delay);

        return () => clearTimeout(timer);
      } else {
        // All paragraphs shown, trigger onComplete after a pause
        if (onComplete) {
          const timer = setTimeout(onComplete, 3000);
          return () => clearTimeout(timer);
        }
      }
    };

    const timer = setTimeout(showNext, 1000);
    return () => clearTimeout(timer);
  }, [paragraphs.length, onComplete]);

  return (
    <section className="min-h-screen bg-black py-20 px-6 md:px-12">
      <div
        ref={containerRef}
        className="max-w-2xl mx-auto space-y-12"
      >
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`
              text-lg md:text-xl leading-relaxed text-neutral-200
              transition-opacity duration-1000 ease-out
              ${visibleParagraphs.includes(index)
                ? "opacity-100"
                : "opacity-0"
              }
            `}
          >
            {paragraph}
          </p>
        ))}

        {visibleParagraphs.length === paragraphs.length && (
          <div className="pt-16 text-center opacity-0 animate-[fadeIn_2s_ease-out_forwards]">
            <p className="text-sm text-neutral-500 tracking-widest">
              — end —
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
