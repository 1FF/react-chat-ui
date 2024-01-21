import { Definition, Roles, Theme } from '../config/enums';

export interface TextMessage {
  type: Definition.text;
  text: string;
}

export interface ButtonsMessage {
  type: Definition.buttons;
  buttons: Array<ButtonOptions>;
}

export interface PaymentMessage {
  type: Definition.payment;
  payment: string;
}

export interface EmailMessage {
  type: Definition.email;
  email: string;
}

export interface VideoMessage {
  type: Definition.video;
  video: {
    url: string;
    title: string | null;
  };
}

export interface ImageMessage {
  type: Definition.image;
  image: {
    url: string;
    alt: string | null;
  };
}

export interface ButtonOptions {
  sequence: number;
  value: string;
  text: string;
  id: string;
  link: string;
  noStream: boolean;
}

export interface BaseOptions extends ButtonOptions {
  id: string, link: string, noStream: boolean
}

export interface OptionsListProps {
  options: Array<BaseOptions>
}

export type AssistantMessageTypeUnion = TextMessage | ButtonsMessage | EmailMessage | VideoMessage | ImageMessage | PaymentMessage;

export interface AssistantHistoryData {
  id: string;
  role: Roles.assistant;
  content: Array<AssistantMessageTypeUnion>
}

export type SupportedMessageTypes = Definition.text | Definition.buttons | Definition.payment | Definition.email | Definition.video | Definition.image;

export type StreamData = {
  id: string
  role: Roles.user | Roles.assistant,
  type: SupportedMessageTypes,
  sequence?: number
}

export interface AssistantProps {
  message: { content: Array<AssistantMessageTypeUnion> };
  isLast?: boolean;
}

export interface ChatState {
  outgoing: {
    term: string,
    user_id: string,
    role: Roles.user,
    message: string,
  },
  //TODO: define those below
  queue: any[],
  history: any[],
  historyData: Record<string, AssistantHistoryData | UserHistoryData>;
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

export type PredefinedMessagePayload = {
  content: string,
  buttons?: Array<ButtonOptions>,
}

export type UserMessageContent = {
  groupId: string, sent: boolean, resend: boolean, message: string
}

export interface UserHistoryData {
  id: string;
  role: Roles.user;
  content: Array<UserMessageContent>
}

export interface UserHistoryDataFiller {
  id: string;
  role: Roles.user;
  content: UserMessageContent
}


export interface AssistantHistoryDataFiller {
  id: string;
  content: AssistantMessageTypeUnion;
}


export interface ClientMessage {
  role: Roles.assistant | Roles.user;
  term: string;
  user_id: string;
  message: string;
  messageId: string;
  region: string;
}

export interface PaymentDataSetterProps {
  billingFrequencyTmsg: string, billingOptionType: 'one-time' | 'subscription', frequencyInMonths: string
}

export type PaymentDataSetter = (data: PaymentDataSetterProps) => PaymentDataSetterProps;
