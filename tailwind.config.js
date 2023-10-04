import { colors } from './src/config/index';

export default {
  prefix: 'tw--',
  content: [
    './index.html',
    './src/**/*.{mjs,js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors,
    keyframes: {
      blink: {
        '0%': {
          opacity: 1,
        },
        '49%': {
          opacity: 1,
        },
        '50%': {
          opacity: 0,
        },
        '100%': {
          opacity: 0,
        }
      }
    },
    animation: {
      blink: 'blink 0.5s infinite',
    },
    extend: {},
  },
  plugins: [],
};
