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

const contactCards = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    image: assets.contactMail,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Open professional profile",
    href: profile.linkedin,
    image: assets.linkedinCard,
    icon: Network,
    external: true,
  },
  {
    label: "GitHub",
    value: "Explore portfolio repositories",
    href: profile.github,
    image: assets.githubStars,
    icon: FolderGit2,
    external: true,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: "tel:+918867319189",
    image: assets.contactRain,
    icon: Phone,
    external: false,
  },
] as const;

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
      image={assets.endingRain}
      imagePosition="center"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,24rem)] lg:items-start">
        <div className="space-y-6">
          <p className="max-w-2xl text-base leading-8 text-white/78">
            Reach out for opportunities, collaborations, or to build AI systems that move from prototype to production.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactCards.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                data-slash-trigger="light"
                className="group relative overflow-hidden border border-[rgba(96,165,250,0.16)] bg-[linear-gradient(180deg,rgba(8,10,16,0.74)_0%,rgba(10,12,18,0.94)_100%)] shadow-[0_18px_48px_rgba(0,0,0,0.18)] transition hover:translate-x-1 hover:border-[rgba(96,165,250,0.3)]"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.56,
                  delay: prefersReducedMotion ? 0 : index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="relative h-32 overflow-hidden border-b border-white/8">
                  <SafeImage
                    src={item.image}
                    alt={`${item.label} contact visual`}
                    fill
                    quality={96}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.68)_100%)]" />
                </div>
                <div className="flex items-start justify-between gap-4 px-4 py-4">
                  <div className="space-y-3">
                    <item.icon className="size-5 text-[var(--rain-blue)]" />
                    <div>
                      <p className="text-[0.68rem] tracking-[0.16em] text-white/54 uppercase">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/84 break-words">{item.value}</p>
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
          initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5]">
            <SafeImage
              src={assets.contactRain}
              alt="Contact after rain atmosphere"
              fill
              quality={96}
              sizes="(min-width: 1024px) 24rem, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.72)_100%)]" />
          </div>
        </motion.div>
      </div>
    </StorySection>
  );
}
