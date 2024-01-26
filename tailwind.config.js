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
        primary: {
          main: '#245075',
          accent: '#DAEAFB',
        },
        secondary: {
          main: '#98E9EC',
          accent: '#DB5764',
          light: '#eff5fa',
        },
        tertiary: {
          warning: '#e79a51',
          success: '#3F6A48',
          error: '#CA2B3B',
          info: '#707070',
        },
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
