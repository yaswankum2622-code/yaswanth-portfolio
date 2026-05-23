"use client";

import { motion, useReducedMotion } from "motion/react";

import { StorySection } from "@/components/StorySection";
import { assets } from "@/data/assets";
import { skillGroups, type SkillGroup } from "@/data/skills";
import type { StoryChapter } from "@/data/storyChapters";
import { cn } from "@/lib/utils";

type SkillsProps = {
  chapter: StoryChapter;
};

function getGroupAccent(group: SkillGroup) {
  const accent = group.accent.toLowerCase();

  if (accent.includes("gold")) {
    return {
      border: "border-[rgba(234,179,8,0.24)]",
      line: "from-[var(--gold)] via-[var(--forge-orange)] to-transparent",
      badge: "border-[rgba(234,179,8,0.24)] text-[var(--gold)]",
    };
  }

  if (accent.includes("amber")) {
    return {
      border: "border-[rgba(245,158,11,0.24)]",
      line: "from-[var(--forge-orange)] via-[var(--gold)] to-transparent",
      badge: "border-[rgba(245,158,11,0.24)] text-[var(--forge-orange)]",
    };
  }

  return {
    border: "border-[rgba(200,32,45,0.24)]",
    line: "from-[var(--samurai-red)] via-[var(--forge-orange)] to-transparent",
    badge: "border-[rgba(200,32,45,0.24)] text-white/78",
  };
}

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
      image={assets.skillsForge}
      imagePosition="center-right"
    >
      <div className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[8%] top-10 h-1.5 w-1.5 rounded-full bg-[var(--forge-orange)]/45 blur-[1px] animate-pulse" />
          <div className="absolute left-[32%] top-36 h-2 w-2 rounded-full bg-[var(--gold)]/30 blur-[1px] animate-pulse" />
          <div className="absolute right-[18%] top-16 h-1.5 w-1.5 rounded-full bg-[var(--samurai-red)]/34 blur-[1px] animate-pulse" />
          <div className="absolute right-[30%] bottom-8 h-2 w-2 rounded-full bg-[var(--forge-orange)]/28 blur-[1px] animate-pulse" />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, groupIndex) => {
            const palette = getGroupAccent(group);

            return (
              <motion.article
                key={group.id}
                data-cursor="project-card"
                className={cn(
                  "group relative overflow-hidden bg-black/28 p-5 shadow-[0_24px_54px_rgba(0,0,0,0.18)]",
                  palette.border,
                )}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 34 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.72,
                  delay: prefersReducedMotion ? 0 : groupIndex * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  aria-hidden
                  className={cn(
                    "absolute inset-y-4 left-0 w-px bg-gradient-to-b opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    palette.line,
                  )}
                />
                <div className="space-y-3">
                  <p className={cn("text-xs font-medium tracking-[0.18em] uppercase", palette.badge)}>
                    {group.title}
                  </p>
                  <p className="text-sm leading-6 text-white/68">{group.description}</p>
                </div>
                <div className="mt-5 grid gap-2">
                  {group.items.map((item, itemIndex) => (
                    <motion.div
                      key={`${group.id}-${item.name}`}
                      className="flex items-center justify-between gap-3 border border-white/6 bg-white/[0.02] px-3 py-2 transition-colors duration-300 hover:bg-white/[0.05]"
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.4,
                        delay: prefersReducedMotion ? 0 : groupIndex * 0.08 + itemIndex * 0.03,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <span className="text-sm text-white/82">{item.name}</span>
                      <span className="border border-white/8 px-2 py-1 text-[0.66rem] tracking-[0.14em] text-white/58 uppercase transition-colors duration-300 group-hover:text-white/76">
                        {item.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </StorySection>
  );
}
