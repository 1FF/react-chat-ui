import roles from '../config/roles';

export interface BaseMessage {
  sequence: number;
  id: string;
  role: roles.user | roles.assistant;
  // TODO rethink why we use content currently is for user messages that are set upon input or else
  content?: {
    type: string;
    image: string;
    sequence: string;
    id: string;
  };
  groupId?: string;
}

interface TextMessage extends BaseMessage {
  type: 'text';
  text: string;
}

export interface ButtonOptions {
  sequence: number; value: string; text: string; id: string; link: string; noStream: boolean;
}

export interface ButtonsMessage extends BaseMessage {
  type: 'buttons';
  buttons: ButtonOptions[];
}

export interface PaymentMessage extends BaseMessage {
  type: 'payment';
  payment: string;
}

export interface EmailMessage extends BaseMessage {
  type: 'email';
  email: string;
}

export interface VideoMessage extends BaseMessage {
  type: 'video';
  video: {
    url: string, title: string | null
  };
  title: string;
}

export interface ImageMessage extends BaseMessage {
  type: 'image';
  image: { url: string, alt: string | null };
}

export type MessageType = TextMessage | ButtonsMessage | PaymentMessage | EmailMessage | VideoMessage | ImageMessage;

export interface AssistantProps {
  message: Array<MessageType>;
  isLast?: boolean;
}

export interface ChatState {
  outgoing: {
    term: string,
    user_id: string,
    role: roles.user,
    message: string,
  },
  //TODO: define those below
  queue: any[],
  history: any[],
  historyData: Record<string, Array<MessageType>>;
  historyIds: string[],

  error: string,
  isLoading: boolean,
  typingTimeoutExpired: boolean,
  lastGroupId: string,
  connected: boolean,
  closed: boolean,
  isStreaming: boolean,
}

export interface UserHistoryData {
  id: string;
  role: roles.user;
  // TODO define user history data item
  content: Array<MessageType>;
  groupId: string;
  resend: boolean;
  sent: boolean;
}

export interface AssistantHistoryData {
  id: string;
  role: roles.assistant;
  // TODO: define all possible types
  type: string;
  content: Array<MessageType>;
}


export type PredefinedMessagePayload = {
  content: string,
  buttons?: ButtonOptions[],
}
