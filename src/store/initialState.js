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
  messaging: {
    isVisible: false
  }
};

export default { meta, config, stream, intentions };
