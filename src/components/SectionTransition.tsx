"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export type TransitionVariant =
  | "cherry mist"
  | "forge ignition"
  | "red moon fall"
  | "red slash sweep"
  | "construction glow"
  | "star field"
  | "golden dawn"
  | "rain fade"
  | "light reveal";

type SectionTransitionProps = {
  variant: TransitionVariant;
  className?: string;
};

export function SectionTransition({ variant, className }: SectionTransitionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div aria-hidden className={cn("pointer-events-none relative -mt-16 h-20 w-full", className)} />;
  }

  if (variant === "cherry mist") {
    return (
      <div aria-hidden className={cn("pointer-events-none relative -mt-20 h-32 w-full overflow-hidden", className)}>
        <motion.div
          className="absolute inset-x-[8%] top-1/2 h-18 -translate-y-1/2 rounded-full bg-white/8 blur-3xl"
          initial={{ opacity: 0.04, scaleX: 0.74 }}
          whileInView={{ opacity: 0.26, scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
        />
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.span
            key={`petal-${index}`}
            className="absolute top-1/2 h-3 w-2.5 rounded-full bg-[linear-gradient(180deg,rgba(246,122,166,0.82)_0%,rgba(249,115,22,0.35)_100%)] blur-[0.4px]"
            style={{ left: `${18 + index * 14}%` }}
            initial={{ opacity: 0, y: 18, rotate: -28, scale: 0.82 }}
            whileInView={{ opacity: [0, 0.72, 0], y: [-4, -26, -42], x: [0, 10, 22], rotate: [-24, 0, 16], scale: [0.82, 1, 0.72] }}
            viewport={{ once: true, amount: 0.78 }}
            transition={{ duration: 1.4, delay: index * 0.05, ease: "easeOut" }}
          />
        ))}
      </div>
    );
  }

  if (variant === "forge ignition") {
    return (
      <div aria-hidden className={cn("pointer-events-none relative -mt-18 h-28 w-full overflow-hidden", className)}>
        <motion.div
          className="absolute inset-x-[16%] top-1/2 h-20 -translate-y-1/2 bg-[radial-gradient(circle,rgba(245,158,11,0.18)_0%,rgba(249,115,22,0.08)_38%,transparent_72%)] blur-2xl"
          initial={{ opacity: 0.08, scaleX: 0.72 }}
          whileInView={{ opacity: 0.85, scaleX: 1.04 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute inset-x-[22%] top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(245,158,11,0.7)_24%,rgba(249,115,22,0.92)_58%,transparent_100%)]"
          initial={{ opacity: 0.14, scaleX: 0.34 }}
          whileInView={{ opacity: 0.94, scaleX: 1 }}
          viewport={{ once: true, amount: 0.78 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    );
  }

  if (variant === "red moon fall") {
    return (
      <div aria-hidden className={cn("pointer-events-none relative -mt-18 h-28 w-full overflow-hidden", className)}>
        <motion.div
          className="absolute left-1/2 top-[-1.2rem] h-24 w-24 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.2)_0%,rgba(124,14,28,0.14)_42%,transparent_72%)] blur-xl"
          initial={{ opacity: 0, scale: 0.72 }}
          whileInView={{ opacity: 1, scale: 1.04 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.12, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute inset-x-[14%] bottom-4 h-12 bg-[linear-gradient(180deg,rgba(124,14,28,0.18)_0%,rgba(3,3,3,0)_100%)] blur-2xl"
          initial={{ opacity: 0.08, scaleX: 0.82 }}
          whileInView={{ opacity: 0.82, scaleX: 1 }}
          viewport={{ once: true, amount: 0.78 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    );
  }

  if (variant === "red slash sweep") {
    return (
      <div aria-hidden className={cn("pointer-events-none relative -mt-16 h-24 w-full overflow-hidden", className)}>
        <motion.div
          className="absolute inset-x-[10%] top-1/2 h-14 -translate-y-1/2 bg-[radial-gradient(circle,rgba(153,27,27,0.18)_0%,rgba(0,0,0,0)_68%)] blur-3xl"
          initial={{ opacity: 0.08, scaleX: 0.72 }}
          whileInView={{ opacity: 0.9, scaleX: 1.04 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-px w-[120%] -translate-x-1/2 -translate-y-1/2 rotate-[-7deg] bg-gradient-to-r from-transparent via-[var(--samurai-red)] to-transparent shadow-[0_0_24px_rgba(220,38,38,0.45)]"
          initial={{ scaleX: 0.45, opacity: 0.2 }}
          whileInView={{ scaleX: 1, opacity: 0.95 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    );
  }

  if (variant === "construction glow") {
    return (
      <div aria-hidden className={cn("pointer-events-none relative -mt-16 h-28 w-full overflow-hidden", className)}>
        <motion.div
          className="absolute inset-x-[12%] top-1/2 h-18 -translate-y-1/2 bg-[radial-gradient(circle,rgba(234,179,8,0.16)_0%,rgba(249,115,22,0.12)_38%,transparent_72%)] blur-3xl"
          initial={{ opacity: 0.08, scaleX: 0.72 }}
          whileInView={{ opacity: 0.94, scaleX: 1.04 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.span
            key={`spark-${index}`}
            className="absolute bottom-5 h-1.5 w-1.5 rounded-full bg-[var(--gold)] blur-[0.6px]"
            style={{ left: `${20 + index * 10}%` }}
            initial={{ opacity: 0, y: 10, scale: 0.7 }}
            whileInView={{ opacity: [0, 0.9, 0], y: [-4, -20, -34], scale: [0.7, 1.1, 0.6] }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.28, delay: index * 0.04, ease: "easeOut" }}
          />
        ))}
      </div>
    );
  }

  if (variant === "star field") {
    return (
      <div aria-hidden className={cn("pointer-events-none relative -mt-16 h-28 w-full overflow-hidden", className)}>
        <motion.div
          className="absolute inset-x-[18%] top-1/2 h-14 -translate-y-1/2 bg-[radial-gradient(circle,rgba(245,158,11,0.12)_0%,rgba(96,165,250,0.08)_34%,transparent_72%)] blur-2xl"
          initial={{ opacity: 0.08, scaleX: 0.72 }}
          whileInView={{ opacity: 0.88, scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.span
            key={`star-${index}`}
            className="absolute rounded-full bg-white/90 shadow-[0_0_14px_rgba(255,255,255,0.45)]"
            style={{
              left: `${14 + index * 10}%`,
              top: `${24 + (index % 3) * 12}%`,
              width: `${2 + (index % 2)}px`,
              height: `${2 + (index % 2)}px`,
            }}
            initial={{ opacity: 0, scale: 0.45 }}
            whileInView={{ opacity: [0, 1, 0.36], scale: [0.45, 1.15, 0.82] }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.6, delay: index * 0.06, ease: "easeOut" }}
          />
        ))}
      </div>
    );
  }

  if (variant === "golden dawn") {
    return (
      <div aria-hidden className={cn("pointer-events-none relative -mt-16 h-28 w-full overflow-hidden", className)}>
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.span
            key={`dawn-star-${index}`}
            className="absolute rounded-full bg-white/80 shadow-[0_0_14px_rgba(255,255,255,0.28)]"
            style={{
              left: `${20 + index * 10}%`,
              top: `${22 + (index % 2) * 8}%`,
              width: `${2 + (index % 2)}px`,
              height: `${2 + (index % 2)}px`,
            }}
            initial={{ opacity: 0.4, scale: 1 }}
            whileInView={{ opacity: [0.4, 0.12, 0], scale: [1, 0.72, 0.5] }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.1, delay: index * 0.04, ease: "easeOut" }}
          />
        ))}
        <motion.div
          className="absolute inset-x-[12%] bottom-3 h-16 bg-[radial-gradient(circle,rgba(245,158,11,0.18)_0%,rgba(34,197,94,0.10)_38%,transparent_72%)] blur-3xl"
          initial={{ opacity: 0.08, scaleX: 0.72 }}
          whileInView={{ opacity: 0.95, scaleX: 1.06 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.12, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    );
  }

  if (variant === "rain fade") {
    return (
      <div aria-hidden className={cn("pointer-events-none relative -mt-16 h-28 w-full overflow-hidden", className)}>
        <motion.div
          className="absolute inset-x-[10%] top-1/2 h-14 -translate-y-1/2 bg-[linear-gradient(90deg,rgba(245,158,11,0.08)_0%,rgba(96,165,250,0.14)_54%,rgba(14,165,233,0.08)_100%)] blur-3xl"
          initial={{ opacity: 0.08, scaleX: 0.72 }}
          whileInView={{ opacity: 0.88, scaleX: 1.02 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.08, ease: [0.22, 1, 0.36, 1] }}
        />
        {Array.from({ length: 9 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute top-0 w-px bg-gradient-to-b from-[var(--rain-blue)]/0 via-[var(--rain-blue)]/70 to-transparent"
            style={{ left: `${10 + index * 10}%`, height: `${40 + (index % 3) * 18}px` }}
            initial={{ opacity: 0, y: -18 }}
            whileInView={{ opacity: [0, 0.75, 0.05], y: 34 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.35, delay: index * 0.05, ease: "linear" }}
          />
        ))}
      </div>
    );
  }

  return (
    <div aria-hidden className={cn("pointer-events-none relative -mt-16 h-24 w-full overflow-hidden", className)}>
      <motion.div
        className="absolute inset-x-[18%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent shadow-[0_0_32px_rgba(245,158,11,0.4)]"
        initial={{ opacity: 0.12, scaleX: 0.35 }}
        whileInView={{ opacity: 0.85, scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
