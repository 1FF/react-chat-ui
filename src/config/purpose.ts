export interface ChatbotOptions {
  cta: boolean;
  close: boolean;
  payment: boolean;
  response: boolean;
  email: boolean;
}

const defaultOptions: ChatbotOptions = {
  cta: true,
  close: true,
  payment: true,
  response: true,
  email: true,
};

const supportOptions: ChatbotOptions = {
  ...defaultOptions,
  cta: false,
};

const chatbotPurpose: Record<string, ChatbotOptions> = {
  default: defaultOptions,
  support: supportOptions,
};

export default chatbotPurpose;
