/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(0 5% 11%)',
          light: 'hsl(0 5% 11% / 0.6)',
        },
        'dark-accent': 'hsl(0, 0%, 100% /0.1)',
        grey: {
          lead: '#6F6F6F',
          iron: '#838383',
          light: '#DDDDDD',
          silver: '#CFCFCF',
          ash: '#535353',
          drab: '#9B9B9B',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        viadaloka: ['Vidaloka', 'serif'],
      },
    },
  },
  plugins: [],
}
