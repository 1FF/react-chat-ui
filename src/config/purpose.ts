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

const chatbotPurpose: Record<string, ChatbotOptions> = {
  default: defaultOptions,
};

export default chatbotPurpose;
