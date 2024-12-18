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
      sm: '360px',
      md: '640px',
      lg: '1024px',
      xl: '1537px',
    },
    extend: {
      colors: {
        'light-gray': '#E0E1DD',
        'blue-opaque': '#778DA9',
        'blue-soft': '#415A77',
        'blue-light': '#0077B5',
        'blue-normal': '#00466B',
        'blue-dark': '#1B263B',
        'blue-darker': '#0D1B2A',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
