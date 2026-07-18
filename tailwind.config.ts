/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#0a0a0f",
        "bg-surface": "#12121a",
        "bg-elevated": "#1a1a26",
        "accent-cyan": "#00d9ff",
        "accent-violet": "#a855f7",
        "text-primary": "#f5f5f7",
        "text-secondary": "#8b8b96",
        "text-muted": "#4a4a55",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Space Grotesk", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "blob": "blob 8s ease-in-out infinite",
        "blob-delay": "blob 8s ease-in-out 4s infinite",
        "grid-drift": "grid-drift 20s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        "grid-drift": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "80px 80px" },
        },
      },
    },
  },
  plugins: [],
};
