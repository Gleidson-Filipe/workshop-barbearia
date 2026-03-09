"use client";

import { useEffect, useRef } from "react";
import { BarberChairs } from "@/components/svgs/BarberChairs";

const bonus = [
  "Apostila digital com todas as técnicas",
  "Acesso ao grupo exclusivo de alunos Kingsman",
  "1 sessão de mentoria online pós-workshop",
  "Desconto em ferramentas parceiras",
];

export function Preco() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    import("gsap").then(async (mod) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      mod.gsap.registerPlugin(ScrollTrigger);
      mod.gsap.from(sectionRef.current?.querySelectorAll(".preco-reveal") ?? [], {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    });
  }, []);

  return (
    <section id="vagas" ref={sectionRef} className="section-py bg-surface-section">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="text-xs font-inter font-medium tracking-widest uppercase text-accent-primary mb-3 block">
            Investimento
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-text-primary">
            Vagas limitadas
          </h2>
        </div>

        {/* Cadeiras — urgência visual */}
        <div className="preco-reveal mb-10">
          <BarberChairs total={15} filled={9} />
          <p className="text-center text-text-muted font-inter text-sm mt-4">
            <span style={{ color: "var(--status-error)" }}>9 de 15 vagas preenchidas</span>
            {" "}— garanta a sua antes que feche
          </p>
        </div>

        {/* Card de preço */}
        <div className="max-w-lg mx-auto">
          <div
            className="preco-reveal bg-surface-card rounded-card shadow-float overflow-hidden"
            style={{
              border: "1px solid var(--border-accent)",
            }}
          >
            {/* Topo com badge */}
            <div
              className="px-8 py-4 flex items-center justify-between"
              style={{ background: "var(--accent-subtle)", borderBottom: "1px solid var(--border-accent)" }}
            >
              <span className="font-inter text-accent-primary text-xs font-medium tracking-widest uppercase">
                Workshop Presencial
              </span>
              <span
                className="text-xs font-inter font-medium px-2 py-1 rounded-badge"
                style={{
                  background: "var(--status-error)",
                  color: "white",
                }}
              >
                Últimas vagas
              </span>
            </div>

            <div className="px-8 py-8">
              {/* Preço */}
              <div className="mb-2 flex items-end gap-2">
                <span className="font-inter text-text-muted text-sm line-through">R$ 897</span>
                <span className="font-inter text-text-muted text-xs">preço original</span>
              </div>
              <div className="flex items-end gap-3 mb-1">
                <span
                  className="font-display"
                  style={{ fontSize: "3.5rem", lineHeight: 1, color: "var(--accent-primary)" }}
                >
                  R$ 597
                </span>
                <span className="font-inter text-text-secondary text-sm mb-2">à vista</span>
              </div>
              <p className="font-inter text-text-muted text-sm mb-8">
                ou 3x de R$ 199 sem juros no cartão
              </p>

              {/* Bônus */}
              <div
                className="p-5 rounded-card mb-8"
                style={{ background: "var(--surface-elevated)", border: "1px solid var(--border-subtle)" }}
              >
                <p className="font-inter text-text-secondary text-xs tracking-widest uppercase mb-4">
                  Bônus inclusos
                </p>
                <ul className="space-y-2.5">
                  {bonus.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6" stroke="var(--status-success)" strokeWidth="1" fill="none" />
                        <path d="M4.5 7L6.5 9L9.5 5" stroke="var(--status-success)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-inter text-text-secondary text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contato"
                className="block w-full text-center bg-accent-primary hover:bg-accent-hover text-white font-inter font-semibold text-base py-4 rounded-button shadow-button hover:shadow-hover transition-all duration-200 tracking-wide"
              >
                Reservar vaga agora
              </a>
              <p className="text-center text-text-muted font-inter text-xs mt-4">
                Pagamento 100% seguro · Dados protegidos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
