"use client";

import { motion, useReducedMotion } from "motion/react";

import { StorySection } from "@/components/StorySection";
import { certifications } from "@/data/certifications";
import { assets } from "@/data/assets";
import type { StoryChapter } from "@/data/storyChapters";

type CertificationsProps = {
  chapter: StoryChapter;
};

export function Certifications({ chapter }: CertificationsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <StorySection
      id="certifications"
      chapterNumber={7}
      title={chapter.title}
      eyebrow={chapter.eyebrow}
      mood={chapter.mood}
      accent={chapter.accent}
      backgroundType="star-night"
      image={assets.githubStars}
      imagePosition="center"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((certification, index) => (
          <motion.article
            key={certification.id}
            className="group relative overflow-hidden border border-[rgba(148,163,184,0.18)] bg-[linear-gradient(180deg,rgba(7,10,18,0.72)_0%,rgba(10,14,22,0.92)_100%)] p-5 shadow-[0_20px_54px_rgba(0,0,0,0.18)]"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 26 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 0.72,
              delay: prefersReducedMotion ? 0 : index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="pointer-events-none absolute left-4 top-4 flex gap-2">
              <span className="size-2 rounded-full bg-white/82 shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
              <span className="size-1.5 rounded-full bg-[var(--gold)] shadow-[0_0_12px_rgba(234,179,8,0.45)]" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.5)_34%,rgba(234,179,8,0.65)_100%)] opacity-70" />
            <div className="space-y-3 pt-6">
              <p className="text-[0.68rem] tracking-[0.18em] text-white/54 uppercase">
                {certification.issuer}
              </p>
              <h3 className="text-xl font-semibold text-white">{certification.name}</h3>
              <p className="text-sm leading-7 text-white/66">
                Recognized learning that supports the broader portfolio narrative of applied AI,
                analytics, cloud, and product execution.
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </StorySection>
  );
}
