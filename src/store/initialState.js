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
    displayInStream: false,
  },
  themeId: null,
  enableDevTools: false,
  isPluginMode: false,
};

export const stream = {
  streamPointer: null,
  queue: [],
  history: [],
  status: null,
  error: null,
};

export default { meta, config, stream };
