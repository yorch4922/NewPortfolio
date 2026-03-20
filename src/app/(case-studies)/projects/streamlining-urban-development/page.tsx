import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, Zap, Award, PencilRuler, ArrowRightCircle, Database, Layers, Search, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Streamlining Urban Development | Jorge Oropeza",
  description:
    "Case study on redesigning urban development processes for faster, more accessible digital public services.",
};

export default function DigitalizingProcedures() {
  return (
    <main className="min-h-screen bg-white font-sans text-text-primary">
      {/* Hero Section */}
      <section
        className="pt-40 pb-20 px-6 md:px-20 lg:px-32 flex flex-col items-center text-center max-w-7xl mx-auto">
        <span className="text-accent font-bold text-sm tracking-widest uppercase mb-4">Case Study</span>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Streamlining Urban Development Processes
        </h1>
        <p className="text-text-secondary text-lg md:text-xl max-w-3xl mb-10 leading-relaxed font-light">
          A comprehensive UX overhaul of Mexico&apos;s civil registration services, elevating digital accessibility and generating a frictionless user experience across multiple platforms.
        </p>

        {/* Role/Impact Badge */}
        <div className="bg-[#FFF3E0] px-6 py-4 rounded-xl flex items-center gap-4 mb-16 shadow-sm border border-accent/5">
          <div className="flex flex-col items-start">
            <span className="text-accent font-bold text-[10px] uppercase tracking-wider">Impact</span>
            <span className="text-sm font-semibold text-text-primary">Reduced Processing time by 65% for the analyzing phase</span>
          </div>
        </div>

        {/* Mockup Container */}
        <div
          className="relative w-full max-w-5xl aspect-[1000/500] bg-[#F5F6F7] rounded-3xl overflow-hidden shadow-2xl group"
        >
          <Image
            src="https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/herosectionDPPW.png"
            alt="Streamlining Urban Development Dashboard Mockup"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          {/* Success Sticker */}
          <div className="absolute bottom-6 left-6 md:left-10 bg-accent text-white p-4 rounded-xl shadow-lg flex flex-col items-center z-10">
            <span className="font-bold text-xl md:text-2xl">100%</span>
            <span className="font-bold text-[8px] md:text-[10px] uppercase tracking-tighter">Paperless Migration</span>
          </div>
        </div>
      </section>

      {/* Executive Summary / Value Prop */}
      <section
        className="py-24 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-20 lg:gap-32">
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">Value Proposition</h2>
          <p className="text-text-secondary text-lg leading-relaxed font-light">
            Our objective was to demystify complex municipal procedures. We delivered a streamlined digital ecosystem that provides citizens with fast, intuitive service while bridging the communication gap with local government.
          </p>
        </div>

        <div className="bg-[#F8F9FA] p-8 rounded-2xl flex flex-col gap-6 h-fit border border-gray-100">
          <span className="text-accent font-bold text-sm uppercase tracking-widest leading-none">My Role</span>
          <ul className="flex flex-col gap-4">
            {[
              "Lead UX/UI Designer",
              "User Research",
              "Information Architect",
              "Design System Manager"
            ].map((role) => (
              <li key={role} className="text-sm font-medium flex items-center gap-3 text-text-primary leading-none">
                <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {role}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Discovery Phase: Research Insights */}
      <section
        className="py-24 bg-[#F8F9FA] px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center space-y-4">
            <span className="text-accent font-bold text-sm tracking-widest uppercase italic">01. Discovery Phase</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-primary">Strategic Discovery & User Insights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Persona Card 1 */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6 border border-gray-50">
              <div className="w-14 h-14 rounded-full bg-[#FFF3E0] flex items-center justify-center">
                <Users className="text-accent w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Qualitative Research</h3>
              <p className="text-text-secondary leading-relaxed font-light">
                Conducted 24+ deep-dive interviews with government officials and ran surveys to identify friction points in the current document verification process.
              </p>
            </div>
            {/* Persona Card 2 */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6 border border-gray-50">
              <div className="w-14 h-14 rounded-full bg-[#FFF3E0] flex items-center justify-center">
                <Zap className="text-accent w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Pain-Points Identified</h3>
              <p className="text-text-secondary leading-relaxed font-light">
                Fragmented data sources, lack of real time status updates and complex legal jargon were the primary barriers to user efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IA & Measurements */}
      <section
        aria-labelledby="system-architecture-title"
        className="py-24 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        <div className="flex flex-col gap-8 flex-1">
          <div className="space-y-4">
            <span className="text-accent font-bold text-sm tracking-widest uppercase italic">02. Definition Phase</span>
            <h2 id="system-architecture-title" className="font-serif text-3xl md:text-5xl font-bold text-text-primary leading-tight">System Architecture & Impact Metrics</h2>
          </div>
          <p className="text-text-secondary text-lg leading-relaxed font-light max-w-xl">
            We mapped out a complex ecosystem involving full system mapping and service data architecture to ensure scalability.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3 text-text-primary font-medium">
              <ArrowRightCircle className="w-5 h-5 text-accent" />
              Complete System Mapping
            </li>
            <li className="flex items-center gap-3 text-text-primary font-medium">
              <ArrowRightCircle className="w-5 h-5 text-accent" />
              Service Data Architecture
            </li>
          </ul>
        </div>

        <dl className="grid grid-cols-2 gap-4 md:gap-6 w-full lg:w-[500px]">
          {[
            { value: "12", label: "MILLION", sub: "Procedures" },
            { value: "450+", label: "ENTITIES", sub: "Connected" },
            { value: "2", label: "BILLION DATA", sub: "Points" },
            { value: "0.4s", label: "AVG LOAD", sub: "Time" }
          ].map((stat, i) => (
            <div key={i} className="bg-[#FDF2E9] p-8 rounded-3xl text-center flex flex-col gap-2 hover:bg-accent hover:text-white transition-all group cursor-default">
              <dd className="text-accent group-hover:text-white text-4xl md:text-5xl font-bold transition-colors">{stat.value}</dd>
              <dt className="flex flex-col">
                <span className="text-accent group-hover:text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors">{stat.label}</span>
                <span className="text-text-secondary group-hover:text-white/60 text-[10px] font-medium transition-colors uppercase">{stat.sub}</span>
              </dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Process Section */}
      <section
        aria-labelledby="process-implementation-title"
        className="py-24 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto flex flex-col gap-12">
        <h2 id="process-implementation-title" className="text-accent font-bold text-sm tracking-widest uppercase text-center italic">Process & Implementation</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Search className="w-6 h-6" />, title: "UX RESEARCH", desc: "In-depth analysis of existing government workflows and identifying pain points in manual procedures." },
            { icon: <PencilRuler className="w-6 h-6" />, title: "UI DESIGN", desc: "Creating a clean, accessible interface that works across all devices and user skill levels." },
            { icon: <CheckCircle className="w-6 h-6" />, title: "TESTING", desc: "Rigorous usability testing with both citizens and government personnel to ensure efficiency." }
          ].map((item, idx) => (
            <li key={idx} className="list-none border-2 border-accent/10 p-10 rounded-3xl flex flex-col gap-6 hover:border-accent/40 hover:bg-accent/[0.02] transition-all duration-300">
              <article>
                <div className="text-accent">{item.icon}</div>
                <h3 className="text-accent font-bold text-2xl tracking-tight">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed text-base font-light">{item.desc}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* Community Development Section */}
      <section
        aria-labelledby="operations-analysis-title"
        className="py-24 bg-white px-6 md:px-20 lg:px-32 max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-accent font-bold text-sm tracking-widest uppercase italic">UX & ARCHITECTURE ANALYSIS</span>
            <h2 id="operations-analysis-title" className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">Empowering Internal Operations</h2>
            <p className="text-text-secondary text-lg leading-relaxed font-light">
              The development of internal tools for government officials to efficiently manage citizen data and requests.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: <ArrowRightCircle className="w-6 h-6" />, text: "Streamline workflow" },
            { icon: <Database className="w-6 h-6" />, text: "Data Integrity" },
            { icon: <Layers className="w-6 h-6" />, text: "Scale Efficiency" }
          ].map((item, idx) => (
            <li key={idx} className="list-none flex items-center gap-4 py-4">
              <div className="text-accent shrink-0">{item.icon}</div>
              <span className="text-text-primary font-bold text-lg">{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Feature Deep-Dive 1 */}
      <section
        className="py-24 bg-[#FDF2E9] px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="flex flex-col gap-8 flex-1">
            <span className="text-accent font-bold text-sm tracking-widest uppercase italic font-bold">SPECIFIC FEATURE CASE</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">Dynamic Form for Every Procedure</h2>
            <p className="text-text-secondary text-lg leading-relaxed font-light">
              A specialized tool for reviewing descriptive memories, ensuring that all legal and technical requirements are met before final approval.
            </p>
          </div>
          <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 bg-white">
            <Image
              src="https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/AB6AXU~1.PNG"
              alt="Revision de Memoria Descriptiva Feature Mockup"
              width={800}
              height={600}
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive 2 */}
      <section
        className="py-24 px-6 md:px-20 lg:px-32 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
            <Image
              src="https://5fjjbtb15mr59rsn.public.blob.vercel-storage.com/4taimagen.png"
              alt="Panel de Atencion Feature Mockup"
              width={800}
              height={600}
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="flex flex-col gap-8 flex-1">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">Panel de Atencion</h2>
            <p className="text-text-secondary text-lg leading-relaxed font-light">
              The central hub for government personnel to track citizen requests, manage appointments, and provide real-time updates.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Real-time tracking of procedure status",
                "Appointment management",
                "Direct communication channels"
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-text-secondary text-base">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section
        aria-labelledby="lessons-learned-title"
        className="py-24 bg-[#F8F9FA] px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <h2 id="lessons-learned-title" className="font-serif text-4xl md:text-5xl font-bold text-text-primary text-center">What I Learned From This?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Award className="w-8 h-8" />, title: "Industry Standards", desc: "Understanding the balance between legacy government requirements and modern digital standards." },
              { icon: <Users className="w-8 h-8" />, title: "User-Centric", desc: "The importance of accessibility for a diverse user base with varying levels of digital literacy." },
              { icon: <PencilRuler className="w-8 h-8" />, title: "Methodology", desc: "Refining a scalable design system that can be adapted for multiple government entities." }
            ].map((item, i) => (
              <li key={i} className="list-none">
                <article className="flex flex-col items-center text-center gap-6 group">
                  <div className="w-20 h-20 rounded-3xl bg-white shadow-sm flex items-center justify-center group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                    <div className="text-accent">{item.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">{item.title}</h3>
                  <p className="text-text-secondary text-sm font-light leading-relaxed max-w-xs">{item.desc}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-40 px-6 text-center max-w-5xl mx-auto flex flex-col items-center gap-12">
        <div className="space-y-6">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-accent tracking-tighter uppercase leading-none">Liked this project?</h2>
          <p className="text-text-secondary text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            I am specifically looking for user research and qualitative analyst jobs, apply to improve my knowledge in your team!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <Link href="/#contact" className="px-12 py-5 bg-accent text-white rounded-2xl font-bold hover:brightness-110 active:scale-95 transition-all shadow-2xl shadow-accent/30 text-lg">
            Let&apos;s talk
          </Link>
          <Link href="/#projects" className="px-12 py-5 border-2 border-accent/20 text-accent rounded-2xl font-bold hover:bg-accent/5 active:scale-95 transition-all text-lg">
            My next project
          </Link>
        </div>
      </section>
    </main>
  );
}


