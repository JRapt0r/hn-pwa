const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'sm': '0.9125rem',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace']
      },
      colors: {
        blue: {
          300: '#8cd8f9',
          700: '#174fce',
        },
        coal: {
          'light': '#323639',
          'dark': '#202124'
        },
        gray: colors.gray,
        orange: '#FF6600',
        black: '#111111',
        white: '#FCFCFC',
        paper: '#f6f6ef',
      },
    },
  },
  variants: {},
  plugins: [],
}

