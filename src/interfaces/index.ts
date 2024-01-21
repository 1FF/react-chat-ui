import { Definition, Roles, Theme } from '../config/enums';

export interface TextMessage {
  type: 'text';
  text: string;
}

export interface ButtonsMessage {
  type: 'buttons';
  buttons: Array<ButtonOptions>;
}

export interface PaymentMessage {
  type: 'payment';
  payment: string;
}

export interface EmailMessage {
  type: 'email';
  email: string;
}
interface VideoProps {
  url: string;
  title: string | null;
};
export interface VideoMessage {
  type: 'video';
  video: VideoProps
}

interface ImageProps {
  url: string;
  alt: string | null
}
export interface ImageMessage {
  type: 'image';
  image: ImageProps
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

export interface AssistantProps {
  message: { content: Array<AssistantMessageTypeUnion> };
  isLast?: boolean;
}
export interface PossibleProps {
  //assistant
  type?: Definition.text | Definition.video | Definition.image | Definition.buttons | Definition.payment | Definition.email;
  sequence: number;
  text?: string;
  video?: VideoProps;
  image?: ImageProps;
  buttons?: Array<ButtonOptions>;
  email?: string;
  payment?: string;

  //user
  groupId?: string;
  sent?: boolean;
  resend?: boolean;
  message?: string;
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
  historyData: Record<string, {
    id: string,
    role: Roles.assistant | Roles.user;
    content: Array<PossibleProps>
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

export type PredefinedMessagePayload = {
  content: string,
  buttons?: Array<ButtonOptions>,
}

export type UserMessageContent = {
  groupId: string, sent: boolean, resend: boolean, message: string, sequence: number
}

export interface UserHistoryData {
  id: string;
  role: Roles.user;
  content: Array<UserMessageContent>
}

export interface UserHistoryDataFiller {
  id: string;
  role: Roles.user;
  sequence: number
  content: UserMessageContent
}


export interface AssistantHistoryDataFiller {
  id: string;
  sequence: number;
  content: MessageTypes;
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


type MessageTypeMap = {
  text: TextMessage;
  buttons: ButtonsMessage;
  payment: PaymentMessage;
  email: EmailMessage;
  video: VideoMessage;
  image: ImageMessage;
};

// export type mapwithdynamicprops = {
//   [K in keyof MessageTypeMap]: MessageTypeMap[K];
// };

interface BaseStream {
  id: string
  role: Roles.assistant,
  sequence: number
}

interface MessageTypes {
  type: Definition.text | Definition.video | Definition.image | Definition.buttons | Definition.payment | Definition.email;
  sequence: number;
  text?: string;
  video?: VideoProps;
  image?: ImageProps;
  buttons?: Array<ButtonOptions>;
  email?: string;
  payment?: string;
}

export type StreamData = BaseStream & MessageTypes
