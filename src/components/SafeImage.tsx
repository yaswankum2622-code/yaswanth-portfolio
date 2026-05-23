"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type SafeImageProps = {
  src: string | null | undefined;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
};

function ImageFallback({
  alt,
  className,
  fill,
  width,
  height,
}: Pick<SafeImageProps, "alt" | "className" | "fill" | "width" | "height">) {
  return (
    <div
      aria-label={`${alt} fallback`}
      className={cn(
        "relative isolate overflow-hidden rounded-[inherit] bg-[radial-gradient(circle_at_top,rgba(248,113,113,0.35),transparent_35%),linear-gradient(135deg,#060606_0%,#1a0909_48%,#311405_100%)]",
        fill ? "absolute inset-0" : "min-h-[12rem] w-full",
        className,
      )}
      style={!fill ? { width: width ?? "100%", height: height ?? 360 } : undefined}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.05)_45%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/35 px-4 py-3 text-[0.7rem] font-semibold tracking-[0.22em] text-white/80 uppercase">
        Image Unavailable
      </div>
    </div>
  );
}

export function SafeImage({
  src,
  alt,
  className,
  fill = false,
  width,
  height,
  priority,
  sizes,
}: SafeImageProps) {
  const [hasFailed, setHasFailed] = useState(!src);

  if (!src || hasFailed) {
    return (
      <ImageFallback
        alt={alt}
        className={className}
        fill={fill}
        width={width}
        height={height}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? "100vw"}
        className={className}
        onError={() => setHasFailed(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1200}
      height={height ?? 900}
      priority={priority}
      className={className}
      onError={() => setHasFailed(true)}
    />
  );
}
