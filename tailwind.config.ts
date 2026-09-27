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
