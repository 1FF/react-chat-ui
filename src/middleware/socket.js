/* eslint-disable no-undef */
import { io } from 'socket.io-client';
import { config, events } from '@/config';
import { appendHistory, resetDownstreamItem, resetIsLoading, resetTextToParse, resetUpstreamItem, setDownstreamItem, setDownstreamMessage, setHistory, setIsLoading, setTextToParse, setUpstreamItem } from '@/store/slices/stream';
import { getQueryParam } from '@/utils';
import { extractOptionSet } from '@/utils/formatting';
import intent from '@/services/intentions';
import { setIsEmailFieldVisible, setIsPaymentButtonVisible } from '@/store/slices/intentions';
import { setTranslations } from '@/store/slices/config';

const chatMiddleware = store => next => {
  const socket = io.connect('https://chat-ws.test', config);

  socket.on('connect', () => {
    store.dispatch(setIsLoading());
    socket.emit(events.chatHistory, { user_id: localStorage.getItem('__cid') }); // Extract this from store meta slice and use the param
  });

  socket.on(events.chatHistory, (data) => {
    store.dispatch(resetIsLoading());
    const { config, meta } = store.getState();
    if (data.history.length) {
      const lastIdx = data.history.length - 1;
      data.history[lastIdx].isSpecial = checkForSpecialPhrases(data.history[lastIdx].content);

      if (data.history[lastIdx].content.includes(intent.type.email))store.dispatch(setIsEmailFieldVisible(true));

      if (data.history[lastIdx].content.includes(intent.type.payment)) {
        store.dispatch(setIsPaymentButtonVisible(true));
        const { config: freshConfig } = store.getState();
        data.history[lastIdx].content += meta.pd.displayPlanPrice + ' ' + freshConfig.translations.billingFrequencyTmsg;
        // this.track(standardEventTypes.addToCart);
        // this.track(customEventTypes.priceSeen);
      }

      store.dispatch(setHistory(data.history));
    } else {
      socket.emit(events.chat, {
        role: 'assistant',
        term: getQueryParam(window.location.search, 'utm_chat'),
        user_id: localStorage.getItem('__cid'),
        message: config.aiProfile.initialMessage
      });
      store.dispatch(setHistory([{ role: 'assistant', content: config.aiProfile.initialMessage }]));
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
      // this.track(standardEventTypes.addToCart);
      // this.track(customEventTypes.priceSeen);
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

  return action => {
    // here we listen for actions applied to the store and do stuff with the socket
    if (setUpstreamItem.match(action) && socket.connected) {
      const data = {
        term: getQueryParam(window.location.search, 'utm_chat'),
        user_id: localStorage.getItem('__cid'),
        role: 'user',
        message: action.payload,
      };
      store.dispatch(appendHistory(data));
      store.dispatch(setIsLoading());
      socket.emit(events.chat, data);
    }

    if (setIsPaymentButtonVisible.match(action)) {
      const { meta, config } = store.getState();
      const translations = {
        billingFrequencyTmsg: meta.pd.billingOptionType === 'one-time'
          ? config.translations.oneTimer
          : config.translations.subscriberBillingFrequency.replace('{1}', meta.pd.frequencyInMonths)
      };

      store.dispatch(setTranslations(translations));
    }

    next(action);
  };
};

const checkForSpecialPhrases = (string) => {
  const specialMessages = [intent.type.email, intent.type.payment];
  const specialRegex = specialMessages.map(keyword => new RegExp(`\\[?${keyword}\\]?`));
  return specialRegex.some(regex => string.match(regex));
};

export default chatMiddleware;
