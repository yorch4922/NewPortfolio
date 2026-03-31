import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Database,
  Bolt,
  XSquare,
  Layers,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Optimize Geospatial Analysis | Jorge Oropeza",
  description:
    "Case study on optimizing geospatial analysis workflows through UX and information architecture improvements.",
};

export default function OptimizeGeospatialAnalysis() {
  return (
    <main id="main-content" className="min-h-screen bg-white font-sans text-text-primary">
      {/* Hero Section */}
      <section
        aria-labelledby="optimize-geospatial-analysis-title"
        className="pt-40 pb-20 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
      >
        <header className="flex-1 space-y-6">
          <span className="text-[#ea580c] font-bold text-sm tracking-widest uppercase bg-[#ea580c]/10 px-3 py-1 rounded-full border border-[#ea580c]/20">
            AMRT Case Study
          </span>
          <h1
            id="optimize-geospatial-analysis-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#1e293b]"
          >
            Optimize Geospatial Analysis: Critical insights in a couple of clicks
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
            Revolutionized how teams interact with complex spatial data through intuitive dashboard design and automated workflows.
          </p>
        </header>
        <div
          className="flex-1 w-full relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
        >
          {/* Main Dashboard Mockup */}
          <div className="relative w-full h-full bg-[#1e293b] flex items-center justify-center overflow-hidden">
            <Image
              src="https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/Background%2BShadow.svg"
              alt="AMRT Dashboard Mockup"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* The Challenge & Value Proposition */}
      <section
        aria-labelledby="challenge-value-proposition-title"
        className="py-24 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto"
      >
        <h2
          id="challenge-value-proposition-title"
          className="font-serif text-3xl md:text-4xl font-bold text-[#1e293b] mb-16 text-center lg:text-left"
        >
          The Challenge & Value Proposition
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Database className="w-8 h-8 text-[#ea580c]" />,
              title: "Complex Data Silos",
              desc: "Teams wasted days moving spatial data across multiple disconnected legacy systems."
            },
            {
              icon: <Bolt className="w-8 h-8 text-[#ea580c]" />,
              title: "Manual Processing",
              desc: "Time-consuming manual steps required simply to aggregate basic spatial datasets."
            },
            {
              icon: <XSquare className="w-8 h-8 text-[#ea580c]" />,
              title: "Inconsistent UI",
              desc: "Fragmented interfaces across varying tools created steep learning curves with inconsistent outputs."
            }
          ].map((item, i) => (
            <li
              key={i}
              className="list-none bg-[#fafafa] p-10 rounded-2xl border border-gray-100 transition-all hover:shadow-lg"
            >
              <article>
                <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#1e293b]">{item.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* Discovery & Process Phase */}
      <section
        aria-labelledby="discovery-process-title"
        className="py-24 bg-[#fafafa] px-6 md:px-20 lg:px-32"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="discovery-process-title"
            className="font-serif text-3xl md:text-4xl font-bold text-[#1e293b] mb-20 text-center lg:text-left"
          >
            Discovery & Process Phase
          </h2>

          <div className="relative">
            {/* Horizontal connection line for desktop */}
            <div aria-hidden="true" className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gray-200 z-0"></div>

            <ol className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {[
                {
                  step: "1",
                  title: "Discovery",
                  desc: "Stakeholder interviews and mapping out legacy tool networks."
                },
                {
                  step: "2",
                  title: "Definition",
                  desc: "Refining core parameters and flow architecture decisions."
                },
                {
                  step: "3",
                  title: "Prototyping",
                  desc: "Low-fidelity wireframes followed by high-fidelity interactive prototypes."
                },
                {
                  step: "4",
                  title: "UI/UX Design",
                  desc: "Applying Stitch-based design system and iterating with real workflows."
                }
              ].map((phase, i) => (
                <li
                  key={i}
                  className="list-none relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#ea580c] text-white flex items-center justify-center font-bold text-xl shadow-md border-4 border-white">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1e293b] mb-2">{phase.title}</h3>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">{phase.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Information Architecture & Workflow */}
      <section
        aria-labelledby="information-architecture-title"
        className="py-24 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32"
      >
        <div className="flex-1 space-y-12">
          <div className="space-y-4">
            <h2
              id="information-architecture-title"
              className="font-serif text-3xl md:text-4xl font-bold text-[#1e293b] leading-tight"
            >
              Information Architecture & Workflow
            </h2>
          </div>

          <ul className="space-y-8">
            {[
              {
                title: "Centralized Data Hub",
                desc: "Eliminating silos by unifying all geospatial sources into a single access point."
              },
              {
                title: "Predictive Layering",
                desc: "Smart UI that suggests analytical layers based on the current analytical task."
              },
              {
                title: "Export Workflows",
                desc: "One-click reporting and summaries distributed to key committees."
              }
            ].map((feature, i) => (
              <li key={i} className="list-none flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-[#ea580c] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-[#1e293b]">{feature.title}</h4>
                  <p className="text-gray-500 font-light leading-relaxed">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="flex-1 w-full aspect-square max-w-md relative"
        >
          <div className="w-full h-full rounded-3xl border border-[#ea580c]/20 bg-white shadow-xl p-8 flex flex-col gap-8 justify-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#ea580c]/10 flex items-center justify-center">
                <Layers className="w-6 h-6 text-[#ea580c]" />
              </div>
              <p className="font-bold text-[#1e293b]">Workflow Architecture</p>
            </div>
            <ol className="space-y-4">
              {[
                "Data Intake from unified geospatial sources",
                "Context-aware layer recommendations",
                "Task-focused analysis workspace",
                "One-click export for committees",
              ].map((step) => (
                <li key={step} className="text-sm text-gray-600 leading-relaxed flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#ea580c] shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Final Interface Design */}
      <section
        aria-labelledby="final-interface-design-title"
        className="py-24 bg-[#fafafa] px-6 md:px-20 lg:px-32"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#ea580c] font-bold text-sm tracking-widest uppercase italic">High Fidelity Structure</span>
            <h2
              id="final-interface-design-title"
              className="font-serif text-4xl font-bold text-[#1e293b] tracking-wider uppercase"
            >
              Final Interface Design
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <figure
              className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200"
            >
              <div className="relative w-full h-full">
                <Image
                  src="https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/AMRT%20Final.svg"
                  alt="AMRT final dashboard interface"
                  fill
                  className="object-contain"
                />
              </div>
            </figure>
            <figure
              className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200"
            >
              <div className="relative w-full h-full">
                <Image
                  src="https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/AAMRTFinl.svg"
                  alt="AMRT final map interface"
                  fill
                  className="object-contain"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section
        aria-labelledby="results-metrics-title"
        className="py-24 bg-[#ea580c] px-6 md:px-20 lg:px-32 text-white"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Metrics */}
          <div className="flex-1 space-y-12">
            <h2
              id="results-metrics-title"
              className="font-serif text-3xl font-bold"
            >
              Results & Metrics
            </h2>
            <dl className="grid grid-cols-2 gap-10">
              <div className="space-y-2">
                <dt className="text-white/80 font-light text-sm uppercase tracking-wider">Faster task completion for data analysts</dt>
                <dd className="text-5xl md:text-6xl font-black">30%</dd>
              </div>
              <div className="space-y-2">
                <dt className="text-white/80 font-light text-sm uppercase tracking-wider">Reduction in manual documentation sync</dt>
                <dd className="text-5xl md:text-6xl font-black">50%</dd>
              </div>
              <div className="space-y-2">
                <dt className="text-white/80 font-light text-sm uppercase tracking-wider">Automated workflow queries</dt>
                <dd className="text-5xl md:text-6xl font-black">12k+</dd>
              </div>
              <div className="space-y-2">
                <dt className="text-white/80 font-light text-sm uppercase tracking-wider">User satisfaction score post-launch</dt>
                <dd className="text-5xl md:text-6xl font-black">98%</dd>
              </div>
            </dl>
          </div>

          {/* Key Takeaways Card */}
          <div
            className="flex-1 bg-white/10 backdrop-blur-md rounded-3xl p-10 lg:p-12 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-8">Key Takeaways</h3>
            <ul className="space-y-6">
              {[
                "Simplifying complex data removes the need for 5-page training manuals, leveraging intuitive visual cues.",
                "Cross-functional collaboration early in the discovery phase ensures the UI scales across domains.",
                "Establishing a modular UI toolkit allowed for future integration of AI based predictive modeling."
              ].map((t, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="font-light leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        aria-labelledby="final-cta-title"
        className="py-40 px-6 text-center max-w-5xl mx-auto flex flex-col items-center gap-8"
      >
        <div className="space-y-4">
          <span className="text-[#ea580c] font-bold text-sm tracking-widest uppercase">
            Let&apos;s work together on your next project
          </span>
          <h2
            id="final-cta-title"
            className="font-serif text-5xl md:text-6xl font-black text-[#1e293b] tracking-tight"
          >
            Ready to elevate your digital experience?
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <div>
            <Link href="/#contact" className="inline-block px-8 py-4 bg-[#ea580c] text-white rounded font-bold hover:brightness-110 shadow-lg cursor-pointer transition-all">
              Start a Project
            </Link>
          </div>
          <div>
            <Link href="/work" className="inline-block px-8 py-4 bg-transparent border-2 border-gray-200 text-[#1e293b] rounded font-bold hover:border-gray-300 hover:bg-gray-50 shadow-sm cursor-pointer transition-all">
              View More Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}



