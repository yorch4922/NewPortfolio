import { cn } from "@/lib/cn";

export type SurfaceVariant = "default" | "muted" | "canvas" | "inverse";
export type SurfaceTone = "neutral" | "accent";
export type SurfaceDensity = "compact" | "comfortable" | "spacious";

const sectionVariantClasses: Record<SurfaceVariant, string> = {
  default: "bg-white",
  muted: "bg-card-bg",
  canvas: "bg-bg",
  inverse: "bg-footer-bg text-white",
};

const sectionToneClasses: Record<SurfaceTone, string> = {
  neutral: "",
  accent: "selection:bg-accent/30 selection:text-accent",
};

const sectionDensityClasses: Record<SurfaceDensity, string> = {
  compact: "py-16",
  comfortable: "py-24",
  spacious: "py-32",
};

const cardVariantClasses = {
  elevated: "bg-card-bg shadow-sm border border-gray-100/70",
  outlined: "bg-white border border-gray-200",
  soft: "bg-bg border border-gray-100",
} as const;

const cardDensityClasses: Record<SurfaceDensity, string> = {
  compact: "p-6",
  comfortable: "p-8",
  spacious: "p-10",
};

const cardToneClasses: Record<SurfaceTone, string> = {
  neutral: "",
  accent: "ring-1 ring-accent/10",
};

export type CardVariant = keyof typeof cardVariantClasses;

export function getSectionSurfaceClasses(params?: {
  variant?: SurfaceVariant;
  tone?: SurfaceTone;
  density?: SurfaceDensity;
  className?: string;
}) {
  const {
    variant = "default",
    tone = "neutral",
    density = "comfortable",
    className,
  } = params ?? {};

  return cn(
    "overflow-hidden",
    sectionVariantClasses[variant],
    sectionToneClasses[tone],
    sectionDensityClasses[density],
    className,
  );
}

export function getCardSurfaceClasses(params?: {
  variant?: CardVariant;
  tone?: SurfaceTone;
  density?: SurfaceDensity;
  className?: string;
}) {
  const {
    variant = "elevated",
    tone = "neutral",
    density = "comfortable",
    className,
  } = params ?? {};

  return cn(
    "rounded-2xl transition-shadow",
    cardVariantClasses[variant],
    cardToneClasses[tone],
    cardDensityClasses[density],
    className,
  );
}
