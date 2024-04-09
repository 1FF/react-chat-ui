import { Roles, Theme } from '../config/enums';
import { SpecialUrls } from '../interfaces/component';
import { AssistantMessageTypeUnion, MessageProperties } from '.';

export interface ChatState {
  outgoing: {
    term: string;
    user_id: string;
    role: Roles.user;
    message: string;
  };
  historyData: Record<
    string,
    {
      id: string;
      role: Roles.assistant | Roles.user;
      time?: number;
      content: Array<MessageProperties>;
    }
  >;
  historyIds: Array<string>;
  error: string;
  isLoading: boolean;
  typingTimeoutExpired: boolean;
  lastGroupId: string;
  connected: boolean;
  closed: boolean;
  isStreaming: boolean;
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
    current: string,
    success: boolean,
    error: boolean,
    // isFormVisible: boolean,
    isLoading: boolean,
  },
  response: {
    // value: string,
    isFormVisible: boolean,
    // isLoading: boolean,
    error: boolean,
  },
  payment: {
    isButtonVisible: boolean;
    isFormVisible: boolean;
    isSuccessful: boolean;
    error: boolean;
  };
  messaging: {
    isVisible: boolean;
  };
  link: string
}
