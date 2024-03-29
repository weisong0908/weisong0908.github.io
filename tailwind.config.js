module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Zen Kaku Gothic Antique", "sans-serif"],
      serif: ['"Crimson Pro"', "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
