import { colors as baseThemeColors } from './themes/base';

export { config, events } from './socket';
export { roles } from './roles';
export { intentions } from './intentions';

export const dateFormattingOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

export const colors = {
  white: '#ffffff',
  black: '#000000',
  'muted-blue': 'rgba(15, 14, 30, 0.6)',
  ...baseThemeColors,
};

export const chat = (id) => ({
  meta: {
    cid: localStorage.getItem('__cid') || id,
    systemType: 'test',
    pd: {
      subscriberBillingFrequency: 'Billed every {1} month(s)',
      oneTimer: 'Total price to be charged',
      billingFrequencyTmsg: '',
    },
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
      initialMessage: [
        { type: 'text', text: '[Google](https://google.com). Do you want to lose weight?My favorite search engine is [Duck Duck Go](https://duckduckgo.com).', sequence: 6, id: '', time: new Date().getTime() },
        {
          type: 'buttons',
          buttons: [{ sequence: 1, value: 'Okay', text: 'option 1' }, { sequence: 2, value: 'Goodbye', text: 'option 2' }],
          sequence: 1,
          id: ''
        },
      ]
    },
    chatUrl: 'https://yourketo.ngrok.io',
    themeId: 'light',
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
    },
    closeVisible: true
  },
});

export const paymentData = {
  amount: '29.90',
  amountInUSD: 29.9,
  frequency: 1,
  frequencyInMonths: 1,
  billingOptionType: 'subscription',
  isDisplayPricePlan: true,
  displayPlanPrice: '$29.90'
};

export const streamMock = [
  { type: 'text', text: '', id: '', time: new Date().getTime() },
  {
    type: 'buttons',
    buttons: [{ sequence: 1, value: 'Okay', text: 'option 1' }, { sequence: 2, value: 'Goodbye', text: 'option 2' }],
    sequence: 1,
    id: ''
  },
  { type: 'text', text: 'Hello ', sequence: 6, id: '', time: new Date().getTime() },
  { type: 'text', text: 'My favorite search engine is [Duck Duck Go](https://duckduckgo.com). [Google](https://google.com).', sequence: 2, id: '' },
  // {
  //   type: 'image',
  //   image: { url: 'https://static.boredpanda.com/blog/wp-content/uploads/2016/08/wet-dogs-before-after-bath-fb6__700-png.jpg' },
  //   sequence: 38,
  //   id: ''
  // },
  { type: 'text', text: 'to ', sequence: 3, id: '' },
  { type: 'text', text: 'talk with I just love **bold text**.', sequence: 4, id: '' },
  { type: 'text', text: 'you', sequence: 5, id: '' },
  { type: 'text', text: 'you', sequence: 7, id: '' },
  { type: 'text', text: 'you', sequence: 8, id: '' },
  { type: 'text', text: 'you', sequence: 9, id: '' },
  { type: 'text', text: 'you', sequence: 10, id: '' },
  { type: 'text', text: 'you', sequence: 11, id: '' },
  { type: 'text', text: 'you', sequence: 12, id: '' },
  { type: 'text', text: 'you', sequence: 13, id: '' },
  { type: 'text', text: 'you', sequence: 14, id: '' },
  // {
  //   type: 'payment',
  //   payment: 'Continue by getting the best plan that suits you with customizing it for:',
  //   sequence: 1,
  //   id: ''
  // },
  // {
  //   type: 'email',
  //   email: 'Continue by entering your email so we could make the plan that you\'ve awaited:',
  //   sequence: 1,
  //   id: ''
  // },
  // {
  //   type: 'video',
  //   video: { url: 'https://www.youtube.com/embed/edAHDU8n1dQ?si=0y4khjCKGaprRrYQ' },
  //   sequence: 2,
  //   id: ''
  // },
];

export default { colors };
