import { io } from 'socket.io-client';
import { config as socketConfig, events, roles } from '@/config';
import {
  appendHistory, appendUnsent,
  resetIncoming, resetIsLoading,
  resetError, resetTextToParse, resetUnsent,
  resetOutgoing, setIncoming, addIncomingChunk,
  setHistory, setIsLoading,
  setShouldSendUnsent, setError, setTextToParse,
  setOutgoing, setConnected, setClosed
} from '@/store/slices/chat';
import { checkForSpecialPhrases, getQueryParam, isExpired } from '@/utils';
import { constructLink, extractOptionSet } from '@/utils/formatting';
import intent from '@/services/intentions';
import { setIsEmailFormVisible, setIsPaymentButtonVisible, setLink, setResponseFormVisibility } from '@/store/slices/intentions';
import { setConfig } from '@/store/slices/config';
import { track } from '@/services/tracking';
import { baseEvents, customEvents } from '@/config/analytics';
import { CHAT_SEEN_KEY } from '@/config/env';

const specialMessages = [intent.type.email, intent.type.payment];
let socket;

const chatMiddleware = store => next => action => {
  const { meta, chat, intentions } = store.getState();
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

    if (isFirstUserMessage(chat.history)) {
      track({
        eventType: customEvents.firstMessage,
        systemType: meta.systemType,
        utmParams: meta.marketing.lastUtmParams,
        customerUuid: meta.cid
      });
    }
  }

  if (setTextToParse.match(action)) {
    const { textToParse, incoming } = chat;
    const currentText = textToParse + action.payload;
    if (currentText.includes(intent.type.email)) {
      store.dispatch(setIsEmailFormVisible(true));
    }

    if (currentText.includes(intent.type.payment)) {
      store.dispatch(setIsPaymentButtonVisible(true));
      store.dispatch(setIncoming(incoming.content + meta.pd.displayPlanPrice + ' ' + meta.pd.billingFrequencyTmsg));
    }
  }

  if (setClosed.match(action)) {
    document.querySelector('#chatbot-container').remove();
    document.body.classList.remove('scroll-stop');
    socket.close();
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
    store.dispatch(resetUnsent());
    store.dispatch(setIsLoading());
  }

  const hasNoUserMessages = !chat.history.some(item => item.role === roles.user);
  const lastMessage = chat.history[chat.history.length - 1];
  if (hasNoUserMessages && appendHistory.match(action) && action.payload.role === roles.user && lastMessage.options.length) {
    const buttonSequence = lastMessage.options.findIndex((item) => item.value === action.payload.content) + 1;
    track({
      eventType: customEvents.buttonClick + buttonSequence,
      systemType: meta.systemType,
      utmParams: meta.marketing.lastUtmParams,
      customerUuid: meta.cid,
    });
  }

  if (setIsPaymentButtonVisible.match(action)) {
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
    store.dispatch(setResponseFormVisibility({ intentions, options: extractOptionSet(action.payload[action.payload.length - 1].content).options }));
  }

  if (!setConfig.match(action)) {
    return next(action);
  }

  store.dispatch(setIsLoading());

  socket = io.connect(action.payload.chatUrl, { query: 'cid=' + meta.cid, ...socketConfig });

  socket.on('connect', () => {
    const { meta } = store.getState();
    socket.emit(events.chatHistory, { user_id: meta.cid });
    store.dispatch(setConnected(true));
  });

  socket.on(events.chatHistory, ({ history, errors }) => {
    store.dispatch(resetIsLoading());
    const { config, meta, chat } = store.getState();

    if (errors.length && !chat.error) {
      store.dispatch(setError(errors[0]));
    }

    if (history.length) {
      const lastMessage = history[history.length - 1];
      updateContent({ lastMessage, store });
      store.dispatch(setHistory(history));
    } else {
      socket.emit(events.chat, {
        role: roles.assistant,
        term: getQueryParam(window.location.search, 'utm_chat'),
        user_id: meta.cid,
        message: config.aiProfile.initialMessage
      });
      store.dispatch(setHistory([{ role: roles.assistant, content: config.aiProfile.initialMessage, time: new Date() }]));
    }
  });

  socket.on(events.streamStart, () => {
    store.dispatch(resetIsLoading());
    store.dispatch(resetOutgoing());
    store.dispatch(setIncoming(''));
    store.dispatch(resetError());
  });

  socket.on(`${events.chat}-${meta.cid}`, (data) => {
    const { options, content } = extractOptionSet(data.message);
    const isSpecial = checkForSpecialPhrases(data.message, specialMessages);
    updateContent({ lastMessage: { content: data.message }, store });
    const { intentions } = store.getState();

    store.dispatch(resetIsLoading());
    store.dispatch(resetError());
    store.dispatch(appendHistory({ content, options, role: roles.assistant, isSpecial }));
    store.dispatch(setResponseFormVisibility({ intentions, options }));
  });

  socket.on(events.streamData, ({ chunk, messages, errors }) => {
    const { chat, config } = store.getState();
    const { textToParse, incoming } = chat;
    const link = constructLink(textToParse) || constructLink(incoming.content) || constructLink(chunk);

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
        text: config.translations.mealButton
      }));
      store.dispatch(setResponseFormVisibility({ isFormVisible: false }));
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
    const { content, options } = extractOptionSet(chat.textToParse);
    const isSpecial = options.some(item => checkForSpecialPhrases(item.value, specialMessages));
    store.dispatch(appendHistory({
      ...chat.incoming,
      content: chat.incoming.content + content,
      options,
      isSpecial
    }));
    store.dispatch(resetIncoming());
    store.dispatch(resetTextToParse());
    store.dispatch(setResponseFormVisibility({ intentions, options }));
  });

  const onError = () => {
    const { config } = store.getState();
    store.dispatch(resetIsLoading());
    store.dispatch(setError(config.translations.error));
  };

  socket.on(events.streamError, onError);
  socket.on(events.error, onError);

  socket.on(events.disconnect, () => {
    store.dispatch(setConnected(false));
  });

  next(action);
};

const mustHideChat = ({ time, role }) => {
  let hasExpired;

  if (role === roles.user && time) {
    hasExpired = isExpired(time);
  }

  if (hasExpired) {
    localStorage.removeItem(CHAT_SEEN_KEY);
  }

  const chatSeen = localStorage.getItem(CHAT_SEEN_KEY);

  return chatSeen === 'true';
};

const isFirstUserMessage = (messages) => messages.filter(obj => obj.role === roles.user).length === 1;

const updateContent = ({ lastMessage, store }) => {
  const { meta, config } = store.getState();
  const link = constructLink(lastMessage.content);

  if (mustHideChat(lastMessage)) {
    store.dispatch(setClosed(true));
  }

  if (link) {
    store.dispatch(setLink({
      isVisible: true,
      href: link,
      text: config.translations.mealButton
    }));
  }

  lastMessage.isSpecial = checkForSpecialPhrases(lastMessage.content, specialMessages);

  if (lastMessage.content.includes(intent.type.email)) store.dispatch(setIsEmailFormVisible(true));

  if (lastMessage.content.includes(intent.type.payment)) {
    store.dispatch(setIsPaymentButtonVisible(true));
    lastMessage.content += meta.pd.displayPlanPrice + ' ' + meta.pd.billingFrequencyTmsg;
  }
};

export default chatMiddleware;
