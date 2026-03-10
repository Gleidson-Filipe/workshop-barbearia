"use client";

import { useEffect, useRef } from "react";

const r = (n: number) => Math.round(n * 10000) / 10000;

const beneficios = [
  {
    title: "Certificado",
    desc: "Certificado de conclusão emitido pela Kingsman Barbearia, reconhecido no mercado.",
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="36" height="44" rx="3" stroke="var(--status-success)" strokeWidth="1.5" fill="none" />
        <line x1="13" y1="16" x2="35" y2="16" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="13" y1="22" x2="35" y2="22" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <line x1="13" y1="28" x2="28" y2="28" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        {/* Stamp circular */}
        <circle cx="34" cy="38" r="8" stroke="var(--status-success)" strokeWidth="1.2" fill="none" />
        {/* Linhas radiais do stamp */}
        {Array.from({length:8}).map((_,i) => {
          const angle = (i * 45 * Math.PI) / 180;
          return (
            <line key={i}
              x1={r(34 + Math.cos(angle) * 5)}
              y1={r(38 + Math.sin(angle) * 5)}
              x2={r(34 + Math.cos(angle) * 7)}
              y2={r(38 + Math.sin(angle) * 7)}
              stroke="var(--status-success)" strokeWidth="0.8" opacity="0.6" />
          );
        })}
        <text x="34" y="40" textAnchor="middle" fontSize="4" fill="var(--status-success)" fontFamily="sans-serif" opacity="0.8">KS</text>
      </svg>
    ),
  },
  {
    title: "Networking",
    desc: "Conexão com outros profissionais da área e possibilidade de futuras colaborações.",
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="5" stroke="var(--accent-primary)" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="14" r="4" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" fill="none" />
        <circle cx="38" cy="14" r="4" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="34" r="4" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" fill="none" />
        <circle cx="38" cy="34" r="4" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" fill="none" />
        <line x1="14" y1="16" x2="20" y2="21" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="34" y1="16" x2="28" y2="21" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="14" y1="32" x2="20" y2="27" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="34" y1="32" x2="28" y2="27" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Técnicas Atualizadas",
    desc: "Aprenda as técnicas mais demandadas do mercado atual, não um método desatualizado.",
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="18" stroke="rgba(255,255,255,0.07)" strokeWidth="1.2" fill="none" />
        {/* Marcações do dial */}
        {Array.from({length:12}).map((_,i) => {
          const angle = ((i * 30 - 90) * Math.PI) / 180;
          const isMain = i % 3 === 0;
          return (
            <line key={i}
              x1={r(24 + Math.cos(angle) * (isMain ? 13 : 15))}
              y1={r(24 + Math.sin(angle) * (isMain ? 13 : 15))}
              x2={r(24 + Math.cos(angle) * 17)}
              y2={r(24 + Math.sin(angle) * 17)}
              stroke="rgba(255,255,255,0.15)" strokeWidth={isMain ? 1.2 : 0.7} />
          );
        })}
        {/* Ponteiro em accent apontando para "100%" */}
        <line x1="24" y1="24" x2="32" y2="10" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="2.5" fill="var(--accent-primary)" />
      </svg>
    ),
  },
  {
    title: "Prática Real",
    desc: "Você pratica em modelos reais, com feedback ao vivo do Victor. Sem bonecos de plástico.",
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* Mão geométrica segurando clipper */}
        <rect x="20" y="8" width="14" height="24" rx="3" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" fill="none" />
        <rect x="20" y="32" width="14" height="5" rx="1" stroke="var(--accent-primary)" strokeWidth="1.2" fill="none" opacity="0.6" />
        {Array.from({length:4}).map((_,i) => (
          <line key={i} x1={22 + i * 3} y1="32" x2={22 + i * 3} y2="37"
            stroke="var(--accent-primary)" strokeWidth="0.7" opacity="0.4" />
        ))}
        <line x1="16" y1="26" x2="20" y2="26" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="34" y1="26" x2="38" y2="26" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="16" y1="20" x2="20" y2="22" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <line x1="34" y1="20" x2="38" y2="18" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      </svg>
    ),
  },
];

export function Beneficios() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReduced || isMobile) return;

    import("gsap").then(async (mod) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      mod.gsap.registerPlugin(ScrollTrigger);
      mod.gsap.from(sectionRef.current?.querySelectorAll(".beneficio-card") ?? [], {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="section-py bg-surface-section">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="text-xs font-inter font-medium tracking-widest uppercase text-accent-primary mb-3 block">
            O que está incluso
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-text-primary">
            Tudo que você leva para casa
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {beneficios.map((b) => (
            <div
              key={b.title}
              className="beneficio-card bg-surface-card rounded-card p-6 shadow-card hover:shadow-hover transition-all duration-300 text-center group"
              style={{ border: "1px solid var(--border-subtle)" }}
            >
              <div className="flex justify-center mb-5">{b.svg}</div>
              <h3 className="font-heading text-base text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-200">
                {b.title}
              </h3>
              <p className="font-inter text-text-muted text-xs leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
