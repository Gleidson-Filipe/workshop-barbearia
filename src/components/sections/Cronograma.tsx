"use client";

import { useEffect, useRef } from "react";
import { BarberPole } from "@/components/svgs/BarberPole";

const dias = [
  {
    dia: "Dia 01",
    subtitulo: "Teoria + Demonstração",
    descricao: "Victor apresenta cada técnica com demonstração ao vivo. Você observa, faz perguntas e entende o porquê de cada movimento antes de executar.",
    itens: [
      "Apresentação dos participantes e diagnóstico de nível",
      "Fundamentos de máquina e guarda",
      "Técnica de fade: skin, low, mid e high",
      "Demonstração de design de barba",
      "Acabamento com navalha ao vivo",
      "Q&A e revisão do dia",
    ],
    horario: "08h – 18h",
  },
  {
    dia: "Dia 02",
    subtitulo: "Prática Guiada",
    descricao: "Tesoura e máquina na mão. Victor acompanha cada aluno individualmente durante as práticas com modelos reais. Feedback em tempo real.",
    itens: [
      "Revisão rápida do Dia 01",
      "Prática de fade com modelo real",
      "Correções individuais com Victor",
      "Sessão de barba e acabamento",
      "Sessão de fotos do trabalho finalizado",
      "Entrega de certificados e encerramento",
    ],
    horario: "08h – 17h",
  },
];

export function Cronograma() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    import("gsap").then(async (mod) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      mod.gsap.registerPlugin(ScrollTrigger);
      mod.gsap.from(sectionRef.current?.querySelectorAll(".dia-card") ?? [], {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="section-py bg-surface-section">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="text-xs font-inter font-medium tracking-widest uppercase text-accent-primary mb-3 block">
            Programação
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-text-primary">
            O que acontece em cada dia
          </h2>
        </div>

        {/* Timeline */}
        <div className="flex flex-col md:flex-row items-start gap-0 max-w-4xl mx-auto relative">
          {/* Barber pole central (desktop) */}
          <div className="hidden md:flex flex-col items-center justify-center self-stretch mx-8 mt-16 gap-0">
            <BarberPole height={420} />
          </div>

          {/* Cards dos dias */}
          {dias.map((d, idx) => (
            <div
              key={d.dia}
              className={`dia-card flex-1 ${idx === 1 ? "md:mt-12" : ""}`}
            >
              <div
                className="bg-surface-card rounded-card p-8 shadow-card h-full"
                style={{
                  border: "1px solid var(--border-subtle)",
                  borderLeft: "2px solid var(--accent-primary)",
                }}
              >
                {/* Node do timeline */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "var(--accent-subtle)",
                      border: "1.5px solid var(--accent-primary)",
                    }}
                  >
                    <span
                      className="font-display text-xs"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      {idx + 1}
                    </span>
                  </div>
                  <div>
                    <div
                      className="font-display text-xl"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      {d.dia}
                    </div>
                    <div className="text-text-secondary font-inter text-sm">{d.horario}</div>
                  </div>
                </div>

                <h3 className="font-heading text-xl text-text-primary mb-2">
                  {d.subtitulo}
                </h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed mb-6">
                  {d.descricao}
                </p>

                <ul className="space-y-2.5">
                  {d.itens.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: "var(--accent-primary)" }}
                      />
                      <span className="font-inter text-text-secondary text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
