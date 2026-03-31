import { ElementType, ReactNode } from "react";
import {
  CardVariant,
  SurfaceDensity,
  SurfaceTone,
  getCardSurfaceClasses,
} from "@/components/ui/surface-tokens";

type CardSurfaceProps = {
  as?: ElementType;
  children: ReactNode;
  variant?: CardVariant;
  tone?: SurfaceTone;
  density?: SurfaceDensity;
  className?: string;
};

export default function CardSurface({
  as,
  children,
  variant = "elevated",
  tone = "neutral",
  density = "comfortable",
  className,
}: CardSurfaceProps) {
  const Component = as ?? "div";

  return (
    <Component
      className={getCardSurfaceClasses({
        variant,
        tone,
        density,
        className,
      })}
    >
      {children}
    </Component>
  );
}
