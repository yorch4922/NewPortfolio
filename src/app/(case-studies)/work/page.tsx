import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type WorkItem = {
  title: string;
  summary: string;
  domain: string;
  href: string;
  image: string;
  cta: string;
  external?: boolean;
};

const WORK_ITEMS: WorkItem[] = [
  {
    title: "Optimize Geospatial Analysis",
    summary:
      "UX redesign for geospatial workflows that reduced manual analysis time and improved data accessibility for municipal teams.",
    domain: "GIS & Mapping",
    href: "/projects/optimize-geospatial-analysis",
    image:
      "https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/%C3%81reaTrabajo_Inicio%201.png",
    cta: "Read case study",
  },
  {
    title: "Streamlining Urban Development Processes",
    summary:
      "End-to-end digitalization of urban development procedures, improving clarity and operational efficiency across stakeholders.",
    domain: "Urban Development",
    href: "/projects/streamlining-urban-development",
    image:
      "https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/mockF%201.png",
    cta: "Read case study",
  },
  {
    title: "Bachelor's Thesis - Graffiti in Nezahualcoyotl",
    summary:
      "Anthropological research grounded in fieldwork, interviews, and participant observation in urban cultural spaces.",
    domain: "Anthropological Research",
    href: "https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/TesisLicenciatura.pdf",
    image:
      "https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/imagen%208%20%281%29.png",
    cta: "Read thesis",
    external: true,
  },
];

export const metadata: Metadata = {
  title: "Work | Jorge Oropeza",
  description:
    "Case studies and selected research work by Jorge Oropeza, UX Designer and Researcher.",
};

export default function WorkPage() {
  return (
    <main id="main-content" className="min-h-screen bg-bg pb-24">
      <section
        aria-labelledby="work-title"
        className="container-custom pt-24 md:pt-32 flex flex-col gap-6"
      >
        <p className="font-sans text-xs font-bold tracking-[0.2em] text-accent uppercase">
          Portfolio
        </p>
        <h1 id="work-title" className="font-serif text-4xl md:text-6xl font-bold text-text-primary">
          Work
        </h1>
        <p className="max-w-3xl font-sans text-lg text-text-secondary leading-relaxed">
          Selected case studies and research projects focused on UX strategy, information architecture, and human-centered design outcomes.
        </p>
      </section>

      <section
        aria-labelledby="case-study-list-title"
        className="container-custom mt-12"
      >
        <h2 id="case-study-list-title" className="sr-only">
          Case studies
        </h2>
        <ul className="grid gap-10">
          {WORK_ITEMS.map((item) => (
            <li
              key={item.title}
              className="list-none rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden"
            >
              <article className="grid md:grid-cols-[1.2fr_1fr]">
                <div className="relative min-h-72 bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col gap-5">
                  <span className="self-start rounded-full bg-accent/5 px-3 py-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    {item.domain}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-base text-text-secondary leading-relaxed">
                    {item.summary}
                  </p>
                  <div className="pt-3">
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.cta} (opens in new tab)`}
                        className="inline-block rounded-lg bg-accent px-6 py-3 font-sans text-sm font-bold text-white hover:brightness-110 transition-all"
                      >
                        {item.cta}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="inline-block rounded-lg bg-accent px-6 py-3 font-sans text-sm font-bold text-white hover:brightness-110 transition-all"
                      >
                        {item.cta}
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

