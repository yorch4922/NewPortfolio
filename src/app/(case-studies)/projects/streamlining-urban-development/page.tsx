import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRightCircle, Award, CheckCircle, Database, Layers, PencilRuler, Search, Users, Zap } from "lucide-react";
import CaseStudyFinalCta from "@/components/case-study/CaseStudyFinalCta";
import CaseStudySectionHeading from "@/components/case-study/CaseStudySectionHeading";
import CardSurface from "@/components/ui/CardSurface";
import SectionSurface from "@/components/ui/SectionSurface";

const ROLE_ITEMS = [
  "Lead UX/UI Designer",
  "User Research",
  "Information Architect",
  "Design System Manager",
];

const DISCOVERY_ITEMS = [
  {
    icon: <Users className="h-6 w-6 text-accent" aria-hidden="true" />,
    title: "Qualitative research",
    description:
      "24+ interviews and targeted surveys with government officials to identify friction in document verification and approval flows.",
  },
  {
    icon: <Zap className="h-6 w-6 text-accent" aria-hidden="true" />,
    title: "Key pain points",
    description:
      "Fragmented data sources, absent real-time status updates, and legal language complexity blocked service efficiency.",
  },
];

const METRICS = [
  { value: "12M", label: "Procedures mapped" },
  { value: "450+", label: "Entities connected" },
  { value: "2B", label: "Data points" },
  { value: "0.4s", label: "Average load time" },
];

const PROCESS_CARDS = [
  {
    icon: <Search className="h-5 w-5 text-accent" aria-hidden="true" />,
    title: "UX research",
    description:
      "Mapped current procedures and documented recurring bottlenecks in manual operation paths.",
  },
  {
    icon: <PencilRuler className="h-5 w-5 text-accent" aria-hidden="true" />,
    title: "UI design",
    description:
      "Built a clear, accessible interface model adapted to multiple user skill levels and workflows.",
  },
  {
    icon: <CheckCircle className="h-5 w-5 text-accent" aria-hidden="true" />,
    title: "Validation",
    description:
      "Tested with citizens and internal staff to improve reliability, comprehension, and decision speed.",
  },
];

const OPERATIONS_ITEMS = [
  {
    icon: <ArrowRightCircle className="h-5 w-5 text-accent" aria-hidden="true" />,
    text: "Streamlined operational handoffs",
  },
  {
    icon: <Database className="h-5 w-5 text-accent" aria-hidden="true" />,
    text: "Higher data integrity and traceability",
  },
  {
    icon: <Layers className="h-5 w-5 text-accent" aria-hidden="true" />,
    text: "Scalable service architecture",
  },
];

const LESSONS = [
  {
    icon: <Award className="h-6 w-6 text-accent" aria-hidden="true" />,
    title: "Industry constraints",
    description:
      "Balancing legacy requirements with modern UX standards requires precise prioritization and tradeoff management.",
  },
  {
    icon: <Users className="h-6 w-6 text-accent" aria-hidden="true" />,
    title: "Inclusive usability",
    description:
      "Accessible language, feedback, and structure are essential for broad public-service adoption.",
  },
  {
    icon: <PencilRuler className="h-6 w-6 text-accent" aria-hidden="true" />,
    title: "System scalability",
    description:
      "A modular design system accelerated implementation and improved consistency across future expansions.",
  },
];

export const metadata: Metadata = {
  title: "Streamlining Urban Development | Jorge Oropeza",
  description:
    "Case study on redesigning urban development processes for faster, more accessible digital public services.",
};

export default function StreamliningUrbanDevelopmentPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-text-primary">
      <SectionSurface
        id="streamlining-urban-development-hero"
        ariaLabelledby="streamlining-urban-development-title"
        variant="default"
        density="spacious"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Case Study
          </p>
          <h1
            id="streamlining-urban-development-title"
            className="font-serif text-4xl md:text-7xl font-bold leading-tight"
          >
            Streamlining urban development processes
          </h1>
          <p className="max-w-3xl font-sans text-lg text-text-secondary leading-relaxed">
            A full-service UX transformation for municipal procedures focused on accessibility, transparency, and operational speed.
          </p>
          <CardSurface as="aside" variant="soft" density="compact" className="inline-flex items-center gap-4 rounded-xl">
            <div className="text-left">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">Impact</p>
              <p className="font-sans text-sm font-semibold text-text-primary">
                Reduced analysis-phase processing time by 65%
              </p>
            </div>
          </CardSurface>
          <CardSurface as="figure" variant="elevated" density="compact" className="relative w-full overflow-hidden rounded-3xl p-0">
            <div className="relative aspect-[1000/500] bg-bg">
              <Image
                src="https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/herosectionDPPW.png"
                alt="Urban development dashboard interface"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-accent px-4 py-2 text-left text-white shadow-lg md:bottom-8 md:left-8">
                <p className="font-serif text-2xl font-bold">100%</p>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.15em]">Paperless migration</p>
              </div>
            </div>
          </CardSurface>
        </div>
      </SectionSurface>

      <SectionSurface
        id="streamlining-urban-development-context"
        ariaLabelledby="streamlining-urban-development-context-title"
        variant="muted"
        density="comfortable"
      >
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <CaseStudySectionHeading
            id="streamlining-urban-development-context-title"
            title="Value proposition and role"
            description="The objective was to simplify complex municipal procedures into a digital service that is faster and easier to understand for both citizens and officials."
          />
          <CardSurface as="aside" variant="soft" density="comfortable" className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-text-primary">Project role</h3>
            <ul className="space-y-3">
              {ROLE_ITEMS.map((role) => (
                <li key={role} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <span className="font-sans text-sm text-text-secondary">{role}</span>
                </li>
              ))}
            </ul>
          </CardSurface>
        </div>
      </SectionSurface>

      <SectionSurface
        id="streamlining-urban-development-discovery"
        ariaLabelledby="streamlining-urban-development-discovery-title"
        variant="canvas"
        density="comfortable"
      >
        <CaseStudySectionHeading
          id="streamlining-urban-development-discovery-title"
          title="Strategic discovery and insights"
          description="Research combined interviews and service walkthroughs to define where the current process was failing users."
          eyebrow="Discovery phase"
          align="center"
        />
        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {DISCOVERY_ITEMS.map((item) => (
            <li key={item.title} className="list-none">
              <CardSurface as="article" variant="elevated" density="comfortable" className="h-full space-y-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-bg">
                  {item.icon}
                </span>
                <h3 className="font-serif text-2xl font-bold text-text-primary">{item.title}</h3>
                <p className="font-sans text-base leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </CardSurface>
            </li>
          ))}
        </ul>
      </SectionSurface>

      <SectionSurface
        id="streamlining-urban-development-architecture"
        ariaLabelledby="streamlining-urban-development-architecture-title"
        variant="default"
        density="comfortable"
      >
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <CaseStudySectionHeading
              id="streamlining-urban-development-architecture-title"
              title="System architecture and impact"
              description="The architecture phase mapped service dependencies and established scalable data foundations."
              eyebrow="Definition phase"
            />
            <ul className="mt-8 space-y-3">
              {[
                "Complete system mapping across service touchpoints",
                "Data architecture for interoperable workflows",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ArrowRightCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="font-sans text-sm text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2">
            {METRICS.map((metric) => (
              <CardSurface key={metric.label} as="div" variant="soft" density="compact" className="text-center">
                <dd className="font-serif text-4xl font-bold text-accent">{metric.value}</dd>
                <dt className="mt-2 font-sans text-xs uppercase tracking-[0.15em] text-text-secondary">
                  {metric.label}
                </dt>
              </CardSurface>
            ))}
          </dl>
        </div>
      </SectionSurface>

      <SectionSurface
        id="streamlining-urban-development-process"
        ariaLabelledby="streamlining-urban-development-process-title"
        variant="muted"
        density="comfortable"
      >
        <CaseStudySectionHeading
          id="streamlining-urban-development-process-title"
          title="Process and implementation"
          description="The delivery model connected research, design, and validation through iterative cycles."
          align="center"
        />
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {PROCESS_CARDS.map((card) => (
            <li key={card.title} className="list-none">
              <CardSurface as="article" variant="outlined" density="comfortable" className="h-full space-y-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  {card.icon}
                </span>
                <h3 className="font-serif text-xl font-bold text-text-primary">{card.title}</h3>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </CardSurface>
            </li>
          ))}
        </ul>
      </SectionSurface>

      <SectionSurface
        id="streamlining-urban-development-operations"
        ariaLabelledby="streamlining-urban-development-operations-title"
        variant="default"
        density="comfortable"
      >
        <CaseStudySectionHeading
          id="streamlining-urban-development-operations-title"
          title="Empowering internal operations"
          description="The internal platform improved request tracking, service response, and operational visibility."
          eyebrow="UX and architecture analysis"
        />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {OPERATIONS_ITEMS.map((item) => (
            <li key={item.text} className="list-none">
              <CardSurface as="article" variant="soft" density="compact" className="h-full flex items-center gap-3">
                {item.icon}
                <p className="font-sans text-sm font-semibold text-text-primary">{item.text}</p>
              </CardSurface>
            </li>
          ))}
        </ul>
      </SectionSurface>

      <SectionSurface
        id="streamlining-urban-development-features"
        ariaLabelledby="streamlining-urban-development-features-title"
        variant="canvas"
        density="comfortable"
      >
        <CaseStudySectionHeading
          id="streamlining-urban-development-features-title"
          title="Feature deep dives"
          description="Two interfaces focused on reducing procedural errors and improving real-time service operations."
          align="center"
        />
        <ul className="mt-12 space-y-8">
          <li className="list-none">
            <CardSurface as="article" variant="elevated" density="comfortable" className="grid items-center gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-serif text-3xl font-bold text-text-primary">
                  Dynamic form for every procedure
                </h3>
                <p className="font-sans text-base leading-relaxed text-text-secondary">
                  A guided review workflow for descriptive documents helped teams validate legal and technical requirements before approval.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <Image
                  src="https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/AB6AXU~1.PNG"
                  alt="Dynamic form interface for procedure validation"
                  width={900}
                  height={650}
                  className="h-auto w-full object-cover"
                />
              </div>
            </CardSurface>
          </li>
          <li className="list-none">
            <CardSurface as="article" variant="elevated" density="comfortable" className="grid items-center gap-8 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-gray-200 lg:order-1">
                <Image
                  src="https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/4taimagen.png"
                  alt="Citizen service panel interface"
                  width={900}
                  height={650}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="space-y-4 lg:order-2">
                <h3 className="font-serif text-3xl font-bold text-text-primary">
                  Citizen service panel
                </h3>
                <p className="font-sans text-base leading-relaxed text-text-secondary">
                  A central operational panel for tracking requests, managing appointments, and coordinating updates across teams.
                </p>
                <ul className="space-y-2">
                  {[
                    "Real-time request status tracking",
                    "Appointment management with clear ownership",
                    "Integrated communication touchpoints",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      <span className="font-sans text-sm text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardSurface>
          </li>
        </ul>
      </SectionSurface>

      <SectionSurface
        id="streamlining-urban-development-lessons"
        ariaLabelledby="streamlining-urban-development-lessons-title"
        variant="muted"
        density="comfortable"
      >
        <CaseStudySectionHeading
          id="streamlining-urban-development-lessons-title"
          title="Lessons learned"
          description="The project reinforced how research quality and design-system rigor directly affect public-service outcomes."
          align="center"
        />
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {LESSONS.map((lesson) => (
            <li key={lesson.title} className="list-none">
              <CardSurface as="article" variant="outlined" density="comfortable" className="h-full space-y-4 text-center">
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  {lesson.icon}
                </span>
                <h3 className="font-serif text-2xl font-bold text-text-primary">{lesson.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-text-secondary">
                  {lesson.description}
                </p>
              </CardSurface>
            </li>
          ))}
        </ul>
      </SectionSurface>

      <CaseStudyFinalCta
        sectionId="streamlining-urban-development-cta"
        titleId="streamlining-urban-development-cta-title"
        eyebrow="Let's collaborate"
        title="Need a UX partner for complex civic workflows?"
        description="I work with teams that need rigorous research, clear information architecture, and scalable design execution."
        primaryHref="/#contact"
        primaryLabel="Let's talk"
        secondaryHref="/work"
        secondaryLabel="See more case studies"
      />
    </main>
  );
}
