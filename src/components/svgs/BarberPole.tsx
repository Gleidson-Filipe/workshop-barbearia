interface BarberPoleProps {
  height?: number;
  className?: string;
}

export function BarberPole({ height = 120, className = "" }: BarberPoleProps) {
  const width = 20;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 20 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Estrutura vertical do poste */}
      <line x1="4" y1="0" x2="4" y2={height} stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
      <line x1="16" y1="0" x2="16" y2={height} stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

      {/* Espirais diagonais — 3 linhas */}
      {/* Espiral 1 (accent) */}
      {Array.from({ length: Math.ceil(height / 20) + 1 }).map((_, i) => (
        <line
          key={`a-${i}`}
          x1="4"
          y1={i * 20}
          x2="16"
          y2={i * 20 - 10}
          stroke="var(--accent-primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      ))}

      {/* Espiral 2 (branca sutil) */}
      {Array.from({ length: Math.ceil(height / 20) + 1 }).map((_, i) => (
        <line
          key={`b-${i}`}
          x1="4"
          y1={i * 20 + 10}
          x2="16"
          y2={i * 20}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      ))}

      {/* Caps do topo e base */}
      <rect x="2" y="0" width="16" height="4" rx="1" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
      <rect x="2" y={height - 4} width="16" height="4" rx="1" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
    </svg>
  );
}
