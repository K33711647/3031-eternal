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
      grey: "#F2F2F2",
      blue: "#0000FF",
      transparent: "transparent",
    },
    fontFamily: {
      black: ["pet_me_2xmedium"],
      medium: ["sequel_sansbook_body"],
      semi: ["sequel_sansbook_head"],
      bold: ["sequel_sansroman_body"],
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
