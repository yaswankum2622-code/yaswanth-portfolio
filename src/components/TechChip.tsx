"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type TechChipProps = {
  label: string;
  className?: string;
};

export function TechChip({ label, className }: TechChipProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <span
        className={cn(
          "border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[0.68rem] tracking-[0.14em] text-white/70 uppercase group-hover:border-[rgba(249,115,22,0.2)] group-hover:bg-white/[0.06] group-hover:text-white",
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
        "border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[0.68rem] tracking-[0.14em] text-white/70 uppercase transition-[border-color,background-color,color,box-shadow] duration-300 group-hover:border-[rgba(249,115,22,0.2)] group-hover:bg-white/[0.06] group-hover:text-white hover:border-[rgba(249,115,22,0.2)] hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_18px_rgba(249,115,22,0.16)]",
        className,
      )}
      whileHover={{ y: -1 }}
    >
      {label}
    </motion.span>
  );
}
