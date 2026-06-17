"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { SceneLayout } from "@/components/SceneLayout";
import { MemoryBlock } from "@/components/MemoryBlock";

export function FirstMovieSection() {
  const router = useRouter();

  return (
    <SceneLayout className="story-section--tall">
      <div
        className="
          max-w-4xl
          mx-auto
          px-8
          py-32
        "
      >
        <MemoryBlock delay={0}>
          <div
            className="
              text-center
            "
          >
            <div
              className="
                text-sm
                tracking-[0.8em]
                text-neutral-600
                uppercase
              "
            >
              First Memory
            </div>

            <h1
              className="
                mt-8
                text-5xl
                md:text-7xl
                font-extralight
                tracking-[0.08em]
              "
            >
              Casablanca
            </h1>
          </div>
        </MemoryBlock>

        <MemoryBlock
          delay={0.4}
          className="mt-28"
        >
          <div
            className="
              overflow-hidden
              rounded-3xl
            "
          >
            <Image
              src="/memories/first-movie/title.png"
              alt="Casablanca"
              width={1600}
              height={900}
              className="
                w-full
                object-cover
              "
            />
          </div>
        </MemoryBlock>

        <MemoryBlock
          delay={0.8}
          className="
            mt-12
            text-center
          "
        >
          <p
            className="
              text-xl
              leading-[2.2]
              text-neutral-400
            "
          >
            We didn’t know then.
            <br />
            But this would become
            <br />
            one of those moments
            <br />
            we’d remember later.
          </p>
        </MemoryBlock>

        <MemoryBlock
          delay={1.2}
          className="mt-36"
        >
          <Image
            src="/memories/first-movie/discord1.png"
            alt="discord"
            width={1200}
            height={1600}
            className="
              w-full
              rounded-3xl
              object-cover
            "
          />
        </MemoryBlock>

        <MemoryBlock
          delay={1.5}
          className="
            mt-12
            text-center
          "
        >
          <p
            className="
              text-xl
              leading-[2.1]
              text-neutral-400
            "
          >
            Watching a movie with you
            <br />
            felt strangely peaceful.
          </p>
        </MemoryBlock>

        <MemoryBlock
          delay={1.8}
          className="mt-36"
        >
          <Image
            src="/memories/first-movie/discord2.png"
            alt="discord"
            width={1200}
            height={1600}
            className="
              w-full
              rounded-3xl
              object-cover
            "
          />
        </MemoryBlock>

        <MemoryBlock
          delay={2.2}
          className="
            mt-12
            text-center
          "
        >
          <p
            className="
              text-xl
              leading-[2.2]
              text-neutral-500
            "
          >
            Nothing extraordinary happened.
            <br />
            Yet somehow
            <br />
            I never forgot it.
          </p>
        </MemoryBlock>

        <MemoryBlock
          delay={2.6}
          className="
            mt-32
            flex
            justify-center
          "
        >
          <button
            onClick={() =>
              router.push(
                "/first-meet"
              )
            }
            className="
              px-10
              py-4
              border
              border-white/20
              rounded-none
              uppercase
              tracking-[0.25em]
              text-white/80
              hover:bg-white
              hover:text-black
              transition
            "
          >
            Continue →
          </button>
        </MemoryBlock>
      </div>
    </SceneLayout>
  );
}