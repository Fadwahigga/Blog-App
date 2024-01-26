/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        black: '#1A1E23',
        white: '#F4F5F6',
      },
      boxShadow: {
        custom: 'rgba(0, 0, 0, .08) 5px 6px 18px',
      },
    },
  },
  plugins: [],
}
