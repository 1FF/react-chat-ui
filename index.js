import ReactBotClient from '@/main';
import { intent } from '@/services/intentions';
import { faker } from '@faker-js/faker';

// example entry point for the plugin
document.addEventListener('DOMContentLoaded', () => {
  // DEV NOTE: this is needed to simulate retarded loading of the data
  setTimeout(() => {
    localStorage.setItem('__pd', JSON.stringify({ amount: '29.90',
      amountInUSD: 29.9,
      frequency: 1,
      frequencyInMonths: 1,
      billingOptionType: 'subscription',
      isDisplayPricePlan: true,
      displayPlanPrice: '$29.90', }));
  }, 5000);

  // eslint-disable-next-line no-unused-expressions
  !localStorage.getItem('__cid') && localStorage.setItem('__cid', faker.string.uuid());
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
