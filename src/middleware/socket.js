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
  updateResendStatus,
  resendMessage,
  setLastQuestionId,
  showResendStatus,
  pushQueue,
  removeFromQueue,
  setQueuedId,
} from '@/store/slices/chat';
import { checkForSpecialPhrases, getQueryParam, isExpired } from '@/utils';
import { constructLink, extractOptionSet } from '@/utils/formatting';
import intent from '@/services/intentions';
import { setIsEmailFormVisible, setIsPaymentButtonVisible, setLink, setResponseFormVisibility } from '@/store/slices/intentions';
import { setConfig } from '@/store/slices/config';
import { track } from '@/services/tracking';
import { baseEvents, customEvents } from '@/config/analytics';
import { CHAT_SEEN_KEY } from '@/config/env';
import { setRegion } from '@/store/slices/meta';

const specialMessages = [intent.type.email, intent.type.payment];
let socket;

const chatMiddleware = store => next => action => {
  const { meta, chat, intentions } = store.getState();

  const onError = () => {
    const { config } = store.getState();
    store.dispatch(resetIsLoading());
    store.dispatch(setError(config.translations.error));
  };

  const dispatchRetry = () => {
    store.dispatch(showResendStatus());
    onError();
  };

  const handleMessageSending = (data) => {
    if (data.role === roles.user) {
      store.dispatch(setIsLoading());
    }

    if (socket && socket.connected && data.message.trim() !== '') {
      socket.volatile.emit(events.chat, data, withTimeout(dispatchRetry));
      store.dispatch(resetError());
      return;
    }

    dispatchRetry();
  };

  const handleMessageResending = (data) => {
    store.dispatch(updateResendStatus({ groupId: data.groupId, resend: false, sent: true }));
    store.dispatch(setIsLoading());
    store.dispatch(pushQueue(data));

    const onResendError = () => {
      const { config } = store.getState();
      store.dispatch(removeFromQueue(data));
      store.dispatch(updateResendStatus({ groupId: data.groupId, resend: true, sent: false }));
      store.dispatch(resetIsLoading());
      store.dispatch(setError(config.translations.error));
    };

    const message = data.groupId ? chat.history.filter(item => item.groupId === data.groupId).map(item => item.content).join('\n') : data.content;
    if (socket && socket.connected && message.trim() !== '') {
      socket.volatile.emit(
        events.chat,
        { role: roles.user,
          message,
          term: getQueryParam(window.location.search, 'utm_chat'),
          user_id: meta.cid,
          region: meta.region,
        },
        withTimeout(onResendError)
      );
      store.dispatch(resetError());
    } else {
      onResendError();
    }
  };

  if (setOutgoing.match(action)) {
    store.dispatch(appendHistory({
      role: roles.user,
      content: action.payload,
    }));

    handleMessageSending({
      role: roles.user,
      message: action.payload,
      term: getQueryParam(window.location.search, 'utm_chat'),
      user_id: meta.cid,
      region: meta.region,
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
    const lastMessage = chat.history
      .filter(message => message.role === roles.user && message.groupId === chat.lastGroupId)
      .map(message => message.content).join('\n');
    if (lastMessage.trim() !== '') {
      handleMessageSending({
        role: roles.user,
        message: lastMessage,
        term: getQueryParam(window.location.search, 'utm_chat'),
        user_id: meta.cid,
        region: meta.region,
      });
    }
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

  if (setIsPaymentButtonVisible.match(action) && action.payload === true) {
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

  socket.on(events.connect, () => {
    const { meta } = store.getState();
    socket.sendBuffer = [];
    socket.emit(events.chatHistory, { user_id: meta.cid, region: meta.region });
    store.dispatch(setConnected(true));
  });

  socket.on(events.chatHistory, ({ history, errors, region }) => {
    store.dispatch(resetIsLoading());
    store.dispatch(resetIncoming());
    store.dispatch(setRegion(region));

    const { config, meta, chat } = store.getState();

    if (chat.error) return;

    if (errors.length) {
      store.dispatch(setError(errors[0]));
      return;
    }

    if (history.length) {
      const lastMessage = history[history.length - 1];
      updateForAnySpecialMessage({ lastMessage, store });
      store.dispatch(setHistory(history));
    } else {
      store.dispatch(setHistory([{ role: roles.assistant, content: config.aiProfile.initialMessage, time: new Date() }]));
      handleMessageSending({
        role: roles.assistant,
        term: getQueryParam(window.location.search, 'utm_chat'),
        user_id: meta.cid,
        message: config.aiProfile.initialMessage,
        region: meta.region,
      });
    }
  });

  socket.on(events.streamStart, () => {
    store.dispatch(resetIsLoading());
    store.dispatch(resetOutgoing());
    store.dispatch(setIncoming());
    store.dispatch(resetError());
  });

  socket.on(events.streamData, ({ chunk, errors, question_id, answer_id }) => {
    const { chat, config } = store.getState();
    const { textToParse, incoming } = chat;
    const link = constructLink(textToParse) || constructLink(incoming?.content) || constructLink(chunk);

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

    store.dispatch(addIncomingChunk({ chunk, id: answer_id, question_id }));
  });

  socket.on(events.streamEnd, () => {
    const { chat, intentions } = store.getState();
    const { content, options } = extractOptionSet(chat.textToParse);
    const isSpecial = options.some(item => checkForSpecialPhrases(item.value, specialMessages));
    const queued = chat.queue.length && chat.queue[chat.queue.length - 1];
    store.dispatch(appendHistory({
      ...chat.incoming,
      content: chat.incoming.content + content,
      options,
      isSpecial
    }));

    if (queued) {
      store.dispatch(setQueuedId({ ...queued, id: chat.incoming.question_id }));
      store.dispatch(removeFromQueue(queued));
    } else {
      store.dispatch(setLastQuestionId(chat.incoming.question_id));
    }

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

const updateForAnySpecialMessage = ({ lastMessage, store }) => {
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
