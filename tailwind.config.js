/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      color: {
      hi:'#9333ea'
      },
      padding: {
     '464px':'464px',
      },
    backgroundImage: {
        'hero': "url('/src/img/bg-hero.jpg')",
      }
    },
  },
  plugins: [],
}

