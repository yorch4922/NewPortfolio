import { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  SurfaceDensity,
  SurfaceTone,
  SurfaceVariant,
  getSectionSurfaceClasses,
} from "@/components/ui/surface-tokens";

type SectionSurfaceProps = {
  as?: ElementType;
  children: ReactNode;
  id?: string;
  ariaLabelledby?: string;
  variant?: SurfaceVariant;
  tone?: SurfaceTone;
  density?: SurfaceDensity;
  withContainer?: boolean;
  className?: string;
  containerClassName?: string;
};

export default function SectionSurface({
  as,
  children,
  id,
  ariaLabelledby,
  variant = "default",
  tone = "neutral",
  density = "comfortable",
  withContainer = true,
  className,
  containerClassName,
}: SectionSurfaceProps) {
  const Component = as ?? "section";

  return (
    <Component
      id={id}
      aria-labelledby={ariaLabelledby}
      className={getSectionSurfaceClasses({
        variant,
        tone,
        density,
        className,
      })}
    >
      {withContainer ? (
        <div className={cn("container-custom", containerClassName)}>{children}</div>
      ) : (
        children
      )}
    </Component>
  );
}
