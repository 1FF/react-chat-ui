import ReactBotClient from '@/main';
import { intent } from '@/services/intentions';

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
