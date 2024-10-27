/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        aerobg: "#020C41",
        aerogreen: "#1DA563",
        aerowarning: "#D7A475",
        aerosuccess: "#1ED7D1",
        aerored: "#F8026F",
        aeropurple: " #005DFA",
        aeroblue: "#35D8D5",
      },
    },
  },
  plugins: [],
};
