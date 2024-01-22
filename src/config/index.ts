import { colors as baseThemeColors } from './themes/base';
import { Definition } from './enums';
import { PossibleProps } from '../interfaces/index';
export { Events, Roles } from './enums';
export { config } from './socket';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  'muted-blue': 'rgba(15, 14, 30, 0.6)',
  ...baseThemeColors,
};

export const chat = (id: string) => ({
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
      // initialMessage: [
      //   { type: 'text', text: '[Google](https://google.com). Do you want to lose weight?My favorite search engine is [Duck Duck Go](https://duckduckgo.com).', sequence: 6, id: '', time: new Date().getTime() },
      //   {
      //     type: 'buttons',
      //     buttons: [{ sequence: 1, value: 'Okay', text: 'option 1' }, { sequence: 2, value: 'Goodbye', text: 'option 2' }],
      //     sequence: 1,
      //     id: ''
      //   },
      // ],

      initialMessage: [
        {
          type: 'text',
          // text: '[Google](https://google.com). Do you want to lose weight?My favorite search engine is [Duck Duck Go](https://duckduckgo.com).',
          text: 'Hi, {I am Meal Mentor}. I will help you to find the right meal plan for you.',
          sequence: 6,
          id: 'asdaawe4534',
          time: new Date().getTime()
        },
        {
          type: "buttons",
          role: 'assistant',
          id: 'asdaawe4534',
          "buttons": [{ sequence: 1, value: 'Okay', text: 'Okay' }, { sequence: 2, value: 'Goodbye', text: 'Goodbye' }]
        }
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

export const typeReducer = {
  text: (initial: PossibleProps, current: PossibleProps): PossibleProps => {
    if (Definition.text in initial && Definition.text in current) {
      return {
        ...initial,
        ...current,
        text: (initial.text || '') + (current.text || ''),
      }
    }
    return current;
  },
  buttons: (initial: PossibleProps, current: PossibleProps): PossibleProps => {
    if (Definition.buttons in initial && Definition.buttons in current) {
      return {
        ...initial,
        ...current,
        buttons: [...(initial.buttons || []), ...(current.buttons || [])],
      }
    }
    return current;
  },
  image: (initial: PossibleProps, current: PossibleProps): PossibleProps => {
    if (initial.image && current.image) {
      return {
        ...initial,
        ...current,
        image: { ...initial.image, ...current.image }
      }
    }
    return current;
  },
  video: (initial: PossibleProps, current: PossibleProps): PossibleProps => {
    if (initial.video && current.video) {
      return {
        ...initial,
        ...current,
        video: { ...initial.video, ...current.video }
      }
    }
    return current;
  },
  email: (initial: PossibleProps, current: PossibleProps): PossibleProps => {
    if (initial.email && current.email) {
      return {
        ...initial,
        ...current,
        email: initial.email + current.email
      }
    }
    return current
  },
  payment: (initial: PossibleProps, current: PossibleProps): PossibleProps => {
    if (initial.payment && current.payment) {
      return {
        ...initial,
        ...current,
        payment: initial.payment + current.payment
      }
    }
    return current
  },
};

export const initialStructure = {
  text: { type: Definition.text, text: '', sequence: 0 },
  payment: { type: Definition.payment, payment: '', sequence: 0 },
  email: { type: Definition.email, email: '', sequence: 0 },
  image: { type: Definition.image, image: { url: '', alt: '', title: '' }, sequence: 0 },
  video: { type: Definition.video, video: { url: '', alt: '', title: '' }, sequence: 0 },
  buttons: { type: Definition.buttons, buttons: [], sequence: 0 },
};

export default { colors };
