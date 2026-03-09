"use client";

interface BarberChairsProps {
  total?: number;
  filled?: number;
}

export function BarberChairs({ total = 15, filled = 9 }: BarberChairsProps) {
  return (
    <div className="flex flex-nowrap gap-2 justify-center overflow-x-auto max-w-3xl mx-auto" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => {
        const isFilled = i < filled;
        return (
          <svg
            key={i}
            width="28"
            height="46"
            viewBox="0 0 44 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={
              !isFilled
                ? {
                    animation: "chairPulse 2s ease-in-out infinite",
                    animationDelay: `${i * 0.3}s`,
                  }
                : undefined
            }
          >
            {/* Encosto */}
            <rect
              x="6"
              y="2"
              width="32"
              height="28"
              rx="2"
              stroke={isFilled ? "rgba(255,255,255,0.15)" : "var(--accent-primary)"}
              strokeWidth="1.5"
              fill={isFilled ? "var(--surface-elevated)" : "none"}
              strokeDasharray={isFilled ? "0" : "4 2"}
            />
            {/* Assento */}
            <rect
              x="4"
              y="32"
              width="36"
              height="18"
              rx="2"
              stroke={isFilled ? "rgba(255,255,255,0.15)" : "var(--accent-primary)"}
              strokeWidth="1.5"
              fill={isFilled ? "var(--surface-elevated)" : "none"}
              strokeDasharray={isFilled ? "0" : "4 2"}
            />
            {/* Haste central */}
            <rect
              x="19"
              y="50"
              width="6"
              height="14"
              stroke={isFilled ? "rgba(255,255,255,0.1)" : "var(--accent-primary)"}
              strokeWidth="1.5"
              fill="none"
              strokeDasharray={isFilled ? "0" : "4 2"}
            />
            {/* Base */}
            <rect
              x="2"
              y="64"
              width="40"
              height="6"
              rx="1"
              stroke={isFilled ? "rgba(255,255,255,0.1)" : "var(--accent-primary)"}
              strokeWidth="1.5"
              fill="none"
              strokeDasharray={isFilled ? "0" : "4 2"}
            />
            {/* Check nas cadeiras ocupadas */}
            {isFilled && (
              <path
                d="M16 18 L20 22 L28 14"
                stroke="var(--accent-primary)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        );
      })}
      <style>{`
        @keyframes chairPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="chairPulse"] { animation: none !important; opacity: 1; }
        }
      `}</style>
    </div>
  );
}
