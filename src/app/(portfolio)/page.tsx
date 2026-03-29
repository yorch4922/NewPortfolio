import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen selection:bg-accent/30 selection:text-accent">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
