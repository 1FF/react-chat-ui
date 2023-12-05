import { intent } from './main';

export const initialConfig = {
  meta: {
    pd: {
      subscriberBillingFrequency: 'Billed every {1} month(s)',
      oneTimer: 'Total price to be charged',
      billingFrequencyTmsg: '',
    },
    cid: '23c7cdcf-4d90-4ea1-aab0-c73f8426dc1d',
    systemType: 'test',
    region: 'frankfurt',
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
      welcome: 'Welcome to our live support. We\'re here to understand your requirements and suggest the best Keto diet suited for you.',
      // initialMessage: 'Hi, {I am Meal Mentor}. I will help you to find the right meal plan for you. [yes|no|continue]',
      initialMessage: 'Do you want to lose weight? [Yes|No]',
    },
    chatUrl: 'https://yourketo.ngrok.io',
    themeId: 'dark',
    translations: {
      emailPlaceholder: 'Please enter your email',
      tm526: 'Continue to my plan',
      tm715: 'Enter new email',
      tm716: 'Entered email already exists, choose below to proceed',
      tm530: 'Take the quiz',
      tm1224: 'Payment in progress...',
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
      payButton: 'Secure payment',
      ctaTextContent: 'Create Your Menu!',
      mealButton: 'Create your meal plan',
      error: 'Oops something went wrong.',
      tm505: 'Please enter valid email address',
    }
  },
};

export const history = [
  {
    role: 'assistant',
    content: 'Do you want to lose weight?\n[Yes|No]',
    time: 1700119723000
  },
  {
    role: 'user',
    content: 'no',
    time: 1700119723000
  },
  {
    role: 'assistant',
    content: 'How are you?',
    time: 1700119723000
  },
  {
    role: 'user',
    content: 'Good',
    time: 1700119723000
  },
];

export const historyWithLink = [
  ...history,
  {
    role: 'assistant',
    content: 'Hello this is a link to a website https://test123.com',
    time: 1700119723000
  },
];

export const historyWithEmailIntent = [
  ...history,
  {
    role: 'assistant',
    content: `Please enter [${intent.type.email}]`,
    time: 1700119723000
  },
];

export const historyWithPaymentIntent = [
  ...history,
  {
    role: 'assistant',
    content: `Ready for test payment [${intent.type.payment}]`,
    time: 1700119723000
  },
];

export const streamedMessage = 'That\'s a fantastic goal! Our plan includes over 300+ delicious recipes. Do you have a favorite type of meal you\'re hoping to find Keto-friendly versions of? [Breakfast recipes|Lunch recipes|Dinner recipes|Snack recipes|All of them!]'.split(' ');

export const streamedMessageWithLink = 'Thank you for providing all the necessary details! Based on your preferences, our personalized Mediterranean meal plan could be ideal for you! Explore more at https://test.test.test/'.split(' ');

export const streamedMessageWithEmailIntent = `Provide me your email [${intent.type.email}]`.split(' ');

export const streamedMessageWithPaymentIntent = `Payment [${intent.type.payment}]`.split(' ');

export const pd = {
  amount: '29.90',
  amountInUSD: 29.9,
  frequency: 1,
  frequencyInMonths: 1,
  billingOptionType: 'subscription',
  isDisplayPricePlan: true,
  displayPlanPrice: '$29.90'
};
