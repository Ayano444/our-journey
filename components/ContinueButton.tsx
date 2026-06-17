"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ContinueButtonProps = {
  href: string;
  label?: string;
  visible?: boolean;
};

export function ContinueButton({
  href,
  label = "Continue",
  visible = true,
}: ContinueButtonProps) {
  if (!visible) {
    return null;
  }

  return (
    <motion.div
      className="fixed bottom-10 left-0 right-0 z-20 flex justify-center px-6 md:bottom-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Link
        href={href}
        className="border border-white/20 px-10 py-4 text-sm tracking-[0.35em] text-neutral-300 uppercase transition-colors duration-500 hover:border-white/40 hover:text-white"
      >
        {label}
      </Link>
    </motion.div>
  );
}
