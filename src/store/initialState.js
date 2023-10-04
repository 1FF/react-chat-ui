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

export default { meta, config, stream };
