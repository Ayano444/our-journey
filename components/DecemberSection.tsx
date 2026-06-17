"use client";

import {
  JSX,
  useEffect,
  useState,
} from "react";

import { useRouter } from "next/navigation";

type DecemberSectionProps = {
  onComplete?: () => void;
};

const paragraphs = [
  "DECEMBER",

  `And then came December.

Probably the month that changed us the most.

Especially you.`,

  `Not because something dramatic happened in one day—

but because things that stayed quiet for a long time
finally became impossible to ignore.`,

  `I remember that period too.

Reading those chats.

Thinking too much.

Questioning things I never thought I would question.

There were moments I genuinely asked myself—

do I still want this relationship?`,

  `And if I'm honest—

some parts still hurt.

Not because of what was said.

But because I realised there were thoughts,
fears,
and struggles—

you carried alone.`,

  `December was sad.

We paused.

We got uncomfortable.

We said things we normally avoided.

Things that could've pushed us apart.`,

  `But somehow—

it did the opposite.`,

  `We understood each other better.

We stopped pretending.

We became more honest.

More real.`,

  `I could write pages about December.

But we both know that month.

We lived it.`,

  `So instead—

let's move forward.`,
];

export function DecemberSection({
  onComplete,
}: DecemberSectionProps): JSX.Element {
  const router =
    useRouter();

  const [scene, setScene] =
    useState(0);

  const [text, setText] =
    useState("");

  const [done, setDone] =
    useState(false);

  const current =
    paragraphs[scene];

  useEffect(() => {
    let i = 0;

    setText("");

    const speed =
      scene === 0
        ? 160
        : 47;

    const typing =
      setInterval(() => {
        if (
          i >=
          current.length
        ) {
          clearInterval(
            typing
          );

          setTimeout(() => {
            if (
              scene <
              paragraphs.length -
                1
            ) {
              setScene(
                (
                  s
                ) =>
                  s + 1
              );
            } else {
              setDone(
                true
              );

              if (
                onComplete
              ) {
                setTimeout(
                  onComplete,
                  3000
                );
              }
            }
          }, 1800);

          return;
        }

        setText(
          current.slice(
            0,
            i + 1
          )
        );

        i++;
      }, speed);

    return () =>
      clearInterval(
        typing
      );
  }, [scene]);

  return (
    <section
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
          max-w-4xl
          px-10
          text-center

          animate-[fade_0.8s]
        "
      >
        <div
          className={`
            whitespace-pre-line

            leading-[2]

            transition-all
            duration-1000

            ${
              scene === 0
                ? `
                text-6xl
                md:text-8xl
                tracking-[0.4em]
                font-thin
              `
                : `
                text-xl
                md:text-3xl
                text-neutral-300
              `
            }
          `}
        >
          {text}

          {!done && (
            <span
              className="
                animate-pulse
              "
            >
              |
            </span>
          )}
        </div>

        {done && (
          <button
            onClick={() =>
              router.push(
                "/birthday"
              )
            }
            className="
              mt-24

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
        )}
      </div>
    </section>
  );
}