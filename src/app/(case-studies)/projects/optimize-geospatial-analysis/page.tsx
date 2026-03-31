import type { Metadata } from "next";
import Image from "next/image";
import {
  Bolt,
  CheckCircle,
  Database,
  Layers,
  Workflow,
  XSquare,
} from "lucide-react";
import CaseStudyFinalCta from "@/components/case-study/CaseStudyFinalCta";
import CaseStudySectionHeading from "@/components/case-study/CaseStudySectionHeading";
import CardSurface from "@/components/ui/CardSurface";
import SectionSurface from "@/components/ui/SectionSurface";

const CHALLENGES = [
  {
    icon: <Database className="h-6 w-6 text-accent" aria-hidden="true" />,
    title: "Complex data silos",
    description:
      "Teams spent days moving spatial data across disconnected tools before any analysis could start.",
  },
  {
    icon: <Bolt className="h-6 w-6 text-accent" aria-hidden="true" />,
    title: "Manual processing overhead",
    description:
      "Basic analysis required repetitive manual steps, slowing delivery and increasing operational cost.",
  },
  {
    icon: <XSquare className="h-6 w-6 text-accent" aria-hidden="true" />,
    title: "Inconsistent interfaces",
    description:
      "Fragmented interaction patterns created a steep learning curve and inconsistent outputs.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Stakeholder interviews and workflow mapping across existing systems.",
  },
  {
    step: "02",
    title: "Definition",
    description:
      "Prioritization of key tasks, architecture decisions, and success criteria.",
  },
  {
    step: "03",
    title: "Prototyping",
    description:
      "Low-fidelity and high-fidelity validation with analysts and operational teams.",
  },
  {
    step: "04",
    title: "Implementation",
    description:
      "Rollout of a modular interface and iterative improvements with real usage feedback.",
  },
];

const IA_DECISIONS = [
  {
    title: "Centralized data hub",
    description:
      "A unified access point for geospatial sources replaced fragmented handoffs.",
  },
  {
    title: "Context-aware layering",
    description:
      "The interface proposes relevant analytical layers based on current user intent.",
  },
  {
    title: "One-click exports",
    description:
      "Reporting workflows were shortened so teams can share outputs immediately.",
  },
];

const METRICS = [
  {
    label: "Faster task completion for analysts",
    value: "30%",
  },
  {
    label: "Reduction in manual sync effort",
    value: "50%",
  },
  {
    label: "Automated workflow queries",
    value: "12k+",
  },
  {
    label: "Post-launch satisfaction score",
    value: "98%",
  },
];

const TAKEAWAYS = [
  "Clear visual hierarchy reduced dependence on lengthy training manuals.",
  "Early cross-functional alignment improved scalability across teams.",
  "A modular UI architecture made future feature expansion significantly easier.",
];

export const metadata: Metadata = {
  title: "Optimize Geospatial Analysis | Jorge Oropeza",
  description:
    "Case study on optimizing geospatial analysis workflows through UX and information architecture improvements.",
};

export default function OptimizeGeospatialAnalysis() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-text-primary">
      <SectionSurface
        id="optimize-geospatial-analysis-hero"
        ariaLabelledby="optimize-geospatial-analysis-title"
        variant="default"
        density="spacious"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <header className="space-y-6">
            <p className="inline-flex rounded-full bg-accent/10 px-3 py-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">
              AMRT Case Study
            </p>
            <h1
              id="optimize-geospatial-analysis-title"
              className="font-serif text-4xl md:text-6xl font-bold leading-tight text-text-primary"
            >
              Optimize geospatial analysis with critical insights in a couple of clicks
            </h1>
            <p className="max-w-2xl font-sans text-lg text-text-secondary leading-relaxed">
              Redesigned spatial workflows so analysts can move from raw data to decision-ready outputs faster, with less friction and better consistency.
            </p>
          </header>
          <CardSurface
            as="figure"
            variant="elevated"
            density="compact"
            className="overflow-hidden rounded-3xl border-gray-200 p-0"
          >
            <div className="relative aspect-[4/3] bg-bg">
              <Image
                src="https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/Background%2BShadow.svg"
                alt="AMRT dashboard overview"
                fill
                className="object-contain"
                priority
              />
            </div>
          </CardSurface>
        </div>
      </SectionSurface>

      <SectionSurface
        id="optimize-geospatial-analysis-challenge"
        ariaLabelledby="optimize-geospatial-analysis-challenge-title"
        variant="muted"
        density="comfortable"
      >
        <CaseStudySectionHeading
          id="optimize-geospatial-analysis-challenge-title"
          title="Challenge and context"
          description="The project started with disconnected workflows, inconsistent interfaces, and long operational cycles."
        />
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {CHALLENGES.map((challenge) => (
            <li key={challenge.title} className="list-none">
              <CardSurface as="article" variant="soft" density="comfortable" className="h-full space-y-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  {challenge.icon}
                </span>
                <h3 className="font-serif text-2xl font-bold text-text-primary">
                  {challenge.title}
                </h3>
                <p className="font-sans text-base text-text-secondary leading-relaxed">
                  {challenge.description}
                </p>
              </CardSurface>
            </li>
          ))}
        </ul>
      </SectionSurface>

      <SectionSurface
        id="optimize-geospatial-analysis-process"
        ariaLabelledby="optimize-geospatial-analysis-process-title"
        variant="canvas"
        density="comfortable"
      >
        <CaseStudySectionHeading
          id="optimize-geospatial-analysis-process-title"
          title="Discovery and process"
          description="A four-step approach connected research findings to implementation decisions."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <li key={step.step} className="list-none">
              <CardSurface as="article" variant="elevated" density="comfortable" className="h-full space-y-4">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Step {step.step}
                </p>
                <h3 className="font-serif text-xl font-bold text-text-primary">{step.title}</h3>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </CardSurface>
            </li>
          ))}
        </ol>
      </SectionSurface>

      <SectionSurface
        id="optimize-geospatial-analysis-ia"
        ariaLabelledby="optimize-geospatial-analysis-ia-title"
        variant="default"
        density="comfortable"
      >
        <div className="grid items-start gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <CaseStudySectionHeading
              id="optimize-geospatial-analysis-ia-title"
              title="Information architecture decisions"
              description="The final structure simplified navigation, task targeting, and result delivery."
            />
            <ul className="mt-10 space-y-5">
              {IA_DECISIONS.map((decision) => (
                <li key={decision.title} className="list-none">
                  <CardSurface as="article" variant="outlined" density="compact" className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-text-primary">{decision.title}</h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {decision.description}
                    </p>
                  </CardSurface>
                </li>
              ))}
            </ul>
          </div>
          <CardSurface as="aside" variant="soft" density="comfortable" className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <Workflow className="h-5 w-5 text-accent" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-2xl font-bold text-text-primary">Workflow architecture</h3>
            </div>
            <ol className="space-y-4">
              {[
                "Unified data intake from mapped sources",
                "Smart recommendations for relevant layers",
                "Task-focused analysis workspace",
                "Export-ready outputs for committees",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="font-sans text-sm text-text-secondary">{item}</span>
                </li>
              ))}
            </ol>
          </CardSurface>
        </div>
      </SectionSurface>

      <SectionSurface
        id="optimize-geospatial-analysis-final-ui"
        ariaLabelledby="optimize-geospatial-analysis-final-ui-title"
        variant="muted"
        density="comfortable"
      >
        <CaseStudySectionHeading
          id="optimize-geospatial-analysis-final-ui-title"
          title="Final interface design"
          description="High-fidelity screens focused on faster analysis and clearer spatial decisions."
          eyebrow="High Fidelity"
          align="center"
        />
        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          <li className="list-none">
            <CardSurface as="figure" variant="outlined" density="compact" className="overflow-hidden rounded-2xl p-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/AMRT%20Final.svg"
                  alt="Final AMRT dashboard interface"
                  fill
                  className="object-contain"
                />
              </div>
            </CardSurface>
          </li>
          <li className="list-none">
            <CardSurface as="figure" variant="outlined" density="compact" className="overflow-hidden rounded-2xl p-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/AAMRTFinl.svg"
                  alt="Final AMRT map interface"
                  fill
                  className="object-contain"
                />
              </div>
            </CardSurface>
          </li>
        </ul>
      </SectionSurface>

      <SectionSurface
        id="optimize-geospatial-analysis-results"
        ariaLabelledby="optimize-geospatial-analysis-results-title"
        variant="inverse"
        density="comfortable"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2
              id="optimize-geospatial-analysis-results-title"
              className="font-serif text-3xl md:text-4xl font-bold text-white"
            >
              Results and metrics
            </h2>
            <dl className="mt-10 grid gap-4 md:grid-cols-2">
              {METRICS.map((metric) => (
                <CardSurface
                  key={metric.label}
                  as="div"
                  variant="outlined"
                  density="compact"
                  className="border-white/25 bg-white/10"
                >
                  <dt className="font-sans text-xs uppercase tracking-[0.15em] text-white/80">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 font-serif text-4xl font-bold text-white">{metric.value}</dd>
                </CardSurface>
              ))}
            </dl>
          </div>
          <CardSurface as="aside" variant="outlined" density="comfortable" className="border-white/25 bg-white/10 space-y-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                <Layers className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">Key takeaways</h3>
            </div>
            <ul className="space-y-4">
              {TAKEAWAYS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                  <span className="font-sans text-sm leading-relaxed text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </CardSurface>
        </div>
      </SectionSurface>

      <CaseStudyFinalCta
        sectionId="optimize-geospatial-analysis-cta"
        titleId="optimize-geospatial-analysis-cta-title"
        eyebrow="Next step"
        title="Ready to improve your product decisions?"
        description="I can help your team translate complex data and workflows into intuitive, high-impact user experiences."
        primaryHref="/#contact"
        primaryLabel="Start a project"
        secondaryHref="/work"
        secondaryLabel="View more work"
      />
    </main>
  );
}

