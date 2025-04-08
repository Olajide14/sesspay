/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#5D3FD3',
          50: '#F1EEFB',
          100: '#E3DDF8',
          200: '#C7BCF0',
          300: '#AB9BE9',
          400: '#8F7AE1',
          500: '#745BD9',
          600: '#5D3FD3',
          700: '#432CAB',
          800: '#33217F',
          900: '#221654',
          950: '#19103F'
        },
        'secondary': {
          DEFAULT: '#00CED1',
          50: '#AEFFFF',
          100: '#94FFFF',
          200: '#66FFFF',
          300: '#38FFFF',
          400: '#0AFFFF',
          500: '#00DCDF',
          600: '#00CED1',
          700: '#009A9C',
          800: '#006667',
          900: '#003233',
          950: '#001919'
        },
        'accent': {
          DEFAULT: '#00FFFF',
          hover: '#00DCDF'
        },
        'dark': '#1E293B'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #5D3FD3 0%, #00CED1 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(93, 63, 211, 0.05) 0%, rgba(0, 206, 209, 0.05) 100%)'
      },
      animation: {
        'fade-in': 'fadeIn 0.75s ease-in forwards',
        'slide-up': 'slideUp 0.75s ease-out forwards',
        'slide-down': 'slideDown 0.75s ease-out forwards',
        'slide-in-right': 'slideInRight 0.75s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
