import type { Config } from "tailwindcss";

import headlessui from "@headlessui/tailwindcss";
import forms from "@tailwindcss/forms";
import lineClamp from "@tailwindcss/line-clamp";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";

extend([mixPlugin]);

const generateDarkenColorFrom = (input: string, precentage = 0.07): string =>
  colord(input).darken(precentage).toHex();

const generateForegroundColorFrom = (input: string, precentage = 0.8): string =>
  colord(input)
    .mix(colord(input).isDark() ? "white" : "black", precentage)
    .toHex();

export const tailwindColors: { [key: string]: string } = {
  current: "currentColor",
  transparent: "transparent",
  white: "#F9F9F9",
  primary: "#007BEC",
  "primary-content": "#FFFFFF",
  "primary-focus": generateDarkenColorFrom("#007BEC"),
  secondary: "#6c5ce7",
  "secondary-content": "#FFFFFF",
  "secondary-focus": generateDarkenColorFrom("#6c5ce7"),
  accent: "#1FB2A5",
  "accent-content": "#FFFFFF",
  "accent-focus": generateDarkenColorFrom("#1FB2A5"),
  neutral: "#2a323c",
  "neutral-content": generateForegroundColorFrom("#FFFFFF"),
  "neutral-focus": generateDarkenColorFrom("#2a323c", 0.03),
  "base-25": "#353d47",
  "base-50": "#2a323c",
  "base-75": "#20272e",
  "base-100": "#1d232a",
  "base-200": "#191e24",
  "base-300": "#15191e",
  "base-content": "#A6ADBB",
  info: "#3abff8",
  "info-content": generateForegroundColorFrom("#3abff8"),
  success: "#36d399",
  "success-content": generateForegroundColorFrom("#36d399"),
  warning: "#fbbd23",
  "warning-content": generateForegroundColorFrom("#fbbd23"),
  error: "#f87272",
  "error-content": generateForegroundColorFrom("#f87272"),
  "gradient-first": "#34eaa0",
  "gradient-second": "#0fa2e9",
};

const config: Config = {
  corePlugins: {
    preflight: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/flyonui/dist/js/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["var(--font-figtree)", "sans-serif"],
        yekan: ["var(--font-yekanbakh)", "sans-serif"],
      },
      colors: tailwindColors,
      backgroundImage: {
        "hero-pattern": "url('/images/tile.svg')",
      },
      lineClamp: {
        7: "7",
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  darkMode: "class",
  plugins: [lineClamp, forms, headlessui({ prefix: "ui" })],
};
export default config;
