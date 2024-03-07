import { AllEvents } from '../config/enums';

type trackingData = {
  eventType: AllEvents | string;
  systemType: string;
  utmParams: {[key:string]: string};
  customerUuid: string;
  email?: string;
  phone?: string;
};

export const track = ({
  eventType,
  systemType,
  utmParams,
  customerUuid,
  email,
  phone,
}: trackingData): void => {
  if (window.trackEventInGTM && window.tracking) {
    const event = window.tracking.event({
      eventType,
      systemType,
      uri: window.location.pathname,
      domain: window.location.hostname,
      customerUuid,
      email: email || null,
      phone: phone || null,
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
  interface Window {
    tracking: {
      event: (data: {
        eventType: string;
        systemType: string;
        uri: string;
        domain: string;
        customerUuid: string;
        additionalData: object;
        utmParams: {[key:string]: string};
        email?: string | null;
        phone?: string | null;
      }) => string;
      trackClient: (event: string) => void;
    };
    trackEventInGTM: (data: string) => void;
  }
}

window.tracking = window.tracking || null;
window.trackEventInGTM = window.trackEventInGTM || null;
