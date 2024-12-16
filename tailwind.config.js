/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          "0%, 100%": { transform: "scale(1)" }, // No zoom at start and end
          "50%": { transform: "scale(1.05)" },  // Slight zoom in at 50%
        },
      },
      animation: {
        zoom: "zoom 10s infinite ease-in-out", // Smooth infinite zoom effect
      },
    },
  },
  plugins: [],
};
