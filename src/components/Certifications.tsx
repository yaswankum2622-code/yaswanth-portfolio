"use client";

import { motion, useReducedMotion } from "motion/react";

import { SafeImage } from "@/components/SafeImage";
import { StorySection } from "@/components/StorySection";
import { assets } from "@/data/assets";
import { certifications } from "@/data/certifications";
import type { StoryChapter } from "@/data/storyChapters";

type CertificationsProps = {
  chapter: StoryChapter;
};

export function Certifications({ chapter }: CertificationsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <StorySection
      id="certifications"
      chapterNumber={8}
      title={chapter.title}
      eyebrow={chapter.eyebrow}
      mood={chapter.mood}
      accent={chapter.accent}
      backgroundType="star-night"
      image={assets.certificationStars}
      imagePosition="center"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(18rem,24rem)_minmax(0,1fr)] lg:items-start">
        <motion.div
          className="relative overflow-hidden border border-[rgba(148,163,184,0.18)] bg-[linear-gradient(180deg,rgba(8,10,18,0.76)_0%,rgba(7,9,16,0.92)_100%)] shadow-[0_24px_64px_rgba(0,0,0,0.22)]"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -28 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5]">
            <SafeImage
              src={assets.certificationStars}
              alt="Certification chapter atmosphere"
              fill
              quality={96}
              sizes="(min-width: 1024px) 24rem, 100vw"
              className="object-cover object-[52%_26%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.76)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_24%,rgba(255,255,255,0.14),transparent_22%),radial-gradient(circle_at_64%_40%,rgba(234,179,8,0.14),transparent_24%)]" />
          </div>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification.id}
              className="group relative overflow-hidden border border-[rgba(148,163,184,0.18)] bg-[linear-gradient(180deg,rgba(7,10,18,0.72)_0%,rgba(10,14,22,0.92)_100%)] p-5 shadow-[0_20px_54px_rgba(0,0,0,0.18)]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.68,
                delay: prefersReducedMotion ? 0 : index * 0.07,
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
                  Applied learning that supports the broader portfolio across AI engineering, analytics, cloud fluency, and disciplined delivery.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </StorySection>
  );
}
