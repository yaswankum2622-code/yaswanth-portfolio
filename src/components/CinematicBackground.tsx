"use client";

import { SafeImage } from "@/components/SafeImage";
import { useRecruiterMode } from "@/components/RecruiterModeProvider";
import { cn } from "@/lib/utils";

export type BackgroundType =
  | "ink-red"
  | "cherry-dawn"
  | "amber-scholar"
  | "forge-fire"
  | "red-moon"
  | "battle-dark"
  | "active-gold"
  | "star-night"
  | "golden-dawn"
  | "rain-blue";

export type ImagePosition =
  | "center"
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "center-left"
  | "center-right";

type CinematicBackgroundProps = {
  backgroundType: BackgroundType;
  image?: string | null;
  imagePosition?: ImagePosition;
  className?: string;
};

const backgroundClasses: Record<BackgroundType, string> = {
  "ink-red":
    "bg-[radial-gradient(circle_at_top,rgba(164,28,40,0.20),transparent_34%),radial-gradient(circle_at_70%_40%,rgba(249,115,22,0.08),transparent_30%),linear-gradient(180deg,#020202_0%,#090303_42%,#120506_100%)]",
  "cherry-dawn":
    "bg-[radial-gradient(circle_at_15%_18%,rgba(251,146,60,0.26),transparent_24%),radial-gradient(circle_at_72%_10%,rgba(244,114,182,0.22),transparent_28%),linear-gradient(180deg,#14090b_0%,#2a0f12_42%,#4a1b16_100%)]",
  "amber-scholar":
    "bg-[radial-gradient(circle_at_18%_22%,rgba(245,158,11,0.18),transparent_26%),radial-gradient(circle_at_84%_16%,rgba(120,53,15,0.24),transparent_30%),linear-gradient(180deg,#0d0804_0%,#1a1208_44%,#2b1609_100%)]",
  "forge-fire":
    "bg-[radial-gradient(circle_at_50%_18%,rgba(249,115,22,0.30),transparent_25%),radial-gradient(circle_at_78%_36%,rgba(220,38,38,0.24),transparent_30%),linear-gradient(180deg,#070303_0%,#140804_34%,#2c1208_100%)]",
  "red-moon":
    "bg-[radial-gradient(circle_at_78%_18%,rgba(220,38,38,0.22),transparent_18%),radial-gradient(circle_at_22%_44%,rgba(124,14,28,0.18),transparent_28%),linear-gradient(180deg,#030303_0%,#0b0406_42%,#16050c_100%)]",
  "battle-dark":
    "bg-[radial-gradient(circle_at_50%_18%,rgba(180,83,9,0.16),transparent_24%),radial-gradient(circle_at_82%_62%,rgba(153,27,27,0.16),transparent_28%),linear-gradient(180deg,#020202_0%,#060606_38%,#110a08_100%)]",
  "active-gold":
    "bg-[radial-gradient(circle_at_30%_16%,rgba(245,158,11,0.22),transparent_22%),radial-gradient(circle_at_76%_40%,rgba(249,115,22,0.16),transparent_28%),linear-gradient(180deg,#060403_0%,#120d08_42%,#23170c_100%)]",
  "star-night":
    "bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.16),transparent_24%),radial-gradient(circle_at_78%_16%,rgba(245,158,11,0.10),transparent_26%),linear-gradient(180deg,#02030a_0%,#060912_40%,#0b1320_100%)]",
  "golden-dawn":
    "bg-[radial-gradient(circle_at_22%_18%,rgba(245,158,11,0.22),transparent_22%),radial-gradient(circle_at_78%_14%,rgba(34,197,94,0.14),transparent_24%),linear-gradient(180deg,#090603_0%,#1b1107_42%,#2b1607_100%)]",
  "rain-blue":
    "bg-[radial-gradient(circle_at_30%_18%,rgba(59,130,246,0.16),transparent_22%),radial-gradient(circle_at_74%_34%,rgba(14,165,233,0.16),transparent_28%),linear-gradient(180deg,#02050a_0%,#07121b_44%,#0a1722_100%)]",
};

const objectPositionClasses: Record<ImagePosition, string> = {
  center: "object-center",
  left: "object-left",
  right: "object-right",
  top: "object-top",
  bottom: "object-bottom",
  "center-left": "object-[24%_50%]",
  "center-right": "object-[76%_50%]",
};

export function CinematicBackground({
  backgroundType,
  image,
  imagePosition = "center",
  className,
}: CinematicBackgroundProps) {
  const { recruiterMode } = useRecruiterMode();

  return (
    <div aria-hidden className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className={cn("absolute inset-0", backgroundClasses[backgroundType])} />
      {image ? (
        <div className="absolute inset-0">
          <SafeImage
            src={image}
            alt=""
            fill
            sizes="100vw"
            className={cn(
              "object-cover",
              recruiterMode ? "opacity-[0.16]" : "opacity-28 mix-blend-screen",
              objectPositionClasses[imagePosition],
            )}
          />
        </div>
      ) : null}
      <div className={cn("noise-overlay absolute inset-0", recruiterMode ? "opacity-[0.14]" : "opacity-30")} />
      <div
        className={cn(
          "absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,3,3,0.12)_40%,rgba(3,3,3,0.48)_100%)]",
          recruiterMode && "opacity-80",
        )}
      />
      <div
        className={cn(
          "absolute inset-0",
          recruiterMode
            ? "bg-[linear-gradient(180deg,rgba(0,0,0,0.44)_0%,rgba(0,0,0,0.28)_30%,rgba(0,0,0,0.68)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.18)_28%,rgba(0,0,0,0.52)_100%)]",
        )}
      />
    </div>
  );
}
