enum Definition {
  text = 'text',
  buttons = 'buttons',
  payment = 'payment',
  video = 'video',
  image = 'image',
  email = 'email',
  special = 'special',
}

enum ScreenOrientation {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

enum QueryParams {
  chat = 'utm_chat',
}

enum AllEvents {
  addToCart = 'AddToCart',
  contact = 'Contact',
  initiateCheckout = 'InitiateCheckout',
  pageView = 'PageView',
  viewContent = 'ViewContent',
  purchase = 'Purchase',
  subscribe = 'Subscribe',
  recurringSubscriptionPayment = 'RecurringSubscriptionPayment',
  cancelSubscription = 'CancelSubscription',
  purchaseFailed = 'PurchaseFailed',
  subscribeFailed = 'SubscribeFailed',
  recurringSubscriptionPaymentFailed = 'RecurringSubscriptionPaymentFailed',
  customerCreated = 'CustomerCreated',
  subscriptionChargeback = 'SubscriptionChargeback',
  subscriptionRefund = 'SubscriptionRefund',
  transactionChargeback = 'TransactionChargeback',
  transactionRefund = 'TransactionRefund',

  // custom events
  firstMessage = 'FirstMessage',
  linkProvided = 'LinkProvided',
  linkClicked = 'LinkClicked',
  emailField = 'EmailField',
  emailEntered = 'EmailEntered',
  emailWrong = 'EmailWrong',
  emailExist = 'EmailExist',
  priceSeen = 'PriceSeen',
  buttonClick = 'ButtonClick',
  closeClicked = 'CloseClicked',
}

enum Intentions {
  email = 'email_intent',
  payment = 'payment_intent',
  emailError = 'email_validation_error',
  emailSuccess = 'email_validation_success',
  destroy = 'payment_intent_destroy',
}

enum Roles {
  user = 'user',
  assistant = 'assistant',
}

enum Events {
  chat = 'chat',
  chatHistory = 'chat-history',
  connect = 'connect',
  error = 'error',
  disconnect = 'disconnect',
  streamStart = 'stream-start',
  streamData = 'stream-data',
  streamEnd = 'stream-end',
  streamError = 'stream-error',
}

enum Theme {
  light = 'light',
  dark = 'dark',
}

export { AllEvents, Definition, Events, Intentions, QueryParams, Roles, ScreenOrientation, Theme };
