"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { track } from "@vercel/analytics/react";
import SectionSurface from "@/components/ui/SectionSurface";
import CardSurface from "@/components/ui/CardSurface";

type ProjectCardData = {
  title: string;
  badge: string;
  desc: string;
  image: string;
  href: string;
  buttonText?: string;
  isExternal?: boolean;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

function ProjectCard({
  project,
  onProjectClick,
}: {
  project: ProjectCardData;
  onProjectClick: (title: string) => void;
}) {
  const cardRef = useRef<HTMLLIElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 95%", "end 10%"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 45, reduceMotion ? 0 : -24]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.06]);

  return (
    <motion.li
      ref={cardRef}
      variants={itemVariants}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="list-none group"
    >
      <motion.div style={{ y: cardY }}>
        <CardSurface
          as="article"
          variant="soft"
          density="spacious"
          className="w-full flex flex-col md:flex-row gap-10 items-center rounded-3xl hover:shadow-2xl border-gray-100/50"
        >
          <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-md relative">
            <motion.div className="w-full h-full relative" style={{ scale: mediaScale }}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <span className="font-sans text-xs font-bold tracking-[0.2em] text-accent uppercase bg-accent/5 self-start px-3 py-1 rounded-full">
              {project.badge}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary leading-tight">
              {project.title}
            </h3>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              {project.desc}
            </p>
            <div className="pt-4 flex gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {project.isExternal ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.buttonText || "View Project"} (opens in new tab)`}
                    onClick={() => onProjectClick(project.title)}
                    className="inline-block px-6 py-3 bg-accent text-white rounded font-bold hover:brightness-110 shadow-sm transition-colors cursor-pointer"
                  >
                    {project.buttonText || "View Project"}
                  </a>
                ) : (
                  <Link
                    href={project.href}
                    onClick={() => onProjectClick(project.title)}
                    className="inline-block px-6 py-3 bg-accent text-white rounded font-bold hover:brightness-110 shadow-sm transition-colors cursor-pointer"
                  >
                    {project.buttonText || "View Project"}
                  </Link>
                )}
              </motion.div>
            </div>
          </div>
        </CardSurface>
      </motion.div>
    </motion.li>
  );
}

export default function Projects() {
  const projects: ProjectCardData[] = [
    {
      title: "Optimize Geospatial Analysis: Critical insights in a couple of clicks",
      badge: "GIS & Mapping",
      desc: "Designed and deployed a mapping application that empowers municipal staff to instantly access critical risk data and generate custom geographic layers-drastically reducing manual workload and democratizing data accessibility.",
      image: "https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/%C3%81reaTrabajo_Inicio%201.png",
      href: "/projects/optimize-geospatial-analysis"
    },
    {
      title: "Streamlining Urban Development Processes",
      badge: "Urban Development",
      desc: "Spearheaded the complete end-to-end digitalization of urban development procedures. This complex, high-stakes project streamlined municipal government approvals and stands as a resounding UX success story.",
      image: "https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/mockF%201.png",
      href: "/projects/streamlining-urban-development"
    },
    {
      title: "Bachelor's Thesis - Graffiti in Nezahualcoyotl",
      badge: "Anthropological Research",
      desc: "A qualitative research project on graffiti in the municipality of Nezahualcoyotl, combining urban and art anthropology with ethnographic fieldwork, structured interviews, and participatory observation methods.",
      image: "https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/imagen%208%20%281%29.png",
      href: "https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/TesisLicenciatura.pdf",
      buttonText: "Read Full Thesis",
      isExternal: true
    }
  ];

  const handleProjectClick = (title: string) => {
    if (title.includes("Thesis")) {
      track('viewed_thesis', { project: title });
    }
  };

  return (
    <SectionSurface
      id="projects"
      ariaLabelledby="projects-title"
      variant="muted"
      density="comfortable"
      withContainer={false}
    >
      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex flex-col gap-6 mb-16 max-w-2xl">
          <motion.h2 id="projects-title" variants={itemVariants} className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
            Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="font-sans text-base md:text-lg text-text-secondary leading-relaxed">
            Selected case studies from years of collaboration with developers, GIS specialists, and municipal stakeholders.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href="/work"
              className="inline-block text-sm font-bold uppercase tracking-[0.15em] text-accent hover:underline"
            >
              View all work
            </Link>
          </motion.div>
        </div>

        <ul className="grid gap-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onProjectClick={handleProjectClick}
            />
          ))}
        </ul>
      </motion.div>
    </SectionSurface>
  );
}



