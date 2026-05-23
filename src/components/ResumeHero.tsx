"use client";

import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { AnimatedTextReveal } from "@/components/AnimatedTextReveal";
import { ResumeDownloadCard } from "@/components/ResumeDownloadCard";
import { SafeImage } from "@/components/SafeImage";

type ResumeHeroProps = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  highlights: string[];
  previewImage: string;
  pdfHref: string | null;
  isPdfAvailable: boolean;
  fallbackMessage: string;
};

export function ResumeHero({
  name,
  role,
  tagline,
  location,
  email,
  phone,
  github,
  linkedin,
  highlights,
  previewImage,
  pdfHref,
  isPdfAvailable,
  fallbackMessage,
}: ResumeHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.aside
      className="lg:sticky lg:top-24"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20, clipPath: "inset(0 0 8% 0)" }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="overflow-hidden border border-[rgba(200,32,45,0.14)] bg-[linear-gradient(180deg,rgba(6,6,6,0.88)_0%,rgba(12,10,10,0.96)_100%)] shadow-[0_24px_64px_rgba(0,0,0,0.24)] backdrop-blur-sm">
        <div className="relative h-44 overflow-hidden border-b border-white/8">
          <SafeImage
            src={previewImage}
            alt="Resume atmosphere"
            fill
            sizes="(min-width: 1024px) 20rem, 100vw"
            quality={96}
            className="object-cover object-center opacity-72"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,4,0.12)_0%,rgba(4,4,4,0.78)_100%)]" />
        </div>

        <div className="space-y-6 p-5 sm:p-6">
          <div className="space-y-3">
            <p className="text-[0.68rem] tracking-[0.18em] text-[var(--forge-orange)] uppercase">
              Resume
            </p>
            <h1 className="font-heading text-3xl tracking-[0.04em] text-white sm:text-4xl">
              <AnimatedTextReveal text={name} />
            </h1>
            <p className="text-lg text-white/88">{role}</p>
            <p className="text-sm leading-7 text-white/68">{tagline}</p>
          </div>

          <div className="grid gap-3 border-y border-white/8 py-4 text-sm text-white/76">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--forge-orange)]" />
              <span>{location}</span>
            </div>
            <a href={`mailto:${email}`} className="group flex items-start gap-3 transition hover:text-white">
              <Mail className="mt-0.5 size-4 shrink-0 text-[var(--forge-orange)]" />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,var(--forge-orange)_0%,transparent_100%)] after:transition-transform after:duration-300 group-hover:after:scale-x-100">{email}</span>
            </a>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-[var(--forge-orange)]" />
              <span>{phone}</span>
            </div>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 transition hover:text-white"
            >
              <ExternalLink className="mt-0.5 size-4 shrink-0 text-[var(--forge-orange)] transition-transform duration-300 group-hover:translate-x-0.5" />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,var(--forge-orange)_0%,transparent_100%)] after:transition-transform after:duration-300 group-hover:after:scale-x-100">GitHub</span>
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 transition hover:text-white"
            >
              <ExternalLink className="mt-0.5 size-4 shrink-0 text-[var(--forge-orange)] transition-transform duration-300 group-hover:translate-x-0.5" />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,var(--forge-orange)_0%,transparent_100%)] after:transition-transform after:duration-300 group-hover:after:scale-x-100">LinkedIn</span>
            </a>
          </div>

          <ResumeDownloadCard
            pdfHref={pdfHref}
            isPdfAvailable={isPdfAvailable}
            fallbackMessage={fallbackMessage}
            email={email}
          />

          <div className="space-y-3">
            <p className="text-[0.68rem] tracking-[0.18em] text-white/56 uppercase">
              Hiring signals
            </p>
            <div className="space-y-3 text-sm leading-7 text-white/72">
              {highlights.map((highlight) => (
                <p key={highlight} className="border-l border-[rgba(200,32,45,0.2)] pl-3">
                  {highlight}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
