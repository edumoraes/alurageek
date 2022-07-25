/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {

    colors: {

      transparent: 'transparent',
      current: 'currentColor',

      'claro': {
        100: '#ffffff',
        200: '#F5F5F5',
      },

      'escuro': {
        100: '#A2A2A2',
        200: '#464646',
      },

      'primary': {
        100: '#EAF2FD',
        200: '#D4E4FA',
        300: '#5595E9',
        400: '#2A7AE4',
      },

    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line
  plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
  ],
}
