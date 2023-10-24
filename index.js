import ReactBotClient from '@/main';
import { intent } from '@/services/intentions';

// example entry point for the plugin
document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('__cid', '1f5d7b4d-3485-40a7-891d-67ecf2a94838');
  ReactBotClient({ root: document.querySelector('#root') });
  // example implementation from the plugin user side
  intent.core.on(intent.type.email, (data) => {
    // MOCKERIES FOR TESTING PURPOSES

    // SUCCESS
    setTimeout(() => {
      intent.core.emit(intent.type.emailSuccess, 'great');
    }, 3000);

    // ERROR - EXISTING USER
    // setTimeout(() => {
    //   intent.core.emit(intent.type.emailError, { status: 409, data: { buttonLink: '/some-link' } });
    // }, 3000);

    // ERROR - BLACKLISTED MAIL OR ELSE
    // setTimeout(() => {
    //   intent.core.emit(intent.type.emailError, { status: 422, errors: { email: ['Email is invalid, please enter valid one'] } });
    // }, 3000);
  });
});
