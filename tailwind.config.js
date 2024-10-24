/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-rustic": "#E3E1D9",
        "gray-dark": "#B4B4B8",
        "gray-medium": "#C7C8CC",
        "gray-light": "#E4E0E1",
      },
      backgroundImage: {
        "hero-banner": "url('/image4.jpg')",
      },
    },
  },
  plugins: [],
};
