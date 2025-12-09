/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontWeight: {
        card: "700",
      },
      colors: {
        pokebinder: {
          red: {
            light: "#FF5350",
            DEFAULT: "#C20001",
            dark: "#B40001",
          },
          gray: {
            light: "#F6F8FC",
            medium: "#EFF1F7",
            dark: "#B2B2C3",
            darker: "#7E8E9C",
          },
          navy: {
            light: "#183352",
            medium: "#2B2D42",
            dark: "#0E1A46",
          },
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
