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

interface ChatbotPurpose {
  [key: string]: object;
}

export default {
  default: defaultOptions,
};
