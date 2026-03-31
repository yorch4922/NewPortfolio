import { cn } from "@/lib/cn";

type CaseStudySectionHeadingProps = {
  id: string;
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
};

export default function CaseStudySectionHeading({
  id,
  title,
  description,
  eyebrow,
  align = "left",
  className,
}: CaseStudySectionHeadingProps) {
  const alignmentClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <header className={cn("flex flex-col gap-4", alignmentClass, className)}>
      {eyebrow ? (
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="font-serif text-3xl md:text-5xl font-bold text-text-primary leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl font-sans text-base md:text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      ) : null}
    </header>
  );
}

