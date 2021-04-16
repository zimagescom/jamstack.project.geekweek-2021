import { fontFamily } from 'tailwindcss/defaultTheme'

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...fontFamily.sans],
      },
      colors: {
        primary: {
          default: '#d51248',
          50: '#fdfcfb',
          100: '#fcf0ef',
          200: '#f9cbdf',
          300: '#f19dbe',
          400: '#f06c99',
          500: '#e6487a',
          600: '#d51248',
          700: '#ae2340',
          800: '#811929',
          900: '#4f1015',
        },
      },
    },
  },
  variants: {
    extend: {
      ringOpacity: ['hover', 'focus'],
    },
  },
  plugins: [],
}
