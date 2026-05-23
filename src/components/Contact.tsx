"use client";

import { ArrowRight, FolderGit2, Mail, Network, Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { SafeImage } from "@/components/SafeImage";
import { StorySection } from "@/components/StorySection";
import { assets } from "@/data/assets";
import { profile } from "@/data/profile";
import type { StoryChapter } from "@/data/storyChapters";

type ContactProps = {
  chapter: StoryChapter;
};

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedin,
    icon: Network,
    external: true,
  },
  {
    label: "GitHub",
    value: profile.github,
    href: profile.github,
    icon: FolderGit2,
    external: true,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    icon: Phone,
    external: false,
  },
];

export function Contact({ chapter }: ContactProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <StorySection
      id="contact"
      chapterNumber={10}
      title={chapter.title}
      eyebrow={chapter.eyebrow}
      mood={chapter.mood}
      accent={chapter.accent}
      backgroundType="rain-blue"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:items-start">
        <div className="space-y-6">
          <p className="max-w-2xl text-base leading-8 text-white/76">
            Reach out for opportunities, collaborations, or to build AI systems that move from
            prototype to production.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                data-slash-trigger="light"
                className="group border border-[rgba(96,165,250,0.18)] bg-[linear-gradient(180deg,rgba(8,10,16,0.72)_0%,rgba(10,12,18,0.92)_100%)] p-4 shadow-[0_18px_48px_rgba(0,0,0,0.18)] transition hover:translate-x-1 hover:border-[rgba(96,165,250,0.3)]"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.58,
                  delay: prefersReducedMotion ? 0 : index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <item.icon className="size-5 text-[var(--rain-blue)]" />
                    <div>
                      <p className="text-[0.68rem] tracking-[0.16em] text-white/54 uppercase">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/82 break-all">{item.value}</p>
                    </div>
                  </div>
                  <ArrowRight className="mt-1 size-4 text-white/44 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white/72" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          className="relative overflow-hidden border border-[rgba(96,165,250,0.18)] bg-black/24 shadow-[0_24px_64px_rgba(0,0,0,0.22)]"
          initial={prefersReducedMotion ? false : { opacity: 0, x: 26 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5]">
            <SafeImage
              src={assets.contactRain || assets.fallbackFog}
              alt="Contact after rain atmosphere"
              fill
              sizes="(min-width: 1024px) 24rem, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.66)_100%)]" />
          </div>
        </motion.div>
      </div>
    </StorySection>
  );
}
