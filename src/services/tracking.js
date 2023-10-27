/* eslint-disable no-undef */
// eslint-disable-next-line import/prefer-default-export
export const track = ({ eventType, systemType, utmParams, customerUuid, email, phone }) => {
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
