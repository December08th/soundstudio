/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.njk',
    './_includes/**/*.njk',
    './_includes/**/*.svg',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1200px', 
      },
    },
    extend: {},
  },
  plugins: [],
}

