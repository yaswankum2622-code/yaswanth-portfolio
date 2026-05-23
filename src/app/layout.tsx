import type { Metadata } from "next";
import { Cinzel, Geist_Mono, Inter } from "next/font/google";

import { AnimationProvider } from "@/components/AnimationProvider";
import { CommandPalette } from "@/components/CommandPalette";
import { CustomCursor } from "@/components/CustomCursor";
import { RecruiterModeProvider } from "@/components/RecruiterModeProvider";
import { SakuraCanvas } from "@/components/SakuraCanvas";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ShojiEntrance } from "@/components/ShojiEntrance";
import { SlashTransition } from "@/components/SlashTransition";

import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yaswanth Kumar Akkireddy | AI Engineer Portfolio",
  description:
    "AI Engineer portfolio showcasing GenAI, RAG, Agentic AI, MLOps, Responsible AI, fintech, analytics, and production-grade AI systems.",
  openGraph: {
    title: "Yaswanth Kumar Akkireddy | AI Engineer Portfolio",
    description:
      "AI Engineer portfolio showcasing GenAI, RAG, Agentic AI, MLOps, Responsible AI, fintech, analytics, and production-grade AI systems.",
    siteName: "Yaswanth Kumar Akkireddy Portfolio",
    type: "website",
    images: [
      {
        url: "/assets/portfolio-cover.png",
        alt: "Yaswanth Kumar Akkireddy portfolio cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaswanth Kumar Akkireddy | AI Engineer Portfolio",
    description:
      "AI Engineer portfolio showcasing GenAI, RAG, Agentic AI, MLOps, Responsible AI, fintech, analytics, and production-grade AI systems.",
    images: ["/assets/portfolio-cover.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-[var(--ink)] text-[var(--foreground)]">
        <RecruiterModeProvider>
          <AnimationProvider>
            <SakuraCanvas />
            <ScrollProgress />
            <SlashTransition />
            <CustomCursor />
            <ShojiEntrance />
            <CommandPalette />
            <div className="relative z-10 flex min-h-full flex-col">{children}</div>
          </AnimationProvider>
        </RecruiterModeProvider>
      </body>
    </html>
  );
}
