"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const photos = [
  {
    src: "/images/cotidiano-1.png",
    alt: "Cotidiano da Kingsman Barbearia",
    label: "Ambiente profissional",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/cotidiano-2.png",
    alt: "Barbearia em ação",
    label: "Técnica em prática",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/victor-hayes.png",
    alt: "Victor Hayes",
    label: "Instrutor experiente",
    span: "col-span-1 row-span-1",
  },
];

export function ProvaVisual() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    import("gsap").then(async (mod) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      mod.gsap.registerPlugin(ScrollTrigger);

      mod.gsap.from(sectionRef.current?.querySelectorAll(".photo-card") ?? [], {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="section-py bg-surface-section"
    >
      <div className="container-max">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-xs font-inter font-medium tracking-widest uppercase text-accent-primary mb-3 block">
              Resultados reais
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-text-primary">
              O que você aprende,{" "}
              <em className="not-italic text-text-secondary">você executa</em>
            </h2>
          </div>
          <p className="text-text-secondary font-inter text-sm max-w-xs leading-relaxed">
            Imagens do cotidiano da Kingsman Barbearia — o mesmo ambiente onde o workshop acontece.
          </p>
        </div>

        {/* Grid de fotos */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[480px] md:h-[540px]">
          {photos.map((photo) => (
            <div
              key={photo.alt}
              className={`photo-card relative overflow-hidden rounded-card bg-surface-card ${photo.span} group`}
              style={{ border: "1px solid var(--border-subtle)" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay com label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-inter text-text-secondary tracking-wide">
                {photo.label}
              </span>
              {/* Borda accent no hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-card"
                style={{ boxShadow: "inset 0 0 0 1px var(--border-accent)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
