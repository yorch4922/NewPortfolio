"use client";

import { Layout, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const roles = [
    {
      title: "UX Responsibilities",
      icon: <Layout className="w-7 h-7 text-accent" />,
      list: [
        "Lead ethnographic research to decode nuanced user contexts and behaviors.",
        "Synthesize complex data into actionable journey maps, service blueprints, and dynamic personas.",
        "Facilitating strategic co-creation workshops to align stakeholders and co-design solutions with end-users.",
        "Architecting seamless user flows, from low-fidelity wireframes to rapid high-fidelity prototyping and iterative testing."
      ]
    },
    {
      title: "PM Responsibilities",
      icon: <BarChart2 className="w-7 h-7 text-accent" />,
      list: [
        "Product visioning, strategic planning, and comprehensive roadmapping.",
        "Rigorous backlog management and prioritization in Agile/Scrum environments.",
        "Cross-functional team leadership and transparent stakeholder communication.",
        "Defining core success metrics and steering data-driven product decisions."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="experience" className="py-24 bg-bg overflow-hidden">
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex flex-col gap-6 mb-16 max-w-2xl">
          <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
            Professional Experience
          </motion.h2>
          <motion.p variants={itemVariants} className="font-sans text-base md:text-lg text-text-secondary leading-relaxed">
            End-to-end ownership of UX research and project management within multidisciplinary, cross-functional teams.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {roles.map((role, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-card-bg p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100/50 flex flex-col gap-8 transition-shadow cursor-default"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/5 rounded-full">
                  {role.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-accent">{role.title}</h3>
              </div>
              
              <ul className="flex flex-col gap-5">
                {role.list.map((item, j) => (
                  <motion.li 
                    key={j} 
                    className="flex gap-4 items-start font-sans text-sm md:text-base text-text-primary leading-snug"
                    variants={itemVariants}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-16 p-8 bg-accent/5 rounded-2xl border border-accent/10"
        >
          <p className="font-sans text-base md:text-lg text-text-primary leading-relaxed text-center italic">
            "Over the past several years, I have collaborated with front-end and back-end developers, GIS specialists, and key stakeholders to build user-centered applications — taking on roles as designer, researcher, product owner, and content strategist."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
