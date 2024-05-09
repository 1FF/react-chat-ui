import { Roles, Theme } from '../config/enums';
import { ChatState, ConfigState, IntentionsState, MetaState } from '../interfaces/store';
import { uuidV4 } from '../utils';

export const meta: MetaState = {
  cid: '',
  eid: '',
  region: '',
  systemType: '',
  pd: {},
  marketing: {
    screen: {},
    lastUtmParams: {},
    utmParams: {},
  },
};

export const config: ConfigState = {
  aiProfile: {
    name: '',
    role: '',
    imgSrc: '',
    welcome: '',
    initialMessage: [],
  },
  close: {
    href: null,
    visible: false,
  },
  translations: {},
  themeId: Theme.light,
  chatUrl: '',
  enableDevTools: false,
  isPluginMode: false,
  purpose: 'default',
  specialUrls: {},
  mediaModal: {
    isVisible: false,
    code: '',
    image: '',
    title: '',
  },
};

export const chat: ChatState = {
  outgoing: {
    term: '',
    user_id: '',
    role: Roles.user,
    message: '',
  },
  error: '',
  isLoading: false,
  typingTimeoutExpired: false,
  lastGroupId: uuidV4(),
  connected: false,
  closed: false,
  record: {},
  thread: {},
};

export const intentions: IntentionsState = {
  email: {
    current: '',
    success: false,
    error: false,
    isLoading: false,
  },
  response: {
    isFormVisible: false,
    error: false,
  },
  payment: {
    isButtonVisible: false,
    isFormVisible: false,
    isSuccessful: false,
    error: false,
  },
  messaging: {
    isVisible: false,
  },
  link: '',
};

export default { meta, config, intentions, chat };
