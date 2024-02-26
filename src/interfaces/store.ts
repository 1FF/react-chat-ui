import { AssistantMessageTypeUnion, MessageProperties } from ".";
import { Roles, Theme } from "../config/enums";

export interface ChatState {
  outgoing: {
    term: string,
    user_id: string,
    role: Roles.user,
    message: string,
  },
  historyData: Record<string, {
    id: string,
    role: Roles.assistant | Roles.user,
    time?: number,
    content: Array<MessageProperties>
  }>;
  historyIds: Array<string>,
  error: string,
  isLoading: boolean,
  typingTimeoutExpired: boolean,
  lastGroupId: string,
  connected: boolean,
  closed: boolean,
  isStreaming: boolean,
}

export interface ConfigState {
  aiProfile: {
    name: string,
    role: string,
    imgSrc: string,
    welcome: string,
    // initialMessage: 'Hi, {I am Meal Mentor}. I will help you to find the right meal plan for you. [yes|no|continue]',
    initialMessage: Array<AssistantMessageTypeUnion>
  },
  purpose: string,
  chatUrl: string,
  themeId: Theme.light | Theme.dark,
  translations: any,
  closeVisible: boolean,
  enableDevTools: boolean,
  isPluginMode: boolean,
}

export interface MetaState { systemType: string, eid: string, cid: string, region: string, marketing: any, pd: any }

export interface IntentionsState {
  email: {
    current: string,
    success: boolean,
    error: boolean,
    isFormVisible: boolean,
    isLoading: boolean,
  },
  response: {
    value: string,
    isFormVisible: boolean,
    isLoading: boolean,
    error: boolean,
  },
  payment: {
    isButtonVisible: boolean,
    isFormVisible: boolean,
    isSuccessful: boolean,
    error: boolean
  },
  messaging: {
    isVisible: boolean
  },
  link: {
    isVisible: boolean,
    href: string,
    text: string
  }
}
