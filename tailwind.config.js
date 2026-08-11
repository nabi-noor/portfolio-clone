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
      xl: "1280px",
    },
    extend: {
      colors: {
        bg: "#0b0f1a",
        surface: "#111827",
        accent: {
          DEFAULT: "#fbbf24",
          bright: "#fcd34d",
        },
        heading: "#e2e8f0",
        body: "#94a3b8",
        faint: "#64748b",
        line: "rgba(148, 163, 184, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
