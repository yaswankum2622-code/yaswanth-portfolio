"use client";

import { motion, useReducedMotion } from "motion/react";

import { ResumeHero } from "@/components/ResumeHero";
import { ResumeSection } from "@/components/ResumeSection";
import { SafeImage } from "@/components/SafeImage";
import { TechChip } from "@/components/TechChip";

type ResumeResourceProps = {
  pdfHref: string | null;
  isPdfAvailable: boolean;
  previewImage: string;
  fallbackMessage: string;
  highlights: string[];
};

type ResumeViewProps = {
  resource: ResumeResourceProps;
  resume: {
    name: string;
    role: string;
    tagline: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    professionalSummary: string;
    coreSkills: Array<{
      title: string;
      items: string[];
    }>;
    experience: Array<{
      company: string;
      role: string;
      period: string;
      location: string;
      bullets: string[];
    }>;
    featuredProjects: Array<{
      title: string;
      subtitle: string;
      summary: string;
      portfolioHref: string;
      githubHref: string | null;
      liveHref: string | null;
    }>;
    supportingProjects: Array<{
      title: string;
      subtitle: string;
      summary: string;
      portfolioHref: string;
      githubHref: string | null;
      liveHref: string | null;
    }>;
    education: {
      school: string;
      degree: string;
      period: string;
      gpa: string;
    };
    certificationsAndPrograms: string[];
  };
};

export function ResumeView({ resource, resume }: ResumeViewProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[var(--ink)] text-white">
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <SafeImage
          src={resource.previewImage}
          alt="Resume background atmosphere"
          fill
          priority
          quality={96}
          sizes="100vw"
          className="object-cover object-center opacity-28"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(249,115,22,0.18),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(200,32,45,0.12),transparent_24%),linear-gradient(180deg,rgba(5,5,5,0.72)_0%,rgba(8,8,8,0.88)_40%,rgba(6,6,6,0.96)_100%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <motion.div
          className="mb-8 max-w-3xl space-y-4"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18, clipPath: "inset(0 0 100% 0)" }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[0.72rem] tracking-[0.2em] text-[var(--forge-orange)] uppercase">
            Resume
          </p>
          <h1 className="font-heading text-4xl tracking-[0.04em] text-white sm:text-5xl">
            {resume.name}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-white/74">
            A formatted HTML resume with direct access to the PDF, designed to stay clear, readable, and easy to review.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[minmax(18rem,22rem)_minmax(0,1fr)] lg:items-start">
          <ResumeHero
            name={resume.name}
            role={resume.role}
            tagline={resume.tagline}
            location={resume.location}
            email={resume.email}
            phone={resume.phone}
            github={resume.github}
            linkedin={resume.linkedin}
            highlights={resource.highlights}
            previewImage={resource.previewImage}
            pdfHref={resource.pdfHref}
            isPdfAvailable={resource.isPdfAvailable}
            fallbackMessage={resource.fallbackMessage}
          />

          <div className="space-y-6">
            <ResumeSection title="Professional Summary" eyebrow="Section 01" index={0}>
              <p className="text-base leading-8 text-white/80">{resume.professionalSummary}</p>
            </ResumeSection>

            <ResumeSection title="Core Skills" eyebrow="Section 02" index={1}>
              <div className="grid gap-4 lg:grid-cols-3">
                {resume.coreSkills.map((group, groupIndex) => (
                  <motion.div
                    key={group.title}
                    className="border border-white/8 bg-black/22 p-4 transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{
                      duration: 0.56,
                      delay: prefersReducedMotion ? 0 : groupIndex * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <h3 className="text-sm font-semibold tracking-[0.12em] text-[var(--forge-orange)] uppercase">
                      {group.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item, itemIndex) => (
                        <motion.div
                          key={`${group.title}-${item}`}
                          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.12 }}
                          transition={{
                            duration: 0.36,
                            delay: prefersReducedMotion ? 0 : groupIndex * 0.08 + itemIndex * 0.015,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <TechChip label={item} />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Experience" eyebrow="Section 03" index={2}>
              <div className="grid gap-4">
                {resume.experience.map((item) => (
                  <motion.div
                    key={`${item.company}-${item.period}`}
                    className="border border-white/8 bg-black/22 p-5"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="space-y-2 border-b border-white/8 pb-4">
                      <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                      <p className="text-white/86">{item.role}</p>
                      <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/58">
                        <span>{item.period}</span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 grid gap-3 text-sm leading-7 text-white/76">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="border-l border-[rgba(200,32,45,0.18)] pl-4">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Featured Projects" eyebrow="Section 04" index={3}>
              <div className="grid gap-4 lg:grid-cols-3">
                {resume.featuredProjects.map((project) => (
                  <motion.article
                    key={project.title}
                    className="border border-[rgba(200,32,45,0.14)] bg-black/22 p-4"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.16 }}
                    transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="text-[0.72rem] tracking-[0.16em] text-[var(--forge-orange)] uppercase">
                        {project.subtitle}
                      </p>
                      <p className="text-sm leading-7 text-white/72">{project.summary}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 text-[0.68rem] tracking-[0.14em] uppercase">
                      <a
                        href={project.portfolioHref}
                        data-slash-trigger="light"
                        className="border border-white/10 px-3 py-2 text-white/74 transition hover:border-[rgba(249,115,22,0.24)] hover:text-white"
                      >
                        Open in Portfolio
                      </a>
                      {project.githubHref ? (
                        <a
                          href={project.githubHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-slash-trigger="light"
                          className="border border-white/10 px-3 py-2 text-white/74 transition hover:border-[rgba(249,115,22,0.24)] hover:text-white"
                        >
                          GitHub
                        </a>
                      ) : null}
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="mt-5 border-t border-white/8 pt-5">
                <p className="text-[0.72rem] tracking-[0.16em] text-white/54 uppercase">
                  Additional systems
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {resume.supportingProjects.map((project, index) => (
                    <motion.a
                      key={project.title}
                      href={project.portfolioHref}
                      data-slash-trigger="light"
                      className="border border-white/8 bg-black/16 p-4 transition hover:border-[rgba(249,115,22,0.2)] hover:bg-black/24"
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.14 }}
                      transition={{
                        duration: 0.4,
                        delay: prefersReducedMotion ? 0 : index * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <p className="font-semibold text-white">{project.title}</p>
                      <p className="mt-1 text-sm text-white/60">{project.subtitle}</p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </ResumeSection>

            <ResumeSection title="Education" eyebrow="Section 05" index={4}>
              <div className="border border-white/8 bg-black/22 p-5">
                <h3 className="text-xl font-semibold text-white">{resume.education.school}</h3>
                <p className="mt-2 text-white/78">{resume.education.degree}</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/58">
                  <span>{resume.education.period}</span>
                  <span>GPA: {resume.education.gpa}</span>
                </div>
              </div>
            </ResumeSection>

            <ResumeSection title="Certifications and Programs" eyebrow="Section 06" index={5}>
              <div className="grid gap-3 sm:grid-cols-2">
                {resume.certificationsAndPrograms.map((item) => (
                  <div key={item} className="border border-white/8 bg-black/22 p-4 text-sm text-white/76">
                    {item}
                  </div>
                ))}
              </div>
            </ResumeSection>
          </div>
        </div>
      </div>
    </div>
  );
}
