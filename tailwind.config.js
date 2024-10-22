/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00a8ff",

          secondary: "#f4ad00",

          accent: "#b15f00",

          neutral: "#2c2a30",

          "base-100": "#ffffea",

          info: "#00a0ff",

          success: "#00d39e",

          warning: "#ffc700",

          error: "#ff1f4b",
        },
      },
    ],
  },
};
