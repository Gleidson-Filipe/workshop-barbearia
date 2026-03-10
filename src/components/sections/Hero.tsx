"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { HeroTools } from "@/components/svgs/HeroTools";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReduced || isMobile) return;

    let gsap: typeof import("gsap").gsap;

    import("gsap").then((mod) => {
      gsap = mod.gsap;

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(badgeRef.current, { y: -20, opacity: 0, duration: 0.6 })
        .from(headlineRef.current, { y: 60, opacity: 0, duration: 1 }, "-=0.3")
        .from(subRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.5");
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-surface-page"
    >
      {/* Ferramentas wireframe no fundo */}
      <HeroTools />

      {/* Gradient overlay para profundidade */}
      <div className="absolute inset-0 bg-gradient-to-r from-surface-page via-surface-page/90 to-transparent pointer-events-none" />

      {/* Foto do instrutor — direita, máscara gradiente */}
      <div className="absolute right-0 top-0 h-full w-[45%] hidden lg:block pointer-events-none">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, var(--surface-page) 0%, transparent 40%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-10"
          style={{
            background:
              "linear-gradient(to top, var(--surface-page) 0%, transparent 100%)",
          }}
        />
        <Image
          src="/images/victor-hayes-workshop.png"
          alt="Victor Hayes — Instrutor Kingsman Barbearia"
          fill
          className="object-cover object-top"
          priority
          sizes="45vw"
        />
      </div>

      {/* Conteúdo principal */}
      <div className="container-max relative z-10 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge de data */}
          <div ref={badgeRef} className="inline-flex items-center gap-2 mb-8">
            <span
              className="text-xs font-inter font-medium tracking-widest uppercase px-3 py-1.5 rounded-badge"
              style={{
                background: "var(--accent-subtle)",
                color: "var(--accent-primary)",
                border: "1px solid var(--border-accent)",
              }}
            >
              13 e 14 de Junho de 2026
            </span>
            <span className="w-8 h-px bg-accent-primary opacity-40" />
            <span className="text-text-muted text-xs font-inter tracking-wide uppercase">
              Workshop Presencial
            </span>
          </div>

          {/* Headline principal — Anton */}
          <h1
            ref={headlineRef}
            className="font-display leading-none mb-6"
            style={{
              fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
              lineHeight: 0.92,
              color: "var(--text-primary)",
            }}
          >
            WORKSHOP
            <br />
            <span style={{ color: "var(--accent-primary)" }}>KINGSMAN</span>
            <br />
            BARBEARIA
          </h1>

          {/* Promessa */}
          <p
            ref={subRef}
            className="font-heading text-xl md:text-2xl text-text-secondary mb-10 leading-relaxed"
            style={{ maxWidth: "520px" }}
          >
            Dois dias para aprender o que levaria anos descobrindo sozinho.{" "}
            <span className="text-text-primary">Fade, acabamento e design de barba</span>{" "}
            com quem fez da navalha profissão.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#vagas"
              className="inline-flex items-center gap-2 bg-accent-primary hover:bg-accent-hover text-white font-inter font-semibold text-base px-8 py-4 rounded-button shadow-button hover:shadow-hover transition-all duration-200 tracking-wide group"
            >
              Garantir minha vaga
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  d="M3 8H13M9 4L13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#workshop"
              className="inline-flex items-center gap-2 border border-border-default hover:border-border-accent text-text-secondary hover:text-text-primary font-inter text-base px-8 py-4 rounded-button transition-all duration-200 tracking-wide"
            >
              Ver detalhes
            </a>
          </div>

          {/* Números de prova rápida */}
          <div className="flex items-center gap-8 mt-12 pt-12 border-t border-border-subtle">
            {[
              { value: "+200", label: "Profissionais formados" },
              { value: "15", label: "Anos de experiência" },
              { value: "2", label: "Dias de imersão" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-display text-3xl"
                  style={{ color: "var(--accent-primary)" }}
                >
                  {stat.value}
                </div>
                <div className="text-text-muted text-xs font-inter tracking-wide mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
