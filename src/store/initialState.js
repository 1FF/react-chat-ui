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
  translations: {},
  themeId: null,
  chatUrl: null,
  enableDevTools: false,
  isPluginMode: false,
  connectedToSocket: false,
};

export const chat = {
  outgoing: null,
  incoming: null,
  textToParse: '',
  history: [],
  status: null,
  error: null,
  isLoading: false,
  shouldSendUnsent: false,
  unsent: [],
};

export const intentions = {
  email: {
    current: '',
    success: false,
    error: false,
    isFormVisible: false,
    isLoading: false,
  },
  response: {
    value: '',
    isFormVisible: false,
    isLoading: false,
    error: false,
  },
  payment: {
    isButtonVisible: false,
    isFormVisible: false,
    isSuccessful: false,
    error: false
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

export default { meta, config, analytics, intentions, chat };
