// tailwind.config.js
module.exports = {
  mode: "jit",
  
  content: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue': '#377DFF',
        'green': '#38CB89',
        'red': '#FF5630',
        'yel': '#FFA600',
        'secondary': '#56CCF2',
        'natural': '#333333',
        'natural-2': '#8F8F8F',
        'natural-3': '#B2B2B2',
        'natural-4': '#E9E9E9',
        'back-light': '#F5F6FA'
      },
      width: {
        'side-bar': '260px',
        'small-side-bar' : '72px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}; 