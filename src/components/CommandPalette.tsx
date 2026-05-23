"use client";

import { useCallback, useEffect, useMemo, useState, type ComponentType } from "react";

import { usePathname, useRouter } from "next/navigation";
import {
  Download,
  FileText,
  FolderGit2,
  FolderOpenDot,
  Mail,
  MapPinned,
  Network,
  Sparkles,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { primaryNavigationLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import { projects, type ProjectId } from "@/data/projects";
import {
  downloadPortfolioFile,
  navigateToPortfolioSection,
  openProjectCaseStudy,
} from "@/lib/portfolio-navigation";

import { useSlashTransition } from "./SlashTransition";

type CommandAction = {
  id: string;
  group: "Navigation" | "Projects" | "Links" | "Resume";
  label: string;
  shortcut?: string;
  keywords?: string[];
  icon: ComponentType<{ className?: string }>;
  run: () => void;
};

const commandProjectIds: ProjectId[] = [
  "cortexAgent",
  "experimentOS",
  "fairLend",
  "modelWatch",
  "neuroShield",
  "carbonLedgerX",
  "migrationLens",
];

const commandProjects = projects.filter((project) => commandProjectIds.includes(project.id));

export function CommandPalette() {
  const pathname = usePathname();
  const router = useRouter();
  const { triggerSlash } = useSlashTransition();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeThenRun = useCallback((runner: () => void) => {
    setOpen(false);
    window.setTimeout(runner, 40);
  }, []);

  const actions = useMemo<CommandAction[]>(
    () => [
      ...primaryNavigationLinks.map((link) => ({
        id: `nav-${link.href}`,
        group: "Navigation" as const,
        label: link.href === "#projects" ? "Go to Project Arsenal" : `Go to ${link.label}`,
        keywords: [link.label, link.href.replace("#", ""), "section"],
        icon: MapPinned,
        run: () => {
          triggerSlash({ intensity: "light" });
          closeThenRun(() => navigateToPortfolioSection(link.href, pathname));
        },
      })),
      {
        id: "resume-page",
        group: "Resume" as const,
        label: "Open Resume",
        shortcut: "Route",
        keywords: ["resume", "cv", "profile"],
        icon: FileText,
        run: () => {
          triggerSlash({ intensity: "full" });
          closeThenRun(() => router.push("/resume"));
        },
      },
      {
        id: "resume-pdf",
        group: "Resume" as const,
        label: "Download Resume PDF",
        shortcut: "PDF",
        keywords: ["resume", "pdf", "download"],
        icon: Download,
        run: () => {
          triggerSlash({ intensity: "light" });
          closeThenRun(() =>
            downloadPortfolioFile(
              profile.resumePath,
              "Yaswanth_Kumar_Akkireddy_Resume.pdf",
            ),
          );
        },
      },
      {
        id: "github",
        group: "Links" as const,
        label: "Open GitHub",
        shortcut: "Link",
        keywords: ["github", "portfolio", "code"],
        icon: FolderGit2,
        run: () => {
          triggerSlash({ intensity: "light" });
          closeThenRun(() => window.open(profile.github, "_blank", "noopener,noreferrer"));
        },
      },
      {
        id: "linkedin",
        group: "Links" as const,
        label: "Open LinkedIn",
        shortcut: "Link",
        keywords: ["linkedin", "network", "profile"],
        icon: Network,
        run: () => {
          triggerSlash({ intensity: "light" });
          closeThenRun(() => window.open(profile.linkedin, "_blank", "noopener,noreferrer"));
        },
      },
      {
        id: "mail",
        group: "Links" as const,
        label: "Mail Me",
        shortcut: "Mail",
        keywords: ["email", "contact", "mail"],
        icon: Mail,
        run: () => {
          triggerSlash({ intensity: "light" });
          closeThenRun(() => {
            window.location.href = `mailto:${profile.email}`;
          });
        },
      },
      ...commandProjects.map((project) => ({
        id: `project-${project.id}`,
        group: "Projects" as const,
        label: `Open ${project.title}`,
        shortcut: "Case",
        keywords: [project.title, "project", "case study", "arsenal"],
        icon: FolderOpenDot,
        run: () => {
          triggerSlash({ intensity: "full" });
          closeThenRun(() => openProjectCaseStudy(project.id, pathname));
        },
      })),
    ],
    [closeThenRun, pathname, router, triggerSlash],
  );

  const groupedActions = useMemo(
    () =>
      ({
        Navigation: actions.filter((action) => action.group === "Navigation"),
        Projects: actions.filter((action) => action.group === "Projects"),
        Links: actions.filter((action) => action.group === "Links"),
        Resume: actions.filter((action) => action.group === "Resume"),
      }) as const,
    [actions],
  );

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Portfolio Command Palette"
      description="Jump to sections, projects, resume actions, and external links."
      className="max-w-2xl border border-[rgba(200,32,45,0.2)] bg-[linear-gradient(180deg,rgba(5,5,5,0.98)_0%,rgba(10,8,8,0.98)_100%)] p-0 text-white shadow-[0_30px_120px_rgba(0,0,0,0.5)]"
    >
      <div className="border-b border-white/8 bg-[linear-gradient(135deg,rgba(200,32,45,0.12)_0%,rgba(249,115,22,0.08)_100%)] px-4 py-3">
        <div className="mb-2 flex items-center gap-2 text-[0.68rem] tracking-[0.18em] text-white/62 uppercase">
          <Sparkles className="size-3.5 text-[var(--forge-orange)]" />
          Command Palette
        </div>
        <CommandInput
          placeholder="Search sections, projects, resume actions, or links..."
          className="text-white placeholder:text-white/40"
        />
      </div>

      <CommandList className="max-h-[70vh] bg-transparent px-2 py-3">
        <CommandEmpty className="py-10 text-white/56">
          No matching action yet. Try About, Resume, or CortexAgent.
        </CommandEmpty>

        <CommandGroup heading="Navigation" className="text-white">
          {groupedActions.Navigation.map((action) => (
            <CommandItem
              key={action.id}
              value={`${action.label} ${action.keywords?.join(" ") ?? ""}`}
              onSelect={action.run}
              className="rounded-none border border-transparent px-3 py-2.5 text-white/78 data-selected:border-[rgba(249,115,22,0.24)] data-selected:bg-white/[0.06] data-selected:text-white"
            >
              <action.icon className="size-4 text-[var(--forge-orange)]" />
              <span>{action.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator className="my-2 bg-white/8" />

        <CommandGroup heading="Projects" className="text-white">
          {groupedActions.Projects.map((action) => (
            <CommandItem
              key={action.id}
              value={`${action.label} ${action.keywords?.join(" ") ?? ""}`}
              onSelect={action.run}
              className="rounded-none border border-transparent px-3 py-2.5 text-white/78 data-selected:border-[rgba(249,115,22,0.24)] data-selected:bg-white/[0.06] data-selected:text-white"
            >
              <action.icon className="size-4 text-[var(--samurai-red)]" />
              <span>{action.label}</span>
              <CommandShortcut>{action.shortcut}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator className="my-2 bg-white/8" />

        <CommandGroup heading="Links" className="text-white">
          {groupedActions.Links.map((action) => (
            <CommandItem
              key={action.id}
              value={`${action.label} ${action.keywords?.join(" ") ?? ""}`}
              onSelect={action.run}
              className="rounded-none border border-transparent px-3 py-2.5 text-white/78 data-selected:border-[rgba(249,115,22,0.24)] data-selected:bg-white/[0.06] data-selected:text-white"
            >
              <action.icon className="size-4 text-[var(--rain-blue)]" />
              <span>{action.label}</span>
              <CommandShortcut>{action.shortcut}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator className="my-2 bg-white/8" />

        <CommandGroup heading="Resume" className="text-white">
          {groupedActions.Resume.map((action) => (
            <CommandItem
              key={action.id}
              value={`${action.label} ${action.keywords?.join(" ") ?? ""}`}
              onSelect={action.run}
              className="rounded-none border border-transparent px-3 py-2.5 text-white/78 data-selected:border-[rgba(249,115,22,0.24)] data-selected:bg-white/[0.06] data-selected:text-white"
            >
              <action.icon className="size-4 text-[var(--gold)]" />
              <span>{action.label}</span>
              <CommandShortcut>{action.shortcut}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>

      <div className="flex items-center justify-between border-t border-white/8 px-4 py-3 text-[0.68rem] tracking-[0.16em] text-white/46 uppercase">
        <span>Press Enter to run</span>
        <span>Ctrl K / Cmd K</span>
      </div>
    </CommandDialog>
  );
}
