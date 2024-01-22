import { uuidV4 } from '../utils';
import { Roles, Theme } from '../config/enums';
import { ChatState, ConfigState, IntentionsState, MetaState } from '../interfaces/store';

export const meta: MetaState = {
  pd: '',
  cid: '',
  eid: '',
  region: '',
  systemType: '',
  marketing: {},
};

export const config: ConfigState = {
  aiProfile: {
    name: '',
    role: '',
    imgSrc: '',
    welcome: '',
    initialMessage: [],
  },
  translations: {},
  themeId: Theme.light,
  chatUrl: '',
  enableDevTools: false,
  isPluginMode: false,
  purpose: 'default',
  closeVisible: false,
};

export const chat: ChatState = {
  outgoing: {
    term: '',
    user_id: '',
    role: Roles.user,
    message: ''
  },
  // queue: [],
  historyData: {},
  historyIds: [],
  error: '',
  isLoading: false,
  typingTimeoutExpired: false,
  lastGroupId: uuidV4(),
  connected: false,
  closed: false,
  isStreaming: false,
};

export const intentions: IntentionsState = {
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
    href: '',
    text: ''
  }
};

export default { meta, config, intentions, chat };
