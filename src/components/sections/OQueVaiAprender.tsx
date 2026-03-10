"use client";

import { useEffect, useRef } from "react";

const tecnicas = [
  {
    title: "Fade & Degradê",
    desc: "Do skin fade ao drop fade, aprenda a executar transições perfeitas em qualquer tipo de cabelo. Técnica de guarda e ângulo de máquina.",
    svg: (
      // Perfil de cabeça com linhas de fade
      <svg width="100%" height="72" viewBox="0 0 120 72" fill="none" aria-hidden="true">
        <path d="M20 60 Q30 20 60 15 Q90 10 100 30 Q105 45 100 60" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none" />
        <ellipse cx="75" cy="52" rx="8" ry="10" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
        {[0,1,2,3,4,5,6,7].map((i) => (
          <line key={i} x1="20" y1={18 + i * 6} x2={95 - i * 6} y2={18 + i * 6}
            stroke="var(--accent-primary)" strokeWidth={1.6 - i * 0.16} opacity={0.15 - i * 0.01} />
        ))}
      </svg>
    ),
  },
  {
    title: "Acabamento & Linhas",
    desc: "A precisão que define um corte profissional. Aprenda a executar o outline com navalha e lâmina — limpo, simétrico, definitivo.",
    svg: (
      <svg width="100%" height="72" viewBox="0 0 120 72" fill="none" aria-hidden="true">
        <rect x="30" y="10" width="60" height="50" rx="4" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
        <path d="M30 48 Q60 62 90 48" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
        <circle cx="30" cy="48" r="2.5" fill="var(--accent-primary)" opacity="0.9" />
      </svg>
    ),
  },
  {
    title: "Design de Barba",
    desc: "Contorno, volume e simetria. Do bigode ao cavanhaque, técnicas para desenhar a barba ideal para cada formato de rosto.",
    svg: (
      <svg width="100%" height="72" viewBox="0 0 120 72" fill="none" aria-hidden="true">
        <path d="M60 8 Q85 8 90 28 Q92 40 85 52 Q75 68 60 70 Q45 68 35 52 Q28 40 30 28 Q35 8 60 8Z"
          stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
        <path d="M38 40 Q45 30 60 28 Q75 30 82 40" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M35 52 Q42 62 60 65 Q78 62 85 52" stroke="var(--accent-primary)" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
        <line x1="60" y1="28" x2="60" y2="70" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    title: "Técnica de Máquina",
    desc: "Domínio completo do clipper: velocidade, pressão, guarda certa para cada resultado. De 0.5mm ao número 4 sem erros.",
    svg: (
      <svg width="100%" height="72" viewBox="0 0 120 72" fill="none" aria-hidden="true">
        <rect x="25" y="10" width="70" height="40" rx="4" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" fill="none" />
        <rect x="25" y="50" width="70" height="12" rx="2" stroke="var(--accent-primary)" strokeWidth="1.2" fill="none" opacity="0.4" />
        {Array.from({length: 14}).map((_,i) => (
          <line key={i} x1={28 + i * 4.8} y1="50" x2={28 + i * 4.8} y2="62"
            stroke="var(--accent-primary)" strokeWidth="0.8" opacity="0.35" />
        ))}
        <rect x="35" y="18" width="50" height="6" rx="1" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" fill="none" />
        <rect x="35" y="28" width="50" height="6" rx="1" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" fill="none" />
      </svg>
    ),
  },
  {
    title: "Atendimento ao Cliente",
    desc: "O corte perfeito começa na conversa. Aprenda a ler o cliente, sugerir o estilo certo e criar fidelização que enche a agenda.",
    svg: (
      <svg width="100%" height="72" viewBox="0 0 120 72" fill="none" aria-hidden="true">
        <rect x="20" y="14" width="68" height="38" rx="6" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" fill="none" />
        <path d="M20 46 L10 58 L30 52" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        {/* Coroa Kingsman dentro do balão */}
        <path d="M54 28 L54 34 L66 34 L66 28" stroke="var(--accent-primary)" strokeWidth="1.2" fill="none" strokeLinejoin="round" opacity="0.6" />
        <path d="M54 28 L57 22 L60 26 L63 20 L66 28" stroke="var(--accent-primary)" strokeWidth="1.2" fill="none" strokeLinejoin="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Postura Profissional",
    desc: "Organização da bancada, higiene, controle do tempo por cliente, precificação e como construir uma reputação sólida na cidade.",
    svg: (
      <svg width="100%" height="72" viewBox="0 0 120 72" fill="none" aria-hidden="true">
        <circle cx="60" cy="36" r="28" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
        <line x1="60" y1="8" x2="60" y2="14" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="60" y1="58" x2="60" y2="64" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="32" y1="36" x2="38" y2="36" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="82" y1="36" x2="88" y2="36" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
        {/* Ponteiro em accent */}
        <line x1="60" y1="36" x2="78" y2="24" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        <circle cx="60" cy="36" r="3" fill="var(--accent-primary)" opacity="0.8" />
      </svg>
    ),
  },
];

export function OQueVaiAprender() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReduced || isMobile) return;

    import("gsap").then(async (mod) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      mod.gsap.registerPlugin(ScrollTrigger);
      mod.gsap.from(sectionRef.current?.querySelectorAll(".tecnica-card") ?? [], {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      });
    });
  }, []);

  return (
    <section id="tecnicas" ref={sectionRef} className="section-py bg-surface-section">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="text-xs font-inter font-medium tracking-widest uppercase text-accent-primary mb-3 block">
            Conteúdo do workshop
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-text-primary">
            O que você vai dominar
          </h2>
          <p className="font-inter text-text-secondary mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Técnicas selecionadas por Victor Hayes para quem quer sair do workshop com resultados visíveis no próximo corte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tecnicas.map((t) => (
            <div
              key={t.title}
              className="tecnica-card bg-surface-card rounded-card p-6 shadow-card hover:shadow-hover transition-all duration-300 group card-accent-border"
              style={{ border: "1px solid var(--border-subtle)" }}
            >
              {/* SVG conceitual */}
              <div className="mb-5 rounded-card overflow-hidden bg-surface-page/50 px-3 pt-3">
                {t.svg}
              </div>

              <h3 className="font-heading text-lg text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-200">
                {t.title}
              </h3>
              <p className="font-inter text-text-secondary text-sm leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
