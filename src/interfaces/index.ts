import { Definition, Roles } from '../config/enums';

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
interface VideoProps {
  url: string;
  title: string | null;
}

export interface VideoMessage {
  type: Definition.video;
  video: VideoProps;
}

interface ImageProps {
  url: string;
  title: string;
  alt: string | null;
}
export interface ImageMessage {
  type: Definition.image;
  image: ImageProps;
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
  id: string;
  link: string;
  noStream: boolean;
}

export interface OptionsListProps {
  options: Array<BaseOptions> | undefined;
}

export type AssistantMessageTypeUnion =
  | TextMessage
  | ButtonsMessage
  | EmailMessage
  | VideoMessage
  | ImageMessage
  | PaymentMessage;

export type SupportedMessageTypes =
  | Definition.text
  | Definition.buttons
  | Definition.payment
  | Definition.email
  | Definition.video
  | Definition.image;

export interface AssistantRecord {
  type: SupportedMessageTypes;
  sequence: number;
  text?: string;
  video?: VideoProps;
  image?: ImageProps;
  buttons?: Array<ButtonOptions>;
  email?: string;
  payment?: string;

  groupId?: string;
  sent?: boolean;
  resend?: boolean;
}

export interface SocketHistoryRecord {
  id: string;
  role: string;
  time: number;
  content: Array<AssistantRecord>;
  groupId?: string;
  sent?: boolean;
  resend?: boolean;
}

export interface MessageProperties {
  id?: string;

  // assistant
  type?: SupportedMessageTypes;
  sequence?: number;
  text?: string;
  video?: VideoProps;
  image?: ImageProps;
  buttons?: Array<ButtonOptions>;
  email?: string;
  payment?: string;
  special?: string;

  // user
  groupId?: string;
  sent?: boolean;
  resend?: boolean;
  message?: string;
}

export type PredefinedMessagePayload = {
  content: string;
  buttons?: Array<ButtonOptions>;
};

export type UserMessageContent = {
  groupId: string;
  sent: boolean;
  resend: boolean;
  text: string;
  sequence: number;
};

export interface UserHistoryData {
  id: string;
  role: Roles.user;
  content: Array<UserMessageContent>;
}

export interface UserHistoryDataFiller {
  id: string;
  role: Roles.user;
  sequence: number;
  content: UserMessageContent;
  term: string;
}

export interface AssistantHistoryDataFiller {
  id: string;
  content?: AssistantRecord;
  sequence?: number;
  term: string;
}

export interface AssistantHistoryInitialMessage {
  id: string;
  content: Array<AssistantRecord>;
  sequence?: number;
}

export interface ClientMessage {
  role: Roles.assistant | Roles.user;
  term: string;
  userId: string;
  message: string;
  messageId: string;
  region: string;
}

export interface PaymentDataSetterProps {
  billingFrequencyTmsg: string;
  billingOptionType: 'one-time' | 'subscription';
  frequencyInMonths: string;
}

export type PaymentDataSetter = (data: PaymentDataSetterProps) => PaymentDataSetterProps;
