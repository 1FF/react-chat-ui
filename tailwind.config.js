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
      },
      wave: {
        '0%': {
          transform: 'initial'
        },
        '60%': {
          transform: 'initial'
        },
        '100%': {
          transform: 'initial'
        },
        '30%': {
          transform: 'translateY(-15px)'
        }
      },
      rotate: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      blink: 'blink 0.5s infinite',
      wave: 'wave 1.3s linear infinite',
      rotate: 'rotate 500ms linear infinite',
      'wave-delay': 'wave 1.3s linear infinite -1.1s',
      'wave-delay-2': 'wave 1.3s linear infinite -0.9s',
    },
    extend: {},
  },
  plugins: [],
};
