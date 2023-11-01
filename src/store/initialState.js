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
  connected: false,
  closed: false,
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
