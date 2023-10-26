/* eslint-disable no-undef */
import { io } from 'socket.io-client';
import { config as socketConfig, events, roles } from '@/config';
import { appendHistory, appendUnsent,
  resetDownstreamItem, resetIsLoading,
  resetTextToParse, resetUnsent,
  resetUpstreamItem, setDownstreamItem, setDownstreamMessage,
  setHistory, setIsLoading,
  setShouldSendUnsent, setTextToParse,
  setUpstreamItem } from '@/store/slices/stream';
import { getQueryParam } from '@/utils';
import { constructLink, extractOptionSet } from '@/utils/formatting';
import intent from '@/services/intentions';
import { setIsEmailFormVisible, setIsPaymentButtonVisible, setLink, setResponseFormVisibility } from '@/store/slices/intentions';
import { setConfig, setConnectedToSocket, setTranslations } from '@/store/slices/config';
import { track } from '@/plugins/socketio';
import { baseEvents, customEvents } from '@/config/analytics';

let socket;

const chatMiddleware = store => next => action => {
  const { meta, config, stream, intentions } = store.getState();
  if (setUpstreamItem.match(action)) {
    store.dispatch(appendHistory({
      role: roles.user,
      content: action.payload,
    }));

    store.dispatch(setIsLoading());

    socket.emit(events.chat, {
      role: roles.user,
      message: action.payload,
      term: getQueryParam(window.location.search, 'utm_chat'),
      user_id: meta.cid,
    });

    if (isFirstUserMessage(stream.history)) {
      track({
        eventType: customEvents.firstMessage,
        systemType: meta.systemType,
        utmParams: meta.marketing.lastUtmParams,
        customerUuid: meta.cid
      });
    }
  }

  if (appendUnsent.match(action) && action.payload) {
    store.dispatch(appendHistory({ role: roles.user, content: action.payload }));
  }

  if (setShouldSendUnsent.match(action) && action.payload && stream.unsent.length) {
    socket.emit(events.chat, {
      role: roles.user,
      message: stream.unsent.join('\n'),
      term: getQueryParam(window.location.search, 'utm_chat'),
      user_id: meta.cid,
    });
    store.dispatch(setIsLoading());
    store.dispatch(resetUnsent());
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

  if (setIsEmailFormVisible.match(action) && action.payload) {
    track({
      eventType: customEvents.emailField,
      systemType: meta.systemType,
      utmParams: meta.marketing.lastUtmParams,
      customerUuid: meta.cid,
      email: intentions.email.currentEmail
    });
  }

  if (setHistory.match(action)) {
    const { intentions } = store.getState();
    store.dispatch(setResponseFormVisibility(!intentions.link.isVisible && !intentions.email.isFormVisible && !intentions.payment.isPaymentFormVisible && extractOptionSet(action.payload[action.payload.length - 1].content).options.length === 0));
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
      const link = constructLink(data.history[lastIdx].content);

      if (link) {
        store.dispatch(setLink({
          isVisible: true,
          href: link,
          text: config.translations.ctaTextContent
        }));
      }

      data.history[lastIdx].isSpecial = checkForSpecialPhrases(data.history[lastIdx].content);

      if (data.history[lastIdx].content.includes(intent.type.email)) store.dispatch(setIsEmailFormVisible(true));

      if (data.history[lastIdx].content.includes(intent.type.payment)) {
        store.dispatch(setIsPaymentButtonVisible(true));
        data.history[lastIdx].content += meta.pd.displayPlanPrice + ' ' + config.translations.billingFrequencyTmsg;
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
    const { stream, meta, config } = store.getState();
    const { textToParse, downstreamQueue } = stream;
    const link = constructLink(textToParse) || constructLink(downstreamQueue.content);

    if (link) {
      store.dispatch(setLink({
        isVisible: true,
        href: link,
        text: config.translations.ctaTextContent
      }));
    }

    if (textToParse.includes(intent.type.email)) {
      store.dispatch(resetTextToParse());
      store.dispatch(setIsEmailFormVisible(true));
    }

    if (textToParse.includes(intent.type.payment)) {
      store.dispatch(resetTextToParse());
      store.dispatch(setIsPaymentButtonVisible(true));
      const { config } = store.getState();
      store.dispatch(setDownstreamItem(downstreamQueue.content + meta.pd.displayPlanPrice + ' ' + config.translations.billingFrequencyTmsg));
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
    const { stream, intentions } = store.getState();
    const { options } = extractOptionSet(stream.textToParse);
    const data = {
      ...store.getState().stream.downstreamQueue,
      options
    };

    store.dispatch(appendHistory(data));
    store.dispatch(resetDownstreamItem());
    store.dispatch(resetTextToParse());
    store.dispatch(setResponseFormVisibility(!intentions.link.isVisible && !intentions.email.isFormVisible && !intentions.payment.isPaymentFormVisible && options.length === 0));
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
