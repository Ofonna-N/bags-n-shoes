/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        overlay: "#00000063",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
