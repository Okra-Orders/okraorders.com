const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#8DC640",
        secondary: "#50555C",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
}; 