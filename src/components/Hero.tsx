"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -70]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -115]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.08]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -2]);
  const auraY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -90]);
  const auraScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.1]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);

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
    <section
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="relative bg-bg py-20 md:py-32 overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 hidden h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(211,84,0,0.18)_0%,_rgba(211,84,0,0.05)_45%,_transparent_72%)] blur-2xl md:block"
        style={{ y: auraY, scale: auraScale }}
      />
      <motion.div
        className="container-custom grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div
          className="order-2 md:order-1 flex flex-col gap-6 text-center md:text-left"
          style={{ y: textY }}
        >
          <motion.span variants={itemVariants} className="font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            UX Designer & Researcher
          </motion.span>
          <motion.h1 id="hero-title" variants={itemVariants} className="font-serif text-5xl md:text-7xl font-bold leading-tight text-accent">
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
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="order-1 md:order-2 flex justify-center"
          style={{ y: imageY }}
        >
          <motion.div
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-72 h-72 md:w-[480px] md:h-[480px]"
            style={{ scale: imageScale, rotate: imageRotate }}
          >
            {/* Gradient/Pattern Background for Image */}
            <div className="absolute inset-0 rounded-full bg-[#C8BAA8] overflow-hidden border-8 border-white/50 shadow-2xl">
              <Image
                src="https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/portfolio_edited%201.png"
                alt="Jorge Oropeza Portrait"
                fill
                priority
                sizes="(max-width: 768px) 18rem, 30rem"
                className="object-cover grayscale-0 hover:grayscale-[0.1] transition-all"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        style={{ opacity: cueOpacity }}
      >
        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.35em] text-accent/70">
          Scroll
        </span>
        <motion.span
          className="h-10 w-px rounded-full bg-accent/50"
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, 8, 0],
                  opacity: [0.4, 1, 0.4],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      </motion.div>
    </section>
  );
}
