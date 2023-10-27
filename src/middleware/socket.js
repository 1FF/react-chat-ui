/* eslint-disable no-undef */
import { io } from 'socket.io-client';
import { config as socketConfig, events, roles } from '@/config';
import { appendHistory, appendUnsent,
  resetIncoming, resetIsLoading,
  resetError, resetTextToParse, resetUnsent,
  resetOutgoing, setIncoming, addIncomingChunk,
  setHistory, setIsLoading,
  setShouldSendUnsent, setError, setTextToParse,
  setOutgoing } from '@/store/slices/chat';
import { getQueryParam } from '@/utils';
import { constructLink, extractOptionSet } from '@/utils/formatting';
import intent from '@/services/intentions';
import { setIsEmailFormVisible, setIsPaymentButtonVisible, setLink, setResponseFormVisibility } from '@/store/slices/intentions';
import { setConfig, setConnectedToSocket, setTranslations } from '@/store/slices/config';
import { track } from '@/plugins/socketio';
import { baseEvents, customEvents } from '@/config/analytics';

let socket;

const chatMiddleware = store => next => action => {
  const { meta, config, chat, intentions } = store.getState();
  if (setOutgoing.match(action)) {
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
    console.log('emit-chat', { connected: socket.connected, socketQueue: socket.sendBuffer });

    if (isFirstUserMessage(chat.history)) {
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

  if (setShouldSendUnsent.match(action) && action.payload && chat.unsent.length) {
    socket.emit(events.chat, {
      role: roles.user,
      message: chat.unsent.join('\n'),
      term: getQueryParam(window.location.search, 'utm_chat'),
      user_id: meta.cid,
    });
    console.log('emit-chat', { connected: socket.connected, socketQueue: socket.sendBuffer });
    store.dispatch(setIsLoading());
  }

  const hasNoUserMessages = !chat.history.some(item => item.role === roles.user);
  const lastMessage = chat.history[chat.history.length - 1];
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
        email: intentions.email.current
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
      email: intentions.email.current
    });
  }

  if (setHistory.match(action)) {
    const { intentions } = store.getState();
    store.dispatch(setResponseFormVisibility(!intentions.link.isVisible && !intentions.email.isFormVisible && !intentions.payment.isFormVisible && extractOptionSet(action.payload[action.payload.length - 1].content).options.length === 0));
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

  socket.on(events.chatHistory, ({ history, errors }) => {
    store.dispatch(resetIsLoading());
    const { config, meta, chat } = store.getState();

    if (errors.length && !chat.error) {
      store.dispatch(setError(errors[0]));
    }

    if (history.length) {
      const lastIdx = history.length - 1;
      const link = constructLink(history[lastIdx].content);

      if (link) {
        store.dispatch(setLink({
          isVisible: true,
          href: link,
          text: config.translations.ctaTextContent
        }));
      }

      history[lastIdx].isSpecial = checkForSpecialPhrases(history[lastIdx].content);

      if (history[lastIdx].content.includes(intent.type.email)) store.dispatch(setIsEmailFormVisible(true));

      if (history[lastIdx].content.includes(intent.type.payment)) {
        store.dispatch(setIsPaymentButtonVisible(true));
        history[lastIdx].content += meta.pd.displayPlanPrice + ' ' + config.translations.billingFrequencyTmsg;
      }

      store.dispatch(setHistory(history));
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
    store.dispatch(resetOutgoing());
    store.dispatch(setIncoming(''));
    store.dispatch(resetUnsent());
    store.dispatch(resetError());
  });

  socket.on(events.streamData, ({ chunk, messages, errors }) => {
    const { chat, meta, config } = store.getState();
    const { textToParse, incoming } = chat;
    const link = constructLink(textToParse, meta.cid) || constructLink(incoming.content, meta.cid);

    if (messages.length > chat.history.length) {
      store.dispatch(setHistory(messages));
    }

    if (errors.length && !chat.error) {
      store.dispatch(setError(errors[0]));
    }

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
      store.dispatch(setIncoming(incoming.content + meta.pd.displayPlanPrice + ' ' + config.translations.billingFrequencyTmsg));
    }

    if (chunk.includes('[')) {
      store.dispatch(setTextToParse(chunk));
      return;
    }

    if (chunk.includes(']') || textToParse) {
      store.dispatch(setTextToParse(chunk));
      return;
    }

    store.dispatch(addIncomingChunk({ chunk }));
  });

  socket.on(events.streamEnd, () => {
    const { chat, intentions } = store.getState();
    const { options } = extractOptionSet(chat.textToParse);
    const data = {
      ...store.getState().chat.incoming,
      options
    };

    store.dispatch(appendHistory(data));
    store.dispatch(resetIncoming());
    store.dispatch(resetTextToParse());
    store.dispatch(setResponseFormVisibility(!intentions.link.isVisible && !intentions.email.isFormVisible && !intentions.payment.isFormVisible && options.length === 0));
  });

  socket.on(events.streamError, () => {
    const { config } = store.getState();
    store.dispatch(resetIsLoading());
    store.dispatch(setError(config.translations.error));
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
