// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kaushan: ['"Kaushan Script"', 'cursive'], // Add the font here
      },
      textShadow: {
        sm: '1px 1px 2px rgba(255, 150, 0)',
        DEFAULT: '2px 2px 4px rgba(255, 150, 0)',
        lg: '3px 3px 9px rgba(255, 150, 0)',
      },
      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateX(-10px)' },
        },
      },
      animation: {
        jump: 'jump 0.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
