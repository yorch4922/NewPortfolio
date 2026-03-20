"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();

    if (!name || !email || !message) {
      setStatusMessage("Please complete name, email, and message before submitting.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, company }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setStatusMessage(data.error ?? "Unable to send your message right now.");
        return;
      }

      setStatusMessage("Thanks. Your message has been sent.");
      form.reset();
    } catch {
      setStatusMessage("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
        <div className="bg-bg rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px] border border-gray-100">
          {/* Left Column: Heading & Actions */}
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
                href="mailto:jorgeyaelorga@gmail.com"
                className="flex flex-col group cursor-pointer"
              >
                <p className="font-sans text-xs font-bold text-accent tracking-[0.2em] uppercase">
                  Email Me
                </p>
                <p className="font-sans text-lg md:text-xl font-bold text-text-primary mt-1 group-hover:text-accent transition-colors">
                  jorgeyaelorga@gmail.com
                </p>
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="https://www.linkedin.com/in/jyoropeza/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col group"
              >
                <p className="font-sans text-xs font-bold text-accent tracking-[0.2em] uppercase">LinkedIn</p>
                <p className="font-sans text-lg md:text-xl font-bold text-text-primary mt-1 group-hover:text-accent transition-colors">
                  Jorge Oropeza
                </p>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Form Card */}
          <motion.div variants={itemVariants} className="md:w-1/2 p-6 md:p-12 bg-bg flex items-center justify-center">
            <div className="bg-white rounded-3xl p-8 md:p-12 w-full max-w-md shadow-xl border border-gray-50">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" aria-describedby="contact-form-status">
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sans text-sm font-bold text-text-secondary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    autoComplete="name"
                    required
                    className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans text-text-primary"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans text-sm font-bold text-text-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans text-text-primary"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-sans text-sm font-bold text-text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    minLength={10}
                    required
                    className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans resize-none text-text-primary"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-white font-bold py-4 rounded-xl shadow-lg shadow-accent/20 mt-2 transition-colors hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>

                <p id="contact-form-status" role="status" aria-live="polite" className="font-sans text-sm text-text-secondary min-h-5">
                  {statusMessage}
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
