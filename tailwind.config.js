/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#161616', // رنگ سفارشی
        customgreen: '#0a8a1f', // رنگ سفارشی
      },
      fontFamily: {
        customFont: ['CustomFont', 'sans-serif'], // تعریف فونت سفارشی
      },
    },
  },
  plugins: [],
}
