/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        overlay: "#00000063",
        base: "#121212",
        base2: "#121212BF",
      },
      keyframes: {
        dropDown: {
          "0%": { opacity: 0, transform: "translateY(-100%)" },
          "50%": { opacity: 0.85 },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        dropDown: "dropDown 0.1s linear",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
