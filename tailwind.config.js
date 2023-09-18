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
    extend: {},
  },
  plugins: [],
};
