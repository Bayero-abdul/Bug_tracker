module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        gray: {
          200: "#eaeaea",
          300: "#e5e5e5",
          400: "#c4c4c4",
          "300_01": "#e0d9d9",
        },
        white: { A700: "#ffffff" },
        blue: { 100: "#c7d2fe" },
        indigo: { 500: "#4338ca", A400: "#4f46e5" },
        colors: "#4f46e5ff",
        colors1: "#4F46E5",
        blue_gray: { 900: "#322f35" },
        red: { 800: "#d72020" },
      },
      fontFamily: { roboto: "Roboto", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
