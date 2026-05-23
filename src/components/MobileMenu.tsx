"use client";

import { useEffect, useState } from "react";

import { Menu, MoveRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { NavigationLink } from "@/data/profile";
import { scrollToPortfolioSection } from "@/lib/portfolio-navigation";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  links: NavigationLink[];
  resumeHref: string;
};

export function MobileMenu({ links, resumeHref }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [pendingHref, setPendingHref] = useState<`#${string}` | null>(null);

  useEffect(() => {
    if (open || !pendingHref) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      scrollToPortfolioSection(pendingHref);
      setPendingHref(null);
    }, 240);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [open, pendingHref]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        data-slash-trigger="light"
        className="inline-flex h-10 w-10 items-center justify-center border border-white/10 bg-black/35 text-white transition hover:border-[rgba(249,115,22,0.28)] hover:bg-white/[0.06] lg:hidden"
      >
        <Menu className="size-5" />
      </button>

      <SheetContent
        side="right"
        className="w-full border-l-[rgba(200,32,45,0.18)] bg-[linear-gradient(180deg,rgba(5,5,5,0.98)_0%,rgba(10,8,8,0.98)_100%)] p-0 text-white sm:max-w-none"
      >
        <SheetHeader className="border-b border-white/8 px-6 py-5">
          <SheetTitle className="text-left text-lg tracking-[0.12em] uppercase">
            Yaswanth Forge
          </SheetTitle>
          <SheetDescription className="text-left text-white/58">
            Quick portfolio navigation across the full story.
          </SheetDescription>
        </SheetHeader>

        <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-6 py-6">
          <nav className="grid gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-slash-trigger="light"
                onClick={(event) => {
                  event.preventDefault();
                  setPendingHref(link.href);
                  setOpen(false);
                }}
                className="group flex items-center justify-between border border-white/8 bg-white/[0.03] px-4 py-3 text-sm tracking-[0.14em] text-white/82 uppercase transition hover:border-[rgba(249,115,22,0.3)] hover:bg-white/[0.06]"
              >
                <span>{link.label}</span>
                <MoveRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </nav>

          <a
            href={resumeHref}
            data-slash-trigger="full"
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-none border border-[rgba(200,32,45,0.26)] bg-[linear-gradient(135deg,rgba(200,32,45,0.22)_0%,rgba(249,115,22,0.14)_100%)] tracking-[0.14em] text-white uppercase hover:border-[rgba(249,115,22,0.38)] hover:bg-[linear-gradient(135deg,rgba(200,32,45,0.28)_0%,rgba(249,115,22,0.18)_100%)]",
            )}
          >
            Resume
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
