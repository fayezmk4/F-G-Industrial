/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4fb',
          100: '#d4e3f4',
          200: '#a8c7e8',
          300: '#6da4d8',
          400: '#3d7fc2',
          500: '#1d5fa8',
          600: '#0d4a8e',
          700: '#0a3a72',
          800: '#082e5b',
          900: '#06234a',
          950: '#041a38',
        },
        concrete: {
          50: '#f7f7f6',
          100: '#eeede9',
          200: '#dcd9d1',
          300: '#c4bfb3',
          400: '#a59e8d',
          500: '#88806f',
          600: '#6e6759',
          700: '#57524a',
          800: '#3f3b36',
          900: '#2a2724',
          950: '#1a1816',
        },
        safety: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb973c',
          500: '#f57316',
          600: '#e25f0a',
          700: '#bc4d08',
          800: '#973e0d',
          900: '#7c330d',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Sora', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
