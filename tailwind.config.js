/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FCFAF6',
          100: '#F7F2EA',
          200: '#EFE7DA',
        },
        sand: {
          300: '#E2D4BE',
          400: '#D2BE9F',
          500: '#BCA384',
        },
        nude: '#C9B29B',
        cocoa: {
          700: '#5A473D',
          800: '#3F322B',
          900: '#2A211C',
          950: '#1C1613',
        },
        champagne: {
          400: '#C9A96A',
          500: '#B8934F',
        },
        rose: {
          200: '#E3D3DA',
          300: '#CDB2BF',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.35em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 1.2s ease-out both',
      },
    },
  },
  plugins: [],
};
