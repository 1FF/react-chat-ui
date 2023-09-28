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
  devToolsEnabled: process.env.NODE_ENV === 'development',
};

export default { meta, config };
