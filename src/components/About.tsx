"use client";

import { UserCheck, Search, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import SectionSurface from "@/components/ui/SectionSurface";
import CardSurface from "@/components/ui/CardSurface";

export default function About() {
  const features = [
    {
      icon: <UserCheck className="w-8 h-8 text-accent group-hover:text-white transition-colors" />,
      title: "Anthropological Background",
      desc: "My foundation in Social Anthropology gives me a unique perspective for understanding user behaviors, needs, and cultural contexts - going beyond surface-level research."
    },
    {
      icon: <Search className="w-8 h-8 text-accent group-hover:text-white transition-colors" />,
      title: "Qualitative Methods",
      desc: "To gain a genuine understanding of user behavior, I employ key ethnographic methods such as in-depth interviews and participant observation, ensuring designs reflect real-world complexity."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent group-hover:text-white transition-colors" />,
      title: "Constant Validation",
      desc: "I continuously validate design hypotheses through rigorous user testing, ensuring that final solutions are not just functional, but profoundly impactful and relevant to the end-user."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <SectionSurface
      id="about"
      ariaLabelledby="about-title"
      variant="muted"
      density="comfortable"
      withContainer={false}
    >
      <motion.div 
        className="container-custom flex flex-col items-center gap-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="max-w-4xl flex flex-col gap-6">
          <h2 id="about-title" className="font-serif text-4xl md:text-5xl font-bold text-text-primary">About Me</h2>
          <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed">
            At the heart of my work is a simple belief: the best designs are born from deep understanding. My training in Social Anthropology equips me with a unique lens for listening, observing, and translating real human needs into meaningful design decisions.
          </p>
        </motion.div>

        <motion.ul variants={containerVariants} className="grid md:grid-cols-3 gap-8 w-full mt-4">
          {features.map((f, i) => (
            <motion.li 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="list-none"
            >
              <CardSurface
                as="article"
                variant="soft"
                density="comfortable"
                className="rounded-xl flex flex-col items-start text-left gap-5 group cursor-default"
              >
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-accent">{f.title}</h3>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  {f.desc}
                </p>
              </CardSurface>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </SectionSurface>
  );
}



