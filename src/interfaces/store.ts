import { Roles, Theme } from '../config/enums';
import { SpecialUrls } from '../interfaces/component';
import { AssistantMessageTypeUnion, MessageProperties, SocketHistoryRecord } from '.';

interface Outgoing {
  term: string;
  user_id: string;
  role: Roles.user;
  message: string;
}

export interface ChatRecord {
  id: string;
  role: string;
  time?: number;
  content: Array<MessageProperties>;
}

export interface ChatState {
  outgoing: Outgoing;
  error: string;
  isLoading: boolean;
  typingTimeoutExpired: boolean;
  lastGroupId: string;
  connected: boolean;
  closed: boolean;
  isStreaming: boolean;
  record: {
    [key: string]: {
      historyData: Record<string, ChatRecord>;
      historyIds: Array<string>;
    };
  };
  thread: {
    [key: string]: string;
  };
}

export interface ConfigState {
  aiProfile: {
    name: string;
    role: string;
    imgSrc: string;
    welcome: string;
    initialMessage: Array<AssistantMessageTypeUnion>;
  };
  close: {
    href: null | string;
    visible: boolean;
  };
  purpose: string;
  chatUrl: string;
  themeId: Theme.light | Theme.dark;
  translations: { [key: string]: string & { loaderMessages: Array<string> } };
  enableDevTools: boolean;
  isPluginMode: boolean;
  specialUrls: SpecialUrls;
  mediaModal: MediaModalProps;
}

export interface MediaModalProps {
  isVisible: boolean;
  code: string;
  image: string;
  title?: string;
}

export interface MetaState {
  systemType: string;
  eid: string;
  cid: string;
  region: string;
  marketing: {
    screen: { [key: string]: string };
    lastUtmParams: { [key: string]: string };
    utmParams: { [key: string]: string };
  };
  pd: { [key: string]: string };
}

export interface IntentionsState {
  email: {
    current: string;
    success: boolean;
    error: boolean;
    isLoading: boolean;
  };
  response: {
    isFormVisible: boolean;
    error: boolean;
  };
  payment: {
    isButtonVisible: boolean;
    isFormVisible: boolean;
    isSuccessful: boolean;
    error: boolean;
  };
  messaging: {
    isVisible: boolean;
  };
  link: string;
}

export interface ServerData {
  history: Array<SocketHistoryRecord>;
  errors: string[];
  region: string;
  term: string;
  threadId: string;
}
