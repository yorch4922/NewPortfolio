"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
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
    <section className="bg-bg py-20 md:py-32 overflow-hidden">
      <motion.div 
        className="container-custom grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="order-2 md:order-1 flex flex-col gap-6 text-center md:text-left">
          <motion.span variants={itemVariants} className="font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            UX Designer & Researcher
          </motion.span>
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl font-bold leading-tight text-accent">
            Jorge<br />Oropeza
          </motion.h1>
          <motion.h2 variants={itemVariants} className="font-serif text-2xl md:text-3xl text-text-primary leading-snug">
            UX Design with an Anthropological Touch
          </motion.h2>
          <motion.p variants={itemVariants} className="font-sans text-base md:text-lg text-text-secondary max-w-lg leading-relaxed">
            Specializing in participatory design and qualitative research, I merge anthropological methodologies with UX principles to architect deeply human-centered digital experiences.
          </motion.p>
          <motion.div variants={itemVariants} className="pt-4 flex justify-center md:justify-start">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/jyresume" 
                className="inline-block px-10 py-4 bg-accent text-white rounded font-bold hover:brightness-110 shadow-lg shadow-accent/20 cursor-pointer"
              >
                View Resume
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="order-1 md:order-2 flex justify-center">
          <motion.div 
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-72 h-72 md:w-[480px] md:h-[480px]"
          >
            {/* Gradient/Pattern Background for Image */}
            <div className="absolute inset-0 rounded-full bg-[#C8BAA8] overflow-hidden border-8 border-white/50 shadow-2xl">
              <img 
                src="https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/portfolio_edited%201.png"
                alt="Jorge Oropeza Portrait"
                className="w-full h-full object-cover grayscale-0 hover:grayscale-[0.1] transition-all"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
