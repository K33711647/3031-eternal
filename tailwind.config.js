module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      limegreen: "#83FF13",
      black: "#000000",
      white: "#ffffff",
      grey: "#EDEDED",
      blue: "#0000FF",
      transparent: "transparent",
    },
    fontFamily: {
      black: ["suisse_intlblack"],
      medium: ["suisse_intlmedium"],
      semi: ["suisse_intlsemi_bold"],
      bold: ["suisse_intlbold"],
    },
    extend: {
      transitionProperty: {
        width: "width",
      },
      borderRadius: {
        oval: "100%",
      },
      fontSize: {
        vw25: "25vw",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
