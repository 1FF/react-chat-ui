import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindConfig from './tailwind.config';

export default defineConfig({
  plugins: [react(), eslint(), nodePolyfills({ include: ['events'] }),
  cssInjectedByJsPlugin({
    injectCode: (cssCode, options) => `try {
      if(typeof document != 'undefined') {
        const elementStyle = document.createElement('style');
        elementStyle.id = 'react-tw-ai-client';
        elementStyle.appendChild(document.createTextNode(${cssCode}));
        document.body.appendChild(elementStyle);
      }
    } catch(e) {
      console.error('vite-plugin-css-injected-by-js', e);
    }`
  })],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  css: {
    postcss: {
      plugins: [tailwind(tailwindConfig), autoprefixer],
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/main.jsx'),
      name: 'ReactBotClient',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      output: { exports: 'auto' },
      external: [
        'react', 'react-dom', 'react-redux',
        'redux-persist', 'socket.io-client', '@reduxjs/toolkit',
        'prop-types', 'events'
      ],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
