"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function MemoriesSection() {
  const router = useRouter();

  return (
    <section
      className="
        h-screen
        bg-black
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      <div
        className="
          text-center
          px-8
          flex
          flex-col
          items-center
        "
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
          className="
            text-sm
            uppercase

            text-neutral-700

            tracking-[1.2em]
          "
        >
          CHAPTER I
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 2.5,
          }}
          className="
            mt-10

            text-[4rem]
            md:text-[6.5rem]

            font-extralight

            tracking-[0.18em]

            leading-none
          "
        >
          MEMORIES
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 3,
            duration: 2,
          }}
          className="
            mt-20

            max-w-xl

            text-[1.4rem]

            text-neutral-500

            leading-[2.3]

            font-light
          "
        >
          <p>We made memories</p>

          <p className="mt-2">
            before we realised
          </p>

          <p className="mt-2">
            we were making them.
          </p>
        </motion.div>

        <motion.button
          onClick={() =>
            router.push(
              "/first-movie"
            )
          }
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 6,
            duration: 1.5,
          }}
          className="
            mt-24

            px-10
            py-4

            rounded-none

            border

            border-white/15

            text-white/80

            uppercase

            tracking-[0.25em]

            hover:bg-white

            hover:text-black

            transition
          "
        >
          Continue →
        </motion.button>
      </div>
    </section>
  );
}