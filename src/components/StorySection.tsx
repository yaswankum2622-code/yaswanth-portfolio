"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "motion/react";

import {
  CinematicBackground,
  type BackgroundType,
  type ImagePosition,
} from "@/components/CinematicBackground";
import { useRecruiterMode } from "@/components/RecruiterModeProvider";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

type StorySectionProps = {
  id: string;
  chapterNumber: number;
  title: string;
  eyebrow: string;
  mood: string;
  accent: string;
  children: ReactNode;
  backgroundType: BackgroundType;
  image?: string | null;
  imagePosition?: ImagePosition;
  className?: string;
  hideHeader?: boolean;
};

export function StorySection({
  id,
  chapterNumber,
  title,
  eyebrow,
  mood,
  accent,
  children,
  backgroundType,
  image,
  imagePosition = "center",
  className,
  hideHeader = false,
}: StorySectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const { recruiterMode } = useRecruiterMode();

  return (
    <motion.section
      id={id}
      data-recruiter-mode={recruiterMode ? "true" : undefined}
      className={cn("relative isolate overflow-hidden scroll-mt-24", className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y: recruiterMode ? 28 : 48 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <CinematicBackground
        backgroundType={backgroundType}
        image={image}
        imagePosition={imagePosition}
      />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-black/15 to-[var(--ink)]" />
      <div
        className={cn(
          "relative mx-auto flex w-full max-w-7xl flex-col justify-center px-6 sm:px-8 lg:px-10",
          recruiterMode ? "min-h-[72vh] py-20" : "min-h-screen py-24",
        )}
      >
        {hideHeader ? null : (
          <SectionHeader
            chapterNumber={chapterNumber}
            title={title}
            eyebrow={eyebrow}
            subtitle={mood}
            accent={accent}
          />
        )}
        <motion.div
          className={cn(
            hideHeader ? "grid gap-6" : "mt-10 grid gap-6",
            recruiterMode ? "text-white/88" : "text-white/82",
          )}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: prefersReducedMotion ? 0 : 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}
