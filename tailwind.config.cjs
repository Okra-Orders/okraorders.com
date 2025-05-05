module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: { // Define colors directly in theme.colors
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      primary: "#8DC640", 
      secondary: "#50555C",
    },
    extend: {
      // colors: {} // Keep extend empty
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Keep forms plugin enabled
    // require("preline/plugin") // Keep Preline commented
  ],
}; 