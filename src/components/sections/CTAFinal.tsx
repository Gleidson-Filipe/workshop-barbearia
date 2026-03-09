"use client";

import { useEffect, useRef } from "react";
import { KingsmanCrown } from "@/components/svgs/KingsmanCrown";

export function CTAFinal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    import("gsap").then(async (mod) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      mod.gsap.registerPlugin(ScrollTrigger);
      mod.gsap.from(sectionRef.current?.querySelectorAll(".cta-reveal") ?? [], {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-py relative overflow-hidden"
      style={{ background: "var(--surface-elevated)" }}
    >
      {/* Fundo: crosshatch mais visível */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "var(--bg-crosshatch)",
          opacity: 0.4,
        }}
      />

      {/* Gradiente de borda em accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--accent-primary), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--accent-primary), transparent)" }}
      />

      <div className="container-max relative z-10 text-center">
        <div className="cta-reveal flex justify-center mb-8">
          <KingsmanCrown size={56} opacity={0.7} />
        </div>

        <h2
          className="cta-reveal font-display leading-none mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--text-primary)" }}
        >
          A TESOURA NÃO ESPERA.
          <br />
          <span style={{ color: "var(--accent-primary)" }}>VOCÊ ESPERA?</span>
        </h2>

        <p className="cta-reveal font-heading text-xl text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed italic">
          Poucas vagas. Uma decisão que muda o rumo da sua carreira.
          Ficou com alguma dúvida antes de confirmar?
        </p>

        <div className="cta-reveal flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20no%20Workshop%20Kingsman%20Barbearia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-accent-primary hover:bg-accent-hover text-white font-inter font-semibold text-base px-10 py-4 rounded-button shadow-button hover:shadow-hover transition-all duration-200 tracking-wide group"
          >
            {/* WhatsApp icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar com a equipe no WhatsApp
          </a>
        </div>

        <p className="cta-reveal font-inter text-text-muted text-xs mt-6 tracking-wide">
          Kingsman Barbearia · São Paulo
        </p>
      </div>
    </section>
  );
}
