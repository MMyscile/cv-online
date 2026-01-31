"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#presentation", label: "Présentation" },
    { href: "#skills", label: "Compétences" },
    { href: "#formation", label: "Programme GCF" },
    { href: "#education", label: "Parcours" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-lg font-semibold text-[var(--cv-green-dark)]">
          MM
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-[var(--cv-green)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[var(--cv-green-dark)]"
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-gray-600 hover:text-[var(--cv-green)] transition-colors py-2 border-b border-gray-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
