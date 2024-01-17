import { uid } from 'uid';
import { roles } from '../config';
import { ChatState, ConfigState, IntentionsState, MetaState } from '../interfaces';

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
  themeId: 'light',
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
    role: roles.user,
    message: ''
  },
  queue: [],
  history: [],
  historyData: {},
  historyIds: [],
  error: '',
  isLoading: false,
  typingTimeoutExpired: false,
  lastGroupId: uid(),
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
