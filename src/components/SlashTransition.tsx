"use client";

import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

import { useAnimationProvider, type TriggerSlashOptions } from "./AnimationProvider";

type SlashTransitionProps = {
  className?: string;
};

export function useSlashTransition() {
  const { triggerSlash } = useAnimationProvider();

  return {
    triggerSlash: (options?: TriggerSlashOptions) => triggerSlash(options),
  };
}

export function SlashTransition({ className }: SlashTransitionProps) {
  const { slashEvent, reducedMotion } = useAnimationProvider();

  if (reducedMotion) {
    return null;
  }

  const activeSlashId = slashEvent?.id ?? null;
  const isFull = (slashEvent?.intensity ?? "full") === "full";

  return (
    <AnimatePresence>
      {activeSlashId ? (
        <motion.div
          key={activeSlashId}
          aria-hidden
          className={cn("pointer-events-none fixed inset-0 z-[130] overflow-hidden", className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 h-[3px] w-[170vw] origin-center -translate-x-1/2 -translate-y-1/2 rotate-[-14deg] rounded-full bg-[linear-gradient(90deg,rgba(200,32,45,0)_0%,rgba(200,32,45,0.7)_26%,rgba(255,244,228,1)_50%,rgba(249,115,22,0.85)_74%,rgba(249,115,22,0)_100%)] shadow-[0_0_44px_rgba(255,235,215,0.42)]"
            initial={{ scaleX: 0.12, opacity: 0 }}
            animate={{ scaleX: 1.08, opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.35,
              times: [0, 0.24, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[26px] w-[165vw] origin-center -translate-x-1/2 -translate-y-1/2 rotate-[-14deg] bg-[linear-gradient(90deg,rgba(200,32,45,0)_0%,rgba(255,245,230,0.12)_36%,rgba(255,245,230,0.48)_50%,rgba(249,115,22,0.16)_70%,rgba(249,115,22,0)_100%)] blur-md"
            initial={{ scaleX: 0.08, opacity: 0 }}
            animate={{ scaleX: 1.12, opacity: [0, isFull ? 0.9 : 0.55, 0] }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.35,
              times: [0, 0.2, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
          />
          {isFull
            ? Array.from({ length: 8 }).map((_, index) => (
                <motion.span
                  key={`${activeSlashId}-${index}`}
                  className="absolute left-1/2 top-1/2 h-[2px] w-8 rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.88),rgba(249,115,22,0))]"
                  initial={{
                    x: -18,
                    y: -6,
                    rotate: -14,
                    opacity: 0,
                    scaleX: 0.3,
                  }}
                  animate={{
                    x: 120 + index * 24,
                    y: -60 + index * 18,
                    opacity: [0, 0.85, 0],
                    scaleX: [0.3, 1, 0.2],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.34,
                    delay: index * 0.01,
                    ease: "easeOut",
                  }}
                />
              ))
            : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
