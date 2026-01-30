"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-lg font-semibold text-[var(--cv-green-dark)]">
          MM
        </a>
        <div className="flex gap-8 text-sm">
          <a
            href="#presentation"
            className="text-gray-600 hover:text-[var(--cv-green)] transition-colors"
          >
            Présentation
          </a>
          <a
            href="#skills"
            className="text-gray-600 hover:text-[var(--cv-green)] transition-colors"
          >
            Compétences
          </a>
          <a
            href="#education"
            className="text-gray-600 hover:text-[var(--cv-green)] transition-colors"
          >
            Formations
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-[var(--cv-green)] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
