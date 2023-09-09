/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        11: 'repeat(11, minmax(0, 1fr))',
      },
      gridRowStart: {
        8: '8',
      },
    },
  },
  plugins: [],
};
