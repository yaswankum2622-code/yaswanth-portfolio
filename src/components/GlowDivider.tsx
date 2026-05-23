"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type GlowDividerProps = {
  accent?: string;
  className?: string;
};

function getAccentGradient(accent?: string) {
  const value = accent?.toLowerCase() ?? "";

  if (value.includes("blue") || value.includes("rain")) {
    return "from-[var(--rain-blue)] via-white/80 to-transparent";
  }

  if (value.includes("gold") || value.includes("green")) {
    return "from-[var(--gold)] via-[var(--green-life)] to-transparent";
  }

  if (value.includes("amber") || value.includes("orange") || value.includes("forge")) {
    return "from-[var(--forge-orange)] via-[var(--gold)] to-transparent";
  }

  return "from-[var(--samurai-red)] via-[var(--forge-orange)] to-transparent";
}

export function GlowDivider({ accent, className }: GlowDividerProps) {
  const prefersReducedMotion = useReducedMotion();
  const gradient = getAccentGradient(accent);

  if (prefersReducedMotion) {
    return (
      <div className={cn("relative h-px w-full max-w-56 overflow-hidden", className)}>
        <div className={cn("h-full w-full bg-gradient-to-r", gradient)} />
      </div>
    );
  }

  return (
    <motion.div
      className={cn("relative h-px w-full max-w-56 overflow-visible", className)}
      initial={{ scaleX: 0.1, opacity: 0.35 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ originX: 0 }}
    >
      <div className={cn("h-full w-full bg-gradient-to-r", gradient)} />
      <div
        className={cn(
          "absolute -inset-y-3 left-0 right-0 blur-md opacity-60",
          "bg-gradient-to-r",
          gradient,
        )}
      />
    </motion.div>
  );
}
