/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '768px',
      md: '976px',
      lg: '1280px',
      xl: '1920px',
    },

    extend: {
      fontSize: {
        // 'clamp-md': 'clamp(1rem, 2vw, 2rem)',
        // 'clamp-xl': 'clamp(3rem, 5vw, 4rem)',
      },
      colors: {
        'light-gray': '#E0E1DD',
        'blue-opaque': '#778DA9',
        'blue-soft': '#415A77',
        'blue-light': '#0077B5',
        'blue-normal': '#00466B',
        'blue-dark': '#1B263B',
        'blue-darker': '#0D1B2A',
      },
      // Palette
      // colors: {
      //   : {

      //     800: '#15303B',
      //     700: '#1E4752',
      //     600: '#266167',
      //     500: '#2E787C',
      //     400: '#3B8B90',
      //     300: '#4A9EA4',
      //     200: '#5AB1B8',
      //     100: '#6BC4CC',
      //     },
      //   secondary: {
      //   900: '#1B263B',
      //   800: '#2C3B53',
      //   700: '#3E516B',
      //   600: '#4F6783',
      //   500: '#617E9B',
      //   400: '#7294B3',
      //   300: '#83AACA',
      //   200: '#95C0E2',
      //   100: '#A6D6FA',
      //   },
      //   light: {
      //   900: '#E0E1DD',
      //   800: '#E6E7E3',
      //   700: '#ECEDE8',
      //   600: '#F2F3EF',
      //   500: '#F8F9F5',
      //   400: '#FBFCF9',
      //   300: '#FDFEFC',
      //   200: '#FEFEFD',
      //   100: '#FFFFFF',
      //   },

      // backgroundImage: {
      //   hero: "url('../public/galaxy.jpg')",
      // },
      // spacing: {
      //   'container-clamp': 'clamp(2rem, 10vw, 8rem)',
      // },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
