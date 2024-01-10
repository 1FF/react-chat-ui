import { uid } from 'uid';

export const meta = {
  pd: null,
  cid: null,
  eid: null,
  region: null,
  systemType: null,
  marketing: {},
};

export const config = {
  aiProfile: {
    name: null,
    role: null,
    imgSrc: null,
    initialMessage: '',
  },
  translations: {},
  themeId: null,
  chatUrl: null,
  enableDevTools: false,
  isPluginMode: false,
  purpose: 'default'
};

export const chat = {
  outgoing: null,
  queue: [],
  history: [],
  historyData: {},
  historyIds: [],
  error: null,
  isLoading: false,
  typingTimeoutExpired: false,
  lastGroupId: uid(),
  connected: false,
  closed: false,
  isStreaming: false,
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

export default { meta, config, intentions, chat };
