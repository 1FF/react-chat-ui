import ReactBotClient from '@/main';
// example entry point for the plugin
document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('__cid', '1f5d7b4d-3485-40a7-891d-67ecf2a94838');
  ReactBotClient({ root: document.querySelector('#root') });
});
