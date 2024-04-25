import { AssistantRecord } from '../interfaces/index';
import { getQueryParam, uuidV4 } from '../utils';
import { Definition, QueryParams, Roles } from './enums';
import { SPECIAL_MERCHANT, SPECIAL_SUPPORT_TICKET } from './env';
export { Events, Roles } from './enums';
export { config } from './socket';

export const textOnly = [
  {
    id: uuidV4(),
    role: Roles.assistant,
    time: new Date().getTime(),
    content: [{ type: 'text', text: 'Do you want to lose weight?', sequence: 2 }],
  },
];

export const initialMessage = [
  {
    id: uuidV4(),
    role: Roles.assistant,
    time: new Date().getTime(),
    content: [
      { type: 'text', text: 'See this picture', sequence: 2 },
      { type: 'text', text: 'See this picture', sequence: 2 },
      {
        type: 'text',
        text: 'My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").',
        sequence: 2,
      },
      {
        type: 'image',
        image: {
          url: 'https://static.boredpanda.com/blog/wp-content/uploads/2016/08/wet-dogs-before-after-bath-fb6__700-png.jpg',
        },
        sequence: 1,
      },
      {
        type: 'video',
        video: { url: 'https://www.youtube.com/embed/ZwKhufmMxko' },
        sequence: 1,
      },
    ],
  },
  {
    id: uuidV4(),
    role: Roles.assistant,
    time: new Date().getTime(),
    content: [
      { type: 'text', text: 'Do you want to lose weight?', sequence: 2 },
      {
        type: 'buttons',
        sequence: 1,
        buttons: [
          { value: 'Yes', sequence: 1, text: 'Yes' },
          { value: 'No', sequence: 2, text: 'No' },
        ],
      },
    ],
  },
];

interface InitiationConfig {
  id: string;
  purpose?: string;
  close: { href?: string; visible?: boolean };
  configuredMessage: Array<any>;
}

export const chat = ({ id, purpose, close, configuredMessage }: InitiationConfig) => ({
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
      utmParams: { utm_chat: getQueryParam(QueryParams.chat) },
      lastUtmParams: { utm_chat: getQueryParam(QueryParams.chat) },
      screen: {
        width: 2084,
        height: 1608,
      },
    },
    eid: '23c7cdcf-4d90-4ea1-aab0-c73f8426dc1d_PageView_1694521420366',
  },
  app: {
    aiProfile: {
      name: 'Meal Mentor',
      role: 'AI-powered nutritionist',
      imgSrc: 'https://storage.1forfit.com/lGbeX4lzNpWGyywHuJxMdegZ6My040jsvtVwZqBv.png',
      welcome:
        "Welcome to our live support. We're here to understand your requirements and suggest the best Keto diet suited for you.",
      initialMessage: configuredMessage || initialMessage,
    },
    chatUrl: 'https://chat-ws.test',
    purpose: purpose || 'default',
    themeId: 'dark',
    translations: {
      emailPlaceholder: 'Please enter your email',
      tm526: 'Continue to my plan',
      tm715: 'Enter new email',
      tm716: 'Entered email already exists, choose below to proceed',
      tm530: 'Take the quiz',
      tm1224: 'Payment in progress...',
      tm1226: 'Payment succeeded!',
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
        'Waiting your payment to be verified and complete.',
      ],
      payButton: 'Secure payment',
      ctaTextContent: 'Create Your Menu!',
      mealButton: 'Create your meal plan',
      error: 'Oops something went wrong.',
      tm505: 'Please enter valid email address',
      supportButton: 'backEndVars.supportButton',
      merchantButton: 'backEndVars.merchantButton',
    },
    close: {
      href: close.href || '/',
      visible: close.visible || true,
    },
  },
  specialUrls: {
    [SPECIAL_MERCHANT]: '/',
    [SPECIAL_SUPPORT_TICKET]: '/',
  },
});

export const paymentData = {
  amount: '29.90',
  amountInUSD: 29.9,
  frequency: 1,
  frequencyInMonths: 1,
  billingOptionType: 'subscription',
  isDisplayPricePlan: true,
  displayPlanPrice: '$29.90',
};

export const getUnifiedSequence = (current: Array<AssistantRecord>, incoming: AssistantRecord) => {
  return current.map((record: AssistantRecord) => {
    const hasMatch = record.sequence === incoming.sequence && record.type === incoming.type;

    if (hasMatch && record.type === Definition.text && incoming.text) {
      return { ...record, text: record.text + incoming.text };
    }

    if (hasMatch && record.type === Definition.buttons && incoming?.buttons?.length && record?.buttons?.length) {
      return { ...record, buttons: [...record.buttons, ...incoming.buttons] };
    }

    return record;
  });
};
