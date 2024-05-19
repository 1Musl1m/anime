/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      'sm': { 'max': '767px'},

      'md': { 'max': '1023px'},

      'lg': {'max': '1279px'},

      'xl': {'max': '1535px'},

      '2xl': {'min': '1537px'},
    },
  },
  plugins: [],
}

