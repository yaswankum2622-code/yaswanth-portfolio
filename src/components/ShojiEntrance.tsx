"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import { useAnimationProvider } from "./AnimationProvider";
import { useSlashTransition } from "./SlashTransition";

type EntrancePhase = "idle" | "opening" | "closed";

const panelGridStyle = {
  backgroundImage: `
    linear-gradient(to right, rgba(200,32,45,0.16) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(200,32,45,0.16) 1px, transparent 1px),
    linear-gradient(180deg, rgba(4,4,4,0.98) 0%, rgba(15,11,10,0.94) 100%)
  `,
  backgroundSize: "52px 100%, 100% 52px, 100% 100%",
};

export function ShojiEntrance() {
  const { hasEnteredSession, markSessionEntered, reducedMotion } = useAnimationProvider();
  const { triggerSlash } = useSlashTransition();
  const [phase, setPhase] = useState<EntrancePhase>("idle");

  useEffect(() => {
    if (hasEnteredSession === false) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }

    document.body.style.overflow = "";

    return undefined;
  }, [hasEnteredSession]);

  const handleEnter = () => {
    if (phase !== "idle") {
      return;
    }

    if (reducedMotion) {
      setPhase("opening");
      window.setTimeout(() => {
        markSessionEntered();
        setPhase("closed");
      }, 180);
      return;
    }

    setPhase("opening");
    triggerSlash({ intensity: "full" });

    window.setTimeout(() => {
      markSessionEntered();
      setPhase("closed");
    }, 1780);
  };

  if (hasEnteredSession === null) {
    return <div aria-hidden className="fixed inset-0 z-[140] bg-[var(--ink)]" />;
  }

  return (
    <AnimatePresence>
      {hasEnteredSession ? null : (
        <motion.div
          key="shoji-entrance"
          aria-modal="true"
          role="dialog"
          className="fixed inset-0 z-[140] overflow-hidden bg-[var(--ink)] text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "opening" ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reducedMotion ? 0.18 : 0.3,
            delay: reducedMotion ? 0.05 : 1.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            aria-hidden
            className="absolute inset-y-0 left-0 w-1/2 border-r border-[var(--border-red)]/80 shadow-[inset_-0.5px_0_0_rgba(255,255,255,0.06)]"
            style={panelGridStyle}
            initial={{ x: 0 }}
            animate={{ x: phase === "opening" && !reducedMotion ? "-104%" : 0 }}
            transition={{ duration: 1.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-y-0 right-0 w-1/2 border-l border-[var(--border-red)]/80 shadow-[inset_0.5px_0_0_rgba(255,255,255,0.06)]"
            style={panelGridStyle}
            initial={{ x: 0 }}
            animate={{ x: phase === "opening" && !reducedMotion ? "104%" : 0 }}
            transition={{ duration: 1.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,32,45,0.12)_0%,transparent_36%),linear-gradient(180deg,rgba(4,4,4,0.25)_0%,rgba(4,4,4,0.8)_100%)]" />

          <motion.div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_58%)] blur-3xl"
            animate={{ opacity: phase === "opening" ? 0.4 : 0.18 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />

          {!reducedMotion ? (
            <motion.div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[2px] w-[140vw] -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] bg-[linear-gradient(90deg,rgba(200,32,45,0)_0%,rgba(200,32,45,0.68)_30%,rgba(255,244,228,0.96)_50%,rgba(249,115,22,0.8)_72%,rgba(249,115,22,0)_100%)] shadow-[0_0_36px_rgba(255,230,207,0.42)]"
              initial={{ scaleX: 0.08, opacity: 0 }}
              animate={{
                scaleX: phase === "opening" ? 1.08 : 0.08,
                opacity: phase === "opening" ? [0, 1, 0] : 0,
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          ) : null}

          <motion.div
            className="relative z-10 flex min-h-screen items-center justify-center px-6"
            initial={{ opacity: 1, y: 0 }}
            animate={{
              opacity: phase === "opening" ? 0 : 1,
              y: phase === "opening" ? -12 : 0,
              filter: phase === "opening" ? "blur(6px)" : "blur(0px)",
            }}
            transition={{ duration: reducedMotion ? 0.18 : 0.28, ease: "easeOut" }}
          >
            <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-black/42 px-6 py-10 text-center shadow-[0_32px_120px_rgba(0,0,0,0.58)] backdrop-blur-xl sm:px-10">
              <div className="mx-auto mb-6 h-px w-20 bg-[linear-gradient(90deg,transparent_0%,rgba(200,32,45,0.82)_50%,transparent_100%)]" />
              <h1 className="font-heading text-4xl font-semibold tracking-[0.1em] text-white sm:text-6xl">
                Yaswanth Forge
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 tracking-[0.08em] text-white/68 uppercase sm:text-[0.95rem]">
                AI engineering portfolio
              </p>
              <div className="relative mt-10 inline-flex">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.28)_0%,rgba(200,32,45,0.08)_55%,transparent_76%)] blur-2xl" />
                <motion.button
                  type="button"
                  onClick={handleEnter}
                  whileTap={{ scale: 0.96 }}
                  className="relative inline-flex items-center justify-center rounded-full border border-[var(--border-red)] bg-[linear-gradient(180deg,rgba(18,18,18,0.96)_0%,rgba(8,8,8,0.92)_100%)] px-7 py-3 text-sm font-semibold tracking-[0.18em] text-white uppercase shadow-[0_18px_48px_rgba(200,32,45,0.16)] transition hover:border-[rgba(249,115,22,0.5)] hover:text-white"
                >
                  Enter the Forge
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_58%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "opening" ? 0.55 : 0 }}
            transition={{ duration: 0.3, delay: 1.3, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
