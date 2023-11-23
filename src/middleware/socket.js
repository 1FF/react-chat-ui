import { io } from 'socket.io-client';
import { config as socketConfig, events, roles } from '@/config';
import {
  appendHistory,
  resetIncoming, resetIsLoading,
  resetError, resetTextToParse,
  resetOutgoing, setIncoming, addIncomingChunk,
  setHistory, setIsLoading,
  setTypingTimeoutExpired, setError,
  setOutgoing, setConnected,
  setClosed, setTextToParse,
  getLastUserMessage,
  updateMessageStatus,
  resendMessage,
} from '@/store/slices/chat';
import { bsonId, checkForSpecialPhrases, getQueryParam, isExpired } from '@/utils';
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

  const onError = () => {
    const { config } = store.getState();
    const lastMessage = getLastUserMessage(store.getState());
    if (lastMessage) {
      store.dispatch(updateMessageStatus({ id: lastMessage.id, groupId: lastMessage.groupId, resend: true, sent: false }));
      store.dispatch(resetIsLoading());
      store.dispatch(setError(config.translations.error));
    }
  };

  const handleMessageSending = (data) => {
    if (data.role === roles.user) {
      store.dispatch(setIsLoading());
    }

    if (socket && socket.connected) {
      // for the purpose of acknowledgement the ack part when accepting event must be executed
      // so that the timeout does not fire this will mean that the server is okay;
      socket.volatile.emit(events.chat, data, withTimeout(onError));
      return;
    }

    onError();
  };

  const handleMessageResending = (data) => {
    store.dispatch(updateMessageStatus({ id: data.id, groupId: data.groupId, resend: false, sent: true }));
    store.dispatch(setIsLoading());

    const onResendError = () => {
      const { config } = store.getState();
      store.dispatch(updateMessageStatus({ id: data.id, groupId: data.groupId, resend: true, sent: false }));
      store.dispatch(resetIsLoading());
      store.dispatch(setError(config.translations.error));
    };

    if (socket && socket.connected) {
      // for the purpose of acknowledgement the ack part when accepting event must be executed
      // so that the timeout does not fire this will mean that the server is okay;
      socket.volatile.emit(events.chat, {
        role: roles.user,
        message: data.groupId ? chat.history.filter(item => item.groupId === data.groupId).map(item => item.content).join('\n') : data.content,
        term: getQueryParam(window.location.search, 'utm_chat'),
        user_id: meta.cid,
      }, withTimeout(onResendError));
    } else {
      onResendError();
    }
  };

  if (setOutgoing.match(action)) {
    store.dispatch(appendHistory({
      role: roles.user,
      content: action.payload,
      id: bsonId(),
    }));

    handleMessageSending({
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

  if (setTypingTimeoutExpired.match(action) && action.payload) {
    handleMessageSending({
      role: roles.user,
      message: chat.history
        .filter(message => message.role === roles.user && message.groupId === chat.lastGroupId)
        .map(message => message.content).join('\n'),
      term: getQueryParam(window.location.search, 'utm_chat'),
      user_id: meta.cid
    });
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

  if (resendMessage.match(action)) {
    handleMessageResending(action.payload);
  }

  if (!setConfig.match(action)) {
    return next(action);
  }

  store.dispatch(setIsLoading());

  socket = io.connect(action.payload.chatUrl, { query: 'cid=' + meta.cid, ...socketConfig });

  socket.on('connect', () => {
    const { meta } = store.getState();
    socket.sendBuffer = [];
    socket.emit(events.chatHistory, { user_id: meta.cid });
    store.dispatch(setConnected(true));
  });

  socket.on(events.chatHistory, ({ history, errors }) => {
    store.dispatch(resetIsLoading());
    const { config, meta, chat } = store.getState();

    if (chat.error) return;

    if (errors.length) {
      store.dispatch(setError(errors[0]));
      return;
    }

    if (history.length) {
      const lastMessage = history[history.length - 1];
      updateContent({ lastMessage, store });
      store.dispatch(setHistory(history));
    } else {
      handleMessageSending({
        role: roles.assistant,
        term: getQueryParam(window.location.search, 'utm_chat'),
        user_id: meta.cid,
        message: config.aiProfile.initialMessage
      });
      store.dispatch(setHistory([{ role: roles.assistant, content: config.aiProfile.initialMessage, time: new Date(), id: bsonId() }]));
    }
  });

  socket.on(events.streamStart, () => {
    store.dispatch(resetIsLoading());
    store.dispatch(resetOutgoing());
    store.dispatch(setIncoming());
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

  socket.on(events.streamData, ({ chunk, errors, id }) => {
    const { chat, config } = store.getState();
    const { textToParse, incoming } = chat;
    const link = constructLink(textToParse) || constructLink(incoming.content) || constructLink(chunk);

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

    store.dispatch(addIncomingChunk({ chunk, id }));
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

const withTimeout = (onTimeout, timeout = 5000) => {
  let called = false;
  const timer = setTimeout(() => {
    if (called) return;
    called = true;
    onTimeout();
  }, timeout);

  // this part is executed by the server according to socket io docs
  return () => {
    if (called) return;
    called = true;
    clearTimeout(timer);
  };
};

export default chatMiddleware;
