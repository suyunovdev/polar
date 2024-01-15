/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './pages/*.html'],
  theme: {
    extend: {
      colors: {
        first: '#F2CEDA',
        second: '#D23166',
      },
    },
    fontFamily: {
      roboto: ['Roboto'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1165px',
    },
  },
  plugins: [],
};
