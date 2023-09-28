import ReactBotClient from '@/main';
// example entry point for the plugin
document.addEventListener('DOMContentLoaded', () => {
  ReactBotClient({ root: document.querySelector('#root') });
});
