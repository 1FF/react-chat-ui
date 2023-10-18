import { boxShadow } from './src/config/themes/base';
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
    boxShadow,
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
      'light-shadow-dots': {
        '0%, 33%': {
          background: 'rgba(202, 202, 219, 0.6)',
          'box-shadow': '-31px 0 #21bb5a, 31px 0 rgba(202, 202, 219, 0.6)',
        },

        '66%': {
          background: '#21bb5a',
          'box-shadow': '-31px 0 rgba(202, 202, 219, 0.6), 31px 0 rgba(202, 202, 219, 0.6)',
        },

        '100%, 0%': {
          background: 'rgba(202, 202, 219, 0.6)',
          'box-shadow': '-31px 0 rgba(202, 202, 219, 0.6), 31px 0 #21bb5a',
        },
      },
      'dark-shadow-dots': {
        '0%, 33%': {
          background: 'rgba(255, 255, 255, 0.5)',
          'box-shadow': '-31px 0 #f53374, 31px 0 rgba(255, 255, 255, 0.5)',
        },

        '66%': {
          background: '#f53374',
          'box-shadow': '-31px 0 rgba(255, 255, 255, 0.5), 31px 0 rgba(255, 255, 255, 0.5)',
        },

        '100%, 0%': {
          background: 'rgba(255, 255, 255, 0.5)',
          'box-shadow': '-31px 0 rgba(255, 255, 255, 0.5), 31px 0 #f53374',
        },
      },
      'text-spin': {
        '0%': {
          transform: 'translateX(18rem)',
        },
        '6.25%, 12.5%': {
          transform: 'translateX(-0.5rem)',
        },
        '18.75%, 25%': {
          transform: 'translateX(-21.5rem)',
        },
        '31.25%, 37.5%': {
          transform: 'translateX(-42.5rem)',
        },
        '43.75%, 50%': {
          transform: 'translateX(-63.5rem)',
        },
        '56.25%, 62.5%': {
          transform: 'translateX(-84.5rem)',
        },
        '68.75%, 75%': {
          transform: 'translateX(-105.5rem)',
        },
        '81.25%, 87.5%': {
          transform: 'translateX(-126.5rem)',
        },
        '93.75%, 100%': {
          transform: 'translateX(-147.5em)',
        },
      },
    },
    animation: {
      blink: 'blink 0.5s infinite',
      wave: 'wave 1.3s linear infinite',
      rotate: 'rotate 500ms linear infinite',
      'wave-delay': 'wave 1.3s linear infinite -1.1s',
      'wave-delay-2': 'wave 1.3s linear infinite -0.9s',
      'light-shadow-dots': 'light-shadow-dots 2s linear infinite',
      'dark-shadow-dots': 'dark-shadow-dots 2s linear infinite',
      'text-spin': 'text-spin 30s linear infinite',
    },
    extend: {},
  },
  plugins: [],
};
