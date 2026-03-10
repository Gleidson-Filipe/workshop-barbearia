"use client";

import { useEffect, useRef } from "react";

const details = [
  { label: "Duração", value: "2 dias", sub: "Sábado e Domingo" },
  { label: "Data", value: "13–14 Jun", sub: "2026" },
  { label: "Nível", value: "Iniciante", sub: "ao intermediário" },
  { label: "Turma", value: "Limitada", sub: "poucas vagas" },
];

export function SobreWorkshop() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReduced || isMobile) return;

    import("gsap").then(async (mod) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      mod.gsap.registerPlugin(ScrollTrigger);

      mod.gsap.from(sectionRef.current?.querySelectorAll(".reveal-item") ?? [], {
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
    <section id="workshop" ref={sectionRef} className="section-py bg-surface-page">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
            <span className="reveal-item text-xs font-inter font-medium tracking-widest uppercase text-accent-primary mb-3 block">
              O treinamento
            </span>
            <h2 className="reveal-item font-heading text-3xl md:text-4xl text-text-primary mb-6 leading-tight">
              Dois dias que mudam a trajetória de um barbeiro
            </h2>
            <p className="reveal-item font-inter text-text-secondary text-base leading-relaxed mb-6">
              O Workshop Kingsman é uma imersão presencial intensiva para quem quer levar a barbearia a sério. Em vez de horas de teoria sem prática, o método Victor Hayes coloca tesoura e máquina na mão desde o primeiro dia.
            </p>
            <p className="reveal-item font-inter text-text-secondary text-base leading-relaxed mb-8">
              O foco é claro: técnica que gera resultado, atendimento que fideliza cliente, e a postura profissional que separa um barbeiro mediano de um referência na cidade.
            </p>
            <div className="reveal-item flex items-center gap-3">
              <div
                className="w-1 h-12 rounded-full"
                style={{ background: "var(--accent-primary)" }}
              />
              <blockquote className="font-heading text-lg italic text-text-primary leading-snug">
                "Você não precisa de anos para ser bom. Precisa de 48 horas certas."
                <footer className="text-text-muted font-inter text-xs not-italic mt-1 tracking-wide">
                  — Victor Hayes
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Cards de detalhes */}
          <div className="grid grid-cols-2 gap-4">
            {details.map((d) => (
              <div
                key={d.label}
                className="reveal-item bg-surface-card rounded-card p-6 shadow-card card-accent-border"
                style={{ border: "1px solid var(--border-subtle)" }}
              >
                <div className="text-text-muted font-inter text-xs tracking-widest uppercase mb-2">
                  {d.label}
                </div>
                <div
                  className="font-display text-3xl mb-1"
                  style={{ color: "var(--accent-primary)" }}
                >
                  {d.value}
                </div>
                <div className="text-text-secondary font-inter text-sm">{d.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
