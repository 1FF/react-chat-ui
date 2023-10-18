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
  enableDevTools: false,
  isPluginMode: false,
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
    isEmailFieldVisible: false,
    currentEmail: '',
    isLoading: false
  },
  payment: {
    isPaymentButtonVisible: false,
    isPaymentFormVisible: false,
    isPaymentSuccessful: false
  },
  messaging: {
    isVisible: false
  }
};

export const analytics = {
  events: {
    ...baseEvents,
    ...customEvents,
  }
};

export default { meta, config, analytics, intentions, stream };
