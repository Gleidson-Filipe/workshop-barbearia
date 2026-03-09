"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const perguntas = [
  {
    q: "Preciso levar material ou equipamento?",
    a: "Não. Todos os equipamentos necessários — máquinas, tesouras, navalhas, capas e produtos — serão fornecidos durante o workshop. Você só precisa aparecer com vontade de aprender.",
  },
  {
    q: "O workshop é para iniciantes?",
    a: "Sim. O conteúdo é estruturado para funcionar tanto para quem nunca cortou profissionalmente quanto para barbeiros com alguma experiência que querem aprimorar técnica específica. Victor adapta o feedback individualmente.",
  },
  {
    q: "Tem certificado no final?",
    a: "Sim. Todos os alunos que concluírem os dois dias recebem certificado de conclusão emitido pela Kingsman Barbearia ao final do segundo dia.",
  },
  {
    q: "Onde será realizado o workshop?",
    a: "O endereço completo é enviado por WhatsApp após a confirmação da vaga. O evento acontece em São Paulo.",
  },
  {
    q: "E se eu não puder comparecer em um dos dias?",
    a: "O workshop é estruturado para os dois dias completos — o conteúdo de cada dia é sequencial. Em caso de imprevisto, entre em contato antes do evento para verificar possibilidades.",
  },
  {
    q: "O valor pode ser parcelado?",
    a: "Sim. É possível parcelar em até 3x sem juros no cartão de crédito. Também aceitamos Pix para pagamento à vista.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-py bg-surface-page">
      <div className="container-max max-w-3xl">
        <div className="text-center mb-14">
          <span className="text-xs font-inter font-medium tracking-widest uppercase text-accent-primary mb-3 block">
            Dúvidas frequentes
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-text-primary">
            Antes de garantir sua vaga
          </h2>
        </div>

        <div className="space-y-2">
          {perguntas.map((p, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className="rounded-card overflow-hidden"
                style={{
                  border: `1px solid ${isOpen ? "var(--border-accent)" : "var(--border-subtle)"}`,
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-inter font-medium text-sm pr-4"
                    style={{ color: isOpen ? "var(--text-primary)" : "var(--text-secondary)" }}
                  >
                    {p.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-5 h-5 flex items-center justify-center"
                    style={{ color: isOpen ? "var(--accent-primary)" : "var(--text-muted)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="px-6 pb-5 border-l-2"
                        style={{ borderColor: "var(--accent-primary)" }}
                      >
                        <p className="font-inter text-text-secondary text-sm leading-relaxed">
                          {p.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
