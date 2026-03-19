"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Database,
  Bolt,
  XSquare,
  Layers,
  CheckCircle,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function OptimizeGeospatialAnalysis() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="min-h-screen bg-white font-sans text-text-primary">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="pt-40 pb-20 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
      >
        <div className="flex-1 space-y-6">
          <motion.span variants={fadeUpVariant} className="text-[#ea580c] font-bold text-sm tracking-widest uppercase bg-[#ea580c]/10 px-3 py-1 rounded-full border border-[#ea580c]/20">
            AMRT Case Study
          </motion.span>
          <motion.h1 variants={fadeUpVariant} className="font-serif text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#1e293b]">
            Optimize geospatial analysis: A couple of clicks to get crucial Information
          </motion.h1>
          <motion.p variants={fadeUpVariant} className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
            Revolutionized how teams interact with complex spatial data through intuitive dashboard design and automated workflows.
          </motion.p>
        </div>
        <motion.div
          variants={fadeUpVariant}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex-1 w-full relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
        >
          {/* Main Dashboard Mockup */}
          <div className="w-full h-full bg-[#1e293b] flex items-center justify-center text-gray-400 p-8 text-center text-sm font-light">
             {/* Replace with <Image src="..." /> when assets are available */}
             Dashboard Mockup Image Placeholder
          </div>
        </motion.div>
      </motion.section>

      {/* The Challenge & Value Proposition */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="py-24 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto"
      >
        <motion.h2 variants={fadeUpVariant} className="font-serif text-3xl md:text-4xl font-bold text-[#1e293b] mb-16 text-center lg:text-left">
          The Challenge & Value Proposition
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <motion.div
              key={i}
              variants={fadeUpVariant}
              whileHover={{ y: -5 }}
              className="bg-[#fafafa] p-10 rounded-2xl border border-gray-100 transition-all hover:shadow-lg"
            >
              <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#1e293b]">{item.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Discovery & Process Phase */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="py-24 bg-[#fafafa] px-6 md:px-20 lg:px-32"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={fadeUpVariant} className="font-serif text-3xl md:text-4xl font-bold text-[#1e293b] mb-20 text-center lg:text-left">
            Discovery & Process Phase
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Horizontal connection line for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gray-200 z-0"></div>

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
              <motion.div key={i} variants={fadeUpVariant} className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                <div className="w-14 h-14 rounded-full bg-[#ea580c] text-white flex items-center justify-center font-bold text-xl shadow-md border-4 border-white">
                  {phase.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1e293b] mb-2">{phase.title}</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Information Architecture & Workflow */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="py-24 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32"
      >
        <div className="flex-1 space-y-12">
          <div className="space-y-4">
            <motion.h2 variants={fadeUpVariant} className="font-serif text-3xl md:text-4xl font-bold text-[#1e293b] leading-tight">
              Information Architecture & Workflow
            </motion.h2>
          </div>

          <div className="space-y-8">
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
                desc: "One-click reporting and summmaries distributed to key committees."
              }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeUpVariant} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-[#ea580c] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-[#1e293b]">{feature.title}</h4>
                  <p className="text-gray-500 font-light leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeUpVariant}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
           className="flex-1 w-full aspect-square max-w-md relative"
        >
           {/* Center Flow Diagram Placeholder */}
           <div className="w-full h-full border-2 border-dashed border-[#ea580c]/50 rounded-full flex items-center justify-center flex-col gap-4 text-center p-12 bg-orange-50/30">
              <Layers className="w-12 h-12 text-[#ea580c]" />
              <span className="font-bold text-[#ea580c]">Unified Flow Diagram Placeholder</span>
           </div>
        </motion.div>
      </motion.section>

      {/* Final Interface Design */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="py-24 bg-[#fafafa] px-6 md:px-20 lg:px-32"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center">
            <motion.div variants={fadeUpVariant} className="text-center mb-16 space-y-4">
               <span className="text-[#ea580c] font-bold text-sm tracking-widest uppercase italic">High Fidelity Structure</span>
               <h2 className="font-serif text-4xl font-bold text-[#1e293b] tracking-wider uppercase">Final Interface Design</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <motion.div variants={fadeUpVariant} className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-[#1e293b] flex items-center justify-center border border-gray-200 p-8 text-center text-sm font-light text-white">
                    {/* Placeholder for Laptop Mockup */}
                    Dark Theme Dashboard Mockup Placeholder
                </motion.div>
                <motion.div variants={fadeUpVariant} className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-green-100 flex items-center justify-center border border-gray-200 p-8 text-center text-sm font-light text-green-800">
                    {/* Placeholder for Map View Mockup */}
                    Map Interface Mockup Placeholder
                </motion.div>
            </div>
        </div>
      </motion.section>

      {/* Results & Metrics */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="py-24 bg-[#ea580c] px-6 md:px-20 lg:px-32 text-white"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Metrics */}
          <div className="flex-1 space-y-12">
             <motion.h2 variants={fadeUpVariant} className="font-serif text-3xl font-bold">Results & Metrics</motion.h2>
             <div className="grid grid-cols-2 gap-10">
                <motion.div variants={fadeUpVariant} className="space-y-2">
                   <span className="text-5xl md:text-6xl font-black">30%</span>
                   <p className="text-white/80 font-light text-sm uppercase tracking-wider">Faster task completion for data analysts</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="space-y-2">
                   <span className="text-5xl md:text-6xl font-black">50%</span>
                   <p className="text-white/80 font-light text-sm uppercase tracking-wider">Reduction in manual documentation sync</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="space-y-2">
                   <span className="text-5xl md:text-6xl font-black">12k+</span>
                   <p className="text-white/80 font-light text-sm uppercase tracking-wider">Automated workflow queries</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="space-y-2">
                   <span className="text-5xl md:text-6xl font-black">98%</span>
                   <p className="text-white/80 font-light text-sm uppercase tracking-wider">User satisfaction score post-launch</p>
                </motion.div>
             </div>
          </div>

          {/* Key Takeaways Card */}
          <motion.div
             variants={fadeUpVariant}
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
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="py-40 px-6 text-center max-w-5xl mx-auto flex flex-col items-center gap-8"
      >
        <div className="space-y-4">
          <motion.span variants={fadeUpVariant} className="text-[#ea580c] font-bold text-sm tracking-widest uppercase">
              Let&apos;s work together on your next project
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="font-serif text-5xl md:text-6xl font-black text-[#1e293b] tracking-tight">
              Ready to elevate your digital experience?
          </motion.h2>
        </div>
        <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/" className="inline-block px-8 py-4 bg-[#ea580c] text-white rounded font-bold hover:brightness-110 shadow-lg cursor-pointer transition-all">
                    Start a Project
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/" className="inline-block px-8 py-4 bg-transparent border-2 border-gray-200 text-[#1e293b] rounded font-bold hover:border-gray-300 hover:bg-gray-50 shadow-sm cursor-pointer transition-all">
                    View More Work
                </Link>
            </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
    </main>
  );
}
