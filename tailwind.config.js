/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./test.html"],
  theme: {
    extend: {
      colors: {
        "black1": "#0E154D",
        "black-hover": "#101a70",
        "orangec": "#d6c55e"
      },
      fontFamily: {
        'badscript': ['Bad Script'],
        "bebas": ["Bebas Neue"],
        "caveat": ["Caveat"]
      },
      height: {
        'bgSm': '1000px',
      }
    }
  },
  plugins: [],
}
