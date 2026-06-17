"use client";

import { JSX, useEffect, useRef, useState } from "react";
import { beginningLines } from "@/data/story";

const BASE_DELAY = 72;

const pauseMap: Record<string, number> = {
  '"How’s life?"': 1800,
  "my Ishq.": 2200,
  "12:07 AM": 2600,
  "us.": 3200,
};

type BeginningSectionProps = {
  onComplete?: () => void;
};

export function BeginningSection({
  onComplete,
}: BeginningSectionProps): JSX.Element {
  const sectionRef =
    useRef<HTMLElement>(null);

  const completedRef =
    useRef(false);

  const [started, setStarted] =
    useState(false);

  const [line, setLine] =
    useState(0);

  const [char, setChar] =
    useState(0);

  const [displayText, setDisplayText] =
    useState("");

  const [visible, setVisible] =
    useState(true);

  const [showButton, setShowButton] =
    useState(false);

  // Start only once when section appears
  useEffect(() => {
    if (
      !sectionRef.current ||
      started
    )
      return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            setStarted(true);

            observer.disconnect();
          }
        },
        {
          threshold: 0.45,
        }
      );

    observer.observe(
      sectionRef.current
    );

    return () =>
      observer.disconnect();
  }, [started]);

  // Typewriter
  useEffect(() => {
    if (!started) return;

    if (
      line >=
      beginningLines.length
    ) {
      if (
        !completedRef.current
      ) {
        completedRef.current =
          true;

        setTimeout(() => {
          setShowButton(
            true
          );

          onComplete?.();
        }, 1200);
      }

      return;
    }

    const current =
      beginningLines[line];

    // Typing animation
    if (
      char <
      current.length
    ) {
      const timer =
        setTimeout(() => {
          const next =
            current.slice(
              0,
              char + 1
            );

          setDisplayText(
            next
          );

          setChar(
            (v) => v + 1
          );
        }, BASE_DELAY);

      return () =>
        clearTimeout(
          timer
        );
    }

    // Pause → fade → next line
    const pause =
      Object.entries(
        pauseMap
      ).find(([k]) =>
        current.includes(k)
      )?.[1] ?? 1500;

    const timer =
      setTimeout(() => {
        setVisible(false);

        setTimeout(() => {
          setLine(
            (v) => v + 1
          );

          setChar(0);

          setDisplayText("");

          setVisible(true);
        }, 260);
      }, pause);

    return () =>
      clearTimeout(
        timer
      );
  }, [
    started,
    line,
    char,
    onComplete,
  ]);

  return (
    <section
      ref={sectionRef}
      id="beginning"
      className="
        h-screen
        bg-black
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          max-w-3xl
          px-10
          text-center
        "
      >
        {!showButton && (
          <div
            className={`
              min-h-[240px]
              flex
              items-center
              justify-center
              transition-opacity
              duration-[260ms]
              ${
                visible
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          >
            <p
              className="
                text-3xl
                md:text-5xl
                leading-[1.8]
                text-white
              "
            >
              {displayText}
            </p>
          </div>
        )}

        {showButton && (
          <button
            className="
              mt-12
              px-8
              py-3
              rounded-full
              border
              border-white/20
              text-white/80
              opacity-100
              hover:bg-white
              hover:text-black
              transition
            "
          >
            Continue →
          </button>
        )}
      </div>
    </section>
  );
}