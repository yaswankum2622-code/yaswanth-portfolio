"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type MetricBadgeProps = {
  label: string;
  className?: string;
};

export function MetricBadge({ label, className }: MetricBadgeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <span
        className={cn(
          "border border-[rgba(249,115,22,0.18)] bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] px-3 py-2 text-[0.68rem] tracking-[0.16em] text-white/78 uppercase group-hover:border-[rgba(249,115,22,0.28)] group-hover:bg-white/[0.06] group-hover:text-white/92",
          className,
        )}
      >
        {label}
      </span>
    );
  }

  return (
    <motion.span
      className={cn(
        "border border-[rgba(249,115,22,0.18)] bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] px-3 py-2 text-[0.68rem] tracking-[0.16em] text-white/78 uppercase shadow-[0_0_0_rgba(249,115,22,0)] transition-[border-color,background-color,color,box-shadow] duration-300 group-hover:border-[rgba(249,115,22,0.28)] group-hover:bg-white/[0.06] group-hover:text-white/92 hover:shadow-[0_0_18px_rgba(249,115,22,0.18)]",
        className,
      )}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -1 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {label}
    </motion.span>
  );
}
