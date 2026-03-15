"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for transparency/blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-md border-b border-gray-200 py-3" 
        : "bg-white border-b border-transparent py-5"
    }`}>
      <div className="container-custom flex justify-between items-center">
        <Link 
          href="/" 
          className="font-serif font-bold text-xl tracking-[0.15em] text-accent hover:opacity-80 transition-opacity"
        >
          JORGE OROPEZA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="font-sans text-sm font-bold text-text-primary hover:text-accent transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link 
            href="/#contact" 
            className="px-6 py-2.5 bg-accent text-white rounded-lg text-sm font-bold hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-accent/10"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-text-primary p-2 hover:bg-bg rounded-xl transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 flex flex-col items-center py-10 gap-8 animate-in fade-in slide-in-from-top-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="font-sans text-lg font-bold text-text-primary hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/#contact" 
            onClick={() => setIsOpen(false)} 
            className="px-10 py-4 bg-accent text-white rounded-xl text-lg font-bold shadow-lg shadow-accent/20"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
