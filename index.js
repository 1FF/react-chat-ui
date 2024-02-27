import { faker } from '@faker-js/faker';
import ReactBotClient from './src/main';
import { intent } from './src/services/intentions';
import { chat as getChatConfig, paymentData } from './src/config';
import { SUPPORT_PURPOSE } from './src/config/env';

// example entry point for the plugin
document.addEventListener('DOMContentLoaded', () => {
  // DEV NOTE: this is needed to simulate retarded loading of the data
  setTimeout(() => {
    localStorage.setItem('__pd', JSON.stringify(paymentData));
  }, 5000);

  const id = faker.string.uuid();
  // eslint-disable-next-line no-unused-expressions
  !localStorage.getItem('__cid') && localStorage.setItem('__cid', id);

  ReactBotClient({ root: document.querySelector('#chatbot-container'), initialConfig: getChatConfig(id, SUPPORT_PURPOSE) });
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
