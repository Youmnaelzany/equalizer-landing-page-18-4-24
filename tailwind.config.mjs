/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    extend: {
      backgroundImage: {
        "pattern-ds": "url('/assets/bg-main-desktop.png')",
        "pattern-tb": "url('/assets/bg-main-tablet.png')",
        "pattern-mb": "url('/assets/bg-main-mobile.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
