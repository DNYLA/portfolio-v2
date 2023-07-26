/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        shine: 'shine 1s',
        'spin-slow': 'spin 3s linear infinite',
        tilt: 'tilt 2s ease-in-out infinite',
      },
      keyframes: {
        tilt: {
          '0%, 100%': { transform: 'rotate(-52deg)' },
          '50%': { transform: 'rotate(55deg)' },
        },
        shine: {
          '100%': { left: '125%' },
        },
      },
    },
  },
  plugins: [],
};
