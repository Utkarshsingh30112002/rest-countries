/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      DME: "hsl(209, 23%, 22%)",
      DMB: "hsl(207, 26%, 17%)",
      LMT: "hsl(200, 15%, 8%)",
      LMI: "hsl(0, 0%, 52%)",
      LMB: "hsl(0, 0%, 98%)",
      LME: "hsl(0, 0%, 100%)",
      DMT: "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  plugins: [],
};
