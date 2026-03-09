import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fundos
        "surface-page": "var(--surface-page)",
        "surface-section": "var(--surface-section)",
        "surface-card": "var(--surface-card)",
        "surface-elevated": "var(--surface-elevated)",
        "surface-nav": "var(--surface-nav)",
        // Texto
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        // Accent
        "accent-primary": "var(--accent-primary)",
        "accent-hover": "var(--accent-hover)",
        "accent-subtle": "var(--accent-subtle)",
        "accent-glow": "var(--accent-glow)",
        // Status
        "status-success": "var(--status-success)",
        "status-error": "var(--status-error)",
        // Bordas
        "border-default": "var(--border-default)",
        "border-subtle": "var(--border-subtle)",
        "border-accent": "var(--border-accent)",
      },
      borderRadius: {
        card: "var(--radius-card)",
        button: "var(--radius-button)",
        input: "var(--radius-input)",
        badge: "var(--radius-badge)",
        avatar: "var(--radius-avatar)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        hover: "var(--shadow-hover)",
        float: "var(--shadow-float)",
        button: "var(--shadow-button)",
      },
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "crosshatch": "var(--bg-crosshatch)",
      },
    },
  },
  plugins: [],
};

export default config;
