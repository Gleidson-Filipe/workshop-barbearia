"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "O Workshop", href: "#workshop" },
  { label: "Técnicas", href: "#tecnicas" },
  { label: "Instrutor", href: "#instrutor" },
  { label: "Vagas", href: "#vagas" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Dark navbar overlay — fades IN on scroll */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: scrolled ? 1 : 0,
          transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          background: "var(--surface-nav)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
          boxShadow: scrolled ? "var(--shadow-float)" : "none",
        }}
      />

      {/* Glass lens bar — right 52%, fades OUT on scroll */}
      <div
        className="absolute top-0 right-0 h-full pointer-events-none overflow-hidden"
        style={{
          width: "52%",
          opacity: scrolled ? 0 : 1,
          transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          backdropFilter: "blur(6px) brightness(1.14) saturate(1.3)",
          WebkitBackdropFilter: "blur(6px) brightness(1.14) saturate(1.3)",
          background: "linear-gradient(to right, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.04) 20%, rgba(255,255,255,0.06) 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 16%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 16%)",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      />

      <nav className="container-max flex items-center justify-between h-16 md:h-20 relative">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <Image
            src="/images/logo-transparente.png"
            alt="Kingsman Barbearia"
            width={40}
            height={40}
            className="object-contain transition-opacity duration-200 group-hover:opacity-80"
            priority
          />
          <span
            className="font-display text-lg text-text-primary tracking-widest hidden sm:block"
            style={{ fontSize: "1.1rem", letterSpacing: "0.18em" }}
          >
            KINGSMAN
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text-secondary hover:text-text-primary font-inter text-sm tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#vagas"
          className="relative z-10 bg-accent-primary hover:bg-accent-hover text-white font-inter font-medium text-sm px-5 py-2.5 rounded-button shadow-button hover:shadow-hover transition-all duration-200 tracking-wide whitespace-nowrap"
        >
          Garantir Vaga
        </a>
      </nav>
    </header>
  );
}
