// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    extend: {
      fontSize: {
        xxs: ['0.6rem', '0.75rem'],
      },
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        error: '#ff3333',
        carlo: {
          DEFAULT: '#475AF6',
          50: '#F6F7FF',
          100: '#E3E6FE',
          200: '#BCC3FC',
          300: '#95A0FA',
          400: '#6E7DF8',
          500: '#475AF6',
          600: '#122AF3',
          700: '#0A1EC3',
          800: '#07168E',
          900: '#040D58',
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    require('@tailwindcss/line-clamp'),
  ],
};
