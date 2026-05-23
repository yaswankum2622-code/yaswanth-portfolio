"use client";

import { useRef } from "react";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { SafeImage } from "@/components/SafeImage";
import { StorySection } from "@/components/StorySection";
import { experience, education } from "@/data/experience";
import type { StoryChapter } from "@/data/storyChapters";

type ExperienceProps = {
  chapter: StoryChapter;
};

type TimelineItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

export function Experience({ chapter }: ExperienceProps) {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [12, -28]);

  const timelineItems: TimelineItem[] = [
    {
      id: experience[0].id,
      role: experience[0].role,
      company: experience[0].company,
      period: experience[0].period,
      location: experience[0].location,
      bullets: experience[0].achievements,
    },
    {
      id: "vit-chennai",
      role: "Integrated M.Tech - Computer Science and Engineering, Business Analytics",
      company: education.school,
      period: education.period,
      location: "Chennai, India",
      bullets: education.details,
    },
  ];

  return (
    <StorySection
      id="experience"
      chapterNumber={4}
      title={chapter.title}
      eyebrow={chapter.eyebrow}
      mood={chapter.mood}
      accent={chapter.accent}
      backgroundType="red-moon"
      image={experience[0].image}
      imagePosition="center-right"
    >
      <div ref={sectionRef} className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
        <div className="relative pl-8 sm:pl-10">
          <motion.div
            aria-hidden
            className="absolute left-[0.42rem] top-4 bottom-4 w-px origin-top bg-[linear-gradient(180deg,rgba(200,32,45,0.95)_0%,rgba(249,115,22,0.62)_56%,rgba(255,255,255,0.08)_100%)]"
            initial={prefersReducedMotion ? false : { scaleY: 0, opacity: 0.3 }}
            whileInView={prefersReducedMotion ? undefined : { scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
          />

          <div className="space-y-7">
            {timelineItems.map((item, index) => (
              <motion.article
                key={item.id}
                className="relative border border-[rgba(200,32,45,0.22)] bg-black/30 p-5 shadow-[0_20px_44px_rgba(0,0,0,0.2)]"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 34 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{
                  duration: 0.78,
                  delay: prefersReducedMotion ? 0 : index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.span
                  aria-hidden
                  className="absolute left-[-1.98rem] top-7 h-3 w-3 rounded-full border border-[rgba(255,255,255,0.14)] bg-[var(--samurai-red)] shadow-[0_0_16px_rgba(200,32,45,0.55)]"
                  animate={prefersReducedMotion ? undefined : { scale: [1, 1.16, 1] }}
                  transition={{
                    duration: 1.8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.15,
                  }}
                />

                <div className="space-y-2">
                  <p className="text-xs font-medium tracking-[0.18em] text-[var(--forge-orange)] uppercase">
                    {item.company}
                  </p>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/58">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <ul className="mt-5 grid gap-3 text-sm leading-7 text-white/76">
                  {item.bullets.map((bullet, bulletIndex) => (
                    <motion.li
                      key={`${item.id}-${bulletIndex}`}
                      className="border-l border-white/8 pl-4"
                      initial={prefersReducedMotion ? false : { opacity: 0, x: 16 }}
                      whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.45,
                        delay: prefersReducedMotion ? 0 : index * 0.12 + bulletIndex * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="relative hidden lg:block"
          style={prefersReducedMotion ? undefined : { y: imageY }}
          initial={prefersReducedMotion ? false : { opacity: 0, x: 28 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: prefersReducedMotion ? 0 : 0.14, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-[rgba(200,32,45,0.22)] bg-black/30">
            <SafeImage
              src={experience[0].image}
              alt="Experience timeline atmosphere"
              fill
              sizes="22rem"
              className="object-cover object-center opacity-78"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.14)_0%,rgba(0,0,0,0.66)_100%)]" />
          </div>
        </motion.div>
      </div>
    </StorySection>
  );
}
