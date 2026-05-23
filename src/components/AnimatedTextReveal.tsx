"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type AnimatedTextRevealProps = {
  text: string;
  className?: string;
  itemClassName?: string;
  splitBy?: "words" | "lines";
  delay?: number;
};

export function AnimatedTextReveal({
  text,
  className,
  itemClassName,
  splitBy = "words",
  delay = 0,
}: AnimatedTextRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const segments =
    splitBy === "lines"
      ? text.split("\n").filter(Boolean)
      : text.split(" ").filter(Boolean);

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={cn(
        splitBy === "words"
          ? "inline-flex flex-wrap gap-x-[0.35em] gap-y-[0.12em]"
          : "inline-flex flex-col gap-y-2",
        className,
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: splitBy === "words" ? 0.035 : 0.08,
          },
        },
      }}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={`${splitBy}-${index}-${segment}`}
          className={cn("inline-block will-change-transform", itemClassName)}
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
              filter: "blur(10px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {segment}
        </motion.span>
      ))}
    </motion.span>
  );
}
