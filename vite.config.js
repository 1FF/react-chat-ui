import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import path from "path";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindConfig from './tailwind.config';

export default defineConfig({
  plugins: [react(), eslint(), nodePolyfills({ include: ['events'] }), cssInjectedByJsPlugin({ styleId: 'chat-ai-client-tw' }),],
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
      entry: path.resolve(__dirname, "./src/main.jsx"),
      name: "ReactBotClient",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      output: { exports: "default" },
      external: [
        "react", "react-dom", "react-redux",
        "redux-persist", "socket.io-client", "@reduxjs/toolkit",
        "prop-types", "events"
      ],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
