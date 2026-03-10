"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { KingsmanCrown } from "@/components/svgs/KingsmanCrown";

const credenciais = [
  { valor: "15", label: "Anos de tesoura" },
  { valor: "2019", label: "Fundou a Kingsman" },
  { valor: "+200", label: "Profissionais formados" },
  { valor: "32", label: "Anos de idade" },
];

export function Instrutor() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReduced || isMobile) return;

    import("gsap").then(async (mod) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      mod.gsap.registerPlugin(ScrollTrigger);
      mod.gsap.from(sectionRef.current?.querySelectorAll(".reveal-inst") ?? [], {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    });
  }, []);

  return (
    <section id="instrutor" ref={sectionRef} className="section-py bg-surface-page">
      <div className="container-max">
        <div className="text-center mb-14 reveal-inst">
          <span className="text-xs font-inter font-medium tracking-widest uppercase text-accent-primary mb-3 block">
            Quem vai te ensinar
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-text-primary">
            Aprenda com quem construiu do zero
          </h2>
        </div>

        <div
          className="reveal-inst rounded-card overflow-hidden"
          style={{ border: "1px solid var(--border-subtle)" }}
        >
          <div className="grid md:grid-cols-5">
            {/* Foto — 2 colunas */}
            <div className="md:col-span-2 relative min-h-[400px] md:min-h-full">
              {/* Crosshatch sutil no fundo da foto */}
              <div
                className="absolute inset-0 z-10 opacity-60"
                style={{
                  background:
                    "linear-gradient(to right, transparent 60%, var(--surface-card) 100%)",
                }}
              />
              <Image
                src="/images/victor-hayes.png"
                alt="Victor Hayes — Fundador e Instrutor da Kingsman Barbearia"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Bio — 3 colunas */}
            <div
              className="md:col-span-3 bg-surface-card p-8 md:p-12 relative"
              style={{
                backgroundImage: "var(--bg-crosshatch)",
                backgroundRepeat: "repeat",
              }}
            >
              {/* Coroa Kingsman */}
              <div className="mb-6">
                <KingsmanCrown size={44} opacity={0.9} />
              </div>

              <div className="reveal-inst">
                <h3
                  className="font-display text-4xl mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  VICTOR HAYES
                </h3>
                <p className="font-inter text-accent-primary text-sm tracking-widest uppercase mb-6">
                  Fundador · Kingsman Barbearia
                </p>
              </div>

              <div className="reveal-inst space-y-4 mb-8">
                <p className="font-inter text-text-secondary text-base leading-relaxed">
                  Aos 17 anos, Victor entrou como assistente na barbearia da esquina do seu bairro — varria o chão, dobrava toalhas e ficava horas observando cada corte como se fosse uma aula. Aos 22, com uma tesoura comprada a prazo e um espelho pendurado na parede do quarto, começou a atender os amigos. As recomendações viraram fila. A fila, virou negócio.
                </p>
                <p className="font-inter text-text-secondary text-base leading-relaxed">
                  Em 2019, abriu a <span className="text-text-primary">Kingsman Barbearia</span> — o nome reflete o que acredita: todo homem que sai da cadeira deve sair se sentindo como um rei. O método é direto: menos teoria, mais mão na massa.
                </p>
              </div>

              {/* Citação */}
              <div
                className="reveal-inst flex gap-4 mb-10 p-4 rounded-card"
                style={{ background: "var(--accent-subtle)", border: "1px solid var(--border-accent)" }}
              >
                <div
                  className="w-0.5 flex-shrink-0 rounded-full"
                  style={{ background: "var(--accent-primary)" }}
                />
                <blockquote className="font-heading italic text-text-primary text-base leading-snug">
                  "Aos 17, eu varria barbearia dos outros. Aos 27, abri a minha. O que aprendi no meio disso é o que vou ensinar em dois dias — sem enrolação."
                </blockquote>
              </div>

              {/* Credenciais */}
              <div className="reveal-inst grid grid-cols-4 gap-4 pt-8 border-t border-border-subtle">
                {credenciais.map((c) => (
                  <div key={c.label} className="text-center">
                    <div
                      className="font-display text-2xl mb-0.5"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      {c.valor}
                    </div>
                    <div className="text-text-muted font-inter text-xs leading-tight">
                      {c.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
