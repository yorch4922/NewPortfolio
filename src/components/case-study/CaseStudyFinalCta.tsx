import Link from "next/link";
import SectionSurface from "@/components/ui/SectionSurface";

type CaseStudyFinalCtaProps = {
  sectionId: string;
  titleId: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export default function CaseStudyFinalCta({
  sectionId,
  titleId,
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CaseStudyFinalCtaProps) {
  return (
    <SectionSurface
      id={sectionId}
      ariaLabelledby={titleId}
      variant="default"
      density="spacious"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
        <div className="space-y-4">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h2 id={titleId} className="font-serif text-4xl md:text-6xl font-bold text-text-primary leading-tight">
            {title}
          </h2>
          <p className="mx-auto max-w-3xl font-sans text-lg text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link
            href={primaryHref}
            className="rounded-xl bg-accent px-8 py-4 text-center font-sans text-sm font-bold text-white transition-all hover:brightness-110"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="rounded-xl border border-gray-300 px-8 py-4 text-center font-sans text-sm font-bold text-text-primary transition-colors hover:bg-gray-50"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </SectionSurface>
  );
}

