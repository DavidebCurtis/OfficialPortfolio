/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      transitionProperty: {
        padding: 'padding',
      },
      backgroundImage: {
        plant: "url('/plant.png')",
      },
      boxShadow: {
        custom: '0px 1px 15px 1px rgba(227, 61, 148, 0.25)',
      },
      animation: {
        spinButton: 'spin .4s linear 1',
        wave: 'wave 10s ease-in-out infinite',
        waveFast: 'wave 1s ease-in-out infinite',
        waveButton: 'waveButton 3s ease-in-out infinite',
        wiggle: 'wiggle 2s linear infinite',
        wiggleOnce: 'wiggle 2s linear 1',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0.0deg)' },
          '5%': { transform: 'rotate(14deg)' },
          '10%': { transform: 'rotate(-8deg)' },
          '15%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-4deg)' },
          '25%': { transform: 'rotate(10.0deg)' },
          '30%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        wave: {
          '0%': {
            'background-size': '200% 200%',
            'background-position': '0%',
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': '200%',
          },
        },
        waveButton: {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': '0%',
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': '200%',
          },
        },
      },
      colors: {
        nav: 'linear-gradient(90deg, rgba(27,18,29,1) 0%, rgba(18,15,47,1) 50%, rgba(27,18,29,1) 100%)',
        coal: 'rgba(var(--coal) , <alpha-value>)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        twilight: 'rgba(var(--twilight) , <alpha-value>)',
        midnight: 'rgba(var(--midnight) , <alpha-value>)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
