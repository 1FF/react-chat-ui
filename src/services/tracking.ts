export enum AllEvents {
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
};

type trackingData = {
  eventType: AllEvents, systemType: string, utmParams: object, customerUuid: string, email?: string, phone?: string
};

export const track = ({ eventType, systemType, utmParams, customerUuid, email, phone }: trackingData): void => {
  if (window.trackEventInGTM && window.tracking) {
    const event = window.tracking.event({
      eventType,
      systemType,
      uri: window.location.pathname,
      domain: window.location.hostname,
      email: email || null,
      phone: phone || null,
      customerUuid,
      additionalData: {},
      utmParams,
    });

    window.tracking.trackClient(event);
    if (window.trackEventInGTM) {
      window.trackEventInGTM(event);
    }
  }
};


declare global {
  interface Window { tracking: any; trackEventInGTM: any; }
}

window.tracking = window.tracking || null;
window.trackEventInGTM = window.trackEventInGTM || null;
