import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { OngoingResearch } from "@/components/OngoingResearch";
import { OpenToWork } from "@/components/OpenToWork";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionTransition } from "@/components/SectionTransition";
import { Skills } from "@/components/Skills";
import { primaryNavigationLinks } from "@/data/navigation";
import { profile, socialLinks } from "@/data/profile";
import { getResumeData } from "@/data/resume";
import { storyChapters } from "@/data/storyChapters";

const heroChapter = storyChapters.find((chapter) => chapter.id === "cherry-blossom-dawn");
const aboutChapter = storyChapters.find((chapter) => chapter.id === "about-me");
const educationChapter = storyChapters.find((chapter) => chapter.id === "education-foundation");
const skillsChapter = storyChapters.find((chapter) => chapter.id === "skills-forge");
const experienceChapter = storyChapters.find((chapter) => chapter.id === "experience-timeline");
const projectsChapter = storyChapters.find((chapter) => chapter.id === "project-arsenal");
const activeForgeChapter = storyChapters.find((chapter) => chapter.id === "active-forge");
const certificationsChapter = storyChapters.find((chapter) => chapter.id === "certifications");
const openToWorkChapter = storyChapters.find((chapter) => chapter.id === "open-to-work");
const contactChapter = storyChapters.find((chapter) => chapter.id === "contact");

export default function Home() {
  const resumeData = getResumeData();
  const resumePageHref = resumeData.routeHref;

  return (
    <div className="flex flex-1 flex-col bg-[var(--ink)] text-white">
      <Navbar name={profile.shortName} links={primaryNavigationLinks} resumeHref={resumePageHref} />
      <main className="flex flex-1 flex-col">
        {heroChapter ? <Hero chapter={heroChapter} resumeHref={resumePageHref} /> : null}
        <SectionTransition variant="cherry mist" />
        {aboutChapter ? <About chapter={aboutChapter} /> : null}
        <SectionTransition variant="light reveal" />
        {educationChapter ? <Education chapter={educationChapter} /> : null}
        <SectionTransition variant="forge ignition" />
        {skillsChapter ? <Skills chapter={skillsChapter} /> : null}
        <SectionTransition variant="red moon fall" />
        {experienceChapter ? <Experience chapter={experienceChapter} /> : null}
        <SectionTransition variant="red slash sweep" />
        {projectsChapter ? <ProjectGrid chapter={projectsChapter} /> : null}
        <SectionTransition variant="construction glow" />
        {activeForgeChapter ? <OngoingResearch chapter={activeForgeChapter} /> : null}
        <SectionTransition variant="star field" />
        {certificationsChapter ? <Certifications chapter={certificationsChapter} /> : null}
        <SectionTransition variant="golden dawn" />
        {openToWorkChapter ? <OpenToWork chapter={openToWorkChapter} resumeHref={resumePageHref} /> : null}
        <SectionTransition variant="rain fade" />
        {contactChapter ? <Contact chapter={contactChapter} /> : null}
      </main>
      <Footer name={profile.fullName} socialLinks={socialLinks} />
    </div>
  );
}
