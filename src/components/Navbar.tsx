"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import Link from "next/link";

import { MobileMenu } from "@/components/MobileMenu";
import { RecruiterModeToggle } from "@/components/RecruiterModeToggle";
import { SafeImage } from "@/components/SafeImage";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import type { NavigationLink } from "@/data/profile";
import { scrollToPortfolioSection } from "@/lib/portfolio-navigation";
import { cn } from "@/lib/utils";

type NavbarProps = {
  name: string;
  links: NavigationLink[];
  resumeHref: string;
};

export function Navbar({ name, links, resumeHref }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const lastScrollYRef = useRef(0);

  const sectionIds = useMemo(() => links.map((link) => link.href.replace("#", "")), [links]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollYRef.current;

      if (currentY <= 32) {
        setIsVisible(true);
        lastScrollYRef.current = currentY;
        return;
      }

      if (delta > 8) {
        setIsVisible(false);
      } else if (delta < -8) {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-26% 0px -54% 0px",
        threshold: [0.15, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-[rgba(200,32,45,0.16)] bg-[rgba(4,4,4,0.52)] backdrop-blur-xl transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
        <a
          href="#hero"
          data-slash-trigger="light"
          onClick={(event) => {
            event.preventDefault();
            scrollToPortfolioSection("#hero");
          }}
          className="flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-white uppercase"
        >
          <span className="relative size-10 overflow-hidden border border-[rgba(200,32,45,0.3)] bg-black/40 shadow-[0_10px_24px_rgba(0,0,0,0.28)]">
            <SafeImage
              src={profile.portraitImage}
              alt={`${name} portrait`}
              fill
              quality={96}
              sizes="40px"
              className="object-cover object-[50%_18%]"
            />
            <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.32)_100%)]" />
          </span>
          <span>Yaswanth Forge</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const sectionId = link.href.replace("#", "");

            return (
              <a
                key={link.href}
                href={link.href}
                data-slash-trigger="light"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToPortfolioSection(link.href);
                }}
                aria-current={activeSection === sectionId ? "page" : undefined}
                className={cn(
                  "relative px-3 py-2 text-[0.72rem] tracking-[0.14em] uppercase transition after:absolute after:bottom-1 after:left-3 after:right-3 after:h-px after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,var(--samurai-red)_0%,var(--forge-orange)_100%)] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100",
                  activeSection === sectionId
                    ? "text-white after:scale-x-100"
                    : "text-white/68 hover:text-white",
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <RecruiterModeToggle />
          <Link
            href={resumeHref}
            data-slash-trigger="full"
            className={cn(
              buttonVariants({ size: "sm", variant: "outline" }),
              "rounded-none border-white/12 bg-black/25 px-4 tracking-[0.14em] text-white uppercase hover:border-[rgba(249,115,22,0.28)] hover:bg-white/[0.06]",
            )}
          >
            Resume
          </Link>
        </div>

        <MobileMenu links={links} resumeHref={resumeHref} />
      </div>
    </header>
  );
}
