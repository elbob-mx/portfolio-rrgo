/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      small: '0px',
      mobile: '359px',
      mobileHor: '640px',
      tablet: '768px',
      laptop: '976px',
      ipad: '1023px',
      hd:'1365px',
      fhd: '1440px',
    },
    extend: {
      fontFamily: {
        'archivo': 'Archivo, sans-serif',
        'dokdo': 'Dokdo, cursive',
        'kosugi': 'Kosugi, sans-serif'
      },
      colors: {
        darkPurple: '#1C1624',
        neonBlue: '#03EDF9',
        neonPink: '#F972C5',
        neonPurple: '#C887F2'
      }
    },
  },
  plugins: [],
}
