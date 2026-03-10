"use client";

import { useEffect, useRef } from "react";

const perfis = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z"
          stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    title: "Iniciantes na barbearia",
    desc: "Nunca pegou uma máquina profissionalmente ou está nos primeiros meses. O workshop te dá base técnica real, não teoria vaga.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="var(--accent-primary)" strokeWidth="1.5" fill="none" />
        <path d="M8 12 L11 15 L16 9" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Barbeiros que querem melhorar",
    desc: "Já corta, mas o fade não fecha como devia ou o acabamento ainda não tem a precisão que você quer. Dois dias resolvem isso.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="var(--accent-primary)" strokeWidth="1.5" fill="none" />
        <path d="M3 10 L21 10" stroke="var(--accent-primary)" strokeWidth="1.5" />
        <path d="M7 14 L10 14" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 14 L17 14" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Quem quer aumentar renda",
    desc: "Aprender barbearia é uma das rotas mais rápidas para renda extra ou renda principal. Com técnica, você cobra mais e atende melhor.",
  },
];

export function ParaQuemE() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReduced || isMobile) return;

    import("gsap").then(async (mod) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      mod.gsap.registerPlugin(ScrollTrigger);
      mod.gsap.from(sectionRef.current?.querySelectorAll(".perfil-card") ?? [], {
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
    <section id="para-quem" ref={sectionRef} className="section-py bg-surface-page">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="text-xs font-inter font-medium tracking-widest uppercase text-accent-primary mb-3 block">
            Público
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-text-primary">
            Este workshop é para você?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {perfis.map((p) => (
            <div
              key={p.title}
              className="perfil-card bg-surface-card rounded-card p-8 shadow-card hover:shadow-hover transition-all duration-300 text-center group"
              style={{ border: "1px solid var(--border-subtle)" }}
            >
              <div className="flex justify-center mb-5">
                <div
                  className="w-12 h-12 rounded-card flex items-center justify-center"
                  style={{ background: "var(--accent-subtle)" }}
                >
                  {p.icon}
                </div>
              </div>
              <h3 className="font-heading text-lg text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-200">
                {p.title}
              </h3>
              <p className="font-inter text-text-secondary text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Nota de exclusão */}
        <p className="text-center text-text-muted font-inter text-sm mt-10">
          Não é necessário ter equipamento próprio.{" "}
          <span className="text-text-secondary">Tudo será fornecido no dia.</span>
        </p>
      </div>
    </section>
  );
}
