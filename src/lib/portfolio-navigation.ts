import type { ProjectId } from "@/data/projects";

export const OPEN_PROJECT_CASE_STUDY_EVENT = "portfolio:open-project";
const PENDING_PROJECT_STORAGE_KEY = "portfolio-pending-project";

type OpenProjectEventDetail = {
  projectId: ProjectId;
};

function isRootPath(pathname?: string | null) {
  return !pathname || pathname === "/";
}

export function scrollToPortfolioSection(href: `#${string}`) {
  const id = href.replace("#", "");
  const element = document.getElementById(id);

  if (!element) {
    window.location.hash = href;
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  element.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  window.history.replaceState(null, "", href);
}

export function navigateToPortfolioSection(href: `#${string}`, pathname?: string | null) {
  if (isRootPath(pathname)) {
    scrollToPortfolioSection(href);
    return;
  }

  window.location.assign(`/${href}`);
}

export function dispatchProjectCaseStudy(projectId: ProjectId) {
  window.dispatchEvent(
    new CustomEvent<OpenProjectEventDetail>(OPEN_PROJECT_CASE_STUDY_EVENT, {
      detail: { projectId },
    }),
  );
}

export function setPendingProjectCaseStudy(projectId: ProjectId) {
  window.sessionStorage.setItem(PENDING_PROJECT_STORAGE_KEY, projectId);
}

export function consumePendingProjectCaseStudy() {
  const value = window.sessionStorage.getItem(PENDING_PROJECT_STORAGE_KEY);

  if (!value) {
    return null;
  }

  window.sessionStorage.removeItem(PENDING_PROJECT_STORAGE_KEY);

  return value as ProjectId;
}

export function openProjectCaseStudy(projectId: ProjectId, pathname?: string | null) {
  if (isRootPath(pathname)) {
    scrollToPortfolioSection("#projects");
    window.setTimeout(() => {
      dispatchProjectCaseStudy(projectId);
    }, 220);
    return;
  }

  setPendingProjectCaseStudy(projectId);
  window.location.assign("/#projects");
}

export function downloadPortfolioFile(href: string, fileName?: string) {
  const link = document.createElement("a");
  link.href = href;

  if (fileName) {
    link.download = fileName;
  }

  link.rel = "noopener";
  document.body.append(link);
  link.click();
  link.remove();
}
