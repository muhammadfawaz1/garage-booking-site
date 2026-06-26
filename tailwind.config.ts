import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#07090d",
        panel: "#10151c",
        chrome: "#c7d0db",
        electric: "#22a7ff",
        volt: "#9cff33"
      },
      boxShadow: {
        glow: "0 0 45px rgba(34, 167, 255, 0.22)",
        volt: "0 0 35px rgba(156, 255, 51, 0.2)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top left, rgba(34,167,255,.18), transparent 36rem), radial-gradient(circle at bottom right, rgba(156,255,51,.12), transparent 32rem)"
      }
    }
  },
  plugins: []
};

export default config;
