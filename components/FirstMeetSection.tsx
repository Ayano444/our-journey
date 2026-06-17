"use client";

import { JSX, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type FirstMeetSectionProps = {
  onComplete?: () => void;
};

const scenes = [
  {
    type: "text",
    content: [
      "After many promises,",
      "many conversations—",
      "",
      "we finally chose a day.",
    ],
    duration: 5000,
  },

  {
    type: "text",
    content: [
      "30 August",
      "",
      "the day for our first meet.",
    ],
    duration: 4000,
  },

  {
    type: "text",
    content: ["And here I go."],
    duration: 2500,
  },

  {
    type: "video",
    src: "/memories/first-meet/flight.mp4",
  },

  {
    type: "text",
    content: [
      "And finally—",
      "",
      "we met.",
    ],
    duration: 3000,
  },

  {
    type: "image",
    src: "/memories/first-meet/1.jpeg",
    duration: 3500,
  },

  {
    type: "image",
    src: "/memories/first-meet/2.jpeg",
    duration: 3500,
  },

  {
    type: "text",
    content: [
      "It felt strange.",
      "",
      "Seeing someone",
      "you already knew.",
    ],
    duration: 4000,
  },

  {
    type: "image",
    src: "/memories/first-meet/3.jpeg",
    duration: 3500,
  },

  {
    type: "image",
    src: "/memories/first-meet/4.jpeg",
    duration: 3500,
  },

  {
    type: "text",
    content: [
      "Hours disappeared quietly.",
    ],
    duration: 3500,
  },

  {
    type: "video",
    src: "/memories/first-meet/pizza.mp4",
  },

  {
    type: "text",
    content: [
      "No grand moment.",
      "",
      "Just one I'd remember.",
    ],
    duration: 4000,
  },

  {
    type: "image",
    src: "/memories/first-meet/5.jpeg",
    duration: 3500,
  },

  {
    type: "image",
    src: "/memories/first-meet/6.jpeg",
    duration: 3500,
  },
];

export function FirstMeetSection({
  onComplete,
}: FirstMeetSectionProps): JSX.Element {
  const router =
    useRouter();

  const videoRef =
    useRef<HTMLVideoElement>(
      null
    );

  const [current, setCurrent] =
    useState(0);

  const [visible, setVisible] =
    useState(true);

  const scene =
    scenes[current];

  function nextScene() {
    setVisible(false);

    setTimeout(() => {
      if (
        current ===
        scenes.length - 1
      ) {
        if (onComplete)
          onComplete();
      } else {
        setCurrent(
          (v) => v + 1
        );

        setVisible(true);
      }
    }, 900);
  }

  useEffect(() => {
    if (
      scene.type ===
      "video"
    )
      return;

    const timer =
      setTimeout(
        nextScene,
        scene.duration
      );

    return () =>
      clearTimeout(timer);
  }, [current]);

  if (
    current >=
    scenes.length
  ) {
    return (
      <section
        className="
          h-screen
          bg-black
          flex
          items-center
          justify-center
        "
      >
        <button
          onClick={() =>
            router.push(
              "/next"
            )
          }
          className="
            px-10
            py-4
            border
            border-white/20
            text-white
            hover:bg-white
            hover:text-black
            transition
          "
        >
          Continue →
        </button>
      </section>
    );
  }

  return (
    <section
      className="
        h-screen
        bg-black
        overflow-hidden
      "
    >
      <div
        className={`
          absolute
          inset-0
          transition-all
          duration-1000
          ${
            visible
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
        {scene.type ===
          "text" && (
          <div
            className="
              h-full
              flex
              items-center
              justify-center
              text-center
              px-10
            "
          >
            <div
              className="
                text-3xl
                md:text-6xl
                font-light
                leading-[1.8]
              "
            >
              {scene.content?.map(
                (
                  line,
                  i
                ) => (
                  <div
                    key={
                      i
                    }
                  >
                    {line}
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {scene.type ===
          "image" && (
          <div
            className="
              w-full
              h-full
              flex
              items-center
              justify-center
              bg-black
            "
          >
            <img
              src={
                scene.src
              }
              className="
                max-w-[92vw]
                max-h-[92vh]
                w-auto
                h-auto
                object-contain
                scale-[1.02]
                transition-transform
                duration-[9000ms]
              "
            />
          </div>
        )}

        {scene.type ===
          "video" && (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={
              nextScene
            }
            className="
              w-full
              h-full
              object-contain
            "
          >
            <source
              src={
                scene.src
              }
              type="video/mp4"
            />
          </video>
        )}
      </div>
    </section>
  );
}