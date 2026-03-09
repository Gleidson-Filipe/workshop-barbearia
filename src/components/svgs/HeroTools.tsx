"use client";

export function HeroTools() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox="0 0 1200 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* ── Navalha reta (canto direito, 15° inclinada) ── */}
      <g transform="translate(760, 80) rotate(15)" opacity="0.055">
        {/* Cabo */}
        <rect x="0" y="0" width="18" height="90" rx="2" stroke="white" strokeWidth="1.2" fill="none" />
        {/* Furos do cabo */}
        <circle cx="9" cy="18" r="3" stroke="white" strokeWidth="1" fill="none" />
        <circle cx="9" cy="72" r="3" stroke="white" strokeWidth="1" fill="none" />
        {/* Pino de articulação */}
        <circle cx="9" cy="90" r="2" stroke="white" strokeWidth="1" fill="none" />
        {/* Lâmina */}
        <path d="M9 90 L3 240 L15 238 L9 90" stroke="white" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
        {/* Fio da lâmina */}
        <path d="M3 240 Q9 248 15 238" stroke="white" strokeWidth="1" fill="none" />
      </g>

      {/* ── Tesoura (centro-esquerda, -20° inclinada) ── */}
      <g transform="translate(200, 280) rotate(-20)" opacity="0.05">
        {/* Anel esquerdo */}
        <ellipse cx="0" cy="0" rx="22" ry="28" stroke="white" strokeWidth="1.2" fill="none" />
        {/* Lâmina esquerda */}
        <path d="M0 28 L4 160 L-4 162 Z" stroke="white" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
        {/* Anel direito */}
        <ellipse cx="44" cy="0" rx="22" ry="28" stroke="white" strokeWidth="1.2" fill="none" />
        {/* Lâmina direita */}
        <path d="M44 28 L48 160 L40 162 Z" stroke="white" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
        {/* Pivot */}
        <circle cx="22" cy="80" r="5" stroke="white" strokeWidth="1.2" fill="none" />
        <line x1="0" y1="28" x2="44" y2="28" stroke="white" strokeWidth="0.8" opacity="0.5" />
      </g>

      {/* ── Pente profissional (canto inferior direito) ── */}
      <g transform="translate(900, 540) rotate(-5)" opacity="0.045">
        {/* Corpo do pente */}
        <rect x="0" y="0" width="180" height="28" rx="3" stroke="white" strokeWidth="1.2" fill="none" />
        {/* Dentes do pente */}
        {Array.from({ length: 22 }).map((_, i) => (
          <line
            key={i}
            x1={10 + i * 7.5}
            y1="28"
            x2={10 + i * 7.5}
            y2="52"
            stroke="white"
            strokeWidth="1"
          />
        ))}
        {/* Base dos dentes */}
        <line x1="10" y1="52" x2="172" y2="52" stroke="white" strokeWidth="0.8" />
      </g>
    </svg>
  );
}
