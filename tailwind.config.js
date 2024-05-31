/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'main': '2fr minmax(10em, max-content) minmax(14em, max-content) minmax(1em, 1fr) fit-content(20em) calc(5em + 1vw) fit-content(10em)',
        'location': '0.8fr 1.2fr',
      },
      gridTemplateRows: {
        'main': '30vh 35vh 15vh 10vh',
      },
      fontFamily: {
        'sans': [
          '-apple-system',
          'BlinkMacSystemFont', 
          'Segoe UI', 'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol'
        ],
        'serif': [
          'Georgia', 
          'Times New Roman',
          'serif'
        ]
      }

    },
  },
  plugins: [],
}

