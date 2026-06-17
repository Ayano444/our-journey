"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function FinalSection() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Step 1: Show "18 June — 18 June" after 1s
    timers.push(
      setTimeout(() => {
        setStep(1);
      }, 1000)
    );

    // Step 2: Show "One year." after 3s
    timers.push(
      setTimeout(() => {
        setStep(2);
      }, 4000)
    );

    // Step 3: Show "And somehow— it still feels too small." after 4s
    timers.push(
      setTimeout(() => {
        setStep(3);
      }, 8000)
    );

    // Step 4: Show "Some feelings never fit inside time." after 4s
    timers.push(
      setTimeout(() => {
        setStep(4);
      }, 12000)
    );

    // Step 5: Show button after 3s
    timers.push(
      setTimeout(() => {
        setStep(5);
      }, 15000)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* Subtle animated vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] animate-[pulse_8s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8">
        {/* Step 1: Date */}
        {step >= 1 && (
          <div className="mb-12 text-center opacity-0 animate-[fadeIn_1.5s_ease-out_forwards]">
            <p className="text-sm md:text-base text-neutral-400 tracking-widest">
              18 June — 18 June
            </p>
          </div>
        )}

        {/* Step 2: One year */}
        {step >= 2 && (
          <div className="mb-16 text-center opacity-0 animate-[fadeUp_2s_ease-out_forwards]">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white">
              One year.
            </h1>
          </div>
        )}

        {/* Step 3: And somehow */}
        {step >= 3 && (
          <div className="mb-12 max-w-2xl text-center opacity-0 animate-[fadeIn_2s_ease-out_forwards]">
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              And somehow—
              <br />
              it still feels too small.
            </p>
          </div>
        )}

        {/* Step 4: Some feelings */}
        {step >= 4 && (
          <div className="mb-20 max-w-xl text-center opacity-0 animate-[fadeIn_2.5s_ease-out_forwards]">
            <p className="text-base md:text-lg text-neutral-400 italic leading-relaxed">
              "Some feelings never fit inside time."
            </p>
          </div>
        )}

        {/* Step 5: Button */}
        {step >= 5 && (
          <button
            onClick={() => router.push("/letter")}
            className="rounded-full border border-white/30 px-12 py-4 text-sm tracking-[0.3em] text-white transition-all duration-700 hover:border-white/60 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] opacity-0 animate-[fadeIn_1.5s_ease-out_forwards]"
          >
            OPEN LETTER
          </button>
        )}
      </div>

      {/* Bottom: made with love */}
      <div className="absolute bottom-8 left-0 right-0 text-center opacity-0 animate-[fadeIn_2s_ease-out_3s_forwards]">
        <p className="text-xs text-neutral-600 tracking-widest">
          made with love.
        </p>
      </div>
    </section>
  );
}
