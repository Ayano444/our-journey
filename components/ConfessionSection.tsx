"use client";

import { JSX, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { confession } from "@/data/story";

const TITLE_TIME = 3500;
const IMAGE_TIME = 6500;
const FADE_TIME = 700;

export function ConfessionSection(): JSX.Element {
  const sectionRef =
    useRef<HTMLElement>(null);

  const router = useRouter();

  const [started, setStarted] =
    useState(false);

  const [showIntro, setShowIntro] =
    useState(true);

  const [current, setCurrent] =
    useState(0);

  const [visible, setVisible] =
    useState(true);

  const [finished, setFinished] =
    useState(false);

  const [showContinue, setShowContinue] =
    useState(false);

  // Start when visible
  useEffect(() => {
    if (!sectionRef.current || started)
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

  // Intro
  useEffect(() => {
    if (!started) return;

    const timer =
      setTimeout(() => {
        setShowIntro(false);
      }, TITLE_TIME);

    return () =>
      clearTimeout(timer);
  }, [started]);

  // Progress
  useEffect(() => {
    if (
      !started ||
      showIntro ||
      finished
    )
      return;

    if (
      current >=
      confession.length - 1
    ) {
      const timer =
        setTimeout(() => {
          setFinished(true);

          setTimeout(() => {
            setShowContinue(
              true
            );
          }, 1500);
        }, 8000);

      return () =>
        clearTimeout(timer);
    }

    const timer =
      setTimeout(() => {
        setVisible(false);

        setTimeout(() => {
          setCurrent(
            (v) => v + 1
          );

          setVisible(true);
        }, FADE_TIME);
      }, IMAGE_TIME);

    return () =>
      clearTimeout(timer);
  }, [
    current,
    showIntro,
    started,
    finished,
  ]);

  return (
    <section
      ref={sectionRef}
      id="confession"
      className="
        h-screen
        bg-black
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      {!started ? null : showIntro ? (
        <div className="text-center">
          <div
            className="
              text-neutral-500
              tracking-[0.5em]
              mb-6
            "
          >
            18 JUNE
          </div>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-light
            "
          >
            Confession
          </h1>
        </div>
      ) : !finished ? (
        <div
          className="
            relative
            w-full
            h-full
            flex
            items-center
            justify-center
          "
        >
          <div
            className={`
              transition-all
              duration-[700ms]
              ${
                visible
                  ? "opacity-100 scale-[1.03]"
                  : "opacity-0 scale-100"
              }
            `}
          >
            <Image
              key={current}
              src={confession[current]}
              alt="chat"
              width={1200}
              height={2400}
              priority
              className="
                object-contain
                max-h-[88vh]
                max-w-[92vw]
                w-auto
                h-auto
                rounded-3xl
                shadow-2xl
              "
            />
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div
            className="
              text-neutral-500
              tracking-[0.5em]
            "
          >
            18 JUNE
          </div>

          <div
            className="
              mt-10
              text-7xl
              md:text-8xl
              font-light
            "
          >
            00:07
          </div>

          <div
            className="
              mt-10
              text-neutral-400
            "
          >
            And suddenly—
          </div>

          <div
            className="
              mt-4
              text-4xl
              md:text-5xl
            "
          >
            there was us.
          </div>

          {showContinue && (
            <button
              onClick={() =>
                router.push(
                  "/memories"
                )
              }
              className="
                mt-20
                px-10
                py-4
                rounded-full
                border
                border-white/20
                text-white/80
                hover:bg-white
                hover:text-black
                transition
              "
            >
              Continue →
            </button>
          )}
        </div>
      )}
    </section>
  );
}