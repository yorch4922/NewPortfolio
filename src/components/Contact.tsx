"use client";

import { motion } from "framer-motion";

const CONTACT_EMAIL = "jorgeyaelorga@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/jyoropeza/";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="contact" className="py-24 bg-card-bg overflow-hidden">
      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="bg-bg rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[520px] border border-gray-100">
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center gap-10">
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-accent leading-tight">
                Let&apos;s work together.
              </h2>
              <p className="font-sans text-lg md:text-xl text-text-secondary leading-relaxed max-w-md">
                Have a project in mind? Looking for a partner to build something amazing? Feel free to reach out.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <motion.a
                whileHover={{ x: 5 }}
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex flex-col group cursor-pointer"
              >
                <p className="font-sans text-xs font-bold text-accent tracking-[0.2em] uppercase">
                  Email Me
                </p>
                <p className="font-sans text-lg md:text-xl font-bold text-text-primary mt-1 group-hover:text-accent transition-colors">
                  {CONTACT_EMAIL}
                </p>
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col group"
              >
                <p className="font-sans text-xs font-bold text-accent tracking-[0.2em] uppercase">
                  LinkedIn
                </p>
                <p className="font-sans text-lg md:text-xl font-bold text-text-primary mt-1 group-hover:text-accent transition-colors">
                  Jorge Oropeza
                </p>
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="md:w-1/2 p-6 md:p-12 bg-bg flex items-center justify-center">
            <div className="bg-white rounded-3xl p-8 md:p-12 w-full max-w-md shadow-xl border border-gray-50">
              <p className="font-sans text-sm uppercase tracking-[0.2em] font-bold text-accent mb-4">
                Contact
              </p>
              <h3 className="font-serif text-3xl font-bold text-text-primary mb-4">
                Contact form is temporarily unavailable
              </h3>
              <p className="font-sans text-text-secondary leading-relaxed mb-8">
                Please email me directly or send a message on LinkedIn while I finalize a more reliable form flow.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="w-full text-center bg-accent text-white font-bold py-4 rounded-xl shadow-lg shadow-accent/20 transition-colors hover:brightness-110"
                >
                  Email Me
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center border border-gray-200 text-text-primary font-bold py-4 rounded-xl transition-colors hover:bg-gray-50"
                >
                  Message on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
