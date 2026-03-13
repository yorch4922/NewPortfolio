import { Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg">
      <div className="container-custom flex flex-col items-center gap-12 text-center">
        <div className="max-w-3xl flex flex-col gap-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">Let&apos;s Work Together</h2>
          <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed">
            I bring an anthropological lens to digital product design — ensuring your solutions resonate deeply with the people they&apos;re built for.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 w-full max-w-2xl">
          <a href="https://linkedin.com/in/jyoropeza" target="_blank" rel="noopener noreferrer" className="bg-card-bg p-10 rounded-3xl flex flex-col items-center gap-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all group">
            <div className="p-4 bg-accent/5 rounded-full group-hover:bg-accent transition-all duration-300">
              <Linkedin size={40} className="text-accent group-hover:text-white transition-colors" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-serif text-xl font-bold text-text-primary uppercase tracking-wider">LinkedIn</span>
              <span className="font-sans text-sm text-accent font-medium">linkedin.com/in/jyoropeza</span>
            </div>
          </a>

          <a href="mailto:jorgeyaelorga@gmail.com" className="bg-card-bg p-10 rounded-3xl flex flex-col items-center gap-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all group">
            <div className="p-4 bg-accent/5 rounded-full group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <Mail size={40} className="text-accent group-hover:text-white transition-colors" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-serif text-xl font-bold text-text-primary uppercase tracking-wider">Email</span>
              <span className="font-sans text-sm text-accent font-medium">jorgeyaelorga@gmail.com</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
