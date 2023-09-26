import initializeChatWidget from '@/main';
// example entry point for the plugin
document.addEventListener('DOMContentLoaded', () => {
  initializeChatWidget({ root: document.querySelector('#root'), devMode: true });
});
