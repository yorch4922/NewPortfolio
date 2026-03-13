"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container-custom py-4 flex justify-between items-center">
        <Link href="/" className="font-serif font-bold text-lg tracking-[0.1em] text-accent">
          JORGE OROPEZA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#about" className="font-sans text-sm font-semibold text-text-primary hover:text-accent transition-colors">About</Link>
          <Link href="#experience" className="font-sans text-sm font-semibold text-text-primary hover:text-accent transition-colors">Experience</Link>
          <Link href="#projects" className="font-sans text-sm font-semibold text-text-primary hover:text-accent transition-colors">Projects</Link>
          <Link href="#contact" className="px-5 py-2 bg-accent text-white rounded text-sm font-bold hover:brightness-110 transition-all">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-text-primary p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 flex flex-col items-center py-6 gap-4 animate-in fade-in slide-in-from-top-4">
          <Link href="#about" onClick={() => setIsOpen(false)} className="font-sans text-sm font-semibold text-text-primary">About</Link>
          <Link href="#experience" onClick={() => setIsOpen(false)} className="font-sans text-sm font-semibold text-text-primary">Experience</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)} className="font-sans text-sm font-semibold text-text-primary">Projects</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="px-5 py-2 bg-accent text-white rounded text-sm font-bold">Contact</Link>
        </div>
      )}
    </nav>
  );
}
