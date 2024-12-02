/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(149, 56, 226)",
        second: "rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [require("daisyui")],
};
