import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from '@/store';

import '@/assets/css/index.css';
import { AppBase } from '@/components/AppBase';

export { intent } from '@/services/intentions';

// DEV Note: will be received by Razvigor
const initialConfig = {
  meta: {
    pd: {
      amount: '29.90',
      amountInUSD: 29.9,
      upfrontAmount: null,
      currency: 'USD',
      trial_in_days: 0,
      period: 'M',
      frequency: 1,
      frequencyInMonths: 1,
      billingOptionType: 'subscription',
      planId: '59c45291-1e02-43ce-820d-1576b4eb96d3',
      provider: 'primer',
      isDisplayPricePlan: true,
      displayPlanPrice: '$29.90',
    },
    cid: '23c7cdcf-4d90-4ea1-aab0-c73f8426dc1d',
    marketing: {
      utmParams: { utm_chat: 'db-sales-nopresetquestions' },
      lastUtmParams: { utm_chat: 'db-sales-nopresetquestions' },
      screen: {
        width: 2084,
        height: 1608,
      }
    },
    eid: '23c7cdcf-4d90-4ea1-aab0-c73f8426dc1d_PageView_1694521420366',
  },
  app: {
    aiProfile: {
      name: 'Meal Mentor',
      role: 'AI-powered nutritionist',
      imgSrc: 'https://storage.1forfit.com/4oZrkOwbOQcSIGJopBG5qsf0CmBbVDKDqflzEkXq.jpg',
      displayInStream: true,
      initialMessage: 'Hi, {I am Meal Mentor}. I will help you to find the right meal plan for you. [Continue]',
    },
    themeId: 'light',
    translations: {
      emailPlaceholder: 'Please enter your email',
      tm526: 'Continue to my plan',
      tm715: 'Enter new email',
      tm716: 'Entered email already exists, choose below to proceed',
      tm530: 'Take the quiz',
      tm1224: 'Payment in progress...',
      // tm566 -> removing backEndVars undefined variable
      subscriberBillingFrequency: 'Billed every {1} month(s)',
      // tm241 -> removing backEndVars undefined variable
      oneTimer: 'Total price to be charged',
      billingFrequencyTmsg: '',
      paymentHeaderTxt1: '<span class="font-bold block text-tau">SECURITY</span> verified',
      paymentHeaderTxt2: 'secured payments',
      loaderTexts: [
        'We securely lock up your payment details.',
        'Details zoom to the payment center.',
        'Payment center requests our bank to process.',
        'Our bank contacts your card network.',
        'Card network asks your bank for approval.',
        'Your bank reviews funds or credit.',
        'Decision travels back to us.',
        'Waiting your payment to be verified and complete.'
      ],
      payButton: 'Secure payment'
    }
  },
};

export const ReactBotClient = (config) => {
  ReactDOM
    .createRoot(config.root)
    .render(
      <Provider store={ store }>
        <AppBase config={ config.initialConfig || initialConfig } />
      </Provider>
    );
};

export default ReactBotClient;
