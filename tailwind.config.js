/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        banner: "url('./src/assets/Banners/Banner.png')",
        bannerHistory: "url('./src/assets/Banners/bannerofhistory.jpg')",
        appBanner: "url('./src/assets/Svg/appBanner.svg')",
      },
    },
  },
  plugins: [],
};
