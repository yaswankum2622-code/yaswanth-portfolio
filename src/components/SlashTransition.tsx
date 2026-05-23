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
          <div className="absolute left-1/2 top-1/2 h-10 w-[170vw] -translate-x-1/2 -translate-y-1/2 rotate-[-14deg]">
            <motion.div
              className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(200,32,45,0)_0%,rgba(200,32,45,0.7)_26%,rgba(255,244,228,1)_50%,rgba(249,115,22,0.85)_74%,rgba(249,115,22,0)_100%)] shadow-[0_0_44px_rgba(255,235,215,0.42)]"
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
              className="absolute inset-x-0 top-1/2 h-[26px] -translate-y-1/2 bg-[linear-gradient(90deg,rgba(200,32,45,0)_0%,rgba(255,245,230,0.12)_36%,rgba(255,245,230,0.48)_50%,rgba(249,115,22,0.16)_70%,rgba(249,115,22,0)_100%)] blur-md"
              initial={{ scaleX: 0.08, opacity: 0 }}
              animate={{ scaleX: 1.12, opacity: [0, isFull ? 0.9 : 0.55, 0] }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.35,
                times: [0, 0.2, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            <motion.div
              className="absolute right-[6vw] top-1/2 flex -translate-y-1/2 items-center"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: [0, 1, 0], scale: [0.88, 1, 0.94] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="h-6 w-[2px] rounded-full bg-[rgba(255,244,228,0.72)] shadow-[0_0_12px_rgba(255,244,228,0.3)]" />
              <span className="h-3.5 w-4 rounded-[2px] border border-white/12 bg-[linear-gradient(180deg,rgba(70,8,12,0.9)_0%,rgba(18,18,18,0.96)_100%)]" />
              <span className="h-4 w-18 border border-white/10 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.12)_0_4px,rgba(53,9,12,0.94)_4px_9px)] shadow-[0_8px_22px_rgba(0,0,0,0.35)]" />
              <span className="h-2.5 w-2.5 rounded-full border border-white/12 bg-black/88" />
            </motion.div>
          </div>
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
