"use client";

import { JSX, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { favorites } from "@/data/favorites";

type Phase =
  | "intro"
  | "categoryTitle"
  | "media"
  | "quote"
  | "done";

const INTRO_TEXT =
  "And here's my favourite.";

const TYPE_SPEED = 42;

const TITLE_PAUSE = 1500;

const MEDIA_TIME = 2800;

export function FavoritesSection(): JSX.Element {
  const router =
    useRouter();

  const [phase, setPhase] =
    useState<Phase>(
      "intro"
    );

  const [
    categoryIndex,
    setCategoryIndex,
  ] =
    useState(0);

  const [
    mediaIndex,
    setMediaIndex,
  ] =
    useState(0);

  const [
    quoteIndex,
    setQuoteIndex,
  ] =
    useState(0);

  const [
    typedText,
    setTypedText,
  ] =
    useState("");

  const [
    typedQuote,
    setTypedQuote,
  ] =
    useState("");

  const videoRef =
    useRef<HTMLVideoElement>(
      null
    );

  const current =
    favorites[
      categoryIndex
    ];

  function typewriter(
    text: string,
    setter: (
      value: string
    ) => void,
    done: () => void
  ) {
    setter("");

    let i = 0;

    const timer =
      setInterval(() => {
        i++;

        setter(
          text.slice(
            0,
            i
          )
        );

        if (
          i >=
          text.length
        ) {
          clearInterval(
            timer
          );

          done();
        }
      }, TYPE_SPEED);

    return () =>
      clearInterval(
        timer
      );
  }

  function nextCategory() {
    if (
      categoryIndex <
      favorites.length -
        1
    ) {
      setCategoryIndex(
        (
          v
        ) =>
          v + 1
      );

      setMediaIndex(
        0
      );

      setQuoteIndex(
        0
      );

      setPhase(
        "categoryTitle"
      );

      return;
    }

    setPhase(
      "done"
    );
  }

  useEffect(() => {
    if (
      phase !==
      "intro"
    )
      return;

    return typewriter(
      INTRO_TEXT,
      setTypedText,
      () => {
        setTimeout(
          () =>
            setPhase(
              "categoryTitle"
            ),
          1500
        );
      }
    );
  }, [phase]);

  useEffect(() => {
    if (
      phase !==
      "categoryTitle"
    )
      return;

    return typewriter(
      current.title,
      setTypedText,
      () => {
        setTimeout(
          () =>
            setPhase(
              "media"
            ),
          TITLE_PAUSE
        );
      }
    );
  }, [
    phase,
    categoryIndex,
  ]);

  useEffect(() => {
    if (
      phase !==
      "media"
    )
      return;

    const item =
      current.media[
        mediaIndex
      ];

    if (
      !item
    ) {
      nextCategory();
      return;
    }

    const isVideo =
      item.endsWith(
        ".mp4"
      );

    if (
      isVideo
    ) {
      const video =
        videoRef.current;

      if (
        !video
      )
        return;

      video.currentTime =
        0;

      video.play();

      video.onended =
        () => {
          setMediaIndex(
            (
              v
            ) =>
              v + 1
          );
        };

      return;
    }

    const timer =
      setTimeout(
        () => {
          const next =
            mediaIndex +
            1;

          const showQuote =
            next %
              2 ===
              0 &&
            quoteIndex <
              current.quotes
                .length;

          if (
            showQuote
          ) {
            setPhase(
              "quote"
            );
          } else {
            setMediaIndex(
              next
            );
          }
        },

        MEDIA_TIME
      );

    return () =>
      clearTimeout(
        timer
      );
  }, [
    phase,
    mediaIndex,
    quoteIndex,
    categoryIndex,
  ]);

  useEffect(() => {
    if (
      phase !==
      "quote"
    )
      return;

    const quote =
      current.quotes[
        quoteIndex
      ];

    if (
      !quote
    ) {
      setMediaIndex(
        (
          v
        ) =>
          v + 1
      );

      setPhase(
        "media"
      );

      return;
    }

    return typewriter(
      quote,
      setTypedQuote,
      () => {
        setTimeout(
          () => {
            setQuoteIndex(
              (
                v
              ) =>
                v + 1
            );

            setMediaIndex(
              (
                v
              ) =>
                v + 1
            );

            setPhase(
              "media"
            );
          },
          1800
        );
      }
    );
  }, [
    phase,
    quoteIndex,
  ]);

  return (
    <section
      className="
      h-screen
      bg-black
      overflow-hidden
      relative
      "
    >
      <div
        className="
        h-full
        flex
        items-center
        justify-center
        px-8
        "
      >
        {(phase ===
          "intro" ||
          phase ===
            "categoryTitle") && (
          <div className="text-center">
            <h1
              className="
              text-4xl
              md:text-6xl
              font-light
              "
            >
              {typedText}

              <span className="animate-pulse">
                |
              </span>
            </h1>
          </div>
        )}

        {phase ===
          "media" &&
          current.media[
            mediaIndex
          ] && (
            current.media[
              mediaIndex
            ].endsWith(
              ".mp4"
            ) ? (
              <video
                ref={
                  videoRef
                }
                src={
                  current
                    .media[
                    mediaIndex
                  ]
                }
                autoPlay
                muted
                playsInline
                className="
                max-w-[82vw]
                max-h-[82vh]
                object-contain
                rounded-3xl
                "
              />
            ) : (
              <img
                src={
                  current
                    .media[
                    mediaIndex
                  ]
                }
                alt=""
                className="
                max-w-[82vw]
                max-h-[82vh]
                object-contain
                rounded-3xl
                "
              />
            )
          )}

        {phase ===
          "quote" && (
          <div
            className="
            max-w-xl
            text-center
            "
          >
            <p
              className="
              text-xl
              leading-[2]
              text-neutral-300
              "
            >
              {typedQuote}

              <span className="animate-pulse">
                |
              </span>
            </p>
          </div>
        )}

        {phase ===
          "done" && (
          <button
            onClick={() =>
              router.push(
                "/final"
              )
            }
            className="
            absolute
            bottom-20

            px-10
            py-4

            rounded-full

            border
            border-white/20

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