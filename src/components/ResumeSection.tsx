"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "motion/react";

import { AnimatedTextReveal } from "@/components/AnimatedTextReveal";
import { cn } from "@/lib/utils";

type ResumeSectionProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  index?: number;
};

export function ResumeSection({
  title,
  eyebrow,
  children,
  className,
  index = 0,
}: ResumeSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className={cn(
        "border border-[rgba(200,32,45,0.14)] bg-[linear-gradient(180deg,rgba(8,8,8,0.74)_0%,rgba(14,12,12,0.92)_100%)] p-5 shadow-[0_20px_54px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-6",
        className,
      )}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 26, clipPath: "inset(0 0 10% 0)" }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.72,
        delay: prefersReducedMotion ? 0 : index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="space-y-3 border-b border-white/8 pb-4">
        {eyebrow ? (
          <p className="text-[0.68rem] tracking-[0.18em] text-[var(--forge-orange)] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-heading text-2xl tracking-[0.04em] text-white sm:text-3xl">
          <AnimatedTextReveal text={title} />
        </h2>
      </div>
      <div className="pt-5">{children}</div>
    </motion.section>
  );
}
