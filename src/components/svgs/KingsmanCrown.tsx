interface KingsmanCrownProps {
  size?: number;
  className?: string;
  opacity?: number;
}

export function KingsmanCrown({ size = 48, className = "", opacity = 1 }: KingsmanCrownProps) {
  const w = size;
  const h = Math.round(size * 0.75);

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Base retangular da coroa */}
      <rect x="4" y="26" width="40" height="6" rx="1" stroke="var(--accent-primary)" strokeWidth="1.5" fill="none" />
      {/* Ponta central (mais alta) */}
      <path d="M24 4 L20 18 L28 18 Z" stroke="var(--accent-primary)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      {/* Pontas laterais internas */}
      <path d="M13 10 L11 18 L17 18 Z" stroke="var(--accent-primary)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M35 10 L31 18 L37 18 Z" stroke="var(--accent-primary)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      {/* Pontas externas (menores) */}
      <path d="M4 16 L4 26" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M44 16 L44 26" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Conector base-pontas */}
      <path d="M4 26 L11 18 L17 18 L20 18 L24 18 L28 18 L31 18 L37 18 L44 26" stroke="var(--accent-primary)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      {/* Detalhe: pequeno círculo no topo da ponta central */}
      <circle cx="24" cy="4" r="1.5" fill="var(--accent-primary)" />
    </svg>
  );
}
