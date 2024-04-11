import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          "50": "#effef3",
          "100": "#d9ffe4",
          "200": "#b5fdcb",
          "300": "#7cf9a3",
          "400": "#3cec74",
          "500": "#12d551",
          "600": "#08b13e",
          "700": "#0b8e36",
          "800": "#0e6d2e",
          "900": "#0e5929",
          "950": "#013213",
        },
      },
    },
  },
  plugins: [],
};
export default config;
