/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        banner: "url('/Banner.png')",
        bannerHistory: "url('/bannerofhistory.png')",
        appBanner: "url('/appBanner.png')",
      },
      dropShadow: {
        '3xl': '0 0px 35px rgba(90,02,206, 0.5)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
