import { faker } from '@faker-js/faker';
import { colors as baseThemeColors } from './themes/base';
import roles from './roles';

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
    region: null,
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
    purpose: 'default',
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
  //  {
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

export const streamMocks = {
  text: [
    { type: 'text', text: '', id: 'test', time: new Date().getTime(), errors: [] },
    { type: 'text', text: 'Hello ', sequence: 6, id: 'test', time: new Date().getTime(), errors: [] },
    { type: 'text', text: 'Hello ', sequence: 6, id: 'test', time: new Date().getTime(), errors: [] },
    { type: 'text', text: 'Hello ', sequence: 6, id: 'test', time: new Date().getTime(), errors: [] },
    { type: 'text', text: 'Hello ', sequence: 6, id: 'test', time: new Date().getTime(), errors: [] },
    { type: 'text', text: 'Hello ', sequence: 6, id: 'test', time: new Date().getTime(), errors: [] },
    { type: 'text', text: 'My favorite search engine is [Duck Duck Go](https://duckduckgo.com). [Google](https://google.com).', sequence: 2, id: 'test', errors: [] },
    { type: 'text', text: '', id: 'test', time: new Date().getTime(), errors: [] },
  ],
  buttons: [
    { type: 'buttons', buttons: [], id: 'test', time: new Date().getTime(), errors: [] },
    {
      type: 'buttons',
      buttons: [{ sequence: 1, value: 'Okay', text: 'option 1' }, { sequence: 2, value: 'Goodbye', text: 'option 2' }],
      sequence: 1,
      id: 'test',
      errors: [],
    },
    {
      type: 'buttons',
      buttons: [{ sequence: 1, value: 'Okay', text: 'option 1' }, { sequence: 2, value: 'Goodbye', text: 'option 2' }, { sequence: 3, value: 'Goodbye', text: 'option 3' }],
      sequence: 2,
      id: 'test',
      errors: [],
    },
    { type: 'buttons', buttons: [], id: 'test', time: new Date().getTime(), errors: [] },
  ],
  video: [
    {
      type: 'video',
      video: { url: 'https://www.youtube.com/embed/edAHDU8n1dQ?si=0y4khjCKGaprRrYQ' },
      sequence: 2,
      id: 'test'
    },],
  email: [
    { type: 'email', email: 'Email', sequence: 1, id: 'test', errors: [] },
    { type: 'email', email: 'Email', sequence: 1, id: 'test', errors: [] },
    { type: 'email', email: 'Email', sequence: 1, id: 'test', errors: [] },
  ],
  payment: [
    { type: 'payment', payment: 'payment', sequence: 1, id: 'test', errors: [] },
    { type: 'payment', payment: 'Continue by getting the best plan that suits you with customizing it for:', sequence: 2, id: 'test', errors: [] },
    { type: 'payment', payment: 'payment', sequence: 3, id: 'test', errors: [] },
  ],
  image: [{
    type: 'image',
    image: { url: 'https://static.boredpanda.com/blog/wp-content/uploads/2016/08/wet-dogs-before-after-bath-fb6__700-png.jpg' },
    sequence: 38,
    id: 'test'
  }],
};

const contentMock = [
  { type: 'text', text: 'hello', role: roles.assistant, sequence: 1, time: 1700119723000 },
  { type: 'buttons',
    role: roles.assistant,
    buttons: [
      { sequence: 1, value: 'Okay', text: 'option 1' },
      { sequence: 2, value: 'Goodbye', text: 'option 2' }],
    sequence: 2,
    time: 1700119723000
  }];

export const serverHistoryMock = [
  { id: faker.string.uuid(), role: 'assistant', content: contentMock },
  { id: faker.string.uuid(), role: 'user', content: 'user test' },
  { id: faker.string.uuid(), role: 'assistant', content: contentMock },
  { id: faker.string.uuid(), role: 'user', content: 'user test' },
  { id: faker.string.uuid(), role: 'assistant', content: contentMock },
  { id: faker.string.uuid(), role: 'user', content: 'user test' },
  { id: faker.string.uuid(), role: 'assistant', content: contentMock },
];

export const serverHistoryMockWithLink = [
  ...serverHistoryMock,
  { id: faker.string.uuid(), role: 'assistant', content: [{ type: 'text', text: 'hello [test](https://test.com).', role: roles.assistant, sequence: 1, time: 1700119723000 }] }
];

export const serverHistoryMockWithEmailIntent = [
  ...serverHistoryMock,
  { id: faker.string.uuid(), role: 'assistant', content: [{ type: 'email', email: 'Give us email', role: roles.assistant, sequence: 1, time: 1700119723000 }] }
];

export const serverHistoryMockWithPaymentIntent = [
  ...serverHistoryMock,
  { id: faker.string.uuid(), role: 'assistant', content: [{ type: 'payment', payment: 'Give us email', role: roles.assistant, sequence: 1, time: 1700119723000 }] }
];

export const typeReducer = {
  text: (initial, current) => ({
    ...initial,
    ...current,
    text: initial.text + current.text
  }),
  buttons: (initial, current) => ({
    ...initial,
    ...current,
    buttons: [...initial.buttons, ...current.buttons]
  }),
  image: (initial, current) => ({
    ...initial,
    ...current,
    image: { ...initial.image, ...current.image }
  }),
  video: (initial, current) => ({
    ...initial,
    ...current,
    video: { ...initial.video, ...current.video }
  }),
  email: (initial, current) => ({
    ...initial,
    ...current,
    email: initial.email + current.email
  }),
  payment: (initial, current) => ({
    ...initial,
    ...current,
    payment: initial.payment + current.payment
  }),
};

export const initialStructure = {
  text: { type: 'text', text: '' },
  buttons: { type: 'buttons', buttons: [] },
  image: { type: 'image', image: {} },
  video: { type: 'video', video: {} },
  payment: { type: 'payment', payment: '' },
  email: { type: 'email', email: '' },
};

export default { colors };
