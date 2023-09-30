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
        'dm': 'DM Mono, monospace',
        'inconsolata': 'Inconsolata, monospace',
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
