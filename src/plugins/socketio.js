import { io } from 'socket.io-client';

let socket = null;
const webSocketServerUrl = import.meta.env.VITE_WEBSOCKET_URL;

if (
  webSocketServerUrl
) {
  socket = io.connect(webSocketServerUrl, {
    transports: ['websocket', 'polling'],
    upgrade: true,
    secure: true,
    reconnect: true,
  });
}

/**
   * Event constructor.
   *
   * @param trackingData
   */
const event = (trackingData = {}) => {
  const date = Date.now();

  return {
    id: trackingData.customerUuid + '_' + trackingData.eventType + '_' + date,
    type: trackingData.eventType,
    system: trackingData.systemType,
    uri: trackingData.uri,
    domain: trackingData.domain,
    email: trackingData.email,
    phone: trackingData.phone,
    customerUuid: trackingData.customerUuid,
    data: trackingData.additionalData,
    utmParams: trackingData.utmParams,
    createdAt: date,
  };
};

/**
   * Track all events via web socket.
   *
   * @param events
   */
const trackClient = (...events) => {
  if (!socket) {
    return;
  }

  events.forEach((event) => {
    socket.emit('track', {
      id: event.id,
      type: event.type,
      system: event.system,
      uri: event.uri,
      domain: event.domain,
      email: event.email,
      phone: event.phone,
      customerUuid: event.customerUuid,
      data: event.data,
      date: event.createdAt,
      utm: event.utmParams,
      meta: {
        facebook: {
          clientId: getFbClientId(),
          clickId: getFbClickId(),
        },
        googleAnalytics: {
          clientId: getGaClientId(),
        },
        twitter: {
          clickId: getTwClickId(),
        },
      },
    });
  });
};

const getFbClientId = () => {
  const facebookClientId = /_fbp=(fb\.[0-2]\.\d+\.\d+)/.exec(
    window.document.cookie,
  );

  if (!(facebookClientId && facebookClientId[1])) {
    return null;
  }

  return facebookClientId[1];
};

const getFbClickId = () => {
  const facebookClickId = /_fbc=(fb\.[0-2]\.\d+\.\w+)/.exec(
    window.document.cookie,
  );

  if (!(facebookClickId && facebookClickId[1])) {
    return null;
  }

  return facebookClickId[1];
};

const getGaClientId = () => {
  const googleAnalyticsClientId = window.gaClientId;

  if (!googleAnalyticsClientId) {
    return null;
  }

  return googleAnalyticsClientId;
};

const getTwClickId = () => window.store.get('__clid');

window.tracking = {
  event,
  getFbClientId,
  getFbClickId,
  getGaClientId,
  getTwClickId,
  trackClient,
};
