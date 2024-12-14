/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          "0%, 100%": { backgroundSize: "100%" },
          "50%": { backgroundSize: "105%" },
        },
      },
      animation: {
        zoom: "zoom 10s infinite ease-in-out", // Match the image transition duration
      },
    },
  },
  plugins: [],
};
