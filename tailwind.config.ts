import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        industrial: {
          950: "#08080a",
          900: "#0f0f13",
          850: "#141419",
          800: "#1a1a22",
          700: "#272733",
          600: "#3d3d4e",
        },
        volt: {
          DEFAULT: "rgb(0 128 128 / <alpha-value>)",
          hover: "rgb(0 150 150 / <alpha-value>)",
          dim: "rgb(0 128 128 / 0.18)",
          dark: "#08080a",
        },
        vold: {
          DEFAULT: "rgb(0 128 128 / <alpha-value>)",
          hover: "rgb(0 150 150 / <alpha-value>)",
          dim: "rgb(0 128 128 / 0.18)",
          dark: "#08080a",
        },
        primary: {
          DEFAULT: "rgb(0 128 128 / <alpha-value>)",
          hover: "rgb(0 150 150 / <alpha-value>)",
          dim: "rgb(0 128 128 / 0.18)",
          dark: "#08080a",
        },
        cobalt: {
          DEFAULT: "#2563eb",
          hover: "#1d4ed8",
          light: "#3b82f6",
          dim: "rgba(37, 99, 235, 0.16)",
          glow: "rgba(37, 99, 235, 0.45)",
        },
        cyan: {
          DEFAULT: "#06b6d4",
          light: "#38bdf8",
          dim: "rgba(6, 182, 212, 0.16)",
          glow: "rgba(56, 189, 248, 0.45)",
        },
        midnight: {
          950: "#05070d",
          900: "#070b14",
          850: "#090f1c",
          800: "#0c1527",
          700: "#13213d",
        },
      },
      borderColor: {
        volt: "#08080a",
        vold: "#08080a",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        "athletic-power": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
