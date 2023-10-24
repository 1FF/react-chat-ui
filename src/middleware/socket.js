/* eslint-disable no-undef */
import { io } from 'socket.io-client';
import { config as socketConfig, events, roles } from '@/config';
import { appendHistory, resetDownstreamItem, resetIsLoading, resetTextToParse, resetUpstreamItem, setDownstreamItem, setDownstreamMessage, setHistory, setIsLoading, setTextToParse, setUpstreamItem } from '@/store/slices/stream';
import { getQueryParam } from '@/utils';
import { extractOptionSet } from '@/utils/formatting';
import intent from '@/services/intentions';
import { setIsEmailFieldVisible, setIsPaymentButtonVisible } from '@/store/slices/intentions';
import { setConfig, setConnectedToSocket, setTranslations } from '@/store/slices/config';
import { track } from '@/plugins/socketio';
import { baseEvents, customEvents } from '@/config/analytics';

let socket;

const chatMiddleware = store => next => action => {
  // here we listen for actions applied to the store and do stuff with the socket
  const { meta, config, stream, intentions } = store.getState();
  if (setUpstreamItem.match(action)) {
    const data = {
      term: getQueryParam(window.location.search, 'utm_chat'),
      user_id: meta.cid,
      role: roles.user,
      message: action.payload,
    };
    store.dispatch(appendHistory(data));
    store.dispatch(setIsLoading());
    socket.emit(events.chat, data);

    if (isFirstUserMessage(stream.history)) {
      track({
        eventType: customEvents.firstMessage,
        systemType: meta.systemType,
        utmParams: meta.marketing.lastUtmParams,
        customerUuid: meta.cid
      });
    }
  }

  const hasNoUserMessages = !stream.history.some(item => item.role === roles.user);
  const lastMessage = stream.history[stream.history.length - 1];
  if (hasNoUserMessages && appendHistory.match(action) && action.payload.role === roles.user && lastMessage.options.length) {
    const buttonSequence = lastMessage.options.findIndex((item) => item.value === action.payload.message) + 1;
    track({
      eventType: customEvents.buttonClick + buttonSequence,
      systemType: meta.systemType,
      utmParams: meta.marketing.lastUtmParams,
      customerUuid: meta.cid,
    });
  }

  if (setIsPaymentButtonVisible.match(action)) {
    const translations = {
      billingFrequencyTmsg: meta.pd.billingOptionType === 'one-time'
        ? config.translations.oneTimer
        : config.translations.subscriberBillingFrequency.replace('{1}', meta.pd.frequencyInMonths)
    };

    store.dispatch(setTranslations(translations));

    if (action.payload === true) {
      const data = {
        eventType: null,
        systemType: meta.systemType,
        utmParams: meta.marketing.lastUtmParams,
        customerUuid: meta.cid,
        email: intentions.email.currentEmail
      };

      data.eventType = baseEvents.addToCart;
      track(data);

      data.eventType = customEvents.priceSeen;
      track(data);
    }
  }

  if (setIsEmailFieldVisible.match(action) && action.payload) {
    track({
      eventType: customEvents.emailField,
      systemType: meta.systemType,
      utmParams: meta.marketing.lastUtmParams,
      customerUuid: meta.cid,
      email: intentions.email.currentEmail
    });
  }

  if (!setConfig.match(action)) {
    return next(action);
  }

  socket = io.connect(action.payload.chatUrl, socketConfig);

  socket.on('connect', () => {
    const { meta } = store.getState();
    socket.emit(events.chatHistory, { user_id: meta.cid });
    store.dispatch(setIsLoading());
    store.dispatch(setConnectedToSocket());
  });

  socket.on(events.chatHistory, (data) => {
    store.dispatch(resetIsLoading());
    const { config, meta } = store.getState();
    if (data.history.length) {
      const lastIdx = data.history.length - 1;
      data.history[lastIdx].isSpecial = checkForSpecialPhrases(data.history[lastIdx].content);

      if (data.history[lastIdx].content.includes(intent.type.email)) store.dispatch(setIsEmailFieldVisible(true));

      if (data.history[lastIdx].content.includes(intent.type.payment)) {
        store.dispatch(setIsPaymentButtonVisible(true));
        const { config: freshConfig } = store.getState();
        data.history[lastIdx].content += meta.pd.displayPlanPrice + ' ' + freshConfig.translations.billingFrequencyTmsg;
      }

      store.dispatch(setHistory(data.history));
    } else {
      socket.emit(events.chat, {
        role: roles.assistant,
        term: getQueryParam(window.location.search, 'utm_chat'),
        user_id: meta.cid,
        message: config.aiProfile.initialMessage
      });
      store.dispatch(setHistory([{ role: roles.assistant, content: config.aiProfile.initialMessage }]));
    }
  });

  socket.on(events.streamStart, () => {
    store.dispatch(resetIsLoading());
    store.dispatch(resetUpstreamItem());
    store.dispatch(setDownstreamItem(''));
  });

  socket.on(events.streamData, ({ chunk }) => {
    const { stream, meta } = store.getState();
    const { textToParse, downstreamQueue } = stream;

    if (textToParse.includes(intent.type.email)) {
      store.dispatch(resetTextToParse());
      store.dispatch(setIsEmailFieldVisible(true));
    }

    if (textToParse.includes(intent.type.payment)) {
      store.dispatch(resetTextToParse());
      store.dispatch(setIsPaymentButtonVisible(true));
      const { config } = store.getState();
      store.dispatch(setDownstreamItem(downstreamQueue.message + meta.pd.displayPlanPrice + ' ' + config.translations.billingFrequencyTmsg));
    }

    if (chunk.includes('[')) {
      store.dispatch(setTextToParse(chunk));
      return;
    }

    if (chunk.includes(']') || textToParse) {
      store.dispatch(setTextToParse(chunk));
      return;
    }

    store.dispatch(setDownstreamMessage({ chunk }));
  });

  socket.on(events.streamEnd, () => {
    const { options } = extractOptionSet(store.getState().stream.textToParse);
    const data = {
      ...store.getState().stream.downstreamQueue,
      options
    };

    store.dispatch(appendHistory(data));
    store.dispatch(resetDownstreamItem());
    store.dispatch(resetTextToParse());
  });

  socket.on(events.streamError, () => {
    store.dispatch(resetIsLoading());
    console.log('streamError');
  });

  next(action);
};

const checkForSpecialPhrases = (string) => {
  const specialMessages = [intent.type.email, intent.type.payment];
  const specialRegex = specialMessages.map(keyword => new RegExp(`\\[?${keyword}\\]?`));
  return specialRegex.some(regex => string.match(regex));
};

const isFirstUserMessage = (messages) => messages.filter(obj => obj.role === roles.user).length === 1;

export default chatMiddleware;
