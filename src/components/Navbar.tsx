"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

const NAV_LINKS = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuId = useId();

  // Handle scroll effect for transparency/blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

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
        <ul className="hidden md:flex gap-10 items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="list-none">
              <Link
                href={link.href}
                className="font-sans text-sm font-bold text-text-primary hover:text-accent transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
          <li className="list-none">
            <Link
              href="/#contact"
              className="px-6 py-2.5 bg-accent text-white rounded-lg text-sm font-bold hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-accent/10"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          type="button"
          className="md:hidden text-text-primary p-2 hover:bg-bg rounded-xl transition-colors"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls={mobileMenuId}
          aria-haspopup="menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id={mobileMenuId}
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-10 animate-in fade-in slide-in-from-top-4 shadow-xl"
        >
          <ul className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="list-none">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-lg font-bold text-text-primary hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="list-none">
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="px-10 py-4 bg-accent text-white rounded-xl text-lg font-bold shadow-lg shadow-accent/20"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
