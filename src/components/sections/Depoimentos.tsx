"use client";

import { useEffect, useRef } from "react";

const depoimentos = [
  {
    nome: "Rafael Souza",
    cidade: "São Paulo, SP",
    texto:
      "Fui sem saber nada de fade. Voltei fazendo skin fade limpo. O Victor é direto, sem enrolar. Em dois dias aprendi mais do que em meses tentando sozinho.",
    resultado: "Abriu sua própria barbearia 3 meses depois",
    iniciais: "RS",
  },
  {
    nome: "Diego Martins",
    cidade: "Curitiba, PR",
    texto:
      "Eu já cortava cabelo, mas meu acabamento era horrível. O workshop mudou minha forma de segurar a máquina. Simples assim. Hoje cobro o dobro do que cobrava antes.",
    resultado: "Dobrou o valor por corte",
    iniciais: "DM",
  },
  {
    nome: "Thiago Alves",
    cidade: "Belo Horizonte, MG",
    texto:
      "Melhor investimento da minha vida profissional. A parte de atendimento ao cliente abriu minha cabeça. Fidelização não é papo — é técnica. Aprendi isso na Kingsman.",
    resultado: "Agenda lotada com lista de espera",
    iniciais: "TA",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M7 1L8.5 5H13L9.5 7.5L11 11.5L7 9L3 11.5L4.5 7.5L1 5H5.5L7 1Z"
            fill="var(--accent-primary)"
          />
        </svg>
      ))}
    </div>
  );
}

export function Depoimentos() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReduced || isMobile) return;

    import("gsap").then(async (mod) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      mod.gsap.registerPlugin(ScrollTrigger);
      mod.gsap.from(sectionRef.current?.querySelectorAll(".depo-card") ?? [], {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="section-py bg-surface-page">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="text-xs font-inter font-medium tracking-widest uppercase text-accent-primary mb-3 block">
            Depoimentos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-text-primary">
            Quem fez, conta
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((d) => (
            <div
              key={d.nome}
              className="depo-card bg-surface-card rounded-card p-7 shadow-card hover:shadow-hover transition-all duration-300 flex flex-col"
              style={{ border: "1px solid var(--border-subtle)" }}
            >
              <StarRating />

              <blockquote className="font-inter text-text-secondary text-sm leading-relaxed flex-1 mb-6">
                "{d.texto}"
              </blockquote>

              {/* Resultado badge */}
              <div
                className="text-xs font-inter font-medium px-3 py-1.5 rounded-badge mb-5 inline-block self-start"
                style={{
                  background: "var(--accent-subtle)",
                  color: "var(--accent-primary)",
                  border: "1px solid var(--border-accent)",
                }}
              >
                ↑ {d.resultado}
              </div>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-5 border-t border-border-subtle">
                <div
                  className="w-10 h-10 rounded-avatar flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "var(--surface-elevated)",
                    border: "1px solid var(--border-default)",
                  }}
                >
                  <span
                    className="font-display text-xs"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    {d.iniciais}
                  </span>
                </div>
                <div>
                  <div className="font-inter text-text-primary text-sm font-medium">
                    {d.nome}
                  </div>
                  <div className="font-inter text-text-muted text-xs">{d.cidade}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
