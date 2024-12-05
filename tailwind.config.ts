import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",

      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1279.98px" },
      notXL: { max: "1279.98px" },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "1.875rem",
          xl: "1.875rem",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        cardOverlay:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.65) 15.4%, rgba(0, 0, 0, 0.39) 23.9%, rgba(0, 0, 0, 0.00) 34.4%)",
        checkmark: `url(/icons/checkmark.svg)`,
        backdrop: `linear-gradient(rgba(41, 41, 41, 0.40),rgba(41, 41, 41, 0.40))`,
        gradient: `linear-gradient(90deg, #9ea7fc 0%, #65b6f7 100%)`,
        backlog:
          "linear-gradient(#f6f8fc, #f6f8fc), radial-gradient(circle at top left, #c781ff, #e57373)",
      },
      boxShadow: {
        shadow: "0px 10px 24px -15px rgba(0, 0, 0, 0.5)",
        input: "0px 5px 15px -12px rgba(0, 0, 0, 0.5)",
        "custom-card": "0px 0px 10px 0px #d2d7e0",
      },

      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        mainColor: "#707090",
        unactive: "#b7bec7",
        mainBcg: "#888fdc",
        sectionBcg: "#cad9f0",
        warning: "#f87171",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".bg-clip-border-box": {
          "background-clip": "border-box",
        },
        ".bg-clip-content-box": {
          "background-clip": "content-box, border-box",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;
