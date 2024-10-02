/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spinGlow: {
          "0%": {
            "box-shadow":
              "0 0 3px rgba(139, 0, 255, 0.5), 0 0 10px rgba(139, 0, 255, 0.5)",
          },
          "50%": {
            "box-shadow":
              "0 0 10px rgba(139, 0, 255, 0.8), 0 0 20px rgba(139, 0, 255, 0.6)",
          },
          "100%": {
            "box-shadow":
              "0 0 3px rgba(139, 0, 255, 0.5), 0 0 10px rgba(139, 0, 255, 0.5)",
          },
        },
      },
      animation: {
        "spin-glow": "spinGlow 2s linear infinite",
      },
    },
  },
  plugins: [],
};
