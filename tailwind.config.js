/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "#1a1a1e",
          deep: "#111114",
          card: "#222228",
          hover: "#2a2a30",
        },
        accent: {
          DEFAULT: "#0693e3",
          cyan: "#00d4ff",
          purple: "#9b51e0",
          orange: "#ff6900",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          hover: "rgba(255,255,255,0.15)",
        },
        "text-primary": "#ffffff",
        "text-secondary": "rgba(255,255,255,0.7)",
        "text-muted": "rgba(255,255,255,0.35)",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-instrument)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      maxWidth: {
        content: "1140px",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
