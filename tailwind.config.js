/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        aerobg: "#020C41",
        softbg: "hsl(230.476, 94%, 13%)",
        aerogreen: "#1DA563",
        aerowarning: "#D7A475",
        aerosuccess: "#1ED7D1",
        aerored: "#F8026F",
        aeropurple: " #005DFA",
        aeroblue: "#35D8D5",
        grayBorder: "rgba(209, 213, 219, 0.5)",
      },
    },
  },
  plugins: [],
};
