"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics/react";

export default function Projects() {
  const projects = [
    {
      title: "Optimize geospatial analysis: A couple of clicks to get crucial Information",
      badge: "GIS & Mapping",
      desc: "Designed and deployed a mapping application that empowers municipal staff to instantly access critical risk data and generate custom geographic layers—drastically reducing manual workload and democratizing data accessibility.",
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
      title: "Bachelor's Thesis — Graffiti in Nezahualcoyotl",
      badge: "Anthropological Research",
      desc: "A qualitative research project on graffiti in the municipality of Nezahualcoyotl, combining urban and art anthropology with ethnographic fieldwork, structured interviews, and participatory observation methods.",
      image: "https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/imagen%208%20%281%29.png",
      href: "https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/TesisLicenciatura.pdf", // Add the Vercel Blob URL of your thesis here
      buttonText: "Read Full Thesis",
      isExternal: true
    }
  ];

  const handleProjectClick = (title: string) => {
    if (title.includes("Thesis")) {
      track('viewed_thesis', { project: title });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="projects" className="py-24 bg-card-bg overflow-hidden">
      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex flex-col gap-6 mb-16 max-w-2xl">
          <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
            Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="font-sans text-base md:text-lg text-text-secondary leading-relaxed">
            Selected case studies from years of collaboration with developers, GIS specialists, and municipal stakeholders.
          </motion.p>
        </div>

        <div className="grid gap-16">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col md:flex-row gap-10 bg-bg rounded-3xl p-8 md:p-12 items-center hover:shadow-2xl transition-shadow border border-gray-100/50 group"
            >
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-md relative">
                <motion.div
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <span className="font-sans text-xs font-bold tracking-[0.2em] text-accent uppercase bg-accent/5 self-start px-3 py-1 rounded-full">
                  {p.badge}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary leading-tight">
                  {p.title}
                </h3>
                <p className="font-sans text-base text-text-secondary leading-relaxed">
                  {p.desc}
                </p>
                <div className="pt-4 flex gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    {p.isExternal || p.href === "#" ? (
                      <a
                        href={p.href}
                        target={p.isExternal ? "_blank" : undefined}
                        rel={p.isExternal ? "noopener noreferrer" : undefined}
                        onClick={() => handleProjectClick(p.title)}
                        className="inline-block px-6 py-3 bg-accent text-white rounded font-bold hover:brightness-110 shadow-sm transition-colors cursor-pointer"
                      >
                        {p.buttonText || "View Project"}
                      </a>
                    ) : (
                      <Link
                        href={p.href}
                        onClick={() => handleProjectClick(p.title)}
                        className="inline-block px-6 py-3 bg-accent text-white rounded font-bold hover:brightness-110 shadow-sm transition-colors cursor-pointer"
                      >
                        {p.buttonText || "View Project"}
                      </Link>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
