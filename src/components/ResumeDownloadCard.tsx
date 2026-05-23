"use client";

import Link from "next/link";

import { ArrowUpRightFromSquare, Download, Mail, MoveLeft } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ResumeDownloadCardProps = {
  pdfHref: string | null;
  isPdfAvailable: boolean;
  fallbackMessage: string;
  email: string;
};

export function ResumeDownloadCard({
  pdfHref,
  isPdfAvailable,
  fallbackMessage,
  email,
}: ResumeDownloadCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative overflow-hidden border border-[rgba(249,115,22,0.18)] bg-[linear-gradient(135deg,rgba(200,32,45,0.08)_0%,rgba(249,115,22,0.08)_100%)] p-4 shadow-[0_0_40px_rgba(249,115,22,0.08)]"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12)_0%,transparent_48%)]"
        animate={prefersReducedMotion ? undefined : { opacity: [0.62, 1, 0.62], scale: [1, 1.02, 1] }}
        transition={{ duration: 3.2, repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <div className="relative space-y-4">
        <p className="text-[0.68rem] tracking-[0.18em] text-white/56 uppercase">
          Resume actions
        </p>
        <div className="flex flex-wrap gap-2">
          {isPdfAvailable && pdfHref ? (
            <>
              <a
                href={pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                data-slash-trigger="light"
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "rounded-none border border-[rgba(200,32,45,0.22)] bg-[linear-gradient(135deg,rgba(200,32,45,0.22)_0%,rgba(249,115,22,0.12)_100%)] tracking-[0.12em] text-white uppercase hover:border-[rgba(249,115,22,0.36)]",
                )}
              >
                <ArrowUpRightFromSquare className="mr-1 size-4" />
                View Resume PDF
              </a>
              <a
                href={pdfHref}
                download
                data-slash-trigger="light"
                className={cn(
                  buttonVariants({ size: "sm", variant: "outline" }),
                  "rounded-none border-white/12 bg-white/[0.03] tracking-[0.12em] text-white uppercase hover:border-[rgba(249,115,22,0.28)] hover:bg-white/[0.06]",
                )}
              >
                <Download className="mr-1 size-4" />
                Download Resume PDF
              </a>
            </>
          ) : (
            <p className="text-sm leading-7 text-white/70">{fallbackMessage}</p>
          )}

          <a
            href={`mailto:${email}`}
            data-slash-trigger="light"
            className={cn(
              buttonVariants({ size: "sm", variant: "outline" }),
              "rounded-none border-white/12 bg-white/[0.03] tracking-[0.12em] text-white uppercase hover:border-[rgba(249,115,22,0.28)] hover:bg-white/[0.06]",
            )}
          >
            <Mail className="mr-1 size-4" />
            Contact Me
          </a>

          <Link
            href="/"
            data-slash-trigger="light"
            className={cn(
              buttonVariants({ size: "sm", variant: "ghost" }),
              "rounded-none border border-transparent tracking-[0.12em] text-white/78 uppercase hover:border-white/10 hover:bg-white/[0.06] hover:text-white",
            )}
          >
            <MoveLeft className="mr-1 size-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
