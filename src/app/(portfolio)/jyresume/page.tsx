import Link from "next/link";
import Image from "next/image";
import { Briefcase, GraduationCap, MapPin, Mail, Download, ChevronLeft, Palette, BookOpen } from "lucide-react";

export default function ResumePage() {
  return (
    <main id="main-content" className="min-h-screen bg-bg selection:bg-accent/30 selection:text-accent pb-20">
      <div className="container-custom py-12">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col">

          {/* Top Bar / Navigation */}
          <div className="px-8 md:px-16 py-6 bg-white border-b border-gray-50 flex justify-between items-center">
            <Link
              href="/"
              className="group flex items-center gap-2 text-text-secondary hover:text-accent transition-colors font-sans text-xs font-bold uppercase tracking-widest"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
            <div className="hidden md:flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-sans text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em]">Available for new projects</span>
            </div>
          </div>

          {/* Hero Section */}
          <section className="bg-bg/50 px-8 md:px-16 py-16 md:py-20 flex flex-col md:flex-row gap-12 items-center md:items-start border-b border-gray-100">
            {/* Profile Image / Verification */}
            <div className="relative shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-white border-4 border-white shadow-xl overflow-hidden flex items-center justify-center bg-bg relative">
                <Image
                  src="https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/portfolio_edited%201.png"
                  alt="Jorge Oropeza Profile"
                  fill
                  sizes="(max-width: 768px) 12rem, 14rem"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-accent rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-bold" aria-hidden="true">&#10003;</span>
              </div>
            </div>

            {/* Hero Text */}
            <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
              <div>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-text-primary leading-tight">
                  Jorge Oropeza
                </h1>
                <p className="font-sans text-xl md:text-2xl text-accent mt-2 font-medium">
                  UI/UX Designer & Researcher
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-text-secondary mt-3">
                  <MapPin size={16} className="text-accent" />
                  <span className="font-sans text-base">Tijuana, Mexico</span>
                </div>
              </div>

              {/* Quick Contact Info */}
              <div className="grid grid-cols-1 gap-4 max-w-sm">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                  <div className="w-10 h-10 bg-bg rounded-xl flex items-center justify-center text-accent">
                    <Mail size={18} />
                  </div>
                  <span className="font-sans text-sm text-text-primary truncate font-medium">jorgeyaelorga@gmail.com</span>
                </div>
              </div>

              <a
                href="https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/JYOResume2026%20%281%29.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Jorge_Oropeza_Resume.pdf"
                className="flex items-center justify-center gap-3 bg-accent text-white font-bold py-4 px-10 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-accent/20 w-fit self-center md:self-start mt-4 text-sm uppercase tracking-widest"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          </section>

          {/* Profile Section */}
          <section className="px-8 md:px-16 py-12 bg-white flex flex-col gap-6 border-b border-gray-50">
            <h2 className="font-serif text-3xl font-bold text-text-primary">Profile</h2>
            <p className="font-sans text-lg text-text-secondary leading-relaxed max-w-5xl">
              Strategic UX Designer and Anthropologist with 4+ years of experience bridging the gap between complex user behaviors and business objectives. I specialize in ethnography-driven design and participatory research to deliver high-impact products that reduce development churn and maximize user satisfaction.
            </p>
          </section>

          {/* Selected Achievement Section */}
          <section className="px-8 md:px-16 py-10 bg-white flex flex-col gap-3 border-b border-gray-50">
            <p className="font-sans text-[10px] font-bold text-accent tracking-[0.3em] uppercase">Success Case</p>
            <p className="font-serif text-xl md:text-2xl text-text-primary leading-relaxed max-w-4xl">
              Redesigned a government administrative ecosystem, unifying 5+ legacy tools into a single design system, resulting in a 40% reduction in user errors and accelerated cross-departmental data synchronization.
            </p>
          </section>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-[1fr_320px] gap-12 p-8 md:p-16">

            {/* Left Column: Experience & Education */}
            <div className="flex flex-col gap-16">

              {/* Experience */}
              <div className="flex flex-col gap-10">
                <div className="flex items-center gap-4">
                  <Briefcase size={22} className="text-accent" />
                  <h2 className="font-serif text-3xl font-bold text-text-primary">Experience</h2>
                </div>

                <div className="flex flex-col gap-12">
                  <div className="relative pl-8 border-l border-accent/20">
                    <div className="absolute top-0 -left-1 w-2 h-2 rounded-full bg-accent" />
                    <div className="flex flex-col gap-2">
                      <h3 className="font-serif text-2xl font-bold text-text-primary">UI/UX Designer</h3>
                      <p className="font-sans font-medium text-accent">Instituto Metropolitano de Planeacion de Tijuana</p>
                      <p className="font-sans text-xs text-text-secondary mb-4 uppercase tracking-wider">September 2022 - Present</p>
                      <ul className="flex flex-col gap-4 font-sans text-text-secondary leading-relaxed text-[15px]">
                        <li className="flex gap-4 items-start">
                          <span className="text-accent mt-1.5 w-1 h-1 bg-accent rounded-full shrink-0" />
                          <span>Spearheading user research and interface design for urban planning tools, increasing data visualization clarity for 100+ government stakeholders.</span>
                        </li>
                        <li className="flex gap-4 items-start">
                          <span className="text-accent mt-1.5 w-1 h-1 bg-accent rounded-full shrink-0" />
                          <span>Leading cross-functional workshops to align urban planners and developers, reducing project discovery time by 25% through anthropological frameworks.</span>
                        </li>
                        <li className="flex gap-4 items-start">
                          <span className="text-accent mt-1.5 w-1 h-1 bg-accent rounded-full shrink-0" />
                          <span>Implementing iterative usability testing that identified and resolved 40+ critical UX bottlenecks in spatial data management interfaces.</span>
                        </li>
                        <li className="flex gap-4 items-start">
                          <span className="text-accent mt-1.5 w-1 h-1 bg-accent rounded-full shrink-0" />
                          <span>Developed a comprehensive design system for internal administrative tools, reducing design-to-development handoff time by 30%.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="flex flex-col gap-10">
                <div className="flex items-center gap-4">
                  <GraduationCap size={22} className="text-accent" />
                  <h2 className="font-serif text-3xl font-bold text-text-primary">Education</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-bg rounded-2xl p-6 border border-gray-100 flex flex-col gap-4">
                    <Palette size={24} className="text-accent" />
                    <div>
                      <h4 className="font-serif text-lg font-bold text-text-primary leading-tight">Google UX Design Professional Certificate</h4>
                      <p className="font-sans text-xs text-text-secondary mt-1 uppercase tracking-wider">Coursera - August 2024</p>
                    </div>
                  </div>
                  <div className="bg-bg rounded-2xl p-6 border border-gray-100 flex flex-col gap-4">
                    <BookOpen size={24} className="text-accent" />
                    <div>
                      <h4 className="font-serif text-lg font-bold text-text-primary leading-tight">Bachelor&apos;s in Social Anthropology</h4>
                      <p className="font-sans text-xs text-text-secondary mt-1 uppercase tracking-wider">ENAH - 2013-2017</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Sidebar */}
            <aside className="flex flex-col gap-12">

              {/* Core Competencies */}
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-text-primary">Expertise</h3>
                  <div className="w-8 h-1 bg-accent mt-2 rounded-full" />
                </div>
                <div className="flex flex-col gap-4">
                  {["User Research", "Stakeholder Management", "Design Strategy", "Applied Anthropology"].map((comp) => (
                    <div key={comp} className="flex items-center gap-3">
                      <span className="font-sans text-[13px] font-medium text-text-secondary">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Tools */}
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-text-primary">Tools</h3>
                  <div className="w-8 h-1 bg-accent mt-2 rounded-full" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "FigJam", "Pencil", "Miro"].map((tool) => (
                    <span key={tool} className="px-3 py-1.5 bg-bg text-text-primary rounded-lg text-xs font-semibold border border-gray-100">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-text-primary">Skills</h3>
                  <div className="w-8 h-1 bg-accent mt-2 rounded-full" />
                </div>
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="font-sans text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mb-2">Methods</p>
                    <div className="flex flex-wrap gap-2">
                      {["Ethnography", "Usability Testing"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-accent/5 text-accent rounded-md text-[11px] font-bold border border-accent/10">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-sans text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mb-2">Design</p>
                    <div className="flex flex-wrap gap-2">
                      {["UI Design", "Design Systems"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-accent/5 text-accent rounded-md text-[11px] font-bold border border-accent/10">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-text-primary">Languages</h3>
                  <div className="w-8 h-1 bg-accent mt-2 rounded-full" />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="font-sans text-[13px] font-medium text-text-secondary">Spanish (Native)</span>
                  <span className="font-sans text-[13px] font-medium text-text-secondary">English (Professional)</span>
                </div>
              </div>

            </aside>
          </div>

          {/* Footer of the CV Card */}
          <div className="px-8 py-10 bg-bg border-t border-gray-100 flex flex-col items-center justify-center">
            <p className="font-sans text-[9px] font-bold text-text-secondary uppercase tracking-[0.3em] opacity-60">
              (c) {new Date().getFullYear()} JORGE OROPEZA
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

