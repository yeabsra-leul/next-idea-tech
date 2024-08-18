import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      edge: "#D1D3D6",
      title: "#81878C",
      input: {
        placholder: "#738494",
        background: "#FBFDFF",
        border: "#D1D3D6",
      },
      body: {
        DEFAULT: "#4A5259",
        background: "white",
        foreground: "white",
      },
      main: {
        DEFAULT: "#071C4D",
        background: "#F6FBFF",
        foreground: "white",
      },
      primary: {
        DEFAULT: "#0A6BD8",
        background: "#F1F8FF",
        foreground: "white",
        focus: "#0651A5",
      },
      secondary: {
        DEFAULT: "#F7F9FB",
        foreground: "#071C4D",
        focus: "#CEDDFF",
      },
      danger: {
        DEFAULT: "#E01E5A",
        foreground: "white",
        background: "#FFE4E4",
      },
      succes: {
        DEFAULT: "#005A37",
        foreground: "white",
        background: "#E1FAF3",
      },
      warning: {
        DEFAULT: "#B35A04",
        foreground: "white",
        background: "#FFF9E7",
      },
      info: {
        DEFAULT: "#4039A8",
        foreground: "white",
        background: "#F8F1FF",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "1rem",
      },
    },
    extend: {
      fontFamily: {
        body: ["var(--font-manrope)", ...fontFamily.sans],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
