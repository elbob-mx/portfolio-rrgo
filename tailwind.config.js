/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html',
    "./node_modules/flowbite/**/*.js",
],
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
        'kosugi': 'Kosugi, sans-serif',
        'dm': 'DM Mono, monospace',
        'outfit': 'Outfit, sans-serif',
        'inconsolata': 'Inconsolata, monospace',
        'karla': 'Karla, sans-serif',
        'nanum': 'Nanum Pen Script, cursive',
        'marker': 'Permanent Marker, cursive',
        'rockSalt': 'Rock Salt, cursive',
        'walter': 'Walter Turncoat, cursive',
        animation: {
          'spin-slow': 'spin 1s ease-in-out infinite',
        }
      },
      colors: {
        offBlack: '#181818',
        offWhite: '#F2F2F2',
        darkPurple: '#1C1624',
        neonBlue: '#03EDF9',
        neonPink: '#F972C5',
        neonPurple: '#C887F2',
        purple: '#252641'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
