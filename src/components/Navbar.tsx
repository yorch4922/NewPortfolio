"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

const NAV_LINKS = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Resume", href: "/jyresume" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuId = useId();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 1000 : 140,
    damping: reduceMotion ? 1000 : 28,
    mass: reduceMotion ? 1 : 0.2,
  });

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

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const menuContainer = mobileMenuRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = menuContainer
      ? Array.from(menuContainer.querySelectorAll<HTMLElement>(focusableSelector))
      : [];
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || focusableElements.length === 0) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav aria-label="Primary" className={`sticky top-0 z-50 transition-all duration-300 relative overflow-hidden ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-md border-b border-gray-200 py-3" 
        : "bg-white border-b border-transparent py-5"
    }`}>
      <div className="container-custom flex justify-between items-center">
        <Link 
          href="/" 
          aria-label="Go to homepage"
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
                <span aria-hidden="true" className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
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
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          id={mobileMenuId}
          aria-label="Mobile menu"
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

      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-accent/60 via-accent to-accent/60"
        style={{ scaleX: progressScale }}
      />
    </nav>
  );
}
