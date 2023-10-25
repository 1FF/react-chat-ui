import { baseEventsArr, customEventsArr } from '@/config/analytics';

const baseEvents = baseEventsArr.reduce((acc, cur) => {
  acc[cur] = { executed: false };
  return acc;
}, {});

const customEvents = customEventsArr.reduce((acc, cur) => {
  acc[cur] = { executed: false };
  return acc;
}, {});

export const meta = {
  pd: null,
  cid: null,
  eid: null,
  systemType: null,
  marketing: {},
};

export const config = {
  aiProfile: {
    name: null,
    role: null,
    imgSrc: null,
    initialMessage: '',
    displayInStream: false,
  },
  translations: {
    emailPlaceholder: '',
    tm526: '',
    tm715: '',
    tm716: '',
  },
  themeId: null,
  chatUrl: null,
  enableDevTools: false,
  isPluginMode: false,
  connectedToSocket: false,
};

export const stream = {
  upstreamQueue: null,
  downstreamQueue: null,
  textToParse: '',
  history: [],
  status: null,
  error: null,
  isLoading: false,
};

export const intentions = {
  email: {
    success: false,
    error: false,
    isFormVisible: false,
    currentEmail: '',
    isLoading: false,
  },
  response: {
    value: '',
    isFormVisible: false,
    isLoading: false,
    error: false,
  },
  payment: {
    isPaymentButtonVisible: false,
    isPaymentFormVisible: false,
    isPaymentSuccessful: false
  },
  messaging: {
    isVisible: false
  },
  link: {
    isVisible: false,
    href: null,
    text: ''
  }
};

export const analytics = {
  events: {
    ...baseEvents,
    ...customEvents,
  }
};

export default { meta, config, analytics, intentions, stream };
