"use client";

import { motion, useReducedMotion } from "motion/react";

import { StorySection } from "@/components/StorySection";
import { assets } from "@/data/assets";
import { skillGroups } from "@/data/skills";
import type { StoryChapter } from "@/data/storyChapters";
import { cn } from "@/lib/utils";

type SkillsProps = {
  chapter: StoryChapter;
};

const bandStyles = {
  Advanced: {
    container: "border-[rgba(200,32,45,0.24)] bg-[linear-gradient(135deg,rgba(20,8,8,0.88)_0%,rgba(10,8,8,0.96)_100%)]",
    label: "text-[var(--samurai-red)]",
    line: "from-[var(--samurai-red)] via-[var(--forge-orange)] to-transparent",
    chip: "border-[rgba(200,32,45,0.22)] bg-[rgba(200,32,45,0.10)] text-white",
    symbol: "bg-[linear-gradient(135deg,rgba(200,32,45,0.92)_0%,rgba(249,115,22,0.64)_100%)] text-white",
  },
  Intermediate: {
    container: "border-[rgba(234,179,8,0.24)] bg-[linear-gradient(135deg,rgba(20,14,8,0.84)_0%,rgba(11,9,8,0.94)_100%)]",
    label: "text-[var(--gold)]",
    line: "from-[var(--gold)] via-[var(--forge-orange)] to-transparent",
    chip: "border-[rgba(234,179,8,0.2)] bg-[rgba(234,179,8,0.06)] text-white/88",
    symbol: "border border-[rgba(234,179,8,0.3)] bg-[rgba(234,179,8,0.12)] text-[var(--gold)]",
  },
  Familiar: {
    container: "border-white/12 bg-[linear-gradient(135deg,rgba(12,12,12,0.84)_0%,rgba(8,8,8,0.94)_100%)]",
    label: "text-white/72",
    line: "from-white/45 via-white/20 to-transparent",
    chip: "border-white/10 bg-white/[0.03] text-white/74",
    symbol: "border border-white/12 bg-white/[0.03] text-white/54",
  },
} as const;

export function Skills({ chapter }: SkillsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <StorySection
      id="skills"
      chapterNumber={4}
      title={chapter.title}
      eyebrow={chapter.eyebrow}
      mood={chapter.mood}
      accent={chapter.accent}
      backgroundType="forge-fire"
      image={assets.slash}
      imagePosition="center"
    >
      <div className="relative space-y-6">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[12%] top-16 h-28 w-28 rounded-full bg-[rgba(249,115,22,0.12)] blur-3xl" />
          <div className="absolute right-[14%] top-32 h-36 w-36 rounded-full bg-[rgba(200,32,45,0.1)] blur-3xl" />
          <div className="absolute left-[48%] bottom-8 h-24 w-24 rounded-full bg-[rgba(251,191,36,0.08)] blur-3xl" />
        </div>

        {skillGroups.map((group, groupIndex) => {
          const palette = bandStyles[group.title];

          return (
            <motion.article
              key={group.id}
              className={cn(
                "relative overflow-hidden border p-5 shadow-[0_22px_60px_rgba(0,0,0,0.2)] sm:p-6",
                palette.container,
              )}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.72,
                delay: prefersReducedMotion ? 0 : groupIndex * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="grid gap-5 lg:grid-cols-[13rem_minmax(0,1fr)] lg:items-start">
                <div className="space-y-3">
                  <p className={cn("text-lg font-semibold tracking-[0.22em] uppercase", palette.label)}>
                    {group.title}
                  </p>
                  <div className={cn("h-px w-full bg-gradient-to-r", palette.line)} />
                  <p className="text-sm leading-7 text-white/68">{group.description}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((item, itemIndex) => (
                    <motion.div
                      key={`${group.id}-${item.name}`}
                      className={cn(
                        "group flex items-center gap-3 border px-3 py-3 transition-colors duration-300 hover:bg-white/[0.05]",
                        palette.chip,
                      )}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.14 }}
                      transition={{
                        duration: 0.42,
                        delay: prefersReducedMotion ? 0 : groupIndex * 0.08 + itemIndex * 0.025,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <span
                        className={cn(
                          "inline-flex h-9 min-w-9 items-center justify-center px-2 text-[0.65rem] font-semibold tracking-[0.14em] uppercase",
                          palette.symbol,
                        )}
                      >
                        {item.symbol}
                      </span>
                      <span className="text-sm leading-6 text-white/84">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </StorySection>
  );
}
